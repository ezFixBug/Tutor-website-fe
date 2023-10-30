<template>
  <section class="breadcrumb-area pt-50px pb-50px bg-white pattern-bg">
    <div class="container">
      <div class="col-lg-8 mr-auto">
        <div class="breadcrumb-content">
          <ul class="generic-list-item generic-list-item-arrow d-flex flex-wrap align-items-center">
            <li><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
            <li>
              <router-link :to="{ name: 'courses' }">Khoá Học</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'detail-course', params: { id: 1 } }">Chi tiết khóa học</router-link>
            </li>
          </ul>
          <div class="section-heading">
            <h2 class="section__title">
              {{ course.name }}
            </h2>
            <p class="section__desc pt-2 lh-30"></p>
          </div>
          <div class="d-flex flex-wrap align-items-center pt-3">
            <div class="rating-wrap d-flex flex-wrap align-items-center">
              <div class="review-stars">
                <span class="rating-number">0 </span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
                <span><i class="fa-regular fa-star"></i></span>
              </div>
              <span class="rating-total pl-3">{{ count_comment }} đánh giá</span>
              <span class="rating-total pl-3">
                {{ count_like }} lượt thích</span>
              <span class="rating-total pl-3">
                {{ count_student }} học viên</span>
            </div>
          </div>
          <p>
            Thuộc danh mục:
            <span class="text-color-5 hover-underline fs-14 mr-2">
              <router-link :to="{}">{{
                course.category.name
              }}</router-link></span>
          </p>
          <p>
            Tạo bởi
            <router-link :to="{ name: 'detail-tutor', params: { id: course.tutor.id } }">
              {{ course.tutor.name }}</router-link>
          </p>
          <div class="d-flex flex-wrap align-items-center">
            <p class="pr-3 d-flex align-items-center">
              <svg class="svg-icon-color-gray mr-1" viewBox="0 0 24 24" width="16px">
                <path
                  d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z">
                </path>
              </svg>
              Ngày tạo {{ course.created_at }}
            </p>
          </div>
          <div class="bread-btn-box pt-3">
            <button class="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 mr-2 mb-2 btn-add-wish"
              @click="handleLike(course.id)" data-id="501">
              <i class="fa-regular fa-heart" v-if="!course.is_like"></i>
              <i class="fa-solid fa-heart" v-else style="color: #ec5252 !important"></i>
              Thích
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="course-details-area pb-20px">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 pb-5">
          <div class="course-details-content-wrap pt-90px">
            <div class="course-overview-card">
              <h3 class="fs-24 font-weight-semi-bold pb-3">
                Tổng quan khóa học
              </h3>
              {{ course.name }}
              <ul class="generic-list-item generic-list-item-bullet fs-15">
                <li>Vào lúc: {{ course.time_start }}</li>
              </ul>
              <br />
              <div class="collapse" id="collapseMore">
                <h4 class="fs-20 font-weight-semi-bold py-2">Mô tả khóa học</h4>
                <p class="fs-15 pb-2"></p>
                <p class="card-text pt-1 fs-14 lh-22">
                  {{ course.note }}
                </p>
              </div>
              <a class="collapse-btn collapse--btn fs-15" data-toggle="collapse" href="#collapseMore" role="button"
                aria-expanded="false" aria-controls="collapseMore">
                <span class="collapse-btn-hide">Xem thêm <i class="fa-solid fa-angle-down"></i></span>
                <span class="collapse-btn-show">Ẩn bớt <i class="fa-solid fa-angle-up"></i></span></a>
            </div>
            <div class="course-overview-card">
              <div class="d-flex justify-content-between">
                <h3 class="fs-24 font-weight-semi-bold pb-3">Nội dung khóa học</h3>
                <p><strong>Tổng: </strong>10 bài học</p>
              </div>
              <div class="filter-bar mb-4">
                <div class="filter-bar-inner d-flex flex-wrap align-items-center justify-content-between pb-4">
                  <div class="d-flex flex-wrap align-items-center">
                    <a class="btn theme-btn theme-btn-sm theme-btn-white lh-28 collapse-btn collapsed"
                      data-toggle="collapse" href="#collapseSession" role="button" aria-expanded="false"
                      aria-controls="collapseSession">
                      Danh sách bài học
                      <i class="fa-solid fa-plus ml-1 collapse-btn-hide"></i>
                      <i class="fa-solid fa-minus ml-1 collapse-btn-show"></i>
                    </a>
                  </div>
                </div>
                <div class="collapse" id="collapseSession" style="">
                  <Form class="row">
                    <FormItem class="input-box col-lg-3">
                      <div class="form-group">
                        <div class="select-container w-auto">
                          <div class="dropdown bootstrap-select select-container-select">
                            bài học
                          </div>
                        </div>
                      </div>
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
            <div class="course-overview-card pt-4">
              <h3 class="fs-24 font-weight-semi-bold pb-4">Người hướng dẫn</h3>
              <div class="instructor-wrap">
                <div class="media media-card">
                  <div class="instructor-img mr-5">
                    <router-link :to="{
                      name: 'detail-tutor',
                      params: { id: course.tutor.id },
                    }" class="media-img d-block">
                      <img :src="course.tutor.avatar" alt="Cart image" />
                    </router-link>
                    <ul class="generic-list-item pt-3">
                      <li>
                        <i class="fa-regular fa-user text-color-3 mr-2"></i>
                        {{ course.tutor.count_student }} học viên
                      </li>
                      <li>
                        <i class="fa-regular fa-comment text-color-3 mr-2"></i>{{ course.tutor.count_comment }} đánh giá
                      </li>
                      <li>
                        <i class="fa-solid fa-book text-color-3 mr-2"></i>
                        {{ course.tutor.count_course }} khóa học
                      </li>
                      <li>
                        <router-link :to="{ name: 'courses' }">Xem tất cả khóa học</router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="media-body">
                    <h5>
                      <router-link :to="{
                        name: 'detail-tutor',
                        params: { id: course.tutor.id },
                      }">
                        {{ course.tutor.name }}</router-link>
                    </h5>
                    <span class="d-block lh-18 pt-2 pb-3">
                      Ngày tham gia: {{ course.tutor.created_at }}
                    </span>
                    <p class="lh-18 pb-3">
                      {{ course.name }}
                    </p>
                    <p class="lh-18 pb-3">
                      {{ course.tutor.note }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="course-overview-card pt-4">
              <h3 class="fs-24 font-weight-semi-bold pb-40px">Phản hồi của học viên</h3>
              <div class="feedback-wrap">
                <div class="media media-card align-items-center">
                  <div class="review-rating-summary">
                    <span class="stats-average__count">0</span>
                    <div class="rating-wrap pt-1">
                      <div class="review-stars">
                        <span class="la la-star-o"></span>
                        <span class="la la-star-o"></span>
                        <span class="la la-star-o"></span>
                        <span class="la la-star-o"></span>
                        <span class="la la-star-o"></span>

                      </div>
                      <span class="rating-total d-block">(0)</span>
                      <span>Đánh giá khóa học</span>
                    </div><!-- end rating-wrap -->
                  </div><!-- end review-rating-summary -->
                  <div class="media-body">
                    <div class="review-bars d-flex align-items-center mb-2">
                      <div class="review-bars__text">5 sao</div>
                      <div class="review-bars__fill">
                        <div class="skillbar-box">
                          <div class="skillbar" data-percent="0%">
                            <div class="skillbar-bar bg-3" style="width: 0%;"></div>
                          </div> <!-- End Skill Bar -->
                        </div>
                      </div><!-- end review-bars__fill -->
                      <div class="review-bars__percent">0%</div>
                    </div><!-- end review-bars -->
                    <div class="review-bars d-flex align-items-center mb-2">
                      <div class="review-bars__text">4 sao</div>
                      <div class="review-bars__fill">
                        <div class="skillbar-box">
                          <div class="skillbar" data-percent="0%">
                            <div class="skillbar-bar bg-3" style="width: 0%;"></div>
                          </div> <!-- End Skill Bar -->
                        </div>
                      </div><!-- end review-bars__fill -->
                      <div class="review-bars__percent">0%</div>
                    </div><!-- end review-bars -->
                    <div class="review-bars d-flex align-items-center mb-2">
                      <div class="review-bars__text">3 sao</div>
                      <div class="review-bars__fill">
                        <div class="skillbar-box">
                          <div class="skillbar" data-percent="0%">
                            <div class="skillbar-bar bg-3" style="width: 0%;"></div>
                          </div> <!-- End Skill Bar -->
                        </div>
                      </div><!-- end review-bars__fill -->
                      <div class="review-bars__percent">0%</div>
                    </div><!-- end review-bars -->
                    <div class="review-bars d-flex align-items-center mb-2">
                      <div class="review-bars__text">2 sao</div>
                      <div class="review-bars__fill">
                        <div class="skillbar-box">
                          <div class="skillbar" data-percent="0%">
                            <div class="skillbar-bar bg-3" style="width: 0%;"></div>
                          </div> <!-- End Skill Bar -->
                        </div>
                      </div><!-- end review-bars__fill -->
                      <div class="review-bars__percent">0%</div>
                    </div><!-- end review-bars -->
                    <div class="review-bars d-flex align-items-center mb-2">
                      <div class="review-bars__text">1 sao</div>
                      <div class="review-bars__fill">
                        <div class="skillbar-box">
                          <div class="skillbar" data-percent="0%">
                            <div class="skillbar-bar bg-3" style="width: 0%;"></div>
                          </div> <!-- End Skill Bar -->
                        </div>
                      </div><!-- end review-bars__fill -->
                      <div class="review-bars__percent">0%</div>
                    </div><!-- end review-bars -->
                  </div><!-- end media-body -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="sidebar sidebar-negative">
            <div class="card card-item">
              <div class="card-body">
                <div class="preview-course-video">
                  <img :src="course.image" alt="Course image" class="w-100 rounded lazy"
                    style="width: 239px; height: 160px" />
                </div>
                <div class="preview-course-feature-content pt-40px">
                  <p class="d-flex align-items-center pb-2">
                    <span class="fs-30 font-weight-semi-bold text-black">
                      {{ formattedPrice(course.price) }}
                    </span>
                  </p>
                  <div class="buy-course-btn-box">
                    <button class="btn theme-btn mt-3 w-100 btn-register-course">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-item">
              <div class="card-body">
                <h3 class="card-title fs-18 pb-2">Khóa học bao gồm</h3>
                <div class="divider">
                  <span></span>
                </div>
                <ul class="generic-list-item generic-list-item-flash">
                  <li class="d-flex align-items-center justify-content-between">
                    <span>
                      <i class="fa-regular fa-bookmark mr-2 text-color"></i> Bài
                      học</span>
                    {{ course.count_lesson }}
                  </li>
                  <li class="d-flex align-items-center justify-content-between">
                    <span>
                      <i class="fa-regular fa-eye mr-2 text-color"></i> Lượt
                      xem</span>
                    {{ course.count_view }}
                  </li>
                  <li class="d-flex align-items-center justify-content-between">
                    <span>
                      <i class="fa-solid fa-language mr-2 text-color"></i>
                      Ngôn ngữ
                    </span>
                    Tiếng Việt
                  </li>
                  <li class="d-flex align-items-center justify-content-between">
                    <span>
                      <i class="fa-solid fa-language mr-2 text-color"></i>
                      Ngôn ngữ
                    </span>
                    Tiếng Việt
                  </li>
                  <li class="d-flex align-items-center justify-content-between">
                    <span>
                      <i class="fa-regular fa-lightbulb mr-2 text-color"></i>
                      Cấp độ
                    </span>
                    {{ course.classes.name }}
                  </li>
                  <li class="d-flex align-items-center justify-content-between">
                    <span>
                      <i class="fa-regular fa-user mr-2 text-color"></i>
                      Học viên
                    </span>
                    {{ count_student }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="card card-item">
              <div class="card-body">
                <h3 class="card-title fs-18 pb-2">Danh mục</h3>
                <div class="divider">
                  <span></span>
                </div>
                <ul class="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15">
                  <li>
                    <router-link :to="{}">{{
                      course.category.name
                    }}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="related-course-area bg-gray pt-60px pb-60px">
    <div class="container">
      <div class="related-course-wrap">
        <h3 class="fs-28 font-weight-semi-bold pb-35px">
          Một số khóa học khác của
          <router-link
            :to="{
              name: 'detail-tutor',
              params: { id: course.tutor.id },
            }"
          >
            {{ course.tutor.name }}</router-link
          >
        </h3>
        <div
          class="view-more-carousel-2 owl-action-styled owl-loaded owl-carousel"
        >
          <div class="owl-stage-outer">
            <div
              class="owl-stage"
              style="
                transform: translate3d(-45045px, 0px, 0px);
                transition: all 0.5s ease 0s;
                width: 178920px;
              "
            >
              <div
                class="owl-item active"
                v-for="item in courses"
                :key="item.id"
              >
                <div class="card card-item"> 
                  <div class="card-image">
                    <router-link
                      :to="{ name: 'detail-course', params: { id: item.id} }"
                      class="d-block"
                      >
                      <img :src="item.image" alt="Image" class="card-img-top"> 
                      </router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>
<script>
export default {
  setup() {
    const formattedPrice = (price) => {
      const priceFormat = price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return priceFormat.replace(priceFormat.slice(-1), "VND");
    };
    const courses = [];
    for (let i = 1; i <= 10; i++) {
      const courseData = {
        id: i,
        image: "https://smart-edu.vn/img/avatar.png",
        category: [
          { id: 1, name: "Các Lớp Khác" },
          { id: 2, name: "Lớp 10" },
          { id: 3, name: "lớp 11" },
          { id: 4, name: "lớp 11" },
          { id: 5, name: "lớp 11" },
          { id: 6, name: "lớp 11" },
          { id: 7, name: "lớp 11" },
        ],
        name: `name ${i}`,
        instructor: `instructor ${i}`,
        rate: 3,
        price: formattedPrice(7000000),
      };
      courses.push(courseData);
    }
    console.log(courses);
    return { courses };
  },
  data() {
    return {
      course: {
        id: 1,
        name: "Course",
        category: {
          id: 2,
          name: "Category",
        },
        tutor: {
          id: 1,
          name: "Tutor",
          count_student: 10,
          count_comment: 20,
          count_course: 30,
          avatar: "https://smart-edu.vn/img/avatar.png",
          note: "This is desciption",
          created_at: "2023-08-02",
        },
        created_at: "2023-08-02",
        time_start: "2023-08-02 0:00",
        is_like: true,
        count_lesson: 10,
        count_view: 1000,
        price: 1000000,
        classes: {
          id: 1,
          name: "Lớp 1",
        },
        image: "https://smart-edu.vn/img/avatar.png",
        note: "Xin chào! Khoá học là một khoá học thú vị và hữu ích dành cho những ai muốn học cách sử dụng ngôn ngữ SQL và Google Data Studio để phân tích và trực quan hóa dữ liệu một cách hiệu quả.",
      },
      count_comment: 10,
      count_like: 100,
      count_student: 50,
    };
  },
  methods: {
    handleLike(course_id) {
      return (this.course.is_like = !this.course.is_like);
    },
    formattedPrice(price) {
      const priceFormat = price.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
      return priceFormat.replace(priceFormat.slice(-1), "VND");
    },
  },
  computed: {},
};
</script>
<style>
@import "./_style.scss";

.course-overview-card {
  margin-bottom: 30px;
}

.review-rating-summary {
  width: 180px;
  text-align: center;
  border-right: 1px solid rgba(128, 137, 150, 0.1);
  padding-right: 30px;
  margin-right: 40px;
}
.stats-average__count{
  color: #F68A03;
    font-size: 65px;
    font-weight: 700;
}
</style>