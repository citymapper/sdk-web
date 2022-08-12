import React from 'react'
import styled from '../../utils/cmStyled'
import Blip from './Blip'

interface RouteListItemDurationProps {
  minutes: number
  isLive?: boolean
  minWidth?: number
}

const Wrapper = styled('div', { className: 'cm-route-duration-root' })<{
  durationWidth?: number
}>`
  display: flex;
  align-self: flex-start;
  align-items: baseline;
  justify-content: flex-end;
  min-width: ${({ durationWidth }) => durationWidth + 'px' || ''};

  &.cm-route-duration-root {
    ${({ theme }) => theme.CmRouteDuration?.root}
  }
`

const Value = styled('div', { className: 'cm-route-duration-value' })`
  font-size: 1.125em;
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing(0.25)};
  font-variant-numeric: tabular-nums;

  &.cm-route-duration-value {
    ${({ theme }) => theme.CmRouteDuration?.value}
  }
`

const Units = styled('div', { className: 'cm-route-duration-units' })`
  font-size: 0.6875em;
  font-weight: 400;

  &.cm-route-duration-units {
    ${({ theme }) => theme.CmRouteDuration?.units}
  }
`

const RouteListItemDuration: React.FC<RouteListItemDurationProps> = ({
  minutes,
  isLive,
  minWidth,
}) => {
  return (
    <Wrapper durationWidth={minWidth} data-is-live={isLive}>
      {isLive ? <Blip /> : null}
      <Value>{minutes}</Value>
      <Units>min</Units>
    </Wrapper>
  )
}

export default RouteListItemDuration
