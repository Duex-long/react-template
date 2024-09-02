import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/less/index.less'
import 'normalize.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '@/App.tsx'
import Home from '@/pages/home/index.tsx'
import Platform from './pages/platform'
import { Provider } from 'react-redux'
import Store from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/platform',
    element: <Platform />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App>
        <RouterProvider router={router} />
      </App>
    </Provider>
  </React.StrictMode>
)
