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
        <span class="nav-link" :class="{ active: tab === 0 }"> Thanh toán nhận học viên </span>
      </li>
      <li class="nav-item" @click="tab = 1">
        <span class="nav-link" :class="{ active: tab === 1 }">
          Thanh toán mua khoá học
        </span>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade" :class="{ show: tab === 0, active: tab === 0 }">
        <div class="setting-body">
          <div>
            <div class="tab-pane fade show active" id="earning" role="tabpanel" aria-labelledby="earning-tab">
              <div class="row">
                <div class="col-lg-12">
                  <div class="card card-item">
                    <div class="card-body">

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
                <div class="col-lg-12">
                  <div class="card card-item">
                    <div class="card-body">

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
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')),
      tab: 0,
      is_loading: false,
    }
  },
  async created() {
    const response = await $http.get("/payment/histories", {
      user_id: "9a825892-c852-43e6-aaaa-66784c29d0da",
      payment_type: 0
    });
    
    const payments = response.data
    console.log(payments.data.payment[0].register_course);
  },
}
</script>