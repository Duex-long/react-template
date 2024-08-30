import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/less/index.less'
import 'normalize.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import Home from '@/pages/home/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
)
