import Head from 'next/head'
import { ReactNode } from 'react'

import Header from './Header/Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Diopside</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header>
        <div className="mx-auto mt-5 min-h-screen max-w-[1440px] px-4 sm:px-6 lg:px-8">
          {children}
        </div>

        <Footer />
      </Header>
    </>
  )
}

export default Layout
