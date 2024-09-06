import { IconType } from '../../type'

/** 样式*/
interface StyleInterface {
  [key: string]: string
}
/** 属性 */
interface AttributeInterface {
  /** 目前仅支持css */
  css?: Array<StyleInterface>
}

/** 容器 */
interface ComponentsInterface {
  /** 属性 */
  attribute: AttributeInterface
  /** 子节点 */
  children: Array<ComponentsInterface>
  /** 名称 */
  name: string
  appendChild:(child:ComponentsInterface) => void
}

/** 实例化组建类型参数 */
interface ComponentConstructorParamsInterface {
  /** 名称 */
  name: string
}

/** Component工厂 */

interface ComponentFactoryInterface {
  /** 构造器*/
  create: (config: ComponentConstructorParamsInterface) => ComponentsInterface
  /** 名称*/
  name: string
  /** icon */
  icon: IconType
}

export type {
  ComponentFactoryInterface,
  ComponentsInterface,
  AttributeInterface,
  StyleInterface,
  ComponentConstructorParamsInterface,
}
