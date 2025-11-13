import { renderers } from '@markdoc/markdoc'
import React from 'react'
import { renderOpts } from '@/components/Marckdoc/configMarkdoc'

export function MarkdocContent ({ content }) {
  return (
    <>
      { renderers.react(content, React, renderOpts) }
    </>
  )
}