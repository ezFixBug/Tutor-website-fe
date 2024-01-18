<template>
  <section class="course-area section--padding position-relative overflow-hidden pt-0">
    <div class="course-wrapper">
      <div class="container">
        <div class="section-heading text-center">
          <h2 class="section__title">Khóa học thịnh hành</h2>
        </div>
        <div class="course-carousel owl-action-styled owl--action-styled mt-50px owl-loaded owl-carousel">
          <Carousel :breakpoints=BreakPoints>
            <Slide class="col-sm-4" v-for="course in courses" :key="course.id">
              <Course :course=course />
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Course from '../pages/Courses/Course.vue'
import 'vue3-carousel/dist/carousel.css'

export default {
  props: ['courses'],
  components: {
    Carousel,
    Slide,
    Navigation,
    Course,
  },
  data: () => ({
    BreakPoints: {
      700: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },
  }),
  created() {
    console.log(this.courses);
  }
}
</script>
<style scope lang="scss">
.carousel__prev,
.carousel__next {
  height: 45px;
  width: 45px;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0 6px 30px rgba(82, 85, 90, 0.1);
  transition: all 0.3s;

  :hover {
    background-color: #ec5252;
    color: #fff;
    height: 45px;
    width: 45px;
    border-radius: 100%;
  }
}
</style>