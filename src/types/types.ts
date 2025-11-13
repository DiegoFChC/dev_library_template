export interface NoteTreeNode {
  title: string
  slug?: string
  path?: string
  order?: number
  children?: NoteTreeNode[]
}