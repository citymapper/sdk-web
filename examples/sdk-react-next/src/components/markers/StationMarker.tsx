import React from 'react'
import Marker from './Marker'

const StartMarker: React.FC<google.maps.MarkerOptions> = (options) => {
  console.info(options)
  const strokeColor = (options.strokeColor || '#000000').replace('#', '%23')
  const fillColor = (options.fillColor || '#ffffff').replace('#', '%23')
  const SVG = `<svg width="8px" height="8px" viewBox="-6 -6 12 12" xmlns="http://www.w3.org/2000/svg">\
                <circle cx="0" cy="0" fill="${fillColor}" r="4" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\
              </svg>`
  const icon = {
    // anchor: new google.maps.Point(0, 400),
    // url: 'data:image/svg+xml;utf-8, \
    //   <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
    //     <path fill="red" stroke="white" stroke-width="1.5" d="M3.5 3.5h25v25h-25z" ></path> \
    //   </svg>',
    url: `data:image/svg+xml;utf-8, ${SVG}`,
  }
  return <Marker {...options} icon={icon} />
}

export default StartMarker
