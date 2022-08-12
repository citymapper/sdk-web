import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import LoadingSkeleton from '../src/LoadingSkeleton/index'

export default {
  title: 'SDK/Loading Skeleton',
  component: LoadingSkeleton,
  args: {
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
  },
} as ComponentMeta<typeof LoadingSkeleton>

const Template: ComponentStory<typeof LoadingSkeleton> = (args) => (
  <LoadingSkeleton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 100,
  height: 5,
}
