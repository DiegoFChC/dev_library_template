import { getNotesTree, NoteTreeNode } from './getNotesTree'

export interface PrevNextLinks {
  prev?: NoteTreeNode
  next?: NoteTreeNode
}

export function getPrevNext ( topic: string, currentSlug: string[] ) {
  // const currentSlugDecode = currentSlug.map(slug => decodeURIComponent(slug))
  const tree = getNotesTree(topic)

  const flatList: NoteTreeNode[] = []
  flattenTree(tree, flatList)

  const currentSlugPath = [topic, ...currentSlug].join('/')
  const index = flatList.findIndex(node => node.slug === currentSlugPath)

  if (index === -1) return { prev: undefined, next: undefined }

  return {
    prev: flatList[index - 1],
    next: flatList[index + 1]
  }
}

function flattenTree(nodes: NoteTreeNode[], result: NoteTreeNode[]) {
  for (const node of nodes) {
    if (node.slug) result.push(node)
    if (node.children) flattenTree(node.children, result)
  }
}