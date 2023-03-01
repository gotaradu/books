import React, { useMemo, useState } from 'react'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { createContext } from 'react'
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  { path: '/', element: <HomePage /> },
])
const initialState = { user: null, setUsers: (user) => {} }
export const AuthContext = createContext(initialState)

function App() {
  const [user, setUser] = useState('')

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser],
  )

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <AuthContext.Provider value={contextValue}>
          <LoginPage />
          <HomePage />
        </AuthContext.Provider>
      </RouterProvider>
    </React.StrictMode>
  )
}

export default App
