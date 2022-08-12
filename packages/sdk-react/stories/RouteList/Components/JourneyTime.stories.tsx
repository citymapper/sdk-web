import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DateTime } from 'luxon'
import RouteListItemJourneyTime from '../../../src/RouteList/RouteListItem/RouteListItemJourneyTime'

export default {
  title: 'SDK/Routes/Components/JourneyTime',
  component: RouteListItemJourneyTime,
  argTypes: {},
  args: {
    start: DateTime.now().toISO(),
    end: DateTime.now().plus({ minutes: 90 }).toISO(),
  },
} as ComponentMeta<typeof RouteListItemJourneyTime>

const Template: ComponentStory<typeof RouteListItemJourneyTime> = (args) => {
  return <RouteListItemJourneyTime {...args} />
}

export const JourneyTime = Template.bind({})
