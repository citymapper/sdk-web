import chroma from 'chroma-js'
import { Palette } from '../../@types/Theme'

const text: Palette['text'] = {
  primary: '#21262e', // Grey 85
  light: '#d1d4dv', // Grey 15
}

const tone: Palette['tone'] = {
  white: { color: '#FFFFFF', textContrast: text.primary },
  grey1: { color: '#F2F4F8', textContrast: text.primary },
  grey5: { color: '#ebeef4', textContrast: text.primary },
  grey10: { color: '#dfe3e9', textContrast: text.primary },
  grey15: { color: '#d1d4db', textContrast: text.primary },
  grey20: { color: '#c3c7ce', textContrast: text.primary },
  grey25: { color: '#b5b9c0', textContrast: text.primary },
  grey30: { color: '#a7abb3', textContrast: text.primary },
  grey35: { color: '#999ea6', textContrast: text.primary },
  grey40: { color: '#8c9199', textContrast: text.primary },
  grey45: { color: '#7f848d', textContrast: text.primary },
  grey50: { color: '#727780', textContrast: text.primary },
  grey55: { color: '#656b74', textContrast: text.light },
  grey60: { color: '#595f68', textContrast: text.light },
  grey65: { color: '#4d535c', textContrast: text.light },
  grey70: { color: '#424750', textContrast: text.light },
  grey75: { color: '#373c44', textContrast: text.light },
  grey80: { color: '#2c3139', textContrast: text.light },
  grey85: { color: '#21262e', textContrast: text.light },
  grey90: { color: '#171c24', textContrast: text.light },
  grey95: { color: '#0c111a', textContrast: text.light },
  black: { color: '#000000', textContrast: text.light },
}

const brand: Palette['brand'] = {
  primary: { color: '#0f69f0', textContrast: text.light },
  secondary: { color: '#1d4eaf', textContrast: text.light },
}

const status: Palette['status'] = {
  live: { color: '#f5c402', textContrast: text.primary },
  warning: { color: '#fe9001', textContrast: text.primary },
  bad: { color: '#d22020', textContrast: text.light },
  good: { color: '#37ab52', textContrast: text.light },
}

export const contrastingColor = (color: string) => {
  return chroma(color).luminance() > 0.45 ? '#000' : '#fff'
}

const palette: Palette = { text, tone, brand, status, contrastingColor }

export default palette
