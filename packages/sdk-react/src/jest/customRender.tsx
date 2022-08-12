import { render, RenderOptions } from '@testing-library/react'
import React, { JSXElementConstructor, ReactElement } from 'react'
import CMProvider from '../CMProvider'

const TestWrapper: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => (
  <CMProvider
    config={{
      apiKey: '',
      citymapperFont: false,
    }}
  >
    {children}
  </CMProvider>
)

const customRender = (
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  options?: RenderOptions<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement,
    HTMLElement
  >
) => render(ui, { wrapper: TestWrapper, ...options })

export default customRender
