import { Service } from '@citymapper/api/@types'

export default {
  id: 'DLR',
  name: 'DLR',
  vehicle_types: ['metro'],
  brand: {
    id: 'DLR',
    name: 'DLR',
    images: [
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/c5347dfe5d15f446310a015ba2fdd38a477f20c4b31851eda4ed1e50/d324a6fb/@2x.png',
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
        url: 'https://d3440lt1d9mf95.cloudfront.net/f5f026fe49cd6d1e285d68b5638a23e55fe42d64c6ed4f6ac218f66a/d324a6fb/@2x.png',
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
      url: 'https://d3440lt1d9mf95.cloudfront.net/2ce3a2c6274a482874eba939740507160683e2d43b4902d948087880/d324a6fb/@2x.png',
      width: 24,
      height: 24,
      ui_role: 'service',
    },
    {
      url: 'https://d3440lt1d9mf95.cloudfront.net/8768de61b035211677738e1c0dd3be8cab705c36063b1406de29cd7a/d324a6fb/@2x.png',
      width: 16,
      height: 16,
      ui_role: 'service',
    },
  ],
  color: '#00AFAD',
  background_color: '#00AFAD',
  text_color: '#FFFFFF',
} as Service
