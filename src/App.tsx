import React, { useState } from 'react'
import './App.less'

const App: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [Component, setComponent] = useState(undefined)

  return <>{children}</>
}

export default App
