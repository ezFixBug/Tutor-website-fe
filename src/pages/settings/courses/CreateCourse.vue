<template>
  <spinner :is_loading="is_loading" />
  <div class="container-fluid">
    <div
      b-euuw8q6dcd=""
      class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5"
    >
      <div b-euuw8q6dcd="" class="media media-card align-items-center">
        <div class="media-img media--img media-img-md rounded-full">
          <img
            class="rounded-full"
            :src="user.avatar"
            alt="Student thumbnail image"
          />
        </div>
        <div class="media-body">
          <h2 class="section__title fs-30">{{ user.full_name }}</h2>
          <!-- end rating-wrap -->
        </div>
        <!-- end media-body -->
      </div>
      <!-- end media -->
    </div>
    <!-- end breadcrumb-content -->
    <div b-euuw8q6dcd="" class="section-block mb-5"></div>

    <div class="dashboard-heading mb-5">
      <h1 class="fs-22 font-weight-semi-bold">Tạo khóa học</h1>
    </div>
    <form
      enctype="multipart/form-data"
      method="post"
      novalidate=""
      class="row"
      action="/tao-khoa-hoc-cua-toi"
    >
      <div class="card card-item">
        <div class="card-body">
          <h3 class="fs-22 font-weight-semi-bold pb-2">Thông tin</h3>
          <div class="divider"><span></span></div>
          <div class="row">
            <div class="col-lg-12 mb-4">
              <div class="media media-card align-items-center">
                <div class="media-img media-img-lg mr-4 bg-gray">
                  <img
                    class="mr-3"
                    id="output"
                    :src="course.image ? course.image : DEFAULT_IMAGE"
                    alt="course image"
                  />
                </div>
                <div class="media-body">
                  <div class="file-upload-wrap file-upload-wrap-2">
                    <input
                      class="file-upload-input with-preview"
                      type="file"
                      placeholder="Hình ảnh khóa học"
                      @change="onChangeUploadImage"
                      data-val-required="The ThumbnailPicture field is required."
                      id="ThumbnailPicture"
                      name="ThumbnailPicture"
                    />
                    <span class="file-upload-text"
                      ><i class="la la-photo mr-2"></i>Tải hình ảnh</span
                    >
                  </div>
                  <!-- file-upload-wrap -->
                  <p class="fs-14">
                    Kích thước tệp tối đa là 5MB, Kích thước tối thiểu: 200x200
                    Và các tệp phù hợp là .jpg &amp; .png
                  </p>
                  <div
                    v-for="(error, index) in errors.image"
                    :key="index"
                    class="text-danger validation-summary-errors fs-14"
                  >
                    {{ error }}
                  </div>
                </div>
              </div>
              <!-- end media -->
            </div>
            <!-- end col-lg-4 -->
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-text"
                  >Tên khóa học<span class="text-color fs-14">*</span></label
                >
                <div
                  v-for="(error, index) in errors.title"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <input
                  class="form-control form--control pl-3 textboxName"
                  required=""
                  type="text"
                  placeholder="e.g. Learn JavaScript for Beginners "
                  data-val="true"
                  data-val-required="The Title field is required."
                  id="Title"
                  name="Title"
                  v-model="course.title"
                />
              </div>
            </div>
            <!-- end col-lg-12 -->
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-text">Phụ đề</label>
                <div
                  v-for="(error, index) in errors.sub_title"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <input
                  class="form-control form--control pl-3"
                  type="text"
                  placeholder="e.g. Empower yourself with this comprehensive JavaScript course."
                  data-val="true"
                  data-val-required="The SubTitle field is required."
                  id="SubTitle"
                  name="SubTitle"
                  v-model="course.sub_title"
                />
              </div>
            </div>
            <!-- end col-lg-12 -->

            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-text"
                  >Giá<span class="text-color fs-14">*</span></label
                >
                <div
                  v-for="(error, index) in errors.price"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <input
                  class="form-control form--control pl-3 money"
                  required=""
                  type="text"
                  placeholder="1.900.000đ"
                  data-val="true"
                  data-val-number="The field SellPrice must be a number."
                  data-val-required="The SellPrice field is required."
                  id="SellPrice"
                  name="SellPrice"
                  :disabled="!is_free"
                  v-model="course.price"
                />
              </div>
            </div>
            <!-- end col-lg-12 -->

            <div class="col-lg-12">
              <div class="custom-control custom-checkbox">
                <div class="check-list row">
                  <div class="col-4">
                    <label class="ui-checkbox ui-checkbox-primary">
                      <input
                        type="checkbox"
                        checked=""
                        data-val="true"
                        data-val-required="The Payment field is required."
                        id="Payment"
                        name="Payment"
                        v-model="is_free"
                      />
                      <span class="input-span"></span>Khóa học thu phí
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-lg-12 -->
            <div class="col-lg-12">
              <div class="form-group">
                <label class="label-text">Giới thiệu ngắn khóa học</label>
                <div
                  v-for="(error, index) in errors.description"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <textarea
                  class="form-control form--control pl-3"
                  rows="4"
                  type="text"
                  placeholder="Giới thiệu khóa học..."
                  data-val="true"
                  data-val-required="The SeoMetaDescription field is required."
                  id="SeoMetaDescription"
                  name="SeoMetaDescription"
                  v-model="course.description"
                ></textarea>
              </div>
              <div class="form-group">
                <label class="label-text">Mô tả khóa học</label>
                <div
                  v-for="(error, index) in errors.content"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <ckeditor
                  :editor="editor"
                  v-model="course.content"
                  :config="editorConfig"
                ></ckeditor>
              </div>
            </div>
            <!-- end col-lg-12 -->
          </div>
        </div>
        <!-- end card-body -->
      </div>
    </form>
    <!-- end card -->
    <div class="card card-item" style="width: 100%">
      <div class="card-body">
        <h3 class="fs-22 font-weight-semi-bold pb-2">Loại khóa học</h3>
        <div class="divider"><span></span></div>
        <div class="row">
          <div class="col-lg-6">
            <label class="label-text">Loại khóa học</label>
            <div
              v-for="(error, index) in errors.type_cd"
              :key="index"
              class="text-danger validation-summary-errors fs-14"
            >
              {{ error }}
            </div>
            <div class="form-group">
              <div class="select-container w-auto">
                <div class="dropdown bootstrap-select select-container-select">
                  <Form>
                    <FormItem>
                      <Select
                        show-search
                        :options="listType"
                        size="large"
                        class="w-85 mr-4"
                        v-model:value="course.type_cd"
                        :filter-option="filterOption"
                        defaultValue="Học tại nhà"
                      />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
            <!-- end col-lg-12 -->
          </div>
          <div
            class="col-lg-6 course-type course-onl-off course-onl-video"
            style=""
          >
            <div class="form-group">
              <label class="label-text"
                >Ngày bắt đầu<span class="text-color fs-14"
                  >*(hơn 2 ngày so với ngày hiện tại)</span
                ></label
              >
              <div
                v-for="(error, index) in errors.start_date"
                :key="index"
                class="text-danger validation-summary-errors fs-14"
              >
                {{ error }}
              </div>
              <input
                class="form-control form--control pl-3"
                type="date"
                placeholder="Nhập ngày bắt đầu của khóa học"
                data-val="true"
                data-val-required="The DateStart field is required."
                id="CourseAttributeCreateUpdateRequest_DateStart"
                name="CourseAttributeCreateUpdateRequest.DateStart"
                v-model="course.start_date"
              />
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div class="col-lg-6 course-type course-onl-off" style="">
            <div class="form-group">
              <label class="label-text"
                >Giờ bắt đầu<span class="text-color fs-14">*</span></label
              >
              <div
                v-for="(error, index) in errors.time_start"
                :key="index"
                class="text-danger validation-summary-errors fs-14"
              >
                {{ error }}
              </div>
              <input
                class="form-control form--control pl-3"
                type="time"
                placeholder="Nhập giờ bắt đầu của khóa học"
                data-val="true"
                data-val-required="The TimeStart field is required."
                id="CourseAttributeCreateUpdateRequest_TimeStart"
                name="CourseAttributeCreateUpdateRequest.TimeStart"
                v-model="course.time_start"
              />
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div
            class="col-lg-6 course-type course-off"
            v-if="course.type_cd === 1"
          >
            <label class="label-text"
              >Tỉnh/Thành Phố<span class="text-color fs-14">*</span></label
            >
            <div
              v-for="(error, index) in errors.province_id"
              :key="index"
              class="text-danger validation-summary-errors fs-14"
            >
              {{ error }}
            </div>
            <div class="form-group">
              <div class="select-container w-auto">
                <div class="dropdown bootstrap-select select-container-select">
                  <Form>
                    <FormItem>
                      <Select
                        show-search
                        :options="listOptionProvinces"
                        size="large"
                        placeholder="--Chọn thành phố/tỉnh--"
                        class="w-85 mr-4"
                        @change="onChangeChooseCityUser"
                        v-model:value="course.province_id"
                        :filter-option="filterOption"
                      />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div
            class="col-lg-6 course-type course-off"
            v-if="course.type_cd === 1"
          >
            <label class="label-text"
              >Quận/Huyện<span class="text-color fs-14">*</span></label
            >
            <div
              v-for="(error, index) in errors.district_id"
              :key="index"
              class="text-danger validation-summary-errors fs-14"
            >
              {{ error }}
            </div>
            <div class="form-group">
              <div class="select-container w-auto">
                <Form>
                  <FormItem>
                    <Select
                      show-search
                      :options="listOptionDistricts"
                      size="large"
                      placeholder="--Chọn thành phố/tỉnh--"
                      class="w-85 mr-4"
                      v-model:value="course.district_id"
                      :filter-option="filterOption"
                    />
                  </FormItem>
                </Form>
              </div>
            </div>
          </div>
          <!-- end col-lg-12 -->
          <div
            class="col-lg-6 course-type course-off"
            v-if="course.type_cd === 1"
          >
            <div class="form-group">
              <label class="label-text"
                >Địa chỉ học<span class="text-color fs-14">*</span></label
              >
              <div
                v-for="(error, index) in errors.street"
                :key="index"
                class="text-danger validation-summary-errors fs-14"
              >
                {{ error }}
              </div>
              <input
                class="form-control form--control pl-3"
                required=""
                type="text"
                placeholder="Nhập nơi mở lớp"
                id="CourseAttributeCreateUpdateRequest_Address"
                name="CourseAttributeCreateUpdateRequest.Address"
                v-model="course.street"
              />
            </div>
          </div>
          <div
            class="col-lg-6 course-type course-off"
            v-if="course.type_cd === 2"
          >
            <div class="form-group">
              <label class="label-text"
                >Link giới thiệu khoá học<span class="text-color fs-14">*</span></label
              >
              <div
                v-for="(error, index) in errors.link"
                :key="index"
                class="text-danger validation-summary-errors fs-14"
              >
                {{ error }}
              </div>
              <input
                class="form-control form--control pl-3"
                required=""
                type="text"
                placeholder="Nhập link giới thiệu khoá học"
                v-model="course.link"
              />
            </div>
          </div>
          <!-- end col-lg-12 -->
        </div>
      </div>
      <!-- end card-body -->
    </div>
    <!-- end card -->
  </div>
  <div class="card card-item" style="width: 100%">
    <div class="card-body">
      <h3 class="fs-22 font-weight-semi-bold pb-2">
        Chọn thể loại khóa học<span class="text-color fs-14">*</span>
      </h3>
      <div class="divider"><span></span></div>
      <div
        v-for="(error, index) in errors.subjects"
        :key="index"
        class="text-danger validation-summary-errors fs-14"
      >
        {{ error }}
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            <div class="check-list row">
              <div
                class="col-3"
                v-for="(item, pos) in listOptionSubjects"
                :key="pos"
              >
                <label class="ui-checkbox ui-checkbox-primary">
                  <input
                    type="checkbox"
                    class="course-level"
                    :value="item.value"
                    v-model="course.subjects"
                  />
                  <span class="input-span ml-1">{{ item.label }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- end col-lg-4 -->
      </div>
    </div>
    <!-- end card-body -->
  </div>
  <!-- end card -->
  <div class="card card-item" style="width: 100%">
    <div class="card-body">
      <h3 class="fs-22 font-weight-semi-bold pb-2">
        Khóa học này phù hợp với<span class="text-color fs-14">*</span>
      </h3>
      <div class="divider"><span></span></div>
      <div
        v-for="(error, index) in errors.classes"
        :key="index"
        class="text-danger validation-summary-errors fs-14"
      >
        {{ error }}
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            <div class="check-list row">
              <div
                class="col-3"
                v-for="(item, pos) in listOptionClasses"
                :key="pos"
              >
                <label class="ui-checkbox ui-checkbox-primary">
                  <input
                    type="checkbox"
                    class="course-level"
                    :value="item.value"
                    v-model="course.classes"
                  />
                  <span class="input-span ml-1">{{ item.label }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- end col-lg-4 -->
      </div>
    </div>
    <!-- end card-body -->
  </div>
  <!-- end card -->
  <div class="card card-item course-type course-onl-off" style="width: 100%">
    <div class="card-body">
      <h3 class="fs-22 font-weight-semi-bold pb-2">Thời khóa biểu</h3>
      <div class="divider"><span></span></div>
      <div
        v-for="(error, index) in errors.schedule"
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
              @click="onChangeSchedule('Monday', 1)"
              :class="{ 'choosed-schedule': schedule['Monday'].includes(1) }"
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
              @click="onChangeSchedule('Monday', 2)"
              :class="{ 'choosed-schedule': schedule['Monday'].includes(2) }"
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
              @click="onChangeSchedule('Monday', 3)"
              :class="{ 'choosed-schedule': schedule['Monday'].includes(3) }"
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
                @click="onChangeSchedule('Tuesday', 1)"
                :class="{ 'choosed-schedule': schedule['Tuesday'].includes(1) }"
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
                @click="onChangeSchedule('Tuesday', 2)"
                :class="{ 'choosed-schedule': schedule['Tuesday'].includes(2) }"
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
                @click="onChangeSchedule('Tuesday', 3)"
                :class="{ 'choosed-schedule': schedule['Tuesday'].includes(3) }"
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
                @click="onChangeSchedule('Wednesday', 1)"
                :class="{
                  'choosed-schedule': schedule['Wednesday'].includes(1),
                }"
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
                @click="onChangeSchedule('Wednesday', 2)"
                :class="{
                  'choosed-schedule': schedule['Wednesday'].includes(2),
                }"
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
                @click="onChangeSchedule('Wednesday', 3)"
                :class="{
                  'choosed-schedule': schedule['Wednesday'].includes(3),
                }"
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
                @click="onChangeSchedule('Thursday', 1)"
                :class="{
                  'choosed-schedule': schedule['Thursday'].includes(1),
                }"
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
                @click="onChangeSchedule('Thursday', 2)"
                :class="{
                  'choosed-schedule': schedule['Thursday'].includes(2),
                }"
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
                @click="onChangeSchedule('Thursday', 3)"
                :class="{
                  'choosed-schedule': schedule['Thursday'].includes(3),
                }"
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
                @click="onChangeSchedule('Friday', 1)"
                :class="{ 'choosed-schedule': schedule['Friday'].includes(1) }"
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
                @click="onChangeSchedule('Friday', 2)"
                :class="{ 'choosed-schedule': schedule['Friday'].includes(2) }"
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
                @click="onChangeSchedule('Friday', 3)"
                :class="{ 'choosed-schedule': schedule['Friday'].includes(3) }"
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
                @click="onChangeSchedule('Saturday', 1)"
                :class="{
                  'choosed-schedule': schedule['Saturday'].includes(1),
                }"
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
                @click="onChangeSchedule('Saturday', 2)"
                :class="{
                  'choosed-schedule': schedule['Saturday'].includes(2),
                }"
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
                @click="onChangeSchedule('Saturday', 3)"
                :class="{
                  'choosed-schedule': schedule['Saturday'].includes(3),
                }"
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
            <label class="label-text text-center w-100">Chủ nhật</label>
            <div class="d-flex flex-wrap align-items-center pb-4">
              <button
                class="btn flex-grow-1 mx-2 mb-2 sunday"
                @click="onChangeSchedule('Sunday', 1)"
                :class="{ 'choosed-schedule': schedule['Sunday'].includes(1) }"
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
                @click="onChangeSchedule('Sunday', 2)"
                :class="{ 'choosed-schedule': schedule['Sunday'].includes(2) }"
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
                @click="onChangeSchedule('Sunday', 3)"
                :class="{ 'choosed-schedule': schedule['Sunday'].includes(3) }"
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
      </div>
    </div>
  </div>
  <div class="card card-item" style="width: 100%">
    <div class="card-body">
      <h3 class="fs-22 font-weight-semi-bold pb-2">Gán thẻ tắt</h3>
      <div class="divider"><span></span></div>
      <div
        v-for="(error, index) in errors.tags"
        :key="index"
        class="text-danger validation-summary-errors fs-14"
      >
        {{ error }}
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-group">
            <div class="check-list row">
              <div class="col-4" v-for="tag in tags" :key="tag.id">
                <label class="ui-checkbox ui-checkbox-primary">
                  <input
                    type="checkbox"
                    data-val="true"
                    data-val-required="The Selected field is required."
                    id="CourseTags_SelectItems_0__Selected"
                    name="CourseTags.SelectItems[0].Selected"
                    :value="tag.id"
                    v-model="course.tags"
                  />
                  <span class="input-span ml-1"></span>{{ tag.label }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- end col-lg-4 -->
      </div>

      <!-- end card-body -->
    </div>
  </div>
  <!-- end card -->
  <div class="course-submit-btn-box pb-4">
    <router-link
      class="btn btn-outline-secondary mr-2"
      :to="{ name: 'my-courses' }"
      >Trở về</router-link
    >
    <button v-if="course.type_cd === 2" class="btn theme-btn" type="button" @click="handleOpenModalLessonCourse">
      Thêm bài học
    </button>
    <button v-else class="btn theme-btn" type="button" @click="handleCreateCourse">
      Tạo khóa học
    </button>

    <!-- end row -->
  </div>
  <LessonCourseModal
    :isOpen="isOpenLessonCourseModal"
    @update:isOpen="updateIsOpenLessonCourseForm"
    @create-lesson-course="handleCreateLessonCourse"
  />
</template>
<script>
import $auth from "@/services/authService";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import $http from "@/services/httpService";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import { createToast } from "mosha-vue-toastify";
import CONSTS from "@/Constants";
import LessonCourseModal from '@/components/Modal/LessonCourseModal.vue'

export default {
  components: {
    LessonCourseModal
  },

  async created() {
    this.is_loading = true;
    this.listOptionProvinces = await $http.getProvinces();
    this.listOptionSubjects = await $http.getSubjects();
    this.listOptionClasses = await $http.getClasses();
    this.listOptionJobs = await $http.getJobs();
    this.is_loading = false;
  },

  data() {
    return {
      DEFAULT_IMAGE: "https://hryoutest.in.ua/uploads/images/default.jpg",
      listOptionSubjects: [],
      listOptionClasses: [],
      listOptionProvinces: [],
      listOptionDistricts: [],
      is_loading: false,
      is_free: false,
      tags: CONSTS.CD_TAGS,
      editor: ClassicEditor,
      editorConfig: {
        placeholder: "Mô tả khóa học...",
      },
      course: {
        image: null,
        type_cd: 2,
        title: null,
        province_id: null,
        subjects: [],
        classes: [],
        schedule: {
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
          Sunday: [],
        },
        content: "",
        tags: [],
        lesson: []
      },
      listType: CONSTS.CD_TYPE_CD_OF_COURSE,
      errors: {},
      isOpenLessonCourseModal: false,
    };
  },

  computed: {
    user() {
      return $auth.getUser;
    },

    schedule() {
      return this.course.schedule;
    },
  },

  methods: {
    async onChangeUploadImage(event) {
      this.is_loading = true;
      const file = event.target.files[0];
      if (file) {
        this.course.image = await $http.uploadImageToCloud(file);
      }
      this.is_loading = false;
    },

    async onChangeChooseCityUser(value) {
      this.is_loading = true;
      this.listOptionDistricts = await $http.getDistricts(value);
      this.is_loading = false;
    },

    onChangeSchedule(day, session) {
      const day_of_schedule = this.course.schedule[day];
      const index = day_of_schedule.indexOf(session);
      if (index === -1) {
        day_of_schedule.push(session);
      } else {
        day_of_schedule.splice(index, 1);
      }
      console.log(this.course.schedule[day]);
    },

    isShoosedSchedule(day, session) {
      const day_of_schedule = this.course.schedule[day];
      return day_of_schedule.includes(session);
    },

    async handleCreateCourse() {
      this.is_loading = true;
      let params = cloneDeep(this.course);

      const res = await $http.post("/course/" + this.user.id, params);
      this.is_loading = false;
      if (get(res, "data.result", false)) {
        createToast("Tạo khóa học thành công!", {
          type: "success",
          timeout: 6000,
        });
        this.$router.push({ name: "my-courses" });
      } else if (get(res, "data.status", false) === 422) {
        this.errors = res.data.errors;
      }
    },

    filterOption(input, option) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },

    async handleOpenModalLessonCourse() {
      this.updateIsOpenLessonCourseForm(true)
    },

    async updateIsOpenLessonCourseForm(value) {
      this.isOpenLessonCourseModal = value;
    },

    async handleCreateLessonCourse(data) {
      this.updateIsOpenLessonCourseForm(false);
      this.course.lesson = data
      this.handleCreateCourse()
    }
  },
};
</script>
<style>
.card-item {
  max-height: none;
}

.choosed-schedule {
  background-color: rgb(3, 191, 3) !important;
  border-color: rgb(236, 82, 82) !important;
  color: rgb(255, 255, 255) !important;
}
</style>