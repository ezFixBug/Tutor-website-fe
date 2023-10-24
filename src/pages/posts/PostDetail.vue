<template>
  <spinner :is_loading="is_loading" />
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
              :to="{ name: 'detail-tutor', params: { id: user.id } }"
            >
              {{ user.full_name }}
            </router-link>
          </li>
          <li class="d-flex align-items-center">
            {{ formatDate(post.created_at) }}
          </li>
          <li class="d-flex align-items-center">
            {{ comments.total_count }} Comment
          </li>
          <li class="d-flex align-items-center">{{ post.likes_count }} Like</li>
          <li class="d-flex align-items-center">{{ post.view }} View</li>
        </ul>
      </div>
    </div>
  </section>
  <section class="blog-area pt-30px pb-100px">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-5">
          <div class="card card-item" style="max-height: none">
            <div class="card-body">
              <div class="row pb-3">
                <div class="col-lg-12">
                  <div class="card-text pb-3">
                    <div v-html="post.content"></div>
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
                      :src="user.avatar"
                      alt="Avatar"
                      class="rounded-full lazy"
                    />
                  </div>
                  <div class="media-body">
                    <router-link
                      :to="{
                        name: 'detail-tutor',
                        params: { id: user.id },
                      }"
                      class="fs-15 text-black"
                    >
                      {{ user.full_name }}
                    </router-link>
                    <span class="d-block lh-18 pt-2 pb-2">{{
                      formatDate(post.created_at)
                    }}</span>
                  </div>
                </div>
              </div>
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
                    <i v-if="isLike" class="fa-solid fa-heart text-color-1"></i>
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
              <span class="ribbon ribbon-lg">{{ comments.total_count }}</span>
            </div>
            <div class="comment-list">
              <div
                class="media media-card border-bottom border-bottom-gray pb-4 mb-4"
                v-for="comment in comments"
                :key="comment.id"
              >
                <div class="media-img mr-4 rounded-full">
                  <img
                    class="rounded-full lazy"
                    :src="comment.user.avatar"
                    alt="User image"
                    style="
                      border-radius: 50% !important;
                      width: 70px !important;
                      height: 70px !important;
                    "
                  />
                </div>
                <div class="media-body">
                  <h5
                    class="pb-2 fs-15 mr-2"
                    style="width: fit-content; float: left"
                  >
                    {{ comment.user.full_name }}
                  </h5>
                  <span class="d-block lh-18 pb-2 fs-12">{{
                    formatDate(comment.created_at)
                  }}</span>
                  <p class="pb-3">{{ comment.content }}</p>
                  <div
                    class="helpful-action d-flex align-items-center justify-content-between"
                  >
                    <a
                      class="btn theme-btn theme-btn-sm theme-btn-transparent lh-30 rep-comment"
                      href="#"
                      data-toggle="modal"
                      data-target="#replyModal"
                      data-id="1"
                      @click="comment_replay_id = comment.id"
                      ><i class="la la-reply mr-1"></i> Trả lời</a
                    >
                  </div>

                  <div
                    v-for="children_comment in comment.children_comments"
                    :key="children_comment.id"
                    class="mt-3"
                    style="font-size: 12px"
                  >
                    <div
                      class="media-img mr-4 rounded-full"
                      style="
                        width: 50px;
                        height: 50px;
                        float: left;
                        margin-right: 5px !important;
                      "
                    >
                      <img
                        class="rounded-full lazy"
                        :src="children_comment.user.avatar"
                        alt="User image"
                        style="
                          border-radius: 50% !important;
                          width: 50px !important;
                          height: 50px !important;
                        "
                      />
                    </div>
                    <div class="media-body">
                      <h5
                        class="pb-2 fs-15 mr-2"
                        style="width: fit-content; float: left"
                      >
                        {{ children_comment.user.full_name }}
                      </h5>
                      <span class="d-block lh-18 pb-2 fs-12">{{
                        formatDate(children_comment.created_at)
                      }}</span>
                      <p class="pb-3">{{ children_comment.content }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end media -->
              <!-- end media -->
            </div>
            <div
              class="load-more-btn-box text-center pt-3 pb-5"
              v-if="comments.length > 0"
            >
              <button
                class="btn theme-btn theme-btn-sm theme-btn-transparent lh-30 mr-2"
                @click="quantity_comment = 3"
                v-if="quantity_comment !== 3"
              >
                <i class="fa-solid fa-chevron-up"></i> Thu gọn
              </button>
              <button
                class="btn theme-btn theme-btn-sm theme-btn-transparent lh-30"
                @click="quantity_comment += 3"
                v-if="comments.length !== comments.total_count"
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
                    required
                    v-model="comment_content"
                  ></textarea>
                </div>
              </div>
              <div class="btn-box col-lg-12">
                <button
                  class="btn theme-btn"
                  @click="handleAddComment"
                  type="button"
                  data-val="true"
                >
                  Gửi bình luận
                </button>
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
                  <p class="card-text pb-3" v-if="post.type_cd === 1">
                    Tin tức - sự kiện
                  </p>
                  <p class="card-text pb-3" v-else>Kiến thức - thủ thuật</p>
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
                      item.user.full_name
                    }}</span>
                    <span class="d-block lh-18 py-1 fs-12">{{
                      formatDate(item.created_at)
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
  <div
    class="modal fade modal-container"
    id="replyModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="replyModalTitle"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header border-bottom-gray">
          <div class="pr-2">
            <h5
              class="modal-title fs-19 font-weight-semi-bold lh-24"
              id="replyModalTitle"
            >
              Trả lời bình luận
            </h5>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" class="la la-times"
              ><i class="fa-solid fa-xmark"></i
            ></span>
          </button>
        </div>
        <!-- end modal-header -->
        <div class="modal-body">
          <form method="post">
            <div class="form-group">
              <label class="label-text">Nội dung</label>
              <textarea
                class="form-control form--control pl-3"
                rows="4"
                placeholder="Write your response..."
                data-val="true"
                data-val-required="The CmtChildren field is required."
                v-model="comment_replay_content"
              ></textarea>
            </div>
            <div class="btn-box text-right">
              <button
                type="button"
                class="btn font-weight-medium mr-3"
                data-dismiss="modal"
              >
                Hủy
              </button>
              <button
                class="btn theme-btn theme-btn-sm"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                @click="handelReplayComment"
              >
                Trả lời <i class="la la-arrow-right icon ml-1"></i>
              </button>
            </div>
          </form>
        </div>
        <!-- end modal-body -->
      </div>
      <!-- end modal-content -->
    </div>
    <!-- end modal-dialog -->
  </div>
</template>
<script>
import moment from "moment";
import $http from "@/services/httpService";
import $auth from "@/services/authService";
import get from "lodash/get";
import CONSTS from "@/Constants";
export default {
  async mounted() {
    this.getPost(this.$route.params.id);
    this.getComments(this.$route.params.id);
  },

  beforeRouteUpdate(from, to, next) {
    this.getPost(from.params.id);
    this.getComments(from.params.id);
    next();
  },

  data() {
    return {
      is_loading: false,
      post: {},
      user: {},
      comments: [],
      comment_content: "",
      quantity_comment: 3,
      listRelatedPosts: [],
      comment_replay_id: null,
      comment_replay_content: "",
    };
  },

  computed: {
    user() {
      return $auth.getUser;
    },

    isLike() {
      return this.post.is_like;
    },
  },

  methods: {
    async handleLike() {
      this.is_loading = true;
      let params = {
        user_id: this.user.id,
        relation_id: this.post.id,
      };
      const res = await $http.post("/like", params);
      if (get(res, "data.result", false)) {
        this.post.is_like = !this.post.is_like;
        if (this.post.is_like) {
          this.post.likes_count = this.post.likes_count + 1;
        } else {
          this.post.likes_count = this.post.likes_count - 1;
        }
      }
      this.is_loading = false;
    },

    async getPost(post_id) {
      this.is_loading = true;
      const res = await $http.get("/post/" + post_id);
      if (get(res, "data.result", false)) {
        this.post = res.data.post;
        this.user = get(this.post, "user", {});
        this.listRelatedPosts = res.data.related_posts;
        this.list_tags = CONSTS.CD_POST_TAGS.filter((tag) =>
          this.post.tags.includes(tag.id)
        );
      }
      this.is_loading = false;
    },

    async getComments(post_id) {
      this.is_loading = true;
      const res = await $http.get("/comments/" + post_id, {
        quantity: this.quantity_comment,
      });
      if (get(res, "data.result", false)) {
        this.comments = res.data.comments;
        this.comments.total_count = res.data.total_count;
      }
      this.is_loading = false;
    },

    async handleAddComment() {
      this.is_loading = true;
      let params = {
        user_id: this.user.id,
        relation_id: this.post.id,
        content: this.comment_content,
      };

      const res = await $http.post("/comment", params);
      if (get(res, "data.result", false)) {
        this.getComments(this.post.id);
        this.comment_content = "";
      }
      this.is_loading = false;
    },

    async handelReplayComment() {
      this.is_loading = true;
      let params = {
        user_id: this.user.id,
        relation_id: this.post.id,
        content: this.comment_replay_content,
        parent_id: this.comment_replay_id,
      };

      const res = await $http.post("/comment", params);
      if (get(res, "data.result", false)) {
        this.getComments(this.post.id);
        this.comment_replay_content = "";
      }
      this.is_loading = false;
    },

    formatDate(inputDate) {
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },
  },

  watch: {
    quantity_comment: {
      handler: function () {
        this.getComments(this.$route.params.id);
      },
    },
  },
};
</script>