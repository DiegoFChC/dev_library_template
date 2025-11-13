import { NoteTreeNode } from '@/services/server'
import { NavItem } from './NavItem/NavItem'
import './DocNavigation.css'

interface DocNavigation {
  prev: NoteTreeNode | undefined
  next: NoteTreeNode | undefined
}

export function DocNavigation ({ prev, next } : DocNavigation) {
  return (
    <nav className='DocNavigation'>
      <ul>
        {
          prev && <NavItem data={prev} isNext={false} />
        }
        {
          next && <NavItem data={next} isNext />
        }
      </ul>
    </nav>
  )
}