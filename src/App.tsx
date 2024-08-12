import React, { useCallback, useRef, useState } from 'react'
import './App.less'
import debounce from '@/utils/decorator/debounce'


const App: React.FC<{ children: JSX.Element }> = ({ children }) => {
 
  return (
    <div>
      {children}
    </div>
  )
}

export default App
