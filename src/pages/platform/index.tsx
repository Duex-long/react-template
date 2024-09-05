import CTool from './c-tool'
import {  useRecordTarget } from './core'
import './platform.less'


const Platform = () => {
  const signalInstance = useRecordTarget()

  return (
      <div className="app-platform full-page">
        <div className="app-platform-component border-shadow">
          <div className="app-title-h2">{signalInstance.name}</div>
          <CTool />
        </div>
        <div className="app-platform-template"></div>
        <div className="app-platform-config"></div>
      </div>
  )
}

export default Platform
