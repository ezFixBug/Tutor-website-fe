import { createRouter, createWebHistory} from 'vue-router';
import Homepage from '../pages/Homepage.vue'

const routes = [
    {
        path: '/',
        component: Homepage,
        name: 'home',
    },

];
const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: routes,
})

export default router;