import { useCallback, useEffect, useState } from 'react'
import { getCurrentTheme, saveTheme, getSystemTheme } from '@/services/client'

export function useTheme () {
  const [theme, setTheme] = useState<string>(() => getCurrentTheme())
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleTheme = useCallback((newTheme: string): void => {
    setTheme(newTheme)
  }, [])

  useEffect(() => {
    const effectiveTheme = theme === 'system'
      ? getSystemTheme()
      : theme
    
    saveTheme(effectiveTheme)
  }, [theme])

  return { theme, handleTheme, isMounted }
}