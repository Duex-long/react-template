/** 编译器 */
/** 解析器
 * 基于根节点解析成语法树
 */

import React from 'react'
import {
  AttributeInterface,
  ComponentsInterface,
} from '../interface/components'

type ComponentAsType = {
  name: string
  type: string
  attr: AttributeInterface
  children: ComponentAsType[]
}

const componentsToAs = (component: ComponentsInterface): ComponentAsType => {
  const result: ComponentAsType = {
    name: component.name,
    type: component.type,
    attr: component.attribute,
    children: [],
  }
  if (!component.children.length) {
    return result
  }
  result.children = component.children.map(componentsToAs)
  return result
}
const createElement = (
  { type, name, attr }: ComponentAsType,
  children: React.ReactNode[] = []
): React.ReactNode => {
  console.log(attr)
  return React.createElement(type, { name, ...attr }, children)
}

const astToReactElement = (ast: ComponentAsType): React.ReactNode => {
  const child = ast.children
  const childrenNode = child.map(astToReactElement)
  return createElement(ast, childrenNode)
}

const compire = (rootComponent: ComponentsInterface) => {
  const _ast = componentsToAs(rootComponent)
  return astToReactElement(_ast)
}

export default compire
