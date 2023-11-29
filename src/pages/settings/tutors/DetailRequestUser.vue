<template>
  <spinner :is_loading="is_loading" />
  <ContentDetailRequest :request="request" />

  <section class="team-member-area pb-100px">
    <div class="container">
      <h3 class="fs-22 font-weight-semi-bold pb-2">
        Danh sách gia sư đề nghị dạy
      </h3>
      <div class="row">
        <div class="col-lg-4 responsive-column-half" v-for="user in offers" :key="user.id">
          <div class="card card-item member-card text-center">
            <div class="card-image">
              <img class="card-img-top" style="height: 100px" :src="user.avatar" alt="team member" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <router-link :to="{ name: 'detail-tutor', params: { id: user.id } }">{{ user.first_name + " " +
                  user.last_name }}</router-link>
              </h5>
              <p class="card-text">Người hướng dẫn</p>
              <!-- end rating-wrap -->
              <router-link :to="{ name: 'detail-tutor', params: { id: user.id } }"
                class="btn theme-btn theme-btn-sm theme-btn-transparent mt-3 mr-1">Xem hồ sơ</router-link>
              <button class="btn theme-btn theme-btn-sm theme-btn-white mt-3 btn-apply"
                @click="handleApproveOffer(user.id)" v-if="user.offer_status_cd == '1'">
                Duyệt
              </button>
              <button v-else class="btn theme-btn theme-btn-sm theme-btn-white mt-3 btn-apply">
                Đã duyệt
              </button>
            </div>
          </div>
          <!-- end card -->
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script>
import ContentDetailRequest from "@/components/layouts/ContentDetailRequest.vue";
import $auth from "@/services/authService";
import $http from "@/services/httpService";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import { createToast } from "mosha-vue-toastify";

import {
  database,
  ref,
  push,
  onValue,
  child,
  get as firebaseGet,
  set,
} from "@/services/firebaseService";

export default {
  components: {
    ContentDetailRequest,
  },
  data() {
    return {
      request: {
        schedule: {
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
          Sunday: [],
        },
      },
      offers: [],
      is_loading: false,
    };
  },

  async created() {
    this.is_loading = true;
    this.getDataRequest();
    this.is_loading = false;
  },

  computed: {
    currentUser() {
      return $auth.getUser;
    },

    schedule() {
      return this.request.schedule;
    },

    tutor_id() {
      return this.$route.params.tutor_id;
    },
  },

  methods: {
    async getDataRequest() {
      const request_id = this.$route.params.request_id;

      const res = await $http.get("/detail-request/" + request_id);
      if (get(res, "data.result", false)) {
        const schedule = this.request.schedule;
        this.request = res.data.request;

        for (const day in this.request.schedule) {
          if (schedule.hasOwnProperty(day)) {
            schedule[day] = this.request.schedule[day];
          }
        }
        this.request.schedule = schedule;
      }

      const response = await $http.get("/offer-requests/" + request_id);
      if (get(response, "data.result", false)) {
        this.offers = response.data.users;
      }
    },

    async handleApproveOffer(user_id) {
      this.is_loading = true;
      this.offers.forEach((item) => {
        if (item.offer_status_cd == 2 && item.id !== user_id) {
          createToast("Bạn đã duyệt 1 yêu cầu đề nghị dạy!", {
            type: "warning",
            timeout: 6000,
          });
        }
      });

      const res = await $http.post(
        "/approve-offer/" + this.$route.params.request_id,
        {
          user_id: user_id
        }
      );
      console.log(res);
      if (get(res, "status", false) === 200) {
        createToast("Đã duyệt yêu cầu đề nghị dạy!", {
          type: "success",
          timeout: 6000,
        });
        this.getDataRequest();
      }

      push(ref(database, "notifications"), {
        user_id: user_id,
        object_id: null,
        created_at: this.getDateTimeNow(),
        type_cd: 1,
        content: this.currentUser.full_name + " đã duyệt đề nghị làm gia sư của bạn!",
        url: {
          name: "request-payment",
          query: {
            payment_type: 1,
            offer_id: res.data.id
          },
        },
        is_read: false,
      });

      this.is_loading = false;
    },
    getDateTimeNow() {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>