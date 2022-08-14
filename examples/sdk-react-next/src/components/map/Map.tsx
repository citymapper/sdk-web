import React from 'react'
import MapRoutes from './MapRoutes'
import StartMarker from '../markers/StartMarker'
import EndMarker from '../markers/EndMarker'
import MapWrapper from './MapWrapper'
import { Route } from '@citymapper/api/@types'

const Map: React.FC<{
  start: Array<number>
  end: Array<number>
  routes: Array<Route>
  selectedRoute: Route
  loadingRoutes: boolean
  onMapClick: (e: google.maps.MapMouseEvent) => void
  onMarkerDrag: (e: google.maps.MapMouseEvent, markerIndex: number) => void
}> = ({
  start,
  end,
  routes,
  selectedRoute,
  loadingRoutes,
  onMapClick,
  onMarkerDrag,
}) => {
  return (
    <MapWrapper
      start={start}
      end={end}
      onClick={onMapClick}
      loadingRoutes={loadingRoutes}
    >
      <StartMarker
        key={0}
        position={{ lat: start[0], lng: start[1] }}
        draggable={true}
        onDrag={(e: google.maps.MapMouseEvent) => onMarkerDrag(e, 0)}
      />
      <EndMarker
        key={1}
        position={{ lat: end[0], lng: end[1] }}
        draggable={true}
        onDrag={(e: google.maps.MapMouseEvent) => onMarkerDrag(e, 1)}
      />
      {routes?.length && (
        <MapRoutes routes={routes} selectedRoute={selectedRoute} />
      )}
    </MapWrapper>
  )
}

export default Map
