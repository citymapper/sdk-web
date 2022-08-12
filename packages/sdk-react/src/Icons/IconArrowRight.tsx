import React from 'react'
import SVGIcon from './SVGIcon'

const IconArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <SVGIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7626 3.76256C13.446 3.07915 14.554 3.07915 15.2374 3.76256L22.2374 10.7626C22.9209 11.446 22.9209 12.554 22.2374 13.2374L15.2374 20.2374C14.554 20.9209 13.446 20.9209 12.7626 20.2374C12.0791 19.554 12.0791 18.446 12.7626 17.7626L16.7751 13.75H3C2.0335 13.75 1.25 12.9665 1.25 12C1.25 11.0335 2.0335 10.25 3 10.25H16.7751L12.7626 6.23744C12.0791 5.55402 12.0791 4.44598 12.7626 3.76256Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}

export default IconArrowRight
