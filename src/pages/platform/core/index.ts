// platform创作的对象以单例模式保存，只需要在页面初始化后访问都是该对象
// 使用builder去完善内容

import { BaseComponent, BaseContainerFactory, RootComponent } from './component'
import {
  ComponentFactoryInterface,
  ComponentsInterface,
} from './interface/components'
import { useSelector } from 'react-redux'

/**  单例类 */
class SignleRecordCreater {
  /** 名称*/
  name = 'Record'
  /**  模板类型 */
  type = 'default'
  /** 容器树 初始化根节点 */
  componentRoot: ComponentsInterface
  /** 工厂收集器 */
  componentFactoryCollection: ComponentFactoryInterface[] = []

  constructor(options: { component: ComponentsInterface }) {
    this.componentRoot = options.component
    /** 实例化工厂 */
    this.componentFactoryCollection.push(new BaseContainerFactory())
  }
}

/** 构造实例化对象，实现单例模式 只进行一次创建*/
const CreateSignleRecord = (() => {
  const component = new RootComponent({ name: 'root' })
  return () => component
})()

/** 初始化 */
const init = () => {
  const SignleRecordInstance = new SignleRecordCreater({
    component: CreateSignleRecord(),
  })
  return SignleRecordInstance
}

const SignleRecordInstance = init()

/** record实例 */
const useRecordTarget = (): SignleRecordCreater => {
  return useSelector<{
    platform: { record: SignleRecordCreater }
  }>((state) => state.platform.record) as SignleRecordCreater
}

/** target实例 */
const useComponentTarget = (): ComponentsInterface => {
  return useSelector<{
    platform: { target: ComponentsInterface }
  }>((state) => state.platform.target) as ComponentsInterface
}

/** 暴露声明类 由上下文选择性创建*/
export default SignleRecordCreater

export {
  CreateSignleRecord,
  useRecordTarget,
  useComponentTarget,
  SignleRecordInstance,
}
