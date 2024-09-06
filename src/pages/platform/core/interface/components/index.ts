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
  /** id */
  id: number | string
  /** 属性 */
  attribute: AttributeInterface
  /** 子节点 */
  children: Array<ComponentsInterface>
  /** 名称 */
  name: string
  appendChild: (child: ComponentsInterface) => void
}

/** 普通容器 */
interface LeafComponentInterface extends ComponentsInterface {
  /** 父节点 */
  parent: ComponentsInterface
}
/** 根容器 */
interface RootComponentInterface extends ComponentsInterface {
  parent: null
}

/** 实例化组件类型参数 */
interface ComponentConstructorParamsInterface {
  /** 名称 */
  name: string
}

/** 实例化组叶节点组件类型参数  */
interface LeafComponentConstructorParamsInterface
  extends ComponentConstructorParamsInterface {
  /** 父节点*/
  parent: ComponentsInterface
}

/** Component工厂 */

interface ComponentFactoryInterface {
  /** 构造器*/
  create: (config: LeafComponentConstructorParamsInterface) => ComponentsInterface
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
  LeafComponentConstructorParamsInterface,
  RootComponentInterface,
  LeafComponentInterface,
}
