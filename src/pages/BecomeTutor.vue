<template>
  <BreadCrumb />
  <section class="contact-area section-padding position-relative">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="register-heading-content-wrap text-center">
            <div class="section-heading">
              <h2 class="section__title">
                Hoàn thành thông tin để trở thành Gia sư
              </h2>
              <h2 class="section__title">và đồng hành cùng chúng tôi</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row pt-50px">
        <div class="col-lg-10 mx-auto">
          <FormTutor />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BreadCrumb from "../components/layouts/BreadCrum.vue";
import FormTutor from "../components/FormTutor.vue";

export default {
  components: {
    BreadCrumb,
    FormTutor
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./_style.scss";
.media-card .media-img-lg {
  width: 350px !important;
}
option {
  font-weight: normal;
  display: block;
  white-space-collapse: collapse;
  text-wrap: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
}
.course-level {
  margin-right: 5px;
}
</style>