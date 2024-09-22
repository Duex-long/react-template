import { useRecordTarget } from '../core'
import compire from '../core/compile'
import './index.less'

const CPreview = () => {
  const record = useRecordTarget()
  console.log('编译')
  return (
    <div className="c-priview">
      <div className="c-priview-container">{compire(record.componentRoot)}</div>
    </div>
  )
}

export default CPreview
