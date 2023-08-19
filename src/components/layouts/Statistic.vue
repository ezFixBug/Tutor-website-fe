<template>
  <section
    class="funfact-area text-center section-padding dot-bg"
    style="overflow: hidden;"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-3 responsive-column-half">
          <div class="counter-item">
            <div class="counter__icon icon-element mb-3 shadow-sm">
              <i class="fa-solid fa-user-group text-color-2"></i>
            </div>
            <h4 class="counter__title counter text-color-2">
              {{ quantityTutor }}
            </h4>
            <p class="counter__meta">Gia sư</p>
          </div>
        </div>
        <div class="col-lg-3 responsive-column-half">
          <div class="counter-item">
            <div class="counter__icon icon-element mb-3 shadow-sm">
              <i class="fa-solid fa-earth-americas text-color-5"></i>
            </div>
            <h4 class="counter__title counter text-color-5">
              {{ quantityCoure }}
            </h4>
            <p class="counter__meta">Khóa học</p>
          </div>
        </div>
        <div class="col-lg-3 responsive-column-half">
          <div class="counter-item">
            <div class="counter__icon icon-element mb-3 shadow-sm">
              <i class="fa-solid fa-user-graduate text-color-3"></i>
            </div>
            <h4 class="counter__title counter text-color-3">
              {{ quantityStudent }}
            </h4>
            <p class="counter__meta">Học viên</p>
          </div>
        </div>
        <div class="col-lg-3 responsive-column-half">
          <div class="counter-item">
            <div class="counter__icon icon-element mb-3 shadow-sm">
              <i class="fa-solid fa-user-pen text-color-4"></i>
            </div>
            <h4 class="counter__title counter text-color-4">
              {{ quantityRequest }}
            </h4>
            <p class="counter__meta">Yêu cầu gia sư</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    quantityCoure: {
      type: Number,
      default: 0,
    },
    quantityTutor: {
      type: Number,
      default: 0,
    },
    quantityStudent: {
      type: Number,
      default: 0,
    },
    quantityRequest: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style scoped src="@/assets/styles/homepage.css"></style>