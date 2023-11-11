<template>
  <spinner :is_loading="is_loading" />
  <Hero :subjects="subjects" />
  <TypicalTutor :listTutors="listTutors" />
  <div class="section-block"></div>
  <GetStarted />
  <CategoriesPopular :listCategories="listCategories" />
  <Statistic
    :quantityCoure="quantityCoure"
    :quantityTutor="quantityTutor"
    :quantityStudent="quantityStudent"
    :quantityRequest="quantityRequest"
  />
  <OwlCarouselCourses :courses="courses" />
  <section
    class="cat-area section-padding img-bg"
    style="background-image: url('https://smart-edu.vn/images/img7.jpg')"
  >
    <div class="overplay"></div>
    <div class="container">
      <div class="cta-content-wrap text-center position-relative">
        <div class="section-heading">
          <h2 class="section__title fs-35 lh-60 text-white">
            Tại sao không? Hãy thay đổi từ những điều nhỏ nhất, hãy tham gia 1
            trong những khóa học chất lượng hoặc trở thành 1 trong những gia sư
            tốt nhất của chúng tôi.
          </h2>
        </div>
        <div class="cat-btn-box mt-35px">
          <a href="#" class="btn theme-btn theme-btn-white">
            Get Started <i class="fa-solid fa-arrow-right icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
  <Reviews :listReviews="listReviews" />
</template>
<script>
import Hero from "../components/layouts/Hero.vue";
import TypicalTutor from "../components/TypicalTutor.vue";
import CategoriesPopular from "../components/layouts/CategoriesPopular.vue";
import GetStarted from "../components/layouts/GetStarted.vue";
import Reviews from "../components/layouts/Reviews.vue";
import Statistic from "../components/layouts/Statistic.vue";
import OwlCarouselCourses from "./OwlCarouselCourses.vue";

import $http from "@/services/httpService";
import get from "lodash/get";

export default {
  setup() {
    const formattedPrice = (price) => {
      const priceFormat = price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return priceFormat.replace(priceFormat.slice(-1), "VND");
    };

    const courses = [];

    for (let i = 1; i <= 10; i++) {
      const courseData = {
        id: i,
        image: "",
        category: [
          { id: 1, name: "Các Lớp Khác" },
          { id: 2, name: "Lớp 10" },
          { id: 3, name: "lớp 11" },
          { id: 4, name: "lớp 11" },
          { id: 5, name: "lớp 11" },
          { id: 6, name: "lớp 11" },
          { id: 7, name: "lớp 11" },
        ],
        name: `name ${i}`,
        instructor: `instructor ${i}`,
        rate: 3,
        price: formattedPrice(7000000),
      };

      courses.push(courseData);
    }

    return {
      courses,
    };
  },

  components: {
    TypicalTutor,
    Hero,
    CategoriesPopular,
    GetStarted,
    Statistic,
    Reviews,
    OwlCarouselCourses,
  },

  data() {
    return {
      is_loading: false,
      quantityTutor: 215,
      quantityCoure: 215,
      quantityStudent: 215,
      quantityRequest: 215,
      listReviews: [],
      subjects: [],
      listTutors: [],
    };
  },

  async created() {
    this.is_loading = true;
    this.subjects = await $http.getSubjects();
    this.listCategories = this.subjects.slice(0, 6);

    const res = await $http.get("/courses", { order_by_like: true });
    if (get(res, "data.result", false)) {
      this.courses = res.data.courses;
    }

    const response = await $http.get("/feedbacks");
    if (get(response, "data.result", false)) {
      this.listReviews = response.data.feedbacks;
    }

    const res_tutors = await $http.get("/tutors");
    if (get(res_tutors, "data.result", false)) {
      this.listTutors = res_tutors.data.tutors.slice(0, 8);
    }
    this.is_loading = false;
  },
};
</script>
<style scoped src="@/assets/styles/homepage.css"></style>