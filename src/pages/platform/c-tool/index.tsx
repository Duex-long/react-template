import './index.less'
import { FC, useState } from 'react'
import { Tool } from './type'
import CTree from './c-tree'
import { ApartmentOutlined, FormatPainterOutlined } from '@ant-design/icons'
import { joinCssList } from '@/utils/style'
import CCreate from './c-create'

type ToolItemInject = {
  toolItem: Tool
}

const componentToolConfig = [
  {
    name: 'Tree',
    target: 'tree',
    icon: ApartmentOutlined,
  },
  {
    name: 'Create',
    target: 'Create',
    icon: FormatPainterOutlined,
  },
]

const componentMap: { [x: string]: () => JSX.Element } = {
  ['tree']: CTree,
  ['create']: CCreate,
}

const toolsList = componentToolConfig.map((item) => new Tool(item))

/** 选项工具内容 */
const ToolsMapRender: FC<ToolItemInject> = ({ toolItem }) => {
  const targetActive = toolItem.target.toLocaleLowerCase()

  return Object.keys(componentMap).map((toolElementKey) => {
    const _ToolElement = componentMap[toolElementKey]
    return (
      <div
        className={joinCssList([
          'tools-map-render',
          targetActive != toolElementKey ? 'hidden' : '',
        ])}
      >
        <_ToolElement />
      </div>
    )
  })
}
/** 选项工具信息 */

const ComponentInfoRender: FC<ToolItemInject> = ({ toolItem }) => {
  return (
    <div className="c-tool-content-info">
      <h2 className="c-tool-content-info-title app-title-h2">
        {toolItem.name}
      </h2>
    </div>
  )
}

const CTool = () => {
  /** 当前tab */
  const [contentTarget, setContentTarget] = useState(toolsList[0])

  return (
    <div className="c-tool">
      <div className="c-tool-list">
        {toolsList.map((item) => (
          <div
            key={item.name}
            className={joinCssList([
              'c-tool-list-item',
              `${item.target == contentTarget.target ? 'active' : ''}`,
            ])}
            onClick={() => setContentTarget(item)}
          >
            <item.icon />
          </div>
        ))}
      </div>
      <div className="c-tool-content">
        <ComponentInfoRender toolItem={contentTarget} />
        <ToolsMapRender toolItem={contentTarget} />
      </div>
    </div>
  )
}

export default CTool
