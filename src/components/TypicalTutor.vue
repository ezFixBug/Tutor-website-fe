<template>
  <section class="team-member-area section-padding">
    <div class="containter">
      <div class="section-heading text-center">
        <h2 class="section__title">Gia sư tiêu biểu</h2>
      </div>
      <div class="row pt-60px">
        <div
          v-for="item in listTutors"
          :key="item.id"
          class="col-lg-3 responsive-column-half"
        >
          <div class="card card-item member-card text-center">
            <div class="card-image">
              <img class="card-img-top" :src="item.avatar" alt="team member" />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                <a href="#">{{ item.fullname }}</a>
              </h5>
              <h6 class="card-title text-color-5 fs-14">
                {{ item.price }} vnđ/giờ
              </h6>
              <p class="card-text">
                {{ item.subject.name }}:
                {{ listClasses(item.subject) }}
              </p>
              <p class="card-text">
                {{ item.address.city }} - {{ item.address.district }} -
                {{ item.address.ward }}
              </p>
              <div
                class="d-flex justify-content-between align-items-center pt-3"
              >
                <a
                  href="#"
                  class="btn theme-btn-sm theme-btn-transparent"
                  >Xem hồ sơ</a
                >
                <a
                  href="#"
                  class="btn theme-btn-sm theme-btn-transparent"
                  >Mời dạy <i class="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-more-box pt-4 text-center">
        <a class="btn theme-btn" href="#"
          >Xem tất cả gia sư giỏi<i class="fa-solid fa-arrow-right icon"></i
        ></a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  props: {
    listTutors: {
      type: Array,
      default: []
    }
  },
  methods: {
    listClasses(subject) {
      const listClasses = [];
      subject.listClasses = subject.classes.map((item, index) => {
        if (index !== subject.classes.length - 1) {
          listClasses.push(item.name + ", ");
        } else {
          listClasses.push(item.name);
        }
      });
      return listClasses.join("");
    },
  },
};
</script>
<style scoped src="@/assets/styles/common.css"></style>