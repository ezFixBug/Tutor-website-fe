<template>
  <BreadCrumb />

  <section class="blog-area section--padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4" v-for="post in listPosts" :key="post.id">
          <div class="card card-item">
            <div class="card-image" style="margin: 0 !important">
              <a href="#" class="d-block">
                <img
                  :src="post.image"
                  alt="image"
                  class="card-img-top lazy"
                />
              </a>
              <div class="course-badge-labels">
                <div class="course-badge">{{ post.created_at }}</div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <a href="#">{{ post.title }}</a>
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
                    {{ post.author.name }}
                  </router-link>
                </li>
              </ul>
              <ul
                class="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2"
              >
                <li class="d-flex align-items-center">
                  <a href="#"> {{ post.views }} Views</a>
                </li>
                <li class="d-flex align-items-center">
                  <a href="#"> {{ post.likes }} Likes</a>
                </li>
              </ul>
              <div
                class="d-flex justify-content-between align-items-center pt-3"
              >
                <a href="#" class="btn theme-btn theme-btn-sm theme-btn-white">
                  Chi tiết <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BreadCrumb from "@/components/layouts/BreadCrum.vue";
export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      listPosts: [
        {
          id: 1,
          title:
            "This is title of post ",
          image:
            "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-19.jpg",
          author: {
            id: 1,
            name: "Le Thang",
          },
          views: 10,
          likes: 10,
          created_at: "2023-10-15",
        },
        {
          id: 2,
          title:
            "This is title of post ",
          image:
            "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-19.jpg",
          author: {
            id: 1,
            name: "Le Thang",
          },
          views: 10,
          likes: 10,
          created_at: "2023-10-15",
        },
        {
          id: 3,
          title:
            "This is title of post ",
          image:
            "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-19.jpg",
          author: {
            id: 1,
            name: "Le Thang",
          },
          views: 10,
          likes: 10,
          created_at: "2023-10-15",
        },
        {
          id: 4,
          title:
            "This is title of post ",
          image:
            "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-19.jpg",
          author: {
            id: 1,
            name: "Le Thang",
          },
          views: 10,
          likes: 10,
          created_at: "2023-10-15",
        },
        {
          id: 5,
          title:
            "This is title of post ",
          image:
            "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-19.jpg",
          author: {
            id: 1,
            name: "Le Thang",
          },
          views: 10,
          likes: 10,
          created_at: "2023-10-15",
        },
        {
          id: 6,
          title:
            "This is title of post ",
          image:
            "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-19.jpg",
          author: {
            id: 1,
            name: "Le Thang",
          },
          views: 10,
          likes: 10,
          created_at: "2023-10-15",
        },
        {
          id: 7,
          title:
            "This is title of post ",
          image:
            "https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-19.jpg",
          author: {
            id: 1,
            name: "Le Thang",
          },
          views: 10,
          likes: 10,
          created_at: "2023-10-15",
        },
      ],
    };
  },
};
</script>
<style  lang="scss">
@import "./_style.scss";
</style>