import type { ReactNode } from 'react'
import './Code.css'

export function Code ({ content } : { content: string }) : ReactNode {
  return <code className='Code'>{content}</code>
}