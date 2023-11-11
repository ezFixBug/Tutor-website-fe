<template>
  <spinner :is_loading="is_loading" />
  <section class="cart-area section-padding" style="padding-top: 50px">
    <div class="container">
      <h1 class="fs-22 font-weight-semi-bold col-9 mb-5">
        Danh sách học viên của khóa học {{ course.title }}
      </h1>
      <!-- end filter-bar -->
      <div class="table-responsive">
        <table class="table generic-table">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Tên học viên</th>
              <th scope="col">SĐT</th>
              <th scope="col">Email</th>
              <th scope="col">Ngày tháng nhập học</th>
              <th scope="col">Tình trạng</th>
            </tr>
          </thead>
          <tbody id="cart_body">
            <tr id="row" v-for="(student, index) in students" :key="student.id">
              <td>{{ index + 1 }}</td>
              <td>
                <p>{{ student.full_name }}</p>
              </td>
              <td>
                <p>{{ student.phone_number }}</p>
              </td>
              <td>
                <p>{{ student.email }}</p>
              </td>
              <td>
                <p>
                  {{
                    student.approve_at
                      ? formatDate(student.approve_at)
                      : "Chưa duyệt"
                  }}
                </p>
              </td>
              <td>
                <p class="text-color">
                  {{ student.is_approved ? "Đã duyệt" : "Chưa duyệt" }}
                </p>
              </td>
              <td>
                <button
                  class="btn theme-btn"
                  v-show="!student.is_approved"
                  @click="handleApprove(student.register_course_id, student.id)"
                >
                  Duyệt
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- end container -->
  </section>
</template>
<script>
import $http from "@/services/httpService";
import get from "lodash/get";

import {
  database,
  ref,
  push,
  onValue,
  child,
  get as firebaseGet,
  set,
} from "@/services/firebaseService";
import { createToast } from "mosha-vue-toastify";
import $auth from "@/services/authService";

export default {
  data() {
    return {
      is_loading: false,
      students: [],
      course: {},
    };
  },

  async created() {
    this.getDetailCourse();
    this.getDataSutents();
  },

  computed: {
    hasLogin() {
      return $auth.getUser;
    },
  },

  methods: {
    async getDataSutents() {
      this.is_loading = true;
      const res = await $http.get(
        "/course/students/" + this.$route.params.course_id
      );
      if (get(res, "data.result", false)) {
        this.students = res.data.students;
      }
      this.is_loading = false;
    },

    async getDetailCourse() {
      this.is_loading = true;
      const course_id = this.$route.params.course_id;
      const res = await $http.get("/course/" + course_id);
      if (get(res, "data.result", false)) {
        this.course = res.data.course;
      }
      this.is_loading = false;
    },

    async handleApprove(register_course_id, user_id) {
      this.is_loading = true;
      const res = await $http.post("/approve/course/" + register_course_id);
      if (get(res, "data.result", false)) {
        createToast("Đã duyệt đăng ký thành công!", {
          type: "success",
          timeout: 6000,
        });

        push(ref(database, "notifications"), {
          user_id: user_id,
          object_id: this.course.id,
          created_at: this.getDateTimeNow(),
          type_cd: 1,
          content:
            this.hasLogin.full_name +
            " đã duyệt yêu cầu đăng ký khóa học của bạn!",
          url: { name: "detail-tutor", params: { id: this.hasLogin.id } },
          is_read: false,
        });
      }

      this.getDataSutents();
      this.is_loading = false;
    },

    formatDate(inputDate) {
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },

    getDateTimeNow() {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>
