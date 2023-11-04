<template>
  <div class="category-item">
    <img
      class="cat__img lazy"
      style="height: 250px"
      :src="category.image"
      data-src="https://storage.smart-edu.vn\files\category\20230608091052mon toan.png"
      alt="Category image"
    />
    <div class="category-content">
      <div class="category-inner">
        <h3 class="cat__title">
          <a href="#" onclick="return false;">{{ category.label }}</a>
        </h3>
        <p class="cat__meta">{{ category.numOfCourse }}</p>

        <router-link
          :to="{ name: 'courses', params: { subject_id: category.value } }"
          class="btn theme-btn theme-btn-sm theme-btn-white"
        >
          Khám phá<i class="fa-solid fa-arrow-right ml-1"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["category"],
};
</script>