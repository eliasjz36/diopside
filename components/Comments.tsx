import { useEffect, useState } from 'react'

import moment from 'moment'
import parse from 'html-react-parser'

import { Comment } from '../types/types'
import { getComments } from '../services/index'

interface CommentsProps {
  slug: string
}

const Comments = ({ slug }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result)
    })
  }, [slug])

  return (
    <>
      {comments.length > 0 && (
        <div className="mt-24 mb-8 rounded-3xl border-[1px] border-gray-200 p-8 pb-12 dark:border-base-100">
          <h3 className="mb-8 border-b-[1px] pb-5 text-xl font-semibold text-dark dark:border-base-100 dark:text-skin">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="mb-4 border-b-[1px] p-4 pb-4 dark:border-base-100"
            >
              <p className="mb-4 text-base-300 dark:text-skin">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-base-300 dark:text-skin">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
