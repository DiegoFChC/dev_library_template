import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const NOTES_ROOT_DIR: string = path.join(process.cwd(), 'src', 'notes')
const NOTE_FILE_EXTENSION: string = '.md'

export interface NoteTreeNode {
  title: string
  slug?: string
  path?: string
  order?: number
  children?: NoteTreeNode[]
}

export function getNotesTree(topic: string): NoteTreeNode[] {
  const decodedTopic = decodeURIComponent(topic)
  const initialPath = path.join(NOTES_ROOT_DIR, decodedTopic)
  return readDirectoryRecursive(initialPath, topic)
}

function readDirectoryRecursive(dirPath: string, dirParent: string): NoteTreeNode[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  const nodes = entries.map(entry => {
    const { name: entryName, parentPath } = entry
    const entryPath = path.join(parentPath, entryName) // Path

    if (entry.isDirectory()) {
      const newDirParent: string = dirParent + '/' + encodeURIComponent(entryName)
      return {
        title: entryName,
        children: [...readDirectoryRecursive(entryPath, newDirParent)]
      }
    }

    if (entry.isFile() && entryName.endsWith(NOTE_FILE_EXTENSION)) {
      const fileName: string = entryName.replace(/\.md/, '')

      const raw = fs.readFileSync(entryPath, 'utf-8')
      const { data } = matter(raw)

      return {
        title: fileName,
        slug: `${dirParent}/${encodeURIComponent(fileName)}`,
        path: path.join(dirParent, entryName),
        order: data.order ?? 9999
      }
    }

    return null
  }).filter(Boolean) as NoteTreeNode[]

  return nodes.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
}