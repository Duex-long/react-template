// platform创作的对象以单例模式保存，只需要在页面初始化后访问都是该对象
// 使用builder去完善内容

import { useState } from 'react'
import { BaseComponent, BaseContainerFactory } from './component'
import {
  ComponentFactoryInterface,
  ComponentsInterface,
} from './interface/components'

/**  单例类 */
class SignleRecordCreater {
  /** 名称*/
  name = 'Record'
  /**  模板类型 */
  type = 'default'
  /** 容器树 初始化根节点 */
  componentTree: ComponentsInterface
  /** 工厂收集器 */
  componentFactoryCollection: ComponentFactoryInterface[] = []

  constructor(options: { component: ComponentsInterface }) {
    this.componentTree = options.component
    // 多个工厂是否需要整合
    /** 实例化工厂 */
    this.componentFactoryCollection.push(new BaseContainerFactory())
  }
}

/** 构造实例化对象，实现单例模式 只进行一次创建*/
const CreateSignleRecord = (() => {
  const component = new BaseComponent({ name: 'root' })
  return () => component
})()

/** record实例 */
const useRecordTarget = () => {
  const component = CreateSignleRecord()
  const [signalInstance] = useState(new SignleRecordCreater({ component }))
  return signalInstance
}

/** 暴露声明类 由上下文选择性创建*/
export default SignleRecordCreater

export { CreateSignleRecord, useRecordTarget }
