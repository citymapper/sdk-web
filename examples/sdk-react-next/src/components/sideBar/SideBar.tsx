import React from 'react'
import StartEnd from './StartEnd'
import Button from '../Button'
import RouteList from '../ThemedRouteList'
import { Box, useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Route } from '@citymapper/api/@types'
import theme from '../../theme'
import Heading from '../Heading'
import Footer from '../Footer'

const SideBar: React.FC<{
  start: Array<number>
  end: Array<number>
  routes: Array<Route>
  selectedRoute: Route
  loadingRoutes: boolean
  handleInputChange: (
    val: React.SetStateAction<number[]>,
    markerIndex: number
  ) => void
  onButtonClick: (e: React.MouseEvent<HTMLElement>) => void
  onRouteClick: (route: Route) => void
  onRouteHover: (route: Route) => void
}> = ({
  start,
  end,
  routes,
  selectedRoute,
  loadingRoutes,
  handleInputChange,
  onButtonClick,
  onRouteClick,
  onRouteHover,
}) => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <>
      <StyledBox>
        {isDesktop && <Heading />}
        <StartEnd
          start={start}
          end={end}
          handleInputChange={handleInputChange}
        />
        <Button
          onClick={onButtonClick}
          label="Search"
          loading={loadingRoutes}
        />
        {routes?.length > 0 && (
          <RouteList
            routes={routes}
            selectedRoute={selectedRoute}
            onClick={(e: React.MouseEvent<HTMLElement>, route: Route) =>
              onRouteClick(route)
            }
            onMouseEnter={(e: React.MouseEvent<HTMLElement>, route: Route) =>
              onRouteHover(route)
            }
          />
        )}
      </StyledBox>
      <Footer />
    </>
  )
}

export default SideBar

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  [theme.breakpoints.down('sm')]: {
    padding: 20,
    paddingTop: 0,
  },
  [theme.breakpoints.up('sm')]: {
    padding: 40,
  },
}))
