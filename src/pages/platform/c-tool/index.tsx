import './index.less'
import { useState } from 'react'
import { Tool } from './type'
import CTree from '../c-tree'
import { ApartmentOutlined, FormatPainterOutlined } from '@ant-design/icons'
import { joinCssList } from '@/utils/style'
const componentToolConfig = [
  {
    name: 'Tree',
    target: 'tree',
    icon: ApartmentOutlined,
  },
  {
    name: 'Component',
    target: 'Component',
    icon: FormatPainterOutlined,
  },
]

const componentMap: { [x: string]: () => JSX.Element } = {
  ['tree']: CTree,
}

const toolsList = componentToolConfig.map((item) => new Tool(item))

const ComponentMapRender = (target: string) => {
  const Component = componentMap[target.toLocaleLowerCase()]
  return <>{Component && Component()}</>
}

const CTool = () => {
  const [contentTarget, setContentTarget] = useState(
    componentToolConfig[0].target
  )

  return (
    <div className="c-tool">
      <div className="c-tool-list">
        {toolsList.map((item) => (
          <div
            className={joinCssList([
              'c-tool-list-item',
              `${item.target == contentTarget ? 'active' : ''}`,
            ])}
            onClick={() => setContentTarget(item.target)}
          >
            <item.icon />
          </div>
        ))}
      </div>
      <div className="c-tool-content">{ComponentMapRender(contentTarget)}</div>
    </div>
  )
}

export default CTool
