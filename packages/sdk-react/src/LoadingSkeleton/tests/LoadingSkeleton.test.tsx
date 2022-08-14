import React from 'react'
import customRender from '../../jest/customRender'
import LoadingSkeleton from '../LoadingSkeleton'

describe('LoadingSkeleton', () => {
  it('matches snapshot', () => {
    const { baseElement } = customRender(
      <LoadingSkeleton height={10} width={100} />
    )
    expect(baseElement).toMatchSnapshot()
  })
})
