import type { NextPage } from 'next'
import React from 'react'
import Map from './map/Map'
import SideBar from './sideBar/SideBar'
import theme from '../theme'
import CitymapperApi from '@citymapper/api'
import { Global } from '@emotion/react'
import { Route } from '@citymapper/api/generated/models/Route'
import { CssBaseline, SwipeableDrawer, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/system/Box'
import Heading from './Heading'
import { isTouchDevice } from '../utils/isTouchDevice'
import { initialStart, initialEnd } from '../utils/initialCoordinates'
import { useRouter } from 'next/router'

const drawerBleeding = 134

const myApi = new CitymapperApi({
  apiKey: 'no api key',
  apiEndpoint: '/api/citymapper',
})

const TransitDirections: NextPage = () => {
  const router = useRouter()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  const [end, setEnd] = React.useState(initialEnd)
  const [start, setStart] = React.useState(initialStart)
  const [routes, setRoutes] = React.useState([] as Route[])
  const [selectedRoute, setSelectedRoute] = React.useState(null as Route | null)
  const [hoveredRoute, setHoveredRoute] = React.useState(null as Route | null)
  const [loadingRoutes, setLoadingRoutes] = React.useState(false)
  const [markerIndex, setMarkerIndex] = React.useState(1)
  const [open, setOpen] = React.useState(false)
  const [swipeable, setSwipeable] = React.useState(false)
  const [search, setSearch] = React.useState(false)

  React.useEffect(() => {
    const result = isTouchDevice() ? true : false
    setSwipeable(result)
  }, [])

  React.useEffect(() => {
    const fetchData = async () => {
      setSelectedRoute(null)
      setLoadingRoutes(true)
      setOpen(true)
      const response = await myApi.directions_transit(start, end)
      setRoutes(response.routes)
      setLoadingRoutes(false)
    }
    fetchData()
  }, [end, search])

  React.useEffect(() => {
    const { endcoord } = router.query
    if (endcoord) {
      const [lat, lng] = (endcoord as string).split(',')
      setEnd([parseFloat(lat), parseFloat(lng)])
    }
  }, [router.query])

  const handleInputChange = (
    val: React.SetStateAction<number[]>,
    markerIndex: number
  ) => {
    if (markerIndex === 0) {
      setStart(val)
    } else {
      setEnd(val)
    }
  }

  const onButtonClick = async () => setSearch(!search)

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

  const onMarkerDrag = (e: google.maps.MapMouseEvent, markerIndex: number) => {
    if (markerIndex === 0) {
      setStart(e.target.value)
    } else {
      setEnd(e.target.value)
    }
  }

  const toggleDrawer = (newOpen: boolean) => setOpen(newOpen)

  const sideBar = (
    <SideBar
      start={start}
      end={end}
      routes={routes}
      selectedRoute={selectedRoute || hoveredRoute}
      loadingRoutes={loadingRoutes}
      handleInputChange={handleInputChange}
      onButtonClick={onButtonClick}
      onRouteClick={onRouteClick}
      onRouteHover={setHoveredRoute}
    />
  )

  const map = (
    <Map
      start={start}
      end={end}
      routes={routes}
      selectedRoute={selectedRoute || hoveredRoute}
      loadingRoutes={loadingRoutes}
      onMapClick={onMapClick}
      onMarkerDrag={onMarkerDrag}
    />
  )

  return (
    <>
      {isDesktop && (
        <RootDesktop container spacing={0}>
          <SideBarDesktop item>{sideBar}</SideBarDesktop>
          <MapDesktop item>{map}</MapDesktop>
        </RootDesktop>
      )}
      {!isDesktop && (
        <RootMobile>
          <CssBaseline />
          <Global
            styles={{
              '.MuiDrawer-root > .MuiPaper-root': {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: 'visible',
              },
            }}
          />
          <MapMobile>{map}</MapMobile>
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClick={() => toggleDrawer(!open)}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <PullerMobile>
              <Puller />
              <Heading />
            </PullerMobile>
            <SideBarMobile>{sideBar}</SideBarMobile>
          </SwipeableDrawer>
        </RootMobile>
      )}
    </>
  )
}

export default TransitDirections

const RootDesktop = styled(Grid)(() => ({
  height: '100vh',
}))

const RootMobile = styled(Box)(() => ({
  height: '100%',
}))

const SideBarDesktop = styled(Grid)(() => ({
  boxShadow: '5px 0 5px -5px #333',
  height: '100vh',
  overflow: 'auto',
  width: '440px',
  zIndex: 1,
}))

const SideBarMobile = styled(Box)(() => ({
  backgroundColor: '#fff',
  height: '100%',
  overflow: 'auto',
}))

const MapDesktop = styled(Grid)(() => ({
  flexGrow: 1,
  height: '100%',
}))

const MapMobile = styled(Box)(() => ({
  backgroundColor: '#fff',
  height: 'calc(100vh - 120px)',
}))

const PullerMobile = styled(Box)(() => ({
  alignItems: 'center',
  backgroundColor: '#fff',
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  boxShadow: '0 -5px 5px -5px #333',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  height: drawerBleeding,
  justifyContent: 'center',
  left: 0,
  paddingTop: 16,
  paddingLeft: 20,
  paddingRight: 20,
  pointerEvents: 'all',
  position: 'absolute',
  right: 0,
  top: -drawerBleeding,
  visibility: 'visible',
}))

const Puller = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 4,
  height: 8,
  width: 32,
  marginBottom: 8,
}))
