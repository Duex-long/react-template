import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from '@/pages/login/Index'
import Main from '@/pages/main/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />}></Route>
    </Routes>
  )
}

export default App
