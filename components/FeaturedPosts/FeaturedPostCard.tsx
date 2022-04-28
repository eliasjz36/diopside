import Link from 'next/link'

import { Post } from '../../types/types'

interface FeaturedPostCardProps {
  post: Post
}

const FeaturedPostCard = ({ post }: FeaturedPostCardProps) => {
  return (
    <article className="card mb-10 grid grid-cols-1 bg-transparent transition-all hover:scale-95 md:card-side md:grid-cols-2">
      <figure>
        <img
          className="rounded-3xl"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </figure>
      <div className="card-body px-0 text-gray-700 md:py-0 md:px-4">
        <div className="card-actions mb-5 justify-start">
          {post.categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              passHref
              key={category.slug}
            >
              <a className="rounded-3xl border-2 border-indigo-600 px-4 py-1 text-sm font-semibold text-dark first:border-pink-600 last:border-green-600 hover:bg-indigo-600 hover:text-gray-100 first:hover:bg-pink-600 last:hover:bg-green-600 dark:text-gray-100">
                {category.name}
              </a>
            </Link>
          ))}
        </div>

        <Link href={`post/${post.slug}`} passHref>
          <a className="link-hover link-accent">
            <h2 className="xs:text-3xl card-title text-2xl font-bold text-dark dark:text-gray-100">
              {post.title}
            </h2>
          </a>
        </Link>
      </div>
    </article>
  )
}

export default FeaturedPostCard
