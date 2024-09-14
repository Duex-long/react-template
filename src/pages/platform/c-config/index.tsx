import './index.less'
import { FC } from 'react'
import { Collapse } from 'antd'
import { CreateForm } from '@/pages/schema/view'
import { FormItemInterface } from '@/pages/schema/interface'

const formList: Array<FormItemInterface> = [
  {
    name: 'fontSize',
    label: '字体',
    type: 'InputNumber',
    defaultValue: 16,
    expandConfig: {
      suffix: 'px',
      size: 'small',
    },
  },
  {
    name: 'lineHeight',
    label: '行高',
    type: 'InputNumber',
    defaultValue: 16,
    expandConfig: {
      suffix: 'px',
      size: 'small',
    },
  },
]

const CConfigStyleItem = () => {
  return (
    <div className="c-config-item">
      <CreateForm schemaList={formList} />
    </div>
  )
}

const CConfig: FC = () => {
  return (
    <div className="c-config">
      <div className="c-config-container">
        <h3 className="app-title-h3">Title</h3>
        {CConfigStyleItem()}
      </div>
    </div>
  )
}

export default CConfig
