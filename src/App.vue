<template>
  <header-section />
  <TypicalTutor/>
  <footer-section />
</template>

<script>
import FooterSection from './components/layouts/FooterSection.vue'
import HeaderSection from './components/layouts/HeaderSection.vue'
import TypicalTutor from './components/TypicalTutor.vue'
export default {
  name: 'App',
  components: {
    FooterSection,
    HeaderSection,
    TypicalTutor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
