import { useEffect, useState } from 'react'
import Login from './components/Login'
import LayoutLogin from './Layout/LayoutLogin'
import owl from './photo/owl-12.png'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api')

      if (!response.ok) {
        console.log('error')
      } else {
        const resData = await response.json()
        setUsers(resData)
        console.log(resData)
        return resData
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <nav className="bg-verde">
        <h1 className="text-6xl text-center "> Welcome Back</h1>
      </nav>
      {users.map((user) => (
        <p>{user}</p>
      ))}

      <LayoutLogin>
        <div className=" hidden lg:block">
          <img src={owl} className="object-contain max-h-screen w-3/4 "></img>
        </div>
        <Login />
      </LayoutLogin>
    </div>
  )
}

export default App
