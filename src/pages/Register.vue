<template>
  <BreadCrum :type="0" />
  <section class="contact-area section-padding position-relative">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 mx-auto">
          <div class="card card-item" style="max-height: none !important">
            <div class="card-body">
              <h3 class="card-title text-center fs-24 lh-35 pb-4">
                Tạo tài khoản và <br />
                Bắt đầu trải nghiệm
              </h3>
              <div class="section-block"></div>
              <form class="pt-4">
                <div class="input-box">
                  <label class="label-text">
                    Họ
                    <span class="fs-14 text-color-6">*</span>
                  </label>
                  <div class="form-group">
                    <input
                      class="form-control form--control"
                      type="text"
                      placeholder="Nhập họ của bạn"
                      data-val-required="The FirstName field is required."
                      required
                    />
                    <i class="fa-regular fa-user input-icon"></i>
                  </div>
                </div>

                <div class="input-box">
                  <label class="label-text">
                    Tên
                    <span class="fs-14 text-color-6">*</span>
                  </label>
                  <div class="form-group">
                    <input
                      class="form-control form--control"
                      type="text"
                      placeholder="Nhập tên của bạn"
                      data-val-required="The LastName field is required."
                      required
                    />
                    <i class="fa-regular fa-user input-icon"></i>
                  </div>
                </div>

                <div class="input-box">
                  <label class="label-text">
                    Tên đăng nhập
                    <span class="fs-14 text-color-6">*</span>
                  </label>
                  <div class="form-group">
                    <input
                      class="form-control form--control"
                      type="text"
                      placeholder="Nhập tên đăng nhập của bạn"
                      data-val-required="The Username field is required."
                      required
                    />
                    <i class="fa-regular fa-user input-icon"></i>
                  </div>
                </div>

                <div class="input-box">
                  <label class="label-text">
                    Số điện thoại
                    <span class="fs-14 text-color-6">*</span>
                  </label>
                  <div class="form-group">
                    <input
                      class="form-control form--control"
                      type="text"
                      placeholder="Nhập số điện thoại của bạn"
                      data-val-required="The phonenumber field is required."
                      required
                    />
                    <i class="fa-solid fa-phone input-icon"></i>
                  </div>
                </div>

                <div class="input-box">
                  <label class="label-text">
                    Email
                    <span class="fs-14 text-color-6">*</span>
                  </label>
                  <div class="form-group">
                    <input
                      class="form-control form--control"
                      type="text"
                      placeholder="Nhập email của bạn"
                      data-val-required="The email field is required."
                      required
                    />
                    <i class="fa-regular fa-envelope input-icon"></i>
                  </div>
                </div>
                <div class="input-box">
                  <label class="label-text">
                    Mật khẩu
                    <span class="fs-14 text-color-6">*</span>
                  </label>
                  <div class="input-group mb-3">
                    <div class="form-group" style="width: 92%">
                      <input
                        class="form-control form--control"
                        :type="isDisplayPassword ? 'text ' : 'password'"
                        placeholder="Nhập mật khẩu của bạn"
                        data-val-required="The password field is required."
                        required
                      />
                      <i class="fa-solid fa-lock input-icon"></i>
                    </div>
                    <div
                      class="input-group-append"
                      style="width: 8%; height: 50px"
                    >
                      <button
                        class="btn theme-btn theme-btn-transparent toggle-password"
                        type="button"
                        @click="isDisplayPassword = !isDisplayPassword"
                      >
                        <i
                          class="fa-solid fa-eye"
                          v-if="!isDisplayPassword"
                        ></i>
                        <i class="fa-solid fa-eye-slash" v-else></i>
                      </button>
                    </div>
                  </div>
                  <label class="fs-12">
                    <span class="text-color-6">*</span>
                    Mật khẩu có 6-20 ký tự. Trong đó phải có ít nhất 1 chữ hoa,
                    1 chữ thường, 1 số, 1 ký tự đặc biệt!
                  </label>
                </div>
                <div class="input-box">
                  <label class="label-text">
                    Xác nhận mật khẩu
                    <span class="fs-14 text-color-1"
                      >(phải trùng khớp với mật khẩu)</span
                    >
                  </label>
                  <div class="input-group mb-3">
                    <div class="form-group" style="width: 92%">
                      <input
                        class="form-control form--control"
                        :type="isDisplayRePassword ? 'text ' : 'password'"
                        placeholder="Xác nhận mật khẩu"
                        data-val-required="The password field is required."
                        required
                      />
                      <i class="fa-solid fa-lock input-icon"></i>
                    </div>
                    <div
                      class="input-group-append"
                      style="width: 8%; height: 50px"
                    >
                      <button
                        class="btn theme-btn theme-btn-transparent toggle-password"
                        type="button"
                        @click="isDisplayRePassword = !isDisplayRePassword"
                      >
                        <i
                          class="fa-solid fa-eye"
                          v-if="!isDisplayRePassword"
                        ></i>
                        <i class="fa-solid fa-eye-slash" v-else></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="btn-box">
                  <button class="btn theme-btn">
                    Đăng ký tài khoản
                    <i class="fa-solid fa-arrow-right icon"></i>
                  </button>
                </div>
                <p class="fs-14 pt-2">
                  Bạn đã có tài khoản?
                  <router-link
                    class="text-color-1 hover-underline"
                    :to="{ name: 'login' }"
                    >Đăng nhập</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BreadCrum from "../components/layouts/BreadCrum.vue";
export default {
  components: {
    BreadCrum,
  },
  data() {
    return {
      isDisplayPassword: false,
      isDisplayRePassword: false,
    };
  },
};
</script>
<style scoped src="@/assets/styles/form.css"></style>