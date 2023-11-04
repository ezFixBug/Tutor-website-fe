<template>
  <div class="hero img-bg" style="background-image: url('https://smart-edu.vn/images/slider-img5.jpg')">
    <div class="hero-slider-item hero-bg-4"></div>
    <div class="overplay"></div>
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
            <div class="pt-2">
              <label class="label-text bg-white rounded py-1 px-2 fs-14 font-weight-medium lh-20">Bạn muốn học gì?</label>

              <div class="form-group mb-0">
                <div class="select-container w-auto">
                  <div class="dropdown bootstrap-select select-container-select dropup">
                    <Form :model="FormFilterCourse" @finish="handleSubmitFormFilterCource">
                      <FormItem>
                        <Select show-search v-model:value="FormFilterCourse.CourseName" :options="subjects" size="large"
                          placeholder="Chọn Khóa Học" class="w-75 mr-4" />
                        <Button type="primary" danger html-type="submit" :class="{ 'd-none': !FormFilterCourse.CourseName }" style="height: 100%; padding: 7px 16px;">
                          <span class="mr-1"> Tìm Kiếm</span>
                          <i class="fa-solid fa-arrow-right"></i>
                        </Button>
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="row hero-category-wrap">
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <router-link :to="{name: 'courses', params: {subject_id: 1}}" class="category-content">
                  <div style="color: #ec5252 !important" class="icon-element icon-element-md shadow-sm text-color">
                    <i class="fa-solid fa-calculator"></i>
                  </div>
                  <h3 class="cat__title fs-16">Toán</h3>
                </router-link>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <router-link :to="{name: 'courses', params: {subject_id: 3}}" class="category-content">
                  <div style="color: ##233d63 !important" class="icon-element icon-element-md shadow-sm text-color">
                    <i class="fa-solid fa-language"></i>
                  </div>
                  <h3 class="cat__title fs-16">Tiếng Anh</h3>
                </router-link>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <router-link :to="{name: 'courses', params: {subject_id: 21}}" class="category-content">
                  <div style="color: #7e3cf9 !important" class="icon-element icon-element-md shadow-sm text-color">
                    <i class="fa-solid fa-music"></i>
                  </div>
                  <h3 class="cat__title fs-16">Âm nhạc</h3>
                </router-link>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <router-link :to="{name: 'courses', params: {subject_id: 15}}" class="category-content">
                  <div style="color: #f68a03 !important" class="icon-element icon-element-md shadow-sm text-color">
                    <i class="fa-solid fa-business-time"></i>
                  </div>
                  <h3 class="cat__title fs-16">SEO</h3>
                </router-link>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <router-link :to="{name: 'courses', params: {subject_id: 8}}" class="category-content">
                  <div style="color: #358ff7 !important" class="icon-element icon-element-md shadow-sm text-color">
                    <i class="fa-solid fa-code"></i>
                  </div>
                  <h3 class="cat__title fs-16">Lập trình</h3>
                </router-link>
              </div>
            </div>
            <div class="col-lg-4 responsive-column-half">
              <div class="category-item category-item-layout-2">
                <router-link :to="{name: 'courses', params: {subject_id: 10}}" class="category-content">
                  <div style="color: #38bb0c !important" class="icon-element icon-element-md shadow-sm text-color">
                    <i class="fa-solid fa-users"></i>
                  </div>
                  <h3 class="cat__title fs-16">Kỹ năng mềm</h3>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { Select, FormItem, Form, Button } from "ant-design-vue";
export default {
  components: {
    Select,
    FormItem,
    Form,
    Button
  },
  data() {
    return {
      selectedValues: null,
      FormFilterCourse: {
        CourseName: null
      }
    };
  },

  props: {
    subjects: {
      type: Array,
      default: []
    }
  },

  methods: {
    handleSubmitFormFilterCource() {
      this.$router.push({name: 'courses', params: {subject_id: this.FormFilterCourse.CourseName}})
    },
  }
};
</script>
<style scoped src="@/assets/styles/header.css"></style>