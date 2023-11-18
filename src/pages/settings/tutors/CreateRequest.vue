<template>
  <spinner :is_loading="is_loading" />
  <section
    class="register-area section--padding dot-bg overflow-hidden"
    style="padding-top: 50px"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="register-heading-content-wrap text-center">
            <div class="section-heading">
              <h2 class="section__title">Điền thông tin để tìm kiếm gia sư</h2>
            </div>
            <!-- end section-heading -->
          </div>
        </div>
        <!-- end col-lg-12 -->
      </div>
      <!-- end row -->

      <div class="row pt-50px">
        <div class="col-lg-10 mx-auto">
          <form @submit.prevent="handleAddRequest">
            <div class="card card-item" style="width: 100%">
              <div class="card-body">
                <h3 class="fs-22 font-weight-semi-bold pb-2">
                  Thông tin tìm kiếm
                </h3>
                <div class="divider"><span></span></div>
                <div class="row">
                  <div class="input-box col-lg-6">
                    <label class="label-text"
                      >Tiêu đề<span class="text-color fs-14">*</span></label
                    >
                    <div
                      v-for="(error, index) in dataErrors.title"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control form--control"
                        type="text"
                        required=""
                        placeholder="Tìm kiếm gia sư toán"
                        data-val="true"
                        data-val-required="The Title field is required."
                        id="Title"
                        name="Title"
                        v-model="request.title"
                      />
                    </div>
                  </div>
                  <!-- end input-box -->
                  <div class="input-box col-lg-6">
                    <label class="label-text"
                      >Lớp<span class="text-color fs-14">*</span></label
                    >
                    <div
                      v-for="(error, index) in dataErrors.class_id"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <div
                          class="dropdown bootstrap-select select-container-select"
                        >
                          <Form>
                            <FormItem>
                              <Select
                                show-search
                                :options="classes"
                                size="large"
                                class="w-85 mr-4"
                                v-model:value="request.class_id"
                                :filter-option="filterOption"
                              />
                            </FormItem>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->
                  <div class="input-box col-lg-6">
                    <label class="label-text"
                      >Loại khóa học<span class="text-color fs-14"
                        >*</span
                      ></label
                    >
                    <div
                      v-for="(error, index) in dataErrors.course_type_cd"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <div
                          class="dropdown bootstrap-select select-container-select"
                        >
                          <Form>
                            <FormItem>
                              <Select
                                show-search
                                :options="listType"
                                size="large"
                                class="w-85 mr-4"
                                v-model:value="request.course_type_cd"
                                :filter-option="filterOption"
                              />
                            </FormItem>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->
                  <div class="input-box col-lg-6">
                    <label class="label-text"
                      >Môn học<span class="text-color fs-14">*</span></label
                    >
                    <div
                      v-for="(error, index) in dataErrors.subject_id"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <div
                          class="dropdown bootstrap-select select-container-select"
                        >
                          <Form>
                            <FormItem>
                              <Select
                                show-search
                                :options="subjects"
                                size="large"
                                class="w-85 mr-4"
                                v-model:value="request.subject_id"
                                :filter-option="filterOption"
                              />
                            </FormItem>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->
                  <div class="input-box col-lg-6 course-type course-onl-off">
                    <label class="label-text"
                      >Số buổi/tuần<span class="text-color fs-14"
                        >*</span
                      ></label
                    >
                    <div
                      v-for="(error, index) in dataErrors.num_day_per_week"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <input
                          class="form-control form--control"
                          min="1"
                          required=""
                          type="number"
                          max="21"
                          placeholder="Nhập số buổi/tuần vd:2"
                          data-val="true"
                          data-val-required="The SessionNumber field is required."
                          id="SessionNumber"
                          name="SessionNumber"
                          v-model="request.num_day_per_week"
                        />
                        <span class="la la-book input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->
                  <div class="input-box col-lg-6 course-type course-onl-off">
                    <label class="label-text"
                      >Số giờ/buổi<span class="text-color fs-14">*</span></label
                    >
                    <div
                      v-for="(error, index) in dataErrors.num_hour_per_day"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <input
                          class="form-control form--control numbersOnly"
                          required=""
                          min="1"
                          max="5"
                          placeholder="Nhập số giờ/buổi vd:1.5"
                          type="text"
                          data-val="true"
                          data-val-number="The field TimeNumber must be a number."
                          data-val-required="The TimeNumber field is required."
                          id="TimeNumber"
                          name="TimeNumber"
                          v-model="request.num_hour_per_day"
                        />
                        <span class="la la-times-circle input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->
                  <div class="input-box col-lg-4 course-type course-onl-off">
                    <label class="label-text"
                      >Số học sinh<span class="text-color fs-14">*</span></label
                    >
                    <div
                      v-for="(error, index) in dataErrors.num_student"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <input
                          class="form-control form--control"
                          min="1"
                          required=""
                          type="number"
                          placeholder="Nhập số học sinh tham gia"
                          data-val="true"
                          data-val-required="The NumberStudent field is required."
                          id="NumberStudent"
                          name="NumberStudent"
                          v-model="request.num_student"
                        />
                        <span class="la la-user input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->

                  <div class="input-box col-lg-4">
                    <label class="label-text"
                      >Khoảng giá/người/tháng<span class="text-color fs-14"
                        >*</span
                      ></label
                    >
                    <div
                      v-for="(error, index) in dataErrors.price"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <input
                          class="form-control form--control money"
                          type="text"
                          required=""
                          placeholder="vd: 2 000 000 vnđ"
                          data-val="true"
                          data-val-number="The field Price must be a number."
                          data-val-required="The Price field is required."
                          id="Price"
                          name="Price"
                          v-model="request.price"
                        />
                        <span class="la la-money input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->
                  <div class="input-box col-lg-4">
                    <label class="label-text">Tổng tiền(vnđ)</label>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <input
                          class="form-control form--control text-color money-total money"
                          type="text"
                          readonly=""
                          :value="request.price * request.num_student"
                        />
                        <span class="la la-money input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->

                  <div class="input-box col-lg-6">
                    <label class="label-text">Người hướng dẫn là:</label>
                    <div
                      v-for="(error, index) in dataErrors.sex"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-radio mb-1 fs-15">
                        <input
                          type="radio"
                          class="custom-control-input"
                          value="0"
                          id="allStarRating"
                          name="SexTeacher"
                          required=""
                          v-model="request.sex"
                        />
                        <label
                          class="custom-control-label custom--control-label"
                          for="allStarRating"
                        >
                          Tất cả
                        </label>
                      </div>
                      <div class="custom-control custom-radio mb-1 fs-15">
                        <input
                          type="radio"
                          class="custom-control-input"
                          value="1"
                          id="fourStarRating"
                          name="SexTeacher"
                          required=""
                          v-model="request.sex"
                        />
                        <label
                          class="custom-control-label custom--control-label"
                          for="fourStarRating"
                        >
                          Nam
                        </label>
                      </div>
                      <div class="custom-control custom-radio mb-1 fs-15">
                        <input
                          type="radio"
                          class="custom-control-input"
                          value="2"
                          id="threeStarRating"
                          name="SexTeacher"
                          required=""
                          v-model="request.sex"
                        />
                        <label
                          class="custom-control-label custom--control-label"
                          for="threeStarRating"
                        >
                          Nữ
                        </label>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->
                  <div class="input-box col-lg-6">
                    <label class="label-text">Mô tả</label>
                    <div
                      v-for="(error, index) in dataErrors.description"
                      :key="index"
                      class="text-danger validation-summary-errors fs-14"
                    >
                      {{ error }}
                    </div>
                    <div class="form-group">
                      <div class="select-container w-auto">
                        <textarea
                          class="form-control form--control"
                          rows="5"
                          type="text"
                          placeholder="vd: Học viên là nam , đang học lớp 7
Có định hướng học thi theo chứng chỉ CCNA , bây giờ bắt đầu học từ đầu
Yêu cầu gia sư có kinh nghiệm dạy, nhiệt tình tận tâm"
                          data-val="true"
                          data-val-required="The Description field is required."
                          id="Description"
                          name="Description"
                          v-model="request.description"
                        ></textarea>
                        <span class="la la-money input-icon"></span>
                      </div>
                    </div>
                  </div>
                  <!-- end input-box -->
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
            <div
              class="card card-item course-type course-onl-off"
              style="width: 100%"
            >
              <div class="card-body">
                <h3 class="fs-22 font-weight-semi-bold pb-2">Thời khóa biểu</h3>
                <div class="divider"><span></span></div>
                <div
                  v-for="(error, index) in dataErrors.schedule"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <div class="row justify-content-between">
                  <div class="course-onl-off-tkb">
                    <label class="label-text text-center w-100">Thứ 2</label>
                    <div class="d-flex flex-wrap align-items-center pb-4">
                      <button
                        class="btn flex-grow-1 mx-2 mb-2 monday"
                        @click="onChangeSchedule('Monday', '1')"
                        :class="{
                          'choosed-schedule': schedule['Monday'].includes('1'),
                        }"
                        type="button"
                        style="
                          background-color: #fff;
                          border-color: #ec5252;
                          color: #ec5252;
                        "
                      >
                        Sáng
                      </button>
                      <button
                        class="btn flex-grow-1 mx-2 mb-2 monday"
                        @click="onChangeSchedule('Monday', '2')"
                        :class="{
                          'choosed-schedule': schedule['Monday'].includes('2'),
                        }"
                        type="button"
                        style="
                          background-color: #fff;
                          border-color: #ec5252;
                          color: #ec5252;
                        "
                      >
                        Chiều
                      </button>
                      <button
                        class="btn flex-grow-1 mx-2 mb-2 monday"
                        @click="onChangeSchedule('Monday', '3')"
                        :class="{
                          'choosed-schedule': schedule['Monday'].includes('3'),
                        }"
                        type="button"
                        style="
                          background-color: #fff;
                          border-color: #ec5252;
                          color: #ec5252;
                        "
                      >
                        Tối
                      </button>
                    </div>
                  </div>
                  <!-- end col-lg-12 -->
                  <div class="course-onl-off-tkb">
                    <div class="form-group">
                      <label class="label-text text-center w-100">Thứ 3</label>
                      <div class="d-flex flex-wrap align-items-center pb-4">
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 tuesday"
                          @click="onChangeSchedule('Tuesday', '1')"
                          :class="{
                            'choosed-schedule':
                              schedule['Tuesday'].includes('1'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Sáng
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 tuesday"
                          @click="onChangeSchedule('Tuesday', '2')"
                          :class="{
                            'choosed-schedule':
                              schedule['Tuesday'].includes('2'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Chiều
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 tuesday"
                          @click="onChangeSchedule('Tuesday', '3')"
                          :class="{
                            'choosed-schedule':
                              schedule['Tuesday'].includes('3'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Tối
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- end col-lg-12 -->
                  <div class="course-onl-off-tkb">
                    <div class="form-group">
                      <label class="label-text text-center w-100">Thứ 4</label>
                      <div class="d-flex flex-wrap align-items-center pb-4">
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 wednesday"
                          @click="onChangeSchedule('Wednesday', '1')"
                          :class="{
                            'choosed-schedule':
                              schedule['Wednesday'].includes('1'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Sáng
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 wednesday"
                          @click="onChangeSchedule('Wednesday', '2')"
                          :class="{
                            'choosed-schedule':
                              schedule['Wednesday'].includes('2'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Chiều
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 wednesday"
                          @click="onChangeSchedule('Wednesday', '3')"
                          :class="{
                            'choosed-schedule':
                              schedule['Wednesday'].includes('3'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Tối
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- end col-lg-12 -->
                  <div class="course-onl-off-tkb">
                    <div class="form-group">
                      <label class="label-text text-center w-100">Thứ 5</label>
                      <div class="d-flex flex-wrap align-items-center pb-4">
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 thursday"
                          @click="onChangeSchedule('Thursday', '1')"
                          :class="{
                            'choosed-schedule':
                              schedule['Thursday'].includes('1'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Sáng
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 thursday"
                          @click="onChangeSchedule('Thursday', '2')"
                          :class="{
                            'choosed-schedule':
                              schedule['Thursday'].includes('2'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Chiều
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 thursday"
                          @click="onChangeSchedule('Thursday', '3')"
                          :class="{
                            'choosed-schedule':
                              schedule['Thursday'].includes('3'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Tối
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- end col-lg-12 -->
                  <div class="course-onl-off-tkb">
                    <div class="form-group">
                      <label class="label-text text-center w-100">Thứ 6</label>
                      <div class="d-flex flex-wrap align-items-center pb-4">
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 friday"
                          @click="onChangeSchedule('Friday', '1')"
                          :class="{
                            'choosed-schedule':
                              schedule['Friday'].includes('1'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Sáng
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 friday"
                          @click="onChangeSchedule('Friday', '2')"
                          :class="{
                            'choosed-schedule':
                              schedule['Friday'].includes('2'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Chiều
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 friday"
                          @click="onChangeSchedule('Friday', '3')"
                          :class="{
                            'choosed-schedule':
                              schedule['Friday'].includes('3'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Tối
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- end col-lg-12 -->
                  <div class="course-onl-off-tkb">
                    <div class="form-group">
                      <label class="label-text text-center w-100">Thứ 7</label>
                      <div class="d-flex flex-wrap align-items-center pb-4">
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 saturday"
                          @click="onChangeSchedule('Saturday', '1')"
                          :class="{
                            'choosed-schedule':
                              schedule['Saturday'].includes('1'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Sáng
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 saturday"
                          @click="onChangeSchedule('Saturday', '2')"
                          :class="{
                            'choosed-schedule':
                              schedule['Saturday'].includes('2'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Chiều
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 saturday"
                          @click="onChangeSchedule('Saturday', '3')"
                          :class="{
                            'choosed-schedule':
                              schedule['Saturday'].includes('3'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Tối
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- end col-lg-12 -->
                  <div class="course-onl-off-tkb">
                    <div class="form-group">
                      <label class="label-text text-center w-100"
                        >Chủ nhật</label
                      >
                      <div class="d-flex flex-wrap align-items-center pb-4">
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 sunday"
                          @click="onChangeSchedule('Sunday', '1')"
                          :class="{
                            'choosed-schedule':
                              schedule['Sunday'].includes('1'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Sáng
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 sunday"
                          @click="onChangeSchedule('Sunday', '2')"
                          :class="{
                            'choosed-schedule':
                              schedule['Sunday'].includes('2'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Chiều
                        </button>
                        <button
                          class="btn flex-grow-1 mx-2 mb-2 sunday"
                          @click="onChangeSchedule('Sunday', '3')"
                          :class="{
                            'choosed-schedule':
                              schedule['Sunday'].includes('3'),
                          }"
                          type="button"
                          style="
                            background-color: #fff;
                            border-color: #ec5252;
                            color: #ec5252;
                          "
                        >
                          Tối
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- end col-lg-12 -->
                </div>
              </div>
              <!-- end card-body -->
            </div>

            <div class="card card-item" style="width: 100%" v-if="tutor_id">
              <div class="card-body">
                <h3 class="fs-22 font-weight-semi-bold pb-2">
                  Thông tin gia sư đã mời
                </h3>
                <div class="divider"><span></span></div>
                <div class="row">
                  <div class="input-box col-lg-12">
                    <section class="breadcrumb-area py-5 bg-white pattern-bg">
                      <div class="container row">
                        <div class="col-llg-6 col-md-6">
                          <div class="breadcrumb-content">
                            <div
                              class="media media-card align-items-center pb-4"
                            >
                              <div
                                class="media-img media--img media-img-md rounded-full"
                              >
                                <img
                                  class="rounded-full"
                                  :src="tutor.avatar"
                                  alt="Student thumbnail image"
                                />
                              </div>
                              <div class="media-body">
                                <h2 class="section__title fs-30">
                                  {{ tutor.full_name }}
                                </h2>
                                <!-- end rating-wrap -->
                                <span class="d-block lh-18 pt-1 pb-2">{{
                                  formatDate(tutor.created_at)
                                }}</span>
                                <p class="lh-18">{{ tutor.description }}</p>
                              </div>
                            </div>
                            <!-- end media -->
                          </div>
                          <!-- end breadcrumb-content -->
                        </div>
                        <div class="col-lg-3 col-md-3">
                          <p class="label-text font-weight-bold text-color-3">
                            Giới tính:
                          </p>
                          <span class="fs-15" type="text">{{
                            tutor.sex === 1 ? "Nam" : "Nữ"
                          }}</span>

                          <p class="label-text font-weight-bold text-color-3">
                            Sinh nhật:
                          </p>
                          <span class="fs-15" type="text">{{
                            tutor.birthday
                          }}</span>

                          <p class="label-text font-weight-bold text-color-3">
                            Học vấn:
                          </p>
                          <span class="fs-15" type="text">{{
                            tutor.education
                          }}</span>
                        </div>
                        <!-- end input-box -->
                        <div class="col-lg-3 col-md-3">
                          <p class="label-text font-weight-bold text-color-3">
                            Chi phí dạy/Giờ:
                          </p>
                          <span class="fs-15" type="text"
                            >{{ tutor.price }} vnđ</span
                          >
                          <p class="label-text font-weight-bold text-color-3">
                            Đang là:
                          </p>
                          <span class="fs-15" type="text">{{
                            tutor.job ? tutor.job.name : null
                          }}</span>

                          <p class="label-text font-weight-bold text-color-3">
                            Địa chỉ:
                          </p>
                          <span class="fs-15" type="text"
                            >{{ tutor.province ? tutor.province.name : null }} -
                            {{
                              tutor.district ? tutor.district.name : null
                            }}</span
                          >
                        </div>
                        <!-- end input-box -->
                      </div>
                      <!-- end container -->
                    </section>

                    <!-- end breadcrumb-area -->
                  </div>
                  <!-- end input-box -->
                </div>
              </div>
              <!-- end card-body -->
            </div>
            <!-- end card -->
            <div class="btn-box col-lg-12">
              <button class="btn theme-btn" type="submit">
                Tìm kiếm gia sư <i class="la la-arrow-right icon ml-1"></i>
              </button>
            </div>
            <!-- end btn-box -->
          </form>
        </div>
        <!-- end col-lg-10 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>

<script>
import $auth from "@/services/authService";
import $http from "@/services/httpService";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import { createToast } from "mosha-vue-toastify";
import CONSTS from "@/Constants";
import {
  database,
  ref,
  push,
  onValue,
  child,
  get as firebaseGet,
  set,
} from "@/services/firebaseService";
export default {
  data() {
    return {
      is_loading: false,
      subjects: [],
      classes: [],
      tutor: {},
      listType: CONSTS.CD_TYPE_CD_OF_COURSE,
      request: {
        title: null,
        user_id: null,
        subject_id: null,
        class_id: null,
        course_type_cd: null,
        num_day_per_week: null,
        num_hour_per_day: null,
        num_student: null,
        price: null,
        sex: null,
        description: null,
        schedule: {
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
          Sunday: [],
        },
      },
      dataErrors: {},
    };
  },

  async created() {
    this.is_loading = true;
    this.subjects = await $http.getSubjects();
    this.classes = await $http.getClasses();

    if (this.$route.name === "edit-request") {
      const request_id = this.$route.params.request_id;
      const res = await $http.get("/detail-request/" + request_id);
      if (get(res, "data.result", false)) {
        const schedule = this.request.schedule;
        this.request = res.data.request;

        for (const day in this.request.schedule) {
          if (schedule.hasOwnProperty(day)) {
            schedule[day] = this.request.schedule[day];
          }
        }
        this.request.schedule = schedule;
      }
    }

    if (this.tutor_id) {
      const res = await $http.get("/user/" + this.tutor_id);
      if (get(res, "data.result", false)) {
        this.tutor = res.data.user;
      }
    }

    this.is_loading = false;
  },

  computed: {
    currentUser() {
      return $auth.getUser;
    },

    schedule() {
      return this.request.schedule;
    },

    tutor_id() {
      return this.$route.params.tutor_id;
    },
  },

  methods: {
    onChangeSchedule(day, session) {
      const day_of_schedule = this.request.schedule[day];
      const index = day_of_schedule.indexOf(session);
      if (index === -1) {
        day_of_schedule.push(session);
      } else {
        day_of_schedule.splice(index, 1);
      }
    },

    async handleAddRequest() {
      this.is_loading = true;
      let params = this.request;
      params.user_id = this.currentUser.id;
      if (this.tutor_id) {
        params.tutor_id = this.tutor_id;
      }

      const res = await $http.post("/request-tutor", params);
      if (get(res, "data.result", false)) {
        if (this.$route.name === "edit-request") {
          createToast("Đã cập nhật yêu cầu tìm gia sư thành công!", {
            type: "success",
            timeout: 6000,
          });
          this.$router.push({ name: "my-requests" });
        } else {
          createToast("Đã gửi yêu cầu tìm gia sư!", {
            type: "success",
            timeout: 6000,
          });
          if (this.tutor_id) {
            const request_id = get(res, "data.request_id", false);
            push(ref(database, "notifications"), {
              user_id: this.tutor_id,
              object_id: this.tutor_id,
              created_at: this.getDateTimeNow(),
              type_cd: 1,
              content: this.currentUser.full_name + " đã gửi lời mời dạy!",
              url: {
                name: "detail-request",
                params: { request_id: request_id },
              },
              is_read: false,
            });

            push(ref(database, "notifications"), {
              user_id: this.currentUser.id,
              object_id: this.tutor_id,
              created_at: this.getDateTimeNow(),
              type_cd: 1,
              content: "Đã gửi lời mời dạy thành công!",
              url: {
                name: "detail-request",
                params: { request_id: request_id },
              },
              is_read: false,
            });

            this.$router.push({
              name: "detail-request",
              params: { request_id: request_id },
            });
          } else {
            this.$router.push({ name: "my-requests" });
          }
        }
      } else {
        if (get(res, "data.status", {}) === 422) {
          this.dataErrors = get(res, "data.errors", {});
        }
      }
      this.is_loading = false;
    },

    filterOption(input, option) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },

    formatDate(inputDate) {
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
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
  },
};
</script>