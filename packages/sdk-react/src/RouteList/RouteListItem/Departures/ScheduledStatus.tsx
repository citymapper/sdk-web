import { Departure } from '@citymapper/api/@types'
import React from 'react'
import styled from '../../../utils/cmStyled'

interface ScheduledStatusProps {
  status?: Departure['time_status']
  prependText?: string
  appendText?: string
}

const scheduledStatusText = {
  on_time: 'On time',
  delay: 'Delayed',
  cancellation: 'Cancelled',
}

const Wrapper = styled('span', {
  className: 'cm-departure-scheduled-statuses',
})`
  &.cm-departure-scheduled-statuses {
    &--on_time {
      color: ${({ theme }) => theme.palette.status.good.color};
      ${({ theme }) => theme.CmDeparturesScheduled?.statuses?.on_time}
    }
    &--delay {
      color: ${({ theme }) => theme.palette.status.bad.color};
      ${({ theme }) => theme.CmDeparturesScheduled?.statuses?.delay}
    }
    &--cancellation {
      color: ${({ theme }) => theme.palette.status.bad.color};
      ${({ theme }) => theme.CmDeparturesScheduled?.statuses?.cancellation}
    }
  }
`
const ScheduledStatus: React.FC<ScheduledStatusProps> = ({
  status,
  prependText,
  appendText,
}) => {
  if (
    !status ||
    !Object.keys(scheduledStatusText).includes(status) ||
    status === 'unknown'
  )
    return null
  return (
    <>
      {prependText}
      <Wrapper className={`cm-departure-scheduled-statuses--${status}`}>
        {scheduledStatusText[status]}
      </Wrapper>
      {appendText}
    </>
  )
}

export default ScheduledStatus
