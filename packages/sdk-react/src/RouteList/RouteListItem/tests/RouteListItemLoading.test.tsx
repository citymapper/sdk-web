import React from 'react'
import customRender from '../../../jest/customRender'
import RouteListItemLoading from '../RouteListItemLoading'

describe('RouteListItemLoading', () => {
  it('should match snapshot without delays', () => {
    const { container } = customRender(<RouteListItemLoading index={0} />)
    expect(container).toMatchSnapshot()
  })

  it('should match snapshot with delay', () => {
    const { container } = customRender(<RouteListItemLoading index={5} />)
    expect(container).toMatchSnapshot()
  })
})
