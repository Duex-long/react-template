import { FC } from 'react'
import './index.less'

interface BasePropsInterface {
  children: JSX.Element
}

const SideBar = () => {
  return <div className="app-layout-sidebar"></div>
}

const Layout: FC<BasePropsInterface> = ({ children }) => {
  return (
    <div className="app-layout">
      <SideBar />
      {children}
    </div>
  )
}

export default Layout
