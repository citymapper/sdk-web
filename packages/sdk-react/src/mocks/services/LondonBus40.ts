import { Service } from '@citymapper/api/@types'

export default {
  id: 'LondonBus40',
  name: '40',
  vehicle_types: ['bus'],
  brand: {
    id: 'LondonBus',
    name: 'Bus',
    images: [
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
        width: 33,
        height: 33,
        ui_role: 'station',
        has_space_for_text: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
        width: 33,
        height: 33,
        ui_role: 'station',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
        width: 33,
        height: 33,
        ui_role: 'station',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
        width: 38,
        height: 41,
        ui_role: 'pin',
        has_space_for_text: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
        width: 38,
        height: 41,
        ui_role: 'pin',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
        width: 38,
        height: 41,
        ui_role: 'pin',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
        width: 12,
        height: 16,
        ui_role: 'vehicle_compact',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
        width: 13,
        height: 16,
        ui_role: 'vehicle_compact',
        is_generic: true,
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
        width: 20,
        height: 20,
        ui_role: 'vehicle',
      },
      {
        url: 'https://d3440lt1d9mf95.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
        width: 24,
        height: 33,
        ui_role: 'vehicle',
        is_generic: true,
      },
    ],
  },
  color: '#DC241F',
  background_color: '#C2322E',
  text_color: '#FFFFFF',
} as Service
