import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import PostsPage from './pages/PostsPage'

import RegisterPage from './pages/RegisterPage'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <App />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  { path: '/', element: <div>Home page</div> },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
