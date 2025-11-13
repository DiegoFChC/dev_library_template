'use client'

import { Button } from '../Button/Button'
import { useThemeContext } from '@/context'
import { Sun, Moon, Screen } from '../Icons/Icons'
import { useState } from 'react'
import './ThemeToggle.css'

export function ThemeToggle() {
  const { theme, handleTheme, isMounted } = useThemeContext()
  const [ activeModal, setActiveModal ] = useState(false)

  const themeIcon = isMounted ? (
    theme === 'system' ? <Screen /> : theme === 'dark' ? <Moon /> : <Sun />
  ) : (
    <Screen />
  )

  const handleModal = () => {
    setActiveModal(prev => !prev)
  }

  const changeTheme = (newTheme: 'dark' | 'light' | 'system') => {
    handleTheme(newTheme)
    setActiveModal(false)
  }

  return (
    <div className='ThemeToggle'>
      <span onClick={handleModal}>{themeIcon}</span>
      <div className={`container ${activeModal && 'active'}`}>
        <Button title='System' handelFunction={() => changeTheme('system')}>
          <Screen />
        </Button>
        <Button title='Dark' handelFunction={() => changeTheme('dark')}>
          <Moon />
        </Button>
        <Button title='Light' handelFunction={() => changeTheme('light')}>
          <Sun />
        </Button>
      </div>
    </div>
  )
}
