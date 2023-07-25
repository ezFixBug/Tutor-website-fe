import axios from 'axios';
import get from 'lodash/get';

class AuthService {

  constructor() {
    this.STORAGE = localStorage;
    this.STORAGE_KEY = 'token';
    this.INVENTORY_PLAN_KEY = 'plan';

    this.$auth = axios.create();
    this.storageValue = null;
  }

  get value() {
    return JSON.parse(this.STORAGE.getItem(this.STORAGE_KEY));
  }

  get hasValue() {
    const auth = this.value;
    return auth && get(auth, 'token') && get(auth, 'token_period') && get(auth, 'refresh_token');
  }

  get tokenExpiration() {
    const auth = this.value;
    const period = get(auth, 'token_period', 0);
    return period > Date.now();
  }

  isAuthenticated() {
    return new Promise(async (resolve) => {
      if (this.value && this.tokenExpiration) {
        resolve(true);
        return;
      }

      if (!this.value) {
        rejectService(true);
        return;
      }

      const refresh = await this.refresh();

      if (refresh) resolve(true);
    });
  }

  login(request) {
    const interceptor = this.$auth.interceptors.response.use(
      (response) => {

        return response.data.result;
      },
      (error) => -1
    );

    const url = `${store.getters['apiUrl']}/login`;

    this.account_id = String(request.account_id);

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
    this.STORAGE.setItem(this.STORAGE_KEY, JSON.stringify(authData));
    this.STORAGE.setItem(this.LOGIN_KEY, JSON.stringify({ 
      account_id: authData.account_id,
      account_name: authData.account_name, 
      due_date: authData.due_date, 
      has_payment_problem: authData.has_payment_problem, 
      email: authData.email
    }));
  }

  clear() {
    this.account_id = null;
    this.storageValue = null;
    this.STORAGE.removeItem(this.STORAGE_KEY);
    this.STORAGE.removeItem(this.INVENTORY_PLAN_KEY);
    this.STORAGE.removeItem(this.SETTING_SSO_KEY);
  }

  getAccount() {
    const storage = JSON.parse(this.STORAGE.getItem(this.LOGIN_KEY));
    if (storage) return storage;
    else return { account_id: null, account_name: null };
  }
}

export default new AuthService();
