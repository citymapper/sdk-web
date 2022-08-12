import { DateTime } from 'luxon'
import React from 'react'
import customRender from '../../../jest/customRender'
import RouteListItemDepartures from '../RouteListItemDepartures'

describe('RouteListItemDepartures', () => {
  it('frequency: single departure is displayed correctly', () => {
    const { container } = customRender(
      <RouteListItemDepartures
        stop={{
          name: 'Stratford',
          coordinates: { lat: 0, lon: 0 },
          id: 'Stratford',
          indicator_text: '',
        }}
        departures={[
          {
            type: 'frequency',
            service_id: 'LondonBus89',
            frequency_seconds_range: [720, 720],
            time_status: 'on_time',
          },
        ]}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('frequency: departure range is displayed correctly', () => {
    const { container } = customRender(
      <RouteListItemDepartures
        stop={{
          name: 'Stratford',
          coordinates: { lat: 0, lon: 0 },
          id: 'Stratford',
          indicator_text: '',
        }}
        departures={[
          {
            type: 'frequency',
            service_id: 'LondonBus89',
            frequency_seconds_range: [720, 800],
            time_status: 'on_time',
          },
        ]}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('scheduled: single departure is displayed correctly', () => {
    const { container } = customRender(
      <RouteListItemDepartures
        stop={{
          name: 'Stratford',
          coordinates: { lat: 0, lon: 0 },
          id: 'Stratford',
          indicator_text: '',
        }}
        departures={[
          {
            type: 'scheduled',
            service_id: 'NationalRailSE',
            headsign: 'Dartford',
            scheduled_time: '2022-06-30T14:00:00+01:00',
            time_status: 'on_time',
          },
        ]}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('live: single departure display correctly', () => {
    const { container } = customRender(
      <RouteListItemDepartures
        stop={{
          name: 'Stratford',
          coordinates: { lat: 0, lon: 0 },
          id: 'Stratford',
          indicator_text: '',
        }}
        departures={[
          {
            type: 'live',
            service_id: 'Central',
            headsign: 'Ealing Broadway',
            live_time: DateTime.now().plus({ minute: 4 }).toISO(),
            scheduled_time: DateTime.now().plus({ minute: 4 }).toISO(),
          },
        ]}
      />
    )

    expect(container).toMatchSnapshot()
  })

  it('live: multiple departures display correctly', () => {
    const { container } = customRender(
      <RouteListItemDepartures
        stop={{
          name: 'Stratford',
          coordinates: { lat: 0, lon: 0 },
          id: 'Stratford',
          indicator_text: '',
        }}
        departures={[
          {
            type: 'live',
            service_id: 'Central',
            headsign: 'Ealing Broadway',
            live_time: DateTime.now().plus({ minute: 4 }).toISO(),
            scheduled_time: DateTime.now().plus({ minute: 4 }).toISO(),
          },
          {
            type: 'live',
            service_id: 'Central',
            headsign: 'Ealing Broadway',
            live_time: DateTime.now().plus({ minute: 9 }).toISO(),
            scheduled_time: DateTime.now().plus({ minute: 9 }).toISO(),
          },
          {
            type: 'live',
            service_id: 'Central',
            headsign: 'Ealing Broadway',
            live_time: DateTime.now().plus({ minute: 15 }).toISO(),
            scheduled_time: DateTime.now().plus({ minute: 15 }).toISO(),
          },
        ]}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
