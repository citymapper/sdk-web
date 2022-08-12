import { DateTime } from 'luxon'
import React from 'react'

import type { Departure } from '@citymapper/api/@types'
import styled from '@emotion/styled'
import ScheduledStatus from './ScheduledStatus'

interface DeparturesScheduledProps {
  time: string
  status: Departure['time_status']
  headSign: Departure['headsign']
  originStation: string
}

const Wrapper = styled.div`
  &.cm-departure-scheduled-root {
    ${({ theme }) => theme.CmDeparturesScheduled?.root}
  }
`

const Departures = styled.span`
  &.cm-departure-scheduled-departures {
    ${({ theme }) => theme.CmDeparturesScheduled?.departures}
  }
`

const Origin = styled.span`
  color: ${({ theme }) => theme.palette.tone.grey50.color};
  &.cm-departure-scheduled-origin {
    ${({ theme }) => theme.CmDeparturesScheduled?.origin}
  }
`

const DeparturesScheduled: React.FC<DeparturesScheduledProps> = ({
  time,
  status,
  headSign,
  originStation,
}) => {
  const timeFormatted = DateTime.fromISO(time).toLocaleString(
    DateTime.TIME_24_SIMPLE
  )

  return (
    <Wrapper className="cm-departure-scheduled-root">
      <Departures className="cm-departure-scheduled-departures">
        {timeFormatted}
        <ScheduledStatus status={status} prependText=" (" appendText=") " />
        {headSign}
      </Departures>{' '}
      <Origin className="cm-departure-scheduled-origin">
        from {originStation}
      </Origin>
    </Wrapper>
  )
}

export default DeparturesScheduled
