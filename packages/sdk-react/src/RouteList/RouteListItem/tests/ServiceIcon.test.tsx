import { VehicleType } from '@citymapper/api/@types'
import React from 'react'
import customRender from '../../../jest/customRender'
import ServiceIcon from '../ServiceIcon'

const modes = [
  'ebike',
  'bike',
  'bus',
  'bus_rapid_transit',
  'escooter',
  'ferry',
  'funicular',
  'gondola',
  'helicopter',
  'light_rail',
  'metro',
  'monorail',
  'motorscooter',
  'rail',
  'subway',
  'streetcar',
  'tram',
  'trolley',
  'trolleybus',
] as VehicleType[]

describe('ServiceIcon', () => {
  modes.forEach((mode) => {
    it(`${mode}: has data attribute`, () => {
      const { container } = customRender(<ServiceIcon vehicleType={mode} />)
      expect(container.querySelector(`[data-vehicle="${mode}"]`)).not.toBeNull()
    })
    it(`${mode}: matches snapshot`, () => {
      const { container } = customRender(<ServiceIcon vehicleType={mode} />)
      expect(container).toMatchSnapshot()
    })
  })
})
