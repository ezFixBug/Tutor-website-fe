<template>
  <div
    class="off-canvas-menu dashboard-off-canvas-menu off--canvas-menu custom-scrollbar-styled pt-20px"
    :class="{ active: is_active }"
  >
    <div
      class="off-canvas-menu-close dashboard-menu-close icon-element icon-element-sm shadow-sm"
      @click="$emit('handleActive')"
    >
      <i class="fa-solid fa-x"></i>
    </div>
    <div class="logo-box px-4">
      <router-link :to="{ path: '/' }" class="logo">
        <img src="https://smart-edu.vn/images/logo_7.png" alt="Logo" />
      </router-link>
    </div>
    <ul
      class="generic-list-item off-canvas-menu-list off--canvas-menu-list pt-35px"
    >
      <li class="hightlight-menu">
        <router-link :to="{ path: '/' }" class="logo">
          <i class="fa-solid fa-sliders mr-2"></i>
          Bảng điều khiển</router-link
        >
      </li>
      <li class="hightlight-menu page-active">
        <router-link :to="{ name: 'setting-basic' }" class="logo">
          <i class="fa-solid fa-gears mr-2"></i>
          Thông tin người dùng</router-link
        >
      </li>
      <li class="hightlight-menu">
        <router-link :to="{ name: 'setting-basic' }" class="logo">
          <i class="fa-solid fa-book mr-2"></i>
          Khóa học của tôi</router-link
        >
      </li>
      <li class="hightlight-menu">
        <router-link :to="{ name: 'setting-basic' }" class="logo">
          <i class="fa-solid fa-graduation-cap mr-2"></i>
          Khóa học đã đăng ký</router-link
        >
      </li>
      <li class="hightlight-menu">
        <router-link :to="{ name: 'setting-basic' }" class="logo">
          <i class="fa-solid fa-magnifying-glass-plus mr-2"></i>
          Yêu cầu gia sư</router-link
        >
      </li>
      <li class="hightlight-menu">
        <router-link :to="{ name: 'setting-basic' }" class="logo">
          <i class="fa-solid fa-money-bill-transfer mr-2"></i>
          Lịch sử giao dịch</router-link
        >
      </li>
      <li class="hightlight-menu">
        <router-link :to="{ name: 'setting-basic' }" class="logo">
          <i class="fa-solid fa-right-from-bracket mr-2"></i>
          Đăng xuất</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    is_active: {
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "./_style.scss";
</style>
