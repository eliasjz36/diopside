import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Category } from '../../types/types'
import { GiHamburgerMenu } from 'react-icons/gi'
import graphCMSImageLoader from '../../utils/graphCMSImageLoader'

interface HeaderContentProps {
  children: ReactNode
  categories: Category[]
  icon: JSX.Element | null
}

const HeaderContent = ({ children, categories, icon }: HeaderContentProps) => {
  return (
    <div className="drawer-content">
      <nav className="navbar sticky top-0 z-50 mb-16 w-full items-center border-b-[.1px] bg-skin bg-opacity-95 py-5 px-7 text-gray-400 transition-colors duration-300 dark:border-gray-700 dark:bg-base-100 dark:bg-opacity-95 lg:mb-24">
        <div className="flex-1">
          <Link href="/" passHref>
            <a>
              <Image
                src="/images/logo.svg"
                alt="dopside logo"
                width={160}
                height={32}
              />
            </a>
          </Link>
        </div>

        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-4">
            <GiHamburgerMenu className="h-6 w-6 text-dark dark:text-skin" />
          </label>
        </div>

        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal items-center">
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`} passHref>
                <li className="links mr-4 cursor-pointer align-middle font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-skin md:float-right">
                  {category.name}
                </li>
              </Link>
            ))}

            <label className="swap swap-rotate p-0">
              <input type="checkbox" />

              {icon}
            </label>
          </ul>
        </div>
      </nav>

      {children}
    </div>
  )
}

export default HeaderContent
