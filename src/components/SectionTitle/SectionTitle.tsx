import type { ReactNode } from 'react'
import './SectionTitle.css'

type SectionTitle = {
  children: ReactNode
  title: string
}

export function SectionTitle ({ children, title }: SectionTitle): ReactNode {
  return (
    <section className='SectionTitle'>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
