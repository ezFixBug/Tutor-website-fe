<template>
  <section
    class="breadcrumb-area section_padding img-bg"
    style="
      background-image: url('https://smart-edu.vn/images/breadcrumb-bg.jpg');
      position: relative;
    "
  >
    <div class="overplay"></div>
    <div class="container" style="position: relative; z-index: 10000">
      <div
        class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between"
      >
        <div class="section-heading">
          <h2 class="section__title text-white">
            {{ subject ? subject.label : getNameRoute }}
          </h2>
        </div>
        <ul
          class="generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center"
        >
          <li><router-link :to="{ path: '/' }">Trang chủ</router-link></li>
          <li>{{ subject ? subject.label : getNameRoute}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import CONSTS from "@/Constants";

export default {
  props: {
    type: {
      type: Number,
      default: 0,
    },
    subject: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    getNameRoute() {
      return CONSTS.ROUTERS[this.$route.name];
    },
  },
  created() {},
};
</script>
