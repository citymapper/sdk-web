import type {
  Departure,
  DepartureTransitLive,
  Stop,
} from '@citymapper/api/@types'
import React from 'react'
import styled from '../../utils/cmStyled'
import DepartureFrequency from './Departures/DepartureFrequency'
import DepartureLive from './Departures/DepartureLive'
import DeparturesScheduled from './Departures/DeparturesScheduled'

export interface RouteListItemDeparturesProps {
  departures: Departure[]
  stop: Stop
}

const Wrapper = styled('div', { className: 'cm-route-departures' })`
  font-size: 0.8125em;
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing(1.75)};
  &.cm-route-departures {
    ${({ theme }) => theme.CmDepartures?.root}
  }
`

const RouteListItemDepartures: React.FC<RouteListItemDeparturesProps> = ({
  departures,
  stop,
}) => {
  if (!departures || departures.length === 0) return null

  switch (departures[0].type) {
    case 'frequency': {
      return (
        <Wrapper data-departure-type="frequency">
          <DepartureFrequency
            frequencyRange={departures[0].frequency_seconds_range}
            originStation={stop.name}
          />
        </Wrapper>
      )
    }
    case 'scheduled': {
      if (!departures[0].scheduled_time) return null
      return (
        <Wrapper data-departure-type="scheduled">
          <DeparturesScheduled
            time={departures[0].scheduled_time}
            status={departures[0].time_status}
            headSign={departures[0].headsign}
            originStation={stop.name}
          />
        </Wrapper>
      )
    }
    case 'live': {
      const liveDepartures = departures.filter(
        (d) => d.type === 'live'
      ) as DepartureTransitLive[]
      return (
        <Wrapper data-departure-type="live" data-is-live="true">
          <DepartureLive
            departures={liveDepartures}
            originStation={stop.name}
          />
        </Wrapper>
      )
    }
    default:
      return null
  }
}

export default RouteListItemDepartures
