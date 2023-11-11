<template>
  <spinner :is_loading="is_loading" />
  <ContentDetailRequest :request="request" @getDataRequest="getDataRequest" />
</template>

<script>
import ContentDetailRequest from "@/components/layouts/ContentDetailRequest.vue";
import $http from "@/services/httpService";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
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
    };
  },

  async created() {
    this.getDataRequest();
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
  },
};
</script>