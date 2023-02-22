import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import PostsList from '../components/PostsList'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default HomePage
// useEffect(() => {
//   const isAuth = localStorage.getItem('token')
//   if (isAuth) navigate('/posts')
//   else navigate('/login')
// }, [])

// const navigate = useNavigate('/')
// const logoutHandler = () => {
//   localStorage.removeItem('token')
//   navigate('/login')
// }
