<template>
  <spinner :is_loading="is_loading" />
  <BreadCrumb :type="3" :subject="subject" />
  <section class="course-area section-padding">
    <div class="container">
      <div class="filter-bar mb-4">
        <div
          class="filter-bar-inner d-flex flex-wrap align-items-center justify-content-between pb-4"
        >
          <p class="fs-14">
            Chúng tôi đã tìm thấy
            <span class="text-black">{{
              pagination ? pagination.total_count : 0
            }}</span>
            khóa học có sẵn cho bạn
          </p>
          <div class="d-flex flex-wrap align-items-center">
            <a
              class="btn theme-btn theme-btn-sm theme-btn-white lh-28 collapse-btn collapsed"
              data-toggle="collapse"
              href="#collapseFilter"
              role="button"
              aria-expanded="false"
              aria-controls="collapseFilter"
            >
              Lọc
              <i class="fa-solid fa-chevron-down ml-1 collapse-btn-hide"></i>
              <i class="fa-solid fa-chevron-up ml-1 collapse-btn-show"></i>
            </a>
          </div>
        </div>
        <div class="collapse" id="collapseFilter" style="">
          <Form
            class="row"
            :model="FormFilterCourse"
            @finish="handleSubmitFormFilterCource"
          >
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select"
                  >
                    <Select
                      show-search
                      v-model:value="FormFilterCourse.subject_id"
                      :options="subjects"
                      size="large"
                      :filter-option="filterOption"
                      allow-clear
                      placeholder="Chọn danh mục"
                    />
                  </div>
                </div>
              </div>
            </FormItem>
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select"
                  >
                    <Select
                      show-search
                      v-model:value="FormFilterCourse.class_id"
                      :options="classes"
                      size="large"
                      :filter-option="filterOption"
                      allow-clear
                      placeholder="Chọn level"
                    />
                  </div>
                </div>
              </div>
            </FormItem>
            <!-- <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select"
                  >
                    <Select
                      show-search
                      v-model:value="FormFilterCourse.province_id"
                      :options="provinces"
                      size="large"
                      placeholder="Chọn Tỉnh/Thành Phố"
                      :filter-option="filterOption"
                      allow-clear
                    />
                  </div>
                </div>
              </div>
            </FormItem> -->
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select"
                  >
                    <Select
                      show-search
                      v-model:value="FormFilterCourse.type_cd"
                      :options="types"
                      size="large"
                      :filter-option="filterOption"
                      allow-clear
                      placeholder="Chọn Hình Thức"
                    />
                  </div>
                </div>
              </div>
            </FormItem>
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select"
                  >
                    <Select
                      show-search
                      v-model:value="FormFilterCourse.price_cd"
                      :options="paymentMethods"
                      size="large"
                      :filter-option="filterOption"
                      allow-clear
                      placeholder="Chọn Loại Khoá Học"
                    />
                  </div>
                </div>
              </div>
            </FormItem>
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select"
                  >
                    <Select
                      show-search
                      v-model:value="FormFilterCourse.rate"
                      :options="rates"
                      size="large"
                      :filter-option="filterOption"
                      allow-clear
                      placeholder="Chọn Đánh Giá"
                    />
                  </div>
                </div>
              </div>
            </FormItem>
            <div class="d-flex justify-content-end col-lg-12">
              <Button type="primary" danger html-type="submit">
                <span class="mr-1"> Tìm Kiếm</span>
                <i class="fa-solid fa-arrow-right"></i>
              </Button>
              <Button
                type="primary"
                danger
                html-type="button"
                @click="resetForm"
                class="ml-2"
              >
                <i class="fa-solid fa-arrows-rotate"></i>
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 mb-4" v-for="course in courses" :key="course.id">
          <Course :course="course" />
        </div>
      </div>
    </div>
    <pagination :pagination="pagination" />
  </section>
</template>
<script>
import { reactive } from "vue";
import { Form } from "ant-design-vue";
import Course from "./Course.vue";
import $auth from "@/services/authService";
import $http from "@/services/httpService";
import cloneDeep from "lodash/cloneDeep";
import CONSTS from "@/Constants";
import get from "lodash/get";

const useForm = Form.useForm;

export default {
  components: {
    Course,
  },

  setup() {
    const FormFilterCourse = reactive({
      subject_id: null,
      class_id: null,
      province_id: null,
      district_id: null,
      type_cd: null,
      rate: null,
      price_cd: null,
    });

    const { resetFields } = useForm(FormFilterCourse);

    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const rates = [
      { label: "1 Sao", value: "1" },
      { label: "2 Sao", value: "2" },
      { label: "3 Sao", value: "3" },
      { label: "4 Sao", value: "4" },
      { label: "5 Sao", value: "5" },
    ];
    const paymentMethods = [
      { label: "Thanh Toán", value: "1" },
      { label: "Miễn Phí", value: "2" },
    ];

    const courses = [];

    return {
      FormFilterCourse,
      filterOption,
      resetFields,
      rates,
      paymentMethods,
      courses,
    };
  },

  data() {
    return {
      isOpenFilter: false,
      is_loading: false,
      subjects: [],
      classes: [],
      provinces: [],
      types: [],
      pagination: {},
      subject: null,
    };
  },

  async created() {
    this.is_loading = true;
    this.subjects = await $http.getSubjects();
    this.classes = await $http.getClasses();
    this.provinces = await $http.getProvinces();
    this.types = CONSTS.CD_TYPE_CD_OF_COURSE;
    const subject_id = this.$route.params.subject_id;
    if (subject_id) {
      this.FormFilterCourse.subject_id = subject_id;
      this.subject = this.subjects.find((item) => {
        return item.value == subject_id;
      });
    }
    this.getDataCourses();
    this.is_loading = false;
  },

  methods: {
    handleSubmitFormFilterCource() {
      this.$router.push({ name: "courses", query: { page: 1 } });
      this.getDataCourses();
    },

    resetForm() {
      this.resetFields();
      this.$router.push({ name: "courses" });
      this.subject = null;
      this.getDataCourses({});
    },

    async getDataCourses() {
      this.is_loading = true;
      let params = cloneDeep(this.FormFilterCourse);
      params["page"] = this.$route.query.page;
      console.log(params);
      const res = await $http.get("/courses", params);
      if (get(res, "data.result", false)) {
        this.courses = res.data.courses;
        this.pagination = res.data.paginate;
      }
      this.is_loading = false;
    },
  },

  watch: {
    $route: {
      handler: function () {
        this.getDataCourses();
      },
    },
  },
};
</script>
<style>
@import "./_style.scss";
</style>