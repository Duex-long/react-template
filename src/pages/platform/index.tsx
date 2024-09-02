import CTree from './c-tree'
import './platform.less'
const Platform = () => {
  return (
    <div className="app-platform full-page">
      <div className="app-platform-component border-shadow">
        <div className="app-title-h2">Title</div>
          <CTree/>
      </div>
      <div className="app-platform-template"></div>
      <div className="app-platform-config"></div>
    </div>
  )
}

export default Platform
