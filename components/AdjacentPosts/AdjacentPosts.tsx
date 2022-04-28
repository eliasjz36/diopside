import { useEffect, useState } from 'react'

import { Post } from '../../types/types'
import { getAdjacentPosts } from '../../services'
import AdjacentPostCard from './AdjacentPostCard'

interface AdjacentPostsProps {
  createdAt: string
  slug: string
}

const PostByDate = ({ createdAt, slug }: AdjacentPostsProps) => {
  const [adjacentPost, setAdjacentPost] = useState<{
    next: Post
    previous: Post
  } | null>(null)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    getAdjacentPosts(createdAt, slug).then((result) => {
      setAdjacentPost(result)
      setDataLoaded(true)
    })
  }, [slug, createdAt])

  return (
    <div className="mx-auto mt-44 max-w-[1200px]">
      <div className="mx-auto max-w-[1440px]">
        {dataLoaded && (
          <div className="mx-5 grid lg:grid-cols-6 lg:gap-10">
            {adjacentPost?.previous && (
              <div className="col-span-3 lg:col-start-1 lg:col-end-4">
                <AdjacentPostCard
                  post={adjacentPost.previous}
                  position="left"
                />
              </div>
            )}

            {adjacentPost?.next && (
              <div className="col-span-3 mt-10 lg:col-start-4 lg:col-end-7 lg:mt-0">
                <AdjacentPostCard post={adjacentPost.next} position="right" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default PostByDate
