<template>
  <Card hoverable class='mb-4' @click="goToDetailCourse">
    <router-link :to="{ name: 'detail-course', params: { id: 1 } }" class="text-secondary">
    </router-link>
    <template #cover>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        style="max-height: 247px; max-width: 370px;" />
    </template>
    <div class="course-categories">
      <h6 class="ribbon ribbon-blue-bg fs-14 mb-3 mr-2" v-for="category in course.category" :key="category.id">{{
        category.name }}</h6>
    </div>
    <h4>{{ course.name }}</h4>
    <p>{{ course.instructor }}</p>
    <div class="d-flex justify-content-between align-items-center">
      <p>{{ course.price }}</p>
      <div class="icon-element icon-element-sm shadow-sm cursor-pointer btn-add-wish">
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  </Card>
</template>
<script>
export default {
  props: ['course'],

  methods: {
    goToDetailCourse() {
      this.$router.push({ name: 'detail-course', params: { id: this.course.id } });
    }
  },
}
</script>