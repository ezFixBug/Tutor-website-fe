
import $auth from '@/services/authService'
import identity from 'lodash/identity'
import isEmpty from 'lodash/isEmpty'
import pickBy from 'lodash/pickBy'
import get from 'lodash/get'

const rejectService = async (dialog) => {
  if (isIOS()) {
    if (dialog) {
      window.webkit.messageHandlers.TokenExpired.postMessage('');
    }
  } else {

    const base = process.env.BASE_URL.replace(/\/$/, '')
    const search = location.search || ''
    let path = location.pathname.replace(base, '')
    path += search

    if (path === '/login' || path === '/' || path === '') {
      path = null
    }
    else {
      path = `${base}${path}`
    }

    const query = pickBy({
      r  : path,
      expiration: dialog? 1 : null
    }, identity)

    const params = Object.keys(query).map(key => `${key}=${query[key]}`).join('&');

    const from_cd = get($auth, 'value.login_from_cd', 1);
    const login_path =  '/login';

    location.href = isEmpty(params)
      ? `${login_path}`
      : `${login_path}?${params}`

  }
}

const authGuard = async (to, from, next, checkPayment) => {
  if (!$auth.hasValue) {

    rejectService(false)
    next(false)
    return
  }

  if (!$auth.tokenExpiration) {
    const auth = await $auth.refresh()
    if (!auth) {
      return
    }
  }

  next()
}


export { authGuard }
