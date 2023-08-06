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
            {{ getNameRoute }}
          </h2>
        </div>
        <ul
          class="generic-list-item generic-list-item-white generic-list-item-arrow d-flex flex-wrap align-items-center"
        >
          <li><a href="/">Trang chủ</a></li>
          <li> {{ getNameRoute }} </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import { ROUTERS } from '../../Constants'

export default {
  props: {
    type: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    getNameRoute(){
      return ROUTERS[this.$route.name]
    }
  },
  created() {
  }
};
</script>
