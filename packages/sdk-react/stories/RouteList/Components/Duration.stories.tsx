import { ComponentMeta, ComponentStory } from '@storybook/react'
import RouteListItemDuration from '../../../src/RouteList/RouteListItem/RouteListItemDuration'

export default {
  title: 'SDK/Routes/Components/Duration',
  component: RouteListItemDuration,
  argTypes: {},
  args: {
    minutes: 120,
    units: 'minutes',
    isLive: false,
  },
} as ComponentMeta<typeof RouteListItemDuration>

const Template: ComponentStory<typeof RouteListItemDuration> = (args) => {
  return <RouteListItemDuration {...args} />
}

export const Duration = Template.bind({})
