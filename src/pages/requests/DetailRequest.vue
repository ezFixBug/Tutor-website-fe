<template>
  <spinner :is_loading="is_loading" />
  <ContentDetailRequest :request="request" @getDataRequest="getDataRequest" />
</template>

<script>
import ContentDetailRequest from "@/components/layouts/ContentDetailRequest.vue";
import $http from "@/services/httpService";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import { createToast } from "mosha-vue-toastify";
import $auth from "@/services/authService";

export default {
  components: {
    ContentDetailRequest,
  },
  data() {
    return {
      is_loading: false,
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
      payment: null,
    };
  },

  async created() {
    this.getDataRequest();
    this.payment = this.$route.query;
    this.$route.query?.vnp_TransactionStatus == '00' || this.$route.query?.resultCode == '0' && this.saveDataPayment()
  },

  computed: {
    hasLogin() {
      return $auth.getUser;
    },
  },

  methods: {
    async getDataRequest() {
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
      this.is_loading = false;
    },

    async saveDataPayment() {
      createToast("Đã Thanh Toán Nhận Học Viên Thành Công!", {
        type: "success",
        timeout: 10000,
      })
      const request_id = this.$route.params.request_id;
      this.$router.push({ path: this.$route.path });
      this.getDataRequest();

      let params = {
        user_id: this.hasLogin.id,
        request_id: request_id,
        payment: this.payment,
        payment_type: 1
      };
      await $http.post("/payment/create", params);
    }
  },
};
</script>