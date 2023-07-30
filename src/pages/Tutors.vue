<template>
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
                          :options="listOptionCourses"
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
                          :options="listOptionCourses"
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
                          :options="listOptionCourses"
                          size="large"
                          placeholder="--Chọn địa điểm--"
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
                          :options="listOptionCourses"
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
                          :options="listOptionCourses"
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
                          :options="listOptionCourses"
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
                          :options="listOptionCourses"
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
                          :options="listOptionCourses"
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
              <a class="btn theme-btn mr-2" id="search-teacher" href="/gia-su">
                Tìm kiếm <i class="fa-solid fa-arrow-right icon"></i>
              </a>
              <a class="btn theme-btn" href="/gia-su"
                ><i class="fa-solid fa-rotate-right icon"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <ListTutors :listTutors="listTutors" />
      <div class="text-center pt-3">
        <nav aria-label="Page navigation example" class="pagination-box">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a
                class="page-link"
                href="/gia-su?pageIndex=1"
                aria-label="Previous"
                ><span aria-hidden="true"
                  ><i class="fa-solid fa-arrow-left"></i></span
              ></a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/gia-su?pageIndex=1" aria-label="next"
                ><span aria-hidden="true"
                  ><i class="fa-solid fa-arrow-right"></i></span
              ></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
  <section class="cta-area pt-60px pb-60px position-relative overflow-hidden bg-gray">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-9">
          <div class="cta-content-wrap media py-4 align-items-center">
            <div class="flex-shrink-0 mr-3">
              <i class="fa-solid fa-chalkboard-user" style="font-size: 60px"></i>
            </div>
            <div class="media-body">
              <h2 class="fs-25 font-weight-bold mb-1">
                Trở thành một giáo viên, chia sẻ kiến thức của bạn
              </h2>
              <p class="fs-17">
                Tạo khóa học video trực tuyến và khóa học ngoại tuyến, tiếp cận học viên trên toàn cầu và kiếm tiền
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="cta-btn-box text-right">
            <a href="/dang-ky" class="btn theme-btn"> Đăng ký trên Smart Edu <i class="fa-solid fa-arrow-right icon"></i></a>
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
      listTutors: [
        {
          id: 1,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 2,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 3,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 4,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 5,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar:
            "https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=w240-h480-rw",
        },
        {
          id: 6,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
        {
          id: 7,
          fullname: "Tong Le Thang",
          price: 100000,
          subject: {
            id: 1,
            name: "Toán",
            classes: [
              {
                id: 1,
                name: "Lớp 1",
              },
              {
                id: 2,
                name: "Lớp 2",
              },
              {
                id: 3,
                name: "Lớp 3",
              },
            ],
          },
          address: {
            city: "Ho Chi Minh",
            district: "Quan 1",
            ward: "Vo Chi Cong",
          },
          avatar: "https://smart-edu.vn/img/avatar.png",
        },
      ],
    };
  },
};
</script>