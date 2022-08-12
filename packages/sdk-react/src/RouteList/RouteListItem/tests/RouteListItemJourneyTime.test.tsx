import React from 'react'
import customRender from '../../../jest/customRender'
import RouteListItemJourneyTime from '../RouteListItemJourneyTime'

describe('RouteListItemJourneyTime', () => {
  it('should match snapshot', () => {
    const { container } = customRender(
      <RouteListItemJourneyTime
        start="2022-07-12T14:56:19+01:00"
        end="2022-07-12T14:46:19+01:00"
      />
    )
    expect(container).toMatchSnapshot()
  })
})
