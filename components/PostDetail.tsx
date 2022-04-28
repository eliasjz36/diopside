import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import moment from 'moment'

import { Post } from '../types/types'
import graphCMSImageLoader from '../utils/graphCMSImageLoader'

interface PostDetailProps {
  post: Post
}

const PostDetail = ({ post }: PostDetailProps) => {
  const getContentFragment = (
    index: number,
    text:
      | JSX.Element
      | string
      | (string | JSX.Element | (string | Element)[])[],
    obj: {
      bold?: boolean
      italic?: boolean
      underline?: boolean
      title?: string
      height?: string
      width?: string
      src?: string
      text?: string
      type?: string
    },
    type?: string
  ) => {
    let modifiedText: any = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3
            key={index}
            className="mt-16 mb-10 text-2xl font-bold leading-tight text-dark dark:text-skin lg:text-3xl"
          >
            {Array.isArray(modifiedText) &&
              modifiedText.map((item, i: number) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p
            key={index}
            className="mb-16 text-lg leading-relaxed text-dark dark:text-skin md:text-xl"
          >
            {Array.isArray(modifiedText) &&
              modifiedText.map((item, i: number) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
          </p>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            className="rounded-3xl"
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <article className="mx-auto max-w-[1200px]">
      <header>
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

        <h1 className="my-10 text-[2.25rem] font-bold leading-normal text-dark dark:text-skin md:text-6xl xl:text-7xl">
          {post.title}
        </h1>

        <p className="mb-12 max-w-3xl text-xl leading-relaxed text-dark dark:text-skin md:text-2xl">
          {post.excerpt}
        </p>

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
      </header>

      <div className="mt-16">
        <img
          className="h-auto w-full max-w-full rounded-3xl"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        {post.content.raw.children.map((typeObj, index: number) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </article>
  )
}

export default PostDetail
