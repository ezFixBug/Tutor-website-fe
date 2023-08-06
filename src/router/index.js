import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import index from '../pages/index.vue'
import Tutors from '../pages/Tutors.vue'
import TutorDetails from '../pages/instructor/TutorDetails.vue'

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
                name: 'detai-tutor',
                component: TutorDetails
            },{
                path: '/khoa-hoc',
                name: 'courses',
                component: Courses
            }
        ],
    },
];
const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: routes,
})

export default router;