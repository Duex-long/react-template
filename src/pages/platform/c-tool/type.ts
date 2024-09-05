import { IconType } from '../core/type'
const toolItem = Symbol('toolItem')

/** 业务层面 */
interface ToolInterface {
  readonly name: string
  readonly icon: IconType
  readonly target: string
}

class Tool implements ToolInterface {
  name: string
  target: string
  icon: IconType
  [toolItem]: void = undefined

  constructor({ name, target, icon }: ToolInterface) {
    this.name = name
    this.target = target
    this.icon = icon
  }
   
}

export { Tool }
