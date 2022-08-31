/*
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react'
import { createCustomEqual } from 'fast-equals'
import { isLatLngLiteral } from '@googlemaps/typescript-guards'
import mapStyles from '../../../styles/mapStyles'
import theme from '../../theme'
import useMediaQuery from '@mui/material/useMediaQuery'
import { initialMapCenter } from '../../utils/initialCoordinates'


interface MapWrapper extends google.maps.MapOptions {
  onClick?: (e: google.maps.MapMouseEvent) => void
  loading: boolean
  start?: Array<number>
  end?: Array<number>
  children?: React.ReactNode
}

const MapWrapper: React.VFC = ({
  start,
  end,
  loadingRoutes,
  onClick,
  children,
}) => {
  const [zoom, setZoom] = React.useState(13) // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: initialMapCenter[0],
    lng: initialMapCenter[1],
  })

  const onIdle = (m: google.maps.Map) => {
    setZoom(m.getZoom()!)
    setCenter(m.getCenter()!.toJSON())
  }

  return (
    <div style={{ display: 'flex', height: '100%' }}>
        <Map
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: '1', height: '100%' }}
          styles={mapStyles}
          gestureHandling="greedy"
          start={start}
          end={end}
          loadingRoutes={loadingRoutes}
        >
          {children}
        </Map>
    </div>
  )
}

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string }
  onClick?: (e: google.maps.MapMouseEvent) => void
  onIdle?: (map: google.maps.Map) => void
  loadingRoutes: boolean
  start?: Array<number>
  end?: Array<number>
  children?: React.ReactNode
}

const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  loadingRoutes,
  start,
  end,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [map, setMap] = React.useState<google.maps.Map>()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])

  React.useEffect(() => {
    if (map) {
      const actions = ['click', 'idle']
      actions.forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      )

      if (onClick) {
        map.addListener('click', onClick)
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map))
      }
    }
  }, [map, onClick, onIdle])

  React.useEffect(() => {
    if (map && loadingRoutes) {
      const padding = isDesktop
        ? {
            right: 20,
            top: 40,
            left: 20,
            bottom: 0,
          }
        : {
            right: 20,
            top: 40,
            left: 20,
            bottom: screen.height / 3,
          }
      const bounds = new google.maps.LatLngBounds()
      if (start) {
        bounds.extend(new google.maps.LatLng({ lat: start[0], lng: start[1] }))
      }
      if (start) {
        bounds.extend(new google.maps.LatLng({ lat: end[0], lng: end[1] }))
      }
      map.fitBounds(bounds, padding)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, loadingRoutes])

  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map })
        }
      })}
    </>
  )
}

const deepCompareEqualsForMaps = createCustomEqual(
  (deepEqual) => (a: any, b: any) => {
    if (
      isLatLngLiteral(a) ||
      a instanceof google.maps.LatLng ||
      isLatLngLiteral(b) ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b)
  }
)

function useDeepCompareMemoize(value: any) {
  const ref = React.useRef()

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value
  }

  return ref.current
}

function useDeepCompareEffectForMaps(
  callback: React.EffectCallback,
  dependencies: any[]
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

export default MapWrapper
