import type { NextPage } from 'next'
import { ThemedRouteList } from './ThemedRouteList'
import CitymapperApi from '@citymapper/api'
import React from 'react'
import { Route } from '@citymapper/api/generated/models/Route'
import Map from './Map'
import MapRoutes from './mapRoutes'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import StartMarker from './markers/StartMarker'
import EndMarker from './markers/EndMarker'

const myApi = new CitymapperApi({
  apiKey: 'no api key',
  apiEndpoint: '/api/citymapper',
})

const TransitDirections: NextPage = () => {
  const isDesktop = useMediaQuery('(min-device-width: 1250px)')
  const [start, setStart] = React.useState([51.5, -0.1])
  const [end, setEnd] = React.useState([51.5, -0.05])
  const [routes, setRoutes] = React.useState([] as Route[])
  const [markerIndex, setMarkerIndex] = React.useState(0)
  const [hoveredRoute, setHoveredRoute] = React.useState(null as Route | null)
  const [selectedRoute, setSelectedRoute] = React.useState(null as Route | null)

  const onSubmit = async () => {
    const res = await myApi.directions_transit(start, end)
    const { routes: myRoutes } = res
    setRoutes(myRoutes)
  }
  const onMapClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state
    const newMarkerIndex = (markerIndex + 1) % 2
    if (newMarkerIndex === 0) {
      setStart([e.latLng.lat(), e.latLng.lng()])
    } else {
      setEnd([e.latLng.lat(), e.latLng.lng()])
    }
    setMarkerIndex(newMarkerIndex)
  }
  const onRouteClick = (e, route) => {
    setSelectedRoute(route)
  }
  const markers = [
    <StartMarker
      key={0}
      position={{ lat: start[0], lng: start[1] }}
      draggable={true}
    />,
    <EndMarker
      key={1}
      position={{ lat: end[0], lng: end[1] }}
      draggable={true}
    />,
  ]

  return (
    <Grid container spacing={2}>
      <Grid item style={{ maxWidth: isDesktop ? '440px' : '100vw' }}>
        <Typography variant="p" component="p" gutterBottom>
          <a href="https://citymapper.com">Citymapper</a> for React
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          RouteList
        </Typography>
        <Button onClick={onSubmit} variant={'contained'}>
          Get Sample Results
        </Button>
        <ThemedRouteList
          routes={routes}
          onClick={onRouteClick}
          onMouseEnter={(e, route) => setHoveredRoute(route)}
          selectedRoute={selectedRoute || hoveredRoute}
        />
      </Grid>
      <Grid item sx={{ height: '90vh', flexGrow: 1 }}>
        <Map onClick={onMapClick}>
          {markers}
          <MapRoutes
            routes={routes}
            selectedRoute={selectedRoute || hoveredRoute}
          />
        </Map>
      </Grid>
    </Grid>
  )
}

export default TransitDirections
