<template>
  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3">
        <span class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>

  <div class="top-bar">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <a href="#" class=""
            ><span class="mr-2 icon-envelope-open-o"></span>
            <span class="d-none d-md-inline-block">info@yourdomain.com</span></a
          >
          <span class="mx-md-2 d-inline-block"></span>
          <a href="#" class=""
            ><span class="mr-2 icon-phone"></span>
            <span class="d-none d-md-inline-block">1+ (234) 5678 9101</span></a
          >

          <div class="float-right">
            <a href="#" class=""
              ><span class="mr-2 icon-twitter"></span>
              <span class="d-none d-md-inline-block">Twitter</span></a
            >
            <span class="mx-md-2 d-inline-block"></span>
            <a href="#" class=""
              ><span class="mr-2 icon-facebook"></span>
              <span class="d-none d-md-inline-block">Facebook</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <header class="site-navbar js-sticky-header site-navbar-target" role="banner">
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
              <li><a href="#home-section" class="nav-link">Trang chủ</a></li>
              <li><a href="#services-section" class="nav-link">Khóa học</a></li>

              <li class="has-children">
                <a href="#about-section" class="nav-link">Dành cho gia sư</a>
                <ul class="dropdown arrow-top">
                  <li>
                    <a href="#team-section" class="nav-link"
                      >Trở thành gia sư</a
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
                <a href="#about-section" class="nav-link">Dành cho học viên</a>
                <ul class="dropdown arrow-top">
                  <li>
                    <a href="#team-section" class="nav-link">Tìm gia sư</a>
                  </li>
                  <li>
                    <a href="#pricing-section" class="nav-link"
                      >Gia sư hiện có</a
                    >
                  </li>
                </ul>
              </li>
              <li class="has-children">
                <a href="#about-section" class="nav-link">Bài viết</a>
                <ul class="dropdown arrow-top">
                  <li>
                    <a href="#team-section" class="nav-link">Tin tức sự kiện</a>
                  </li>
                  <li>
                    <a href="#pricing-section" class="nav-link"
                      >Câu hỏi thảo luận</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div class="toggle-button d-inline-block d-lg-none">
          <a href="#" class="site-menu-toggle py-5 js-menu-toggle text-black"
            ><span class="icon-menu h3"></span
          ></a>
        </div>
      </div>
    </div>
  </header>
</template>
<script >
export default {
  
};
</script>
<style scoped src="@/assets/styles/header.css"></style>