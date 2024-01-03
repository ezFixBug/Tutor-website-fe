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
            <router-link
              :to="{ name: 'detail-tutor', params: { id: item.id } }"
              >{{ item.full_name }}</router-link
            >
          </h5>
          <h6 class="card-title text-color-5 fs-14">
            {{ Number(item.price).toLocaleString('vi-VN') }} VND/giờ
          </h6>
          <p class="card-text" v-if="teach_subjects">
            {{
              item.teach_subjects[0]
                ? item.teach_subjects[0].subject.name
                : null
            }}:
            {{ item.teach_subjects[0] ? listClasses(item.teach_subjects[0]) : null }}
          </p>
          <p class="card-text">
            <!-- {{ item.address.city }} - {{ item.address.district }} -
            {{ item.address.ward }} -->
          </p>
          <div class="d-flex justify-content-center salign-items-center pt-3">
            <router-link
              :to="{ name: 'detail-tutor', params: { id: item.id } }"
              class="btn theme-btn-sm theme-btn-transparent"
              >Xem hồ sơ</router-link
            >
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
      subject.teach_subject_classes.forEach((item, index) => {
        if (index !== subject.teach_subject_classes.length - 1) {
          listClasses.push(item.class.name + ", ");
        } else {
          listClasses.push(item.class.name);
        }
      });
      return listClasses.join("");
    },
  },
};
</script>
<style scoped src="@/assets/styles/common.css"></style>