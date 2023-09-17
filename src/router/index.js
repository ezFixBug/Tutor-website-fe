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
import { authGuard } from './auth';

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
                path: '/bai-viet',
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
                // beforeEnter: (to, from, next) => {
                //     authGuard(to, from, next);
                // },
                name: 'becomeTutor',
                component: BecomeTutor
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
})

export default router;