import type { ReactElement } from 'react'
import './Button.css'

interface Button {
  children?: ReactElement
  title?: string
  handelFunction?: () => void
}

export function Button({ children, title, handelFunction }: Button) {
  return (
    <button className='Button' onClick={handelFunction}>
      {children}
      {title}
    </button>
  )
}
