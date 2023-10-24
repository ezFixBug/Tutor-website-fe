import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import index from '../pages/index.vue'
import Tutors from '../pages/Tutors.vue'
import TutorDetails from '../pages/instructor/TutorDetails.vue'
import DetailsCourse from '../pages/Courses/DetailsCourse.vue'
import ListPost from '../pages/posts/ListPost.vue'
import ListCategory from '../pages/Categories/ListCategory.vue'
import PostDetail from '../pages/posts/PostDetail.vue'
import BecomeTutor from '../pages/BecomeTutor.vue'
import SettingBasic from '../pages/settings/SettingBasic.vue'
import Setting from '../pages/settings/Setting.vue'
import MyPosts from '../pages/settings/MyPosts.vue'
import CreatePost from '../pages/settings/CreatePost.vue'
import DetailPostUser from '../pages/settings/DetailPostUser.vue'
import EditPost from '../pages/settings/EditPost.vue'
import { authGuard } from '@/services/authGuard';

import Courses from '../pages/Courses/Courses.vue'
const routes = [
    {
        path: '/',
        component: index,
        children: [
            {
                path: '/',
                component: Homepage
            },
            {
                path: '/trang-chu',
                name: 'home',
                component: Homepage
            },
            {
                path: '/dang-ky',
                name: 'register',
                component: Register
            },
            {
                path: '/dang-nhap',
                name: 'login',
                component: Login
            },
            {
                path: '/gia-su',
                name: 'tutor',
                component: Tutors
            },
            {
                path: '/chi-tiet-gia-su/:id',
                name: 'detail-tutor',
                component: TutorDetails
            },
            {
                path: '/khoa-hoc',
                name: 'courses',
                component: Courses
            },
            {
                path: '/chi-tiet-khoa-hoc/:id',
                name: 'detail-course',
                component: DetailsCourse
            },
            {
                path: '/bai-viet/:type_cd?',
                name: 'posts',
                component: ListPost
            },
            {
                path: '/chi-tiet-bai-viet/:id',
                name: 'detail-post',
                component: PostDetail
            },
            {
                path: '/danh-muc',
                name: 'categories',
                component: ListCategory
            },
            {
                path: '/tro-thanh-gia-su',
                beforeEnter: (to, from, next) => {
                    authGuard(to, from, next);
                },
                name: 'becomeTutor',
                component: BecomeTutor
            },
            {
                path: '/cai-dat',
                beforeEnter: (to, from, next) => {
                    authGuard(to, from, next);
                },
                name: 'setting',
                component: Setting,
                children: [
                    {
                        path: '/cai-dat-nguoi-dung',
                        beforeEnter: (to, from, next) => {
                            authGuard(to, from, next);
                        },
                        name: 'setting-basic',
                        component: SettingBasic
                    },
                    {
                        path: '/bai-viet-cua-toi',
                        beforeEnter: (to, from, next) => {
                            authGuard(to, from, next);
                        },
                        name: 'my-posts',
                        component: MyPosts
                    },
                    {
                        path: '/tao-bai-viet',
                        beforeEnter: (to, from, next) => {
                            authGuard(to, from, next);
                        },
                        name: 'create-post',
                        component: CreatePost
                    },
                    {
                        path: '/chi-tiet-bai-viet-cua-toi/:post_id',
                        beforeEnter: (to, from, next) => {
                            authGuard(to, from, next);
                        },
                        name: 'detail-post-user',
                        component: DetailPostUser
                    },
                    {
                        path: '/chinh-sua-bai-viet/:post_id',
                        beforeEnter: (to, from, next) => {
                            authGuard(to, from, next);
                        },
                        name: 'edit-post',
                        component: EditPost
                    },
                ]
            },

        ],
    },
];
const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    linkActiveClass: 'active',
})

export default router;