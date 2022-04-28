import { ReactNode, useEffect, useState } from 'react'

import { useTheme } from 'next-themes'
import { HiSun, HiMoon } from 'react-icons/hi'

import { Category } from '../../types/types'
import { getCategories } from '../../services'
import HeaderContent from './HeaderContent'
import HeaderSide from './HeaderSide'

interface HeaderProps {
  children: ReactNode
}

const Header = ({ children }: HeaderProps) => {
  const [categories, setCategories] = useState<Category[]>([])
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <HiSun
          className="h-7 w-7 text-green-400"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <HiMoon
          className="h-7 w-7 text-green-400"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return (
    <header className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <HeaderContent categories={categories} icon={renderThemeChanger()}>
        {children}
      </HeaderContent>
      <HeaderSide categories={categories} icon={renderThemeChanger()} />
    </header>
  )
}

export default Header
