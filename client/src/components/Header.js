import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const style = {
  navItems:
    'p-5 text-opacity-60 hover:bg-emerald-900 max-md:text-xs max-md:w-0 max-md:p-0 flex-1',
}
const Header = () => {
  const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState('')
  useEffect(() => {
    setIsAuth(localStorage.getItem('token'))
  }, [])
  const logoutHandler = (event) => {
    event.preventDefault()
    localStorage.removeItem('token')
    setIsAuth('')
    navigate('/')
  }
  return (
    <>
      <nav className="flex bg-verde w-full justify-around h-24 text-center items-center max-md:text-xs max-md:p-0 max-md:h-16 max-md:m-0 ">
        <Link to="/" className={style.navItems}>
          Home
        </Link>
        <Link to="/posts" className={style.navItems}>
          Posts
        </Link>
        <div className={style.navItems}>Github</div>
        <div className={style.navItems}>Linkedin</div>
        {isAuth ? (
          <button className={style.navItems} onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Link to={'/login'} className={style.navItems}>
            Login
          </Link>
        )}
      </nav>
    </>
  )
}

export default Header
