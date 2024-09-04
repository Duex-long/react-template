// platform创作的对象以单例模式保存，只需要在页面初始化后访问都是该对象
// 使用builder去完善内容

import { useState } from 'react'
import {
  AttributeInterface,
  ComponentConstructorParamsInterface,
  ComponentsInterface,
} from './interface/components'

class Component implements ComponentsInterface {
  readonly name: string
  attribute: AttributeInterface = {}
  children?: Array<ComponentsInterface> = []
  constructor({ name }: ComponentConstructorParamsInterface) {
    this.name = name
  }
}

class SignleRecordCreater {
  /**  模板类型 */
  type = 'default'
  /** 容器树 初始化根节点 */
  componentTree: Component
  /** 名称*/
  name = 'Record'
  constructor(options: { component: Component }) {
    this.componentTree = options.component
  }
}

const CreateSignleRecord = (() => {
  const component = new Component({ name: 'root' })
  return () => component
})()

const useRecordTarget = () => {
  const component = CreateSignleRecord()
  const [signalInstance] = useState(new SignleRecordCreater({ component }))
  return signalInstance
}
/** */

/** 暴露声明类 由上下文选择性创建*/
export default SignleRecordCreater

export { Component, CreateSignleRecord, useRecordTarget }
