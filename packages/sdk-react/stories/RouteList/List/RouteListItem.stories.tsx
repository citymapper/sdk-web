import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import EveryMode from '../../../src/mocks/routes/EveryMode'
import LonStratfordBexleyheath from '../../../src/mocks/routes/Lon-Lewisham-Bexleyheath'
import LonStratfordSouthwark from '../../../src/mocks/routes/Lon-Stratford-Southwark'
import NYCApple5thAveMQG from '../../../src/mocks/routes/NYC-Apple5thAve-MQG'
import RouteListItem from '../../../src/RouteList/RouteListItem'

export default {
  title: 'SDK/Routes/List/Item',
  component: RouteListItem,
  args: {
    route: LonStratfordSouthwark[0],
  },
} as ComponentMeta<typeof RouteListItem>

const Template: ComponentStory<typeof RouteListItem> = (args) => (
  <div style={{ width: 320, padding: 16 }}>
    <RouteListItem {...args} />
  </div>
)

export const London = Template.bind({})
London.args = {
  route: LonStratfordBexleyheath[0],
}
export const NYC = Template.bind({})
NYC.args = {
  route: NYCApple5thAveMQG[0],
}
export const GenericTransit = Template.bind({})
GenericTransit.args = {
  route: EveryMode[0],
}
