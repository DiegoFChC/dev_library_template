export function getSystemTheme(): string {
  if (typeof window === 'undefined') return 'light'
  const currentSystemTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  return currentSystemTheme ? 'dark' : 'ligth'
}

export function upadteDOMTheme (theme : string) {
  if (typeof document === 'undefined') return
  document.body.setAttribute('theme-toggle', theme)
}