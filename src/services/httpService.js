/**
 * httpService
 */
import axios from 'axios';
import $auth from '@/services/authService';
import get from 'lodash/get';

class HttpService {

  constructor() {
    this.http = axios.create();
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

  // async get(url, params = {}) {
  //   await $auth.isAuthenticated();

  //   const path = `${store.getters['apiUrl']}${url}`;
  //   // const version = `${store.getters['version']}`;

  //   // if (version !== 'production') {
  //   //   const time_travel = sessionStorage.getItem('time_travel');
  //   //   if (time_travel) Object.assign(params, { time_travel: time_travel });
  //   // }
  //   return this.http.get(path, { params: params });
  // }

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
      console.error("Error uploading image:", error);
    }
  }

  async getProvinces() {
    try {
      const app_url = process.env.VUE_APP_API_URL
      const response = await axios.get(app_url + '/provinces');
      if (response.data) {
        return response.data.provinces.map(city => ({ label: city.name, value: city.id }));
      };
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async getDistricts(province_id) {
    try {
      const app_url = process.env.VUE_APP_API_URL
      const response = await axios.get(app_url + '/districts/' + province_id);
      if (response.data) {
        return response.data.districts.map(district => ({ label: district.name, value: district.id }));
      };
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default new HttpService();
