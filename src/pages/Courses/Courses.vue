<template>
  <BreadCrumb :type="3" />
  <section class="course-area section-padding">
    <div class="container">
      <div class="filter-bar mb-4">
        <div class="filter-bar-inner d-flex flex-wrap align-items-center justify-content-between pb-4">
          <p class="fs-14">Chúng tôi đã tìm thấy <span class="text-black">504</span> khóa học có sẵn cho bạn</p>
          <div class="d-flex flex-wrap align-items-center">
            <a class="btn theme-btn theme-btn-sm theme-btn-white lh-28 collapse-btn collapsed" data-toggle="collapse"
              href="#collapseFilter" role="button" aria-expanded="false" aria-controls="collapseFilter">
              Lọc
              <i class="fa-solid fa-chevron-down ml-1 collapse-btn-hide"></i>
              <i class="fa-solid fa-chevron-up ml-1 collapse-btn-show"></i>
            </a>
          </div>
        </div>
        <div class="collapse" id="collapseFilter" style="">
          <Form class="row" :model="FormFilterCourse" @finish="handleSubmitFormFilterCource">
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div class="dropdown bootstrap-select select-container-select">
                    <Select show-search v-model:value="FormFilterCourse.category" :options="categories" size="large" :filter-option="filterOption" allow-clear
                      placeholder="Chọn Khóa Học" />
                  </div>
                </div>
              </div>
            </FormItem>
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div class="dropdown bootstrap-select select-container-select">
                    <Select show-search v-model:value="FormFilterCourse.level" :options="levels" size="large" :filter-option="filterOption" allow-clear
                      placeholder="Chọn Level" />
                  </div>
                </div>
              </div>
            </FormItem>
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div class="dropdown bootstrap-select select-container-select">
                    <Select 
                      show-search 
                      v-model:value="FormFilterCourse.city" 
                      :options="cities" 
                      size="large"
                      placeholder="Chọn Tỉnh/Thành Phố" 
                      :filter-option="filterOption"
                      allow-clear
                    />
                  </div>
                </div>
              </div>
            </FormItem>
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div class="dropdown bootstrap-select select-container-select">
                    <Select show-search v-model:value="FormFilterCourse.type" :options="types" size="large" :filter-option="filterOption" allow-clear
                      placeholder="Chọn Hình Thức" />
                  </div>
                </div>
              </div>
            </FormItem>
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div class="dropdown bootstrap-select select-container-select">
                    <Select show-search v-model:value="FormFilterCourse.paymentMethod" :options="paymentMethods" size="large" :filter-option="filterOption" allow-clear
                      placeholder="Chọn Loại Khoá Học" />
                  </div>
                </div>
              </div>
            </FormItem>
            <FormItem class="input-box col-lg-3">
              <div class="form-group">
                <div class="select-container w-auto">
                  <div class="dropdown bootstrap-select select-container-select">
                    <Select show-search v-model:value="FormFilterCourse.rate" :options="rates" size="large" :filter-option="filterOption" allow-clear
                      placeholder="Chọn Đánh Giá" />
                  </div>
                </div>
              </div>
            </FormItem>
            <div class="d-flex justify-content-end col-lg-12">
              <Button type="primary" danger html-type="submit">
                <span class="mr-1"> Tìm Kiếm</span>
                <i class="fa-solid fa-arrow-right"></i>
              </Button>
              <Button type="primary" danger html-type="button" @click="resetForm" class="ml-2">
                <i class="fa-solid fa-arrows-rotate"></i>
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4" v-for="course in courses" :key="course.id">
          <Card hoverable class="mb-4">
            <template #cover>
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </template>
            <div class="course-categories">
              <h6 class="ribbon ribbon-blue-bg fs-14 mb-3 mr-2" v-for="category in course.category" :key="category.id">{{ category.name }}</h6>
            </div>
            <h4>{{ course.name }}</h4>
            <p>
              <router-link :to="{}" class="text-secondary">{{ course.instructor }}</router-link>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <p>{{ course.price }}</p>
              <div class="icon-element icon-element-sm shadow-sm cursor-pointer btn-add-wish">
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { reactive } from 'vue';
import { Form } from 'ant-design-vue';
const useForm = Form.useForm;

export default {
  components: {
  },

  setup() {
    const FormFilterCourse = reactive({
      category: null,
      level: null,
      city: null,
      district: null,
      type: null,
      rate: null,
      paymentMethod: null
    });
    
    const { resetFields } = useForm(FormFilterCourse);

    const filterOption = (input, option) => {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };

    const resetForm = () => {
      resetFields();
    };
    const categories = [
      { label: "category 1", value: "1" },
      { label: "category 2", value: "2" },
    ];
    const levels = [
      { label: "Các Lớp Khác", value: "1" },
      { label: "Ôn thi trường chuyên", value: "2" },
      { label: "Dạy Song Ngữ", value: "3" },
    ];
    const cities = [
      { label: "Đà Nẵng", value: "1" },
      { label: "Hà Nội", value: "2" },
      { label: "Hồ Chí Minh", value: "3" },
    ];
    const types = [
      { label: "Học Tại Nhà", value: "1" },
      { label: "Học Online", value: "2" },
      { label: "Học Online Qua Video", value: "2" },
    ];
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
    ]

    const formattedPrice = (price) => {
      const priceFormat = price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
      return priceFormat.replace(priceFormat.slice(-1), "VND")
    }

    const courses = [];

    for (let i = 1; i <= 10; i++) {
    const courseData = {
      id: i,
      image: "",
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

    return {
      FormFilterCourse,
      filterOption,
      resetForm,
      categories,
      levels,
      cities,
      types,
      rates,
      paymentMethods,
      courses,
    }
  },

  data() {
    return {
      isOpenFilter: false,
      
    }
  },
  created() {
    console.log(this.courses);
  },
  methods: {
    handleSubmitFormFilterCource() {
      console.log(this.FormFilterCourse)
    },
  }
}
</script>
<style>
    @import "./_style.scss";
</style>