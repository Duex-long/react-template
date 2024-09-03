import { FC, ReactNode, useState } from 'react'
import './index.less'
import { GatewayOutlined, RightOutlined } from '@ant-design/icons'
import { joinCssList } from '@/utils/style'

const CTreeNode: FC = () => {
  return (
    <div className="c-tree-node">
      <div className="c-tree-node-icon">
        <GatewayOutlined />
      </div>
      <div className="c-tree-node-label">Label</div>
    </div>
  )
}

const CTCollspanNode: FC<{ children: ReactNode }> = ({ children }) => {
  const [collspanState, setCollspanState] = useState(false)
  return (
    <div
      className={joinCssList([
        'c-tree-collspan',
        `${collspanState ? 'expand' : ''}`,
      ])}
    >
      <div
        className="c-tree-collspan-icon"
        onClick={() => setCollspanState(!collspanState)}
      >
        <RightOutlined rotate={collspanState ? 90 : 0} />
      </div>
      <CTreeNode />
      <div className="c-tree-collspan-children"> {children}</div>
    </div>
  )
}

// render嵌套列表
const CtTreeRenderMap = (item: { children: any[] }) => {
  const hasChildren = item.children && item.children.length > 1
  if (hasChildren) {
    return <CTCollspanNode>{item.children.map(CtTreeRenderMap)}</CTCollspanNode>
  } else {
    return <CTreeNode />
  }
}

const MockComponent = [
  {
    name: 'component-1',
    children: [
      {
        name: 'component-1-1',
        children: [],
      },
      {
        name: 'component-1-2',
        children: [
          {
            name: 'component-1-2-1',
            children: [],
          },
          {
            name: 'component-1-2-2',
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: 'component-2',
    children: [
      {
        name: 'component-2-1',
        children: [
          {
            name: 'component-2-1-1',
            children: [],
          },
          {
            name: 'component-2-1-2',
            children: [],
          },
        ],
      },
      {
        name: 'component-2-2',
        children: [],
      },
    ],
  },
]

const CTree = () => {
  return (
    <div className="c-tree">
      {/* <CTCollspanNode>
        <CTreeNode />
        <CTreeNode />

        <CTCollspanNode>
          <CTreeNode />
          <CTreeNode />
        </CTCollspanNode>
      </CTCollspanNode>
      <CTreeNode /> */}
          {
              MockComponent.map(CtTreeRenderMap)
      }
    </div>
  )
}

export default CTree
