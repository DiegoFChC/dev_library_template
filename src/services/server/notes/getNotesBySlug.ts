import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const NOTES_PATH: string = path.join(process.cwd(), 'src', 'notes')

export interface NoteFile {
  content: string
  data: {
    title: string
    description: string
  }
}

export function getNotesBySlug (slug: string[]) : NoteFile {
  const originalPath = slug.map(item => decodeURIComponent(item))
  const filePath = path.join(NOTES_PATH, ...originalPath) + '.md'

  if (!fs.existsSync(filePath)) return { content: 'Not found', data: { title: 'Not found', description: 'Notes not found' } }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(raw)
  const { title, description } = data
  
  return { content, data: { title, description } }
}