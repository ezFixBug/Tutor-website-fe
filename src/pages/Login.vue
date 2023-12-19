<template>
  <BreadCrumb :type="1" />
  <spinner :is_loading="is_loading" />
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
              <div class="text-danger validation-summary-errors">
                <ul>
                  <li>{{ error }}</li>
                </ul>
              </div>
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
                      v-model="dataUser.email"
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
                        v-model="dataUser.password"
                      />
                      <i class="fa-solid fa-lock input-icon"></i>
                    </div>
                    <div
                      class="input-group-append"
                      style="width: 8%; height: 40px"
                    >
                      <button
                        class="btn theme-btn theme-btn-transparent toggle-password"
                        style="height: 100%;"
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
                    <a href="#" class="btn-text">Quên mật khẩu?</a>
                  </div>
                  <button
                    class="btn theme-btn"
                    type="button"
                    @click="handleLogin"
                  >
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
import $auth from "@/services/authService";
import get from "lodash/get";
import set from "lodash/set";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export default {
  components: {
    BreadCrumb,
  },
  data() {
    return {
      isDisplayPassword: false,
      is_loading: false,
      dataUser: {
        email: null,
        password: null,
      },
      error: null,
    };
  },

  methods: {
    async handleLogin() {
      this.is_loading = true;
      const response = await $auth.login(this.dataUser);
      this.is_loading = false;
      if (get(response, "data.user", null)) {
        window.location.href = "/";
      } else {
        if (get(response, "data.status", {}) === 400) {
          this.error = get(response, "data.message", {});
        } else if (get(response, "code", null) === "ERR_NETWORK") {
          createToast(get(response, "message", {}), {
            type: "danger",
            timeout: 6000,
          });
        } else {
          createToast(get(response, "data.errors", {}), {
            type: "danger",
            timeout: 6000,
          });
        }
      }
    },
  },
};
</script>
<style scoped src="@/assets/styles/form.css"></style>