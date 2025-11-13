import { parse, transform } from '@markdoc/markdoc'
import { configMarkdoc } from '../../../components/Marckdoc/configMarkdoc'

export function parseContentMarkdoc (data) {
  // data -> Markdoc content
  // ast -> abstract syntax tree
  const ast = parse(data)
  // content -> renderable tree
  const content = transform(ast, configMarkdoc)

  return content
}