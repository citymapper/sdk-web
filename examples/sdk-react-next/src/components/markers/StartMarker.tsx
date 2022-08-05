import React from 'react'
import Marker from './Marker'

const StartMarker: React.FC<google.maps.MarkerOptions> = (options) => {
  return <Marker {...options} icon={'/flag-start.png'} />
}

export default StartMarker
