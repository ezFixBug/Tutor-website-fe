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

  <div
    class="hero"
    style="background-image: url('https://smart-edu.vn/images/slider-img5.jpg')"
  >
    <div class="hero-slider-item hero-bg-4+5"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="hero-content">
            <div class="section-heading">
              <h1 class="section__title text-white fs-36 lh-55 pb-3">
                Gia sư ưu tú và khóa học tinh hoa tại Smart-Edu.vn - Xứng danh
                chất lượng qua đánh giá học viên
              </h1>
              <p class="section__desc text-white pb-4">
                Khám phá sự xuất sắc của gia sư và tận hưởng những khóa học tinh
                hoa trên nền tảng Smart-Edu.vn - nơi đánh giá chất lượng gia sư
                qua góc nhìn của học viên. Với chúng tôi, gia sư xuất sắc có thể
                tăng giá trị dựa trên năng lực và nhận được những đánh giá tích
                cực từ học viên. Hãy tham gia ngay để khẳng định chất lượng và
                chứng minh tài năng giảng dạy của bạn!
              </p>
            </div>
            <form class="w-75 pt-2">
              <label
                class="label-text bg-white rounded py-1 px-2 fs-14 font-weight-medium lh-20"
                >Bạn muốn học gì?</label
              >
              <div class="form-group mb-0">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <FormItem>
                      <Select
                        v-model="selectedValues"
                        :options="listOptionCoures"
                      />
                    </FormItem>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="row hero-category-wrap">
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <a href="#" class="category-content">
                  <div
                    class="icon-element icon-element-md shadow-sm text-color"
                  >
                    <i class="fa-solid fa-calculator"></i>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <a href="#" class="category-content">
                  <div
                    class="icon-element icon-element-md shadow-sm text-color"
                  >
                    <i class="fa-solid fa-language"></i>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <a href="#" class="category-content">
                  <div
                    class="icon-element icon-element-md shadow-sm text-color"
                  >
                    <i class="fa-solid fa-music"></i>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <a href="#" class="category-content">
                  <div
                    class="icon-element icon-element-md shadow-sm text-color"
                  >
                    <i class="fa-solid fa-business-time"></i>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <a href="#" class="category-content">
                  <div
                    class="icon-element icon-element-md shadow-sm text-color"
                  >
                    <i class="fa-solid fa-code"></i>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <a href="#" class="category-content">
                  <div
                    class="icon-element icon-element-md shadow-sm text-color"
                  >
                    <i class="fa-solid fa-cookie-bite"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { Select, FormItem } from "ant-design-vue";
export default {
  components: {
    Select,
    FormItem,
  },
  data() {
    return {
      selectedValues: [],
      listOptionCoures: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
    };
  },
};
</script>
<style scoped src="@/assets/styles/header.css"></style>