<template>
  <section class="team-member-area section--padding">
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
                <span
                  v-for="(class_tutor, index) in item.subject.classes"
                  :key="class_tutor.id"
                >
                  {{ class_tutor.name }}
                  <span v-if="index !== item.subject.classes - 1">,</span></span
                >
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
                  class="btn theme-btn theme-btn-sm theme-btn-transparent"
                  >Xem hồ sơ</a
                >
                <a href="#" class="btn theme-btn theme-btn-sm theme-btn-white"
                  >Mời dạy <i class="fa-solid fa-arrow-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      listTutors: [
        {
          id: 1,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 2,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 3,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 4,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 5,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 6,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 7,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
      ],
    };
  },
};
</script>