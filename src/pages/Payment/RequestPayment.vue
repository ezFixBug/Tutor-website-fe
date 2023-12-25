<template>
  <BreadCrumb />
  <spinner :is_loading="is_loading" />
  <section class="cart-area section--padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="card card-item">
            <div class="card-body">
              <h3 class="card-title fs-22 pb-3">Thông tin</h3>
              <div class="divider"><span></span></div>
              <div class="payment-option-wrap">
                <div class="order-details-lists">
                  <div class="media media-card border-bottom border-bottom-gray pb-3 mb-3">
                    <input hidden="" readonly="" type="number" data-val="true"
                      data-val-required="The Id field is required." id="OrderItemVM_Id" name="OrderItemVM.Id"
                      value="1103">
                    <input hidden="" readonly="" type="text" data-val="true"
                      data-val-required="The CodeDiscount field is required." id="CodeDiscount" name="CodeDiscount"
                      value="">
                    <span class="media-img">
                      <img class="card-img-top lazy" :src=this.user.avatar alt="Card image cap">
                    </span>
                    <div class="media-body">
                      <h5 class="fs-15 pb-2">{{ this.user.full_name }}</h5>
                    </div>
                  </div><!-- end media -->
                </div>
              </div>
            </div><!-- end card-body -->
          </div>
          <div class="card card-item">
            <div class="card-body">
              <h3 class="card-title fs-22 pb-3">Nội dung yêu cầu thanh toán</h3>
              <div class="divider"><span></span></div>
              <div class="payment-option-wrap">
                <div class="order-details-lists">
                  <div class="media media-card border-bottom border-bottom-gray pb-3 mb-3">
                    <input hidden="" readonly="" type="number" data-val="true"
                      data-val-required="The Id field is required." id="OrderItemVM_Id" name="OrderItemVM.Id"
                      value="1103">
                    <input hidden="" readonly="" type="text" data-val="true"
                      data-val-required="The CodeDiscount field is required." id="CodeDiscount" name="CodeDiscount"
                      value="">
                    <span class="media-img">
                      <img class="card-img-top lazy" :src=this.data_payment.image alt="Card image cap">
                    </span>
                    <div class="media-body">
                      <h5 class="fs-15 pb-2">
                        <span v-if="course_id">
                          <router-link :to="{ name: 'detail-course', params: { id: this.data_payment.id || '1' } }">{{
                            this.data_payment.name }}</router-link>
                        </span>
                        <span v-else>
                          <router-link
                            :to="{ name: 'detail-request', params: { request_id: this.data_payment.id || '1' } }">{{
                              this.data_payment.name }}</router-link>
                        </span>
                      </h5>
                      <p class="text-black font-weight-semi lh-18">{{ getPrice }}</p>
                    </div>
                  </div><!-- end media -->
                </div>
              </div>
            </div><!-- end card-body -->
          </div>
        </div>
        <form class="col-lg-5">
          <input type="hidden" id="PaymentMethob" value="VISA" data-val="true"
            data-val-required="The PaymentMethob field is required." name="PaymentMethob">
          <input type="hidden" id="BankCode" data-val="true" data-val-required="The BankCode field is required."
            name="BankCode" value="">
          <div class="card card-item">
            <div class="card-body">
              <h3 class="card-title fs-22 pb-3">Thanh Toán</h3>
              <div class="divider"><span></span></div>
              <ul class="generic-list-item generic-list-item-flash fs-15">
                <li class="d-flex align-items-center justify-content-between font-weight-semi-bold">
                  <span class="text-black">Nội dung:</span>
                  <span>{{ data_payment.payment_type == 0 ? 'Mua Khoá Học' : 'Chấp nhận học viên' }}</span>
                </li>
                <li class="d-flex align-items-center justify-content-between font-weight-semi-bold">
                  <span class="text-black">Ngày:</span>
                  <span>{{ (new Date()).toLocaleDateString('en-GB') }}</span>
                </li>
                <li class="d-flex align-items-center justify-content-between font-weight-semi-bold"
                  v-if="data_payment.payment_type == 1">
                  <span class="text-black">Phí nhận học viên:</span>
                  <span>{{ getFortyPercentPrice }}</span>
                </li>
                <li v-if="data_payment.discount" class="d-flex align-items-center justify-content-between font-weight-semi-bold">
                  <span class="text-black">Khuyến mãi:</span>
                  <div>
                    <span>- {{ getDiscount }}</span>
                    <span v-if="data_payment.discount" class="ml-2" tyle="cursor: pointer;"
                      @click="() => { data_payment.discount && removeCoupon() }">
                      <i class="fa-solid fa-trash" style="color: #dc0404;"></i>
                    </span>
                  </div>
                </li>
                <li class="d-flex align-items-center justify-content-between font-weight-semi-bold">
                  <span class="text-black">Tổng tiền:</span>
                  <span>{{ getTotalAmount }}</span>
                </li>
                <li class="d-flex align-items-center justify-content-between">
                  <input v-model="coupon_code" class="form-control form--control pl-3 mr-3" type="text"
                    name="CodeDiscountApply" placeholder="Nhập code khuyến mãi">
                  <div class="btn theme-btn" style="height: 40px" @click="coupon_code && getCoupon()">Áp dụng</div>
                </li>
              </ul>
              <div class="btn-box border-top border-top-gray pt-3">
                <p>
                  <i>
                    <span style="color: #ff5a00; font-weight: bold; text-decoration: underline;">Lưu ý:</span>
                    Đối với <span class="fs-15 text-color-3">yêu cầu tìm kiếm gia sư</span>, bạn
                    phải thanh toán <span class="fs-15 text-color-3">10%/giá trị yêu cầu </span> 
                  </i>
                </p>
                <button type="button" class="btn theme-btn w-100" @click="handlePayment">Thanh toán <i
                    class="la la-arrow-right icon ml-1"></i></button>
              </div>
            </div><!-- end card-body -->
          </div><!-- end card -->
        </form><!-- end col-lg-5 -->
      </div><!-- end row -->
    </div><!-- end container -->
  </section>
</template>
<script>
import $http from "@/services/httpService";
import get from "lodash/get";
import $auth from "@/services/authService";
import CONSTS from '@/Constants'

export default {
  data() {
    return {
      data_payment: {
        id: null,
        image: null,
        name: null,
        price: 0,
        total_amount: 0,
        payment_type: this.$route.query.payment_type,
        discount: 0,
      },
      course_id: this.$route.query.course_id || null,
      offer_id: this.$route.query.offer_id || null,
      request_id: null,
      user: $auth.getUser,
      is_loading: false,
      coupon_code: null,
    };
  },

  created() {
    this.data_payment.payment_type == 0 ? this.getDetailCourse() : this.getDetailOffer();
  },

  computed: {
    getPrice() {
      return `${Number(this.data_payment.price).toLocaleString('vi-VN')} VND`;
    },

    getFortyPercentPrice() {
      const amount = 0.1 * this.data_payment.price;
      return `${Number(amount).toLocaleString('vi-VN')} VND`;
    },

    getTotalAmount() {
      return `${Number(this.data_payment.total_amount).toLocaleString('vi-VN')} VND`;
    },

    getDiscount() {
      return `${Number(this.data_payment.discount).toLocaleString('vi-VN')} VND`;
    },

  },

  methods: {
    async getDetailCourse() {
      this.is_loading = true;
      const course_id = this.$route.query.course_id;
      const res = await $http.get("/course/" + course_id);
      if (get(res, "data.result", false)) {
        const course = res.data.course;
        this.data_payment.id = course.id
        this.data_payment.name = course.title
        this.data_payment.price = course.price,
          this.data_payment.image = course.image
      }
      const amount = 0.1 * this.data_payment.price;
      this.data_payment.total_amount = Number(this.data_payment.price) + (this.data_payment.payment_type == 0 ? 0 : amount);
      this.is_loading = false;
    },

    async getDetailOffer() {
      this.is_loading = true;
      const offer_id = this.$route.query.offer_id;
      const res = await $http.get("/offer-detail/" + offer_id);
      if (get(res, "data.result", false)) {
        const request = res.data.offer?.request;
        this.request_id = request.id
        this.data_payment.id = request.id
        this.data_payment.name = request.title
        this.data_payment.price = request.price
      }
      const amount = 0.1 * this.data_payment.price;
      this.data_payment.total_amount = (this.data_payment.payment_type == 0 ? 0 : amount);
      this.is_loading = false;
    },

    async handlePayment() {
      window.location.href = await this.getMomoPaymentUrl()
    },

    async getMomoPaymentUrl() {
      const response = await $http.post("/momo-payment", {
        total_amount: this.data_payment.total_amount,
        payment_type: this.data_payment.payment_type,
        course_id: this.data_payment.id,
        request_tutors_id: this.data_payment.id,
        user_id: this.user.id
      });

      return response.data
    },

    async getVnPayPaymentUrl() {
      const response = await $http.post("/vn-pay", {
        total_amount: this.data_payment.total_amount,
        payment_type: this.data_payment.payment_type,
        course_id: this.data_payment.id,
        request_tutors_id: this.data_payment.id,
        user_id: this.user.id
      });

      return response.data
    },

    async getCoupon() {
      this.is_loading = true;
      const res = await $http.get("/coupons/" + this.coupon_code);
      if (get(res, "data.result", false)) {
        const coupon = res.data.coupon;
        if (coupon.type === CONSTS.CD_COUPON_TYPE.CASH) {
          this.data_payment.discount = parseInt(coupon.discount)
        } else {
          this.data_payment.discount = parseInt((this.data_payment.total_amount * coupon.discount) / 100);
        }
        this.data_payment.total_amount -= this.data_payment.discount;
      }
      this.is_loading = false;
    },

    removeCoupon() {
      this.data_payment.discount = 0;
      this.coupon_code = null;
    }
  }
};
</script>