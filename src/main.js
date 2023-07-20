import router from "./router/index";
import { createApp,h } from 'vue'
import App from './App.vue'


const app = createApp({
    render: ()=>h(App)
});
app.use(router);
app.component('App', App);
app.mount('#app');
