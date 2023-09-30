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
          <router-link :to="{ path: '/' }" @click="is_active=false">Trang chủ</router-link>
        </li>
        <li><router-link :to="{ name: 'courses' }" @click="is_active=false">Khoá Học</router-link></li>
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
              <router-link @click="is_active=false" :to="{ name: 'becomeTutor' }"
                >Trở thành gia sư</router-link
              >
            </li>
            <li>
              <a href="#pricing-section" @click="is_active=false">Lớp học cần gia sư</a>
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
              <a href="#team-section" @click="is_active=false">Tìm gia sư</a>
            </li>
            <li>
              <router-link @click="is_active=false" :to="{ name: 'tutor' }">Gia sư hiện có</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link @click="is_active=false" :to="{ name: 'courses' }">Bài viết</router-link>
        </li>
      </ul>
      <div class="btn-box px-4 pt-5 text-center">
        <router-link
          class="btn theme-btn theme-btn-sm theme-btn-transparent"
          @click="is_active=false"
          :to="{ name: 'login' }"
        >
          <i class="fa-solid fa-arrow-right-to-bracket mr-1"></i>Đăng
          nhập</router-link
        >
        <span class="fs-15 font-weight-medium d-inline-block mx-2"> Or </span>
        <router-link
        @click="is_active=false"
          class="btn theme-btn theme-btn-sm shadow-none"
          :to="{ name: 'register' }"
          ><i class="fa-solid fa-user-pen"></i>Đăng ký</router-link
        >
      </div>
    </div>
    <div class="body-overlay" :class="{'active': is_active}" @click="is_active=false"></div>
  </header>
</template>
<script >
export default {
  data() {
    return {
      scrollY: 0,
      is_active: false,
    };
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss">
@import "../../assets/styles/paritials/_mixins.scss";
@import "../../assets/styles/paritials/_variables.scss";
@import "../../assets/styles/paritials/_button.scss";
@import "../../assets/styles/paritials/_menu.scss";
</style>