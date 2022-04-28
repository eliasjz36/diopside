import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { BsArrowRight } from 'react-icons/bs'
import { ParsedUrlQuery } from 'querystring'

import { PostFetched } from '../../types/types'
import { getCategories, getCategoryPost } from '../../services/index'
import { Layout, Loader, PostCard } from '../../components'
import graphCMSImageLoader from '../../utils/graphCMSImageLoader'

interface CategoryPostProps {
  posts: PostFetched[]
  name: string
}

const CategoryPosts = ({ posts, name }: CategoryPostProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <Layout>
      <div className="container mx-auto mb-28">
        <div className="relative mb-20 overflow-hidden rounded-3xl">
          <div className="py-4 px-4 md:py-32 md:px-4">
            <Image
              unoptimized
              loader={graphCMSImageLoader}
              src="/images/categoriesBackground.jfif"
              alt="laptop"
              className="absolute top-0 right-0 h-full w-full max-w-full object-cover"
              layout="fill"
            />

            <div className="relative my-0 mx-auto max-w-3xl">
              <div className="mx-auto flex max-w-[400px] flex-col rounded-3xl bg-skin p-8 text-center dark:bg-base-200">
                <Link href="/categories" passHref>
                  <a>
                    <div className="mb-4 flex items-center justify-center transition-transform hover:scale-95">
                      <p className="text-md link-hover mr-2 cursor-pointer align-middle font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-skin md:float-right">
                        Go to categories
                      </p>
                      <BsArrowRight className="h-5 w-5 fill-dark dark:fill-white" />
                    </div>
                  </a>
                </Link>
                <h1 className="bg-gradient-to-r from-lightgreen to-green-500 bg-clip-text text-2xl font-bold text-transparent lg:py-2 lg:text-3xl">
                  {name}
                </h1>
                <p className="text-md mt-4 text-center font-semibold text-gray-800 dark:text-skin">
                  {posts.length} Posts
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.slug} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
export default CategoryPosts
interface Props extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx.params as Props
  const posts = await getCategoryPost(params.slug)
  const categories = await getCategories()
  const { name } = categories.find(({ slug }: Props) => slug === params.slug)

  return {
    props: { posts, name },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()

  return {
    paths: categories.map(({ slug }: Props) => ({
      params: { slug },
    })),
    fallback: true,
  }
}
