import { useRecordTarget } from '../core'
import render from '../core/renderer'
import './index.less'

const CPreview = () => {
  const record = useRecordTarget()
  console.log('编译', record.componentRoot, '??')
  return (
    <div className="c-priview">
      <div className="c-priview-container">{render(record.componentRoot)}</div>
    </div>
  )
}

export default CPreview
