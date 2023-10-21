<template>
  <Sidebar :is_active="is_active" @handleActive="is_active = !is_active" />
  <div
    class="body-overlay"
    :class="{ active: is_active }"
    @click="is_active = false"
  ></div>
  <div class="dashboard-content-wrap">
    <div
      class="dashboard-menu-toggler btn theme-btn theme-btn-sm lh-28 theme-btn-transparent mb-4 ml-3"
      @click="is_active = true"
    >
      <i class="fa-solid fa-bars mr-1"></i>
      Menu người dùng
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Sidebar from "../../components/layouts/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      is_active: false,
    };
  },
  methods: {
  },
};
</script>
<style lang="scss">
@import "./_style.scss";
</style>