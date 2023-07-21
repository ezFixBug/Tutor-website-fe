<template>
  <header-section />
  <Hero />
  <TypicalTutor />
  <footer-section />
</template>
<script>
import FooterSection from "../components/layouts/FooterSection.vue";
import HeaderSection from "../components/layouts/HeaderSection.vue";
import Hero from "../components/layouts/Hero.vue";
import TypicalTutor from "../components/TypicalTutor.vue";
export default {
  components: {
    FooterSection,
    HeaderSection,
    TypicalTutor,
    Hero
  },
};
</script>