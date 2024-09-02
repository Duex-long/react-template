import { FC, useState } from 'react'
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

const CTCollspanNode: FC<{ children: JSX.Element }> = ({ children }) => {
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

const CTree = () => {
  return (
    <div className="c-tree">
      <CTCollspanNode>
        <CTreeNode />
        <CTreeNode />

        <CTCollspanNode>
          <CTreeNode />
          <CTreeNode />
        </CTCollspanNode>
      </CTCollspanNode>
      <CTreeNode />
    </div>
  )
}

export default CTree
