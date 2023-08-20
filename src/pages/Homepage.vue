<template>
  <Hero />
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

export default {
  setup() {
    const formattedPrice = (price) => {
      const priceFormat = price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
      return priceFormat.replace(priceFormat.slice(-1), "VND")
    }

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
    }
  },
  data() {
    return {
      quantityTutor: 215,
      quantityCoure: 215,
      quantityStudent: 215,
      quantityRequest: 215,
      listReviews: [
        {
          id: 1,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel sit dignissimos voluptates tempora odit suscipit debitis sed atque eum nobis delectus voluptate minima maxime, esse ipsam doloremque? Sit, eveniet!",
          avatar: "https://smart-edu.vn/img/avatar.png",
          fullname: "Tong Le Thang",
        },
        {
          id: 2,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel sit dignissimos voluptates tempora odit suscipit debitis sed atque eum nobis delectus voluptate minima maxime, esse ipsam doloremque? Sit, eveniet!",
          avatar: "https://smart-edu.vn/img/avatar.png",
          fullname: "Tong Le Thang",
        },
        {
          id: 3,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel sit dignissimos voluptates tempora odit suscipit debitis sed atque eum nobis delectus voluptate minima maxime, esse ipsam doloremque? Sit, eveniet!",
          avatar: "https://smart-edu.vn/img/avatar.png",
          fullname: "Tong Le Thang",
        },
        {
          id: 4,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel sit dignissimos voluptates tempora odit suscipit debitis sed atque eum nobis delectus voluptate minima maxime, esse ipsam doloremque? Sit, eveniet!",
          avatar: "https://smart-edu.vn/img/avatar.png",
          fullname: "Tong Le Thang",
        },
      ],
      listCategories: [
        {
          id: 1,
          name: "Toán học",
          image:
            "https://sigmabooks.vn/uploads/images/ly-do-cac-em-hoc-sinh-can-phai-hoc-toan.jpg",
        },
        {
          id: 2,
          name: "Toán học",
          image:
            "https://sigmabooks.vn/uploads/images/ly-do-cac-em-hoc-sinh-can-phai-hoc-toan.jpg",
        },
        {
          id: 3,
          name: "Toán học",
          image:
            "https://sigmabooks.vn/uploads/images/ly-do-cac-em-hoc-sinh-can-phai-hoc-toan.jpg",
        },
        {
          id: 4,
          name: "Toán học",
          image:
            "https://sigmabooks.vn/uploads/images/ly-do-cac-em-hoc-sinh-can-phai-hoc-toan.jpg",
        },
      ],
      listTutors: [
        {
          id: 1,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 2,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 3,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 4,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 5,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar:
            "https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=w240-h480-rw",
        },
        {
          id: 6,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 7,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
      ],
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
};
</script>
<style scoped src="@/assets/styles/homepage.css"></style>