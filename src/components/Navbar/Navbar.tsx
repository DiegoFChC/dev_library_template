'use client'

import { ListTopic } from './ListTopic/ListTopic'
import { NoteTreeNode } from '@/types/types'
import { useAppContext } from '@/context'
import './Navbar.css'

export function Navbar({ nodes }: { nodes: NoteTreeNode[] }) {
  const { menuState, deactivateMenu } = useAppContext()

  return (
    <nav className='Navbar'>
      <div
        className={`bgModal ${menuState ? 'active' : ''}`}
        onClick={deactivateMenu}
      >
        <div className='container'></div>
      </div>
      <div className={`topics ${menuState ? 'active' : ''}`}>
        {nodes?.map((node) => (
          <ListTopic key={node.title} topics={node} />
        ))}
      </div>
    </nav>
  )
}
