import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon'
import {  } from 'react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
const toolItem = Symbol('toolItem')



interface ToolInterface {
  readonly name: string
  readonly icon: ForwardRefExoticComponent<Omit<AntdIconProps, 'ref'> & RefAttributes<HTMLSpanElement>>
  readonly target: string
}

class Tool implements ToolInterface {
  name: string
  target: string
  icon: ForwardRefExoticComponent<Omit<AntdIconProps, 'ref'> & RefAttributes<HTMLSpanElement>>
  [toolItem]: void = undefined

  constructor({ name, target, icon }: ToolInterface) {
    this.name = name
    this.target = target
    this.icon = icon
  }
   
}

export { Tool }
