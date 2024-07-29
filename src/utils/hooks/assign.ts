import api from '@/request/api'
import { clearCache, getToken } from '@/request/auth'
import { redirect, useNavigate } from 'react-router-dom'
const checkLogin = async () => {
  const token = getToken()
  if (token) {
    const {
      data: { message },
    } = await api.userLogin.info()
    if (message) {
      clearCache()
      return false
    }
    return true
  }
  return false
}

const useLogin = () => {
  const toLogin = () => {
    redirect('/login')
  }
  checkLogin().then((res) => {
    if (!res) {
      toLogin()
    }
  }, toLogin)
}

export { useLogin, checkLogin }
