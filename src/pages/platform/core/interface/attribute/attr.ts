import { StyleInterface } from './style'

/** AttrItem类型 */
type AttrItemType = { [x: string]: string | number }
/** 属性 */
interface AttributeInterface {
  /** 目前仅支持css */
  style: StyleInterface

  /** method */
  updateCss: (style: StyleInterface) => void
}

export type { AttrItemType, AttributeInterface }
