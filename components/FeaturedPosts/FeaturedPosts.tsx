import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import moment from 'moment'

import { Post } from '../../types/types'
import { getFeaturedPosts } from '../../services/index'
import FeaturedPostCard from './FeaturedPostCard'

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([])
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result)
      setDataLoaded(true)
    })
  }, [])

  return (
    <div className="container mx-auto mb-28">
      <h2 className="mb-8 text-2xl font-bold text-dark dark:text-skin">
        Featured Posts
      </h2>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {dataLoaded && (
          <div className="lg:col-span-6">
            <article className="card w-full bg-transparent transition-all hover:scale-95">
              <figure>
                <img
                  className="w-full rounded-3xl"
                  src={featuredPosts[0].featuredImage.url}
                  alt={featuredPosts[0].title}
                />
              </figure>
              <div className="card-body px-0 py-8 text-dark">
                <div className="card-actions mb-5 justify-start">
                  {featuredPosts[0].categories.map((category) => (
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

                <Link href={`post/${featuredPosts[0].slug}`} passHref>
                  <a className="link-hover link-accent">
                    <h2 className="card-title text-2xl font-bold text-dark dark:text-gray-100 lg:text-3xl">
                      {featuredPosts[0].title}
                    </h2>
                  </a>
                </Link>

                <p className="text-dark dark:text-gray-100">
                  {featuredPosts[0].excerpt}
                </p>
                <div className="mt-5 flex items-center">
                  <div className="mr-3 aspect-square w-12 overflow-hidden rounded-full">
                    <img
                      src={featuredPosts[0].author.photo.url}
                      alt={featuredPosts[0].author.name}
                    />
                  </div>

                  <div className="flex flex-col justify-center overflow-hidden">
                    <div>
                      <h3 className="font-bold text-dark dark:text-gray-100">
                        {featuredPosts[0].author.name}
                      </h3>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-300">
                        {moment(featuredPosts[0].createdAt).format(
                          'MMM DD, YYYY'
                        )}{' '}
                        • 4 min read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        <div className="lg:col-span-6">
          {featuredPosts.slice(1).map((post) => (
            <FeaturedPostCard post={post} key={post.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedPosts
