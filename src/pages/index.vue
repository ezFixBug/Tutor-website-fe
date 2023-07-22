<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>
<script>
  import Header from '@/components/layouts/HeaderSection.vue'
  import Footer from '@/components/layouts/FooterSection.vue'

  export default{
    components: {
      Header,
      Footer
    }
  }
</script>