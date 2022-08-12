import type { Leg } from '@citymapper/api/@types'
import React, { useMemo } from 'react'
import styled from '../../utils/cmStyled'
import { RouteListItemDetailsProps } from './RouteListItemDetails'
import RouteListItemLeg from './RouteListItemLeg'

export type RouteListItemSummaryProps = {
  legs: Leg[]
} & Pick<
  RouteListItemDetailsProps,
  | 'showTransferTime'
  | 'serviceLegOptions'
  | 'serviceBranding'
  | 'serviceSeparator'
  | 'serviceStyle'
  | 'transferTimeLong'
  | 'transferTimeMinimum'
>

const Wrapper = styled('div', { className: 'cm-route-summary' })`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing(-1)};
  &.cm-route-summary {
    ${({ theme }) => theme.CmRouteSummary?.root}
  }
`

const LegWrapper = styled('div', { className: 'cm-route-summary-leg' })<{
  showSeparator: boolean
}>`
  margin-top: ${({ theme }) => theme.spacing(1)};
  display: inline-block;
  &:not(:last-of-type) {
    margin-right: ${({ theme, showSeparator }) =>
      theme.spacing(showSeparator ? 0 : 1.25)};
  }
  &.cm-route-summary-leg {
    ${({ theme }) => theme.CmRouteSummary?.leg}
  }
`

const Separator = styled('div', { className: 'cm-route-summary-separator' })`
  &:after {
    display: inline-block;
    content: '•';
    font-size: 1em;
    margin-top: ${({ theme }) => theme.spacing(1)};
    padding: 0 ${({ theme }) => theme.spacing(0.5)};
    color: ${({ theme }) => theme.palette.tone.grey50.color};
  }

  &.cm-route-summary-separator {
    ${({ theme }) => theme.CmRouteSummary?.separator}
  }
`

const RouteListItemSummary: React.FC<RouteListItemSummaryProps> = ({
  legs,
  transferTimeMinimum = 5,
  transferTimeLong = 25,
  serviceStyle = 'box',
  showTransferTime = true,
  serviceBranding = true,
  serviceLegOptions = true,
}) => {
  const filteredLegs = useMemo(() => {
    return legs.filter((leg) => {
      if (
        leg.travel_mode === 'walk' &&
        leg.duration_seconds &&
        Math.ceil(leg.duration_seconds / 60) < transferTimeMinimum
      )
        return false
      return true
    })
  }, [legs, transferTimeMinimum])
  return (
    <Wrapper>
      {filteredLegs.map((leg, i) => {
        const showSeparator =
          i < filteredLegs.length - 1 &&
          (leg.travel_mode !== 'walk' || !showTransferTime)
        return (
          <React.Fragment key={leg.path}>
            <LegWrapper showSeparator={showSeparator}>
              <RouteListItemLeg
                leg={leg}
                showTransferTime={showTransferTime}
                transferTimeLong={transferTimeLong}
                serviceBranding={serviceBranding}
                serviceStyle={serviceStyle}
                serviceLegOptions={serviceLegOptions}
              />
            </LegWrapper>
            {showSeparator ? <Separator /> : null}
          </React.Fragment>
        )
      })}
    </Wrapper>
  )
}

export default RouteListItemSummary
