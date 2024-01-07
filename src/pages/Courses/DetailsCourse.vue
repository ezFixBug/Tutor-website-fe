<template>
  <spinner :is_loading="is_loading" />
  <section class="breadcrumb-area pt-50px pb-50px bg-white pattern-bg">
    <div class="container">
      <div class="col-lg-8 mr-auto">
        <div class="breadcrumb-content">
          <ul
            class="generic-list-item generic-list-item-arrow d-flex flex-wrap align-items-center"
          >
            <li><router-link :to="{ name: 'home' }">Trang chủ</router-link></li>
            <li>
              <router-link :to="{ name: 'courses' }">Khoá Học</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'detail-course', params: { id: 1 } }"
                >Chi tiết khóa học</router-link
              >
            </li>
          </ul>
          <div class="section-heading">
            <h2 class="section__title">
              {{ course.title }}
            </h2>
            <p class="section__desc pt-2 lh-30"></p>
          </div>
          <div class="d-flex flex-wrap align-items-center pt-3">
            <div class="rating-wrap d-flex flex-wrap align-items-center">
              <div class="review-stars d-flex align-items-center">
                <span class="rating-number mr-2">{{ course.rating_avg }}</span>
                <star-rating
                  v-model:rating="course.rating_avg"
                  :increment="0.01"
                  :read-only="true"
                  :star-size="20"
                  :show-rating="false"
                ></star-rating>
              </div>
              <span class="rating-total pl-3"
                >{{ course.rating ? course.rating.length : 0 }} đánh giá</span
              >
              <span class="rating-total pl-3">
                {{ course.likes_count }} lượt thích</span
              >
              <span class="rating-total pl-3">
                {{ count_student }} học viên</span
              >
            </div>
          </div>
          <p>
            Thuộc danh mục:
            <span
              class="text-color-5 hover-underline fs-14 mr-2"
              v-for="item in course.subjects"
              :key="item.id"
            >
              {{ item.name }}</span
            >
          </p>
          <p>
            Tạo bởi
            <router-link
              :to="{ name: 'detail-tutor', params: { id: course.user_id } }"
            >
              {{ user.full_name }}</router-link
            >
          </p>
          <div class="d-flex flex-wrap align-items-center">
            <p class="pr-3 d-flex align-items-center">
              <svg
                class="svg-icon-color-gray mr-1"
                viewBox="0 0 24 24"
                width="16px"
              >
                <path
                  d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"
                ></path>
              </svg>
              Ngày tạo {{ formatDate(course.created_at) }}
            </p>
          </div>
          <div class="bread-btn-box pt-3" v-if="hasLogin">
            <button
              class="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 mr-2 mb-2 btn-add-wish"
              @click="handleLike()"
              data-id="501"
            >
              <i v-if="isLike" class="fa-solid fa-heart text-color-1"></i>
              <i v-else class="fa-regular fa-heart text-color-1"></i>
              Thích
            </button>
            <button
              v-if="
                hasLogin &&
                hasLogin.id !== course.user_id &&
                course.is_register &&
                !isRating
              "
              class="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 mr-2 mb-2 btn-add-wish"
              @click="handleVoteCourse()"
              data-id="502"
            >
              <i class="fa-regular fa-star"></i>
              Đánh Giá
            </button>
            <button
              v-if="
                hasLogin &&
                hasLogin.id !== course.user_id
              "
              class="btn theme-btn theme-btn-sm theme-btn-transparent lh-28 mr-2 mb-2 btn-add-wish"
              @click="handleReportCourse"
              data-id="502"
            >
              <i class="fa-solid fa-font-awesome"></i>
              Báo cáo
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
              {{ course.title }}
              <ul class="generic-list-item generic-list-item-bullet fs-15">
                <li>Vào lúc: {{ course.time_start }}</li>
              </ul>
              <br />
              <div class="collapse" id="collapseMore">
                <h4 class="fs-20 font-weight-semi-bold py-2">Mô tả khóa học</h4>
                <p class="fs-15 pb-2"></p>
                <p class="card-text pt-1 fs-14 lh-22">
                  {{ course.description }}
                </p>
              </div>
              <a
                class="collapse-btn collapse--btn fs-15"
                data-toggle="collapse"
                href="#collapseMore"
                role="button"
                aria-expanded="false"
                aria-controls="collapseMore"
              >
                <span class="collapse-btn-hide"
                  >Xem thêm <i class="fa-solid fa-angle-down"></i
                ></span>
                <span class="collapse-btn-show"
                  >Ẩn bớt <i class="fa-solid fa-angle-up"></i></span
              ></a>
            </div>
            <div class="course-overview-card">
              <div class="d-flex justify-content-between">
                <h3 class="fs-24 font-weight-semi-bold pb-3">
                  Nội dung khóa học
                </h3>
              </div>
              <div v-html="course.content"></div>
            </div>
            <div class="course-overview-card pt-4">
              <h3 class="fs-24 font-weight-semi-bold pb-4">Người hướng dẫn</h3>
              <div class="instructor-wrap">
                <div class="media media-card">
                  <div class="instructor-img mr-5">
                    <router-link
                      :to="{
                        name: 'detail-tutor',
                        params: { id: course.user_id },
                      }"
                      class="media-img d-block"
                    >
                      <img :src="user.avatar" alt="Cart image" />
                    </router-link>
                    <ul class="generic-list-item pt-3">
                      <li>
                        <i class="fa-regular fa-user text-color-3 mr-2"></i>
                        {{ user.count_student }} học viên
                      </li>
                      <li>
                        <i class="fa-regular fa-comment text-color-3 mr-2"></i
                        >{{ user.count_comment }} đánh giá
                      </li>
                      <li>
                        <i class="fa-solid fa-book text-color-3 mr-2"></i>
                        {{ user.count_course }} khóa học
                      </li>
                      <li>
                        <router-link :to="{ name: 'courses' }"
                          >Xem tất cả khóa học</router-link
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="media-body">
                    <h5>
                      <router-link
                        :to="{
                          name: 'detail-tutor',
                          params: { id: user.id },
                        }"
                      >
                        {{ user.full_name }}</router-link
                      >
                    </h5>
                    <span class="d-block lh-18 pt-2 pb-3">
                      Ngày tham gia: {{ formatDate(user.created_at) }}
                    </span>
                    <p class="lh-18 pb-3">
                      {{ user.title }}
                    </p>
                    <p class="lh-18 pb-3">
                      {{ user.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav generic-tab d-flex flex-column">
              <ul class="nav mb-30px">
                <li class="nav-item" @click="tab = 0">
                  <span class="nav-link" :class="{ active: tab === 0 }">
                    Đánh giá
                  </span>
                </li>
                <li class="nav-item" @click="tab = 1">
                  <span class="nav-link" :class="{ active: tab === 1 }">
                    Bình luận
                  </span>
                </li>
              </ul>
              <div class="tab-content">
                <div
                  class="tab-pane fade"
                  :class="{ show: tab === 0, active: tab === 0 }"
                >
                  <div class="setting-body">
                    <div>
                      <div
                        class="tab-pane fade show active"
                        id="earning"
                        role="tabpanel"
                        aria-labelledby="earning-tab"
                      >
                        <div class="course-overview-card pt-4">
                          <h3 class="fs-24 font-weight-semi-bold pb-40px">
                            Phản hồi của học viên
                          </h3>
                          <div class="feedback-wrap">
                            <div class="media media-card align-items-center">
                              <div class="review-rating-summary">
                                <span class="stats-average__count">{{
                                  course.rating_avg
                                }}</span>
                                <div class="rating-wrap pt-1 d-block">
                                  <div
                                    class="review-stars"
                                    style="
                                      display: flex;
                                      justify-content: center;
                                    "
                                  >
                                    <star-rating
                                      v-model:rating="course.rating_avg"
                                      :increment="0.01"
                                      :read-only="true"
                                      :star-size="20"
                                      :show-rating="false"
                                    ></star-rating>
                                  </div>
                                  <span class="rating-total d-block"
                                    >({{
                                      course.rating ? course.rating.length : 0
                                    }})</span
                                  >
                                  <span>Đánh giá khóa học</span>
                                </div>
                              </div>
                              <div class="media-body">
                                <RatingList :reviewList="course.rating" />
                              </div>
                              <!-- end media-body -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  :class="{ show: tab === 1, active: tab === 1 }"
                >
                  <div class="setting-body">
                    <div>
                      <div
                        class="tab-pane fade show active"
                        id="earning"
                        role="tabpanel"
                        aria-labelledby="earning-tab"
                      >
                        <div class="comments-wrap pt-4" id="comments">
                          <div
                            class="d-flex align-items-center justify-content-between pb-4"
                          >
                            <h3 class="fs-24 font-weight-semi-bold">
                              Tất cả bình luận
                            </h3>
                            <span class="ribbon ribbon-lg">{{
                              comments.total_count
                            }}</span>
                          </div>
                          <div v-if="hasLogin" class="add-comment-wrap pb-2">
                            <div class="row">
                              <div class="input-box col-lg-12">
                                <div class="form-group">
                                  <textarea
                                    class="form-control"
                                    placeholder="Viết bình luận của bạn"
                                    data-val="true"
                                    v-model="comment_content"
                                  ></textarea>
                                </div>
                              </div>
                              <div
                                class="btn-box col-lg-12 d-flex justify-content-end"
                              >
                                <button
                                  class="btn theme-btn"
                                  @click="handleAddComment"
                                  type="button"
                                  data-val="true"
                                >
                                  Gửi bình luận
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="comment-list">
                            <div
                              class="media media-card border-bottom border-bottom-gray pb-4 mb-4"
                              v-for="comment in comments"
                              :key="comment.id"
                            >
                              <div class="media-img mr-4 rounded-full">
                                <img
                                  class="rounded-full lazy"
                                  :src="comment.user.avatar"
                                  alt="User image"
                                  style="
                                    border-radius: 50% !important;
                                    width: 70px !important;
                                    height: 70px !important;
                                  "
                                />
                              </div>
                              <div class="media-body">
                                <h5
                                  class="pb-2 fs-15 mr-2"
                                  style="width: fit-content; float: left"
                                >
                                  {{ comment.user.full_name }}
                                </h5>
                                <span class="d-block lh-18 pb-2 fs-12">{{
                                  formatDate(comment.created_at)
                                }}</span>
                                <p class="pb-3">{{ comment.content }}</p>
                                <div
                                  v-if="hasLogin"
                                  class="helpful-action d-flex align-items-center justify-content-between"
                                >
                                  <a
                                    class="btn theme-btn theme-btn-sm theme-btn-transparent lh-30 rep-comment"
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#replyModal"
                                    data-id="1"
                                    @click="comment_replay_id = comment.id"
                                    ><i class="la la-reply mr-1"></i> Trả lời</a
                                  >
                                </div>

                                <div
                                  v-for="children_comment in comment.children_comments"
                                  :key="children_comment.id"
                                  class="mt-3"
                                  style="font-size: 12px"
                                >
                                  <div
                                    class="media-img mr-4 rounded-full"
                                    style="
                                      width: 50px;
                                      height: 50px;
                                      float: left;
                                      margin-right: 5px !important;
                                    "
                                  >
                                    <img
                                      class="rounded-full lazy"
                                      :src="children_comment.user.avatar"
                                      alt="User image"
                                      style="
                                        border-radius: 50% !important;
                                        width: 50px !important;
                                        height: 50px !important;
                                      "
                                    />
                                  </div>
                                  <div class="media-body">
                                    <h5
                                      class="pb-2 fs-15 mr-2"
                                      style="width: fit-content; float: left"
                                    >
                                      {{ children_comment.user.full_name }}
                                    </h5>
                                    <span class="d-block lh-18 pb-2 fs-12">{{
                                      formatDate(children_comment.created_at)
                                    }}</span>
                                    <p class="pb-3">
                                      {{ children_comment.content }}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="load-more-btn-box text-center pt-3 pb-5"
                            v-if="comments.length > 0"
                          >
                            <button
                              class="btn theme-btn theme-btn-sm theme-btn-transparent lh-30 mr-2"
                              @click="quantity_comment = 3"
                              v-if="quantity_comment !== 3"
                            >
                              <i class="fa-solid fa-chevron-up"></i> Thu gọn
                            </button>
                            <button
                              class="btn theme-btn theme-btn-sm theme-btn-transparent lh-30"
                              @click="quantity_comment += 3"
                              v-if="comments.length !== comments.total_count"
                            >
                              <i class="fa-solid fa-arrows-rotate mr-1"></i> Xem
                              thêm bình luận
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <img
                    :src="course.image"
                    alt="Course image"
                    class="w-100 rounded lazy"
                    style="width: 239px; height: 160px"
                  />
                </div>
                <div class="preview-course-feature-content pt-40px">
                  <p class="d-flex align-items-center pb-2">
                    <span class="fs-30 font-weight-semi-bold text-black">
                      {{ Number(course.price).toLocaleString("vi-VN") }} VND
                    </span>
                  </p>
                  <div
                    class="buy-course-btn-box"
                    v-if="hasLogin && hasLogin.id !== course.user_id"
                  >
                    <button
                      class="btn theme-btn mt-3 w-100 btn-register-course"
                      @click="getToRequestPayment"
                      v-if="!course.is_register"
                    >
                      Mua khoá học
                    </button>
                    <button
                      class="btn theme-btn mt-3 w-100 btn-register-course"
                      v-else
                    >
                      Đã mua
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
                      <i class="fa-regular fa-bookmark mr-2 text-color"></i>
                      Lượt thích
                    </span>
                    {{ course.likes_count }}
                  </li>
                  <li class="d-flex align-items-center justify-content-between">
                    <span>
                      <i class="fa-regular fa-eye mr-2 text-color"></i> Lượt
                      xem</span
                    >
                    {{ course.view }}
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
                      Cấp độ:
                      <span class="ml-2">
                        <span
                          v-for="item in course.classes"
                          :key="item.id"
                          class="ml-2"
                          >{{ item.name }}</span
                        >
                      </span>
                    </span>
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
                <ul
                  class="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15"
                >
                  <li
                    v-for="item in course.subjects"
                    :key="item.id"
                    class="mr-1"
                  >
                    <router-link
                      :to="{ name: 'courses', params: { subject_id: item.id } }"
                      >{{ item.name }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="card card-item">
              <div class="card-body">
                <h3 class="card-title fs-18 pb-2">Thẻ khóa học</h3>
                <div class="divider"><span></span></div>
                <ul
                  class="generic-list-item generic-list-item-boxed d-flex flex-wrap fs-15"
                >
                  <li class="mr-2" v-for="tag in list_tags" :key="tag">
                    <a href="#" onclick="return false;">{{ tag.label }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <RatingModal
    :isOpen="isOpenRatingForm"
    :courseId="course_id"
    @update:isOpen="updateOpen"
    @createSuccess="handleRatingSuccessfully"
  />
  <ReportModal
    :isOpen="isOpenReportForm"
    :relationId="course_id"
    @update:isOpen="updateIsOpenReportCourseForm"
    @createSuccess="()=>{}"
  />
  <div
    class="modal fade modal-container"
    id="replyModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="replyModalTitle"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header border-bottom-gray">
          <div class="pr-2">
            <h5
              class="modal-title fs-19 font-weight-semi-bold lh-24"
              id="replyModalTitle"
            >
              Trả lời bình luận
            </h5>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" class="la la-times"
              ><i class="fa-solid fa-xmark"></i
            ></span>
          </button>
        </div>
        <!-- end modal-header -->
        <div class="modal-body">
          <form method="post">
            <div class="form-group">
              <label class="label-text">Nội dung</label>
              <textarea
                class="form-control form--control pl-3"
                rows="4"
                placeholder="Write your response..."
                data-val="true"
                data-val-required="The CmtChildren field is required."
                v-model="comment_replay_content"
              ></textarea>
            </div>
            <div class="btn-box text-right">
              <button
                type="button"
                class="btn font-weight-medium mr-3"
                data-dismiss="modal"
              >
                Hủy
              </button>
              <button
                class="btn theme-btn theme-btn-sm"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                @click="handelReplayComment"
              >
                Trả lời <i class="la la-arrow-right icon ml-1"></i>
              </button>
            </div>
          </form>
        </div>
        <!-- end modal-body -->
      </div>
      <!-- end modal-content -->
    </div>
    <!-- end modal-dialog -->
  </div>
</template>
<script>
import $http from "@/services/httpService";
import $auth from "@/services/authService";
import get from "lodash/get";
import CONSTS from "@/Constants";
import RatingModal from "@/components/Modal/RatingModal.vue";
import ReportModal from "@/components/Modal/ReportModal.vue";

import {
  database,
  ref,
  push,
  onValue,
  child,
  get as firebaseGet,
  set,
} from "@/services/firebaseService";
import { createToast } from "mosha-vue-toastify";
import RatingList from "@/components/layouts/RatingList.vue";
import dayjs from "dayjs";
export default {
  components: {
    RatingModal,
    RatingList,
    ReportModal,
  },
  data() {
    return {
      course: {
        classes: [],
        subjects: [],
      },
      user: {},
      list_tags: [],
      count_comment: 10,
      count_student: 3,
      is_loading: false,
      course_id: this.$route.params.id,
      payment: null,
      register_course: null,
      isOpenRatingForm: false,
      isOpenReportForm: false,
      ratingOfUser: 0,
      tab: 0,
      comments: [],
      comment_content: null,
      quantity_comment: 3,
      comment_replay_id: null,
      comment_replay_content: null,
    };
  },

  created() {
    this.getDetailCourse();
    this.payment = this.$route.query;
    this.$route.query.partnerCode && this.saveDataPayment();
    this.getComments(this.course_id);
  },

  computed: {
    hasLogin() {
      return $auth.getUser;
    },
    isLike() {
      return this.course.is_like;
    },
    isRating() {
      if (!this.hasLogin) {
        return false;
      }

      this.course.rating &&
        this.course.rating.forEach((item) => {
          if (item.user_id == this.hasLogin.id) {
            this.ratingOfUser = item.rating;
          }
        });

      return this.ratingOfUser > 0 ? true : false;
    },
  },

  methods: {
    async getDetailCourse() {
      this.is_loading = true;
      const course_id = this.$route.params.id;
      const res = await $http.get("/course/" + course_id);
      if (get(res, "data.result", false)) {
        this.course = res.data.course;
        this.user = get(this.course, "user", {});
        this.list_tags = CONSTS.CD_TAGS.filter((tag) =>
          this.course.tags.includes(tag.id)
        );
      }
      this.is_loading = false;
    },

    async handleLike() {
      this.is_loading = true;
      let params = {
        user_id: this.hasLogin.id,
        relation_id: this.course.id,
      };
      const res = await $http.post("/like/course", params);
      if (get(res, "data.result", false)) {
        this.course.is_like = !this.course.is_like;
        if (this.course.is_like) {
          this.course.likes_count = this.course.likes_count + 1;
          const current_user = this.hasLogin;
          current_user.likes_count = current_user.likes_count + 1;
          $auth.setUser(current_user);

          push(ref(database, "notifications"), {
            user_id: this.course.user_id,
            object_id: this.course.id,
            created_at: this.getDateTimeNow(),
            type_cd: 1,
            content: this.hasLogin.full_name + " đã yêu thích khóa học của bạn",
            url: { name: "detail-course", params: { id: this.course.id } },
            is_read: false,
          });
        } else {
          this.course.likes_count = this.course.likes_count - 1;
          const current_user = this.hasLogin;
          current_user.likes_count = current_user.likes_count - 1;
          $auth.setUser(current_user);
        }
      }
      window.dispatchEvent(
        new CustomEvent("localstorage-changed", {
          detail: {
            storage: localStorage.getItem("user"),
          },
        })
      );
      this.is_loading = false;
    },

    async handleRegister() {
      let params = {
        user_id: this.hasLogin.id,
        course_id: this.$route.params.id,
      };
      const res = await $http.post("/register/course", params);
      if (get(res, "data.result", false)) {
        this.register_course = res.data.register_course;

        push(ref(database, "notifications"), {
          user_id: this.hasLogin.id,
          object_id: this.course.id,
          created_at: this.getDateTimeNow(),
          type_cd: 1,
          content: "Đã mua khóa học thành công",
          url: { name: "detail-course", params: { id: this.course.id } },
          is_read: false,
        });

        push(ref(database, "notifications"), {
          user_id: this.course.user_id,
          object_id: this.course.id,
          created_at: this.getDateTimeNow(),
          type_cd: 1,
          content: this.hasLogin.full_name + " đã mua khóa học của bạn",
          url: {
            name: "list-student-course",
            params: { course_id: this.course.id },
          },
          is_read: false,
        });
      }
      this.getDetailCourse();
    },

    async getToRequestPayment() {
      if (this.course.price > 0) {
        this.$router.push({
          path: "/yeu-cau-thanh-toan",
          query: {
            payment_type: 0,
            course_id: this.course.id,
          },
        });
      } else {
        await this.handleRegister();
      }
    },

    formatDate(inputDate) {
      return dayjs(inputDate).format("DD/MM/YYYY HH:mm:ss");
    },
    getDateTimeNow() {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    async saveDataPayment() {
      createToast("Đã Mua Khoá Học Thành Công!", {
        type: "success",
        timeout: 10000,
      });
      this.$router.push({ path: this.$route.path });
      await this.handleRegister();
      this.getDetailCourse();

      let params = {
        user_id: this.hasLogin.id,
        register_course_id: this.register_course,
        payment: this.payment,
        payment_type: 0,
      };
      await $http.post("/payment/create", params);
    },

    async handleVoteCourse() {
      this.isOpenRatingForm = true;
    },

    async updateOpen(value) {
      this.isOpenRatingForm = value;
    },

    async handleRatingSuccessfully() {
      this.getDetailCourse();
      this.isOpenRatingForm = false;
    },

    async getComments(courseId) {
      this.is_loading = true;
      const res = await $http.get("/comments/" + courseId, {
        quantity: this.quantity_comment,
      });
      if (get(res, "data.result", false)) {
        this.comments = res.data.comments;
        this.comments.total_count = res.data.total_count;
      }
      this.is_loading = false;
    },

    async handleAddComment() {
      if (!this.comment_content) return;

      this.is_loading = true;
      let params = {
        user_id: this.hasLogin.id,
        relation_id: this.course_id,
        content: this.comment_content,
      };

      const res = await $http.post("/comment", params);
      if (get(res, "data.result", false)) {
        this.getComments(this.course.id);
        this.comment_content = "";

        if (this.course.user_id !== this.hasLogin.id) {
          push(ref(database, "notifications"), {
            user_id: this.course.user_id,
            object_id: this.course.id,
            created_at: this.getDateTimeNow(),
            type_cd: 2,
            content: this.hasLogin.full_name + " đã bình luận khoá học của bạn",
            url: { name: "detail-course", params: { id: this.course_id } },
            is_read: false,
          });
        }
      }
      this.is_loading = false;
    },

    async handelReplayComment() {
      this.is_loading = true;
      let params = {
        user_id: this.hasLogin.id,
        relation_id: this.course.id,
        content: this.comment_replay_content,
        parent_id: this.comment_replay_id,
      };

      const res = await $http.post("/comment", params);
      if (get(res, "data.result", false)) {
        this.getComments(this.course.id);
        this.comment_replay_content = "";

        if (this.course.user_id !== this.hasLogin.id) {
          push(ref(database, "notifications"), {
            user_id: this.course.user_id,
            object_id: this.course.id,
            created_at: this.getDateTimeNow(),
            type_cd: 2,
            content: this.hasLogin.full_name + " đã trả lời bình luận của bạn",
            url: { name: "detail-course", params: { id: this.course.id } },
            is_read: false,
          });
        }
      }
      this.is_loading = false;
    },

    async handleReportCourse() {
      this.updateIsOpenReportCourseForm(true);
    },

    async updateIsOpenReportCourseForm(value) {
      this.isOpenReportForm = value;
    },
  },
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

.stats-average__count {
  color: #f68a03;
  font-size: 65px;
  font-weight: 700;
}
</style>
