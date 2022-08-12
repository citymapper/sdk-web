import { Service } from '@citymapper/api/@types'

export default {
  id: 'Central',
  name: 'Central',
  vehicle_types: ['metro'],
  brand: {
    id: 'Underground',
    name: 'Tube',
    images: [
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
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
        url: 'https://d3440lt1d9mf95.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
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
      url: 'https://d3440lt1d9mf95.cloudfront.net/d1f430ba45fc7d134d841d060ecad2b6e2ad60550ec46761e8f55f81/d324a6fb/@2x.png',
      width: 24,
      height: 24,
      ui_role: 'service',
    },
    {
      url: 'https://d3440lt1d9mf95.cloudfront.net/7cc6a7780f45d7deacef753dc95309cab47b478ea0a8a9181c0b032c/d324a6fb/@2x.png',
      width: 16,
      height: 16,
      ui_role: 'service',
    },
  ],
  color: '#DC241F',
  background_color: '#DC241F',
  text_color: '#FFFFFF',
} as Service
