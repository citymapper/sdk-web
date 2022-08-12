import React from 'react'
import SVGIcon from './SVGIcon'

const IconStatusDisrupted: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <SVGIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <circle cx="8" cy="8" r="7.5" fill="#FE9001" stroke="white" />
    <path
      d="M7.99979 5.97512C8.68949 5.97512 9.2486 5.42105 9.2486 4.73756C9.2486 4.05407 8.68949 3.5 7.99979 3.5C7.31009 3.5 6.75098 4.05407 6.75098 4.73756C6.75098 5.42105 7.31009 5.97512 7.99979 5.97512Z"
      fill="white"
    />
    <path
      d="M7.9998 7.25414C7.44804 7.25414 7.00075 7.70143 7.00075 8.25319V11.001C7.00075 11.5527 7.44804 12 7.9998 12C8.55156 12 8.99884 11.5527 8.99884 11.001V8.25319C8.99884 7.70143 8.55156 7.25414 7.9998 7.25414Z"
      fill="white"
    />
  </SVGIcon>
)
export default IconStatusDisrupted
