'use client'

import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import Link from 'next/link'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { Menu } from '../Icons/Icons'
import './TopBar.css'
import { useAppContext } from '@/context'

export function TopBar({ showMenu = false }) {
  const { activateMenu } = useAppContext()

  return (
    <header className='TopBar'>
      <div className='logo'>
        {
          showMenu && (
            <button onClick={activateMenu}>
              <Menu />
            </button>
          )
        }
        <Link href='/'>./DEV_LIBRARY</Link>
      </div>
      <ThemeContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </header>
  )
}
