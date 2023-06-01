import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from '@/pages/login/Index'
import Main from '@/pages/main/Index'
import Article from '@/pages/main/Article/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />}>
        <Route index path="" element={<Navigate to="article" />}></Route>
        <Route path="article" element={<Article />} />
        <Route path="*" element={<Navigate to="article" />}></Route>
      </Route>
    </Routes>
  )
}

export default App
