<template>
  <header
    class="site-navbar js-sticky-header site-navbar-target"
    role="banner"
    :class="{ fixed_header: scrollY > 125 }"
  >
    <div class="container">
      <div class="row align-items-center position-relative">
        <div class="site-logo">
          <a href="#" class="text-black"
            ><span class="text-primary">Brand </span></a
          >
        </div>
        <div class="col-12">
          <nav class="site-navigation text-right ml-auto" role="navigation">
            <ul
              class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block"
            >
              <li>
                <router-link class="nav-link" :to="{ path: '/' }"
                  >Trang chủ</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'courses' }">Khoá Học</router-link>
              </li>

              <li class="has-children">
                <a href="#about-section" class="nav-link"
                  >Dành cho gia sư <i class="fa-solid fa-chevron-down"></i
                ></a>
                <ul class="dropdown arrow-top">
                  <li>
                    <router-link class="nav-link" :to="{ name: 'login' }"
                      >Trở thành gia sư</router-link
                    >
                  </li>
                  <li>
                    <a href="#pricing-section" class="nav-link"
                      >Lớp học cần gia sư</a
                    >
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="#about-section" class="nav-link"
                  >Dành cho học viên <i class="fa-solid fa-chevron-down"></i
                ></a>
                <ul class="dropdown arrow-top">
                  <li>
                    <a href="#team-section" class="nav-link">Tìm gia sư</a>
                  </li>
                  <li>
                    <router-link class="nav-link" :to="{ name: 'tutor' }"
                      >Gia sư hiện có</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="#about-section" class="nav-link"
                  >Bài viết <i class="fa-solid fa-chevron-down"></i
                ></a>
                <ul class="dropdown arrow-top">
                  <li>
                    <router-link class="nav-link" :to="{ name: 'posts' }"
                      >Tin tức sự kiện</router-link
                    >
                  </li>
                  <li>
                    <a href="/bai-viet" class="nav-link">Câu hỏi thảo luận</a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link class="btn-login" :to="{ name: 'login' }"
                  >Đăng nhập</router-link
                >
              </li>
              <b class="text-muted">Or</b>
              <li>
                <router-link
                  class="btn-login btn-register"
                  :to="{ name: 'register' }"
                  ><i class="fa-solid fa-user-pen"></i>Đăng ký</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script >
export default {
  data() {
    return {
      scrollY: 0,
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
<style scoped src="@/assets/styles/header.css"></style>