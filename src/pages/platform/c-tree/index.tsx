import { CSSProperties, FC, ReactNode, useMemo, useState } from 'react'
import './index.less'
import { GatewayOutlined, RightOutlined } from '@ant-design/icons'
import { joinCssList } from '@/utils/style'

const CTreeNode: FC<{ level: number }> = ({ level }) => {
  const memoryStyle = useMemo<CSSProperties>(
    () => ({
      marginLeft: `-${level * 2}rem`,
      paddingLeft: `${level *2}rem`,
    }),
    [level]
  )

  return (
    <div className="c-tree-node" style={memoryStyle}>
      <div className="c-tree-node-icon">
        <GatewayOutlined />
      </div>
      <div className="c-tree-node-label">Label</div>
    </div>
  )
}

const CTCollspanNode: FC<{ level: number; children: ReactNode }> = ({
  children,
  level,
}) => {


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
      <CTreeNode level={level} />
      <div className="c-tree-collspan-children"> {children}</div>
    </div>
  )
}

// render嵌套列表
const CtTreeRenderMap = (item: { children: any[] }, level = 0) => {
  level = level + 1
  const hasChildren = item.children && item.children.length > 1
  if (hasChildren) {
    return (
      <CTCollspanNode level={level}>
        {item.children.map((item) => CtTreeRenderMap(item, level))}
      </CTCollspanNode>
    )
  } else {
    return <CTreeNode level={level} />
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
  return <div className="c-tree">{MockComponent.map(CtTreeRenderMap)}</div>
}

export default CTree
