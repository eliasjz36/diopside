import React, { useState, useEffect, ChangeEvent } from 'react'

import { submitComment } from '../services/index'

interface CommentsFormProps {
  slug: string
}

interface FormData {
  name: null | string
  email: null | string
  comment: null | string
  storeData: boolean | string | null
}

const CommentsForm = ({ slug }: CommentsFormProps) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState<Storage | null>(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  })

  useEffect(() => {
    setLocalStorage(window.localStorage)
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData:
        window.localStorage.getItem('name') ||
        window.localStorage.getItem('email'),
      comment: '',
    }
    setFormData(initalFormData)
  }, [])

  const onInputChange = (e: ChangeEvent<any>) => {
    const { target } = e
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }))
    }
  }

  const handlePostSubmission = () => {
    setError(false)
    const { name, email, comment, storeData } = formData
    if (!name || !email || !comment) {
      setError(true)
      return
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData) {
      localStorage?.setItem('name', name)
      localStorage?.setItem('email', email)
    } else {
      localStorage?.removeItem('name')
      localStorage?.removeItem('email')
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = ''
          formData.email = ''
        }
        formData.comment = ''
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }))
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      }
    })
  }

  return (
    <div className="mb-8 rounded-3xl border-[1px] border-gray-200 p-8 pb-12 dark:border-base-100">
      <h3 className="mb-8 text-xl font-semibold text-dark dark:text-skin">
        Leave a Comment on this post
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          value={formData.name ? formData.name : ''}
          onChange={onInputChange}
          className="w-full rounded-lg bg-skin py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          value={formData.email ? formData.email : ''}
          onChange={onInputChange}
          className="w-full rounded-lg bg-skin py-2 px-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="fc-textarea form-control mb-4 grid grid-cols-1 gap-4">
        <textarea
          value={formData.comment ? formData.comment : ''}
          onChange={onInputChange}
          className="h-40 w-full rounded-lg bg-skin p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <div>
          <input
            checked={!!formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="cursor-pointer text-dark dark:text-skin"
            htmlFor="storeData"
          >
            {' '}
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are mandatory</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="btn btn-accent rounded-3xl"
        >
          Post Comment
        </button>

        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
