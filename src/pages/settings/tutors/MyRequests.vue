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
          <h2 class="section__title fs-30">{{ user.full_name }}</h2>
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
      <h3 class="fs-22 font-weight-semi-bold col-9">
        Yêu cầu tìm kiếm gia sư của tôi
      </h3>
      <router-link
        :to="{ name: 'register-request-tutor' }"
        class="btn btn-outline-success col-3"
        type="button"
        >Yêu cầu tìm gia sư</router-link
      >
    </div>
    <div class="dashboard-cards mb-5">
      <div
        class="card card-item card-item-list-layout"
        v-for="request in requests"
        :key="request.id"
      >
        <div class="card-image pt-30px pb-30px">
          <div class="course-badge-labels">
            <router-link
              :to="{
                name: 'detail-request-user',
                params: { request_id: request.id },
              }"
              class="icon-element icon-element-sm shadow-sm cursor-pointer ml-1 text-success"
              data-toggle="tooltip"
              data-placement="top"
              data-title="Xem chi tiết"
              data-original-title=""
              title=""
              ><i class="fa-regular fa-eye"></i>
            </router-link>
            <router-link
              :to="{ name: 'edit-request', params: { request_id: request.id } }"
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
              @click="request_id_delete = request.id"
            >
              <span
                data-toggle="modal"
                data-id="3027"
                data-target="#itemDeleteModal"
                class="w-100 h-100 d-inline-block delete_discord"
                ><i class="fa-regular fa-trash-can"></i
              ></span>
            </div>
          </div>
          <div class="flex-shrink-0 text-center">
            <img
              :src="request.user.avatar"
              alt="card image"
              class="w-25 rounded-full shadow-sm"
              style="width: 40% !important; height: 100px"
            />

            <p class="fs-15">{{ request.user.full_name }}</p>
            <span class="fs-12">{{ formatDate(request.created_at) }}</span>
          </div>
        </div>
        <!-- end card-image -->
        <div class="card-body">
          <h5 class="card-title">
            <router-link
              :to="{
                name: 'detail-request-user',
                params: { request_id: request.id },
              }"
              >{{ request.title }} -
              <span class="fs-20 text-color-5">{{
                getTypeName(request)
              }}</span></router-link
            >
          </h5>
          <div class="rating-wrap d-flex align-items-center py-2">
            <span class="text-black"
              ><i class="fa-solid fa-check mr-1 text-color"></i
              >{{ request.class.name }}</span
            >
            &nbsp; &nbsp;
            <span class="text-black"
              ><i class="fa-solid fa-check mr-1 text-color"></i
              >{{ request.class.name }}</span
            >
            &nbsp; &nbsp;
            <span class="text-color-3"
              ><i class="fa-solid fa-check mr-1 text-color"></i
              >{{ request.price }} vnđ</span
            >
            &nbsp; &nbsp;
          </div>
          <!-- end rating-wrap -->
          <p class="text-black">
            <i class="fa-regular fa-hand-point-right mr-1 text-color"></i> {{ request.offers_count }} lời
            đề nghị <span class="bg-1"></span>
          </p>

          <p class="card-text"></p>
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
              Yêu cầu tìm kiếm này sẽ bị xóa vĩnh viễn!
            </h4>
            <p>Bạn có chắc chắn muốn xóa yêu cầu này?</p>
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
                data-dismiss="modal"
                @click="handleDelete"
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
import CONSTS from "@/Constants";
export default {
  data() {
    return {
      is_loading: false,
      requests: [],
      request_id_delete: null,
    };
  },

  computed: {
    user() {
      return $auth.getUser;
    },
  },

  async created() {
    this.getRequestsByUser();
  },

  methods: {
    async getRequestsByUser() {
      this.is_loading = true;
      const res = await $http.get("/request-tutors/" + this.user.id);
      this.is_loading = false;
      if (get(res, "data.result", false)) {
        this.requests = res.data.requests;
      }
      this.is_loading = false;
    },

    async handleDelete() {
      this.is_loading = true;
      const res = await $http.delete(
        "/delete-request/" + this.request_id_delete
      );
      this.is_loading = false;
      if (get(res, "data.result", false)) {
        createToast("Xóa yêu cầu thành công!", {
          type: "success",
          timeout: 6000,
        });
        this.getRequestsByUser();
      }
      this.is_loading = false;
    },

    getTypeName(request) {
      const type = CONSTS.CD_TYPE_CD_OF_COURSE.find((item) => {
        return item.value === request.course_type_cd;
      });

      if (type) {
        return type.label;
      }
      return null;
    },

    formatDate(inputDate) {
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },
  },
};
</script>