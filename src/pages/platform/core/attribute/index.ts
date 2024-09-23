import { AttributeInterface, StyleInterface } from '../interface/components'

// class StylePrototype implements StyleInterface {
//     constructor(css:{[x:string]:string | number}) {
//         this.css = css
//     }
// }

/**基础样式 */
const baseStyle: StyleInterface = {
  height: '100%',
  width: '100%',
  fontSize: '14px',
  lineHeight: '16px',
}
/** 属性 */
class Attribute implements AttributeInterface {
  /** 保存css */
  style = baseStyle
  updateCss(style: StyleInterface) {
    this.style = {
      ...baseStyle,
      ...style,
    }
  }
}

export default Attribute
