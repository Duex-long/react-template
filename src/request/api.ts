import { requestGet, requestPost } from '.'

const userLogin = {
  getPublicKey: (payload?: any) =>
    requestGet<string>({ url: '/admin/user/getPublicKey', payload }),
  login: (payload?: any) =>
    requestPost<{ token: string }>({
      url: 'admin/user/login',
      payload,
    }),
  info: () => requestGet<any>({ url: '/admin/user/info' }),
}
const api = {
  userLogin,
}

export default api
