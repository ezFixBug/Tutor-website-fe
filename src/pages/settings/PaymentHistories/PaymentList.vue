<!-- eslint-disable vue/valid-template-root -->
<template>
  <div b-euuw8q6dcd="" class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
    <div b-euuw8q6dcd="" class="media media-card align-items-center">
      <div class="media-img media--img media-img-md rounded-full">
        <img class="rounded-full" :src="user.avatar" alt="Student thumbnail image" />
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
  <div class="dashboard-heading mb-5">
    <h3 class="fs-22 font-weight-semi-bold">Lịch Sử Thanh Toán - Giao Dịch</h3>
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
      <div class="tab-pane fade" :class="{ show: tab === 0, active: tab === 0 }">
        <div class="setting-body">
          <div>
            <div class="tab-pane fade show active" id="earning" role="tabpanel" aria-labelledby="earning-tab">
              <div class="row">
                <div class="col-lg-4 responsive-column-half">
                  <div class="card card-item dashboard-info-card">
                    <div class="card-body d-flex align-items-center">
                      <div class="icon-element flex-shrink-0 bg-3 text-white">
                        <svg class="svg-icon-color-white" width="40" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                          <g>
                            <g>
                              <g>
                                <path d="M405.333,42.667h-44.632c-4.418-12.389-16.147-21.333-30.035-21.333h-32.229C288.417,8.042,272.667,0,256,0
                                                        s-32.417,8.042-42.438,21.333h-32.229c-13.888,0-25.617,8.944-30.035,21.333h-44.631C83.146,42.667,64,61.802,64,85.333v384
                                                        C64,492.865,83.146,512,106.667,512h298.667C428.854,512,448,492.865,448,469.333v-384C448,61.802,428.854,42.667,405.333,42.667
                                                        z M170.667,53.333c0-5.885,4.792-10.667,10.667-10.667h37.917c3.792,0,7.313-2.021,9.208-5.302
                                                        c5.854-10.042,16.146-16.031,27.542-16.031s21.688,5.99,27.542,16.031c1.896,3.281,5.417,5.302,9.208,5.302h37.917
                                                        c5.875,0,10.667,4.781,10.667,10.667V64c0,11.76-9.563,21.333-21.333,21.333H192c-11.771,0-21.333-9.573-21.333-21.333V53.333z
                                                         M426.667,469.333c0,11.76-9.563,21.333-21.333,21.333H106.667c-11.771,0-21.333-9.573-21.333-21.333v-384
                                                        c0-11.76,9.563-21.333,21.333-21.333h42.667c0,23.531,19.146,42.667,42.667,42.667h128c23.521,0,42.667-19.135,42.667-42.667
                                                        h42.667c11.771,0,21.333,9.573,21.333,21.333V469.333z"></path>
                                <path
                                  d="M160,170.667c-17.646,0-32,14.354-32,32c0,17.646,14.354,32,32,32s32-14.354,32-32
                                                        C192,185.021,177.646,170.667,160,170.667z M160,213.333c-5.875,0-10.667-4.781-10.667-10.667
                                                        c0-5.885,4.792-10.667,10.667-10.667s10.667,4.781,10.667,10.667C170.667,208.552,165.875,213.333,160,213.333z">
                                </path>
                                <path
                                  d="M160,277.333c-17.646,0-32,14.354-32,32c0,17.646,14.354,32,32,32s32-14.354,32-32
                                                        C192,291.688,177.646,277.333,160,277.333z M160,320c-5.875,0-10.667-4.781-10.667-10.667c0-5.885,4.792-10.667,10.667-10.667
                                                        s10.667,4.781,10.667,10.667C170.667,315.219,165.875,320,160,320z">
                                </path>
                                <path d="M160,384c-17.646,0-32,14.354-32,32c0,17.646,14.354,32,32,32s32-14.354,32-32C192,398.354,177.646,384,160,384z
                                                         M160,426.667c-5.875,0-10.667-4.781-10.667-10.667c0-5.885,4.792-10.667,10.667-10.667s10.667,4.781,10.667,10.667
                                                        C170.667,421.885,165.875,426.667,160,426.667z"></path>
                                <path
                                  d="M373.333,192h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128
                                                        c5.896,0,10.667-4.771,10.667-10.667C384,196.771,379.229,192,373.333,192z">
                                </path>
                                <path
                                  d="M373.333,298.667h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128
                                                        c5.896,0,10.667-4.771,10.667-10.667C384,303.438,379.229,298.667,373.333,298.667z">
                                </path>
                                <path
                                  d="M373.333,405.333h-128c-5.896,0-10.667,4.771-10.667,10.667c0,5.896,4.771,10.667,10.667,10.667h128
                                                        c5.896,0,10.667-4.771,10.667-10.667C384,410.104,379.229,405.333,373.333,405.333z">
                                </path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="pl-4">
                        <p class="card-text fs-18">Tổng tiền đã mua khoá học</p>
                        <h5 class="card-title pt-2 fs-26">{{ `${Number(this.total_amount).toLocaleString('vi-VN')} VND` }}
                        </h5>
                      </div>
                    </div><!-- end card-body -->
                  </div><!-- end card -->
                </div>
                <div class="col-lg-12">
                  <div class="card card-item">
                    <div class="card-body">
                      <DataTable :columns="table_course_payments.columns" :data="table_course_payments.dataTable"
                        :options="table_course_payments.options" class="display nowrap" />
                    </div>
                  </div><!-- end card -->
                </div><!-- end col-lg-12 -->
              </div><!-- end row -->
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" :class="{ show: tab === 1, active: tab === 1 }">
        <div class="setting-body">
          <div>
            <div class="tab-pane fade show active" id="earning" role="tabpanel" aria-labelledby="earning-tab">
              <div class="row">
                <div class="col-lg-4 responsive-column-half">
                  <div class="card card-item dashboard-info-card">
                    <div class="card-body d-flex align-items-center">
                      <div class="icon-element flex-shrink-0 bg-4 text-white">
                        <svg class="svg-icon-color-white" width="40" version="1.1" xmlns="http://www.w3.org/2000/svg"
                          x="0px" y="0px" viewBox="0 0 490.667 490.667" xml:space="preserve">
                          <g>
                            <g>
                              <path
                                d="M245.333,85.333c-41.173,0-74.667,33.493-74.667,74.667s33.493,74.667,74.667,74.667S320,201.173,320,160
                                                    C320,118.827,286.507,85.333,245.333,85.333z M245.333,213.333C215.936,213.333,192,189.397,192,160
                                                    c0-29.397,23.936-53.333,53.333-53.333s53.333,23.936,53.333,53.333S274.731,213.333,245.333,213.333z">
                              </path>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M394.667,170.667c-29.397,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333S448,253.397,448,224
                                                    S424.064,170.667,394.667,170.667z M394.667,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32s32,14.357,32,32
                                                    C426.667,241.643,412.309,256,394.667,256z"></path>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path d="M97.515,170.667c-29.419,0-53.333,23.936-53.333,53.333s23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333
                                                    S126.933,170.667,97.515,170.667z M97.515,256c-17.643,0-32-14.357-32-32c0-17.643,14.357-32,32-32c17.643,0,32,14.357,32,32
                                                    C129.515,241.643,115.157,256,97.515,256z"></path>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M245.333,256c-76.459,0-138.667,62.208-138.667,138.667c0,5.888,4.779,10.667,10.667,10.667S128,400.555,128,394.667
                                                    c0-64.704,52.629-117.333,117.333-117.333s117.333,52.629,117.333,117.333c0,5.888,4.779,10.667,10.667,10.667
                                                    c5.888,0,10.667-4.779,10.667-10.667C384,318.208,321.792,256,245.333,256z">
                              </path>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M394.667,298.667c-17.557,0-34.752,4.8-49.728,13.867c-5.013,3.072-6.635,9.621-3.584,14.656
                                                    c3.093,5.035,9.621,6.635,14.656,3.584C367.637,323.712,380.992,320,394.667,320c41.173,0,74.667,33.493,74.667,74.667
                                                    c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667C490.667,341.739,447.595,298.667,394.667,298.667z">
                              </path>
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M145.707,312.512c-14.955-9.045-32.149-13.845-49.707-13.845c-52.928,0-96,43.072-96,96
                                                    c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667C21.333,353.493,54.827,320,96,320
                                                    c13.675,0,27.029,3.712,38.635,10.752c5.013,3.051,11.584,1.451,14.656-3.584C152.363,322.133,150.741,315.584,145.707,312.512z">
                              </path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="pl-4">
                        <p class="card-text fs-18">Tổng tiền nhận lớp</p>
                        <h5 class="card-title pt-2 fs-26">{{ `${Number(this.total_amount).toLocaleString('vi-VN')} VND` }}
                        </h5>
                      </div>
                    </div><!-- end card-body -->
                  </div><!-- end card -->
                </div>
                <div class="col-lg-12">
                  <div class="card card-item">
                    <div class="card-body">
                      <DataTable :columns="table_request_tutor_payments.columns"
                        :data="table_request_tutor_payments.dataTable" :options="table_request_tutor_payments.options"
                        class="display nowrap" />
                    </div>
                  </div><!-- end card -->
                </div><!-- end col-lg-12 -->
              </div><!-- end row -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $http from "@/services/httpService";
import dayjs from 'dayjs'

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      tab: null,
      is_loading: false,
      table_course_payments: {
        columns: [
          { data: 'created_at', title: 'Ngày thanh toán' },
          { data: 'course_title', title: 'Tên khoá học' },
          { data: 'tutor_name', title: 'Gia sư' },
          { data: 'course_price', title: 'Số tiền' },
          { data: 'amount', title: 'Đã thanh toán' },
          { data: 'status', title: 'Trạng thái' },
        ],
        options: {
          responsive: true,
        },
        dataTable: []
      },
      table_request_tutor_payments: {
        columns: [
          { data: 'created_at', title: 'Ngày thanh toán' },
          { data: 'request_tutor_title', title: 'Lớp yêu cầu gia sư' },
          { data: 'request_price', title: 'Số tiền' },
          { data: 'amount', title: 'Đã thanh toán' },
          { data: 'status', title: 'Trạng thái' },
        ],
        options: {
          responsive: true,
        },
        dataTable: []
      },
      total_amount: 0
    }
  },
  async created() {
    this.tab = 0;
  },
  watch: {
    tab: {
      async handler(val) {
        const response = await $http.get("/payment/histories", {
          user_id: this.user.id,
          payment_type: val
        });
        const payments = response.data.data.payment

        this.total_amount = response.data.data.total_amount

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
                course_price: `${Number(course.price).toLocaleString('vi-VN')} VND`,
                amount: `${Number(payment.amount).toLocaleString('vi-VN')} VND`,
                status: payment.status == 1 ? 'Đã Thanh Toán' : 'Chưa Thanh Toán',
                created_at: dayjs(payment.created_at).format('DD/MM/YYYY HH:mm:ss'),
              }
              break;
            case payment_request_tutor:
              {
                const request = offer_request_tutor.request

                this.table_request_tutor_payments.dataTable[index] = {
                  request_tutor_title: request.title,
                  request_price: `${Number(request.price * request.num_student).toLocaleString('vi-VN')} VND`,
                  amount: `${Number(payment.amount).toLocaleString('vi-VN')} VND`,
                  status: payment.status == 1 ? 'Đã Thanh Toán' : 'Chưa Thanh Toán',
                  created_at: dayjs(payment.created_at).format('DD/MM/YYYY HH:mm:ss'),
                }
                break;
              }
            default:
              break;
          }
        });
      }

    }
  }
}
</script>
<style>
@import 'datatables.net-dt';</style>