import type { Route, RouteUpdate } from '@citymapper/api/@types'
import styled from '@emotion/styled'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useCitymapper } from '../CMProvider'
import useSafeLayoutEffect from '../utils/useSafeLayoutEffect'
import RouteListItem from './RouteListItem/RouteListItem'
import { ServiceSeparator } from './RouteListItem/RouteListItemLegService'

export interface RouteListProps {
  routes: Route[]
  /**
   * Show minutes of walking next to walk icon
   */
  showTransferTime?: boolean

  /**
   * Time in minutes required at minimum to show the transfer icon
   * @default 5
   */
  transferTimeMinimum?: number

  /**
   * Time in minutes that a transfer walk is regarded as a hike and displays the relevant icon
   * @default 25
   */
  transferTimeLong?: number

  /**
   * Show start and end time of journeys
   */
  showJourneyTimes?: boolean

  /**
   * Show the route prices
   */
  showPrices?: boolean

  /**
   * Show service icon when available
   * @default true
   */
  serviceBranding?: boolean

  /**
   * Should show multiple options for a service leg when available
   * @default true
   */
  serviceLegOptions?: boolean

  /**
   * How transit services are presented
   * @default box
   */
  serviceStyle?: 'box' | 'badge'

  /**
   * A React element to act as the spacer between multiple services when `serviceStyle` is box
   */
  serviceSeparator?: React.ReactElement

  /**
   * Enable/Disable live departures API call every 60 seconds
   * API keys requires special permissions
   */
  showLiveDepartures: boolean

  /**
   * Will show this number of items, in a loading state
   */
  loadingCount?: number
  onClick?: (event: React.MouseEvent, data: Route) => void
  onMouseEnter?: (event: React.MouseEvent, data: Route) => void
  onMouseLeave?: (event: React.MouseEvent, data: Route) => void
  selectedRoute?: Route
  isSelected?: boolean
}

const Wrapper = styled.div`
  border-width: 2;
  border-style: solid;
  border-color: ${({ theme }) => theme.palette.tone.grey10.color};
  border-radius: ${({ theme }) => theme.borderRadius}px;

  &.cm-route-list-root {
    ${({ theme }) => theme.CmRouteListItem?.root}
  }
`

export const RouteListContext = createContext<{
  liveData: RouteUpdate[]
}>({
  liveData: [],
})
export const useRouteListContext = () => useContext(RouteListContext)

const RouteList: React.FC<RouteListProps> = ({
  routes,
  showJourneyTimes = false,
  showTransferTime,
  showLiveDepartures,
  transferTimeMinimum = 5,
  transferTimeLong = 25,
  showPrices = true,
  serviceBranding = true,
  serviceStyle = 'box',
  serviceSeparator = <ServiceSeparator />,
  serviceLegOptions = true,
  loadingCount = 0,
  onClick,
  onMouseEnter,
  onMouseLeave,
  selectedRoute,
}) => {
  const { api } = useCitymapper()
  const refList = useRef<HTMLDivElement | null>(null)
  const [durationWidth, setDurationWidth] =
    useState<number | undefined>(undefined)

  const [liveData, setLiveData] = useState<RouteUpdate[]>([])
  const [liveEnabled, setLiveEnabled] = useState(showLiveDepartures)

  useSafeLayoutEffect(() => {
    const listElement = refList.current
    if (listElement) {
      const durations = listElement?.querySelectorAll('.cm-route-duration-root')

      let biggest = 0
      durations.forEach((node) => {
        const width = node.getBoundingClientRect().width
        if (width > biggest) biggest = Math.ceil(width)
      })
      setDurationWidth(biggest)
    }
  }, [])

  const fetchLiveDepartures = async () => {
    try {
      const { route_updates } = await api.live_departures(
        routes.map((route) => route.signature)
      )
      setLiveData(route_updates)
    } catch (err) {
      const error = err as Error
      if (error.message === 'You cannot consume this service') {
        console.error('API key not allowed to access live updates. Disabling.')
        setLiveEnabled(false)
      } else {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    setLiveEnabled(showLiveDepartures)
    if (!showLiveDepartures) setLiveData([])
  }, [showLiveDepartures])

  useEffect(() => {
    /* TODO: remove any type, might need an isomorphic setInterval akin to fetch */
    let interval: NodeJS.Timer | null = null
    if (liveEnabled) {
      fetchLiveDepartures()
      interval = setInterval(() => {
        fetchLiveDepartures()
      }, 60000)
    }
    return () => {
      if (liveEnabled && interval !== null) {
        clearInterval(interval)
      }
    }
  }, [routes, liveEnabled])

  const renderLoading = useMemo(() => {
    const result = []
    for (let i = 0; i < loadingCount; i++) {
      result.push(<RouteListItem isLoading index={i} />)
    }
    return result.length > 0 ? result : null
  }, [loadingCount])

  return (
    <RouteListContext.Provider
      value={{
        liveData,
      }}
    >
      <Wrapper ref={refList} className="cm-route-list-root">
        {renderLoading
          ? renderLoading
          : routes.map((route) => (
              <RouteListItem
                route={route}
                key={route.signature}
                durationWidth={durationWidth}
                showPrices={showPrices}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                showTransferTime={showTransferTime}
                serviceBranding={serviceBranding}
                serviceLegOptions={serviceLegOptions}
                serviceSeparator={serviceSeparator}
                serviceStyle={serviceStyle}
                showJourneyTimes={showJourneyTimes}
                transferTimeLong={transferTimeLong}
                transferTimeMinimum={transferTimeMinimum}
                isSelected={selectedRoute?.signature === route.signature}
              />
            ))}
      </Wrapper>
    </RouteListContext.Provider>
  )
}

export default RouteList
