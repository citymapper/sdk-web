import React from 'react'
import customRender from '../../../jest/customRender'
import RouteListItemPrice from '../RouteListItemPrice'

describe('RouteListItemPrice', () => {
  it('should match snapshot', () => {
    const { container } = customRender(
      <RouteListItemPrice
        price={{ amount: '2.50', currency: 'GBP', formatted: '£2.50' }}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
