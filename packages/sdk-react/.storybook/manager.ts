// .storybook/manager.js

import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: `Citymapper React SDK`,
    brandUrl: 'https://docs.mainland-eks-staging.citymapper.com/',
    brandImage: 'logo.png',
  }),
})
