import { IconType } from '../../type'
import { AttributeInterface } from '../attribute/attr'
import { StyleInterface } from '../attribute/style'

/** 容器 */
interface ComponentsInterface {
  /** type */
  type: string
  /** id */
  id: number
  /** 属性 */
  attribute: AttributeInterface
  /** 子节点 */
  children: Array<ComponentsInterface>
  /** 名称 */
  name: string
  /** */
  appendChild: (child: ComponentsInterface) => void
  /** */
  removeChild: (child: ComponentsInterface) => void
  /** clone */
  clone: () => ComponentsInterface
}

/** 块级容器*/
interface BlockComponentInterface extends ComponentsInterface {
  // appendChild: (child: ComponentsInterface) => void
}

/** 行内容器 */
interface InlineComponentInterafce extends ComponentsInterface {}
/** 普通容器 */
interface LeafComponentInterface extends ComponentsInterface {
  /** 父节点 */
  parentId: number
}
/** 根容器 */
interface RootComponentInterface extends BlockComponentInterface {}

/** 实例化组件类型参数 */
interface ComponentConstructorParamsInterface {
  /** 名称 */
  name: string
  /** id */
  id?: number
}

/** 实例化组叶节点组件类型参数  */
interface LeafComponentConstructorParamsInterface
  extends ComponentConstructorParamsInterface {
  /** 父节点*/
  parentId: number
}

/** Component工厂 */

interface ComponentFactoryInterface {
  /** 构造器*/
  create: (
    config: LeafComponentConstructorParamsInterface
  ) => ComponentsInterface
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
  InlineComponentInterafce,
}
