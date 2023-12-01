<template>
  <spinner :is_loading="is_loading" />

  <div class="container-fluid">
    <div class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5">
      <div class="media media-card align-items-center">
        <div class="media-img media--img media-img-md rounded-full">
          <img :src="dataUser.avatar" alt="Avatar" class="rounded-full" />
        </div>
        <div class="media-body">
          <h2 class="section__title fs-30">
            {{ dataUser.full_name }}
          </h2>
        </div>
      </div>
    </div>
    <div class="section-block mb-5"></div>
    <div class="dashboard-heading mb-5">
      <h3 class="fs-22 font-weight-semi-bold">Thông tin cá nhân</h3>
    </div>
    <div class="nav generic-tab d-flex flex-column">
      <ul class="nav mb-30px">
        <li class="nav-item" @click="tab = 0">
          <span class="nav-link" :class="{ active: tab === 0 }"> Avatar </span>
        </li>
        <li class="nav-item" @click="tab = 1">
          <span class="nav-link" :class="{ active: tab === 1 }">
            Hồ sơ gia sư
          </span>
        </li>
        <li class="nav-item" @click="tab = 2">
          <span class="nav-link" :class="{ active: tab === 2 }">
            Mật khẩu
          </span>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade" :class="{ show: tab === 0, active: tab === 0 }">
          <div class="setting-body">
            <h3 class="fs-17 font-weight-semi-bold pb-4">
              Cập nhật Avatar
            </h3>
            <div>
              <form class="row pt-40px">
                <div class="media media-card align-items-center col-sm-12">
                  <div class="media-img media-img-lg mr-4 bg-gray">
                    <img class="mr-3" :src="dataUser.avatar" alt="Avatar" />
                  </div>
                  <div class="media-body col-sm-12">
                    <div class="file-upload-wrap file-upload-wrap-2 mb-1">
                      <input class="file-upload-input with-preview" type="file" placeholder="Hình ảnh khóa học"
                        data-val-required="The AvatarUp field is required." @change="onFileChangeAvatar" />
                      <span class="file-upload-text">
                        <i class="fa-solid fa-image mr-2"></i>
                        Tải hình ảnh
                      </span>
                    </div>
                    <p class="fs-14">
                      Kích thước tệp tối đa là 5MB, Kích thước tối thiểu:
                      200x200 Và các tệp phù hợp là .jpg & .png
                    </p>
                  </div>
                </div>
                <div class="input-box col-lg-12 py-2">
                  <button type="button" class="btn theme-btn" @click="handleChangeAvatar">
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" :class="{ show: tab === 1, active: tab === 1 }">
          <div class="setting-body">
            <h3 class="fs-17 font-weight-semi-bold pb-4">Cập nhật hồ sơ</h3>
            <p class="fs-14 text-color-3 mb-2">
              Hoàn thành thông tin để trở thành gia sư!
            </p>
            <FormTutor />
          </div>
        </div>
        <div class="tab-pane fade" :class="{ show: tab === 2, active: tab === 2 }">
          <div class="setting-body">
            <h3 class="fs-17 font-weight-semi-bold pb-4">Đổi mật khẩu</h3>
            <form class="row">
              <div class="input-box col-lg-4">
                <label class="label-text"> Mật khẩu cũ </label>
                <div class="form-group">
                  <input type="password" required placeholder="Old Password"
                    data-val-required="The OldPassword field is required." class="form-control form--control"
                    v-model="dataPassword.oldPassword" />
                  <i class="fa-solid fa-lock input-icon"></i>
                </div>
              </div>
              <div class="input-box col-lg-4">
                <label class="label-text"> Mật khẩu mới </label>
                <div class="form-group">
                  <input type="password" required placeholder="Old Password"
                    data-val-required="The OldPassword field is required." class="form-control form--control"
                    v-model="dataPassword.newPassword" />
                  <i class="fa-solid fa-lock input-icon"></i>
                </div>
              </div>
              <div class="input-box col-lg-4">
                <label class="label-text"> Xác nhận mật khẩu</label>
                <div class="form-group">
                  <input type="password" required placeholder="Old Password"
                    data-val-required="The OldPassword field is required." class="form-control form--control"
                    v-model="dataPassword.cfmPassword" />
                  <i class="fa-solid fa-lock input-icon"></i>
                </div>
              </div>
              <div class="input-box col-lg-12 py-2">
                <button type="button" class="btn theme-btn">Xác nhận</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import FormTutor from "@/components/FormTutor.vue";
export default {
  components: {
    FormTutor,
  },
  data() {
    return {
      dataUser: JSON.parse(localStorage.getItem('user')),
      dataPassword: {
        oldPassword: null,
        newPassword: null,
        cfmPassword: null,
      },
      tab: 0,
      is_loading: false,
    };
  },
  created() {
  },
  methods: {
    async onFileChangeAvatar(event) {
      this.is_loading = true;
      const file = event.target.files[0];

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "website_tutor");
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/" +
          process.env.VUE_APP_CLOUDINARY_NAME +
          "/image/upload",
          formData
        );

        this.dataUser.avatar = response.data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
      this.is_loading = false;
    },
    handleChangeAvatar() {
      //To do handle change avatar
    },
  },
};
</script>
<style lang="scss">
@import "./_style.scss";
</style>