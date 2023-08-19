<template>
  <div class="category-item">
    <img class="cat__img lazy" src="https://storage.smart-edu.vn\files\category\20230608091052mon toan.png"
      data-src="https://storage.smart-edu.vn\files\category\20230608091052mon toan.png" alt="Category image">
    <div class="category-content">
      <div class="category-inner">
        <h3 class="cat__title"><a href="#" onclick="return false;">{{ category.name }}</a></h3>
        <p class="cat__meta">{{ category.numOfCourse }}</p>
        <a href="/2-danh-muc-khoa-hoc/toan-hoc" class="btn theme-btn theme-btn-sm theme-btn-white">Khám phá<i
            class="fa-solid fa-arrow-right ml-1"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['category'],
}
</script>