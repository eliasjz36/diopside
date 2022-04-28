import { PostFetched } from '../types/types'
import PostCard from './PostCard'

interface RecentPostsProps {
  posts: PostFetched[]
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <div className="container mx-auto mb-8">
      <h2 className="mb-8 text-2xl font-bold text-dark dark:text-skin">
        Most recent posts
      </h2>

      <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard post={post.node} key={post.node.slug} />
        ))}
      </div>
    </div>
  )
}

export default RecentPosts
