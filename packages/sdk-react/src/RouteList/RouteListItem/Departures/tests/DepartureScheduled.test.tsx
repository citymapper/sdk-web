import React from 'react'
import customRender from '../../../../jest/customRender'
import DeparturesScheduled from '../DeparturesScheduled'

describe('DepartureScheduled', () => {
  it('should render on time', () => {
    const wrapper = customRender(
      <DeparturesScheduled
        headSign="Dartford"
        originStation="Lewisham"
        status="on_time"
        time="22:00"
      />
    )
    expect(wrapper.baseElement).toHaveTextContent(
      '22:00 (On time) Dartford from Lewisham'
    )
  })

  it('should render delay', () => {
    const wrapper = customRender(
      <DeparturesScheduled
        headSign="Dartford"
        originStation="Lewisham"
        status="delay"
        time="22:00"
      />
    )
    expect(wrapper.baseElement).toHaveTextContent(
      '22:00 (Delayed) Dartford from Lewisham'
    )
  })

  it('should render cancellation', () => {
    const wrapper = customRender(
      <DeparturesScheduled
        headSign="Dartford"
        originStation="Lewisham"
        status="cancellation"
        time="22:00"
      />
    )
    expect(wrapper.baseElement).toHaveTextContent(
      '22:00 (Cancelled) Dartford from Lewisham'
    )
  })
})
