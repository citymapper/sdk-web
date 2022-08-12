import Citymapper from '@citymapper/api'
import { css, Global, Theme, ThemeProvider } from '@emotion/react'
import React, { createContext, useContext } from 'react'
import CitymapperFont from './CitymapperFont'
import theme from './theme/theme'

interface CMProviderProps {
  config: {
    apiKey: string
    citymapperFont?: boolean
  }
  theme?: Theme
  children: React.ReactElement | React.ReactElement[]
}

interface CMContext {
  config: CMProviderProps['config']
  api: Citymapper
}

const CMContext = createContext<CMContext>({
  config: { apiKey: '', citymapperFont: false },
  api: new Citymapper({ apiKey: '' }),
})

export const useCitymapper = () => useContext(CMContext)

const CMProvider: React.FC<CMProviderProps> = ({ config, children }) => {
  return (
    <CMContext.Provider
      value={{ config, api: new Citymapper({ apiKey: config.apiKey }) }}
    >
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                Helvetica, Arial, sans-serif;
              font-size: 16px;
            }
          `}
        />
        {config.citymapperFont === true ? <CitymapperFont /> : null}
        {children}
      </ThemeProvider>
    </CMContext.Provider>
  )
}

export default CMProvider
