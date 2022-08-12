import { DateTime } from 'luxon'
import React from 'react'
import customRender from '../../../../jest/customRender'
import DepartureLive from '../DepartureLive'

describe('DepartureLive', () => {
  it('should render single departure', () => {
    const expectedTime = DateTime.now().plus({ minute: 4 }).toISO()
    const { baseElement } = customRender(
      <DepartureLive
        departures={[
          {
            type: 'live',
            service_id: 'Central',
            headsign: 'Ealing Broadway',
            live_time: expectedTime,
            scheduled_time: expectedTime,
          },
        ]}
        originStation="Stratford"
      />
    )

    expect(baseElement.textContent).toBe('In 4 min from Stratford')
  })

  it('should render multiple departure s', () => {
    const expectedTime1 = DateTime.now().plus({ minute: 4 }).toISO()
    const expectedTime2 = DateTime.now().plus({ minute: 8 }).toISO()
    const { baseElement } = customRender(
      <DepartureLive
        departures={[
          {
            type: 'live',
            service_id: 'Central',
            headsign: 'Ealing Broadway',
            live_time: expectedTime1,
            scheduled_time: expectedTime2,
          },
          {
            type: 'live',
            service_id: 'Central',
            headsign: 'Ealing Broadway',
            live_time: expectedTime2,
            scheduled_time: expectedTime2,
          },
        ]}
        originStation="Stratford"
      />
    )

    expect(baseElement.textContent).toBe('In 4, 8 min from Stratford')
  })

  it('should render the blip', () => {
    const expectedTime = DateTime.now().plus({ minute: 4 }).toISO()

    const { baseElement } = customRender(
      <DepartureLive
        departures={[
          {
            type: 'live',
            service_id: 'Central',
            headsign: 'Ealing Broadway',
            live_time: expectedTime,
            scheduled_time: expectedTime,
          },
        ]}
        originStation="Stratford"
      />
    )

    expect(
      baseElement.querySelector('.cm-departure-live-blip')
    ).toMatchSnapshot()
  })
})
