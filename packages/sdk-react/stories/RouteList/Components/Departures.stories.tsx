import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DateTime } from 'luxon'
import RouteListItemDepartures from '../../../src/RouteList/RouteListItem/RouteListItemDepartures'

export default {
  title: 'SDK/Routes/Components/Departures',
  component: RouteListItemDepartures,
  args: {
    stop: {
      name: 'Stratford',
      coordinates: { lat: 0, lon: 0 },
      id: 'Stratford',
      indicator_text: '',
    },
  },
} as ComponentMeta<typeof RouteListItemDepartures>

const Template: ComponentStory<typeof RouteListItemDepartures> = (args) => {
  return <RouteListItemDepartures {...args} />
}

export const Frequency = Template.bind({})
Frequency.args = {
  departures: [
    {
      type: 'frequency',
      service_id: 'LondonBus89',
      frequency_seconds_range: [720, 720],
      time_status: 'on_time',
    },
  ],
}

export const Scheduled = Template.bind({})
Scheduled.args = {
  departures: [
    {
      type: 'scheduled',
      service_id: 'NationalRailSE',
      headsign: 'Dartford',
      scheduled_time: '2022-06-30T14:00:00+01:00',
      time_status: 'on_time',
    },
  ],
}

export const Live = Template.bind({})
Live.args = {
  departures: [
    {
      type: 'live',
      service_id: 'Central',
      headsign: 'Ealing Broadway',
      live_time: DateTime.now().plus({ minute: 4 }).toISO(),
      scheduled_time: DateTime.now().plus({ minute: 4 }).toISO(),
    },
    {
      type: 'live',
      service_id: 'Central',
      headsign: 'Ealing Broadway',
      live_time: DateTime.now().plus({ minute: 9 }).toISO(),
      scheduled_time: DateTime.now().plus({ minute: 9 }).toISO(),
    },
  ],
}
