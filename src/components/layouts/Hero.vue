<template>
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