import Polyline from '../markers/Polyline'
import polyline from '@mapbox/polyline'
import { convertToGooglePolyline } from '../../utils/polyline'

const lineSymbol = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 2,
}

const legStyles = {
  walk: {
    geodesic: true,
    strokeColor: '#000000',
    strokeOpacity: 0.5,
    strokeWeight: 2,
    selected: {
      strokeOpacity: 1.0,
    },
    // icons: [
    //   {
    //     icon: lineSymbol,
    //     offset: '0',
    //     repeat: '20px',
    //   },
    // ],
  },
  transit: {
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  },
}

const defaultLegStyle = {
  geodesic: true,
  strokeColor: '#00FF00',
  strokeOpacity: 1.0,
  strokeWeight: 2,
}

const MapRoute: NextPage = ({ route, isSelected, map }) => {
  const paths = route.legs.map((leg) => leg.path)
  const styles = route.legs.map(
    (leg) => legStyles[leg.travel_mode] || defaultLegStyle
  )
  return paths.map((p, i) => {
    return (
      <Polyline
        key={i}
        path={p}
        map={map}
        {...styles[i]}
        strokeOpacity={isSelected ? 1.0 : 0.1}
      />
    )
  })
}

const MapRoutes: NextPage = ({ routes, selectedRoute, map }) => {
  const decodedRoutes = routes.map((route) => {
    const decodedLegs = route.legs.map((leg) => {
      const decodedPath = polyline.decode(leg.path)
      const googleMapPath = convertToGooglePolyline(decodedPath)
      return { ...leg, path: googleMapPath }
    })

    return { ...route, legs: decodedLegs }
  })
  return (
    <>
      {decodedRoutes.map((route, i) => (
        <MapRoute
          key={i}
          route={route}
          map={map}
          isSelected={route.signature === selectedRoute?.signature}
        />
      ))}
    </>
  )
}

export default MapRoutes
