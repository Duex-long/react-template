import { Outlet, Route, Routes } from 'react-router-dom'
import './Main.less'
import Layout from '@/common/Layout/Index'

export default function Main() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
