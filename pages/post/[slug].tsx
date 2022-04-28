import React from 'react'
import { useRouter } from 'next/router'

import {
  Comments,
  CommentsForm,
  Loader,
  Layout,
  AdjacentPosts,
  PostDetail,
  SimilarPosts,
} from '../../components'
import { getPosts, getPostDetails } from '../../services/index'
import { Post, PostFetched } from '../../types/types'
import { ParsedUrlQuery } from 'querystring'
import { GetStaticProps } from 'next'

interface PostDetailsScreenProps {
  post: Post
  posts: PostFetched[]
}

const PostDetailsScreen = ({ post, posts }: PostDetailsScreenProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <Layout>
      <PostDetail post={post} />
      <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
      <SimilarPosts
        slug={post.slug}
        categories={post.categories.map((category) => category.slug)}
      />

      <div className="mx-auto mt-44 max-w-[1200px]">
        <div className="mx-auto max-w-[1440px]">
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
      </div>
    </Layout>
  )
}
export default PostDetailsScreen

interface Props extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const params = ctx.params as Props
  const data = await getPostDetails(params.slug)

  return {
    props: {
      post: data,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }: { node: Props }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}
