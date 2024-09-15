import './index.less'
import { FC } from 'react'
import { Collapse } from 'antd'
import { CreateForm } from '@/pages/schema/view'
import { FormItemInterface } from '@/pages/schema/interface'
import { CollapseProps } from 'antd/es/collapse/Collapse'
import { StyleConfig } from './c-attr/c-attr-style/config'

const CConfigStyleItem = ({ items }: Pick<CollapseProps, 'items'>) => {
  return (
    <div className="c-config-item">
      <Collapse size="small" items={items}></Collapse>
    </div>
  )
}

const CConfig: FC = () => {
  const collapseItemPipe = (
    label: string,
    formList: Array<FormItemInterface>
  ) => {
    const result = []
    result.push({
      key: label,
      label,
      children: <CreateForm schemaList={formList} />,
    })

    return {
      items: result,
    }
  }

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
