import {
  CSSProperties,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react'
import './index.less'
import { GatewayOutlined, RightOutlined } from '@ant-design/icons'
import { joinCssList } from '@/utils/style'
import { ComponentsInterface } from '../../core/interface/components'
import { useRecordTarget } from '../../core'

const CTreeNode: FC<{ level: number; node: ComponentsInterface }> = ({
  level,
  node,
}) => {
  const memoryStyle = useMemo<CSSProperties>(
    () => ({
      marginLeft: `-${level * 2}rem`,
      paddingLeft: `${level * 2}rem`,
    }),
    [level]
  )

  return (
    <div className="c-tree-node" style={memoryStyle}>
      <div className="c-tree-node-icon">
        <GatewayOutlined />
      </div>
      <div className="c-tree-node-label">{node.name}</div>
    </div>
  )
}

const CTCollspanNode: FC<{
  level: number
  children: ReactNode
  node: ComponentsInterface
}> = ({ children, level, node }) => {
  const [collspanState, setCollspanState] = useState(false)
  const childRender = useCallback(
    () => <div className="c-tree-collspan-children"> {children}</div>,
    [children, collspanState]
  )
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
      <CTreeNode node={node} level={level} />
      {collspanState ? childRender() : undefined}
    </div>
  )
}

// render嵌套列表
const CtTreeRenderMap = (item: ComponentsInterface, level = 0) => {
  level = level + 1
  const hasChildren = item.children && item.children.length > 1
  if (hasChildren) {
    return (
      <CTCollspanNode node={item} level={level} key={item.name}>
        {item.children.map((item) => CtTreeRenderMap(item, level))}
      </CTCollspanNode>
    )
  } else {
    return <CTreeNode level={level} node={item} key={item.name} />
  }
}

// const MockComponent  = [
//   {
//     name: 'component-1',
//     children: [
//       {
//         name: 'component-1-1',
//         children: [],
//       },
//       {
//         name: 'component-1-2',
//         children: [
//           {
//             name: 'component-1-2-1',
//             children: [],
//           },
//           {
//             name: 'component-1-2-2',
//             children: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'component-2',
//     children: [
//       {
//         name: 'component-2-1',
//         children: [
//           {
//             name: 'component-2-1-1',
//             children: [],
//           },
//           {
//             name: 'component-2-1-2',
//             children: [],
//           },
//         ],
//       },
//       {
//         name: 'component-2-2',
//         children: [],
//       },
//     ],
//   },
// ]

const CTree = () => {
  const  record = useRecordTarget()
  return (
    <div className="c-tree c-tool-content-item">
      {CtTreeRenderMap(record.componentTree)}
    </div>
  )
}

export default CTree
