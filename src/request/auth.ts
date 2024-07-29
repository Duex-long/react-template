import CryptoJS from 'crypto-js'
import uuidv4 from 'uuid-random'

const VERSION = '2017-03-12'
const REGION = 'ap-guangzhou'
const service = 'cvm'
const endString = 'base_request'
const USER_KEY = 'fd7d08f5-9aea-4e07-bd6a-9b6f4a92e7c3'
const SECRET_ID = 'AKIDz8krbsJ5yKBZQpn74WFkmLPx3*******'
const SECRET_KEY = 'Gu5t9xGARNpq86cd98joQYCN3*******'
const host = new URL(import.meta.env.VITE_APP_BASE_URL).host

export const setToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const setUserId = (username: string) => {
  localStorage.setItem(USER_KEY, sha1(username))
}
export const getToken = () => {
  return localStorage.getItem('token')
}

export const getUserId = () => {
  return localStorage.getItem(USER_KEY)
}
export const removeToken = () => {
  localStorage.removeItem('token')
}
export const removeUserId = () => {
  localStorage.removeItem(USER_KEY)
}

export const setRoleInfo = (info: string) => {
  localStorage.setItem('info', info)
}

export const getRoleInfo = () => {
  return localStorage.getItem('info')
}

export const removeInfo = () => {
  return localStorage.removeItem('info')
}

export const clearCache = () => {
  removeToken()
  removeUserId()
  removeInfo()
}
export const getCacheKey = () => uuidv4()

const sha256 = (message: string) => {
  const hash = CryptoJS.SHA256(message)
  return hash.toString(CryptoJS.enc['Hex'])
}

const sha1 = (message: string) => {
  const hash = CryptoJS.SHA1(message)
  return hash.toString(CryptoJS.enc['Hex'])
}

const hmacSHA256 = (
  message: string,
  secret = '',
  encoding?: keyof typeof CryptoJS.enc
) => {
  const hash = CryptoJS.HmacSHA256(message, secret)
  return encoding ? hash.toString(CryptoJS.enc[encoding]) : hash
}

/** 生成规范请求 */
const getHashedCanonicalRequest = (options: { [x: string]: string }) => {
  const {
    method,
    canonicalUri = '/',
    canonicalQueryString = '',
    canonicalHeaders,
    signedHeaders,
    hashedRequestPayload = '',
  } = options
  // console.log('--------canonicalRequestOptions----------')
  // console.log(options)
  // console.log('--------canonicalRequestOptions----------')

  const result =
    method +
    '\n' +
    canonicalUri +
    '\n' +
    canonicalQueryString +
    '\n' +
    canonicalHeaders +
    '\n' +
    signedHeaders +
    '\n' +
    hashedRequestPayload
  return sha256(result)
}
const getAuthorizationHeader = (
  method: string,
  options: { [x: string]: string }
) => {
  const secretId = getUserId() || SECRET_ID
  const secretKey = getToken() || SECRET_KEY
  const {
    canonicalQueryString,
    hashedRequestPayload,
    timestamp,
    canonicalHeaders,
    signedHeaders,
  } = options
  const algorithm = 'HMAC-SHA256'
  const [date] = getDate()

  const hashedCanonicalRequest = getHashedCanonicalRequest({
    method,
    canonicalHeaders,
    signedHeaders,
    canonicalQueryString,
    hashedRequestPayload,
  })

  const credentialScope = date + '/' + service + '/' + endString

  const stringToSign =
    algorithm +
    '\n' +
    timestamp +
    '\n' +
    credentialScope +
    '\n' +
    hashedCanonicalRequest

  // console.log('stringToSign', stringToSign)
  const kDate = hmacSHA256(date as string, 'BASE' + secretKey)
  const kService = hmacSHA256(service, kDate as string)
  const kSigning = hmacSHA256(endString, kService as string)
  const signature = hmacSHA256(stringToSign, kSigning as string, 'Hex')
  const authorization =
    algorithm +
    ' ' +
    'Credential=' +
    secretId +
    '/' +
    credentialScope +
    ', ' +
    'SignedHeaders=' +
    signedHeaders +
    ', ' +
    'Signature=' +
    signature

  return authorization
}

function getDate(timestamp?: number) {
  const date = timestamp ? new Date(timestamp) : new Date()
  const year = date.getUTCFullYear()
  const month = ('0' + (date.getUTCMonth() + 1)).slice(-2)
  const day = ('0' + date.getUTCDate()).slice(-2)
  return [`${year}-${month}-${day}`, date.getTime()]
}

const getTimeStampString = () => `${new Date().getTime()}`

const methodGetAutorizationHeader = (
  params?: { [x: string]: unknown },
  action = 'DescribeInstances'
) => {
  const method = 'GET'
  let query = ''
  let canonicalQueryString = ''
  // Get请求下默认paoload
  const hashedRequestPayload = ''
  const timestamp = getTimeStampString()
  // 对象式params 参数拼接
  if (params) {
    Object.keys(params).forEach((item) => {
      query
        ? (query += `&${item}=${params[item]}`)
        : (query = `?${item}=${params[item]}`)
    })
    canonicalQueryString = query ? query.slice(1) : ''
  }

  const signedHeaders = 'host;action;timestamp'

  const canonicalHeaders =
    'host:' +
    host +
    '\n' +
    'action:' +
    action.toLowerCase() +
    '\n' +
    'timestamp:' +
    timestamp +
    '\n'

  const resultHeader = {
    Authorization: getAuthorizationHeader(method, {
      signedHeaders,
      canonicalHeaders,
      canonicalQueryString,
      hashedRequestPayload,
      timestamp,
    }),
    Action: action,
    Version: VERSION,
    Region: REGION,
    Timestamp: timestamp,
  }

  return resultHeader
}

const methodPostAutorizationHeader = (
  params?: { [x: string]: unknown },
  action = 'DescribeInstances'
) => {
  const method: string = 'POST'
  const canonicalQueryString = ''
  // Get请求下默认paoload
  let hashedRequestPayload = ''
  const timestamp = getTimeStampString()
  if (params) {
    hashedRequestPayload = sha256(JSON.stringify(params))
  }

  const signedHeaders = 'content-type;host;action'

  const canonicalHeaders =
    'content-type:application/json; charset=utf-8\n' +
    'host:' +
    host +
    '\n' +
    'action:' +
    action.toLowerCase() +
    '\n'

  const resultHeaders = {
    Authorization: getAuthorizationHeader(method, {
      canonicalQueryString,
      hashedRequestPayload,
      timestamp,
      signedHeaders,
      canonicalHeaders,
    }),
    'Content-Type': 'application/json; charset=utf-8',
    Action: action,
    Version: VERSION,
    Region: REGION,
    Timestamp: timestamp,
  }

  return resultHeaders
}

export { methodGetAutorizationHeader, methodPostAutorizationHeader }
