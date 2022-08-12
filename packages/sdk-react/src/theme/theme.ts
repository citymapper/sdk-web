import { Theme } from '@emotion/react'
import { Typography } from '../../@types/Theme'
import palette from './palette'

export const proximaFontURI = 'https://use.typekit.net/kig2gum.css'

const typography: Typography = {
  allVariants: {
    fontFamily: 'proxima-soft, sans-serif',
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: 0,
    color: palette.text.primary,
  },
}

export const spacing: Theme['spacing'] = (factor) => factor * 8 + 'px'

const borderRadius = 8

const theme: Theme = {
  borderRadius,
  spacing,
  palette,
  typography,
  Base: {},
  SVGIcon: {
    width: 24,
    height: 24,
  },
}

export default theme
