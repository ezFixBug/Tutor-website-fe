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
            src="https://storage.smart-edu.vn\files\user\20231021142828tải xuống.jfif"
            alt="Student thumbnail image"
          />
        </div>
        <div class="media-body">
          <h2 class="section__title fs-30">phạm nhật trường</h2>
          <div class="rating-wrap d-flex align-items-center pt-2">
            <div class="review-stars">
              <span class="rating-number">0</span>

              <span class="la la-star-o"></span>
              <span class="la la-star-o"></span>
              <span class="la la-star-o"></span>
              <span class="la la-star-o"></span>
              <span class="la la-star-o"></span>
            </div>
            <span class="rating-total pl-1">(0)</span>
          </div>
          <!-- end rating-wrap -->
        </div>
        <!-- end media-body -->
      </div>
      <!-- end media -->
    </div>
    <!-- end breadcrumb-content -->
    <div b-euuw8q6dcd="" class="section-block mb-5"></div>

    <div class="dashboard-heading mb-5 row">
      <h1 class="fs-22 font-weight-semi-bold col-9">Khóa học của tôi</h1>
      <router-link
        :to="{ name: 'create-course' }"
        class="btn btn-outline-success col-3"
        type="button"
        >Tạo khóa học</router-link
      >
    </div>
    <div class="dashboard-cards mb-5">
      <div
        class="card card-item card-item-list-layout"
        v-for="course in courses"
        :key="course.id"
      >
        <div class="card-image">
          <router-link :to="{name: 'edit-course', params: {course_id: course.id}}" class="d-block">
            <img
              class="card-img-top"
              :src="course.image"
              alt="Card image cap"
              style="height: 233.7px"
            />
          </router-link>
        </div>
        <!-- end card-image -->
        <div class="card-body">
          <h6
            class="ribbon ribbon-blue-bg fs-14 mb-3 mr-2"
            v-for="item in course.classes"
            :key="item.id"
          >
            {{ item.name }}
          </h6>
          <h5 class="card-title">
            <router-link :to="{ name: 'my-courses' }"
              >{{ course.title }}
              <span class="fs-15 text-color-5" v-if="course.type_cd === 1"
                >Học tại nhà</span
              >
              <span class="fs-15 text-color-5" v-if="course.type_cd === 2"
                >Học online</span
              >
            </router-link>
          </h5>
          <p class="card-text">
            <router-link
              :to="{
                name: 'detail-tutor',
                params: { id: course.user.id },
              }"
            >
              {{ course.user.full_name }}</router-link
            >
          </p>
          <!-- end rating-wrap -->
          <ul class="card-duration d-flex align-items-center fs-15 pb-2">
            <li class="mr-2">
              <span class="text-black">Số học sinh:</span>
              <span>0</span>
            </li>
            <li class="mr-2">
              <span class="text-black mr-2">Trạng thái:</span>
              <span v-if="course.status_cd === 1">Đang chờ duyệt</span>
              <span v-if="course.status_cd === 2">Đã duyệt</span>
              <span v-if="course.status_cd === 3">Đã từ chối</span>
            </li>
          </ul>
          <div class="d-flex justify-content-between align-items-center">
            <p
              class="card-price text-black font-weight-bold"
              v-if="course.price"
            >
              {{ course.price }}vnđ
            </p>
            <p class="card-price text-black font-weight-bold" v-else>
              Miễn phí
            </p>
            <div class="card-action-wrap pl-3">
              <router-link
                :to="{ name: 'detail-post-user', params: { post_id: course.id } }"
                class="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-success"
                data-toggle="tooltip"
                data-placement="top"
                data-title="Xem chi tiết"
                data-original-title=""
                title=""
                ><i class="fa-solid fa-users"></i></router-link>
              <router-link
                :to="{ name: 'edit-course', params: { course_id: course.id } }"
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
                  @click="course_id_delete = course.id"
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
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body text-center">
            <input type="hidden" id="ipItemId" name="record_id" />
            <span class="la la-exclamation-circle fs-60 text-warning"></span>
            <h4
              class="modal-title fs-19 font-weight-semi-bold pt-2 pb-1"
              id="itemDeleteModalTitle"
            >
              Khóa học của bạn sẽ bị xóa vĩnh viễn!
            </h4>
            <p>Bạn có chắc chắn muốn xóa khóa học này?</p>
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
                class="btn theme-btn theme-btn-sm lh-30 btn-delete-record"
                @click="deleteCourse"
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

    <!-- end row -->
  </div>
</template>

<script>
import $auth from "@/services/authService";
import $http from "@/services/httpService";
import { createToast } from "mosha-vue-toastify";
import get from "lodash/get";

export default {
  async created() {
    this.getCoursesByUser();
  },

  data() {
    return {
      is_loading: false,
      courses: [],
      classes: [],
      course_id_delete: null,
    };
  },

  computed: {
    user() {
      return $auth.getUser;
    },
  },

  methods: {
    async getCoursesByUser() {
      this.is_loading = true;
      const res = await $http.get("/courses/" + this.user.id);
      this.is_loading = false;
      if (get(res, "data.result", false)) {
        this.courses = res.data.courses;
      }
      this.is_loading = false;
    },

     async deleteCourse() {
      this.is_loading = true;
      const res = await $http.delete("/delete-course/" + this.course_id_delete);
      this.is_loading = false;
      if (get(res, "data.result", false)) {
        createToast("Xóa khóa học thành công!", {
          type: "success",
          timeout: 6000,
        });
        document.getElementById("itemDeleteModal").classList.remove("show");
        document.querySelector(".modal-backdrop").classList.remove("show");
        this.getCoursesByUser();
      }
      this.is_loading = false;
    },
  },
};
</script>
