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
  id
  readonly name: string
  attribute: AttributeInterface = new Attribute()
  children: Array<ComponentsInterface> = []

  constructor({ name, id }: ComponentConstructorParamsInterface) {
    this.name = name
    this.id = id || getDid()
  }
  /**  method */
  appendChild = (child: ComponentsInterface) => {
    this.children = [...this.children, child]
  }
  removeChild(child: ComponentsInterface) {
    const id = child.id
    const target = this.children.findIndex((item) => item.id == id)
    if (~target) {
      this.children.splice(target, 1)
    }
  }
  clone(): ComponentsInterface {
    return this
  }
  /** getter */
  get type() {
    return this._type
  }
}
/** 块级容器*/
class BaseComponent extends Component implements LeafComponentInterface {
  parentId: number
  constructor(params: LeafComponentConstructorParamsInterface) {
    super(params)
    const { parentId } = params
    this.parentId = parentId
  }
  clone(): ComponentsInterface {
    const params = { parentId: this.parentId, name: this.name, id: this.id }
    const _copyInstance = new BaseComponent(params)
    const children = this.children
    const _attribute = this.attribute
    _copyInstance.attribute = _attribute
    _copyInstance.children = children
    return _copyInstance
  }
}
/** 根节点容器*/
class RootComponent extends Component implements RootComponentInterface {
  parentId = -1

  clone(): ComponentsInterface {
    const params = { parentId: this.parentId, name: this.name, id: this.id }
    const _copyInstance = new RootComponent(params)
    const _attribute = this.attribute
    const children = this.children
    _copyInstance.attribute = _attribute
    _copyInstance.children = children
    return _copyInstance
  }
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
