<template>
  <spinner :is_loading="is_loading" />
  <form class="row">
    <div class="card card-item w-100" style="max-height: none; max-height: none !important">
      <div class="card-body">
        <div class="row">
          <div class="input-box col-lg-12">
            <div class="media media-card align-items-center" style="display: block">
              <div class="media-img media-img-lg mr-4 bg-gray">
                <img :src='dataTutor.front_citizen_card ?? DEFAULT_IMAGE' />
              </div>
              <div class="media-body mt-2">
                <div class="file-upload-wrap file-upload-wrap-2">
                  <input ref="refFileFrontCard" id="refFileFrontCard" placeholder="Hình ảnh mặt trước CCCD" type="file"
                    class="file-upload-input with-preview" @change="onFileChangeFrontCard" />
                  <span class="file-upload-text">
                    <i class="fa-regular fa-image mr-2"></i>
                    Mặt trước CCCD
                    <span class="text-color fs-14">*</span>
                  </span>
                </div>
                <div v-for="(error, index) in dataErrors.front_citizen_card" :key="index"
                  class="text-danger validation-summary-errors fs-14">
                  {{ error }}
                </div>
                <p class="fs-14">
                  Kích thước tệp tối đa là 5MB, Kích thước tối thiểu: 350x200 Và
                  các tệp phù hợp là .jpg & .png
                </p>
              </div>
            </div>
          </div>
          <div class="input-box col-lg-12">
            <div class="media media-card align-items-center" style="display: block">
              <div class="media-img media-img-lg mr-4 bg-gray">
                <img class="mr-3" :src='dataTutor.back_citizen_card ?? DEFAULT_IMAGE' />
              </div>
              <div class="media-body mt-2">
                <div class="file-upload-wrap file-upload-wrap-2">
                  <input ref="refFileBackCard" id="refFileBackCard" placeholder="Hình ảnh mặt trước CCCD" type="file"
                    class="file-upload-input with-preview" @change="onFileChangeBackCard" />
                  <span class="file-upload-text">
                    <i class="fa-regular fa-image mr-2"></i>
                    Mặt sau CCCD
                    <span class="text-color fs-14">*</span>
                  </span>
                </div>
                <div v-for="(error, index) in dataErrors.back_citizen_card" :key="index"
                  class="text-danger validation-summary-errors fs-14">
                  {{ error }}
                </div>
                <p class="fs-14">
                  Kích thước tệp tối đa là 5MB, Kích thước tối thiểu: 350x200 Và
                  các tệp phù hợp là .jpg & .png
                </p>
              </div>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Họ và Tên
              <span class="text-color fs-14">*</span>
            </label>
            <div class="form-group">
              <input type="text" class="form-control form--control" v-model="dataTutor.full_name" readonly
                placeholder="e.g. Alex" />
              <i class="fa-regular fa-user input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Email
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input type="text" class="form-control form--control" v-model="dataTutor.email" readonly
                placeholder="e.g. alexsmith@gmail.com" />
              <i class="fa-regular fa-envelope input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Số điện thoại
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input type="text" class="form-control form--control" v-model="dataTutor.phone_number"
                placeholder="vd: 0384839025" />
              <i class="fa-solid fa-phone input-icon"></i>
            </div>
            <div v-for="(error, index) in dataErrors.phone_number" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Ngày sinh
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input type="date" class="form-control form--control" v-model="dataTutor.birthday"
                placeholder="vd: 0384839025" />
              <i class="fa-regular fa-calendar-days input-icon"></i>
            </div>
            <div v-for="(error, index) in dataErrors.birthday" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="col-lg-6">
            <label class="label-text">Chọn giới tính</label>
            <div class="form-group">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <div class="check-list row">
                      <div class="col-5">
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input type="radio" name="sex" class="course-level mr-1" :value="1" v-model="dataTutor.sex" />
                          <span class="input-span">Nam</span>
                        </label>
                      </div>
                      <div class="col-5">
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input type="radio" name="sex" class="course-level mr-1" :value="2" v-model="dataTutor.sex" />
                          <span class="input-span">Nữ</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Chọn thành phố/Tỉnh
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <div class="dropdown bootstrap-select select-container-select dropup">
                  <Form>
                    <FormItem>
                      <Select show-search :options="listOptionCities" size="large" placeholder="--Chọn thành phố/tỉnh--"
                        class="w-85 mr-4" @change="onChangeChooseCityUser" v-model:value="dataTutor.province_id"
                        :filter-option="filterOption" />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
            <div v-for="(error, index) in dataErrors.province_id" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Chọn quận/Huyện
              <span class="text-color fs-12">*</span>
            </label>
            <div class="">
              <div class="select-container w-auto">
                <div class="dropdown bootstrap-select select-container-select dropup">
                  <Form>
                    <FormItem>
                      <Select show-search :options="listOptionDistrictsUser" size="large"
                        placeholder="--Chọn quận/huyện--" class="w-85 mr-4" v-model:value="dataTutor.district_id"
                        :filter-option="filterOption" />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
            <div v-for="(error, index) in dataErrors.district_id" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Địa chỉ
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input type="text" class="form-control form--control" v-model="dataTutor.street"
                placeholder="vd: 38 Trạng Trình - Đầ Lạt - Lâm Đồng" />
              <i class="fa-solid fa-location-dot input-icon"></i>
            </div>
            <div v-for="(error, index) in dataErrors.street" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Học vấn
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input type="text" class="form-control form--control" v-model="dataTutor.education"
                placeholder="vd: Đại học" />
              <i class="fa-solid fa-graduation-cap input-icon"></i>
            </div>
            <div v-for="(error, index) in dataErrors.education" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Bạn đang là
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <div class="dropdown bootstrap-select select-container-select dropup">
                  <Form>
                    <FormItem>
                      <Select show-search :options="listOptionJobs" size="large" placeholder="--Chọn nghề nghiệp--"
                        v-model:value="dataTutor.job_current_id" class="w-85 mr-4" :filter-option="filterOption" />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
            <div v-for="(error, index) in dataErrors.job_current_id" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="input-box col-lg-12">
            <div class="media media-card align-items-center" style="display: block">
              <div class="media-img media-img-lg mr-4 bg-gray">
                <img class="mr-3" :src='dataTutor.certificate ?? DEFAULT_IMAGE' />
              </div>
              <div class="media-body mt-2">
                <div class="file-upload-wrap file-upload-wrap-2">
                  <input ref="refFileCertificate" id="refFileCertificate" placeholder="Hình ảnh bằng cấp/chứng chỉ"
                    type="file" class="file-upload-input with-preview" @change="onFileChangeCertificate" />
                  <span class="file-upload-text">
                    <i class="fa-regular fa-image mr-2"></i>
                    Bằng cấp
                    <span class="text-color fs-14">*</span>
                  </span>
                </div>
                <div v-for="(error, index) in dataErrors.certificate" :key="index"
                  class="text-danger validation-summary-errors fs-14">
                  {{ error }}
                </div>
                <p class="fs-14">
                  Kích thước tệp tối đa là 5MB, Kích thước tối thiểu: 350x200 Và
                  các tệp phù hợp là .jpg & .png
                </p>
              </div>
            </div>
          </div>
          <div class="input-box col-lg-12">
            <label class="label-text">
              Tiêu đề giới thiệu
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input type="text" class="form-control form--control" v-model="dataTutor.title"
                placeholder="Gia sư nhiều năm kinh nghiệm" />
              <i class="fa-solid fa-graduation-cap input-icon"></i>
            </div>
            <div v-for="(error, index) in dataErrors.title" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="input-box col-lg-12">
            <label class="label-text">
              Giới thiệu bản thân
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <textarea class="form-control form--control" type="text" placeholder="Giới thiệu bản thân"
                v-model="dataTutor.description"></textarea>
            </div>
            <div v-for="(error, index) in dataErrors.description" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-item w-100" style="max-height: none; max-heigt: none !important">
      <div class="card-body">
        <h3 class="fs-22 font-weight-semi-bold pb-2">
          Thêm môn dạy
          <span class="text-color fs-12">(bắt buộc)</span>
        </h3>
        <div class="divider"><span></span></div>
        <div class="row">
          <div v-for="(error, index) in dataErrors.listSubjectClasses" :key="index"
            class="text-danger validation-summary-errors fs-14">
            {{ error }}
          </div>
          <!-- <div class="col-lg-12 text-center" v-show="is_display_require_subject">
            <p class="text-color fs-12">Vui lòng chọn môn dạy</p>
          </div> -->
          <div class="col-lg-12 text-center" v-show="is_display_require_class">
            <p class="text-color fs-12">Vui lòng chọn ít nhất 1 lớp</p>
          </div>
          <div class="col-lg-12 text-center" v-show="is_display_subject_already">
            <p class="text-color fs-12">
              Bạn đã chọn môn học đó rồi. Vui lòng chọn môn học khác!
            </p>
          </div>
          <div class="col-lg-6">
            <label class="label-text">
              Môn dạy
              <span class="text-color fs-14">
                <span class="text-color fs-12">
                  (có thể thêm nhiều môn dạy vd: toán, lý...)
                </span>
              </span>
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <div class="dropdown bootstrap-select select-container-select dropup">
                  <Form>
                    <FormItem>
                      <Select show-search :options="listOptionSubjects" size="large" placeholder="--Chọn môn học--"
                        class="w-85 mr-4" @change="onChangeSubject" :filter-option="filterOption"
                        v-model:value="subject" />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <label class="label-text">
              Đối với lớp <span class="text-color fs-14">*</span>
            </label>
            <div class="form-group">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <div class="check-list row">
                      <div class="col-3" v-for="(item, pos) in listOptionClasses" :key="pos">
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input type="checkbox" class="course-level" :value="item.value"
                            v-model="list_classes_choosed" />
                          <span class="input-span ml-1">{{ item.label }}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box col-lg-12 text-right">
            <button class="btn theme-btn" type="button" @click="handleAddSubject">
              Thêm môn dạy
            </button>
          </div>
          <div class="input-box col-lg-12">
            <label class="label-text"> Danh sách môn dạy </label>
            <div class="l-teaching-topic">
              <div class="form-group" v-for="(item, index) in listClassSubjectChoosed" :key="index">
                <input class="form-control form--control teachingTopic" readonly
                  :value="item.subject.label + ': ' + item.classes" />
                <span class="la la-times search-icon delete-topic"
                  @click="handleRemoveClassSubjectChoosed(index)">X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-item w-100" style="max-height: none !important">
      <div class="card-body">
        <h3 class="fs-22 font-weight-semi-bold pb-2">
          Nơi bạn có thể dạy
          <span class="text-color fs-12">(bắt buộc)</span>
        </h3>
        <div class="divider"><span></span></div>
        <div v-for="(error, index) in dataErrors.listCityDistricts" :key="index"
          class="text-danger validation-summary-errors fs-14">
          {{ error }}
        </div>
        <div class="row">
          <div class="col-lg-12 text-center" v-show="is_display_require_city">
            <p class="text-color fs-12">Vui lòng chọn tỉnh(thành phố)</p>
          </div>
          <div class="col-lg-12 text-center" v-show="is_display_require_district">
            <p class="text-color fs-12">Vui lòng chọn ít nhất 1 quận(huyện)</p>
          </div>
          <div class="col-lg-12 text-center" v-show="is_display_city_already">
            <p class="text-color fs-12">
              Bạn đã chọn thành phố/Tỉnh đó rồi. Vui lòng chọn thành phố/Tỉnh
              khác!
            </p>
          </div>
          <div class="col-lg-9">
            <label class="label-text">
              Chọn tỉnh
              <span class="text-color fs-12">(có thể thêm nhiều nơi dạy vd:HCM, Bình Dương...)</span>
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <div class="dropdown bootstrap-select select-container-select dropup">
                  <Form>
                    <FormItem>
                      <Select show-search :options="listOptionCities" size="large" placeholder="--Chọn thành phố/Tỉnh--"
                        class="w-85 mr-4" @change="onChangeChooseCity" :filter-option="filterOption" />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <label class="label-text">Chọn quận, huyện <span class="text-color fs-14">*</span></label>
            <div class="form-group">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <div class="check-list row">
                      <div class="col-4" v-for="(item, pos) in listOptionDistricts" :key="pos">
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input type="checkbox" class="course-level mr-1" :value="item.value"
                            v-model="list_districts_choosed" />
                          <span class="input-span">{{ item.label }}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box col-lg-12 text-right">
            <button class="btn theme-btn" type="button" @click="handleAddCity()">
              Thêm nơi dạy
            </button>
          </div>
          <div class="input-box col-lg-12">
            <label class="label-text"> Danh sách nơi dạy </label>
            <div class="l-teaching-topic">
              <div class="form-group" v-for="(item, index) in listDistrictCityChoosed" :key="index">
                <input class="form-control form--control teachingTopic" readonly
                  :value="item.city.label + ': ' + item.districts" />
                <span class="la la-times search-icon delete-topic"
                  @click="handleRemoveCityDistrictChoosed(index)">X</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-item w-100">
      <div class="card-body">
        <h3 class="fs-22 font-weight-semi-bold pb-2">
          Hình thức và chi phí dạy
          <span class="text-color fs-12"> (bắt buộc) </span>
        </h3>
        <div class="divider"><span></span></div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <p class="text-color fs-12">
              Vui lòng nhập chi phí dạy và hình thức dạy!
            </p>
          </div>
          <div class="col-lg-6">
            <label class="label-text">
              Chi phí dạy(vnđ)/giờ<span class="text-color fs-14">*</span>
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <input type="text" class="form-control form--control money" placeholder="Phí khách hàng sẽ trả cho bạn?"
                  data-val-required="The Price field is required." required v-model="dataTutor.price" />
                <i class="fa-solid fa-money-bill input-icon"></i>
              </div>
            </div>
            <div v-for="(error, index) in dataErrors.price" :key="index"
              class="text-danger validation-summary-errors fs-14">
              {{ error }}
            </div>
          </div>
          <div class="col-lg-12">
            <label class="label-text">Chọn hình thức dạy
              <span class="text-color fs-14"> *</span></label>
            <div class="form-group">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <div class="check-list row">
                      <div class="col-5">
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input type="radio" name="type" class="course-level mr-1" :value="1"
                            v-model="dataTutor.type_cd" />
                          <span class="input-span">Học tại nhà</span>
                        </label>
                      </div>
                      <div class="col-5">
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input type="radio" name="type" class="course-level mr-1" :value="2"
                            v-model="dataTutor.type_cd" />
                          <span class="input-span">Học online</span>
                        </label>
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
    <button class="btn theme-btn" type="button" @click="handleBecomeTutor">
      Trở thành gia sư <i class="fa-solid fa-arrow-right icon"></i>
    </button>
  </form>
</template>
<script>
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import cloneDeep from "lodash/cloneDeep";
import $http from "@/services/httpService";
import $auth from "@/services/authService";
import { createToast } from "mosha-vue-toastify";

const DEFAULT_IMAGE = "https://hryoutest.in.ua/uploads/images/default.jpg";
export default {
  data() {
    return {
      is_loading: false,
      listOptionCities: [],
      listOptionDistrictsUser: [],
      listOptionDistricts: [],
      listOptionJobs: [],
      listOptionSubjects: [],
      listOptionClasses: [],
      dataTutor: {
        sex: 2
      },
      subject: null,
      list_classes_choosed: [],
      classSubjectChoosed: [],
      is_display_require_subject: false,
      is_display_require_class: false,
      is_display_subject_already: false,
      is_display_require_city: false,
      is_display_require_district: false,
      is_display_city_already: false,
      city: null,
      list_districts_choosed: [],
      cityDistrictChoosed: [],
      dataErrors: [],
      DEFAULT_IMAGE: DEFAULT_IMAGE
    };
  },

  async created() {
    this.is_loading = true;
    this.listOptionCities = await $http.getProvinces();
    this.listOptionSubjects = await $http.getSubjects();
    if (this.user.district_id) {
      this.listOptionDistrictsUser = await $http.getDistricts(
        this.user.province_id
      );
    }
    this.listOptionClasses = await $http.getClasses();
    this.listOptionJobs = await $http.getJobs();
    const user_id = this.user.id;
    const response = await $http.get("/user/" + user_id);
    if (response.data.status === 200) {
      this.dataTutor = response.data.user;
      this.dataTutor.listCityDistricts = [];
      this.dataTutor.listSubjectClasses = [];
  
      this.dataTutor.teach_subjects.forEach(item => {
        const subjectName = item.subject.name;
        const classesName = item.teach_subject_classes.map(teachSubject => teachSubject.class.name);
        const classesId = item.teach_subject_classes.map(teachSubject => teachSubject.class.id);
        const subjectId = item.subject.id;

        this.dataTutor.listSubjectClasses.push({
          subject: subjectId,
          classes: classesId
        })

        this.classSubjectChoosed.push({
          "classes": classesName.join(", "),
          "subject": {
            "label": subjectName,
            "value": subjectId,
            "image": ""
          }
        });
      });

      this.dataTutor.teach_places.forEach(item => {
        const provinceName = item.province.name;
        const districtsName = item.teach_place_districts.map(teachPlace => teachPlace.district.name);
        const districtsId = item.teach_place_districts.map(teachPlace => teachPlace.district.id);
        const provinceId = item.province.id;

        this.dataTutor.listCityDistricts.push({
          city: item.province_id,
          districts: districtsId
        })

        this.cityDistrictChoosed.push({
          "districts": districtsName.join(", "),
          "city": {
            "label": provinceName,
            "value": provinceId,
          }
        });
      });

      // this.getSubject()
    }
    this.is_loading = false;
  },

  computed: {
    listClassSubjectChoosed: {
      get() {
        return cloneDeep(this.classSubjectChoosed);
      },
      set(val) {
        this.classSubjectChoosed.push(val);
      },
    },
    listDistrictCityChoosed: {
      get() {
        return cloneDeep(this.cityDistrictChoosed);
      },
      set(val) {
        this.cityDistrictChoosed.push(val);
      },
    },

    user() {
      return $auth.getUser;
    },
  },

  methods: {
    getSubject() {
      this.subject = this.dataTutor.subjects ? this.dataTutor.subjects?.[0]?.id : null

      const filteredClassIds = this.dataTutor.teach_subjects
        .filter(teachSubject => teachSubject.subject_id === this.subject)
        .map(teachSubject => teachSubject.teach_subject_classes.map(item => item.class_id))
        .flat();
      this.list_classes_choosed = filteredClassIds ?? [];
    },

    async onFileChangeFrontCard(event) {
      this.is_loading = true;
      const file = event.target.files[0];
      if (file) {
        this.dataTutor.front_citizen_card = await $http.uploadImageToCloud(
          file
        );
      }
      this.is_loading = false;
    },

    async onFileChangeBackCard(event) {
      this.is_loading = true;
      const file = event.target.files[0];
      if (file) {
        this.dataTutor.back_citizen_card = await $http.uploadImageToCloud(file);
      }
      this.is_loading = false;
    },

    async onFileChangeCertificate(event) {
      this.is_loading = true;
      const file = event.target.files[0];
      if (file) {
        this.dataTutor.certificate = await $http.uploadImageToCloud(file);
      }
      this.is_loading = false;
    },

    handleAddSubject() {
      const list_classes_choosed_value = Object.values(
        this.list_classes_choosed
      );
      const check_subject_already = this.listClassSubjectChoosed.find(
        (item) => item.subject.value === this.subject
      );
      if (!this.subject) {
        this.is_display_require_subject = true;
      } else if (isEmpty(list_classes_choosed_value)) {
        this.is_display_require_class = true;
      } else if (!isEmpty(check_subject_already)) {
        this.is_display_subject_already = true;
      } else {
        this.is_display_subject_already = false;
        this.is_display_require_class = false;
        this.is_display_require_subject = false;
        const listOptionClasses = cloneDeep(this.listOptionClasses);
        const class_choosed = listOptionClasses.filter((item) =>
          list_classes_choosed_value.includes(item.value)
        );
        let item = {
          classes: null,
          subject: null,
        };
        item.classes = class_choosed.map((item) => item.label).join(", ");
        const listOptionSubjects = cloneDeep(this.listOptionSubjects);
        item.subject = listOptionSubjects.find(
          (item) => item.value === this.subject
        );
        this.listClassSubjectChoosed = item;
        let id_subject_classes = {
          subject: this.subject,
          classes: class_choosed.map((item) => item.value),
        };
        this.dataTutor.listSubjectClasses.push(id_subject_classes);
      }
    },
    onChangeSubject(value) {
      this.subject = value;
    },
    handleRemoveClassSubjectChoosed(index) {
      this.classSubjectChoosed.splice(index, 1);
      this.dataTutor.listSubjectClasses.splice(index, 1);
    },

    async onChangeChooseCityUser(value) {
      this.is_loading = true;
      this.dataTutor.province_id = value;
      this.dataTutor.district_id = null;
      this.listOptionDistrictsUser = await $http.getDistricts(value);
      this.is_loading = false;
    },

    async onChangeChooseCity(value) {
      this.is_loading = true;
      this.city = value;

      this.listOptionDistricts = await $http.getDistricts(value);
      this.is_loading = false;
    },

    handleAddCity() {
      const list_districts_choosed_value = Object.values(
        this.list_districts_choosed
      );
      const check_city_already = this.listDistrictCityChoosed.find(
        (item) => item.city.value === this.city
      );
      if (!this.city) {
        this.is_display_require_city = true;
      } else if (isEmpty(list_districts_choosed_value)) {
        this.is_display_require_district = true;
      } else if (!isEmpty(check_city_already)) {
        this.is_display_city_already = true;
      } else {
        this.is_display_city_already = false;
        this.is_display_require_city = false;
        this.is_display_require_district = false;
        const listOptionDistricts = cloneDeep(this.listOptionDistricts);
        const districtChoosed = listOptionDistricts.filter((item) =>
          list_districts_choosed_value.includes(item.value)
        );
        let item = {
          districts: null,
          city: null,
        };
        item.districts = districtChoosed.map((item) => item.label).join(", ");
        const listOptionCities = cloneDeep(this.listOptionCities);
        item.city = listOptionCities.find((item) => item.value === this.city);
        this.listDistrictCityChoosed = item;
        let id_city_districts = {
          city: this.city,
          districts: districtChoosed.map((item) => item.value),
        };
        this.dataTutor.listCityDistricts.push(id_city_districts);
      }
      console.log(this.dataTutor.listCityDistricts);
    },

    handleRemoveCityDistrictChoosed(index) {
      this.cityDistrictChoosed.splice(index, 1);
      this.dataTutor.listCityDistricts.splice(index, 1);
    },

    async handleBecomeTutor() {
      this.is_loading = true;

      let params = cloneDeep(this.dataTutor);
      console.log(params);
      const response = await $http.post("/become-tutor", params);
      this.is_loading = false;
      const user = get(response, "data.user", null);
      if (user) {
        createToast(
          "Đã gửi yêu cầu trở thành gia sư thành công. Vui lòng đợi admin duyệt!",
          {
            type: "success",
            timeout: 6000,
          }
        );
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push({ path: "/" });
      } else {
        if (get(response, "data.status", {}) === 422) {
          this.dataErrors = get(response, "data.errors", {});
        }
      }
    },

    filterOption(input, option) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
  },

  watch: {
    subject: {
      handler(val) {
        if (val) {
          this.is_display_require_subject = false;
        } else {
          this.is_display_require_subject = true;
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.file-upload-input {
  width: 200px !important;
}

.ant-select-selector {
  height: 50px !important;
}
</style>