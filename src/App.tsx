import React, { lazy, useCallback, useRef, useState } from 'react'
import './App.less'
import debounce from '@/utils/decorator/debounce'

import VConsole from 'vconsole'
import Eaxmple from './components/test'
// new VConsole
// 不实例化vconsole的时候包是195kb
// 实例化后是 504.56
// 使用asyncImport后[import('module')]实现了分包效果
// 把vconsole单独打成一个包
// 并且可以在click的时候单独加载
const asyncImport = () => {
  import('vconsole').then((e) => {
    console.log(e)
    new e.default()
  })
}

// lazy 实现按需引入
const ComponentsLazy = lazy(() => import('./components/test'))

const App: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [Component, setComponent] = useState(undefined)

  // const asyncImportComponent = () => {
  //   // import('./components/test').then(e => {
  //   //   console.log('default前')
  //   //   console.log(e.default)
  //   //   setComponent(e.default())
  //   //   console.log('default后')
  //   // })
  //   // 设置lazyComp
  //   setComponent(ComponentsLazy)
  // }
  // const excuel = () => {
  //   console.log('执行前')
  //   console.log(Component)
  //   return Component._init()
  // }
  return (
    <div>
      {/* <Eaxmple/> */}
      {/* {Component ? excuel() : ''} */}
      
      {/* <button onClick={asyncImportComponent}>Btn</button> */}
      <button onClick={asyncImport}>BtnConsole</button>
      {children}
    </div>
  )
}

export default App
