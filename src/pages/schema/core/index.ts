import { InputNumber } from 'antd'
import { FC, ReactElement } from 'react'


const renderMap: { [x: string]: FC } = {
  'InputNumber': InputNumber,
}

/**  获取component */
const getTypeComponent = (type: string) => {
  return renderMap[type]
}

export { getTypeComponent }
