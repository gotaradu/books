import { useNavigate } from 'react-router'

const PostsList = ({ posts }) => {
  const navigate = useNavigate('/')
  const logoutHandler = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div>
      <h1>Posts </h1>
      <ul>
        <li>post1</li>
        <li>post1</li>
        <li>post1</li>
        <li>post1</li>
        <li>post1</li>
      </ul>
      <button style={{ backgroundColor: 'red' }} onClick={logoutHandler}>
        Logout
      </button>
    </div>
  )
}

export default PostsList
