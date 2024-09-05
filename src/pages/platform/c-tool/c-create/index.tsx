import { BorderOutlined } from '@ant-design/icons'
import './index.less'
import ScaleTextRender from '@/components/common/scaleText/scaleText'
/** 创建组件容器*/
const CCreate = () => {
  return (
    <div className="c-tool-content-item c-create">
      <div className="c-create-container">
        <div className="c-create-container-item">
          <div className="c-create-container-item-icon">
            <BorderOutlined />
          </div>
          <div className="c-create-container-item-name">
            <ScaleTextRender>容器</ScaleTextRender>
          </div>
        </div>
        {/* 模拟 */}
        <div className="c-create-container-item">
          <div className="c-create-container-item-icon">
            <BorderOutlined />
          </div>
          <div className="c-create-container-item-name">
            <ScaleTextRender>容器</ScaleTextRender>
          </div>
        </div>
        <div className="c-create-container-item">
          <div className="c-create-container-item-icon">
            <BorderOutlined />
          </div>
          <div className="c-create-container-item-name">
            <ScaleTextRender>容器</ScaleTextRender>
          </div>
        </div>

        {/*  */}
        <div className="c-create-container-item">
          <div className="c-create-container-item-icon">
            <BorderOutlined />
          </div>
          <div className="c-create-container-item-name">
            <ScaleTextRender>容器</ScaleTextRender>
          </div>
        </div>
        <div className="c-create-container-item">
          <div className="c-create-container-item-icon">
            <BorderOutlined />
          </div>
          <div className="c-create-container-item-name">
            <ScaleTextRender>容器</ScaleTextRender>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CCreate
