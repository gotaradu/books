import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../App'

const Header = () => {
  const { user, setUser } = useContext(AuthContext)
  console.log(user)
  return (
    <>
      <nav className="flex bg-verde fixed w-screen justify-around h-24 text-center items-center">
        <Link to="/">Home</Link>
        <Link to="#">About</Link>
        <div>Github</div>
        <div>Linkedin</div>
        <Link to="/login">Login</Link>
      </nav>
      <div className="h-screen">salut</div>
      <div className="h-screen">Pa</div>
    </>
  )
}

export default Header
