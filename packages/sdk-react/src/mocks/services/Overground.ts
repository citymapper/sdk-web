import { Service } from '@citymapper/api/@types'

export default {
  id: 'Overground',
  name: 'Overground',
  vehicle_types: ['metro'],
  brand: {
    id: 'Overground',
    name: 'Overground',
    images: [
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/ce534606dca3a9a59b03956fb8d23031df2270aded5e43f2f1fa3d69/d324a6fb/@2x.png',
        width: 33,
        height: 33,
        ui_role: 'station',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png',
        width: 33,
        height: 33,
        ui_role: 'station',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/168c8d6aed2e17f2d01a5268b1bd25aef601a632f309f071630d8b07/d324a6fb/@2x.png',
        width: 38,
        height: 41,
        ui_role: 'pin',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png',
        width: 38,
        height: 41,
        ui_role: 'pin',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png',
        width: 15,
        height: 16,
        ui_role: 'vehicle_compact',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png',
        width: 24,
        height: 33,
        ui_role: 'vehicle',
        is_generic: true,
      },
    ],
  },
  images: [
    {
      url: 'https://d3440lt1d9mf95.cloudfront.net/26fead9cfff99f38590144a2af240782b458d1481a8638088211c215/d324a6fb/@2x.png',
      width: 24,
      height: 24,
      ui_role: 'service',
    },
    {
      url: 'https://d3440lt1d9mf95.cloudfront.net/8dd70007e513b76822a4fbc2e6fc72cd3365d216901cf66bc5fb3456/d324a6fb/@2x.png',
      width: 16,
      height: 16,
      ui_role: 'service',
    },
  ],
  color: '#E86A10',
  background_color: '#E86A10',
  text_color: '#FFFFFF',
} as Service
