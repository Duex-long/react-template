import React, { lazy, useCallback, useRef, useState } from 'react'
import './App.less'

const App: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [Component, setComponent] = useState(undefined)

  return <div>{children}</div>
}

export default App
