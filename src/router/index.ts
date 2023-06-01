import Login from '@/pages/login/Index'
import { ReactNode } from 'react'
import { PathRouteProps } from 'react-router-dom'
interface ReactRoute extends PathRouteProps {
  name?: string
  icon?: string
  component: () => JSX.Element
}
const routes: ReactRoute[] = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
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
  return routes
}

export default getPermissionRoutes
