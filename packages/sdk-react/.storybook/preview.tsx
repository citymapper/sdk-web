import { css, Global } from '@emotion/react'
import CMProvider from '../src/CMProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}
export const decorators = [
  (Story) => (
    <CMProvider
      config={{
        apiKey: 'WhgELejXwioBD98HI0M2qEOZaWZe7zUU',
        citymapperFont: false,
      }}
    >
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
        `}
      />
      <Story />
    </CMProvider>
  ),
]
