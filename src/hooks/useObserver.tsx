import { useEffect, useState } from 'react'

const OBSERVER_CONF = {
  root: null,
  rootMargin: '-115px 0% 0%',
  threshold: 0,
}

export function useObserver() {
  const [activeId, setActiveId] = useState('')
  useEffect(() => {
    const $headings = document.querySelectorAll(
      '.DocPage > article > .newSection'
    )

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectionHandler(entry)
        }
      })
    }, OBSERVER_CONF)

    $headings.forEach((heading) => observer.observe(heading))

    const intersectionHandler = (entry) => {
      const id = entry.target.id
      setActiveId(id)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return { activeId }
}
