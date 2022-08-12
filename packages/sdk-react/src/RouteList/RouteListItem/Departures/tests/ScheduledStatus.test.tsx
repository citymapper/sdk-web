import React from 'react'
import customRender from '../../../../jest/customRender'
import palette from '../../../../theme/palette'
import ScheduledStatus from '../ScheduledStatus'

describe('ScheduledStatus', () => {
  // On time
  it('should prepend and append correct string', () => {
    const { container } = customRender(
      <ScheduledStatus prependText="(" appendText=")" status="on_time" />
    )
    expect(container).toHaveTextContent('(On time)')
  })

  it('should append "--on_time" className for on_time', () => {
    const { container } = customRender(<ScheduledStatus status="on_time" />)
    expect(container.getElementsByTagName('span').item(0)).toHaveClass(
      'cm-departure-scheduled-statuses--on_time'
    )
  })

  it('should display text "On time" for on_time', () => {
    const { container } = customRender(<ScheduledStatus status="on_time" />)
    expect(container).toHaveTextContent('On time')
  })

  it('should have green text for on_time', () => {
    const { container } = customRender(<ScheduledStatus status="on_time" />)

    expect(
      container
        .getElementsByClassName('cm-departure-scheduled-statuses--on_time')
        .item(0)
    ).toHaveStyle(`color: ${palette.status.good.color}`)
  })

  // Delay
  it('should append "--delay" className for delay', () => {
    const { container } = customRender(<ScheduledStatus status="delay" />)
    expect(container.getElementsByTagName('span').item(0)).toHaveClass(
      'cm-departure-scheduled-statuses--delay'
    )
  })

  it('should display text "Delayed" for delay', () => {
    const { container } = customRender(<ScheduledStatus status="delay" />)
    expect(container).toHaveTextContent('Delayed')
  })

  it('should have red text for delay', () => {
    const { container } = customRender(<ScheduledStatus status="delay" />)

    expect(
      container
        .getElementsByClassName('cm-departure-scheduled-statuses--delay')
        .item(0)
    ).toHaveStyle(`color: ${palette.status.bad.color}`)
  })

  // Cancellation
  it('should append "--cancellation" className for cancellation', () => {
    const { container } = customRender(
      <ScheduledStatus status="cancellation" />
    )
    expect(container.getElementsByTagName('span').item(0)).toHaveClass(
      'cm-departure-scheduled-statuses--cancellation'
    )
  })

  it('should display text "Cancelled" for cancellation', () => {
    const { container } = customRender(
      <ScheduledStatus status="cancellation" />
    )
    expect(container).toHaveTextContent('Cancelled')
  })

  it('should have red text for cancellation', () => {
    const { container } = customRender(
      <ScheduledStatus status="cancellation" />
    )

    expect(
      container
        .getElementsByClassName('cm-departure-scheduled-statuses--cancellation')
        .item(0)
    ).toHaveStyle(`color: ${palette.status.bad.color}`)
  })
})
