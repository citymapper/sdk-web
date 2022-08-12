import React from 'react'
import customRender from '../../../../jest/customRender'
import DepartureFrequency from '../DepartureFrequency'

describe('DepartureFrequency', () => {
  it('should render correct single frequency text', () => {
    const { baseElement } = customRender(
      <DepartureFrequency frequencyRange={[60, 60]} originStation="Stratford" />
    )
    expect(baseElement).toHaveTextContent('Every 1 min from Stratford')
  })

  it('should render correct multi-frequency text', () => {
    const { baseElement } = customRender(
      <DepartureFrequency
        frequencyRange={[60, 120]}
        originStation="Stratford"
      />
    )
    expect(baseElement).toHaveTextContent('Every 1-2 min from Stratford')
  })
})
