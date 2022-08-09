import type { NextPage } from 'next'
import { ThemedRouteList } from './ThemedRouteList'
import CitymapperApi from '@citymapper/api'
import React from 'react'
import { Route } from '@citymapper/api/generated/models/Route'
import Map from './Map'
import MapRoutes from './mapRoutes'
import StartEnd from './StartEnd'

import CircularProgress from '@mui/material/CircularProgress'
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
  const [loading, setLoading] = React.useState(false)

  const onSubmit = async () => {
    setLoading(true)
    const res = await myApi.directions_transit(start, end)
    const { routes: myRoutes } = res
    setRoutes(myRoutes)
    setLoading(false)
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
      onDrag={setStart}
    />,
    <EndMarker
      key={1}
      position={{ lat: end[0], lng: end[1] }}
      draggable={true}
      onDrag={setEnd}
    />,
  ]

  return (
    <Grid container spacing={0} sx={{ height: '100vh' }}>
      <Grid
        item
        sx={{
          width: isDesktop ? '440px' : '100vw',
          maxHeight: '100vh',
          overflowY: 'scroll',
          boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
          p: 5,
          zIndex: 1,
        }}
      >
        <Typography variant="p" component="p" gutterBottom>
          <a href="https://citymapper.com">Citymapper</a> for React
        </Typography>

        <Typography variant="h4" component="h4" gutterBottom>
          RouteList
        </Typography>
        <StartEnd start={start} end={end} setStart={setStart} setEnd={setEnd} />
        <Button
          onClick={onSubmit}
          variant={'contained'}
          color="brand"
          sx={{
            width: 1,
            mb: 4,
            boxShadow: 'none',
            textTransform: 'none',
          }}
        >
          {loading ? (
            <>
              <CircularProgress color="inherit" size="24.5px" sx={{ mr: 1 }} />
              Thinking...
            </>
          ) : (
            'Search'
          )}
        </Button>
        {routes?.length > 0 && (
          <ThemedRouteList
            routes={routes}
            onClick={onRouteClick}
            onMouseEnter={(e, route) => setHoveredRoute(route)}
            selectedRoute={selectedRoute || hoveredRoute}
          />
        )}
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <Map onClick={onMapClick} loading={loading} start={start} end={end}>
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
