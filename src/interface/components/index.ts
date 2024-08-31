/** 样式*/
interface StyleInterface {
  [key: string]: string
}
/** 属性 */
interface AttributeInterface {
  /** 目前仅支持css */
  css: Array<StyleInterface>
}

/** 容器 */
interface ComponentsInterface {
  /** 属性 */
  attribute: AttributeInterface
  /** 子节点 */
  children?: Array<ComponentsInterface>
}
