<template>
  <Card hoverable class="mb-4" @click="goToDetailCourse" style="height: 100%;text-align: left !important">
    <template #cover>
      <img
        alt="example"
        :src="course.image"
        style="height: 247px; max-width: 370px"
      />
    </template>
    <div class="course-categories">
      <h6
        class="ribbon ribbon-blue-bg fs-14 mb-3 mr-2"
        v-for="item in course.classes"
        :key="item.id"
      >
        {{ item.name }}
      </h6>
    </div>
    <h4>{{ course.title }}</h4>
    <p>{{ course.user ? course.user.full_name : null }}</p>
    <div class="d-flex justify-content-between align-items-center">
      <p v-if="course.price">{{ formattedPrice(course.price) }}</p>
      <p v-else>Miễn phí</p>
      <div
        class="icon-element icon-element-sm shadow-sm cursor-pointer btn-add-wish"
      >
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  </Card>
</template>
<script>
export default {
  props: ["course"],

  methods: {
    formattedPrice (price) {
      const priceFormat = Number(price).toLocaleString("vi-VN");
      return `${priceFormat} VND`;
    },
    
    goToDetailCourse() {
      this.$router.push({
        name: "detail-course",
        params: { id: this.course.id },
      });
    },
  },
};
</script>