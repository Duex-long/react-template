import { AttributeInterface, StyleInterface } from '../interface/components'

// class StylePrototype implements StyleInterface {
//     constructor(css:{[x:string]:string | number}) {
//         this.css = css
//     }
// }

/**基础样式 */
const baseStyle:StyleInterface = {
  height: '1920px',
  width: '1080px',
  fontSize: '14px',
  lineHeight:'16px'
}
/** 属性 */
class Attribute implements AttributeInterface {
  /** 保存css */
  style = baseStyle
  updateCss(style: StyleInterface) {
    this.style = style
  }
}

export default Attribute
