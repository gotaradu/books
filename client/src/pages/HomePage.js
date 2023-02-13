import { useNavigate } from 'react-router'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    const isAuth = localStorage.getItem('token')
    if (isAuth) navigate('/posts')
    else navigate('/login')
  }, [])

  const navigate = useNavigate()
  const logoutHandler = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={logoutHandler} style={{ backgroundColor: 'red' }}>
        Logout
      </button>
    </div>
  )
}

export default HomePage
