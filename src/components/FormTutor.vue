<template>
  <spinner :is_loading="is_loading" />
  <form class="row">
    <div
      class="card card-item w-100"
      style="max-height: none; max-height: none !important"
    >
      <div class="card-body">
        <div class="row">
          <div class="input-box col-lg-12">
            <div
              class="media media-card align-items-center"
              style="display: block"
            >
              <div class="media-img media-img-lg mr-4 bg-gray">
                <img class="mr-3" :src="dataTutor.front_citizen_card" />
              </div>
              <div class="media-body col-lg-12 mt-2">
                <div class="file-upload-wrap file-upload-wrap-2">
                  <input
                    ref="refFileFrontCard"
                    placeholder="Hình ảnh mặt trước CCCD"
                    type="file"
                    class="file-upload-input with-preview"
                    @change="onFileChangeFrontCard"
                  />
                  <span class="file-upload-text">
                    <i class="fa-regular fa-image mr-2"></i>
                    Mặt trước CCCD
                    <span class="text-color fs-14">*</span>
                  </span>
                </div>
                <p class="fs-14">
                  Kích thước tệp tối đa là 5MB, Kích thước tối thiểu: 350x200 Và
                  các tệp phù hợp là .jpg & .png
                </p>
              </div>
            </div>
          </div>
          <div class="input-box col-lg-12">
            <div
              class="media media-card align-items-center"
              style="display: block"
            >
              <div class="media-img media-img-lg mr-4 bg-gray">
                <img class="mr-3" :src="dataTutor.back_citizen_card" />
              </div>
              <div class="media-body col-lg-12 mt-2">
                <div class="file-upload-wrap file-upload-wrap-2">
                  <input
                    ref="refFileBackCard"
                    placeholder="Hình ảnh mặt trước CCCD"
                    type="file"
                    class="file-upload-input with-preview"
                    @change="onFileChangeBackCard"
                  />
                  <span class="file-upload-text">
                    <i class="fa-regular fa-image mr-2"></i>
                    Mặt sau CCCD
                    <span class="text-color fs-14">*</span>
                  </span>
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
              <input
                type="text"
                class="form-control form--control"
                v-model="dataTutor.full_name"
                readonly
                placeholder="e.g. Alex"
              />
              <i class="fa-regular fa-user input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Email
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input
                type="text"
                class="form-control form--control"
                v-model="dataTutor.email"
                readonly
                placeholder="e.g. alexsmith@gmail.com"
              />
              <i class="fa-regular fa-envelope input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Số điện thoại
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input
                type="text"
                class="form-control form--control"
                v-model="dataTutor.phone_number"
                placeholder="vd: 0384839025"
              />
              <i class="fa-solid fa-phone input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Ngày sinh
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input
                type="date"
                class="form-control form--control"
                v-model="dataTutor.birthday"
                placeholder="vd: 0384839025"
              />
              <i class="fa-regular fa-calendar-days input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Giới tính
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <select
                v-model="dataTutor.sex"
                type="text"
                class="form-control form--control"
              >
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
              </select>
              <i class="fa-solid fa-genderless input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Chọn thành phố/Tỉnh
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <div
                  class="dropdown bootstrap-select select-container-select dropup"
                >
                  <Form>
                    <FormItem>
                      <Select
                        show-search
                        :options="listOptionCities"
                        size="large"
                        placeholder="--Chọn thành phố/tỉnh--"
                        class="w-85 mr-4"
                        @change="onChangeChooseCityUser"
                      />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Chọn thành quận/Huyện
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <div
                  class="dropdown bootstrap-select select-container-select dropup"
                >
                  <Form>
                    <FormItem>
                      <Select
                        show-search
                        :options="listOptionDistrictsUser"
                        size="large"
                        placeholder="--Chọn quận/huyện--"
                        v-model="dataTutor.district"
                        :filterOption="
                          (input, option) =>
                            option.label
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                        "
                        class="w-85 mr-4"
                      />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Địa chỉ
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input
                type="text"
                class="form-control form--control"
                v-model="dataTutor.street"
                placeholder="vd: 38 Trạng Trình - Đầ Lạt - Lâm Đồng"
              />
              <i class="fa-solid fa-location-dot input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Học vấn
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <input
                type="text"
                class="form-control form--control"
                v-model="dataTutor.education"
                placeholder="vd: Đại học"
              />
              <i class="fa-solid fa-graduation-cap input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-6">
            <label class="label-text">
              Bạn đang là
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <div
                  class="dropdown bootstrap-select select-container-select dropup"
                >
                  <Form>
                    <FormItem>
                      <Select
                        show-search
                        :options="listOptionJobs"
                        size="large"
                        placeholder="--Chọn nghề nghiệp--"
                        v-model="dataTutor.job"
                        class="w-85 mr-4"
                      />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div class="input-box col-lg-12">
            <div
              class="media media-card align-items-center"
              style="display: block"
            >
              <div class="media-img media-img-lg mr-4 bg-gray">
                <img class="mr-3" :src="dataTutor.certificate" />
              </div>
              <div class="media-body col-lg-12 mt-2">
                <div class="file-upload-wrap file-upload-wrap-2">
                  <input
                    ref="refFileCertificate"
                    placeholder="Hình ảnh bằng cấp/chứng chỉ"
                    type="file"
                    class="file-upload-input with-preview"
                    @change="onFileChangeCertificate"
                  />
                  <span class="file-upload-text">
                    <i class="fa-regular fa-image mr-2"></i>
                    Bằng cấp
                    <span class="text-color fs-14">*</span>
                  </span>
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
              <input
                type="text"
                class="form-control form--control"
                v-model="dataTutor.exp"
                placeholder="Gia sư nhiều năm kinh nghiệm"
              />
              <i class="fa-solid fa-graduation-cap input-icon"></i>
            </div>
          </div>
          <div class="input-box col-lg-12">
            <label class="label-text">
              Giới thiệu bản thân
              <span class="text-color fs-12">*</span>
            </label>
            <div class="form-group">
              <textarea
                class="form-control form--control"
                type="text"
                placeholder="Giới thiệu bản thân"
                v-model="dataTutor.description"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card card-item w-100"
      style="max-height: none; max-heigt: none !important"
    >
      <div class="card-body">
        <h3 class="fs-22 font-weight-semi-bold pb-2">
          Thêm môn dạy
          <span class="text-color fs-12">(bắt buộc)</span>
        </h3>
        <div class="divider"><span></span></div>
        <div class="row">
          <div
            class="col-lg-12 text-center"
            v-show="is_display_require_subject"
          >
            <p class="text-color fs-12">Vui lòng chọn môn dạy</p>
          </div>
          <div class="col-lg-12 text-center" v-show="is_display_require_class">
            <p class="text-color fs-12">Vui lòng chọn ít nhất 1 lớp</p>
          </div>
          <div
            class="col-lg-12 text-center"
            v-show="is_display_subject_already"
          >
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
                <div
                  class="dropdown bootstrap-select select-container-select dropup"
                >
                  <Form>
                    <FormItem>
                      <Select
                        show-search
                        :options="listOptionSubjects"
                        size="large"
                        placeholder="--Chọn môn học--"
                        class="w-85 mr-4"
                        @change="onChangeSubject"
                      />
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
                            v-model="list_classes_choosed"
                          />
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
            <button
              class="btn theme-btn"
              type="button"
              @click="handleAddSubject"
            >
              Thêm môn dạy
            </button>
          </div>
          <div class="input-box col-lg-12">
            <label class="label-text"> Danh sách môn dạy </label>
            <div class="l-teaching-topic">
              <div
                class="form-group"
                v-for="(item, index) in listClassSubjectChoosed"
                :key="index"
              >
                <input
                  class="form-control form--control teachingTopic"
                  readonly
                  :value="item.subject.label + ': ' + item.classes"
                />
                <span
                  class="la la-times search-icon delete-topic"
                  @click="handleRemoveClassSubjectChoosed(index)"
                  >X</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card card-item w-100">
      <div class="card-body">
        <h3 class="fs-22 font-weight-semi-bold pb-2">
          Nơi bạn có thể dạy
          <span class="text-color fs-12">(bắt buộc)</span>
        </h3>
        <div class="divider"><span></span></div>
        <div class="row">
          <div class="col-lg-12 text-center" v-show="is_display_require_city">
            <p class="text-color fs-12">Vui lòng chọn tỉnh(thành phố)</p>
          </div>
          <div
            class="col-lg-12 text-center"
            v-show="is_display_require_district"
          >
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
              <span class="text-color fs-12"
                >(có thể thêm nhiều nơi dạy vd:HCM, Bình Dương...)</span
              >
            </label>
            <div class="form-group">
              <div class="select-container w-auto">
                <div
                  class="dropdown bootstrap-select select-container-select dropup"
                >
                  <Form>
                    <FormItem>
                      <Select
                        show-search
                        :options="listOptionCities"
                        size="large"
                        placeholder="--Chọn thành phố/Tỉnh--"
                        class="w-85 mr-4"
                        @change="onChangeChooseCity"
                      />
                    </FormItem>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <label class="label-text"
              >Chọn quận, huyện <span class="text-color fs-14">*</span></label
            >
            <div class="form-group">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <div class="check-list row">
                      <div
                        class="col-4"
                        v-for="(item, pos) in listOptionDistricts"
                        :key="pos"
                      >
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input
                            type="checkbox"
                            class="course-level mr-1"
                            :value="item.value"
                            v-model="list_districts_choosed"
                          />
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
            <button
              class="btn theme-btn"
              type="button"
              @click="handleAddCity()"
            >
              Thêm nơi dạy
            </button>
          </div>
          <div class="input-box col-lg-12">
            <label class="label-text"> Danh sách nơi dạy </label>
            <div class="l-teaching-topic">
              <div
                class="form-group"
                v-for="(item, index) in listDistrictCityChoosed"
                :key="index"
              >
                <input
                  class="form-control form--control teachingTopic"
                  readonly
                  :value="item.city.label + ': ' + item.districts"
                />
                <span
                  class="la la-times search-icon delete-topic"
                  @click="handleRemoveCityDistrictChoosed(index)"
                  >X</span
                >
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
                <input
                  type="text"
                  class="form-control form--control money"
                  placeholder="Phí khách hàng sẽ trả cho bạn?"
                  data-val-required="The Price field is required."
                  required
                  v-model="dataTutor.price"
                />
                <i class="fa-solid fa-money-bill input-icon"></i>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <label class="label-text"
              >Chọn hình thức dạy
              <span class="text-color fs-14"
                >*(ít nhất 1 hình thức)</span
              ></label
            >
            <div class="form-group">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <div class="check-list row">
                      <div class="col-5">
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input
                            type="checkbox"
                            class="course-level"
                            :value="1"
                            v-model="dataTutor.list_type_choosed"
                          />
                          <span class="input-span">Học tại nhà</span>
                        </label>
                      </div>
                      <div class="col-5">
                        <label class="ui-checkbox ui-checkbox-primary">
                          <input
                            type="checkbox"
                            class="course-level"
                            :value="2"
                            v-model="dataTutor.list_type_choosed"
                          />
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
    <button class="btn theme-btn">
      Trở thành gia sư <i class="fa-solid fa-arrow-right icon"></i>
    </button>
  </form>
</template>
<script>
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import set from "lodash/set";
import cloneDeep from "lodash/cloneDeep";
import $http from "@/services/httpService";

export default {
  async created() {
    this.is_loading = true;
    this.listOptionCities = await $http.getProvinces();
    this.is_loading = false;
  },
  data() {
    return {
      is_loading: false,
      listOptionCities: [],
      listOptionDistrictsUser: [],
      listOptionDistricts: [],
      listOptionJobs: [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: 2 },
        { label: "Option 3", value: 3 },
      ],
      listOptionSubjects: [
        { label: "Tiếng Anh", value: 1 },
        { label: "Toán", value: 2 },
        { label: "Ngữ văn", value: 3 },
      ],
      listOptionClasses: [
        { label: "Lớp 1", value: 1 },
        { label: "Lớp 2", value: 2 },
        { label: "Lớp 3", value: 3 },
      ],
      dataTutor: {
        id: 1,
        full_name: "Le Thang",
        email: "lethang@gmail.com",
        phone_number: "12345",
        birthday: "16/12/2001",
        sex: 1,
        province: null,
        district: null,
        street: null,
        education: null,
        job: null,
        certificate: "https://smart-edu.vn/img/image.png",
        exp: null,
        description: null,
        listSubjectClasses: [],
        listCityDistricts: [],
        price: 0,
        list_type_choosed: [],
        front_citizen_card: "https://smart-edu.vn/img/image.png",
        back_citizen_card: "https://smart-edu.vn/img/image.png",
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
    };
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
  },

  methods: {
    async onFileChangeFrontCard(event) {
      this.is_loading = true;
      const file = event.target.files[0];
      this.dataTutor.front_citizen_card = await $http.uploadImageToCloud(file);
      this.is_loading = false;
    },

    async onFileChangeBackCard(event) {
      this.is_loading = true;
      const file = event.target.files[0];

      this.dataTutor.back_citizen_card = await $http.uploadImageToCloud(file);
      this.is_loading = false;
    },

    async onFileChangeCertificate(event) {
      this.is_loading = true;
      const file = event.target.files[0];

      this.dataTutor.certificate = await $http.uploadImageToCloud(file);
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
    },

    async onChangeChooseCityUser(value) {
      this.is_loading = true;
      this.dataTutor.province = value;
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
    },

    handleRemoveCityDistrictChoosed(index) {
      this.cityDistrictChoosed.splice(index, 1);
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
</style>