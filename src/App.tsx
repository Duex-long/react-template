import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from '@/pages/login/Index'
import Main from '@/pages/main/Index'
import Article from '@/pages/main/Article/Index'
import getPermissionRoutes from '@/router'

function App() {
  const [count, setCount] = useState(0)

  const routes = getPermissionRoutes()
  return (
    <Routes>
      {routes.map(item => (
        <Route
          path={item.path}
          element={item.redirect ? <Navigate to={item.redirect} /> : <item.component />}
        />
      ))}
    </Routes>
  )
}

export default App
