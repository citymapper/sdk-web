import React from 'react'
import SVGIcon from './SVGIcon'

const IconBlip: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <SVGIcon viewBox="0 0 8 8" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.46447 3.46447C4.40215 2.52678 5.67392 2 7 2C7.55228 2 8 1.55228 8 1C8 0.447715 7.55228 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 7.55228 0.447715 8 1 8C1.55228 8 2 7.55228 2 7C2 5.67392 2.52678 4.40215 3.46447 3.46447ZM5.93934 5.93934C6.22064 5.65804 6.60218 5.5 7 5.5C7.55228 5.5 8 5.05228 8 4.5C8 3.94772 7.55228 3.5 7 3.5C6.07174 3.5 5.1815 3.86875 4.52513 4.52513C3.86875 5.1815 3.5 6.07174 3.5 7C3.5 7.55228 3.94772 8 4.5 8C5.05228 8 5.5 7.55228 5.5 7C5.5 6.60218 5.65804 6.22064 5.93934 5.93934Z"
        fill="#FFD600"
      />
    </SVGIcon>
  )
}

export default IconBlip
