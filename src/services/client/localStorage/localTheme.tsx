import { getSystemTheme, upadteDOMTheme } from '../theme/theme'

export function saveTheme (theme : string) {
  if (typeof window === 'undefined') return
  upadteDOMTheme(theme)
  localStorage.setItem('theme', theme)
}

export function getCurrentTheme () : string {
  if (typeof window === 'undefined') return 'light'
  const currentTheme = localStorage.getItem('theme')
  return currentTheme || getSystemTheme()
}