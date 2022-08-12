import type { Departure, LegTransit, Route, Stop } from '@citymapper/api/@types'
import React, { useMemo } from 'react'
import { RouteListProps, useRouteListContext } from '..'
import styled from '../../utils/cmStyled'
import RouteListItemDepartures from './RouteListItemDepartures'
import RouteListItemDuration from './RouteListItemDuration'
import RouteListItemJourneyTime from './RouteListItemJourneyTime'
import RouteListItemPrice from './RouteListItemPrice'
import RouteListItemSummary from './RouteListItemSummary'

export type RouteListItemDetailsProps = {
  route: Route
  /**
   * Sets every duration component to the specified width
   */
  durationWidth?: number
} & Pick<
  RouteListProps,
  | 'showPrices'
  | 'serviceBranding'
  | 'serviceLegOptions'
  | 'serviceSeparator'
  | 'serviceStyle'
  | 'showJourneyTimes'
  | 'showTransferTime'
  | 'transferTimeLong'
  | 'transferTimeMinimum'
  | 'onClick'
>

export const Row = styled('div', { className: 'cm-route-list-item-row' })`
  display: flex;
  width: 100%;
  align-items: center;

  &.cm-route-list-item-row {
    ${({ theme }) => theme.CmRouteListItem?.row}
  }
`

const PriceDuration = styled('div', {
  className: 'cm-route-list-item-price-and-duration',
})`
  display: flex;
  align-items: center;
  align-self: flex-start;
`

const RouteListItemDetails: React.FC<RouteListItemDetailsProps> = ({
  route,
  durationWidth,
  showPrices = true,
  showJourneyTimes = true,
  ...upstreamProps
}) => {
  const { liveData } = useRouteListContext()

  const liveItem = useMemo(() => {
    return liveData?.find((l) => l.request_signature === route.signature)
  }, [route, liveData])

  const firstTransitLeg = useMemo(() => {
    const transitLeg = route.legs.findIndex((l) => l.travel_mode === 'transit')
    if (transitLeg === -1) return null
    if (liveItem)
      return {
        departures: liveItem.leg_updates[transitLeg].departures as Departure[],
        stop: (route.legs[transitLeg] as LegTransit).stops[0] as Stop,
      }
    return {
      departures: route.legs[transitLeg].updatable_detail
        ?.departures as Departure[],
      stop: (route.legs[transitLeg] as LegTransit).stops[0] as Stop,
    }
  }, [route.legs, liveItem])

  return (
    <>
      <Row>
        <RouteListItemSummary legs={route.legs} {...upstreamProps} />
        <PriceDuration>
          {showPrices && route.price ? (
            <RouteListItemPrice price={route.price} />
          ) : null}
          <RouteListItemDuration
            isLive={Boolean(liveItem)}
            minutes={
              route.duration_seconds
                ? Math.floor(route.duration_seconds / 60)
                : 0
            }
            minWidth={durationWidth}
          />
        </PriceDuration>
      </Row>
      {firstTransitLeg ? (
        <Row>
          <RouteListItemDepartures
            departures={firstTransitLeg.departures}
            stop={firstTransitLeg.stop}
          />
          {showJourneyTimes &&
          route.route_departure_time &&
          route.route_arrival_time ? (
            <RouteListItemJourneyTime
              start={route.route_departure_time}
              end={route.route_arrival_time}
            />
          ) : null}
        </Row>
      ) : null}
    </>
  )
}

export default RouteListItemDetails
