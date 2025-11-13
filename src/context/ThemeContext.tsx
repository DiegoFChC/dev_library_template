import { useTheme } from '@/hooks/useTheme'
import { ReactNode, useMemo, createContext, useContext } from 'react'

interface ThemeContextValue {
  theme: 'light' | 'dark' | 'system'
  handleTheme: (newTheme: 'light' | 'dark' | 'system') => void 
  isMounted: boolean
}

interface ThemeContextProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function useThemeContext () : ThemeContextValue {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return context
}


export function ThemeContextProvider ({ children } : ThemeContextProviderProps) {
  const themeHook = useTheme()

  const value = useMemo(() => themeHook, [themeHook])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}