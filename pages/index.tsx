import { PostFetched } from '../types/types'
import { Layout, FeaturedPosts, RecentPosts, Hero } from '../components'
import { getPosts } from '../services'

interface HomeProps {
  posts: PostFetched[]
}

const Home = ({ posts }: HomeProps) => {
  return (
    <Layout>
      <Hero />
      <FeaturedPosts />
      <RecentPosts posts={posts} />
    </Layout>
  )
}

export default Home

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
