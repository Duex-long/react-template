/** 样式配置  后期需支持jsonschema 转换*/

import { FormItemInterface } from '@/pages/schema/interface'

/** 字体样式配置 */
const FontStyleConfig: Array<FormItemInterface> = [
  {
    name: 'fontSize',
    label: '字体',
    type: 'InputNumber',
    defaultValue: 16,
    expandConfig: {
      suffix: 'px',
      style: { width: '100%' },
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
      style: { width: '100%' },
      //   size: 'small',
    },
  },
]

/** 外观度样式配置 */
const AppearanceConfig: Array<FormItemInterface> = [
  {
    name: 'width',
    label: '宽度',
    type: 'InputNumber',
    defaultValue: 1920,
    expandConfig: {
      suffix: 'px',
      style: { width: '100%' },
      //   size: 'small',
    },
  },
  {
    name: 'height',
    label: '高度',
    type: 'InputNumber',
    defaultValue: 1080,
    expandConfig: {
      suffix: 'px',
      style: { width: '100%' },
      //   size: 'small',
    },
  },
]

const StyleConfig: Array<{ label: string; data: Array<FormItemInterface> }> = [
  {
    label: '外观样式',
    data: AppearanceConfig,
  },
  {
    label: '字体样式',
    data: FontStyleConfig,
  },
]

export { StyleConfig }
