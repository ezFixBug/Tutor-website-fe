<template>
  <spinner :is_loading="is_loading" />
  <section class="breadcrumb-area pt-10px pb-10px pattern-bg">
    <div class="container">
      <div class="breadcrumb-content">
        <div class="section-heading pb-3">
          <h2 class="section__title">{{ post.title }}</h2>
        </div>
        <ul
          class="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2"
        >
          <li class="d-flex align-items-center">
            Tác giả<router-link
              class="ml-2"
              :to="{
                name: 'detail-tutor',
                params: { id: user.id ?? 1 },
              }"
              >{{ user.full_name }}</router-link
            >
          </li>
          <li class="d-flex align-items-center">{{post_created}}</li>
          <li class="d-flex align-items-center">
            <a href="#comments" class="page-scroll">{{post.likes_count}}Likes</a>
          </li>
          <li class="d-flex align-items-center">{{post.view}} Lượt xem</li>
        </ul>
      </div>
      <!-- end breadcrumb-content -->
    </div>
    <!-- end container -->
  </section>

  <section class="blog-area pt-20px pb-50px">
    <div class="container" style="padding-left: 0px; padding-right: 0px">
      <div class="row">
        <div class="col-lg-12 mb-5">
          <div class="card card-item" style="max-height: none">
            <div class="card-body">
              <div class="form-group">
                <label class="label-text">Thể loại bài viết</label>
                <p class="card-text pb-3" v-if="post.type_cd === 1">
                  Tin tức - sự kiện
                </p>
                <p class="card-text pb-3" v-else>Kiến thức - thủ thuật</p>
              </div>

              <div class="mt-3">
                <img
                  :src="post.image"
                  alt="blog-img"
                  class="img-fluid rounded-rounded lazy mb-2"
                />
              </div>

              <label class="label-text fs-22">Nội dung</label>
              <div class="divider"><span></span></div>
              <p class="card-text pb-3"></p>
              <div v-html="post.content"></div>

              <div class="section-block"></div>

              <h3 class="fs-18 font-weight-semi-bold pt-3">Tags</h3>
              <div
                class="d-flex flex-wrap justify-content-between align-items-center pt-3"
              >
                <ul
                  class="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15"
                >
                  <li class="mr-2" v-for="tag in list_tags" :key="tag">
                    <a href="#" onclick="return false;">{{ tag.label }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col-lg-8 -->
        <div class="course-submit-btn-box pb-4">
          <router-link class="btn theme-btn" :to="{ name: 'my-posts' }"
            >Trở về</router-link
          >
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>
<script>
import $auth from "@/services/authService";
import $http from "@/services/httpService";

import get from "lodash/get";
import CONSTS from "@/Constants";
export default {
  async mounted() {
    this.is_loading = true;
    const post_id = this.$route.params.post_id;

    const res = await $http.get("/post/" + post_id);
    if (get(res, "data.result", false)) {
      this.post = res.data.post;
      this.user = get(this.post, "user", {});

      this.list_tags = CONSTS.CD_POST_TAGS.filter((tag) =>
        this.post.tags.includes(tag.id)
      );
    }
    this.is_loading = false;
  },

  data() {
    return {
      post: {},
      user: {},
      is_loading: false,
      list_tags: [],
    };
  },

  computed: {
    post_created() {
      const inputDate = this.post.created_at;
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },
  },
};
</script>
<style>
</style>