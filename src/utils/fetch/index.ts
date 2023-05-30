import { stringify } from 'qs'

const urlQueryBind = (url: string, query: { [x: string]: string }) => {
  const urlPack = new URL(url)
  urlPack.search = new URLSearchParams(query).toString()
  return urlPack.toString()
}
const BASE_API = import.meta.env.VITE_BASE_API
const FETCH__TIMEOUT = 10000
const controller = new AbortController()
//  100/170

const timeoutFetchFactory = (delay?: number): Promise<Response> => {
  delay = delay ?? FETCH__TIMEOUT
  return new Promise(resolve => {
    setTimeout(() => {
      const timeoutResponse = new Response('timeout', {
        status: 504,
        statusText: 'timeout ',
      })
      resolve(timeoutResponse)
      controller.abort()
    }, delay)
  })
}

export const fetchGet = (
  url: string,
  query?: { [x: string]: string },
  conf?: Omit<RequestInit, 'method'>
) => {
  url = BASE_API + url
  if (query) {
    url = urlQueryBind(url, query)
  }
  const fetchConfig: RequestInit = {
    method: 'GET',
    headers: {
      accetp: 'application/json',
    },
  }
  return Promise.race([fetch(url, fetchConfig), timeoutFetchFactory(10000)])
}

export const fetchPost = (
  url: string,
  params?: { [x: string]: any },
  conf?: Omit<RequestInit, 'method'>
) => {
  url = BASE_API + url

  const fetchConfig: RequestInit = {
    method: 'POST',
    headers: {
      accetp: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify(params),
  }

  return Promise.race([fetch(url, fetchConfig), timeoutFetchFactory(10000)])
}
