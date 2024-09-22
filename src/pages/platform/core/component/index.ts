/** ComponentFactory */

import Attribute from '../attribute'
import {
  AttributeInterface,
  ComponentConstructorParamsInterface,
  ComponentFactoryInterface,
  ComponentsInterface,
  LeafComponentConstructorParamsInterface,
  LeafComponentInterface,
  RootComponentInterface,
} from '../interface/components'
import { IconType } from '../type'
import { BorderOutlined } from '@ant-design/icons'

let did = 0
const getDid = () => {
  return ++did
}
/** 抽象 */
abstract class Component implements ComponentsInterface {
  readonly _type = 'div'
  id = getDid()
  readonly name: string
  attribute: AttributeInterface = new Attribute()
  children: Array<ComponentsInterface> = []

  constructor({ name }: ComponentConstructorParamsInterface) {
    this.name = name
  }
  /**  method */
  appendChild = (child: ComponentsInterface) => {
    this.children = [...this.children, child]
  }
  clone() {
    return {
      ...this,
    }
  }
  /** getter */
  get type() {
    return this._type
  }
}
/** 块级容器*/
class BaseComponent extends Component implements LeafComponentInterface {
  id = getDid()
  parent: ComponentsInterface
  constructor(params: LeafComponentConstructorParamsInterface) {
    super(params)
    const { parent } = params
    this.parent = parent
  }
}
/** 根节点容器*/
class RootComponent extends Component implements RootComponentInterface {
  parent = null
}
/** 行内叶节点 */

/** 基础容器工厂 */
class BaseContainerFactory implements ComponentFactoryInterface {
  readonly name: string = '容器'
  icon: IconType = BorderOutlined
  create = (config: LeafComponentConstructorParamsInterface) => {
    return new BaseComponent(config)
  }
}

export {
  /** 根节点容器*/
  RootComponent,
  /** 基础容器*/
  BaseComponent,
  /** 基础容器工厂 */
  BaseContainerFactory,
}
