import { useState } from 'react'
import CTree from './c-tree'
import CTool from './c-tool'
import SignleRecordCreater, { useRecordTarget } from './core'
import './platform.less'

const Platform = () => {
  console.log('Platform-Render')
  const signalInstance: SignleRecordCreater = useRecordTarget()

  return (
    <div className="app-platform full-page">
      <div className="app-platform-component border-shadow">
        <div className="app-title-h2">{signalInstance.name}</div>
        <CTool/>
        {/* <CTree /> */}
      </div>
      <div className="app-platform-template"></div>
      <div className="app-platform-config"></div>
    </div>
  )
}

export default Platform
