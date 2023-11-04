<template>
  <BreadCrumb />
  <spinner :is_loading="is_loading" />
  <section class="category-area section--padding">
    <div class="container">
      <div class="filter-bar mb-4 row">
        <input
          class="form-control col-sm"
          type="text"
          v-model="keyword"
          name="keyword"
          placeholder="Nhập theo tên danh mục"
        />
      </div>
      <div class="category-wrapper">
        <div class="row">
          <div
            class="col-lg-3 responsive-column-half"
            v-for="category in subjects"
            :key="category.id"
          >
            <Category :category="category" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Category from "./CategoryComponent.vue";
import $http from "@/services/httpService";
import get from "lodash/get";
export default {
  components: {
    Category,
  },

  async created() {
    this.is_loading = true;
    this.subjects_all = await $http.getSubjects();
    this.subjects = this.subjects_all;
    this.is_loading = false;
  },

  data() {
    return {
      keyword: "",
      subjects: [],
      subjects_all: [],
      is_loading: false,
    };
  },
  watch: {
    keyword() {
      this.subjects = this.subjects_all.filter((item) =>
        item.label.includes(this.keyword)
      );
    },
  },
};
</script>
