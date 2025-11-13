import { TopBar } from '@/components'
import { AppContextProvider } from '../context/AppContext'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <AppContextProvider>
          {/* <TopBar /> */}
          {children}
        </AppContextProvider>
      </body>
    </html>
  )
}
