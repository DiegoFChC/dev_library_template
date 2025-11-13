import { Topic } from '../Topic/Topic'
import { NoteTreeNode } from '@/services/server'
import './ListTopic.css'

export function ListTopic ({ topics }: { topics: NoteTreeNode }) {
  const { title, children } = topics
  return (
    <ul className='ListTopic'>
      <h5>{title}</h5>
      <ul>
        {children?.map((topic) => (
          <Topic key={topic.title} data={topic} />
        ))}
      </ul>
    </ul>
  )
}
