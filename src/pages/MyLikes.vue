<template>
  <spinner :is_loading="is_loading" />
  <BreadCrumb :type="3" :subject="subject" />
  <section class="cart-area section-padding">
    <div class="container">
      <div class="table-responsive">
        <table class="table generic-table">
          <thead>
            <tr>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Mô tả</th>
              <th scope="col">Loại</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="cart_body">
            <tr id="row_513" v-for="post in posts_liked" :key="post.id">
              <th scope="row">
                <div class="media media-card">
                  <router-link
                    :to="{ name: 'detail-post', params: { id: post.id } }"
                    class="media-img mr-0"
                  >
                    <img :src="post.image" alt="Cart image" />
                  </router-link>
                </div>
              </th>
              <td>
                <router-link
                  :to="{ name: 'detail-post', params: { id: post.id } }"
                  class="text-black font-weight-semi-bold"
                  >{{ post.title }}</router-link
                >
                <p class="fs-14 text-gray lh-20">
                  Tạo bởi
                  <router-link
                    :to="{ name: 'detail-tutor', params: { id: post.id } }"
                    class="text-color hover-underline"
                    >{{ post.user.full_name }}</router-link
                  >
                </p>
                <p class="card-text pt-1 fs-14 lh-22">
                  {{ post.description }}
                </p>
              </td>
              <td>
                <ul class="generic-list-item font-weight-semi-bold">
                  <li class="text-black lh-18">Bài viết</li>
                </ul>
              </td>
            </tr>
          </tbody>
          <div
            class="d-flex flex-wrap align-items-center justify-content-between pt-4 mb-3"
          >
            <router-link :to="{ name: 'posts' }" class="btn theme-btn mb-2"
              >Xem thêm bài viết</router-link
            >
          </div>

          <thead>
            <tr>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Mô tả</th>
              <th scope="col">Loại</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="cart_body">
            <tr id="row_513" v-for="course in courses_liked" :key="course.id">
              <th scope="row">
                <div class="media media-card">
                  <router-link
                    :to="{ name: 'detail-course', params: { id: course.id } }"
                    class="media-img mr-0"
                  >
                    <img :src="course.image" alt="Cart image" />
                  </router-link>
                </div>
              </th>
              <td>
                <router-link
                  :to="{ name: 'detail-course', params: { id: course.id } }"
                  class="text-black font-weight-semi-bold"
                  >{{ course.title }}</router-link
                >
                <p class="fs-14 text-gray lh-20">
                  Tạo bởi
                  <router-link
                    :to="{ name: 'detail-tutor', params: { id: course.id } }"
                    class="text-color hover-underline"
                    >{{ course.user.full_name }}</router-link
                  >
                </p>
                <p class="card-text pt-1 fs-14 lh-22">
                  {{ course.description }}
                </p>
              </td>
              <td>
                <ul class="generic-list-item font-weight-semi-bold">
                  <li class="text-black lh-18">Khóa học</li>
                </ul>
              </td>
            </tr>
          </tbody>
          <div
            class="d-flex flex-wrap align-items-center justify-content-between pt-4"
          >
            <router-link :to="{ name: 'courses' }" class="btn theme-btn mb-2"
              >Xem thêm khóa học</router-link
            >
          </div>
        </table>
      </div>
    </div>
    <!-- end container -->
  </section>
</template>
<script>
import get from "lodash/get";
import $http from "@/services/httpService";
import $auth from "@/services/authService";
export default {
  async created() {
    this.is_loading = true;
    const res = await $http.get("/liked/" + this.user.id);
    if (get(res, "data.results", false)) {
      this.posts_liked = res.data.results
        .map((item) => {
          if (item.post !== null) {
            return item.post;
          }
        })
        .filter((item) => item !== undefined);

      this.courses_liked = res.data.results
        .map((item) => {
          if (item.course !== null) {
            return item.course;
          }
        })
        .filter((item) => item !== undefined);
    }
    this.is_loading = false;
  },

  data() {
    return {
      is_loading: false,
      posts_liked: [],
      courses_liked: [],
    };
  },

  computed: {
    user() {
      return $auth.getUser;
    },
  },
};
</script>
