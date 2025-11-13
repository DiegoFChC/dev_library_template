import type { Config } from '@markdoc/markdoc'
import { Fence } from './Fence/Fence'
import { Code } from './Code/Code'
import { Heading } from './Heading/Heading'

const nodes: Config['nodes'] = {
  heading: {
    render: 'Heading',
    attributes: {
      level: { type: Number, required: true }
    }
  },
  fence: {
    render: 'Fence',
    attributes: {
      content: { type: String, required: true },
      language: { type: String, required: true },
    },
  },
  code: {
    render: 'Code',
    attributes: {
      content: { type: String, required: true }
    }
  }
}

export const configMarkdoc: Config = {
  nodes,
}

export const renderOpts = {
  components: {
    Fence,
    Code,
    Heading
  },
}
