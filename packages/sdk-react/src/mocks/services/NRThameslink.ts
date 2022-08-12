import { Service } from '@citymapper/api/@types'

export default {
  id: 'NationalRailTL',
  name: 'Thameslink',
  vehicle_types: ['rail'],
  brand: {
    id: 'NationalRail',
    name: 'National Rail',
    images: [
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/5a2b29efb556588bc6ba282fd72fb542b96d387403b86e3c0b927418/d324a6fb/@2x.png',
        width: 33,
        height: 33,
        ui_role: 'station',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png',
        width: 33,
        height: 33,
        ui_role: 'station',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/c3dc58616e7d9a793e1b4b85a19ad88a3673a52137672cbcd0bbcb96/d324a6fb/@2x.png',
        width: 38,
        height: 41,
        ui_role: 'pin',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png',
        width: 38,
        height: 41,
        ui_role: 'pin',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/403add017870210937ae9f459196c7fbe12b09e5dd4dac3c43f67c65/d324a6fb/@2x.png',
        width: 16,
        height: 13,
        ui_role: 'vehicle_compact',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png',
        width: 13,
        height: 16,
        ui_role: 'vehicle_compact',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/e9b75e4fa00a57b15a53092100e1872a1995f2551b2084176ff06b6b/d324a6fb/@2x.png',
        width: 24,
        height: 15,
        ui_role: 'vehicle',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png',
        width: 24,
        height: 33,
        ui_role: 'vehicle',
        is_generic: true,
      },
    ],
  },
  images: [
    {
      url: 'https://d3440lt1d9mf95.cloudfront.net/1e4e232416177f31d325fbbde10539d3229dc29625c9827a413e2be6/d324a6fb/@2x.png',
      width: 24,
      height: 24,
      ui_role: 'service',
    },
    {
      url: 'https://d3440lt1d9mf95.cloudfront.net/d45c34b17d78178ef69cde20b65f8d6469b3dfa64b3be6460f2572ee/d324a6fb/@2x.png',
      width: 16,
      height: 16,
      ui_role: 'service',
    },
  ],
  color: '#444E55',
  background_color: '#444E55',
} as Service
