import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { getPostsCategories } from '../services/index'
import { Layout } from '../components'
import graphCMSImageLoader from '../utils/graphCMSImageLoader'

interface Categories {
  name: string
  slug: string
  image: {
    url: string
  }
  post: {}[]
}

const CategoriesScreen = () => {
  const [categories, setCategories] = useState<Categories[]>([])

  useEffect(() => {
    getPostsCategories().then((categories) => {
      setCategories(categories)
    })
  }, [])

  return (
    <Layout>
      <div className="container mx-auto mb-8 pb-12">
        <h1 className="mb-20 pb-4 text-center text-[2.25rem] font-bold text-gray-800 dark:text-skin md:text-6xl xl:text-7xl">
          Categories
        </h1>

        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.slug}
              className="mx-auto flex w-80 max-w-full flex-col items-stretch bg-transparent transition-all hover:scale-95"
            >
              <div className="relative inline-block h-60 w-full lg:h-64">
                <Image
                  unoptimized
                  loader={graphCMSImageLoader}
                  src={category.image.url}
                  alt={category.name}
                  className="rounded-3xl object-cover"
                  layout="fill"
                />
              </div>
              <div className="mt-5">
                <Link key={index} href={`/category/${category.slug}`}>
                  <a
                    href={`/category/${category.slug}`}
                    className="link-hover link-accent"
                  >
                    <h2 className="block cursor-pointer text-center text-xl font-bold text-dark dark:text-skin">
                      {category.name}
                    </h2>
                  </a>
                </Link>

                <p className="text-md text-center font-semibold text-dark dark:text-skin">
                  {category.post.length} Posts
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default CategoriesScreen
