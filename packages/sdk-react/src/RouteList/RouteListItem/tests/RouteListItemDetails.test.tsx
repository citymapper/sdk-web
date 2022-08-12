import React from 'react'
import customRender from '../../../jest/customRender'
import LonLiverpoolStAppoldWalking from '../../../mocks/routes/Lon-LiverpoolStAppoldWalking'
import LonStratfordSouthwark from '../../../mocks/routes/Lon-Stratford-Southwark'
import RouteListItemDetails from '../RouteListItemDetails'

describe('RouteListItemDetails', () => {
  it('should render standard route', () => {
    const { container } = customRender(
      <RouteListItemDetails route={LonStratfordSouthwark[0]} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render route without price', () => {
    const { container } = customRender(
      <RouteListItemDetails
        route={LonStratfordSouthwark[0]}
        showPrices={false}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render route without journey times', () => {
    const { container } = customRender(
      <RouteListItemDetails
        route={LonStratfordSouthwark[0]}
        showJourneyTimes={false}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should not show second row when no transit legs exist in route', () => {
    const { container } = customRender(
      <RouteListItemDetails route={LonLiverpoolStAppoldWalking} />
    )
    expect(container).toMatchSnapshot()
  })

  // TODO Move live data out of context into prop
  it.skip('should correctly show live item', () => {
    const { container } = customRender(
      <RouteListItemDetails
        route={LonStratfordSouthwark[0]}
        showJourneyTimes={false}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
