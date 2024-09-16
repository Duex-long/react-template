import CConfig from './c-config'
import CPreview from './c-preview'
import CTool from './c-tool'
import { useRecordTarget } from './core'
import './platform.less'

const Platform = () => {
  const signalInstance = useRecordTarget()

  return (
    <>
      <div className="app-title-h2">{signalInstance.name}</div>
      <div className="app-platform full-page">
        <div className="app-platform-component border-shadow">
          <CTool />
        </div>
        <div className="app-platform-template">
          <CPreview />
        </div>
        <div className="app-platform-config">
          <CConfig />
        </div>
      </div>
    </>
  )
}

export default Platform
