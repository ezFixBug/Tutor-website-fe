<template>
  <spinner :is_loading="is_loading" />
  <ContentDetailRequest :request="request" />

  <section class="team-member-area pb-100px">
    <div class="container">
      <h3 class="fs-22 font-weight-semi-bold pb-2">
        Danh sách giá sư đề nghị dạy
      </h3>
      <div class="row">
        <div
          class="col-lg-4 responsive-column-half"
          v-for="user in offers"
          :key="user.id"
        >
          <div class="card card-item member-card text-center">
            <div class="card-image">
              <img
                class="card-img-top"
                style="height: 100px"
                :src="user.avatar"
                alt="team member"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <router-link
                  :to="{ name: 'detail-tutor', params: { id: user.id } }"
                  >{{ user.full_name }}</router-link
                >
              </h5>
              <p class="card-text">Người hướng dẫn</p>
              <div class="rating-wrap d-flex align-items-center py-2">
                <div class="review-stars" style="margin: 0 auto">
                  <span class="rating-number">0</span>

                  <span class="la la-star-o"></span>
                  <span class="la la-star-o"></span>
                  <span class="la la-star-o"></span>
                  <span class="la la-star-o"></span>
                  <span class="la la-star-o"></span>
                </div>
              </div>
              <!-- end rating-wrap -->
              <router-link
                :to="{ name: 'detail-tutor', params: { id: user.id } }"
                class="btn theme-btn theme-btn-sm theme-btn-transparent mt-3"
                >Xem hồ sơ</router-link
              >
              <button
                class="btn theme-btn theme-btn-sm theme-btn-white mt-3 btn-apply"
                id="btn-apply-620dad88-016e-4afd-5215-08dbcfb3222d"
                data-userid="620dad88-016e-4afd-5215-08dbcfb3222d"
                data-id="3027"
              >
                Duyệt
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
    this.is_loading = false;
  },
};
</script>