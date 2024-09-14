import './index.less'
import { FC } from 'react'
import { Collapse } from 'antd'
import { CreateForm } from '@/pages/schema/view'
import { FormItemInterface } from '@/pages/schema/interface'
import { CollapseProps } from 'antd/es/collapse/Collapse'

const formList: Array<FormItemInterface> = [
  {
    name: 'fontSize',
    label: '字体',
    type: 'InputNumber',
    defaultValue: 16,
    expandConfig: {
      suffix: 'px',
      style: {'width':'100%'},
      //   size: 'small',
    },
  },
  {
    name: 'lineHeight',
    label: '行高',
    type: 'InputNumber',
    defaultValue: 16,
    expandConfig: {
        suffix: 'px',
        style: {'width':'100%'},
      //   size: 'small',
    },
  },
]

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
        <h3 className="app-title-h3">Title</h3>
        {CConfigStyleItem(collapseItemPipe('文字样式', formList))}
      </div>
    </div>
  )
}

export default CConfig
