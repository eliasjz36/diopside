import Link from 'next/link'
import Image from 'next/image'

import moment from 'moment'

import { Post } from '../../types/types'
import graphCMSImageLoader from '../../utils/graphCMSImageLoader'

interface AdjacentPostCardProps {
  post: Post
  position: 'left' | 'right'
}

const AdjacentPostCard = ({ post, position }: AdjacentPostCardProps) => {
  return (
    <div className="h-full overflow-hidden rounded-3xl border-[1px] border-gray-200 transition-all hover:scale-105 dark:border-base-100">
      <div className="card h-full object-cover md:card-side">
        <div
          className={`relative inline-block min-h-[200px] md:w-64 lg:h-52 ${
            position === 'right' && 'lg:order-2'
          }`}
        >
          <Image
            unoptimized
            loader={graphCMSImageLoader}
            src={post.featuredImage.url}
            alt={post.title}
            className="h-full w-full object-cover"
            layout="fill"
          />
        </div>

        <div
          className={`card-body flex-grow-[999] basis-0 justify-between p-5 ${
            position === 'right' ? 'lg:text-right' : 'text-left'
          }`}
        >
          <p className="mb-4 flex-grow-0 text-sm text-gray-500 dark:text-gray-300 lg:text-lg">
            {position === 'right' ? 'Next' : 'Previous'} article
          </p>

          <Link href={`/post/${post.slug}`} passHref>
            <a className="link-hover link-accent">
              <h4
                className={`text-lg font-bold text-dark dark:text-gray-100 xl:text-2xl ${
                  position === 'right' ? 'lg:text-right' : 'text-left'
                }`}
              >
                {post.title}
              </h4>
            </a>
          </Link>

          <div className="lg:text-md mt-2 text-sm text-gray-500 dark:text-gray-300">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {moment(post.createdAt).format('MMM DD, YYYY')} • 4 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdjacentPostCard
