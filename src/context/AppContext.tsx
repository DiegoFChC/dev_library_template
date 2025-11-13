'use client'

import { createContext, useContext, useState } from 'react'

const AppContext = createContext(undefined)

export function useAppContext() {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useAppContext must be used within a ThemeProvider')
  }

  return context
}

export function AppContextProvider({ children }) {
  const [modal, setModal] = useState({ menu: false })

  const activateMenu = () => {
    setModal((prev) => ({ ...prev, menu: true }))
  }

  const deactivateMenu = () => {
    setModal((prev) => ({ ...prev, menu: false }))
  }

  return (
    <AppContext.Provider
      value={{ menuState: modal.menu, activateMenu, deactivateMenu }}
    >
      {children}
    </AppContext.Provider>
  )
}
