import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { NoteTreeNode } from '@/types'

const NOTES_ROOT_DIR = path.join(process.cwd(), 'src', 'notes')
const NOTE_FILE_EXTENSION = '.md'
const META_FILE_NAME = '_meta.json'

export function getNotesTree(topic: string): NoteTreeNode[] {
  const decodedTopic = decodeURIComponent(topic)
  const initialPath = path.join(NOTES_ROOT_DIR, decodedTopic)
  return readDirectoryRecursive(initialPath, topic)
}

function readDirectoryRecursive(dirPath: string, dirParent: string): NoteTreeNode[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true })

  // Metadata para ordenar carpetas
  let meta: Record<string, { order?: number; title?: string }> = {}
  const metaPath = path.join(dirPath, META_FILE_NAME)

  if (fs.existsSync(metaPath)) {
    meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
  }

  const nodes: NoteTreeNode[] = []
  
  for (const entry of entries) {
    if (entry.name === "_meta.json") continue

    const { name: entryName, parentPath } = entry
    const entryPath = path.join(parentPath, entryName)

    // Folders
    if (entry.isDirectory()) {
      const newDirParent: string = `${dirParent}/${encodeURIComponent(entryName)}`
      
      nodes.push({
        title: meta[entryName]?.title || entryName,
        order: meta[entryName]?.order ?? 9999,
        children: readDirectoryRecursive(entryPath, newDirParent)
      })

      continue
    }

    // Files
    if (entry.isFile() && entryName.endsWith(NOTE_FILE_EXTENSION)) {
      const fileName = entryName.replace(/\.md/, '')

      const raw = fs.readFileSync(entryPath, 'utf8')
      const { data } = matter(raw)

      nodes.push({
        title: data.title || fileName,
        slug: `${dirParent}/${encodeURIComponent(fileName)}`,
        filePath: path.join(dirParent, entryName),
        order: typeof data.order === 'number' ? data.order : 9999
      })
    }
  }

  return nodes.sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
}