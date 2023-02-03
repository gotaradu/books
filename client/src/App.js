import Login from './components/Login'
import LayoutLogin from './Layout/LayoutLogin'

import owl from './photo/owl-12.png'

function App() {
  console.log('reloaded')

  return (
    <div>
      <nav className="bg-verde">
        <h1 className="text-6xl text-center ">Welcome</h1>
      </nav>

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
    </div>
  )
}

export default App
