import React from 'react'
import customRender from '../../../jest/customRender'
import Blip from '../Blip'

describe('Blip', () => {
  it('should match snapshot', () => {
    const { container } = customRender(<Blip />)
    expect(container).toMatchSnapshot()
  })
})
