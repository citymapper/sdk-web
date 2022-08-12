import type { DepartureTransitLive } from '@citymapper/api/@types'
import styled from '@emotion/styled'
import React, { useMemo } from 'react'
import Blip from '../Blip'

interface DepartureLiveProps {
  departures: DepartureTransitLive[]
  originStation: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  &.cm-departure-live-root {
    ${({ theme }) => theme.CmDeparturesLive?.root}
  }
`

const Departures = styled.span`
  &.cm-departure-live-departures {
    ${({ theme }) => theme.CmDeparturesLive?.departures}
  }
`

const Origin = styled.span`
  color: ${({ theme }) => theme.palette.tone.grey50.color};
  &.cm-departure-live-origin {
    ${({ theme }) => theme.CmDeparturesLive?.origin}
  }
`

const DepartureLive: React.FC<DepartureLiveProps> = ({
  departures,
  originStation,
}) => {
  const timeDiff = useMemo(() => {
    if (!departures) return null
    const live = departures.filter((d) => d.type === 'live')
    return live
      .map((l) => {
        if (l.live_time) {
          const target = new Date(l.live_time)
          const now = new Date()

          const diff = Math.ceil((target.getTime() - now.getTime()) / 1000 / 60)
          if (diff < 1) return 0
          return diff
        }
      })
      .slice(0, 3)
      .join(', ')
  }, [departures])

  if (timeDiff)
    return (
      <Wrapper className="cm-departure-live-root">
        <Blip />
        <div>
          <Departures className="cm-departure-live-departures">
            In {timeDiff} min
          </Departures>{' '}
          <Origin className="cm-departure-live-origin">
            from {originStation}
          </Origin>
        </div>
      </Wrapper>
    )
  return null
}

export default DepartureLive
