import type { NextPage } from 'next'
import React from 'react'
import Map from './map/Map'
import SideBar from './sideBar/SideBar'
import theme from '../theme'
import CitymapperApi from '@citymapper/api'
import { Route } from '@citymapper/api/generated/models/Route'
import { useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

const myApi = new CitymapperApi({
  apiKey: 'no api key',
  apiEndpoint: '/api/citymapper',
})

const TransitDirections: NextPage = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const [end, setEnd] = React.useState([51.5, -0.05])
  const [start, setStart] = React.useState([51.5, -0.1])
  const [routes, setRoutes] = React.useState([] as Route[])
  const [selectedRoute, setSelectedRoute] = React.useState(null as Route | null)
  const [hoveredRoute, setHoveredRoute] = React.useState(null as Route | null)
  const [loadingRoutes, setLoadingRoutes] = React.useState(false)
  const [markerIndex, setMarkerIndex] = React.useState(0)

  const onButtonClick = async () => {
    setLoadingRoutes(true)
    const response = await myApi.directions_transit(start, end)
    setRoutes(response.routes)
    setLoadingRoutes(false)
  }

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    const newMarkerIndex = (markerIndex + 1) % 2
    if (newMarkerIndex === 0) {
      setStart([e.latLng.lat(), e.latLng.lng()])
    } else {
      setEnd([e.latLng.lat(), e.latLng.lng()])
    }
    setMarkerIndex(newMarkerIndex)
  }

  const onRouteClick = (route: Route) => setSelectedRoute(route)

  const onMarkerDrag = (coords: Array<number>, markerIndex: number) => {
    if (markerIndex === 0) {
      setStart(coords)
    } else {
      setEnd(coords)
    }
  }

  return (
    <Root
      container
      direction={isDesktop ? 'row' : 'column-reverse'}
      spacing={0}
    >
      <SideBarContainer item>
        <SideBar
          start={start}
          end={end}
          routes={routes}
          selectedRoute={selectedRoute || hoveredRoute}
          loadingRoutes={loadingRoutes}
          onButtonClick={onButtonClick}
          onRouteClick={onRouteClick}
          onRouteHover={setHoveredRoute}
        />
      </SideBarContainer>
      <MapContainer item>
        <Map
          start={start}
          end={end}
          routes={routes}
          selectedRoute={selectedRoute || hoveredRoute}
          loadingRoutes={loadingRoutes}
          onMapClick={onMapClick}
          onMarkerDrag={onMarkerDrag}
        />
      </MapContainer>
    </Root>
  )
}

export default TransitDirections

const Root = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
  },
}))

const SideBarContainer = styled(Grid)(({ theme }) => ({
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 -5px 5px -5px #333',
  },
  [theme.breakpoints.up('sm')]: {
    width: '440px',
    maxHeight: '100vh',
    overflowY: 'scroll',
    boxShadow: '5px 0 5px -5px #333',
  },
}))

const MapContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    height: '80vh',
  },
  [theme.breakpoints.up('sm')]: {
    flexGrow: 1,
    height: '100%',
  },
}))
