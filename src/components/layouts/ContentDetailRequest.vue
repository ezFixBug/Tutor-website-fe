<template>
  <spinner :is_loading="is_loading" />
  <section class="breadcrumb-area">
    <div class="bg-dark pt-60px pb-60px">
      <div class="container">
        <div class="breadcrumb-content text-center">
          <div class="section-heading">
            <h1 class="section__title text-white pt-2">{{ request.title }}</h1>
          </div>
          <div class="breadcrumb-btn-box pt-30px">
            <button class="btn theme-btn text-white-50">
              Đang tìm kiếm gia sư
            </button>
          </div>
        </div>
      </div>
      <!-- end container -->
    </div>
    <div class="quiz-action-nav bg-white py-3 shadow-sm">
      <div class="container">
        <div class="quiz-action-content">
          <ul class="quiz-nav d-flex flex-wrap align-items-center">
            <li>
              <i class="la la-question-circle-o fs-17 mr-2">{{
                request.user ? request.user.full_name : null
              }}</i>
            </li>
            <li>
              <i class="la la-clock fs-17 mr-2"></i
              >{{ formatDate(request.created_at) }}
            </li>
          </ul>
        </div>
      </div>
      <!-- end container -->
    </div>
    <!-- end quiz-action-nav -->
  </section>
  <section class="quiz-ans-wrap">
    <div class="bg-gray pt-40px pb-40px">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 ml-auto">
            <div class="quiz-ans-content">
              <ul class="generic-list-item pt-3">
                <li>
                  <i class="la la-book fs-18 mr-2"></i>Môn học:
                  {{ request.subject ? request.subject.name : null }}
                </li>
                <li>
                  <i class="la la-briefcase fs-18 mr-2"></i>Level:
                  {{ request.class ? request.class.name : null }}
                </li>
                <li>
                  <i class="la la-book fs-18 mr-2"></i>Hình thức học:
                  {{ getTypeName(request) }}
                </li>
                <li>
                  <i class="la la-address-book fs-18 mr-2"></i>Địa chỉ:
                  {{ request.user ? request.user.street : null }}
                </li>
                <li class="mr-2 fs-18">
                  {{ request.user ? request.user.district.name : null }} -
                  {{ request.user ? request.user.province.name : null }}
                </li>
              </ul>
            </div>
          </div>
          <!-- end col-lg-5 -->
          <div class="col-lg-4 ml-auto">
            <div class="quiz-ans-content">
              <ul class="generic-list-item pt-3">
                <li>
                  <i class="la la-venus-mars fs-18 mr-2"></i>Tìm gia sư:
                  {{
                    request.sex == 0
                      ? "Tất cả"
                      : request.sex === 1
                      ? "Nam"
                      : "Nữ"
                  }}
                </li>
                <li>
                  <i class="la la-user fs-18 mr-2"></i>Số học viên:
                  {{ request.num_student }}
                </li>
                <li>
                  <i class="la la-money fs-18 mr-2"></i>Học phí:
                  <span class="fs-18 text-color-3"
                    >{{ request.price }} vnđ/người/tháng</span
                  >
                </li>
                <li>
                  <i class="la la-calculator fs-18 mr-2"></i>Tổng:
                  <span class="fs-18 text-color"
                    >{{ request.num_student * request.price }} vnđ/tháng</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- end col-lg-5 -->
          <div class="col-lg-4 ml-auto">
            <div class="quiz-ans-content">
              <ul class="generic-list-item pt-3">
                <li>
                  <i class="la la-clock fs-18 mr-2"></i
                  >{{ request.num_day_per_week }} buổi/tuần
                </li>
                <li>
                  <i class="la la-clock fs-18 mr-2"></i
                  >{{ request.num_hour_per_day }}giờ/buổi:
                </li>
                <li>
                  <i class="la la-money fs-18 mr-2"></i>Phí nhận lớp:
                  <span class="fs-20 text-color-5 font-weight-semi-bold"
                    >Miễn phí</span
                  >
                </li>
                <li>
                  <a
                    href="#"
                    onclick="return false;"
                    class="text-color-2 fs-14"
                  >
                    Trả phí sau khi nhận lớp</a
                  >
                </li>
                <li>
                  <i class="la la-heart fs-18 mr-2"></i
                  >{{ request.offers_count }} lời đề nghị
                </li>

                <li>
                  <button
                    class="btn theme-btn theme-btn-sm btn-add-offer"
                    data-id="3027"
                    v-if="$route.name !== 'detail-request-user'"
                    @click="handleOfferRequest"
                  >
                    {{ request.is_requested ? "Hủy đề nghị" : "Đề nghị dạy" }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <!-- end col-lg-5 -->
          <div class="col-lg-12">
            <div class="quiz-ans-content pb-4">
              <h3 class="fs-22 font-weight-semi-bold">Mô tả</h3>
              <p class="pt-2">{{ request.description }}</p>
            </div>
          </div>
          <!-- end col-lg-6 -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <div class="container py-5">
      <div class="row justify-content-between">
        <div
          class="card card-item course-type course-onl-off"
          style="width: 100%"
        >
          <div class="card-body">
            <h3 class="fs-22 font-weight-semi-bold pb-2">Thời khóa biểu</h3>
            <div class="divider"><span></span></div>
            <div class="row justify-content-between">
              <div class="course-onl-off-tkb">
                <label class="label-text text-center w-100">Thứ 2</label>
                <div class="d-flex flex-wrap align-items-center pb-4">
                  <button
                    class="btn flex-grow-1 mx-2 mb-2 monday"
                    :class="{
                      'choosed-schedule': schedule['Monday'].includes('1'),
                    }"
                    type="button"
                    style="
                      background-color: #fff;
                      border-color: #ec5252;
                      color: #ec5252;
                    "
                  >
                    Sáng
                  </button>
                  <button
                    class="btn flex-grow-1 mx-2 mb-2 monday"
                    :class="{
                      'choosed-schedule': schedule['Monday'].includes('2'),
                    }"
                    type="button"
                    style="
                      background-color: #fff;
                      border-color: #ec5252;
                      color: #ec5252;
                    "
                  >
                    Chiều
                  </button>
                  <button
                    class="btn flex-grow-1 mx-2 mb-2 monday"
                    :class="{
                      'choosed-schedule': schedule['Monday'].includes('3'),
                    }"
                    type="button"
                    style="
                      background-color: #fff;
                      border-color: #ec5252;
                      color: #ec5252;
                    "
                  >
                    Tối
                  </button>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="course-onl-off-tkb">
                <div class="form-group">
                  <label class="label-text text-center w-100">Thứ 3</label>
                  <div class="d-flex flex-wrap align-items-center pb-4">
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 tuesday"
                      :class="{
                        'choosed-schedule': schedule['Tuesday'].includes('1'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Sáng
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 tuesday"
                      :class="{
                        'choosed-schedule': schedule['Tuesday'].includes('2'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Chiều
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 tuesday"
                      :class="{
                        'choosed-schedule': schedule['Tuesday'].includes('3'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Tối
                    </button>
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="course-onl-off-tkb">
                <div class="form-group">
                  <label class="label-text text-center w-100">Thứ 4</label>
                  <div class="d-flex flex-wrap align-items-center pb-4">
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 wednesday"
                      :class="{
                        'choosed-schedule': schedule['Wednesday'].includes('1'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Sáng
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 wednesday"
                      :class="{
                        'choosed-schedule': schedule['Wednesday'].includes('2'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Chiều
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 wednesday"
                      :class="{
                        'choosed-schedule': schedule['Wednesday'].includes('3'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Tối
                    </button>
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="course-onl-off-tkb">
                <div class="form-group">
                  <label class="label-text text-center w-100">Thứ 5</label>
                  <div class="d-flex flex-wrap align-items-center pb-4">
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 thursday"
                      :class="{
                        'choosed-schedule': schedule['Thursday'].includes('1'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Sáng
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 thursday"
                      :class="{
                        'choosed-schedule': schedule['Thursday'].includes('2'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Chiều
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 thursday"
                      :class="{
                        'choosed-schedule': schedule['Thursday'].includes('3'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Tối
                    </button>
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="course-onl-off-tkb">
                <div class="form-group">
                  <label class="label-text text-center w-100">Thứ 6</label>
                  <div class="d-flex flex-wrap align-items-center pb-4">
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 friday"
                      :class="{
                        'choosed-schedule': schedule['Friday'].includes('1'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Sáng
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 friday"
                      :class="{
                        'choosed-schedule': schedule['Friday'].includes('2'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Chiều
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 friday"
                      :class="{
                        'choosed-schedule': schedule['Friday'].includes('3'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Tối
                    </button>
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="course-onl-off-tkb">
                <div class="form-group">
                  <label class="label-text text-center w-100">Thứ 7</label>
                  <div class="d-flex flex-wrap align-items-center pb-4">
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 saturday"
                      :class="{
                        'choosed-schedule': schedule['Saturday'].includes('1'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Sáng
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 saturday"
                      :class="{
                        'choosed-schedule': schedule['Saturday'].includes('2'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Chiều
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 saturday"
                      :class="{
                        'choosed-schedule': schedule['Saturday'].includes('3'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Tối
                    </button>
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
              <div class="course-onl-off-tkb">
                <div class="form-group">
                  <label class="label-text text-center w-100">Chủ nhật</label>
                  <div class="d-flex flex-wrap align-items-center pb-4">
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 sunday"
                      :class="{
                        'choosed-schedule': schedule['Sunday'].includes('1'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Sáng
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 sunday"
                      :class="{
                        'choosed-schedule': schedule['Sunday'].includes('2'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Chiều
                    </button>
                    <button
                      class="btn flex-grow-1 mx-2 mb-2 sunday"
                      :class="{
                        'choosed-schedule': schedule['Sunday'].includes('3'),
                      }"
                      type="button"
                      style="
                        background-color: #fff;
                        border-color: #ec5252;
                        color: #ec5252;
                      "
                    >
                      Tối
                    </button>
                  </div>
                </div>
              </div>
              <!-- end col-lg-12 -->
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script>
import CONSTS from "@/Constants";
import $http from "@/services/httpService";
import $auth from "@/services/authService";
import { createToast } from "mosha-vue-toastify";
import get from "lodash/get";
export default {
  props: {
    request: {
      type: Object,
      default: {},
    },
  },

  computed: {
    schedule() {
      return this.request.schedule;
    },
  },

  methods: {
    async handleOfferRequest() {
      this.is_loading = true;
      if (this.request.offers_count === 6 && !this.request.is_requested) {
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

          if (this.request.is_requested) {
            const res = await $http.delete(
              "/cancel-offer/" + this.request.id,
              params
            );
            if (get(res, "data.result", false)) {
              createToast("Đã hủy yêu cầu đề nghị dạy!", {
                type: "success",
                timeout: 6000,
              });

              this.$emit('getDataRequest');
            }
          } else {
            const res = await $http.post(
              "/offer-request/" + this.request.id,
              params
            );
            if (get(res, "data.result", false)) {
              createToast("Đã gửi yêu cầu đề nghị dạy!", {
                type: "success",
                timeout: 6000,
              });
              this.$emit('getDataRequest');
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

    getTypeName(request) {
      const type = CONSTS.CD_TYPE_CD_OF_COURSE.find((item) => {
        return item.value === request.course_type_cd;
      });

      if (type) {
        return type.label;
      }
      return null;
    },
  },
};
</script>

<style>
.card-item {
  max-height: none;
}

.choosed-schedule {
  background-color: rgb(3, 191, "3") !important;
  border-color: rgb(236, 82, 82) !important;
  color: rgb(255, 255, 255) !important;
}
</style>