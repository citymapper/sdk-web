import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import LonLewishamBexleyheath from '../../../src/mocks/routes/Lon-Lewisham-Bexleyheath'
import RouteListItemLeg from '../../../src/RouteList/RouteListItem/RouteListItemLeg'

export default {
  title: 'SDK/Routes/List/Item/Leg',
  component: RouteListItemLeg,
  args: {
    leg: LonLewishamBexleyheath[0].legs[1],
  },
  argTypes: {
    showJourneyTimes: {
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof RouteListItemLeg>

const Template: ComponentStory<typeof RouteListItemLeg> = (args) => (
  <RouteListItemLeg {...args} />
)

export const Southeastern = Template.bind({})

export const Walk = Template.bind({})
Walk.args = {
  leg: LonLewishamBexleyheath[0].legs[0],
}
