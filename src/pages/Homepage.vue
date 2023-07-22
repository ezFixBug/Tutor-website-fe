<template>
  <Hero />
  <TypicalTutor/>
</template>
<script>
import Hero from "../components/layouts/Hero.vue";
import TypicalTutor from "../components/TypicalTutor.vue";
export default {
  components: {
    TypicalTutor,
    Hero
  },
};
</script>