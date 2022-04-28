import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import moment from 'moment'

import { getSimilarPosts, getRecentPosts } from '../services'
import { Post } from '../types/types'
import graphCMSImageLoader from '../utils/graphCMSImageLoader'

interface SimilarPostsProps {
  categories: string[]
  slug: string
}

const SimilarPosts = ({ categories, slug }: SimilarPostsProps) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug, categories])

  return (
    <div className="mx-auto mt-44 max-w-[1200px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <h3 className="mb-9 text-center text-xl font-bold text-dark dark:text-skin">
          You might also like
        </h3>
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {relatedPosts.map((post, index) => (
            <article
              className="card w-64 px-2 transition-all hover:scale-95"
              key={post.title + index}
            >
              <Link href="/post/best-npm-packages">
                <a className="mb-6 overflow-hidden">
                  <div className="relative inline-block h-40 w-full lg:h-40">
                    <Image
                      unoptimized
                      loader={graphCMSImageLoader}
                      src={post.featuredImage.url}
                      alt={post.title}
                      className="rounded-3xl"
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>

              <div className="card-body w-full p-0 text-sm dark:text-skin">
                <Link href={`/post/${post.slug}`}>
                  <a className="link-hover link-accent">
                    <h4 className="card-title text-dark dark:text-skin">
                      {post.title}
                    </h4>
                  </a>
                </Link>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {moment(post.createdAt).format('MMM DD, YYYY')} • 4 min read
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimilarPosts
