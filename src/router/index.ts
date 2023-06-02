import Login from '@/pages/login/Index'
import { ReactNode } from 'react'
import { PathRouteProps } from 'react-router-dom'
interface ReactRoute extends PathRouteProps {
  name?: string
  icon?: string
  redirect?: string
  component?: () => JSX.Element
}
const loginRoutes: ReactRoute[] = [
  {
    path: '',
    redirect: '/login',
    icon: 'ApiOutlined',
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    icon: 'ApiOutlined',
  },
  {
    path: '*',
    redirect: '/login',
    icon: 'ApiOutlined',
  },
]

const permissionRoutes: ReactRoute[] = [
  {
    path: '/main',
    component: Login,
    name: 'Login',
    icon: 'ApiOutlined',
  },
]
const getPermissionRoutes = () => {
  return loginRoutes
}

export default getPermissionRoutes
