import { AttributeInterface, StyleInterface } from '../interface/components'

// class StylePrototype implements StyleInterface {
//     constructor(css:{[x:string]:string | number}) {
//         this.css = css
//     }
// }

/** 属性 */
class Attribute implements AttributeInterface {
  /** 保存css */
  css = {}
  updateCss(style: StyleInterface) {
    this.css = style
  }
}

export default Attribute
