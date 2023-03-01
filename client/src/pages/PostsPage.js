import Header from '../components/Header'

const { default: PostsList } = require('../components/PostsList')

const PostsPage = () => {
  return (
    <>
      <Header />
      <PostsList />
    </>
  )
}

export default PostsPage
