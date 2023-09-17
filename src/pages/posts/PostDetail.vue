<template>
  <section class="breadcrumb-area pt-80px pb-30px pattern-bg">
    <div class="container">
      <div class="breadcrumb-content">
        <div class="section-heading pb-3">
          <h1 class="section__title">
            {{ post.title }}
          </h1>
        </div>
        <ul
          class="generic-list-item generic-list-item-arrow d-flex flex-wrap align-items-center"
        >
          <li><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
          <li><router-link :to="{ name: 'posts' }">Bài viết</router-link></li>
          <li>{{ post.title }}</li>
        </ul>
        <ul
          class="generic-list-item generic-list-item-bullet generic-list-item--bullet d-flex align-items-center flex-wrap fs-14 pt-2"
        >
          <li class="d-flex align-items-center">
            <router-link
              :to="{ name: 'detail-tutor', params: { id: post.author.id } }"
            >
              {{ post.author.name }}
            </router-link>
          </li>
          <li class="d-flex align-items-center">
            {{ formatDate }}
          </li>
          <li class="d-flex align-items-center">
            {{ post.count_comment }} Comments
          </li>
          <li class="d-flex align-items-center">
            {{ post.count_like }} Likeas
          </li>
          <li class="d-flex align-items-center">{{ post.count_view }} Views</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="blog-area pt-30px pb-100px">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-5">
          <div class="card card-item">
            <div class="card-body">
              <div class="row pb-3">
                <div class="col-lg-12">
                  <div class="card-text pb-3">
                    {{ post.content }}
                  </div>
                </div>
              </div>
              <div class="instructor-wrap pb-2 pt-4">
                <div class="media media-card">
                  <div
                    class="media-img rounded-full avatar-lg mr-4"
                    style="width: 50px !important; height: 50px !important"
                  >
                    <img
                      :src="post.author.avatar"
                      alt="Avatar"
                      class="rounded-full lazy"
                    />
                  </div>
                  <div class="media-body">
                    <router-link
                      :to="{
                        name: 'detail-tutor',
                        params: { id: post.author.id },
                      }"
                      class="fs-15 text-black"
                    >
                      {{ post.author.name }}
                    </router-link>
                    <span class="d-block lh-18 pt-2 pb-2">{{
                      post.created_at
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="section-block"></div>
              <h3 class="fs-18 font-weight-semi-bold pt-3">Tag</h3>
              <div
                class="d-flex flex-wrap justify-content-between align-items-center pt-3"
              >
                <ul
                  class="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15"
                ></ul>
                <div class="share-wrap">
                  <div
                    class="icon-element icon-element-sm shadow-sm cursor-pointer btn-add-like-blog"
                    @click="handleLike()"
                    title="Yêu thích"
                  >
                    <i
                      v-if="post.is_like"
                      class="fa-solid fa-heart text-color-1"
                    ></i>
                    <i v-else class="fa-regular fa-heart text-color-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-block"></div>
          <div class="comments-wrap pt-5" id="comments">
            <div class="d-flex align-items-center justify-content-between pb-4">
              <h3 class="fs-22 font-weight-semi-bold">Bình luận</h3>
              <span class="ribbon ribbon-lg">{{ post.count_comment }}</span>
            </div>
            <div class="comment-list"></div>
            <div class="load-more-btn-box text-center pt-3 pb-5">
              <button
                class="btn theme-btn theme-btn-sm theme-btn-transparent lh-30"
              >
                <i class="fa-solid fa-arrows-rotate mr-1"></i> Xem thêm bình
                luận
              </button>
            </div>
          </div>
          <div class="section-block"></div>
          <div class="add-comment-wrap pt-5">
            <form action="" class="row">
              <div class="input-box col-lg-12">
                <label class="label-text">Nội dung</label>
                <div class="form-group">
                  <!-- <input type="number" data-val="true" data-val-required="The Id field is required."> -->
                  <textarea
                    class="form-control form--control pl-3"
                    rows="4"
                    placeholder="Write your response..."
                    data-val="true"
                    data-val-required="The Cmt field is required."
                    style="height: 109px"
                  ></textarea>
                </div>
              </div>
              <div class="btn-box col-lg-12">
                <button class="btn theme-btn">Gửi bình luận</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="sidebar">
            <div class="card card-item">
              <div class="card-body">
                <h3 class="card-title fs-18 pb-2">Thể loại</h3>
                <div class="divider"><span></span></div>
                <ul class="generic-list-item">
                  Tin tức - sự kiện
                </ul>
              </div>
            </div>
            <div class="card card-item">
              <div class="card-body">
                <h3 class="card-title fs-18 pb-2">Bài viết liên quan</h3>
                <div class="divider"><span></span></div>
                <div
                  class="media media-card border-bottom border-bottom-gray pb-4 mb-4"
                  v-for="item in listRelatedPosts"
                  :key="item.id"
                >
                  <router-link
                    :to="{ name: 'detail-post', params: { id: item.id } }"
                    class="media-img"
                  >
                    <img :src="item.image" alt="Image" class="mr-3" />
                  </router-link>
                  <div class="media-body">
                    <h5 class="fs-15">
                      <router-link
                        :to="{ name: 'detail-post', params: { id: item.id } }"
                      >
                        {{ item.title }}
                      </router-link>
                    </h5>
                    <span class="d-block lh-18 py-1 fs-14">{{
                      item.author.name
                    }}</span>
                    <span class="d-block lh-18 py-1 fs-12">{{
                      item.created_at
                    }}</span>
                  </div>
                </div>
                <div class="view-all-course-btn-box">
                  <router-link
                    :to="{ name: 'posts' }"
                    class="btn theme-btn w-100"
                  >
                    Xem thêm
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      post: {
        id: 1,
        title:
          "Chứng Chỉ Tiếng Anh Quốc Tế - Mở Rộng Cơ Hội Giao Tiếp Và Sự Nghiệp",
        author: {
          id: 1,
          name: "Le Thang",
          avatar: "https://storage.smart-edu.vn/files/user/202306290927151.jpg",
        },
        is_like: false,
        count_like: 10,
        count_comment: 20,
        count_view: 30,
        category: {
          id: 1,
          name: "Tin tuc",
        },
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis id aliquid quia quidem alias ex labore hic, delectus magnam cumque quasi. Odio mollitia reiciendis animi ad corporis quisquam, aperiam ut.",
        image:
          "https://www.cambridgeenglish.org/Images/640x460px_Landing_Page_backed%20by%20research_V2.jpg",
        created_at: "17/08/2023 4:08",
      },
      listRelatedPosts: [
        {
          id: 1,
          title: "This is title of post ",
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
          title: "This is title of post ",
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
  methods: {
    handleLike() {
      this.post.is_like = !this.post.is_like;
    },
  },
  computed: {
    formatDate() {
      const date = moment(this.post.created_at, "DD/MM/YYYY h:mm");
      return date.format("dddd, MMMM D, YYYY");
    },
  },
};
</script>