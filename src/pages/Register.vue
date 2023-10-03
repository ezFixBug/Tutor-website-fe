<template>
  <BreadCrum :type="0" />
  <spinner :is_loading="is_loading" />
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
                <div class="text-danger validation-summary-errors">
                  <ul>
                    <li v-if="dataErrors.avatar">{{ dataErrors.avatar }}</li>
                    <li v-if="dataErrors.first_name">
                      <div
                        v-for="(error, index) in dataErrors.first_name"
                        :key="index"
                      >
                        {{ error }}
                      </div>
                    </li>
                    <li v-if="dataErrors.last_name">
                      <div
                        v-for="(error, index) in dataErrors.last_name"
                        :key="index"
                      >
                        {{ error }}
                      </div>
                    </li>
                    <li v-if="dataErrors.username">
                      <div
                        v-for="(error, index) in dataErrors.username"
                        :key="index"
                      >
                        {{ error }}
                      </div>
                    </li>
                    <li v-if="dataErrors.phone_number">
                      <div
                        v-for="(error, index) in dataErrors.phone_number"
                        :key="index"
                      >
                        {{ error }}
                      </div>
                    </li>
                    <li v-if="dataErrors.email">
                      <div
                        v-for="(error, index) in dataErrors.email"
                        :key="index"
                      >
                        {{ error }}
                      </div>
                    </li>
                    <li v-if="dataErrors.password">
                      <div
                        v-for="(error, index) in dataErrors.password"
                        :key="index"
                      >
                        {{ error }}
                      </div>
                    </li>
                    <li v-if="dataErrors.cfm_password">
                      <div
                        v-for="(error, index) in dataErrors.cfm_password"
                        :key="index"
                      >
                        {{ error }}
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="media media-card align-items-center col-sm-12 mb-2">
                  <div class="media-img media-img-lg mr-4 bg-gray">
                    <img class="mr-3" :src="dataUser.avatar" />
                  </div>
                </div>
                <div class="media-body col-sm-12">
                  <div class="file-upload-wrap file-upload-wrap-2">
                    <input
                      type="file"
                      class="file-upload-input with-preview"
                      data-val-required="The Avatar field is required."
                      required
                      @change="onFileChangeAvatar"
                    />
                    <span class="file-upload-text">
                      <i class="fa-solid fa-image mr-2"></i>
                      Tải Avatar
                    </span>
                  </div>
                </div>
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
                      v-model="dataUser.first_name"
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
                      v-model="dataUser.last_name"
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
                      v-model="dataUser.username"
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
                      v-model="dataUser.phone_number"
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
                        v-model="dataUser.cfm_password"
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
                  <button class="btn theme-btn" @click="handleRegister" type="button">
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
import axios from "axios";
import isEmpty from "lodash/isEmpty";
import $auth from "@/services/authService";
import $http from "@/services/httpService";
import get from "lodash/get";
import set from "lodash/set";

export default {
  components: {
    BreadCrum,
  },
  data() {
    return {
      isDisplayPassword: false,
      isDisplayRePassword: false,
      is_loading: false,
      dataUser: {
        avatar: "https://smart-edu.vn/img/image.png",
        first_name: null,
        last_name: null,
        username: null,
        phone_number: null,
        email: null,
        password: null,
        cfm_password: null,
      },
      dataErrors: {
        avatar: null,
        first_name: null,
        last_name: null,
        username: null,
        phone_number: null,
        email: null,
        password: null,
        cfm_password: null,
      },
    };
  },

  methods: {
    async onFileChangeAvatar(event) {
      this.is_loading = true;
      const file = event.target.files[0];

      this.dataUser.avatar = await $http.uploadImageToCloud(file);
      this.is_loading = false;
    },

    async handleRegister() {
      this.is_loading = true;
      const response = await $auth.register(this.dataUser);
      this.is_loading = false;
      if (get(response, "data.user", null)) {
        window.location.href = "/";
      } else {
        if (get(response, "data.status", {}) === 400) {
          this.error = get(response, "data.message", {});
        } else {
          createToast(get(response, "data.message", {}), {
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