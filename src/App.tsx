import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import './App.less'

const App: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const count = useSelector<{ index: { count: number } }>(
    (state) => state.index.count
  )

  return <>{children}</>
}

export default App
