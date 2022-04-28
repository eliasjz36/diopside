import Link from 'next/link'

import { IoCloseSharp } from 'react-icons/io5'

import { Category } from '../../types/types'

interface HeaderSideProps {
  categories: Category[]
  icon: JSX.Element | null
}

const HeaderSide = ({ categories, icon }: HeaderSideProps) => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" className="drawer-overlay" />

      <ul className="menu relative w-80 overflow-y-auto bg-skin px-4 py-10 dark:bg-base-100">
        <label
          htmlFor="my-drawer-4"
          className="btn btn-ghost btn-square absolute top-0 right-0"
        >
          <IoCloseSharp className="h-7 w-7 text-gray-800 dark:text-skin" />
        </label>

        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`} passHref>
            <li className="mt-6 cursor-pointer align-middle font-semibold text-gray-800 transition-colors duration-200 hover:text-lightgreen dark:text-skin md:float-right">
              {category.name}
            </li>
          </Link>
        ))}

        <li>
          <label className="swap swap-rotate mt-6 w-fit justify-start p-0 hover:bg-transparent">
            <input type="checkbox" />

            {icon}
          </label>
        </li>
      </ul>
    </div>
  )
}

export default HeaderSide
