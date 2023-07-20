<template>
  <header-section />
  <TypicalTutor />
  <footer-section />
</template>
<script>
import FooterSection from "../components/layouts/FooterSection.vue";
import HeaderSection from "../components/layouts/HeaderSection.vue";
import TypicalTutor from "../components/TypicalTutor.vue";
export default {
  components: {
    FooterSection,
    HeaderSection,
    TypicalTutor,
  },
};
</script>