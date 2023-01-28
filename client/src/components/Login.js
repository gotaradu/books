import { useState } from 'react'

const Login = (props) => {
  const [passErr, setpassErr] = useState(false)
  const handleLogin = (event) => {
    event.preventDefault()
  }
  return (
    <div className="flex-auto flex justify-center items-center  bg-gradient-radial from-verzisor to-back lg:container lg:w-auto   ">
      <form className="items-center">
        <div className="shadow-xl px-3 flex flex-col rounded-lg m-5 ">
          <label className="text-5xl flex-1 opacity-50 ">User</label>
          <input className="px-1 flex-1 w-4/5 rounded-lg  focus:border-verde border-4 mt-3 mb-3"></input>
        </div>
        <div className="shadow-xl px-3 flex flex-col rounded-lg m-4">
          <label className="text-5xl flex-1 opacity-50">Password</label>
          <p className="hidden">Incorrect pass</p>
          <input className="flex-1 w-4/5 px-3 m-1 rounded-lg focus:border-verde border-4 mt-3 mb-3 "></input>
        </div>
        <span className="text-6xl rounded-lg hover:bg-verde  block text-center">
          <a href="/" className="  leading-relaxed" onClick={handleLogin}>
            Login
          </a>
        </span>
      </form>
    </div>
  )
}

export default Login
