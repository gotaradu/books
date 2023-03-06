import AddPost from '../components/AddPost'
import Header from '../components/Header'
import PostsList from '../components/PostsList'
const PostsPage = () => {
  // add post section if logged in
  return (
    <>
      <Header />
      <AddPost />
      <PostsList />
    </>
  )
}

export default PostsPage
