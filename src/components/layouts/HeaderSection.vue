<template>
  <header class="header-menu-area" :class="{ fixed_header: scrollY > 125 }">
    <div class="header-menu-content bg-white">
      <div class="container">
        <div class="main-menu-content">
          <div class="row align-items-center">
            <div class="col-lg-2">
              <div class="logo-box">
                <a href="#" class="logo">
                  <img
                    class="img-fluid"
                    src="https://smart-edu.vn/images/logo_7.png"
                    alt="Logo"
                  />
                </a>
                <div class="user-btn-action">
                  <div
                    class="off-canvas-menu-toggle main-menu-toggle shadow-sm"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Main menu"
                    @click="is_active = !is_active"
                  >
                    <i class="fa-solid fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-10">
              <div class="menu-wrapper">
                <nav class="main-menu">
                  <ul>
                    <li>
                      <router-link :to="{ path: '/' }">Trang chủ</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'courses' }"
                        >Khoá Học</router-link
                      >
                    </li>
                    <li>
                      <a href="#">
                        Dành cho gia sư <i class="fa-solid fa-chevron-down"></i>
                      </a>
                      <ul class="dropdown-menu-item">
                        <li>
                          <router-link :to="{ name: 'becomeTutor' }"
                            >Trở thành gia sư</router-link
                          >
                        </li>
                        <li>
                          <a href="#pricing-section">Lớp học cần gia sư</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Dành cho học viên
                        <i class="fa-solid fa-chevron-down"></i>
                      </a>
                      <ul class="dropdown-menu-item">
                        <li>
                          <a href="#team-section">Tìm gia sư</a>
                        </li>
                        <li>
                          <router-link :to="{ name: 'tutor' }"
                            >Gia sư hiện có</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link :to="{ name: 'courses' }"
                        >Bài viết</router-link
                      >
                    </li>
                  </ul>
                </nav>
                <div
                  class="nav-right-button border-left border-left-gray pl-4 mr-3"
                  v-if="!hasLogin"
                >
                  <ul class="generic-list-item">
                    <li>
                      <router-link class="btn-login" :to="{ name: 'login' }"
                        >Đăng nhập</router-link
                      >
                    </li>
                    <li>Or</li>
                    <li>
                      <router-link
                        class="btn theme-btn theme-btn-sm text-white"
                        :to="{ name: 'register' }"
                        ><i class="fa-solid fa-user-pen"></i>Đăng
                        ký</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div v-else class="nav-right-button d-flex align-items-center">
                  <div class="user-action-wrap d-flex align-items-center">
                    <div
                      class="shop-cart wishlist-cart pr-3 mr-3 border-right border-right-gray"
                    >
                      <ul>
                        <li>
                          <router-link
                            :to="{ path: '/' }"
                            class="shop-cart-btn d-flex align-items-center"
                            ><i class="fa-regular fa-heart"></i
                            ><span class="noty-number">1</span></router-link
                          >
                        </li>
                      </ul>
                    </div>
                    <div
                      class="shop-cart notification-cart pr-3 mr-3 border-right border-right-gray"
                    >
                      <ul>
                        <li>
                          <p class="shop-cart-btn">
                            <i class="fa-regular fa-bell"></i>
                          </p>
                        </li>
                        <ul
                          class="cart-dropdown-menu after-none p-0 notification-dropdown-menu scrolled-box custom-scrollbar-styled"
                        >
                          <li
                            class="menu-heading-block d-flex align-items-center justify-content-between"
                          >
                            <h4>Thông báo</h4>
                            <span class="ribbon fs-14"> 0 </span>
                          </li>
                          <li>
                            <!-- To do display list notification -->
                            <div class="notification-body"></div>
                          </li>
                          <li class="menu-heading-block">
                            <router-link
                              class="btn theme-btn w-100"
                              :to="{ path: '/' }"
                            >
                              Tất cả thông báo
                              <i class="fa-solid fa-arrow-right icon ml-1"></i>
                            </router-link>
                          </li>
                        </ul>
                      </ul>
                    </div>
                    <div class="shop-cart user-profile-cart pr-3 mr-3">
                      <ul>
                        <li>
                          <div class="shop-cart-btn">
                            <div class="avatar-xs">
                              <img
                                :src="user.avatar"
                                class="rounded-full img-fluid"
                                alt=""
                              />
                            </div>
                            <span class="dot-status bg-1"></span>
                          </div>
                          <ul
                            class="cart-dropdown-menu after-none p-0 notification-dropdown-menu scrolled-box custom-scrollbar-styled"
                            style="z-index: 9999"
                          >
                            <li
                              class="menu-heading-block d-flex align-items-center"
                            >
                              <router-link
                                :to="{ path: '/' }"
                                class="avatar-sm flex-shrink-0 d-block"
                              >
                                <img
                                  class="rounded-full img-fluid"
                                  :src="user.avatar"
                                  alt="Avatar image"
                                />
                              </router-link>
                              <div class="ml-2">
                                <h4>
                                  <router-link
                                    :to="{ path: '/' }"
                                    class="text-black"
                                  >
                                    {{ user.first_name + " " + user.last_name }}
                                  </router-link>
                                </h4>
                                <span class="d-block fs-14 lh-20">
                                  {{ user.email }}
                                </span>
                              </div>
                            </li>
                            <li>
                              <ul class="generic-list-item">
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i class="fa-solid fa-user-pen mr-1"></i>
                                    Thông tin người dùng</router-link
                                  >
                                </li>
                                <li><div class="section-block"></div></li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-file-circle-plus mr-1"
                                    ></i>
                                    Tạo khóa học</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-circle-question mr-1"
                                    ></i>
                                    Câu hỏi thảo luận</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-square-check mr-1"
                                    ></i>
                                    Khóa học đã đăng ký</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i class="fa-solid fa-user-plus mr-1"></i>
                                    Yêu cầu gia sư</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-book-open-reader mr-1"
                                    ></i>
                                    Bài viết của tôi</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-money-bill-transfer mr-1"
                                    ></i>
                                    Thanh toán &amp; nhận lớp</router-link
                                  >
                                </li>

                                <li><div class="section-block"></div></li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-person-circle-plus mr-1"
                                    ></i>
                                    Thanh toán &amp; yêu cầu gia sư</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-clock-rotate-left mr-1"
                                    ></i>
                                    Lịch sử giao dịch</router-link
                                  >
                                </li>

                                <li><div class="section-block"></div></li>

                                <li><div class="section-block"></div></li>
                                <li>
                                  <a @click="handleLogout">
                                    <i
                                      class="fa-solid fa-right-from-bracket mr-1"
                                    ></i>
                                    Đăng xuất
                                  </a>
                                </li>
                                <li><div class="section-block"></div></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="off-canvas-menu custom-scrollbar-styled main-off-canvas-menu"
      :class="{ active: is_active }"
    >
      <div
        class="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
        data-toggle="tooltip"
        data-placement="left"
        data-original-title="Close menu"
        title
        @click="is_active = false"
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
      <ul class="generic-list-item off-canvas-menu-list pt-90px">
        <li>
          <router-link :to="{ path: '/' }" @click="is_active = false"
            >Trang chủ</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'courses' }" @click="is_active = false"
            >Khoá Học</router-link
          >
        </li>
        <li>
          <a
            href="#"
            class="open-menu collapsed"
            data-toggle="collapse"
            data-target="#tutor"
          >
            Dành cho gia sư
            <button class="sub-nav-toggler" type="button">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </a>
          <ul class="collapse" id="tutor">
            <li>
              <router-link
                @click="is_active = false"
                :to="{ name: 'becomeTutor' }"
                >Trở thành gia sư</router-link
              >
            </li>
            <li>
              <a href="#pricing-section" @click="is_active = false"
                >Lớp học cần gia sư</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            class="open-menu collapsed"
            data-toggle="collapse"
            data-target="#student"
          >
            Dành cho học viên
            <button class="sub-nav-toggler" type="button">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </a>
          <ul class="collapse" id="student">
            <li>
              <a href="#team-section" @click="is_active = false">Tìm gia sư</a>
            </li>
            <li>
              <router-link @click="is_active = false" :to="{ name: 'tutor' }"
                >Gia sư hiện có</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <router-link @click="is_active = false" :to="{ name: 'courses' }"
            >Bài viết</router-link
          >
        </li>
      </ul>
      <h4 class="off-canvas-menu-heading pt-20px" v-if="hasLogin">
        Menu người dùng
      </h4>
      <ul
        class="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray"
        v-if="hasLogin"
      >
        <li>
          <router-link :to="{ name: 'setting-basic' }">
            Thông tin người dùng</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'setting-basic' }">
            Khóa học của tôi</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'setting-basic' }">
            Khóa học đã đăng ký</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'setting-basic' }">
            Yêu cầu gia sư <span class="product-count">0</span></router-link
          >
        </li>
        <li>
          <a href="#" class="open-menu"
            >Bài viết<button class="sub-nav-toggler" type="button">
              <i class="fa-solid fa-chevron-down"></i></button
          ></a>
          <ul class="sub-menu" style="display: none">
            <li>
              <router-link :to="{ name: 'setting-basic' }">
                Bài viết của tôi</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'setting-basic' }">
                Tất cả bài viết</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="open-menu"
            >Giao dịch<button class="sub-nav-toggler" type="button">
              <i class="fa-solid fa-chevron-down"></i></button
          ></a>
          <ul class="sub-menu" style="display: none">
            <li>
              <a href="/hoc-vien-yeu-cau-gia-su"
                >Thanh toán yêu cầu gia sư
                <span class="product-count">0</span></a
              >
            </li>
            <li>
              <a href="/hoc-vien-dang-ky-khoa-hoc"
                >Thanh toán &amp; nhận lớp
                <span class="product-count">0</span></a
              >
            </li>
            <li><a href="/thong-ke">Lịch sử giao dịch</a></li>
          </ul>
        </li>
        <li>
          <a a href="#" @click="handleLogout">Đăng xuất</a>
        </li>
      </ul>
      <div class="btn-box px-4 pt-5 text-center" v-else>
        <router-link
          class="btn theme-btn theme-btn-sm theme-btn-transparent"
          @click="is_active = false"
          :to="{ name: 'login' }"
        >
          <i class="fa-solid fa-arrow-right-to-bracket mr-1"></i>Đăng
          nhập</router-link
        >
        <span class="fs-15 font-weight-medium d-inline-block mx-2"> Or </span>
        <router-link
          @click="is_active = false"
          class="btn theme-btn theme-btn-sm shadow-none"
          :to="{ name: 'register' }"
          ><i class="fa-solid fa-user-pen"></i>Đăng ký</router-link
        >
      </div>
    </div>
    <div
      class="body-overlay"
      :class="{ active: is_active }"
      @click="is_active = false"
    ></div>
  </header>
</template>
<script >
import $auth from "@/services/authService";
import get from "lodash/get";
import set from "lodash/set";
export default {
  data() {
    return {
      scrollY: 0,
      is_active: false,
    };
  },
  computed: {
    hasLogin() {
      return $auth.hasValue;
    },

    user() {
      return $auth.getUser;
    },
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    
    handleLogout() {
      $auth.logout();
      window.location.href = "/";
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/paritials/_mixins.scss";
@import "../../assets/styles/paritials/_variables.scss";
@import "../../assets/styles/paritials/_button.scss";
@import "../../assets/styles/paritials/_custom.scss";
@import "../../assets/styles/paritials/_common.scss";
@import "../../assets/styles/paritials/_menu.scss";
.avatar-xs .img-fluid {
  width: 32px !important;
  height: 32px !important;
}
.avatar-sm .img-fluid {
  width: 48px !important;
  height: 48px !important;
}
.noty-number {
  position: absolute;
  bottom: 10px;
  right: -12px;
  font-size: 14px;
  width: 17px;
  height: 17px;
  padding-bottom: 16px;
  color: red;
  font-weight: 500;
}
</style>