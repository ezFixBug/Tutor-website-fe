<template>
  <spinner :is_loading="is_loading" />
  <BreadCrumb :type="2" />
  <section class="team-member-area section-padding pt-5 mt-4">
    <div class="containter">
      <div class="filter-bar">
        <div
          class="filter-bar-inner d-flex flex-wrap align-items-center justify-content-between"
        >
          <p class="fs-14">
            Chúng tôi đã tìm thấy
            <span class="text-color-1">{{ listTutors.length }}</span> gia sư
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
              <i class="fa-solid fa-angle-up collapse-btn-show"></i>
              <i class="fa-solid fa-angle-down collapse-btn-hide"></i>
            </a>
          </div>
        </div>
        <div class="pt-4 collapse" id="collapseFilter">
          <div class="row">
            <div class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <Form>
                      <FormItem>
                        <Select
                          show-search
                          :options="subjects"
                          v-model:value="params.subject_id"
                          size="large"
                          placeholder="--Chọn danh mục--"
                          class="w-85 mr-4"
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <Form>
                      <FormItem>
                        <Select
                          show-search
                          :options="classes"
                          v-model:value="params.class_id"
                          size="large"
                          placeholder="--Chọn cấp độ--"
                          class="w-85 mr-4"
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <Form>
                      <FormItem>
                        <Select
                          show-search
                          :options="provinces"
                          v-model:value="params.province_id"
                          @change="onChangeProvinces"
                          size="large"
                          placeholder="--Chọn tỉnh/thành phố--"
                          class="w-85 mr-4"
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <Form>
                      <FormItem>
                        <Select
                          show-search
                          :options="districts"
                          v-model:value="params.district_id"
                          size="large"
                          placeholder="--Chọn quận/huyện--"
                          class="w-85 mr-4"
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <Form>
                      <FormItem>
                        <Select
                          show-search
                          :options="price_order"
                          v-model:value="params.price_ỏder_type"
                          size="large"
                          placeholder="--Chọn theo giá--"
                          class="w-85 mr-4"
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <Form>
                      <FormItem>
                        <Select
                          show-search
                          :options="jobs"
                          v-model:value="params.job_current_id"
                          size="large"
                          placeholder="--Chọn kiểu gia sư--"
                          class="w-85 mr-4"
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <Form>
                      <FormItem>
                        <Select
                          show-search
                          :options="sex"
                          v-model:value="params.sex"
                          size="large"
                          placeholder="--Chọn giới tính--"
                          class="w-85 mr-4"
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div
                    class="dropdown bootstrap-select select-container-select dropup"
                  >
                    <Form>
                      <FormItem>
                        <Select
                          show-search
                          :options="types"
                          v-model:value="params.type_cd"
                          size="large"
                          placeholder="--Chọn kiểu dạy--"
                          class="w-85 mr-4"
                        />
                      </FormItem>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-12"
              style="display: flex; justify-content: flex-end"
            >
              <button class="btn theme-btn mr-2" @click="handelSearch">
                Tìm kiếm <i class="fa-solid fa-arrow-right icon"></i>
              </button>
              <button class="btn theme-btn" @click="resetForm">
                <i class="fa-solid fa-rotate-right icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ListTutors :listTutors="listTutors" />
      <div class="text-center pt-3">
        <pagination :pagination="pagination" />
      </div>
    </div>
  </section>
  <section
    class="cta-area pt-60px pb-60px position-relative overflow-hidden bg-gray"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-9">
          <div class="cta-content-wrap media py-4 align-items-center">
            <div class="flex-shrink-0 mr-3">
              <i
                class="fa-solid fa-chalkboard-user"
                style="font-size: 60px"
              ></i>
            </div>
            <div class="media-body">
              <h2 class="fs-25 font-weight-bold mb-1">
                Trở thành một giáo viên, chia sẻ kiến thức của bạn
              </h2>
              <p class="fs-17">
                Tạo khóa học video trực tuyến và khóa học ngoại tuyến, tiếp cận
                học viên trên toàn cầu và kiếm tiền
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cta-btn-box text-right">
            <a href="/dang-ky" class="btn theme-btn">
              Đăng ký trên Smart Edu <i class="fa-solid fa-arrow-right icon"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ListTutors from "@/components/layouts/ListTutors.vue";
import BreadCrumb from "@/components/layouts/BreadCrum.vue";
import { Select, FormItem, Form, Button } from "ant-design-vue";
import cloneDeep from "lodash/cloneDeep";

import $http from "@/services/httpService";
import get from "lodash/get";

export default {
  components: {
    ListTutors,
    BreadCrumb,
    Select,
    FormItem,
    Form,
    Button,
  },
  data() {
    return {
      listOptionCourses: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
      subjects: [],
      classes: [],
      jobs: [],
      provinces: [],
      districts: [],
      sex: [
        {
          value: 1,
          label: "Nam",
        },
        {
          value: 2,
          label: "Nữ",
        },
      ],
      types: [
        {
          value: 1,
          label: "Học tại nhà",
        },
        {
          value: 2,
          label: "Học online",
        },
      ],
      price_order: [
        {
          value: 1,
          label: "Từ thấp đến cao",
        },
        {
          value: 2,
          label: "Từ cao đến thấp",
        },
      ],
      params: {
        subject_id: null,
        class_id: null,
        province_id: null,
        district_id: null,
        price_type_order: null,
        job_current_id: null,
        sex: null,
        type_cd: null,
      },
      listTutors: [],
      pagination: {},
      is_loading: false,
    };
  },

  async created() {
    this.getDataTutor();
    this.subjects = await $http.getSubjects();
    this.classes = await $http.getClasses();
    this.provinces = await $http.getProvinces();
  },

  methods: {
    async getDataTutor() {
      this.is_loading = true;
      let params = cloneDeep(this.params);
      params["page"] = this.$route.query.page;
      const res_tutors = await $http.get("/tutors", params);
      if (get(res_tutors, "data.result", false)) {
        this.listTutors = res_tutors.data.tutors;
        this.pagination = res_tutors.data.paginate;
      }
      this.is_loading = false;
    },

    async onChangeProvinces() {
      this.is_loading = true;
      this.districts = await $http.getDistricts(this.params.province_id);
      this.is_loading = false;
    },

    handelSearch() {
      this.$router.push({ name: "tutor", query: { page: 1 } });
      this.getDataTutor();
    },

    resetForm() {
      this.$router.push({ name: "tutor" });
      this.params = {
        subject_id: null,
        class_id: null,
        province_id: null,
        district_id: null,
        price_type_order: null,
        job_current_id: null,
        sex: null,
        type_cd: null,
      };
      this.getDataTutor();
    },
  },

  watch: {
    $route: {
      handler: function () {
        this.getDataTutor();
      },
    },
  },
};
</script>