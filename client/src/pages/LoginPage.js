import Login from '../components/Login'
import LayoutLogin from '../Layout/LayoutLogin'

import owl from '../photo/owl-12.png'
const LoginPage = () => {
  return (
    <LayoutLogin>
      <div className=" hidden lg:block">
        <img
          src={owl}
          className="object-contain max-h-screen w-3/4 "
          alt="img"
        ></img>
      </div>
      <Login />
    </LayoutLogin>
  )
}

export default LoginPage
