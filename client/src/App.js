import { useEffect, useState } from 'react'
import Login from './components/Login'
import LayoutLogin from './Layout/LayoutLogin'

import owl from './photo/owl-12.png'
const user = {
  username: '',
  lastBookRead: '',
  age: '',
  date: Date.now(),
}
function App() {
  const [users, setUsers] = useState([])
  const [userName, setUserName] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:4000/api')

  //     if (!response.ok) {
  //       console.log('error')
  //     } else {
  //       const resData = await response.json()
  //       setUsers(resData)
  //       console.log(resData)
  //       return resData
  //     }
  //   }
  //   fetchData()
  // }, [])
  // console.log(user)
  console.log('reloaded')
  const fetchUserHandler = async () => {
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    console.log(response)

    return response
  }

  return (
    <div>
      <button onClick={fetchUserHandler} className="bg-verde h-30 w-30">
        LOGIN
      </button>
      <nav className="bg-verde">
        <h1 className="text-6xl text-center "> Welcome Back</h1>
      </nav>
      {users.map((user) => (
        <p>{user}</p>
      ))}
      <button onClick={fetchUserHandler} className="bg-verde"></button>
      <LayoutLogin>
        <div className=" hidden lg:block">
          <img src={owl} className="object-contain max-h-screen w-3/4 "></img>
        </div>
        <Login fetchUserhandler={fetchUserHandler} />
      </LayoutLogin>
    </div>
  )
}

export default App
