import Link from 'next/link'
import './TopicButton.css'
import { ReactNode } from 'react'
import Image from 'next/image'

type TopicButton = {
  name: string
  topic: string
  img: string
}

export function TopicButton({ name, topic, img }: TopicButton): ReactNode {
  return (
    <Link
      href={`/notes/${topic}/Descripción%20general/Intro`}
      className='TopicButton'
    >
      {name}
      <Image src={img} alt={`Logo ${name}`} width={0} height={0} />
    </Link>
  )
}
