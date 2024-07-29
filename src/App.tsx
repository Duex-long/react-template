import React, { useCallback, useRef, useState } from 'react'
import './App.less'
import debounce from '@/utils/decorator/debounce'
import { PageChangeContext } from '@/utils/context/navigatorContext'
import { FuncType } from '@/utils/type'

const App: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [transitions, _setTransitionsState] = useState(false)
  const pageChangeQueue = useRef<Array<FuncType>>([])
  const setTransitionsState = useCallback(
    debounce<typeof _setTransitionsState>(_setTransitionsState),
    []
  )

  const pageChange = (state: boolean, callBack: FuncType) => {
    setTransitionsState(state)
    callBack && pageChangeQueue.current.push(callBack)
  }

  const animationEndHandler = () => {
    _setTransitionsState(false)
    const queue = pageChangeQueue.current
    while (queue.length) {
      const _callBack = queue[0]
      _callBack && _callBack()
      queue.shift()
    }
  }
  return (
    <PageChangeContext.Provider value={{ pageChange }}>
      {children}
    </PageChangeContext.Provider>
  )
}

export default App
