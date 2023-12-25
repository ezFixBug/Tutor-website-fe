<template>
  <spinner :is_loading="is_loading" />
  <section class="breadcrumb-area py-5 bg-white pattern-bg">
    <div class="container">
      <div class="breadcrumb-content">
        <div class="media media-card align-items-center pb-4">
          <div class="media-body">
            <h1 class="section__title fs-30">{{ user.full_name }}</h1>
            <p class="lh-18">{{ user.email }}</p>
            <span class="d-block lh-18 pt-1 pb-2">{{formatDate(user.created_at)}}</span>
          </div>
        </div>
        <!-- end media -->
      </div>
      <!-- end breadcrumb-content -->
    </div>
    <!-- end container -->
  </section>

  <section class="teacher-details-area pt-50px">

    <!-- end container -->
    <div class="bg-gray py-5">
      <div class="container">
        <ul
          class="nav nav-tabs generic-tab justify-content-center"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              id="my-learning-tab"
              data-toggle="tab"
              href="#my-learning"
              role="tab"
              aria-controls="my-learning"
              aria-selected="true"
            >
              Khóa học đã mua
            </a>
          </li>
        </ul>
        <div class="tab-content pt-40px" id="myTabContent">
          <div
            class="tab-pane fade active show"
            id="my-learning"
            role="tabpanel"
            aria-labelledby="my-learning-tab"
          >
            <div class="my-course-body">
              <div class="my-course-cards">
                <div class="row">
                  <div class="col-lg-4 responsive-column-half" v-for="course in courses" :key="course.id">
                    <div
                      class="card card-item card-preview tooltipstered"
                      data-tooltip-content="#tooltip_content_508"
                    >
                      <div class="card-image">
                        <router-link :to="{name: 'detail-course', params: {id: course.id}}" class="d-block">
                          <img
                            class="card-img-top lazy"
                            :src="course.image"
                            style="height: 184px"
                            alt="Card image cap"
                          />
                        </router-link>
                        <div class="course-badge-labels">
                          <div class="course-badge red"> Đã mua</div>
                        </div>
                      </div>
                      <!-- end card-image -->
                      <div class="card-body">
                        <h6 class="ribbon ribbon-blue-bg fs-14 mb-3">Lớp 1</h6>
                        <h6 class="ribbon ribbon-blue-bg fs-14 mb-3">Lớp 2</h6>
                        <h6 class="ribbon ribbon-blue-bg fs-14 mb-3">Lớp 3</h6>
                        <h6 class="ribbon ribbon-blue-bg fs-14 mb-3">Lớp Lá</h6>
                        <h5 class="card-title">
                          <router-link :to="{name: 'detail-course', params: {id: course.id}}"> {{course.title}} </router-link >
                        </h5>
                        <p class="card-text">
                          <router-link
                            :to="{name: 'detail-tutor', params: {id: course.user.id}}"
                            >{{course.user.full_name}}</router-link
                          >
                        </p>
                        <!-- end rating-wrap -->
                        <div
                          class="d-flex justify-content-end align-items-center"
                        >
                          <p class="card-price text-color font-weight-bold">
                           Đã mua
                          </p>
                        </div>
                      </div>
                      <!-- end card-body -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col-lg-4 -->
                </div>
                <!-- end row -->
              </div>
              <!-- end my-course-cards -->
            </div>
            <!-- end my-course-body -->
          </div>
          <!-- end tab-pane -->
          <div
            class="tab-pane fade"
            id="wishlist"
            role="tabpanel"
            aria-labelledby="wishlist-tab"
          >
            <div class="my-course-body">
              <div class="my-course-cards">
                <div class="row pt-10px">
                  <div class="col-lg-12" v-for="request in requests" :key="request.id">
                    <div class="card card-item hover-y">
                      <div class="card-body d-flex align-items-center">
                        <div
                          class="flex-shrink-0 avatar-lg text-center col-md-2 col-sm-2"
                        >
                          <img
                            :src="request.user.avatar"
                            alt="card image"
                            class="w-25 rounded-full shadow-sm"
                            style="width: 40% !important"
                          />

                          <p class="fs-15">{{request.user.full_name}}</p>
                          <span class="fs-12">{{formatDate(request.created_at)}}</span>
                        </div>
                        <div class="pl-4 col-md-6 col-sm-6">
                          <router-link
                            class="card-title pt-4 pb-2"
                            :to="{name: 'detail-request', params: {request_id: request.id}}"
                            ><i class="la la-check mr-1 text-color-5"></i
                            >{{request.title}}</router-link
                          >
                          <p class="card-text"></p>
                          <ul
                            class="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15"
                          >
                            <li class="mr-2">
                              <a href="#" onclick="return false;"
                                >{{request.subject.name}}</a
                              >
                            </li>
                            <li class="mr-2">
                              <a href="#" onclick="return false;">{{request.class.name}}</a>
                            </li>
                          </ul>
                        </div>
                        <div class="pl-4 col-md-2 col-sm-2 text-center">
                          <p class="fs-21 text-color">
                            {{request.price}}
                            <span class="fs-15 text-color-3"
                              >vnđ/người/tháng</span
                            >
                          </p>
                          <p class="fs-18 text-color-5">{{request.num_student}} học viên</p>
                        </div>
                        <div class="pl-4 col-md-2 col-sm-2 text-center">
                          <a href="#" onclick="return false;"
                            ><span class="fs-11 text-black"
                              >(Chỉ thu khi nhận được lớp)</span
                            ></a
                          >
                          <button class="btn btn-success theme-btn-sm">
                            Đã duyệt
                          </button>
                        </div>
                      </div>
                      <!-- end card-body -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col-lg-6 -->
                </div>
                <!-- end row -->
              </div>
              <!-- end my-course-cards -->
            </div>
            <!-- end my-course-body -->
          </div>
          <!-- end tab-pane -->
        </div>
        <!-- end tab-content -->
      </div>
      <!-- end container -->
    </div>
  </section>
</template>
<script>
import $http from "@/services/httpService";
import $auth from "@/services/authService";
import get from "lodash/get";
import CONSTS from "@/Constants";

export default {
  data() {
    return {
      courses: [],
      requests: [],
      user: {},
      is_loading: false,
    };
  },

  computed: {
    // currenUser() {
    //   return $auth.getUser;
    // },
    // isLike() {
    //   return this.course.is_like;
    // },
  },

  async created() {
    this.is_loading = true;
    const user_id = this.$route.params.user_id;

    const res_user = await $http.get("/user/" + user_id);
    if (get(res_user, "data.result", false)) {
      this.user = res_user.data.user;
    }

    const response = await $http.get("/courses-registed/" + user_id);

    if (get(response, "data.result", false)) {
      this.courses = response.data.courses;
    }

    const res = await $http.get("/requested/" + user_id);

    if (get(res, "data.result", false)) {
      this.requests = res.data.requests;
    }
    this.is_loading = false;
  },

  methods: {
    formatDate(inputDate) {
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    },
  },
};
</script>