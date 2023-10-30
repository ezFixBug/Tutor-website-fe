<template>
<router-view></router-view>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style lang="scss">
  @import './assets/styles/paritials/_variables.scss';
  @import './assets/styles/paritials/_mixins.scss';
  @import './assets/styles/paritials/_common.scss';
  @import './assets/styles/paritials/_category.scss';
  @import './assets/styles/paritials/_main.scss';
  .form--control{
    height: 40px !important;
  }
</style>
