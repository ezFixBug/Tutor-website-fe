<template>
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
            <router-link :to="{name : 'detai-tutor', params: {id: item.id}}">{{ item.fullname }}</router-link>
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
          <div class="d-flex justify-content-between align-items-center pt-3">
            <router-link :to="{name : 'detai-tutor', params: {id: item.id}}" class="btn theme-btn-sm theme-btn-transparent">Xem hồ sơ</router-link>
            <a href="#" class="btn theme-btn-sm theme-btn-transparent"
              >Mời dạy <i class="fa-solid fa-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listTutors: {
      type: Array,
      default: [],
    },
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