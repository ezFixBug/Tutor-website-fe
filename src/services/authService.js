import axios from 'axios';
import get from 'lodash/get';

class AuthService {

  constructor() {
    this.STORAGE = localStorage;
    this.STORAGE_KEY = 'token';
    this.STORAGE_KEY_USER = 'user';

    this.DEFAULT_AVATAR = 'https://smart-edu.vn/img/avatar.png';
    this.$auth = axios.create();
    this.storageValue = null;
  }

  get hasValue() {
    if (this.STORAGE.getItem(this.STORAGE_KEY) === undefined)  {
      return false;
    }
    return this.STORAGE.getItem(this.STORAGE_KEY);
  }
  
  get getUser() {
    if (this.STORAGE.getItem(this.STORAGE_KEY_USER) === undefined) {
      return false;
    }
    return JSON.parse(this.STORAGE.getItem(this.STORAGE_KEY_USER));
  }

  get tokenExpiration() {
    const auth = this.value;
    const period = get(auth, 'token_period', 0);
    return period > Date.now();
  }

  isAuthenticated() {
    return new Promise(async (resolve) => {
      if (this.hasValue) {
        resolve(true);
        return;
      }

      if (!this.hasValue) {
        rejectService(true);
        return;
      }
    });
  }

  register(request) {
    const interceptor = this.$auth.interceptors.response.use(
      (response) => {
        if (response.data.status === 200)  {
          this.success(response.data);
        }
        return response;
      },
      (error) => {return error }
    );

    const app_url = process.env.VUE_APP_API_URL
    const url = app_url + `/register`;

    return this.$auth.post(url, request).finally(() => {
      this.$auth.interceptors.response.eject(interceptor);
    });
  }


  login(request) {
    const interceptor = this.$auth.interceptors.response.use(
      (response) => {
        if (response.data.status === 200) {
          this.success(response.data);
        }
        return response;
      },
      (error) => {
        return error;
      }
    );

    const app_url = process.env.VUE_APP_API_URL
    const url = app_url + `/login`;

    return this.$auth.post(url, request).finally(() => {
      this.$auth.interceptors.response.eject(interceptor);
    });
  }

  refresh() {
    const interceptor = this.$auth.interceptors.response.use(
      (response) => {
        if (response.data.result) {
          this.setToken(response.data);
          return response.data.result;
        } else {
          rejectService(true);
        }
      },
      (error) => {
        const status = error.response.status;
        if (status === 401) {
          rejectService(true);
        }
      }
    );

    const url = `${store.getters['apiUrl']}/refresh`;

    const request = {
      token: this.value.token,
      refresh_token: this.value.refresh_token,
    };

    return this.$auth.post(url, request).finally(() => {
      this.$auth.interceptors.response.eject(interceptor);
    });
  }

  setToken(data) {
    const storage = JSON.parse(this.STORAGE.getItem(this.STORAGE_KEY));
    storage.token = data.token;
    storage.token_period = data.token_period;
    storage.refresh_token = data.refresh_token;
    this.success(storage);
  }

  reject() {
    rejectService();
  }

  logout() {
    this.clear();
  }

  success(authData) {
    this.storageValue = authData;
    this.STORAGE.setItem(this.STORAGE_KEY, JSON.stringify(authData.token));
    this.STORAGE.setItem(this.STORAGE_KEY_USER, JSON.stringify(authData.user));
  }

  clear() {
    this.storageValue = null;
    this.STORAGE.removeItem(this.STORAGE_KEY);
    this.STORAGE.removeItem(this.STORAGE_KEY_USER);
  }
}

export default new AuthService();
