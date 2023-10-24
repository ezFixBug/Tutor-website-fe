<template>
  <spinner :is_loading="is_loading" />

  <div b-euuw8q6dcd="" class="container-fluid">
    <div
      b-euuw8q6dcd=""
      class="breadcrumb-content d-flex flex-wrap align-items-center justify-content-between mb-5"
    >
      <div b-euuw8q6dcd="" class="media media-card align-items-center">
        <div class="media-img media--img media-img-md rounded-full">
          <img
            class="rounded-full"
            :src="user.avatar ?? DEFAULT_IMAGE"
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
      <h3 class="fs-22 font-weight-semi-bold">Chỉnh sửa bài viết</h3>
    </div>
    <form
      enctype="multipart/form-data"
      method="post"
      class="row"
      action="/tao-bai-viet-cua-toi"
    >
      <div class="card card-item" style="max-height: none">
        <div class="card-body">
          <h3 class="fs-22 font-weight-semi-bold pb-2">Thông tin</h3>
          <div class="divider"><span></span></div>
          <div
            v-for="(error, index) in errors.image"
            :key="index"
            class="text-danger validation-summary-errors fs-14"
          >
            {{ error }}
          </div>
          <div class="row">
            <div class="col-lg-12 mb-4">
              <div class="media media-card align-items-center">
                <div class="media-img media-img-lg mr-4 bg-gray">
                  <img
                    class="mr-3"
                    id="output"
                    :src="post.image ?? DEFAULT_IMAGE"
                    alt="course image"
                  />
                </div>
                <div class="media-body">
                  <div class="file-upload-wrap file-upload-wrap-2">
                    <input
                      class="file-upload-input with-preview"
                      type="file"
                      placeholder="Hình ảnh bài viết"
                      @change="onChangeUploadImage"
                      data-val="true"
                      data-val-required="The ThumbnailPicture field is required."
                      id="ThumbnailPicture"
                      name="ThumbnailPicture"
                    />
                    <span class="file-upload-text"
                      ><i class="la la-photo mr-2"></i>Tải hình ảnh<span
                        class="text-color fs-14"
                        >*</span
                      ></span
                    >
                  </div>
                  <!-- file-upload-wrap -->
                  <p class="fs-14">
                    Kích thước tệp tối đa là 5MB, Kích thước tối thiểu: 200x200
                    Và các tệp phù hợp là .jpg &amp; .png
                  </p>
                </div>
              </div>
              <!-- end media -->
            </div>
            <!-- end col-lg-12 -->
            <hr />
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-text">Chọn thể loại bài viết</label>
                <div
                  v-for="(error, index) in errors.type_cd"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <select
                  class="form-control form--control pl-3"
                  type="text"
                  data-val="true"
                  data-val-required="The PostType field is required."
                  id="PostType"
                  name="PostType"
                  v-model="post.type_cd"
                >
                  <option value="1">Tin tức - sự kiện</option>
                  <option value="2">Kiến thức - Thủ thuật</option>
                </select>
              </div>
            </div>
            <!-- end col-lg-12 -->
            <div class="col-lg-6">
              <div class="form-group">
                <label class="label-text"
                  >Tiêu dề<span class="text-color fs-14">*</span></label
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
                  required
                  type="text"
                  placeholder="e.g. Learn JavaScript for Beginners "
                  data-val="true"
                  data-val-required="The Title field is required."
                  id="Title"
                  name="Title"
                  v-model="post.title"
                />
              </div>
            </div>
            <!-- end col-lg-12 -->
            <div class="col-lg-12">
              <div class="form-group">
                <label class="label-text">Mô tả ngắn</label>
                <div
                  v-for="(error, index) in errors.description"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <textarea
                  class="form-control form--control pl-3"
                  rows="5"
                  type="text"
                  placeholder="Giới thiệu bài viết..."
                  id="SeoMetaDescription"
                  name="SeoMetaDescription"
                  v-model="post.description"
                ></textarea>
              </div>
            </div>
            <!-- end col-lg-12 -->
            <div class="col-lg-12">
              <div class="form-group">
                <label class="label-text"
                  >Nội dung bài viết<span class="text-color fs-14"
                    >*</span
                  ></label
                >
                <div
                  v-for="(error, index) in errors.content"
                  :key="index"
                  class="text-danger validation-summary-errors fs-14"
                >
                  {{ error }}
                </div>
                <div>
                  <ckeditor
                    :editor="editor"
                    v-model="post.content"
                    :config="editorConfig"
                  ></ckeditor>
                </div>
              </div>
            </div>
            <!-- end col-lg-12 -->
          </div>
        </div>
        <!-- end card-body -->
      </div>
      <!-- end card -->

      <div
        class="card card-item"
        style="width: 100%; max-height: none"
        id="PostTag"
      >
        <div class="card-body">
          <h3 class="fs-22 font-weight-semi-bold pb-2">Gán thẻ tắt</h3>
          <div
            v-for="(error, index) in errors.tags"
            :key="index"
            class="text-danger validation-summary-errors fs-14"
          >
            {{ error }}
          </div>
          <div class="divider"><span></span></div>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <div class="check-list row">
                  <div class="col-6">
                    <label class="ui-checkbox ui-checkbox-primary">
                      <input
                        type="checkbox"
                        data-val="true"
                        data-val-required="The Selected field is required."
                        id="PostTags_SelectItems_0__Selected"
                        name="PostTags.SelectItems[0].Selected"
                        value="1"
                        v-model="post.tags"
                      />
                      <span class="input-span ml-1"></span>Công nghệ
                    </label>
                  </div>
                  <div class="col-6">
                    <label class="ui-checkbox ui-checkbox-primary">
                      <input
                        type="checkbox"
                        data-val="true"
                        data-val-required="The Selected field is required."
                        id="PostTags_SelectItems_1__Selected"
                        name="PostTags.SelectItems[1].Selected"
                        value="2"
                        v-model="post.tags"
                      />
                      <span class="input-span ml-1"></span>Luyện thi
                    </label>
                  </div>
                  <div class="col-6">
                    <label class="ui-checkbox ui-checkbox-primary">
                      <input
                        type="checkbox"
                        data-val="true"
                        data-val-required="The Selected field is required."
                        id="PostTags_SelectItems_2__Selected"
                        name="PostTags.SelectItems[2].Selected"
                        value="3"
                        v-model="post.tags"
                      />
                      <span class="input-span ml-1"></span>Mẹo
                    </label>
                  </div>
                  <div class="col-6">
                    <label class="ui-checkbox ui-checkbox-primary">
                      <input
                        type="checkbox"
                        data-val="true"
                        data-val-required="The Selected field is required."
                        id="PostTags_SelectItems_3__Selected"
                        name="PostTags.SelectItems[3].Selected"
                        value="4"
                        v-model="post.tags"
                      />
                      <span class="input-span ml-1"></span>Nâng cao
                    </label>
                  </div>
                  <div class="col-6">
                    <label class="ui-checkbox ui-checkbox-primary">
                      <input
                        type="checkbox"
                        data-val="true"
                        data-val-required="The Selected field is required."
                        id="PostTags_SelectItems_4__Selected"
                        value="5"
                        v-model="post.tags"
                      />
                      <span class="input-span ml-1"></span>Cơ bản
                    </label>
                  </div>
                  <div class="col-6">
                    <label class="ui-checkbox ui-checkbox-primary">
                      <input
                        type="checkbox"
                        data-val="true"
                        data-val-required="The Selected field is required."
                        id="PostTags_SelectItems_5__Selected"
                        name="PostTags.SelectItems[5].Selected"
                        value="6"
                        v-model="post.tags"
                      />
                      <span class="input-span ml-1"></span>Vỡ lòng
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

      <div class="course-submit-btn-box pb-4">
        <router-link
          class="btn btn-outline-secondary"
          :to="{ name: 'my-posts' }"
          >Trở về</router-link
        >
        <button class="btn theme-btn" type="button" @click="onEditPost">
          Chỉnh sửa bài viết
        </button>
      </div>
    </form>
    <!-- end row -->
  </div>
</template>
<script>
import Sidebar from "../../components/layouts/Sidebar.vue";
import $auth from "@/services/authService";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import $http from "@/services/httpService";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import { createToast } from "mosha-vue-toastify";

export default {
  components: {
    Sidebar,
  },

  async created() {
    this.is_loading = true;
    const post_id = this.$route.params.post_id;

    const res = await $http.get("/post/" + post_id);
    if (get(res, "data.result", false)) {
      this.post = res.data.post;
      this.user = get(this.post, "user", {});
    }
    this.is_loading = false;
  },

  data() {
    return {
      is_loading: false,
      post: {},
      errors: {},
      DEFAULT_IMAGE: "https://hryoutest.in.ua/uploads/images/default.jpg",

      editor: ClassicEditor,
      editorConfig: {
        placeholder: "Nội dung bài viết...",
      },
    };
  },

  computed: {
    user() {
      return $auth.getUser;
    },
  },

  methods: {
    async onChangeUploadImage(event) {
      this.is_loading = true;
      const file = event.target.files[0];

      if (file) {
        this.post.image = await $http.uploadImageToCloud(file);
      }
      this.is_loading = false;
    },

    async onEditPost() {
      this.is_loading = true;
      let params = cloneDeep(this.post);
      const res = await $http.post("/post/edit/" + this.post.id, params);
      this.is_loading = false;
      if (get(res, "data.result", false)) {
        createToast("Chỉnh sửa bài viết thành công!", {
          type: "success",
          timeout: 6000,
        });
        this.$router.push({ name: "my-posts" });
      } else if (get(res, "data.status", false) === 422) {
        this.errors = res.data.errors;
      }
    },
  },
};
</script>
