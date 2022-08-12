import React from 'react'
import SVGIcon from './SVGIcon'

const IconStatusPrevented: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <SVGIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <circle cx="8" cy="8" r="7.5" fill="#D22020" stroke="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.79289 4.79289C5.18342 4.40237 5.81658 4.40237 6.20711 4.79289L8 6.58579L9.79289 4.79289C10.1834 4.40237 10.8166 4.40237 11.2071 4.79289C11.5976 5.18342 11.5976 5.81658 11.2071 6.20711L9.41421 8L11.2071 9.79289C11.5976 10.1834 11.5976 10.8166 11.2071 11.2071C10.8166 11.5976 10.1834 11.5976 9.79289 11.2071L8 9.41421L6.20711 11.2071C5.81658 11.5976 5.18342 11.5976 4.79289 11.2071C4.40237 10.8166 4.40237 10.1834 4.79289 9.79289L6.58579 8L4.79289 6.20711C4.40237 5.81658 4.40237 5.18342 4.79289 4.79289Z"
      fill="white"
    />
  </SVGIcon>
)
export default IconStatusPrevented
