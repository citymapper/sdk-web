import React from 'react'
import customRender from '../../../jest/customRender'
import ServiceStatus from '../ServiceStatus'

describe('ServiceStatus', () => {
  it('travel_affected should render correctly with default props', () => {
    const { container } = customRender(<ServiceStatus type="travel_affected" />)
    expect(container).toMatchSnapshot()
  })

  it('travel_affected should render correctly with isBox prop', () => {
    const { container } = customRender(
      <ServiceStatus type="travel_affected" isBox />
    )
    expect(container).toMatchSnapshot()
  })

  it('travel_affected should render correctly with multiService prop', () => {
    const { container } = customRender(
      <ServiceStatus type="travel_affected" multiService />
    )
    expect(container).toMatchSnapshot()
  })

  it('travel_prevented should render correctly with default props', () => {
    const { container } = customRender(
      <ServiceStatus type="travel_prevented" />
    )
    expect(container).toMatchSnapshot()
  })

  it('travel_prevented should render correctly with isBox prop', () => {
    const { container } = customRender(
      <ServiceStatus type="travel_prevented" isBox />
    )
    expect(container).toMatchSnapshot()
  })

  it('travel_prevented should render correctly with multiService prop', () => {
    const { container } = customRender(
      <ServiceStatus type="travel_prevented" multiService />
    )
    expect(container).toMatchSnapshot()
  })
})
