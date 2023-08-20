<template>
  <BreadCrumb />
  <section class="category-area section--padding">
    <div class="container">
      <div class="filter-bar mb-4 row">
        <input class="form-control col-sm" type="text" v-model="keyword" name="keyword"
          placeholder="Nhập theo tên danh mục">
      </div>
      <div class="category-wrapper">
        <div class="row">
          <div class="col-lg-3 responsive-column-half" v-for="category in categories" :key="category.id">
            <Category :category="category" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Category from './CategoryComponent.vue'
export default {
  components: {
    Category
  },
  setup() {
    const categories = []
    for (let i = 0; i <= 20; i++) {
      const category = {
        id: i,
        name: 'category ' + i,
        numOfCourse: Math.random()
      }
      categories.push(category);
    }

    return {
      categories,
    }
  },
  data() {
    return {
      keyword: '',
    }
  },
  watch: {
    keyword() {
      console.log(this.keyword);
    }
  }
}
</script>
