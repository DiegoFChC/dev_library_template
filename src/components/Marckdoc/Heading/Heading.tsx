export function Heading ({ level, children }) {
  const Tag = `h${level}`
  const id = children 
    ? children.toString().toLowerCase().replace(/\s/g, '-') 
    : undefined

  return (
    <Tag id={id} className='newSection'>
      {children}
    </Tag>
  )
}