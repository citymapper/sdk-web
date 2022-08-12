import { ComponentMeta, ComponentStory } from '@storybook/react'
import RouteListItemPrice from '../../../src/RouteList/RouteListItem/RouteListItemPrice'

export default {
  title: 'SDK/Routes/Components/Price',
  component: RouteListItemPrice,
  args: {
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
  },
} as ComponentMeta<typeof RouteListItemPrice>

const Template: ComponentStory<typeof RouteListItemPrice> = (args) => (
  <RouteListItemPrice {...args} />
)

export const Price = Template.bind({})
