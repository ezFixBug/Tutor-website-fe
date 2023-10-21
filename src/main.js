import router from "./router/index";
import { createApp, h } from 'vue'
import App from './App.vue'
import BreadCrumb from "@/components/layouts/BreadCrum.vue";
import { Select, FormItem, Form, Button, Card, Row } from "ant-design-vue";
import Cloudinary from 'cloudinary-vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import Spinner from '@/components/Spinner/Spinner.vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
const app = createApp({
    render: () => h(App)
});

app.use(router);
app.use(Cloudinary, {
    configuration: {
      cloudName:  process.env.VUE_APP_CLOUDINARY_NAME,
      apiKey: process.env.VUE_APP_API_KEY,
    },
})
app.use(CKEditor);
app.component('App', App);
app.component('BreadCrumb', BreadCrumb);
app.component('Select', Select);
app.component('Button', Button);
app.component('FormItem', FormItem);
app.component('Form', Form);
app.component('Card', Card);
app.component('Row', Row);
app.component('pulse-loader', PulseLoader);
app.component('spinner', Spinner);
app.config.productionTip = false
app.mount('#app');
