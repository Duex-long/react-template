import { useState } from 'react'
import { useRecordTarget, useComponentTarget } from '../core'
import compire from '../core/compile'
import './index.less'

const CPreview = () => {
  const record = useRecordTarget()
  return (
    <div className="c-priview">
      <div className="c-priview-container">{compire(record.componentRoot)}</div>
    </div>
  )
}

export default CPreview
