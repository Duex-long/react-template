import { scaleText } from '@/utils/style'
import './index.less'
import { FC, ReactNode, useEffect, useRef } from 'react'

const ScaleTextRender: FC<{ children: ReactNode }> = ({ children }) => {
  const textRef = useRef < HTMLElement | null >(null)
  useEffect(() => {
    if (textRef.current) {
      scaleText(textRef.current)
    }
  },[children])
  return (
    <div className="scale-text">
      <span ref={textRef}>{children}</span>
    </div>
  )
}

export default ScaleTextRender
