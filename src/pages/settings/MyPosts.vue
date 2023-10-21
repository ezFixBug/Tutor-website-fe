<template>
  <spinner :is_loading="is_loading" />
  <div b-euuw8q6dcd="" class="container-fluid">
    <div
      b-euuw8q6dcd=""
      class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5"
    >
      <div b-euuw8q6dcd="" class="media media-card align-items-center">
        <div class="media-img media--img media-img-md rounded-full">
          <img
            class="rounded-full"
            :src="user.avatar ?? DEFAULT_IMAGE"
            alt="Student thumbnail image"
          />
        </div>
        <div class="media-body">
          <h2 class="section__title fs-30">{{ user.full_name }}</h2>

          <!-- end rating-wrap -->
        </div>
        <!-- end media-body -->
      </div>
      <!-- end media -->
    </div>
    <!-- end breadcrumb-content -->
    <div b-euuw8q6dcd="" class="section-block mb-5"></div>

    <div class="dashboard-heading mb-5 row">
      <h3 class="fs-22 font-weight-semi-bold col-9">Bài viết của tôi</h3>
      <router-link
        :to="{ name: 'create-post' }"
        class="btn btn-outline-success col-3"
        >Tạo bài viết</router-link
      >
    </div>
    <div class="dashboard-cards mb-5">
      <div
        class="card card-item card-item-list-layout"
        id="row_221"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="card-image">
          <router-link
            :to="{ name: 'detail-post-user', params: { post_id: post.id } }"
            class="d-block"
          >
            <img class="card-img-top" :src="post.image" alt="Card image cap" />
          </router-link>
        </div>
        <!-- end card-image -->
        <div class="card-body">
          <div class="rating-wrap d-flex align-items-center py-2">
            <span class="text-black" v-if="post.type_cd === 1"
              >Tin tức - sự kiện</span
            >
            <span class="text-black" v-else>Kiến thức - thủ thuật</span>
          </div>
          <!-- end rating-wrap -->
          <h5 class="card-title">
            <router-link
              :to="{ name: 'detail-post-user', params: { post_id: post.id } }"
              >{{ post.title }}</router-link
            >
          </h5>
          <div class="rating-wrap d-flex align-items-center py-2">
            <span class="text-black">Lượt thích: {{ post.like }}</span> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span class="text-black">Lượt xem: {{ post.view }}</span> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
          </div>
          <!-- end rating-wrap -->

          <p class="card-text">{{ post.description }}</p>
          <div class="d-flex justify-content-end align-items-center">
            <div class="card-action-wrap pl-3">
              <router-link
                :to="{ name: 'detail-post-user', params: { post_id: post.id } }"
                class="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-success"
                data-toggle="tooltip"
                data-placement="top"
                data-title="Xem chi tiết"
                data-original-title=""
                title=""
                ><i class="fa-regular fa-eye"></i
              ></router-link>
              <router-link
                :to="{ name: 'edit-post', params: { post_id: post.id } }"
                class="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-secondary"
                data-toggle="tooltip"
                data-placement="top"
                data-title="Chỉnh sửa"
                data-original-title=""
                title=""
                ><i class="fa-solid fa-pen-to-square"></i
              ></router-link>
              <div
                class="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-danger"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Xóa"
              >
                <span
                  data-toggle="modal"
                  data-id="221"
                  data-target="#itemDeleteModal"
                  class="w-100 h-100 d-inline-block delete_discord"
                  @click="post_id_delete = post.id"
                  ><i class="fa-regular fa-trash-can"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
        <!-- end card-body -->
      </div>
      <!-- end card -->
    </div>
    <!-- end col-lg-12 -->

    <!-- Modal -->
    <div
      class="modal fade modal-container"
      id="itemDeleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="itemDeleteModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog moda+l-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-center">
            <input type="hidden" id="ipItemId" name="record_id" />
            <i class="fa-regular fa-circle-question fs-60 text-warning"></i>
            <h4
              class="modal-title fs-19 font-weight-semi-bold pt-2 pb-1"
              id="itemDeleteModalTitle"
            >
              Bài viết của bạn sẽ bị xóa vĩnh viễn!
            </h4>
            <p>Bạn có chắc chắn muốn xóa bài viết này?</p>
            <div class="btn-box pt-4">
              <button
                type="button"
                class="btn font-weight-medium mr-3 btn-close"
                data-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                @click="handleDeletePost"
                class="btn theme-btn theme-btn-sm lh-30 btn-delete-record"
              >
                Xóa
              </button>
            </div>
          </div>
          <!-- end modal-body -->
        </div>
        <!-- end modal-content -->
      </div>
      <!-- end modal-dialog -->
    </div>
    <!-- end modal -->
  </div>
</template>
<script>
import $auth from "@/services/authService";
import $http from "@/services/httpService";
import { createToast } from "mosha-vue-toastify";
import get from "lodash/get";
const DEFAULT_IMAGE = "https://hryoutest.in.ua/uploads/images/default.jpg";
export default {
  async created() {
    this.getPostsByUser();
  },

  data() {
    return {
      is_loading: false,
      posts: [],
      post_id_delete: null,
    };
  },

  computed: {
    user() {
      return $auth.getUser;
    },
  },

  methods: {
    async getPostsByUser() {
      this.is_loading = true;
      console.log(this.user);
      const res = await $http.get("/posts/" + this.user.id);
      this.is_loading = false;
      if (get(res, "data.result", false)) {
        this.posts = res.data.posts;
      }
      this.is_loading = false;
    },

    async handleDeletePost() {
      this.is_loading = true;
      const res = await $http.delete("/post/" + this.post_id_delete);
      this.is_loading = false;
      if (get(res, "data.result", false)) {
        createToast("Xóa bài viết thành công!", {
          type: "success",
          timeout: 6000,
        });
        document.getElementById("itemDeleteModal").classList.remove("show");
        document.querySelector(".modal-backdrop").classList.remove("show");
        this.getPostsByUser();
      }
      this.is_loading = false;
    },
  },
};
</script>
