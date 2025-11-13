import type { ReactElement, SVGProps } from 'react'

export function ArrowBack(props: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z'
      />
    </svg>
  )
}

export function ArrowNext(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z'
      />
    </svg>
  )
}

export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <circle cx='12' cy='12' r='4' />
        <path d='M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41' />
      </g>
    </svg>
  )
}

export function Moon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M20.742 13.045a8 8 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.03 8.03 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10 10 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.94 9.94 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10 10 0 0 0 2.583-4.491a1 1 0 0 0-1.224-1.224m-2.772 4.301a7.95 7.95 0 0 1-5.656 2.343a7.95 7.95 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a8 8 0 0 1 2.06-1.483a10.03 10.03 0 0 0 2.89 7.848a9.97 9.97 0 0 0 7.848 2.891a8 8 0 0 1-1.484 2.059'
      />
    </svg>
  )
}

export function Screen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='-2 -3 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2'
      />
    </svg>
  )
}

export function Clipboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <path d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2' />
        <path d='M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2' />
      </g>
    </svg>
  )
}

export function CheckBox(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='m10.6 13.4l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.5q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z'
      />
    </svg>
  )
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1.46em'
      height='1em'
      viewBox='0 0 16 11'
      {...props}
    >
      <path
        fill='currentColor'
        d='M12.5 3h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5m0 3h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5m0 3h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5'
      />
    </svg>
  )
}
