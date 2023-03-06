import { useNavigate } from 'react-router'
const dummy_posts = [
  {
    titlu: 'titlu1',
    semi_descriere: 'semi_descriere',
    wrote_by: 'user1',
    date: new Date(),
    likes: 0,
    comments: 0,
  },
]
const PostsList = () => {
  const navigate = useNavigate('/')
  const logoutHandler = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  if (!localStorage.getItem('token')) {
    // check if token is made with secret key
    return <p>Unauth</p>
  }

  // make request to get posts
  return (
    <div>
      <h1>Posts </h1>
      <ul>
        {dummy_posts.map((item) => (
          <li>
            <div>{item.titlu}</div>
            <div>{item.date.toDateString()}</div>
            <label>{item.likes}</label>
          </li>
        ))}
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
