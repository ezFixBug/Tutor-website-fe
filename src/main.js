import router from "./router/index";
import { createApp, h } from 'vue'
import App from './App.vue'
import BreadCrumb from "@/components/layouts/BreadCrum.vue";
import { Select, FormItem, Form, Button, Card, Row } from "ant-design-vue";

const app = createApp({
    render: () => h(App)
});
app.use(router);
app.component('App', App);
app.component('BreadCrumb', BreadCrumb);
app.component('Select', Select);
app.component('Button', Button);
app.component('FormItem', FormItem);
app.component('Form', Form);
app.component('Card', Card);
app.component('Row', Row);
app.mount('#app');
