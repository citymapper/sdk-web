import React from 'react'
import customRender from '../../../jest/customRender'
import RouteListItemDuration from '../RouteListItemDuration'

describe('RouteListItemDuration', () => {
  it('should render just the duration', () => {
    const { container } = customRender(<RouteListItemDuration minutes={120} />)
    expect(container).toMatchSnapshot()
  })

  it('should render with min-width', () => {
    const { container } = customRender(
      <RouteListItemDuration minutes={120} minWidth={100} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render as live', () => {
    const { container } = customRender(
      <RouteListItemDuration minutes={120} isLive />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render just the duration text', () => {
    const { container } = customRender(<RouteListItemDuration minutes={60} />)
    expect(container).toHaveTextContent('60min')
  })
})
