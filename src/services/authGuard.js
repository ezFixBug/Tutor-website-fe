import get from 'lodash/get'
import $auth from '@/services/authService'

const authGuard = async (to, from, next) => {
  
    if (!$auth.hasValue) {
    next({ name: 'login', replace: true, params: { pathMatch: to.path } });
      return;
    }

    next();
}

export { authGuard } 
  