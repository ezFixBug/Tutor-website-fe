import router from "./router/index";
import { createApp, h } from 'vue'
import App from './App.vue'
import BreadCrumb from "@/components/layouts/BreadCrum.vue";
import { message, Select, FormItem, Form, Button, Card, Row, Modal } from "ant-design-vue";
import Antd from 'ant-design-vue';
import Cloudinary from 'cloudinary-vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import Spinner from '@/components/Spinner/Spinner.vue';
import Pagination from '@/components/layouts/Pagination.vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import 'datatables.net-responsive';
import 'datatables.net-select';
import StarRating from 'vue-star-rating'
import 'ant-design-vue/dist/reset.css';

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
app.use(Antd);
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
app.component('pagination', Pagination);
app.component('Modal', Modal);
app.component('star-rating', StarRating);

app.component('DataTable', DataTable);
DataTable.use(DataTablesCore);

app.config.productionTip = false
app.mount('#app');

app.config.globalProperties.$message = message;