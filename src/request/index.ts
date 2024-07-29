import axios from 'axios'
import {
  methodGetAutorizationHeader,
  methodPostAutorizationHeader,
} from './auth'

const TIMEOUT = 20000

const { CancelToken } = axios

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: TIMEOUT,
  withCredentials: false,
})

request.interceptors.request.use((config) => {
  return config
})
request.interceptors.response.use((response) => {
  return response
})

// RequestGet

type BaseResponse<R> = {
  data: R
  message: string
}

type RequestOptions = {
  url: string
  payload?: any
}
const requestGet = <R>({ url, payload }: RequestOptions) => {
  const headers = methodGetAutorizationHeader(payload)
  return request.get<BaseResponse<R>>(url, {
    headers,
    params: payload,
  })
}

const requestPost = <R>({ url, payload }: RequestOptions) => {
  const headers = methodPostAutorizationHeader(payload)

  return request.post<BaseResponse<R>>(url, payload, {
    headers,
  })
}

export { requestGet, requestPost }
