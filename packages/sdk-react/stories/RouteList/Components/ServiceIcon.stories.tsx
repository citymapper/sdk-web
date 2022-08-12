import { ComponentMeta, ComponentStory } from '@storybook/react'
import SI from '../../../src/RouteList/RouteListItem/ServiceIcon'

export default {
  title: 'SDK/Routes/Components/ServiceIcon',
  component: SI,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disabled: true } },
  },
  args: {
    vehicleType: 'bus',
  },
} as ComponentMeta<typeof SI>

const Template: ComponentStory<typeof SI> = (args) => <SI {...args} />

export const ServiceIcon = Template.bind({})
