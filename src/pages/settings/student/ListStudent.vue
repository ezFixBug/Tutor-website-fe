<template>
  <spinner :is_loading="is_loading" />
  <section class="cart-area section-padding" style="padding-top: 50px">
    <div class="container">
      <h1 class="fs-22 font-weight-semi-bold col-9 mb-5">
        Danh sách lời mời dạy
      </h1>
      <!-- end filter-bar -->
      <div class="table-responsive">
        <table class="table generic-table">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Tên học viên</th>
              <th scope="col">SĐT</th>
              <th scope="col">Email</th>
              <th scope="col">Tiêu đề lời mời</th>
              <th scope="col">Tình trạng</th>
            </tr>
          </thead>
          <tbody id="cart_body">
            <tr id="row" v-for="(offer, index) in offers" :key="offer.id">
              <td>{{ index + 1 }}</td>
              <td>
                <p>{{ offer && offer.user ? offer.user.full_name : "" }}</p>
              </td>
              <td>
                <p>{{ offer && offer.user ? offer.user.phone_number : "" }}</p>
              </td>
              <td>
                <p>{{ offer && offer.user ? offer.user.email : "" }}</p>
              </td>
              <td>
                {{ offer.title }}
              </td>
              <td>
                <p class="text-color">
                  {{ offer.offers[0].status_student_cd === 2 ? "Đã duyệt" : "Chưa duyệt" }}
                </p>
              </td>
              <td>
                <button
                  class="btn theme-btn"
                  v-show="
                    offer.offers[0] && offer.offers[0].status_student_cd === 1
                  "
                  @click="handleApprove(offer.offers[0].id, offer.user_id)"
                >
                  Duyệt
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- end container -->
  </section>
</template>
<script>
import $http from "@/services/httpService";
import get from "lodash/get";

import {
  database,
  ref,
  push,
  onValue,
  child,
  get as firebaseGet,
  set,
} from "@/services/firebaseService";
import { createToast } from "mosha-vue-toastify";
import $auth from "@/services/authService";

export default {
  data() {
    return {
      is_loading: false,
      offers: [],
    };
  },

  async created() {
    this.getDataSutents();
  },

  computed: {
    hasLogin() {
      return $auth.getUser;
    },
  },

  methods: {
    async getDataSutents() {
      this.is_loading = true;
      const res = await $http.get("/student/request");
      if (get(res, "data.result", false)) {
        this.offers = res.data.offers;
      }
      this.is_loading = false;
    },

    async handleApprove(offer_id, user_id) {
      this.is_loading = true;
      const params = {
        offer_id: offer_id,
      };
      const res = await $http.post("/student/request", params);
      if (get(res, "data.result", false)) {
        createToast("Vui lòng thanh toán!", {
          type: "success",
          timeout: 6000,
        });

        push(ref(database, "notifications"), {
          user_id: user_id,
          object_id: null,
          created_at: this.getDateTimeNow(),
          type_cd: 1,
          content: this.hasLogin.full_name + " đã duyệt yêu cầu dạy của bạn!",
          url: { name: "detail-tutor", params: { id: this.hasLogin.id } },
          is_read: false,
        });

        push(ref(database, "notifications"), {
          user_id: this.hasLogin.id,
          object_id: null,
          created_at: this.getDateTimeNow(),
          type_cd: 1,
          content: "Đã duyệt lời mời dạy thành công!",
          url: {
            path: "lich-su-giao-dich",
          },
          is_read: false,
        });

        this.$router.push({
          name: "request-payment",
          query: {
            payment_type: 1,
            offer_id: offer_id,
          },
        });
      }

      this.getDataSutents();
      this.is_loading = false;
    },

    formatDate(inputDate) {
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
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
