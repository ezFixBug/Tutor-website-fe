<template>
  <BreadCrum />
  <spinner :is_loading="is_loading" />
  <section class="get-started-area pt-30px position-relative bg-gray pb-90px">
    <div class="container">
      <div class="filter-bar mb-4">
        <div class="filter-bar-inner d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14">
            Chúng tôi đã tìm thấy
            <span class="text-black">{{ pagination.total_count }}</span> yêu cầu
            đang chưa có gia sư
          </p>
          <div class="d-flex flex-wrap align-items-center">
            <a class="btn theme-btn theme-btn-sm theme-btn-white lh-28 collapse-btn" data-toggle="collapse"
              href="#collapseFilter" role="button" aria-expanded="false" aria-controls="collapseFilter">
              Lọc
              <i class="fa-solid fa-chevron-down ml-1 collapse-btn-hide"></i>
              <i class="fa-solid fa-chevron-up ml-1 collapse-btn-show"></i>
            </a>
          </div>
        </div>
        <!-- end filter-bar-inner -->
        <div class="collapse pt-4" id="collapseFilter">
          <div class="row">
            <div class="input-box col-lg-4">
              <FormItem>
                <div class="form-group">
                  <div class="select-container w-auto">
                    <div class="dropdown bootstrap-select select-container-select">
                      <Select show-search :options="subjects" size="large" :filter-option="filterOption" allow-clear
                        v-model:value="params.subject_id" placeholder="---Chọn môn học---" />
                    </div>
                  </div>
                </div>
              </FormItem>
            </div>
            <div class="input-box col-lg-4">
              <FormItem>
                <div class="form-group">
                  <div class="select-container w-auto">
                    <div class="dropdown bootstrap-select select-container-select">
                      <Select show-search :options="classes" size="large" :filter-option="filterOption" allow-clear
                        v-model:value="params.class_id" placeholder="---Chọn cấp độ---" />
                    </div>
                  </div>
                </div>
              </FormItem>
            </div>
            <div class="input-box col-lg-4">
              <FormItem>
                <div class="form-group">
                  <div class="select-container w-auto">
                    <div class="dropdown bootstrap-select select-container-select">
                      <Select show-search :options="types" size="large" :filter-option="filterOption"
                        v-model:value="params.course_type_cd" allow-clear placeholder="---Chọn hình thức học---" />
                    </div>
                  </div>
                </div>
              </FormItem>
            </div>
            <div class="col-lg-12" style="display: flex; justify-content: flex-end">
              <button class="btn theme-btn mr-2" id="search-findteacher" @click="getDataRequests">
                Tìm kiếm<i class="fa-solid fa-arrow-right ml-1"></i>
              </button>
              <button class="btn theme-btn" @click="handleRefresh">
                <i class="fa-solid fa-arrows-rotate"></i>
              </button>
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end collapse -->
      </div>
      <!-- end filter-bar -->
      <div class="row pt-10px">
        <div class="col-lg-12" v-for="request in requests" :key="request.id">
          <div class="card card-item hover-y">
            <div class="card-body d-flex align-items-center">
              <div class="flex-shrink-0 avatar-lg text-center col-md-2 col-sm-2">
                <img :src="request.user.avatar" alt="card image" class="w-25 rounded-full shadow-sm"
                  style="width: 40% !important" />
                <p class="fs-15">{{ request.user.full_name }}</p>
                <p class="fs-12">{{ formatDate(request.created_at) }}</p>
              </div>
              <div class="pl-4 col-md-6 col-sm-6 mt-3">
                <h5 class="card-title">
                  <router-link class="card-title pt-4 pb-2" :to="{
                    name: 'detail-request',
                    params: { request_id: request.id },
                  }"><i class="la la-check mr-1 text-color-5"></i>{{ request.title }}</router-link>
                </h5>
                <p class="card-text">
                  {{ request.description }}
                </p>
                <ul class="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15">
                  <li class="mr-2 col-ms-12">
                    <a href="#" onclick="return false;">{{
                      request.subject ? request.subject.name : null
                    }}</a>
                  </li>
                  <li class="mr-2 col-ms-12">
                    <a href="#" onclick="return false;">{{
                      types.find(
                        (item) => item.value === request.course_type_cd
                      ).label
                    }}</a>
                  </li>
                </ul>
              </div>
              <div class="pl-4 col-md-2 col-sm-2 text-center" style="max-width: 22.666667%">
                <router-link :to="{
                    name: 'detail-request',
                    params: { request_id: request.id },
                  }" class="fs-21 text-color">
                  {{ formattedPrice(request.price) }}
                  <span class="fs-15 text-color-3">người/tháng</span></router-link><br />
                <router-link :to="{
                  name: 'detail-request',
                  params: { request_id: request.id },
                }" class="fs-18 text-color-5">{{ request.num_student }} học viên</router-link><br />

                <router-link :to="{
                  name: 'detail-request',
                  params: { request_id: request.id },
                }" class="fs-15 text-black">{{ request.offers_count }}/6 lời đề nghị</router-link>
              </div>
              <div class="pl-4 col-md-2 col-sm-2 text-center">
                <p class="fs-18 text-color">
                  Phí 0%:
                  <span class="fs-18 text-color-4">
                    0 <span class="fs-13 text-color-4">vnđ</span></span>
                </p>
                <a href="#" onclick="return false;"><span class="fs-11 text-black">(Chỉ thu khi nhận được lớp)</span></a>
                <button class="btn theme-btn theme-btn-sm btn-add-offer" data-id="3025" @click="
                  request.offer_request?.status != 2 && handleOfferRequest(
                    request.id,
                    request.is_requested,
                    request.offers_count
                  )
                  ">
                  {{
                    request.offer_request && request.offer_request.status_cd == 1
                    ? "Hủy đề nghị"
                    : request.offer_request && request.offer_request.status_cd == 2
                      ? 'Đã duyệt'
                      : "Đề nghị dạy"
                  }}
                </button>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col-lg-6 -->
      </div>
      <!-- end row -->

      <div class="text-center pt-3">
        <p class="fs-14 pt-2">Có {{ pagination.total_count }} kết quả</p>
      </div>

      <h5 class="pt-5">Lớp đang cần tìm gia sư</h5>
    </div>
    <pagination :pagination="pagination" />
    <!-- end container -->
  </section>
</template>

<script>
import $http from "@/services/httpService";
import $auth from "@/services/authService";
import { createToast } from "mosha-vue-toastify";
import cloneDeep from "lodash/cloneDeep";
import CONSTS from "@/Constants";
import get from "lodash/get";
export default {
  data() {
    return {
      requests: {},
      pagination: [],
      is_loading: false,
      types: CONSTS.CD_TYPE_CD_OF_COURSE,
      subjects: [],
      classes: [],
      params: {
        subject_id: null,
        class_id: null,
        course_type_cd: null,
      },
    };
  },

  async created() {
    this.is_loading = true;
    this.subjects = await $http.getSubjects();
    this.classes = await $http.getClasses();
    this.getDataRequests();
    // const subject_id = this.$route.params.subject_id;
    // if (subject_id) {
    //   this.FormFilterCourse.subject_id = subject_id;
    //   this.subject = this.subjects.find((item) => {
    //     return item.value == subject_id;
    //   });
    // }
    // this.getDataCourses();
    this.is_loading = false;
  },

  methods: {
    async getDataRequests() {
      this.is_loading = true;
      let params = cloneDeep(this.params);
      params["page"] = this.$route.query.page;
      const res = await $http.get("/requests", params);
      if (get(res, "data.result", false)) {
        this.requests = res.data.requests;
        this.pagination = res.data.paginate;
      }
      this.is_loading = false;
    },

    handleRefresh() {
      this.params = {
        subject_id: null,
        class_id: null,
        course_type_cd: null,
      };
      this.getDataRequests();
    },

    async handleOfferRequest(request_id, is_requested, offers_count) {
      this.is_loading = true;
      if (offers_count === 6 && !is_requested) {
        createToast("Số lượng yêu cầu đề nghị dạy đã đầy!", {
          type: "warning",
          timeout: 6000,
        });
        return;
      }
      const user = $auth.getUser;
      if (user) {
        if (user.role_cd === 2) {
          let params = {
            user_id: user.id,
          };

          if (is_requested) {
            const res = await $http.delete(
              "/cancel-offer/" + request_id,
              params
            );
            if (get(res, "data.result", false)) {
              createToast("Đã hủy yêu cầu đề nghị dạy!", {
                type: "success",
                timeout: 6000,
              });

              this.getDataRequests();
            }
          } else {
            const res = await $http.post(
              "/offer-request/" + request_id,
              params
            );
            if (get(res, "data.result", false)) {
              createToast("Đã gửi yêu cầu đề nghị dạy!", {
                type: "success",
                timeout: 6000,
              });
              this.getDataRequests();
            }
          }
        } else {
          this.$router.push({ name: "becomeTutor" });
        }
      } else {
        this.$router.push({ name: "login" });
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

    formattedPrice(price) {
      const priceFormat = price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return priceFormat.replace(priceFormat.slice(-1), "VND");
    },

    filterOption(input, option) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
  },
};
</script>