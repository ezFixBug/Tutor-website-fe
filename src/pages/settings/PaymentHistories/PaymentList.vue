<!-- eslint-disable vue/valid-template-root -->
<template>
  <div
    b-euuw8q6dcd=""
    class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5"
  >
    <div b-euuw8q6dcd="" class="media media-card align-items-center">
      <div class="media-img media--img media-img-md rounded-full">
        <img
          class="rounded-full"
          :src="user.avatar"
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
  <div class="section-block mb-5"></div>
  <div class="dashboard-heading">
    <div class="row">
      <div class="col-lg-4 card card-item dashboard-info-card mr-5">
        <div class="card-body d-flex align-items-center">
          <div class="icon-element flex-shrink-0 bg-2 text-white">
            <i class="fa-solid fa-sack-dollar"></i>
          </div>
          <div class="pl-4">
            <p class="card-text fs-18">Tổng thu</p>
            <h5 class="card-title pt-2 fs-26">
              {{
                `${Number(this.statistic?.total_revenue ?? 0).toLocaleString(
                  "vi-VN"
                )} VND`
              }}
            </h5>
          </div>
        </div>
      </div>
      <div class="col-lg-4 card card-item dashboard-info-card">
        <div class="card-body d-flex align-items-center">
          <div class="icon-element flex-shrink-0 bg-1 text-white">
            <i class="fa-regular fa-credit-card"></i>
          </div>
          <div class="pl-4">
            <p class="card-text fs-18">Tổng chi</p>
            <h5 class="card-title pt-2 fs-26">
              {{
                `${Number(this.statistic?.amount_spent ?? 0).toLocaleString(
                  "vi-VN"
                )} VND`
              }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <h3 class="fs-22 font-weight-semi-bold col-10">
      Lịch Sử Thanh Toán - Giao Dịch
    </h3>
    <div class="col-2 d-flex justify-content-around">
      <div class="">
        <label for="filter_year">Năm</label>
        <select id="filter_year" v-model="filter.year" @change="handleFilter">
          <option v-for="year in filterYear" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>
      <div class="">
        <label for="filter_month">Tháng</label>
        <select id="filter_month" v-model="filter.month" @change="handleFilter">
          <option v-for="month in filterMonth" :key="month" :value="month">
            {{ month }}
          </option>
        </select>
      </div>
    </div>
  </div>
  <div class="nav generic-tab d-flex flex-column">
    <ul class="nav mb-30px">
      <li class="nav-item" @click="tab = 0">
        <span class="nav-link" :class="{ active: tab === 0 }">
          Thanh toán mua khoá học
        </span>
      </li>
      <li class="nav-item" @click="tab = 1">
        <span class="nav-link" :class="{ active: tab === 1 }">
          Thanh toán nhận học viên
        </span>
      </li>
    </ul>
    <div class="tab-content">
      <div
        class="tab-pane fade"
        :class="{ show: tab === 0, active: tab === 0 }"
      >
        <div class="setting-body">
          <div>
            <div
              class="tab-pane fade show active"
              id="earning"
              role="tabpanel"
              aria-labelledby="earning-tab"
            >
              <div class="row">
                <div class="col-lg-4 responsive-column-half">
                  <div class="card card-item dashboard-info-card">
                    <div class="card-body d-flex align-items-center">
                      <div class="icon-element flex-shrink-0 bg-3 text-white">
                        <i class="fa-regular fa-money-bill-1"></i>
                      </div>
                      <div class="pl-4">
                        <p class="card-text fs-18">Tổng tiền đã mua khoá học</p>
                        <h5 class="card-title pt-2 fs-26">
                          {{
                            `${Number(this.total_amount).toLocaleString(
                              "vi-VN"
                            )} VND`
                          }}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="card card-item">
                    <div class="card-body">
                      <DataTable
                        :columns="table_course_payments.columns"
                        :data="table_course_payments.dataTable"
                        :options="table_course_payments.options"
                        class="display nowrap"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        :class="{ show: tab === 1, active: tab === 1 }"
      >
        <div class="setting-body">
          <div>
            <div
              class="tab-pane fade show active"
              id="earning"
              role="tabpanel"
              aria-labelledby="earning-tab"
            >
              <div class="row">
                <div class="col-lg-4 responsive-column-half">
                  <div class="card card-item dashboard-info-card">
                    <div class="card-body d-flex align-items-center">
                      <div class="icon-element flex-shrink-0 bg-4 text-white">
                        <i class="fa-solid fa-users-viewfinder"></i>
                      </div>
                      <div class="pl-4">
                        <p class="card-text fs-18">Tổng tiền nhận lớp</p>
                        <h5 class="card-title pt-2 fs-26">
                          {{
                            `${Number(this.total_amount).toLocaleString(
                              "vi-VN"
                            )} VND`
                          }}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="card card-item">
                    <div class="card-body">
                      <DataTable
                        :columns="table_request_tutor_payments.columns"
                        :data="table_request_tutor_payments.dataTable"
                        :options="table_request_tutor_payments.options"
                        class="display nowrap"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $http from "@/services/httpService";
import dayjs from "dayjs";

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      tab: null,
      is_loading: false,
      table_course_payments: {
        columns: [
          { data: "created_at", title: "Ngày thanh toán" },
          { data: "course_title", title: "Tên khoá học" },
          { data: "tutor_name", title: "Gia sư" },
          { data: "course_price", title: "Số tiền" },
          { data: "amount", title: "Đã thanh toán" },
          { data: "status", title: "Trạng thái" },
        ],
        options: {
          responsive: true,
        },
        dataTable: [],
      },
      table_request_tutor_payments: {
        columns: [
          { data: "created_at", title: "Ngày thanh toán" },
          { data: "request_tutor_title", title: "Lớp yêu cầu gia sư" },
          { data: "request_price", title: "Số tiền" },
          { data: "amount", title: "Đã thanh toán" },
          { data: "status", title: "Trạng thái" },
        ],
        options: {
          responsive: true,
        },
        dataTable: [],
      },
      total_amount: 0,
      statistic: null,
      filter: {
        year: 2024,
        month: 1,
      },
      filterYear: [2024, 2023, 2022, 2021],
      filterMonth: [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
  async created() {
    this.tab = 0;
    this.filter.year = this.filterYear[0];
    this.filter.month = this.filterMonth[0];
    this.statistics();
  },
  methods: {
    async statistics() {
      const response = await $http.get("/payment/statistics", {
        user_id: this.user.id,
        year: this.filter.year,
        month: this.filter.month,
      });
      this.statistic = response.data.data;
    },

    async getPaymentHistories() {
      const response = await $http.get("/payment/histories", {
        user_id: this.user.id,
        payment_type: this.tab,
        year: this.filter.year,
        month: this.filter.month,
      });
      const payments = response.data.data.payment;

      this.total_amount = response.data.data.total_amount;

      if (this.total_amount == 0) {
        this.table_request_tutor_payments.dataTable = [];
        this.table_course_payments.dataTable = [];
        return;
      }
      payments.forEach((payment, index) => {
        const course = payment?.register_course?.course ?? null;
        const offer_request_tutor = payment?.register_offer ?? null;

        const payment_course = 0;
        const payment_request_tutor = 1;

        switch (payment.payment_type) {
          case payment_course:
            this.table_course_payments.dataTable[index] = {
              course_title: course?.title ?? null,
              tutor_name: course.user.full_name,
              course_price: `${Number(course.price).toLocaleString(
                "vi-VN"
              )} VND`,
              amount: `${Number(payment.amount).toLocaleString("vi-VN")} VND`,
              status: payment.status == 1 ? "Đã Thanh Toán" : "Chưa Thanh Toán",
              created_at: dayjs(payment.created_at).format(
                "DD/MM/YYYY HH:mm:ss"
              ),
            };
            break;
          case payment_request_tutor: {
            const request = offer_request_tutor.request;

            this.table_request_tutor_payments.dataTable[index] = {
              request_tutor_title: request.title,
              request_price: `${Number(
                request.price * request.num_student
              ).toLocaleString("vi-VN")} VND`,
              amount: `${Number(payment.amount).toLocaleString("vi-VN")} VND`,
              status: payment.status == 1 ? "Đã Thanh Toán" : "Chưa Thanh Toán",
              created_at: dayjs(payment.created_at).format(
                "DD/MM/YYYY HH:mm:ss"
              ),
            };
            break;
          }
          default: {
            break;
          }
        }
      });
    },
  },
  watch: {
    tab: {
      async handler() {
        this.getPaymentHistories();
      },
    },
    "filter.year": {
      async handler() {
        this.statistics();
        this.getPaymentHistories();
      },
    },
    "filter.month": {
      async handler() {
        this.statistics();
        this.getPaymentHistories();
      },
    },
  },
};
</script>
<style>
@import "datatables.net-dt";
</style>
