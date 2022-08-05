import React from 'react'
import Marker from './Marker'

const EndMarker: React.FC<google.maps.MarkerOptions> = (options) => {
  return <Marker {...options} icon={'/flag-end.png'} />
}

export default EndMarker
