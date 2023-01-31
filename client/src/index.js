import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
  ReactQueryDevTools,
} from 'react-query'
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
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <App />
        <ReactQueryDevTools initialIsOpen={false} />
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
