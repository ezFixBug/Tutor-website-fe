<template>
  <section class="team-member-area section-padding">
    <div class="containter">
      <div class="section-heading text-center">
        <h2 class="section__title">Gia sư tiêu biểu</h2>
      </div>
      <ListTutors :listTutors="listTutors"/>
      <div class="view-more-box pt-4 text-center">
        <router-link class="btn theme-btn" :to="{name: 'tutor'}"
          >Xem tất cả gia sư giỏi<i class="fa-solid fa-arrow-right icon"></i
        ></router-link>
      </div>
    </div>
  </section>
</template>
<script>
import ListTutors from './layouts/ListTutors.vue';
export default {
  components: {
    ListTutors
  },
  props: {
    listTutors: {
      type: Array,
      default: []
    }
  },
  methods: {
  },
};
</script>
<style scoped src="@/assets/styles/common.css"></style>