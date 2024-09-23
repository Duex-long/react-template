import './index.less'
import { FC } from 'react'
import { Collapse } from 'antd'
import { CreateForm } from '@/pages/schema/view'
import { FormItemInterface } from '@/pages/schema/interface'
import { CollapseProps } from 'antd/es/collapse/Collapse'
import { StyleConfig } from './c-attr/c-attr-style/config'
import { useComponentTarget } from '../core'
import { StyleInterface } from '../core/interface/components'
import { AttrItemType } from '../core/interface/attribute/attr'
import { useDispatch } from 'react-redux'
interface CConfigStyleItemProps extends Pick<CollapseProps, 'items'> {
  label: string
}

/**  转style */
const styleRedurce = (styleList: AttrItemType[]): StyleInterface => {
  const result = {}
  styleList.reduce((previousValue, currentValue) => {
    const result = previousValue || {}
    result[currentValue.name] = currentValue.value
    return result
  }, result)
  return result
}

const StyleCreateFormRender: FC<{ formList: Array<FormItemInterface> }> = ({
  formList,
}) => {
  /** 获取实例 */
  const currentComponent = useComponentTarget()
  const dispach = useDispatch()
  const updateConfig = (
    value: {
      name: string
      value: string | number
    }[]
  ) => {
    const styleContent = styleRedurce(value)
    currentComponent.attribute.updateCss(styleContent)
  }
  return <CreateForm schemaList={formList} updateCallback={updateConfig} />
}

/**  转collapse配置  */
const collapseItemPipe = (
  label: string,
  formList: Array<FormItemInterface>
) => {
  const result = []
  result.push({
    key: label,
    label,
    children: <StyleCreateFormRender formList={formList} />,
  })

  return {
    label,
    items: result,
  }
}

const CConfigStyleItem = ({ items, label }: CConfigStyleItemProps) => {
  return (
    <div className="c-config-item" key={label}>
      <Collapse size="small" items={items}></Collapse>
    </div>
  )
}

const CConfig: FC = () => {
  return (
    <div className="c-config">
      <div className="c-config-container">
        <h3 className="app-title-h3">属性</h3>
        {StyleConfig.map((item) =>
          CConfigStyleItem(collapseItemPipe(item.label, item.data))
        )}
      </div>
    </div>
  )
}

export default CConfig
