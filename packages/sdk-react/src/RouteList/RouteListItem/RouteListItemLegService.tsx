import { Service, Status } from '@citymapper/api/@types'
import { cx } from '@emotion/css'
import React from 'react'
import styled from '../../utils/cmStyled'
import { RouteListProps } from '../RouteList'
import { ServiceMode } from './RouteListItemLeg'
import ServiceIcon from './ServiceIcon'
import ServiceStatus from './ServiceStatus'

type RouteListItemLegServiceProps = {
  services: Service[]
  statuses?: Status[]
} & Pick<
  RouteListProps,
  'serviceLegOptions' | 'serviceStyle' | 'serviceSeparator' | 'serviceBranding'
>

const ServiceWrapper = styled('div', {
  className: 'cm-route-summary-service',
})`
  position: relative;
  display: flex;
  align-items: center;

  &.cm-route-summary-service {
    &--multiple,
    &--non-branded {
      border-width: 0.5px;
      border-style: solid;
      border-color: ${({ theme }) => theme.palette.tone.grey30.color};
      border-radius: ${({ theme }) => theme.borderRadius / 2}px;
      padding: ${({ theme }) => theme.spacing(0.5)};
      font-size: 0.875em;
      font-weight: 600;
    }
    &--non-branded {
      svg,
      img {
        margin-right: ${({ theme }) => theme.spacing(0.25)};
      }
    }
    &--badge {
      border: none;
      padding: 0;

      .cm-route-summary-service-name {
        height: 24px;
      }

      ${({ theme }) => theme.CmRouteSummary?.badge}
    }
    ${({ theme }) => theme.CmRouteSummary?.service}
  }
`

const ServiceItem = styled('span', {
  className: 'cm-route-summary-service-item',
})<{ badgeColor?: string }>`
  position: relative;
  display: flex;
  align-items: center;
  ${({ badgeColor, theme }) => {
    if (badgeColor)
      return `
        .cm-route-summary-service-name,
        .cm-route-summary-service-marker {
            background-color: ${badgeColor};
            color: ${theme.palette.contrastingColor(badgeColor)};
            padding: 2.5px 5px;
            border-radius: ${theme.borderRadius / 2}px;
            margin-right: ${theme.spacing(0.25)};
        }

        .cm-route-summary-service-marker {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            padding: 0;
            width: 3px;
        }
        `
  }}

  &.cm-route-summary-service-item {
    ${({ theme }) => theme.CmRouteSummary?.serviceItem}
  }
`

const ServiceName = styled('div', {
  className: 'cm-route-summary-service-name',
})`
  &.cm-route-summary-service-name {
    ${({ theme }) => theme.CmRouteSummary?.serviceName}
  }
`

const ServiceBadgeMarker = styled('div', {
  className: 'cm-route-summary-service-marker',
})`
  &.cm-route-summary-service-marker {
    ${({ theme }) => theme.CmRouteSummary?.badgeMarker}
  }
`

const ServiceOverflow = styled('div', {
  className: 'cm-route-summary-service-overflow',
})`
  margin-left: ${({ theme }) => theme.spacing(0.5)};
  font-size: 0.8125em;
  font-weight: normal;
  color: ${({ theme }) => theme.palette.tone.grey50.color};

  .cm-route-summary-service-overflow {
    ${({ theme }) => theme.CmRouteSummary?.boxOverflow}
  }
`

export const ServiceSeparator = styled('div', {
  className: 'cm-route-summary-service-separator',
})`
  margin: 0 ${({ theme }) => theme.spacing(0.5)};
  color: ${({ theme }) => theme.palette.tone.grey20.color};

  &.cm-route-summary-service-separator {
    ${({ theme }) => theme.CmRouteSummary?.serviceSeparator}
  }
`

const RouteListItemLegService: React.FC<RouteListItemLegServiceProps> = ({
  services,
  statuses,
  serviceStyle = 'box',
  serviceSeparator = <ServiceSeparator>/</ServiceSeparator>,
  serviceLegOptions = true,
  serviceBranding = true,
}) => {
  let previousBrandId: Service['brand']['id'] | null = null

  const brandedServices = services.reduce((result, service) => {
    return (
      result +
      (service.images &&
      service.images.map((s) => s.ui_role === 'service').length > 0
        ? 1
        : 0)
    )
  }, 0)

  const allBranded = brandedServices === services.length

  const displayBadge = brandedServices === 0 && serviceStyle === 'badge'

  return (
    <ServiceWrapper
      className={cx({
        'cm-route-summary-service--multiple': services.length > 1,
        'cm-route-summary-service--non-branded':
          !serviceBranding || !allBranded,
        'cm-route-summary-service--badge': displayBadge,
      })}
    >
      {services.map((s, i) => {
        const status = statuses?.find((service) =>
          service.service_ids?.includes(s.id)
        )

        if (serviceBranding) {
          const imageHeight = services.length === 1 ? 24 : 16
          const serviceIcon = s.images?.find(
            (image) => image.height === imageHeight
          )
          if (serviceIcon) {
            return (
              <React.Fragment key={s.id}>
                <ServiceItem>
                  <ServiceStatus
                    type={status?.type || null}
                    multiService={services.length > 1}
                    isBox={!displayBadge}
                  />
                  <ServiceMode
                    data-service-mode={s.vehicle_types[0]}
                    data-service-brand={s.brand.id}
                    size={services.length === 1 ? 'large' : 'small'}
                  >
                    <img src={serviceIcon?.url} title={s.name} />
                  </ServiceMode>
                </ServiceItem>
                {services.length > 1 && !allBranded && i < services.length - 1
                  ? serviceSeparator
                  : null}
              </React.Fragment>
            )
          }
        }
        const showModeIcon = previousBrandId !== s.brand.id
        previousBrandId = s.brand.id

        let icon = <ServiceIcon vehicleType={s.vehicle_types[0]} />
        if (serviceBranding) {
          const brandIcon = s.brand.images?.find(
            (i) => !i.is_generic && i.ui_role === 'vehicle_compact'
          )
          if (brandIcon) {
            icon = <img src={brandIcon.url} />
          }
        }

        let serviceLabel = null
        if (serviceLegOptions || i === 0) {
          serviceLabel = <ServiceName>{s.name}</ServiceName>
        } else if (!serviceLegOptions) {
          if (displayBadge) {
            serviceLabel = <ServiceBadgeMarker>&nbsp;</ServiceBadgeMarker>
          } else {
            if (i === 1) {
              serviceLabel = (
                <ServiceOverflow>+{services.length - 1}</ServiceOverflow>
              )
            }
          }
        }

        return (
          <React.Fragment key={s.id}>
            <ServiceItem
              badgeColor={displayBadge ? s.background_color : undefined}
            >
              <ServiceStatus
                type={status?.type || null}
                multiService={services.length > 1}
                isBox={!displayBadge}
              />
              {showModeIcon || i === 0 ? (
                <ServiceMode
                  data-service-mode={s.vehicle_types[0]}
                  data-service-brand={s.brand.id}
                  size={displayBadge ? 'large' : 'small'}
                >
                  {icon}
                </ServiceMode>
              ) : null}
              {serviceLabel}
            </ServiceItem>
            {serviceLegOptions &&
            serviceStyle === 'box' &&
            services.length > 1 &&
            i < services.length - 1
              ? serviceSeparator
              : null}
          </React.Fragment>
        )
      })}
    </ServiceWrapper>
  )
}

export default RouteListItemLegService
