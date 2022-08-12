import React from 'react'
import customRender from '../../../jest/customRender'
import DLRLeg from '../../../mocks/legs/DLRLeg'
import WalkLeg from '../../../mocks/legs/WalkLeg'
import RouteListItemLeg from '../RouteListItemLeg'

describe('RouteListItemLeg', () => {
  it('should display standard walk leg correctly', () => {
    const { container } = customRender(<RouteListItemLeg leg={WalkLeg} />)
    expect(container).toMatchSnapshot()
  })

  it('should display walk leg without transfer time', () => {
    const { container } = customRender(
      <RouteListItemLeg leg={WalkLeg} showTransferTime={false} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should display hike icon when leg is above transferTimeLong', () => {
    const { container } = customRender(
      <RouteListItemLeg leg={WalkLeg} transferTimeLong={1} />
    )
    expect(container.querySelector('.cm-route-summary-mode')).toHaveAttribute(
      'data-service-mode',
      'hike'
    )
  })

  it('should display service leg ', () => {
    const { container } = customRender(<RouteListItemLeg leg={DLRLeg} />)
    expect(container.querySelector('.cm-route-summary-service')).not.toBeNull()
  })

  it.skip('vehicle leg', () => {})
  it.skip('self_piloted leg', () => {})
})
