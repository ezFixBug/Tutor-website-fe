<template>
  <section class="category-area bg-gray section-padding text-center">
    <div class="containter">
      <div class="section-heading">
        <h2 class="section__title">Danh mục phổ biến</h2>
      </div>
      <div class="row pt-50px">
        <div
          class="col-lg-4 responsive-column-half"
          v-for="item in listCategories"
          :key="item.id"
        >
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  :src="item.image"
                  alt="Math"
                  style="width: 100%; height: 100%; opacity: 0.9"
                  class="flip-img lazy"
                />
                <a
                  href="#"
                  class="flip-content d-flex align-items-center justify-content-center"
                  >{{ item.name }}</a
                >
              </div>
              <div class="flip-card-back">
                <img
                  :src="item.image"
                  alt="Math"
                  style="width: 100%; height: 100%; opacity: 0.9; "
                  class="flip-img lazy"
                />
                <a
                  href="#"
                  class="flip-content d-flex align-items-center justify-content-center"
                  style="flex-direction: column"
                >
                  Xem khóa học</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-more-box pt-4 text-center">
        <router-link :to="{name: 'categories'}" class="btn theme-btn">Xem tất cả danh mục<i class="fa-solid fa-arrow-right icon"></i></router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  props: {
    listCategories: {
      type: Array,
      default: []
    }
  }
};
</script>
<style scoped src="@/assets/styles/category.css"></style>