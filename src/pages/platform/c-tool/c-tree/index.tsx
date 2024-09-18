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
import { useComponentTarget, useRecordTarget } from '../../core'
import { useDispatch } from 'react-redux'

/** 节点 */
const CTreeNode: FC<{ level: number; node: ComponentsInterface }> = ({
  level,
  node,
}) => {
  const dispach = useDispatch()
  const currentComponent = useComponentTarget()

  const nodeSelect = (node: ComponentsInterface) => {
    dispach({
      type: 'platform/updateSelectTarget',
      payload: node,
    })
  }
  const memoryStyle = useMemo<CSSProperties>(
    () => ({
      marginLeft: `-${level * 2}rem`,
      paddingLeft: `${level * 2}rem`,
    }),
    [level]
  )

  return (
    <div
      className={joinCssList([
        'c-tree-node',
        currentComponent == node ? 'active' : '',
      ])}
      style={memoryStyle}
      onClick={() => nodeSelect(node)}
    >
      <div className="c-tree-node-icon">
        <GatewayOutlined />
      </div>
      <div className="c-tree-node-label">{node.name}</div>
    </div>
  )
}
/** 含有子节点的节点*/
const CTCollspanNode: FC<{
  level: number
  children: ReactNode
  node: ComponentsInterface
}> = ({ children, level, node }) => {
  const [collspanState, setCollspanState] = useState(true)
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
  const hasChildren = item.children && item.children.length >= 1
  if (hasChildren) {
    return (
      <CTCollspanNode node={item} level={level} key={item.id}>
        {item.children.map((item) => CtTreeRenderMap(item, level))}
      </CTCollspanNode>
    )
  } else {
    return <CTreeNode level={level} node={item} key={item.id} />
  }
}
/**树 */
const CTree = () => {
  const record = useRecordTarget()
  return (
    <div className="c-tree c-tool-content-item">
      {CtTreeRenderMap(record.componentRoot)}
    </div>
  )
}

export default CTree
