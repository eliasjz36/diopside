import Image from 'next/image'
import Link from 'next/link'

import moment from 'moment'

import { Post } from '../types/types'
import graphCMSImageLoader from '../utils/graphCMSImageLoader'

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="card max-w-full bg-transparent transition-all hover:scale-95 lg:w-96">
      <div className="relative inline-block h-60 w-full lg:h-64">
        <Image
          unoptimized
          loader={graphCMSImageLoader}
          src={post.featuredImage.url}
          alt={post.title}
          className="rounded-3xl"
          layout="fill"
        />
      </div>
      <div className="card-body px-0 py-8 text-skin">
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

        <Link href={`/post/${post.slug}`} passHref>
          <a className="link-hover link-accent">
            <h2 className="xs:text-3xl card-title text-2xl font-bold text-dark dark:text-gray-100">
              {post.title}
            </h2>
          </a>
        </Link>

        <p className="text-dark dark:text-gray-100">{post.excerpt}</p>
        <div className="mt-5 flex items-center">
          <div className="mr-3 aspect-square w-10 overflow-hidden rounded-full">
            <div className="relative inline-block h-full w-full">
              <Image
                unoptimized
                loader={graphCMSImageLoader}
                src={post.author.photo.url}
                alt={post.author.name}
                className="rounded-3xl"
                layout="fill"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center overflow-hidden">
            <div>
              <h3 className="text-sm font-bold text-dark dark:text-gray-100">
                {post.author.name}
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {moment(post.createdAt).format('MMM DD, YYYY')} • 4 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostCard
