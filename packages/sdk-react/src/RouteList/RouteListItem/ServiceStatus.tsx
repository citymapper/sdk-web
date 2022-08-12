import { Status } from '@citymapper/api/@types'
import { cx } from '@emotion/css'
import React, { useMemo } from 'react'
import IconStatusDisrupted from '../../Icons/IconStatusDisrupted'
import IconStatusPrevented from '../../Icons/IconStatusPrevented'
import styled from '../../utils/cmStyled'

interface ServiceStatusProps {
  type: Status['type'] | null
  isBox?: boolean
  multiService?: boolean
}

const Wrapper = styled('div', {
  className: 'cm-route-summary-service-status',
})<{ small?: boolean }>`
  position: absolute;
  width: 16px;
  height: 16px;
  top: -8px;
  right: -8px;
  z-index: 100;

  svg {
    width: 100%;
    height: 100%;
  }

  &.cm-route-summary-service-status {
    &--box {
      top: -8px;
      right: -8px;
    }

    &--small {
      width: 11px;
      height: 11px;
      top: -6px;
      right: -4px;
    }
  }
`

const ServiceStatus: React.FC<ServiceStatusProps> = ({
  type,
  isBox,
  multiService,
}) => {
  const disruptionIcon = useMemo(() => {
    switch (type) {
      case 'travel_affected':
        return <IconStatusDisrupted />
      case 'travel_prevented':
        return <IconStatusPrevented />
      default:
        return null
    }
  }, [type])

  if (!disruptionIcon) return null

  return (
    <Wrapper
      className={cx(
        {
          'cm-route-summary-service-status--small': multiService,
          'cm-route-summary-service-status--box': isBox,
        },
        `cm-route-summary-service-status--${type}`
      )}
    >
      {disruptionIcon}
    </Wrapper>
  )
}

export default ServiceStatus
