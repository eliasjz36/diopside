import { MomentInput } from 'moment'

export interface Author {
  name: string
  photo: {
    url: string
  }
  bio: string
  post: Post[]
}

export interface Post {
  title: string
  slug: string
  excerpt: string
  content: {
    raw: {
      children: { type: string; children: [{ text: string }] }[]
    }
  }
  featuredImage: {
    url: string
  }
  featuredPost: string
  author: Author
  categories: Category[]
  createdAt: string
}

export interface PostFetched {
  node: Post
}

export interface Category {
  name: string
  slug: string
  post: Post
  image: string
}

export interface Comment {
  name: string
  createdAt: Date
  comment: string
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
}
