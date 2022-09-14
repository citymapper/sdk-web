import Polyline from '../markers/Polyline'
import StationMarker from '../markers/StationMarker'
import { convertToGooglePolyline } from '../../utils/polyline'
import polyline from '@mapbox/polyline'

const lineSymbol = {
  path: 'M 0,-1 0,1',
  strokeOpacity: 1,
  scale: 2,
}

const legStyles = {
  walk: {
    geodesic: true,
    strokeColor: '#7DA1BE',
    strokeOpacity: 0.5,
    strokeWeight: 4,
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
    strokeColor: '#C8342C',
    strokeOpacity: 1.0,
    strokeWeight: 4,
  },
}

const defaultLegStyle = {
  geodesic: true,
  strokeColor: '#00FF00',
  strokeOpacity: 1.0,
  strokeWeight: 2,
}

const MapLine: NextPage = ({ path, map, style }) => {
  return <Polyline path={path} map={map} {...style} />
}

const MapStop: NextPage = ({ position, map, style }) => {
  const googlePosition = {
    lat: position.lat,
    lng: position.lon ? position.lon : position.lng,
  }
  return <StationMarker position={googlePosition} map={map} {...style} />
  // return <Circle position={googlePosition} map={map} {...style} />
}

const MapLeg: NextPage = ({ leg, map, isSelected }) => {
  const { path, stops } = leg
  const legStyle = { ...(legStyles[leg.travel_mode] || defaultLegStyle) }
  if (leg.services?.length) {
    legStyle.strokeColor = leg.services[0].color
  }
  legStyle.strokeOpacity = isSelected ? 1.0 : 0.1
  return (
    <>
      <MapLine path={path} map={map} style={legStyle} />

      {stops &&
        isSelected &&
        stops.map((s, i) => {
          if (!s) return null
          return (
            <MapStop
              key={i}
              position={s.coordinates}
              map={map}
              style={legStyle}
            />
          )
        })}
    </>
  )
}

const MapRoute: NextPage = ({ route, isSelected, map }) => {
  return (
    <>
      {route.legs.map((leg, i) => {
        return <MapLeg leg={leg} isSelected={isSelected} key={i} map={map} />
      })}
    </>
  )
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
