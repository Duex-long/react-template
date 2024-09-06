/** ComponentFactory */

import {
  AttributeInterface,
  ComponentConstructorParamsInterface,
  ComponentFactoryInterface,
  ComponentsInterface,
} from '../interface/components'
import { IconType } from '../type'
import { BorderOutlined } from '@ant-design/icons'

/** 基础容器*/
class BaseComponent implements ComponentsInterface {
  readonly name: string
  attribute: AttributeInterface = {}
  children: Array<ComponentsInterface> = []
  constructor({ name }: ComponentConstructorParamsInterface) {
    this.name = name
  }
  /**  method */
  appendChild = (child: ComponentsInterface) => {
      this.children.push(child)
  };
}

/** 基础容器工厂 */
class BaseContainerFactory implements ComponentFactoryInterface {
  readonly name: string = '容器'
  icon: IconType = BorderOutlined
  create = (config: ComponentConstructorParamsInterface) => {
    return new BaseComponent(config)
  }
}

export {
  /** 基础容器*/
  BaseComponent,
  /** 基础容器工厂 */
  BaseContainerFactory,
}
