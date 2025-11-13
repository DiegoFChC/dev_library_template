import { parseContentMarkdoc } from '@/services/client'
import { MarkdocContent } from './MarkdocContent/MarkdocContent'
import './DocPage.css'

export function DocPage ({ content, headData }) {
  const { title, description } = headData
  const data = parseContentMarkdoc(content)

  return (
    <article className='DocPage'>
      <h1>{title}</h1>
      <p>{description}</p>
      <hr />

      <MarkdocContent content={data} />
    </article>
  )
}