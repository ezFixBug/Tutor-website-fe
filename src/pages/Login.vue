<template>
  <BreadCrumb :type="1" />
  <section class="contact-area section-padding position-relative">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 mx-auto">
          <div class="card card-item" style="max-height: none !important">
            <div class="card-body">
              <h3 class="card-title text-center fs-24 lh-35 pb-4">
                Đăng nhập!
              </h3>
              <div class="section-block"></div>
              <form class="pt-4">
                <div class="input-box">
                  <label class="label-text">
                    Email
                    <span class="fs-14 text-color-6">*</span>
                  </label>
                  <div class="form-group">
                    <input
                      class="form-control form--control"
                      type="text"
                      placeholder="Nhập email hoặc tên đăng nhập"
                      data-val-required="The field is required."
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
                </div>
                <div class="btn-box">
                  <div
                    class="d-flex align-items-center justify-content-between pb-4"
                  >
                    <div class="custom-control custom-checkbox fs-15">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="rememberMeCheckbox"
                      />
                      <label
                        for="rememberMeCheckbox"
                        class="custom-control-label custom--control-label btn-text"
                      >
                        Nhớ tài khoản
                      </label>
                    </div>
                    <a href="#" class="btn-text">Quên mật khẩu?</a>
                  </div>
                  <button class="btn theme-btn">
                    Đăng nhập
                    <i class="fa-solid fa-arrow-right icon"></i>
                  </button>
                </div>
                <p class="fs-14 pt-2">
                  Bạn chưa có tài khoản?
                  <router-link
                    class="text-color-1 hover-underline"
                    :to="{ name: 'register' }"
                    >Đăng ký</router-link
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
import BreadCrumb from "../components/layouts/BreadCrum.vue";
export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      isDisplayPassword: false,
    };
  },
};
</script>
<style scoped src="@/assets/styles/form.css"></style>