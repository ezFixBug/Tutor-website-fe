/**
 * httpService
 */
import axios from 'axios';
import $auth from '@/services/authService';
import get from 'lodash/get';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

class HttpService {

  constructor() {
    this.http = axios.create();
    this.app_url = process.env.VUE_APP_API_URL;
    this.init();
  }

  init() {
    this.http.interceptors.request.use(
      (config) => {
        const token = get($auth.value, 'token', null);
        config.headers['X-Auth-Token'] = `${token}`;
        return config;
      }
    );

    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          $auth.reject();
        }
        // $notify.show({
        //   message: i18n.t('ERRORS.STOP_PROCESSING'),
        //   style: 'danger',
        // });
        return { data: { result: false, message: error.response.data.message } };
      }
    );
  }

  showError(message) {
    createToast(message, {
      type: "danger",
      timeout: 6000,
    });
  }

  mapData(data) {
    return data.map(item => ({ label: item.name, value: item.id }));
  }

  async get(url, params = {}) {

    const path = this.app_url + url;
    // const version = `${store.getters['version']}`;

    // if (version !== 'production') {
    //   const time_travel = sessionStorage.getItem('time_travel');
    //   if (time_travel) Object.assign(params, { time_travel: time_travel });
    // }
    return this.http.get(path, { params: params });
  }

  // async post(url, params = {}) {
  //   await $auth.isAuthenticated();

  //   const path = `${store.getters['apiUrl']}${url}`;
  //   // const version = `${store.getters['version']}`;

  //   // if (version !== 'production') {
  //   //   const time_travel = sessionStorage.getItem('time_travel');
  //   //   if (time_travel) Object.assign(params, { time_travel: time_travel });
  //   // }
  //   return this.http.post(path, params);
  // }

  // async delete(url) {
  //   await $auth.isAuthenticated();

  //   const path = `${store.getters['apiUrl']}${url}`;
  //   return this.http.delete(path);
  // }

  // async upload(url, params) {
  //   await $auth.isAuthenticated();

  //   const path = `${store.getters['apiUrl']}${url}`;
  //   return this.http.post(path, params, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   });
  // }

  async uploadImageToCloud(file)
  {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "website_tutor");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/" +
          process.env.VUE_APP_CLOUDINARY_NAME +
          "/image/upload",
        formData
      );

      return response.data.secure_url;
    } catch (error) {
      this.showError(error.response.data.message)
    }
  }

  async getProvinces() {
    try {
      const response = await axios.get(this.app_url + '/provinces');
      if (response.data.provinces) {
        return this.mapData(response.data.provinces);
      };
    } catch (error) {
      this.showError(error.response.data.message)
    }
  }

  async getDistricts(province_id) {
    try {
      const response = await axios.get(this.app_url + '/districts/' + province_id);
      if (response.data.districts) {
        return this.mapData(response.data.districts);
      };
    } catch (error) {
      this.showError(error.response.data.message)
    }
  }

  async getSubjects() {
    try {
      const response = await axios.get(this.app_url + '/subjects');
      if (response.data.subjects) {
        return this.mapData(response.data.subjects);
      };
    } catch (error) {
      this.showError(error.response.data.message)
    }
  }

  async getClasses() {
    try {
      const response = await axios.get(this.app_url + '/classes');
      if (response.data.classes) {
        return this.mapData(response.data.classes);
      };
    } catch (error) {
      this.showError(error.response.data.message)
    }
  }

  async getJobs() {
    try {
      const response = await axios.get(this.app_url + '/jobs');
      if (response.data.jobs) {
        return this.mapData(response.data.jobs);
      };
    } catch (error) {
      this.showError(error.response.data.message)
    }
  }
}

export default new HttpService();
