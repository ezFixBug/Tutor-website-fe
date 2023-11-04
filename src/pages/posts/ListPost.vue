<template>
  <BreadCrumb />
  <spinner :is_loading="is_loading" />
  <section class="blog-area section--padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="post in listPosts" :key="post.id">
          <div class="card card-item" style="height: 500px">
            <div class="card-image" style="margin: 0 !important; height: 240px">
              <router-link
                :to="{ name: 'detail-post', params: { id: post.id } }"
              >
                <img
                  :src="post.image"
                  alt="image"
                  class="card-img-top lazy"
                  style="height: 240px"
                />
              </router-link>
              <div class="course-badge-labels">
                <div class="course-badge">
                  {{ getDateCreated(post.created_at) }}
                </div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title" style="height: 50px">
                <router-link
                  :to="{ name: 'detail-post', params: { id: post.id } }"
                  >{{ post.title }}</router-link
                >
              </h5>
              <ul
                class="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2"
              >
                <li class="d-flex align-items-center">
                  Tác giả:
                  <router-link
                    class="ml-1"
                    :to="{ name: 'detail-tutor', params: { id: 1 } }"
                  >
                    {{ post.user.full_name }}
                  </router-link>
                </li>
              </ul>
              <ul
                class="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2"
              >
                <li class="d-flex align-items-center">
                  <a href="#"> {{ post.view }} Views</a>
                </li>
                <li class="d-flex align-items-center">
                  <a href="#"> {{ post.likes_count }} Likes</a>
                </li>
              </ul>
              <div
                class="d-flex justify-content-between align-items-center pt-3"
              >
                <router-link
                  :to="{ name: 'detail-post', params: { id: post.id } }"
                  class="btn theme-btn theme-btn-sm theme-btn-white"
                >
                  Chi tiết <i class="fa-solid fa-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <pagination :pagination="pagination" />
    </div>
  </section>
</template>
<script>
import BreadCrumb from "@/components/layouts/BreadCrum.vue";
import $http from "@/services/httpService";
import get from "lodash/get";

export default {
  components: {
    BreadCrumb,
  },

  async mounted() {
    this.getPosts(this.$route.params.type_cd);
  },

  beforeRouteUpdate(from, to, next) {
    this.getPosts(from.params.type_cd);
    next();
  },

  data() {
    return {
      listPosts: [],
      is_loading: false,
      pagination: {},
    };
  },

  methods: {
    async getPosts(type_cd) {
      this.is_loading = true;
      let params = this.$route.query;
      params.type_cd = type_cd;
      const res = await $http.get("/posts", params);
      if (get(res, "data.result", false)) {
        this.listPosts = res.data.posts;
        this.pagination = res.data.paginate;
      }

      this.is_loading = false;
    },

    getDateCreated(created_at) {
      const inputDate = created_at;
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },
  },

  watch: {
    $route: {
      handler: function () {
        this.getPosts(this.$route.params.type_cd);
      },
    },
  },
};
</script>
<style  lang="scss">
@import "./_style.scss";
</style>