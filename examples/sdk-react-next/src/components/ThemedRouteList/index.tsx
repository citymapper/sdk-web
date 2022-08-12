import { RouteList, CMProvider } from '@citymapper/sdk-react'

export const ThemedRouteList = (props: any) => {
  return (
    <CMProvider
      config={{
        apiKey: 'no-api-key',
        citymapperFont: false,
      }}
    >
      <RouteList {...props} />
    </CMProvider>
  )
}
