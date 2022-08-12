/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import BucharestTram from '../../../src/mocks/routes/BucharestTram'
import GenoaElevator from '../../../src/mocks/routes/GenoaElevator'
import GenoaFunicular from '../../../src/mocks/routes/GenoaFunicular'
import LonStratfordSouthwark from '../../../src/mocks/routes/Lon-Stratford-Southwark'
import MonacoNice from '../../../src/mocks/routes/Monaco-Nice'
import TorontoFerry from '../../../src/mocks/routes/TorontoFerry'
import UKBristolBath from '../../../src/mocks/routes/UK-Bristol-Bath'
import RouteList from '../../../src/RouteList'

export default {
  title: 'SDK/Routes/List/Example Routes',
  component: RouteList,
  argTypes: {
    startCoordinates: {
      table: { disable: true },
    },
    endCoordinates: {
      table: { disable: true },
    },
    serviceStyle: {
      defaultValue: 'box',
    },
    serviceSeparator: {
      table: { disable: true },
    },
    routes: {
      table: { disable: true },
    },
    serviceBranding: {
      defaultValue: true,
    },
    serviceLegOptions: {
      defaultValue: true,
    },
    showJourneyTimes: {
      defaultValue: true,
    },
    showLiveDepartures: {
      defaultValue: false,
    },
    showPrices: {
      defaultValue: true,
    },
    showTransferTime: {
      defaultValue: true,
    },
    transferTimeLong: {
      defaultValue: 25,
    },
    transferTimeMinimum: {
      defaultValue: 5,
    },
  },
  args: {
    showTransferTime: true,
    startCoordinates: '51.542401,-0.0143637',
    endCoordinates: '51.465307,0.1575359',
  },
} as ComponentMeta<typeof RouteList>

const Template: ComponentStory<typeof RouteList> = (args) => {
  return (
    <div style={{ width: 320 }}>
      <RouteList {...args} />
    </div>
  )
}

export const FrequencyDepartures = Template.bind({})
FrequencyDepartures.args = {
  routes: LonStratfordSouthwark,
}

export const BristolToBath = Template.bind({})
BristolToBath.args = {
  routes: UKBristolBath,
}

export const MonacoToNice = Template.bind({})
MonacoToNice.args = {
  routes: MonacoNice,
}

export const GenoaFun = Template.bind({})
GenoaFun.args = {
  routes: GenoaFunicular,
}

export const GenoaLift = Template.bind({})
GenoaLift.args = {
  routes: GenoaElevator,
}

export const TorontoByBoat = Template.bind({})
TorontoByBoat.args = {
  routes: TorontoFerry,
}

export const BucharestByTram = Template.bind({})
BucharestByTram.args = {
  routes: BucharestTram,
}
