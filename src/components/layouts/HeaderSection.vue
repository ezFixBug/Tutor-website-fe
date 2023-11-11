<template>
  <header class="header-menu-area" :class="{ fixed_header: scrollY > 125 }">
    <div class="header-menu-content bg-white">
      <div class="container">
        <div class="main-menu-content">
          <div class="row align-items-center">
            <div class="col-lg-2">
              <div class="logo-box">
                <a href="/" class="logo">
                  <img
                    class="img-fluid"
                    src="https://smart-edu.vn/images/logo_7.png"
                    alt="Logo"
                  />
                </a>
                <div class="user-btn-action">
                  <div
                    class="off-canvas-menu-toggle main-menu-toggle shadow-sm"
                    data-toggle="tooltip"
                    data-placement="top"
                    title
                    data-original-title="Main menu"
                    @click="is_active = !is_active"
                  >
                    <i class="fa-solid fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-10">
              <div class="menu-wrapper">
                <nav class="main-menu">
                  <ul>
                    <li>
                      <router-link :to="{ path: '/' }">Trang chủ</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'courses' }"
                        >Khoá Học</router-link
                      >
                    </li>
                    <li>
                      <a href="#">
                        Dành cho gia sư <i class="fa-solid fa-chevron-down"></i>
                      </a>
                      <ul class="dropdown-menu-item">
                        <li v-show="userStatusCd !== 2">
                          <router-link :to="{ name: 'becomeTutor' }"
                            >Trở thành gia sư</router-link
                          >
                        </li>
                        <li>
                          <router-link :to="{ name: 'requests' }"
                            >Lớp học cần gia sư</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Dành cho học viên
                        <i class="fa-solid fa-chevron-down"></i>
                      </a>
                      <ul class="dropdown-menu-item">
                        <li>
                          <a href="#team-section">Tìm gia sư</a>
                        </li>
                        <li>
                          <router-link :to="{ name: 'tutor' }"
                            >Gia sư hiện có</router-link
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link :to="{ path: '/bai-viet' }"
                        >Bài viết <i class="fa-solid fa-chevron-down"></i
                      ></router-link>
                      <ul class="dropdown-menu-item">
                        <li>
                          <router-link
                            :to="{ name: 'posts', params: { type_cd: 1 } }"
                            >Tin tức - sự kiện</router-link
                          >
                        </li>
                        <li>
                          <router-link
                            :to="{ name: 'posts', params: { type_cd: 2 } }"
                            >Kiến thức - thủ thuật</router-link
                          >
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div
                  class="nav-right-button border-left border-left-gray pl-4 mr-3"
                  v-if="!user"
                >
                  <ul class="generic-list-item">
                    <li>
                      <router-link class="btn-login" :to="{ name: 'login' }"
                        >Đăng nhập</router-link
                      >
                    </li>
                    <li>Or</li>
                    <li>
                      <router-link
                        class="btn theme-btn theme-btn-sm text-white"
                        :to="{ name: 'register' }"
                        ><i class="fa-solid fa-user-pen"></i>Đăng
                        ký</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div v-else class="nav-right-button d-flex align-items-center">
                  <div class="user-action-wrap d-flex align-items-center">
                    <div
                      class="shop-cart wishlist-cart pr-3 mr-3 border-right border-right-gray"
                    >
                      <ul>
                        <li>
                          <router-link
                            :to="{ name: 'my-likes' }"
                            class="shop-cart-btn d-flex align-items-center"
                            ><i class="fa-regular fa-heart"></i
                            ><span class="noty-number">{{
                              likes_count
                            }}</span></router-link
                          >
                        </li>
                      </ul>
                    </div>
                    <div
                      class="shop-cart notification-cart pr-3 mr-3 border-right border-right-gray"
                      v-if="user"
                    >
                      <ul>
                        <li>
                          <p class="shop-cart-btn">
                            <span
                              class="dot-status bg-1"
                              v-if="isHaveNewNotify"
                            ></span>
                            <i class="fa-regular fa-bell"></i>
                          </p>
                          <ul
                            class="cart-dropdown-menu after-none p-0 notification-dropdown-menu scrolled-box custom-scrollbar-styled"
                          >
                            <li
                              class="menu-heading-block d-flex align-items-center justify-content-between"
                            >
                              <h4>Thông báo</h4>
                              <span class="ribbon fs-14">{{
                                listNotifications.length
                              }}</span>
                            </li>
                            <li>
                              <div class="notification-body">
                                <div
                                  v-for="(noti, index) in listNotifications"
                                  :key="index"
                                >
                                  <router-link
                                    :to="noti.url"
                                    class="media media-card align-items-center"
                                    style="background-color: #fff"
                                    :class="{ is_read: noti.is_read }"
                                    @click="handleRead(noti)"
                                  >
                                    <div
                                      class="icon-element icon-element-sm flex-shrink-0 bg-3 mr-3 text-white"
                                    >
                                      <i
                                        class="fa-solid fa-heart"
                                        v-if="noti.type_cd === 1"
                                      ></i>
                                      <i
                                        class="fa-solid fa-comment"
                                        v-if="noti.type_cd === 2"
                                      ></i>
                                    </div>
                                    <div class="media-body">
                                      <h5>
                                        {{ noti.content }}
                                      </h5>
                                      <span
                                        class="d-block lh-18 pt-1 text-gray fs-13"
                                        >{{ noti.created_at }}</span
                                      >
                                    </div>
                                  </router-link>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <ul
                          class="cart-dropdown-menu after-none p-0 notification-dropdown-menu scrolled-box custom-scrollbar-styled"
                        >
                          <li
                            class="menu-heading-block d-flex align-items-center justify-content-between"
                          >
                            <h4>Thông báo</h4>
                            <span class="ribbon fs-14"> 0 </span>
                          </li>
                          <li>
                            <!-- To do display list notification -->
                            <div class="notification-body"></div>
                          </li>
                          <li class="menu-heading-block">
                            <router-link
                              class="btn theme-btn w-100"
                              :to="{ path: '/' }"
                            >
                              Tất cả thông báo
                              <i class="fa-solid fa-arrow-right icon ml-1"></i>
                            </router-link>
                          </li>
                        </ul>
                      </ul>
                    </div>
                    <div
                      class="shop-cart user-profile-cart pr-3 mr-3"
                      v-if="user"
                    >
                      <ul>
                        <li>
                          <div class="shop-cart-btn">
                            <div class="avatar-xs">
                              <img
                                :src="user ? user.avatar : null"
                                class="rounded-full img-fluid"
                                alt=""
                              />
                            </div>
                            <span class="dot-status bg-1"></span>
                          </div>
                          <ul
                            class="cart-dropdown-menu after-none p-0 notification-dropdown-menu scrolled-box custom-scrollbar-styled"
                            style="z-index: 9999"
                          >
                            <li
                              class="menu-heading-block d-flex align-items-center"
                            >
                              <router-link
                                :to="{ path: '/' }"
                                class="avatar-sm flex-shrink-0 d-block"
                              >
                                <img
                                  class="rounded-full img-fluid"
                                  :src="user.avatar"
                                  alt="Avatar image"
                                />
                              </router-link>
                              <div class="ml-2">
                                <h4>
                                  <router-link
                                    :to="{ path: '/' }"
                                    class="text-black"
                                  >
                                    {{ user.first_name + " " + user.last_name }}
                                  </router-link>
                                </h4>
                                <span class="d-block fs-14 lh-20">
                                  {{ user.email }}
                                </span>
                              </div>
                            </li>
                            <li>
                              <ul class="generic-list-item">
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i class="fa-solid fa-user-pen mr-1"></i>
                                    Thông tin người dùng</router-link
                                  >
                                </li>
                                <li><div class="section-block"></div></li>
                                <li v-if="userStatusCd === 2">
                                  <router-link :to="{ name: 'my-courses' }">
                                    <i
                                      class="fa-solid fa-file-circle-plus mr-1"
                                    ></i>
                                    Khóa học của tôi</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-square-check mr-1"
                                    ></i>
                                    Khóa học đã đăng ký</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'my-requests' }">
                                    <i class="fa-solid fa-user-plus mr-1"></i>
                                    Yêu cầu gia sư</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'my-posts' }">
                                    <i
                                      class="fa-solid fa-book-open-reader mr-1"
                                    ></i>
                                    Bài viết của tôi</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-money-bill-transfer mr-1"
                                    ></i>
                                    Thanh toán &amp; nhận lớp</router-link
                                  >
                                </li>

                                <li><div class="section-block"></div></li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-person-circle-plus mr-1"
                                    ></i>
                                    Thanh toán &amp; yêu cầu gia sư</router-link
                                  >
                                </li>
                                <li>
                                  <router-link :to="{ name: 'setting-basic' }">
                                    <i
                                      class="fa-solid fa-clock-rotate-left mr-1"
                                    ></i>
                                    Lịch sử giao dịch</router-link
                                  >
                                </li>

                                <li><div class="section-block"></div></li>

                                <li><div class="section-block"></div></li>
                                <li>
                                  <a @click="handleLogout">
                                    <i
                                      class="fa-solid fa-right-from-bracket mr-1"
                                    ></i>
                                    Đăng xuất
                                  </a>
                                </li>
                                <li><div class="section-block"></div></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="off-canvas-menu custom-scrollbar-styled main-off-canvas-menu"
      :class="{ active: is_active }"
    >
      <div
        class="off-canvas-menu-close main-menu-close icon-element icon-element-sm shadow-sm"
        data-toggle="tooltip"
        data-placement="left"
        data-original-title="Close menu"
        title
        @click="is_active = false"
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
      <ul class="generic-list-item off-canvas-menu-list pt-90px">
        <li>
          <router-link :to="{ path: '/' }" @click="is_active = false"
            >Trang chủ</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'courses' }" @click="is_active = false"
            >Khoá Học</router-link
          >
        </li>
        <li>
          <a
            href="#"
            class="open-menu collapsed"
            data-toggle="collapse"
            data-target="#tutor"
          >
            Dành cho gia sư
            <button class="sub-nav-toggler" type="button">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </a>
          <ul class="collapse" id="tutor">
            <li v-show="userStatusCd !== 2">
              <router-link
                @click="is_active = false"
                :to="{ name: 'becomeTutor' }"
                >Trở thành gia sư</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'requests' }" @click="is_active = false"
                >Lớp học cần gia sư</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            class="open-menu collapsed"
            data-toggle="collapse"
            data-target="#student"
          >
            Dành cho học viên
            <button class="sub-nav-toggler" type="button">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </a>
          <ul class="collapse" id="student">
            <li>
              <a href="#team-section" @click="is_active = false">Tìm gia sư</a>
            </li>
            <li>
              <router-link @click="is_active = false" :to="{ name: 'tutor' }"
                >Gia sư hiện có</router-link
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            class="open-menu collapsed"
            data-toggle="collapse"
            data-target="#post"
            >Bài viết
            <button class="sub-nav-toggler" type="button">
              <i class="fa-solid fa-chevron-down"></i></button
          ></a>

          <ul class="collapse" id="post">
            <li>
              <router-link
                @click="is_active = false"
                :to="{ name: 'posts', params: { type_cd: 1 } }"
                >Tin tức - sự kiện</router-link
              >
            </li>
            <li>
              <router-link
                @click="is_active = false"
                :to="{ name: 'posts', params: { type_cd: 2 } }"
                >Kiến thức - thủ thuật</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
      <h4 class="off-canvas-menu-heading pt-20px" v-if="hasLogin">
        Menu người dùng
      </h4>
      <ul
        class="generic-list-item off-canvas-menu-list pt-1 pb-2 border-bottom border-bottom-gray"
        v-if="hasLogin"
      >
        <li>
          <router-link :to="{ name: 'setting-basic' }">
            Thông tin người dùng</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'my-courses' }">
            Khóa học của tôi</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'setting-basic' }">
            Khóa học đã đăng ký</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'my-requests' }">
            Yêu cầu gia sư <span class="product-count">0</span></router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'my-posts' }">
            Bài viết của tôi</router-link
          >
        </li>
        <li>
          <a href="#" class="open-menu"
            >Giao dịch<button class="sub-nav-toggler" type="button">
              <i class="fa-solid fa-chevron-down"></i></button
          ></a>
          <ul class="sub-menu" style="display: none">
            <li>
              <a href="/hoc-vien-yeu-cau-gia-su"
                >Thanh toán yêu cầu gia sư
                <span class="product-count">0</span></a
              >
            </li>
            <li>
              <a href="/hoc-vien-dang-ky-khoa-hoc"
                >Thanh toán &amp; nhận lớp
                <span class="product-count">0</span></a
              >
            </li>
            <li><a href="/thong-ke">Lịch sử giao dịch</a></li>
          </ul>
        </li>
        <li>
          <a a href="#" @click="handleLogout">Đăng xuất</a>
        </li>
      </ul>
      <div class="btn-box px-4 pt-5 text-center" v-else>
        <router-link
          class="btn theme-btn theme-btn-sm theme-btn-transparent"
          @click="is_active = false"
          :to="{ name: 'login' }"
        >
          <i class="fa-solid fa-arrow-right-to-bracket mr-1"></i>Đăng
          nhập</router-link
        >
        <span class="fs-15 font-weight-medium d-inline-block mx-2"> Or </span>
        <router-link
          @click="is_active = false"
          class="btn theme-btn theme-btn-sm shadow-none"
          :to="{ name: 'register' }"
          ><i class="fa-solid fa-user-pen"></i>Đăng ký</router-link
        >
      </div>
    </div>
    <div
      class="body-overlay"
      :class="{ active: is_active }"
      @click="is_active = false"
    ></div>
  </header>
</template>
<script >
import $auth from "@/services/authService";
import get from "lodash/get";
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
      scrollY: 0,
      is_active: false,
      likes_count: 0,
      notifications: [],
    };
  },

  mounted() {
    window.addEventListener("localstorage-changed", (event) => {
      const user = JSON.parse(event.detail.storage);
      if (user) {
        this.likes_count = user.likes_count;
      } else if (this.user) {
        this.likes_count = this.user.likes_count;
      }
    });

    this.getDataNotification();
  },
  computed: {
    hasLogin() {
      return $auth.hasValue;
    },

    user() {
      return $auth.getUser;
    },

    userStatusCd() {
      if (this.user) {
        return this.user.status_cd;
      }
    },

    listNotifications() {
      const list = [];
      this.notifications.forEach((item) => {
        if (item[1].user_id === this.user.id) {
          item[1].id = item[0];
          list.push(item[1]);
        }
      });

      list.sort((item1, item2) => {
        const date1 = new Date(item1.created_at);
        const date2 = new Date(item2.created_at);

        return date2 - date1;
      });

      return list;
    },

    isHaveNewNotify() {
      return this.listNotifications.find((item) => {
        return item.is_read === false;
      });
    },
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },

    handleLogout() {
      $auth.logout();
      window.location.href = "/";
    },

    handleStorageChange(event) {
      console.log(1);
    },

    getDataNotification() {
      onValue(ref(database, "notifications"), (snapshot) => {
        if (snapshot.exists()) {
          this.notifications = Object.keys(snapshot.val()).map((key) => [
            key,
            snapshot.val()[key],
          ]);
        }
      });
    },

    handleRead(noti) {
      const notify = { ...noti };
      notify.is_read = true;
      set(ref(database, "notifications/" + noti.id), {
        ...notify,
      });

      this.$router.push(notify.url);
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/paritials/_mixins.scss";
@import "../../assets/styles/paritials/_variables.scss";
@import "../../assets/styles/paritials/_button.scss";
@import "../../assets/styles/paritials/_custom.scss";
@import "../../assets/styles/paritials/_common.scss";
@import "../../assets/styles/paritials/_menu.scss";
.avatar-xs .img-fluid {
  width: 32px !important;
  height: 32px !important;
}
.avatar-sm .img-fluid {
  width: 48px !important;
  height: 48px !important;
}
.noty-number {
  position: absolute;
  bottom: 10px;
  right: -12px;
  font-size: 14px;
  width: 17px;
  height: 17px;
  padding-bottom: 16px;
  color: red;
  font-weight: 500;
}

a.active.router-link-exact-active {
  color: red !important;
}

.is_read {
  background-color: rgb(224, 224, 224) !important;
}
</style>