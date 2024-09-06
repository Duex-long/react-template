import './index.less'
import { FC } from 'react'
import { BorderOutlined } from '@ant-design/icons'
import ScaleTextRender from '@/components/common/scaleText/scaleText'
import { useRecordTarget } from '../../core'
import { ComponentFactoryInterface } from '../../core/interface/components'
import { useDispatch } from 'react-redux'

/** 创建组件项 */
const CCreateItem: FC<{ factory: ComponentFactoryInterface }> = ({
  factory,
}) => {
  const dispach = useDispatch()
  const record = useRecordTarget()

  const createContainer = () => {
    dispach({
      type: 'platform/appendContainer',
      payload: factory.create({ name: '容器' }),
    })
  }
  return (
    <div className="c-create-container-item" onClick={createContainer}>
      <div className="c-create-container-item-icon">
        <BorderOutlined />
      </div>
      <div className="c-create-container-item-name">
        <ScaleTextRender>容器</ScaleTextRender>
      </div>
    </div>
  )
}
/** 创建组件容器*/
const CCreate = () => {
  const record = useRecordTarget()

  return (
    <div className="c-tool-content-item c-create">
      <div className="c-create-container">
        {record.componentFactoryCollection.map((item) => (
          <CCreateItem key={item.name} factory={item} />
        ))}
      </div>
    </div>
  )
}

export default CCreate
