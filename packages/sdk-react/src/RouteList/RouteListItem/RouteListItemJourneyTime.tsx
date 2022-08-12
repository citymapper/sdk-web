import { DateTime } from 'luxon'
import React from 'react'
import IconArrowRight from '../../Icons/IconArrowRight'
import styled from '../../utils/cmStyled'

interface RouteListItemJourneyTimeProps {
  /**
   * Journey start time in ISO format
   */
  start: string
  /**
   * Journey end time in ISO format
   */
  end: string
  /**
   * React Component to use as the separator between two times
   */
  IconSeparator?: React.ReactElement
}

const Wrapper = styled('div', { className: 'cm-route-times' })`
  display: flex;
  align-items: center;
  font-size: 0.8125em;
  font-weight: 600;
  line-height: 16px;
  margin-top: ${({ theme }) => theme.spacing(1.75)};

  svg {
    width: 13px;
    height: 13px;
    color: ${({ theme }) => theme.palette.tone.grey70.color};
    margin: 0 ${({ theme }) => theme.spacing(0.5)};
    opacity: 0.4;
  }

  &.cm-route-times {
    ${({ theme }) => theme.CmRouteTimes?.root}
  }
`

const RouteListItemJourneyTime: React.FC<RouteListItemJourneyTimeProps> = ({
  start,
  end,
  IconSeparator,
}) => {
  return (
    <Wrapper>
      {DateTime.fromISO(start).toLocaleString(DateTime.TIME_24_SIMPLE)}
      {IconSeparator ? IconSeparator : <IconArrowRight />}
      {DateTime.fromISO(end).toLocaleString(DateTime.TIME_24_SIMPLE)}
    </Wrapper>
  )
}

export default RouteListItemJourneyTime
