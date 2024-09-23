import { useState } from 'react'
import { useRecordTarget, useComponentTarget } from '../core'
import render from '../core/renderer'
import './index.less'

const CPreview = () => {
  const record = useRecordTarget()
  return (
    <div className="c-priview">
      <div className="c-priview-container">{render(record.componentRoot)}</div>
    </div>
  )
}

export default CPreview
