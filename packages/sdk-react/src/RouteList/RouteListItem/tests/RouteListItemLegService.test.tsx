import React from 'react'
import customRender from '../../../jest/customRender'
import CentralLine from '../../../mocks/services/CentralLine'
import DLR from '../../../mocks/services/DLR'
import LondonBus40 from '../../../mocks/services/LondonBus40'
import LondonBus63 from '../../../mocks/services/LondonBus63'
import RouteListItemLegService from '../RouteListItemLegService'

describe('RouteListItemLegService', () => {
  // single branded services
  it('single branded service should display as icon by default', () => {
    const { container } = customRender(
      <RouteListItemLegService services={[CentralLine]} />
    )
    expect(container).toMatchSnapshot()
  })
  it('single branded service should display disruption when icon', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[CentralLine]}
        statuses={[
          {
            type: 'travel_affected',
            title: 'Severe Delays',
            description: 'Central Line',
            service_ids: ['Central'],
          },
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('single branded service should display in a box by default when serviceBranding is false', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[CentralLine]}
        serviceBranding={false}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('single branded service should display disruption correctly when in box', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[CentralLine]}
        serviceBranding={false}
        statuses={[
          {
            type: 'travel_affected',
            title: 'Severe Delays',
            description: 'Central Line',
            service_ids: ['Central'],
          },
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('single branded service should display as a badge when serviceBranding is false and serviceStyle is badge', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[CentralLine]}
        serviceBranding={false}
        serviceStyle="badge"
      />
    )
    expect(container).toMatchSnapshot()
  })

  // TODO Implement this and add test
  it.skip('single branded service should display disruption correctly when badge', () => {})

  // single non-branded service
  it('should display as a box with correct mode icon when serviceBranding is false', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[LondonBus40]}
        serviceBranding={false}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should display as a badge with correct mode icon when serviceBranding is false', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[LondonBus40]}
        serviceBranding={false}
        serviceStyle="badge"
      />
    )
    expect(container).toMatchSnapshot()
  })

  // multiple branded services
  it('multiple branded service should display in a box without separators by default', () => {
    const { container } = customRender(
      <RouteListItemLegService services={[CentralLine, DLR]} />
    )
    expect(container).toMatchSnapshot()
  })
  it('multiple branded service should display disruption correctly when in box', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[CentralLine, DLR]}
        statuses={[
          {
            type: 'travel_affected',
            title: 'Severe Delays',
            description: 'Central Line',
            service_ids: ['Central'],
          },
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('multiple branded service should display in a box when serviceBranding is false', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[CentralLine, DLR]}
        serviceBranding={false}
      />
    )
    expect(container).toMatchSnapshot()
  })
  it('multiple branded service should display in a box even when serviceStyle is badge', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[CentralLine, DLR]}
        serviceBranding={false}
        serviceStyle="badge"
      />
    )
    expect(container).toMatchSnapshot()
  })

  // multiple non-branded services
  it('multiple non-branded service should display in a box with 1 icon', () => {
    const { container } = customRender(
      <RouteListItemLegService services={[LondonBus40, LondonBus63]} />
    )
    expect(container).toMatchSnapshot()
  })

  it('multiple non-branded service should display as badge with 1 icon', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[LondonBus40, LondonBus63]}
        serviceStyle="badge"
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('multiple non-branded service should display as badge with 1 icon and correct disruption', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[LondonBus40, LondonBus63]}
        serviceStyle="badge"
        statuses={[
          {
            type: 'travel_affected',
            title: 'Severe Delays',
            description: 'London Bus 63',
            service_ids: ['LondonBus63'],
          },
        ]}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('multiple non-branded service should display as badge with markers when serviceLegOptions is false', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[LondonBus40, LondonBus63]}
        serviceStyle="badge"
        serviceLegOptions={false}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('multiple non-branded service should display in a box with overflow when serviceLegOptions is false', () => {
    const { container } = customRender(
      <RouteListItemLegService
        services={[LondonBus40, LondonBus63]}
        serviceLegOptions={false}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
