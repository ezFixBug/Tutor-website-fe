import { createRouter, createWebHistory} from 'vue-router';
import Homepage from '../pages/Homepage.vue'
import index from '../pages/index.vue'

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
        ],
    },
];
const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: routes,
})

export default router;