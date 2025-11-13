'use client'

import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Clipboard, CheckBox } from '@/components/Icons/Icons'
import './Fence.css'

type Fence = {
  language: string
  content: string
}

export function Fence({ language, content }: Fence) {
  const [copied, setCopied] = useState(false)

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <div className='Fence'>
      <span className="copy" onClick={handleCopyClick}>
        {
          copied ? <CheckBox /> : <Clipboard />
        }
      </span>
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{ background: 'transparent' }}
        wrapLongLines={true}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  )
}
