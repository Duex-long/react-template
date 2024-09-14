import { Rule } from "antd/es/form"

/** 创建表单基础配置 */
interface FormItemInterface {
  /** 名称 */
  name: string
  /** 标题 */
  label: string
  /** 表单类型 */
  type: 'InputNumber'
  /** 校验规则 */
  rules?: Rule[]
  /**  默认值*/
  defaultValue: unknown
  /**  拓展属性 */
  expandConfig:Record<string,any>
}

export type { FormItemInterface }
