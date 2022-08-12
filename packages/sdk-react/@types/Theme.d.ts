import type { CSSObject } from '@emotion/styled'

interface Typography {
  allVariants: CSSObject
}

type PaletteColor = {
  color: string
  textContrast: string
}
interface Palette {
  text: {
    primary: string
    light: string
  }
  tone: {
    white: PaletteColor
    grey1: PaletteColor
    grey5: PaletteColor
    grey10: PaletteColor
    grey15: PaletteColor
    grey20: PaletteColor
    grey25: PaletteColor
    grey30: PaletteColor
    grey35: PaletteColor
    grey40: PaletteColor
    grey45: PaletteColor
    grey50: PaletteColor
    grey55: PaletteColor
    grey60: PaletteColor
    grey65: PaletteColor
    grey70: PaletteColor
    grey75: PaletteColor
    grey80: PaletteColor
    grey85: PaletteColor
    grey90: PaletteColor
    grey95: PaletteColor
    black: PaletteColor
  }
  brand: {
    primary: PaletteColor
    secondary: PaletteColor
  }
  status: {
    live: PaletteColor
    warning: PaletteColor
    bad: PaletteColor
    good: PaletteColor
  }
  contrastingColor: (color: string) => string
}

declare module '@emotion/react' {
  interface Theme {
    palette: Palette
    borderRadius: number
    typography: Typography
    spacing: (factor: number) => string
    Base: CSSObject
    SVGIcon: CSSObject

    CmLoadingSkeleton?: CSSObject
    CmRouteList?: {
      root?: CSSObject
    }
    CmRouteListItem?: {
      root?: CSSObject
      row?: CSSObject
    }
    CmRouteSummary?: {
      root?: CSSObject
      leg?: CSSObject
      transfer?: CSSObject
      vehicle?: CSSObject
      service?: CSSObject
      serviceItem?: CSSObject
      serviceName?: CSSObject
      serviceSeparator?: CSSObject
      mode?: CSSObject
      duration?: CSSObject
      badge?: CSSObject
      badgeLabel?: CSSObject
      badgeMarker?: CSSObject
      boxOverflow?: CSSObject
      disruption?: CSSObject
      separator?: CSSObject
    }
    CmDepartures?: {
      root?: CSSObject
    }
    CmDeparturesFrequency?: {
      root?: CSSObject
      departures?: CSSObject
      origin?: CSSObject
    }
    CmDeparturesLive?: {
      root?: CSSObject
      departures?: CSSObject
      origin?: CSSObject
      blip?: CSSObject
    }
    CmDeparturesScheduled?: {
      root?: CSSObject
      departures?: CSSObject
      origin?: CSSObject
      statuses?: {
        on_time?: CSSObject
        delay?: CSSObject
        cancellation?: CSSObject
      }
    }

    CmRoutePrice?: {
      root?: CSSObject
    }
    CmRouteDuration?: {
      root?: CSSObject
      value?: CSSObject
      units?: CSSObject
    }
    CmRouteDepartures?: {
      root?: CSSObject
    }
    CmRouteTimes?: {
      root?: CSSObject
    }

    CmServiceBox?: {
      root?: CSSObject
      box?: CSSObject
      badge?: CSSObject
      badgeMarker?: CSSObject
    }
  }
}
