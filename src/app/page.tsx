import type { JSX } from 'react'
import type { Metadata } from 'next'
import { Landing } from '@/components/Landing/Landing'
import { TopBar } from '@/components'

export const metadata: Metadata = {
  title: 'Dev Library Template',
  description: 'Plantilla para documentación usando Next.js y MarkDoc.',
}

export default function Home(): JSX.Element {
  return (
    <main>
      <TopBar />
      <Landing />
    </main>
  )
}
