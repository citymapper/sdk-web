import type { Leg } from '@citymapper/api/@types'
import React from 'react'
import { RouteListProps } from '..'
import ServiceIconHike from '../../Icons/Service/ServiceIconHike'
import ModeIconWalk from '../../Icons/Service/ServiceIconWalk'
import styled from '../../utils/cmStyled'
import RouteListItemLegService, {
  ServiceSeparator,
} from './RouteListItemLegService'

export type RouteListItemLegsProps = {
  leg: Leg
} & Pick<
  RouteListProps,
  | 'serviceBranding'
  | 'serviceStyle'
  | 'showTransferTime'
  | 'transferTimeLong'
  | 'serviceLegOptions'
  | 'serviceSeparator'
>

const TransferWrapper = styled('div', {
  className: 'cm-route-summary-transfer',
})`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.tone.grey40.color};
  &.cm-route-summary-transfer {
    ${({ theme }) => theme.CmRouteSummary?.transfer}
  }
`

const TransferDuration = styled('div', {
  className: 'cm-route-summary-duration',
})`
  font-size: 0.8125em;
  color: ${({ theme }) => theme.palette.tone.grey70.color};
  margin-left: ${({ theme }) => theme.spacing(0.25)};

  &.cm-route-summary-duration {
    ${({ theme }) => theme.CmRouteSummary?.duration}
  }
`

const VehicleWrapper = styled('div', {
  className: 'cm-route-summary-vehicle',
})`
  &.cm-route-summary-vehicle {
    ${({ theme }) => theme.CmRouteSummary?.vehicle}
  }
`

export const ServiceMode = styled('div', {
  className: 'cm-route-summary-mode',
})<{ size?: 'small' | 'large' }>`
  display: flex;
  align-items: center;

  svg,
  img {
    height: 100%;
    width: 100%;
  }

  &.cm-route-summary-mode {
    color: ${({ theme }) => theme.palette.tone.grey50.color};
    height: ${({ size }) => (size === 'large' ? 24 : 16)}px;
    ${({ theme }) => theme.CmRouteSummary?.mode}
  }
`

const RouteListItemLeg: React.FC<RouteListItemLegsProps> = ({
  leg,
  showTransferTime = true,
  transferTimeLong = 25,
  serviceBranding = true,
  serviceStyle = 'box',
  serviceLegOptions = true,
  serviceSeparator = <ServiceSeparator />,
}) => {
  switch (leg.travel_mode) {
    case 'walk': {
      if (!leg.duration_seconds) {
        return (
          <TransferWrapper>
            <ServiceMode size="large" data-service-mode="walk">
              <ModeIconWalk />
            </ServiceMode>
          </TransferWrapper>
        )
      }
      const transferTime = Math.ceil(leg.duration_seconds / 60)
      return (
        <TransferWrapper>
          <ServiceMode
            size="large"
            data-service-mode={
              transferTime < transferTimeLong ? 'walk' : 'hike'
            }
          >
            {transferTime < transferTimeLong ? (
              <ModeIconWalk />
            ) : (
              <ServiceIconHike />
            )}
          </ServiceMode>
          {showTransferTime ? (
            <TransferDuration>{transferTime}</TransferDuration>
          ) : null}
        </TransferWrapper>
      )
    }
    case 'on_demand':
    case 'self_piloted':
      return <VehicleWrapper>Vehicle</VehicleWrapper>
    case 'transit': {
      return (
        <RouteListItemLegService
          services={leg.services || []}
          serviceStyle={serviceStyle}
          serviceLegOptions={serviceLegOptions}
          serviceSeparator={serviceSeparator}
          serviceBranding={serviceBranding}
          statuses={leg.updatable_detail?.statuses}
        />
      )
    }
    default:
      return null
  }
}

export default RouteListItemLeg
