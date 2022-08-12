import { Route } from '@citymapper/api/@types/Route'

export default [
  {
    start: {
      coordinates: {
        lat: 44.448174,
        lon: 26.133339,
      },
    },
    end: {
      coordinates: {
        lat: 44.436589,
        lon: 26.103428,
      },
    },
    distance_meters: 552,
    duration_seconds: 1450,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 348,
        path: 'oghnGkco~C]b@v@zA?@JRT[fAaBNSn@_AnAkBLOJQBEHMPWBEPWNUN\\FPNb@@BRl@@DGD',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:15:00+03:00',
          leg_arrival_time: '2022-07-01T10:20:48+03:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 815,
        path: 'czgnGcho~C??dHfTvHhTnCnInI~V`BtEd@~AtDhLhB`FCj@@p@\\|@d@z@XnC`@pDVbBpB|QpBrRF~@Ef@DpAHp@f@|Ax@zH??',
        stops: [
          {
            id: 'BucharestStop_SoseauaPantelimon_W',
            name: 'Soseaua Pantelimon',
            coordinates: {
              lat: 44.445941,
              lon: 26.133936,
            },
          },
          {
            id: 'BucharestStop_SoseauaMihaiBravu_W_2',
            name: 'Soseaua Mihai Bravu',
            coordinates: {
              lat: 44.444468,
              lon: 26.130544,
            },
          },
          {
            id: 'BucharestStop_OborulNou_SW',
            name: 'Oborul Nou',
            coordinates: {
              lat: 44.442911,
              lon: 26.127127,
            },
          },
          {
            id: 'BucharestStop_FoisorulDeFoc_SW',
            name: 'Foisorul de Foc',
            coordinates: {
              lat: 44.439828,
              lon: 26.120061,
            },
          },
          {
            id: 'BucharestStop_CaleaMosilor_W_1',
            name: 'Calea Mosilor',
            coordinates: {
              lat: 44.437934,
              lon: 26.115002,
            },
          },
          {
            id: 'BucharestStop_Armeneasca_W',
            name: 'Armeneasca',
            coordinates: {
              lat: 44.43707,
              lon: 26.110581,
            },
          },
          {
            id: 'BucharestStop_TeatrulNational_SW_1',
            name: 'Teatrul National',
            coordinates: {
              lat: 44.435924,
              lon: 26.104206,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'STBTrolleyBus69',
              frequency_seconds_range: [320, 320],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'STBTrolleyBus85',
              frequency_seconds_range: [320, 320],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['STBTrolleyBus69', 'STBTrolleyBus85'],
            },
          ],
          leg_departure_time: '2022-07-01T10:24:50+03:00',
          leg_arrival_time: '2022-07-01T10:38:25+03:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'STBTrolleyBus69',
            name: '69',
            vehicle_types: ['bus'],
            brand: {
              id: 'STBTrolleyBus',
              name: 'STB Troleibuz',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e7903179f6c164b869ddaf0efba1a47f13b75a2b4394236dde1ad23b/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a8dc2bc189721c5679ab8e2d3dad32e7be711c00c08a7800327da756/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a4073676c898a6290a7dfe44a4585f836828235c31c7daaa02ba4078/d324a6fb/@2x.png',
                  width: 13,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e2e84f508539e05ad0042aa2d872b1ff08619da788ce7a74a3f28997/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
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
            color: '#008D36',
            background_color: '#008D36',
            text_color: '#FFFFFF',
          },
          {
            id: 'STBTrolleyBus85',
            name: '85',
            vehicle_types: ['bus'],
            brand: {
              id: 'STBTrolleyBus',
              name: 'STB Troleibuz',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e7903179f6c164b869ddaf0efba1a47f13b75a2b4394236dde1ad23b/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a8dc2bc189721c5679ab8e2d3dad32e7be711c00c08a7800327da756/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a4073676c898a6290a7dfe44a4585f836828235c31c7daaa02ba4078/d324a6fb/@2x.png',
                  width: 13,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e2e84f508539e05ad0042aa2d872b1ff08619da788ce7a74a3f28997/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
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
            color: '#008D36',
            background_color: '#008D36',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Gara de Nord | Mircea Vulcanescu',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 181,
        path: 'o{enGini~CGB@LLhAHn@IHWPa@ZSLOF[L',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:38:25+03:00',
          leg_arrival_time: '2022-07-01T10:41:26+03:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T10:15:00+03:00',
    route_arrival_time: '2022-07-01T10:41:26+03:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMzY5OSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzIwOCxcImR1cmF0aW9uXCI6MTQ1MCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDM2NTg5LDI2LjEwMzQyOFwifSxcImpyX2luZGV4XCI6MCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo0MDksXCJkdXJhdGlvblwiOjM0OCxcImVjXCI6XCI0NC40NDU5NCwyNi4xMzM5NFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQ0ODA4LDI2LjEzMzE4XCJ9LHtcImR1cmF0aW9uXCI6ODE1LFwiZW5kXCI6XCJCdWNoYXJlc3RTdG9wX1RlYXRydWxOYXRpb25hbF9TV18xXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJTVEJUcm9sbGV5QnVzNjlcIixcIlNUQlRyb2xsZXlCdXM4NVwiXSxcInN0YXJ0XCI6XCJCdWNoYXJlc3RTdG9wX1Nvc2VhdWFQYW50ZWxpbW9uX1dcIixcInN0b3BfY291bnRcIjo3fSx7XCJkaXN0YW5jZVwiOjE0MyxcImR1cmF0aW9uXCI6MTgxLFwiZWNcIjpcIjQ0LjQzNjQ5LDI2LjEwMzA1XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDM1OTIsMjYuMTA0MjFcIn1dLFwicmVnaW9uXCI6XCJyby1idWNoYXJlc3RcIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiMWZkMWMzZTUtNWVkMy00NGQ3LTg4Y2QtMDk2NGJjZDY1MzZjXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDQuNDQ4MTc0LDI2LjEzMzMzOVwifSxcInRpbWVcIjpcIjIwMjItMDctMDFUMTA6MTU6MDArMDM6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJyby1idWNoYXJlc3QifQ.8loe_sQf2Ye9hABkmTLOz6CajB0o_9yxzU03sNLXves',
  },
  {
    start: {
      coordinates: {
        lat: 44.448174,
        lon: 26.133339,
      },
    },
    end: {
      coordinates: {
        lat: 44.436589,
        lon: 26.103428,
      },
    },
    distance_meters: 1136,
    duration_seconds: 1950,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 809,
        path: 'oghnGkco~C]b@v@zA?@JRi@r@s@|AuBbEMRCDc@ZIF[TGDi@`@INyCxBtBzGEBAB[G]VUPwA`AmA|@a@XEBCDCFAFUdACL[SI\\GTERvA~@v@h@d@ZBB?B',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:15:00+03:00',
          leg_arrival_time: '2022-07-01T10:28:29+03:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 684,
        path: '}xhnGism~C??n@\\ZTVVTV~@dAJNRb@FNLPLJLDRBh@DXFt@V^J\\R`An@rDnCTR^^ZJjC|CtBrBXXtArA`@`@|@t@nCjCrAz@pOhMfHtGdBjB`DlBTRNXVbBpB|QpBrRF~@Ef@DpAHp@f@|Ax@zH??',
        stops: [
          {
            id: 'BucharestStop_BucurObor_SW_ro-bucharest-stb-trolleybus',
            name: 'Bucur Obor',
            coordinates: {
              lat: 44.450873,
              lon: 26.125494,
            },
          },
          {
            id: 'BucharestStop_Fainari_SW',
            name: 'Fainari',
            coordinates: {
              lat: 44.44687,
              lon: 26.122465,
            },
          },
          {
            id: 'BucharestStop_MihaiEminescu_SW_2',
            name: 'Mihai Eminescu',
            coordinates: {
              lat: 44.444536,
              lon: 26.12011,
            },
          },
          {
            id: 'BucharestStop_BdCarolI_SW_2',
            name: 'Bd. Carol I',
            coordinates: {
              lat: 44.438755,
              lon: 26.114888,
            },
          },
          {
            id: 'BucharestStop_Armeneasca_W',
            name: 'Armeneasca',
            coordinates: {
              lat: 44.43707,
              lon: 26.110581,
            },
          },
          {
            id: 'BucharestStop_TeatrulNational_SW_1',
            name: 'Teatrul National',
            coordinates: {
              lat: 44.435924,
              lon: 26.104206,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'STBTrolleyBus66',
              frequency_seconds_range: [828, 828],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['STBTrolleyBus66'],
            },
          ],
          leg_departure_time: '2022-07-01T10:35:15+03:00',
          leg_arrival_time: '2022-07-01T10:46:39+03:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'STBTrolleyBus66',
            name: '66',
            vehicle_types: ['bus'],
            brand: {
              id: 'STBTrolleyBus',
              name: 'STB Troleibuz',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e7903179f6c164b869ddaf0efba1a47f13b75a2b4394236dde1ad23b/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a8dc2bc189721c5679ab8e2d3dad32e7be711c00c08a7800327da756/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a4073676c898a6290a7dfe44a4585f836828235c31c7daaa02ba4078/d324a6fb/@2x.png',
                  width: 13,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e2e84f508539e05ad0042aa2d872b1ff08619da788ce7a74a3f28997/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
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
            color: '#008D36',
            background_color: '#008D36',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Vasile Parvan',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 181,
        path: 'o{enGini~CGB@LLhAHn@IHWPa@ZSLOF[L',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:46:39+03:00',
          leg_arrival_time: '2022-07-01T10:49:40+03:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T10:15:00+03:00',
    route_arrival_time: '2022-07-01T10:49:40+03:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMzY5OSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzIwOCxcImR1cmF0aW9uXCI6MTk1MCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDM2NTg5LDI2LjEwMzQyOFwifSxcImpyX2luZGV4XCI6MSxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo5OTMsXCJkdXJhdGlvblwiOjgwOSxcImVjXCI6XCI0NC40NTA4NywyNi4xMjU0OVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQ0ODA4LDI2LjEzMzE4XCJ9LHtcImR1cmF0aW9uXCI6Njg0LFwiZW5kXCI6XCJCdWNoYXJlc3RTdG9wX1RlYXRydWxOYXRpb25hbF9TV18xXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJTVEJUcm9sbGV5QnVzNjZcIl0sXCJzdGFydFwiOlwiQnVjaGFyZXN0U3RvcF9CdWN1ck9ib3JfU1dfcm8tYnVjaGFyZXN0LXN0Yi10cm9sbGV5YnVzXCIsXCJzdG9wX2NvdW50XCI6Nn0se1wiZGlzdGFuY2VcIjoxNDMsXCJkdXJhdGlvblwiOjE4MSxcImVjXCI6XCI0NC40MzY0OSwyNi4xMDMwNVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQzNTkyLDI2LjEwNDIxXCJ9XSxcInJlZ2lvblwiOlwicm8tYnVjaGFyZXN0XCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjFmZDFjM2U1LTVlZDMtNDRkNy04OGNkLTA5NjRiY2Q2NTM2Y1wiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQ0LjQ0ODE3NCwyNi4xMzMzMzlcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTAxVDEwOjE1OjAwKzAzOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoicm8tYnVjaGFyZXN0In0.ACXLeSi2i34SGd8NJ9Fg4LDbw4JjeOioaUi07b96Ij8',
  },
  {
    start: {
      coordinates: {
        lat: 44.448174,
        lon: 26.133339,
      },
    },
    end: {
      coordinates: {
        lat: 44.436589,
        lon: 26.103428,
      },
    },
    distance_meters: 1494,
    duration_seconds: 2082,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 947,
        path: 'oghnGkco~C]b@v@zA?@JRT[fAaBNSn@_AnAkBLOJQBEHMPWBEPWNUN\\FPNb@@BRl@@DfA`DNd@FTd@tAHVb@vA\\B^?`@Cd@IxAaAZQzA}@l@_@pBsANIb@YbAjCFPRa@BIPYFFBD@@?@HJ@E\\D@@@?@?B@@?@?@@@@B@@@BB@@R^D`@@H@PC@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:15:00+03:00',
          leg_arrival_time: '2022-07-01T10:30:47+03:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 550,
        path: 'u{fnGq}n~CA?pEnb@\\fDfAhK`BtOL~@BVb@bEvAzM@TSpB@v@\\|@f@r@VvC`@pDVbBpB|QpBrRD~@@l@BjAHj@HNLHL?JELQ@SC[??',
        stops: [
          {
            id: 'BucharestStop_PiataIancului_W_1',
            name: 'Piata Iancului',
            coordinates: {
              lat: 44.441074,
              lon: 26.132251,
            },
          },
          {
            id: 'BucharestStop_ScoalaIancului_W_1',
            name: 'Scoala Iancului',
            coordinates: {
              lat: 44.439519,
              lon: 26.123758,
            },
          },
          {
            id: 'BucharestStop_Traian_W',
            name: 'Traian',
            coordinates: {
              lat: 44.438755,
              lon: 26.11967,
            },
          },
          {
            id: 'BucharestStop_CaleaMosilor_W_1',
            name: 'Calea Mosilor',
            coordinates: {
              lat: 44.437934,
              lon: 26.115002,
            },
          },
          {
            id: 'BucharestStop_Armeneasca_W',
            name: 'Armeneasca',
            coordinates: {
              lat: 44.43707,
              lon: 26.110581,
            },
          },
          {
            id: 'BucharestStop_PiataRosetti_E_1',
            name: 'Piata Rosetti',
            coordinates: {
              lat: 44.436078,
              lon: 26.106516,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'STBBus311',
              frequency_seconds_range: [660, 660],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['STBBus311'],
            },
          ],
          leg_departure_time: '2022-07-01T10:34:55+03:00',
          leg_arrival_time: '2022-07-01T10:44:05+03:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'STBBus311',
            name: '311',
            vehicle_types: ['bus'],
            brand: {
              id: 'STBBus',
              name: 'STB Autobuz',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/5fd1cd20ce111641911390c9de36bb3a4bfbddb825df60e8313dc0b1/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/c035005000d1e80e2b68cab350a6e9f5c15654f2f9e6e40fa872fa37/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/88de7114e7c7abd16d71686997d520c216dacf394f6c187d1185a77f/d324a6fb/@2x.png',
                  width: 13,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/43402df07343e7903a1bda64be4a970bce3f5d1d6f2d983decf91504/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
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
            color: '#1D71B8',
            background_color: '#1D71B8',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Piata Rosetti',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 365,
        path: 'o|enGw|i~CF?@H?T?\\Ed@C\\@PDr@Hr@LzAF\\HTQHPjBFd@Dd@MJIHWPa@ZSLOF[L',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:44:05+03:00',
          leg_arrival_time: '2022-07-01T10:50:10+03:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T10:15:00+03:00',
    route_arrival_time: '2022-07-01T10:50:10+03:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMzY5OSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzIwOCxcImR1cmF0aW9uXCI6MjA4MixcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDM2NTg5LDI2LjEwMzQyOFwifSxcImpyX2luZGV4XCI6MixcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjoxMTUwLFwiZHVyYXRpb25cIjo5NDcsXCJlY1wiOlwiNDQuNDQxMDcsMjYuMTMyMjVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40NDgwOCwyNi4xMzMxOFwifSx7XCJkdXJhdGlvblwiOjU1MCxcImVuZFwiOlwiQnVjaGFyZXN0U3RvcF9QaWF0YVJvc2V0dGlfRV8xXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJTVEJCdXMzMTFcIl0sXCJzdGFydFwiOlwiQnVjaGFyZXN0U3RvcF9QaWF0YUlhbmN1bHVpX1dfMVwiLFwic3RvcF9jb3VudFwiOjZ9LHtcImRpc3RhbmNlXCI6MzQ0LFwiZHVyYXRpb25cIjozNjUsXCJlY1wiOlwiNDQuNDM2NDksMjYuMTAzMDVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MzYwOCwyNi4xMDY1MlwifV0sXCJyZWdpb25cIjpcInJvLWJ1Y2hhcmVzdFwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCIxZmQxYzNlNS01ZWQzLTQ0ZDctODhjZC0wOTY0YmNkNjUzNmNcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0NC40NDgxNzQsMjYuMTMzMzM5XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMDoxNTowMCswMzowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InJvLWJ1Y2hhcmVzdCJ9.6BNzUvRrnUXpmxu2jyhNdRbfwQIbCmkLG3gUUxlDaEU',
  },
  {
    start: {
      coordinates: {
        lat: 44.448174,
        lon: 26.133339,
      },
    },
    end: {
      coordinates: {
        lat: 44.436589,
        lon: 26.103428,
      },
    },
    distance_meters: 633,
    duration_seconds: 1909,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 319,
        path: 'oghnGkco~C]b@v@zA?@JRT[fAaBNSn@_AnAkBLOJQBEHMPWBEPWNUT_@T[GK',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:15:00+03:00',
          leg_arrival_time: '2022-07-01T10:20:19+03:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 465,
        path: 'wzgnG}no~C??S`@Gp@DVvKv[hBbFPj@xFrP`BhFtH|T\\b@RPfA`@`AT??',
        stops: [
          {
            id: 'BucharestStop_BdFerdinand_SW',
            name: 'Bd. Ferdinand',
            coordinates: {
              lat: 44.446041,
              lon: 26.135026,
            },
          },
          {
            id: 'BucharestStop_SoseauaMihaiBravu_SW',
            name: 'Soseaua Mihai Bravu',
            coordinates: {
              lat: 44.443492,
              lon: 26.128525,
            },
          },
          {
            id: 'BucharestStop_Horei_SW',
            name: 'Horei',
            coordinates: {
              lat: 44.441749,
              lon: 26.124539,
            },
          },
          {
            id: 'BucharestStop_BdPacheProtopopescu_S',
            name: 'Bd. Pache Protopopescu',
            coordinates: {
              lat: 44.43926,
              lon: 26.120482,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'STBTram14',
              frequency_seconds_range: [840, 840],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['STBTram14'],
            },
          ],
          leg_departure_time: '2022-07-01T10:33:52+03:00',
          leg_arrival_time: '2022-07-01T10:41:37+03:00',
        },
        vehicle_types: ['tram'],
        services: [
          {
            id: 'STBTram14',
            name: '14',
            vehicle_types: ['tram'],
            brand: {
              id: 'STBTram',
              name: 'STB Tram',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/08a9524107a22ed001310c53a2ae796e172da86df840ac769656fcdd/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1645dd506e856e06bccbd321cf8054b165bb1901d3014916b13c23d0/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/da7949c4de120b37a052c632418ef35b9da1633d8d007a80974436ac/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a8b223f43107e3ef917fecfd02ad6fc996e94a71dbce84f92c308152/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/63adb23b0e2adf591880b6fae84df876a466cf2a0e010956552d25c9/d324a6fb/@2x.png',
                  width: 10,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/5902d5c1fcf716397d11375f634ffe2be3e5810fa5ead13b68712517/d324a6fb/@2x.png',
                  width: 10,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4c5994ba7c86d250ac8efcaae8609f7e6dcf13a638850d8da6b5236a/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/dc3ec677ec503427a3d0746d58994fcd29434c0c4411f98e95cc155c/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#BE1622',
            background_color: '#BE1622',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Piata Sf. Vineri',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 85,
        path: 'kpfnG_tl~C?ELD^JNBTFB`@L`A?DBV@DG@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:41:37+03:00',
          leg_arrival_time: '2022-07-01T10:43:02+03:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 380,
        path: 'gmfnG}nl~C??vAzM@TSpB@v@\\|@f@r@VvC`@pDVbBpB|QpBrRF~@Ef@DpAHp@f@|Ax@zH??',
        stops: [
          {
            id: 'BucharestStop_Traian_W',
            name: 'Traian',
            coordinates: {
              lat: 44.438755,
              lon: 26.11967,
            },
          },
          {
            id: 'BucharestStop_CaleaMosilor_W_1',
            name: 'Calea Mosilor',
            coordinates: {
              lat: 44.437934,
              lon: 26.115002,
            },
          },
          {
            id: 'BucharestStop_Armeneasca_W',
            name: 'Armeneasca',
            coordinates: {
              lat: 44.43707,
              lon: 26.110581,
            },
          },
          {
            id: 'BucharestStop_TeatrulNational_SW_1',
            name: 'Teatrul National',
            coordinates: {
              lat: 44.435924,
              lon: 26.104206,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'STBTrolleyBus70',
              frequency_seconds_range: [398, 398],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'STBTrolleyBus90',
              frequency_seconds_range: [398, 398],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['STBTrolleyBus70', 'STBTrolleyBus90'],
            },
          ],
          leg_departure_time: '2022-07-01T10:45:28+03:00',
          leg_arrival_time: '2022-07-01T10:51:48+03:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'STBTrolleyBus70',
            name: '70',
            vehicle_types: ['bus'],
            brand: {
              id: 'STBTrolleyBus',
              name: 'STB Troleibuz',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e7903179f6c164b869ddaf0efba1a47f13b75a2b4394236dde1ad23b/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a8dc2bc189721c5679ab8e2d3dad32e7be711c00c08a7800327da756/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a4073676c898a6290a7dfe44a4585f836828235c31c7daaa02ba4078/d324a6fb/@2x.png',
                  width: 13,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e2e84f508539e05ad0042aa2d872b1ff08619da788ce7a74a3f28997/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
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
            color: '#008D36',
            background_color: '#008D36',
            text_color: '#FFFFFF',
          },
          {
            id: 'STBTrolleyBus90',
            name: '90',
            vehicle_types: ['bus'],
            brand: {
              id: 'STBTrolleyBus',
              name: 'STB Troleibuz',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e7903179f6c164b869ddaf0efba1a47f13b75a2b4394236dde1ad23b/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a8dc2bc189721c5679ab8e2d3dad32e7be711c00c08a7800327da756/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a4073676c898a6290a7dfe44a4585f836828235c31c7daaa02ba4078/d324a6fb/@2x.png',
                  width: 13,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e2e84f508539e05ad0042aa2d872b1ff08619da788ce7a74a3f28997/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
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
            color: '#008D36',
            background_color: '#008D36',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Mircea Vulcanescu | Vasile Parvan',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 181,
        path: 'o{enGini~CGB@LLhAHn@IHWPa@ZSLOF[L',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:51:48+03:00',
          leg_arrival_time: '2022-07-01T10:54:49+03:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T10:15:00+03:00',
    route_arrival_time: '2022-07-01T10:54:49+03:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMzY5OSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzIwOCxcImR1cmF0aW9uXCI6MTkwOSxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDM2NTg5LDI2LjEwMzQyOFwifSxcImpyX2luZGV4XCI6MyxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjozNzksXCJkdXJhdGlvblwiOjMxOSxcImVjXCI6XCI0NC40NDYwNCwyNi4xMzUwM1wiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQ0ODA4LDI2LjEzMzE4XCJ9LHtcImR1cmF0aW9uXCI6NDY1LFwiZW5kXCI6XCJCdWNoYXJlc3RTdG9wX0JkUGFjaGVQcm90b3BvcGVzY3VfU1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiU1RCVHJhbTE0XCJdLFwic3RhcnRcIjpcIkJ1Y2hhcmVzdFN0b3BfQmRGZXJkaW5hbmRfU1dcIixcInN0b3BfY291bnRcIjo0fSx7XCJkaXN0YW5jZVwiOjExMSxcImR1cmF0aW9uXCI6ODUsXCJlY1wiOlwiNDQuNDM4NzYsMjYuMTE5NjdcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MzkyNiwyNi4xMjA0OFwifSx7XCJkdXJhdGlvblwiOjM4MCxcImVuZFwiOlwiQnVjaGFyZXN0U3RvcF9UZWF0cnVsTmF0aW9uYWxfU1dfMVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiU1RCVHJvbGxleUJ1czcwXCIsXCJTVEJUcm9sbGV5QnVzOTBcIl0sXCJzdGFydFwiOlwiQnVjaGFyZXN0U3RvcF9UcmFpYW5fV1wiLFwic3RvcF9jb3VudFwiOjR9LHtcImRpc3RhbmNlXCI6MTQzLFwiZHVyYXRpb25cIjoxODEsXCJlY1wiOlwiNDQuNDM2NDksMjYuMTAzMDVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MzU5MiwyNi4xMDQyMVwifV0sXCJyZWdpb25cIjpcInJvLWJ1Y2hhcmVzdFwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCIxZmQxYzNlNS01ZWQzLTQ0ZDctODhjZC0wOTY0YmNkNjUzNmNcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0NC40NDgxNzQsMjYuMTMzMzM5XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMDoxNTowMCswMzowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InJvLWJ1Y2hhcmVzdCJ9.ly0L5N0y7LiCVFoUjKasLydh9sps19lsYApI4kRIzwk',
  },
  {
    start: {
      coordinates: {
        lat: 44.448174,
        lon: 26.133339,
      },
    },
    end: {
      coordinates: {
        lat: 44.436589,
        lon: 26.103428,
      },
    },
    distance_meters: 1435,
    duration_seconds: 2331,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 757,
        path: 'oghnGkco~C]b@v@zA?@JRi@r@_At@kA|@gAz@wEpDaAr@]VONMJMJMHc@\\QLwAhA[TSNEBc@\\MLKJa@\\MHoA`Ak@b@QPIFOLWP_Am@CFADADABENMIYQFS',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:15:00+03:00',
          leg_arrival_time: '2022-07-01T10:27:37+03:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 951,
        path: '{linGwbn~CA?~JvG~JxGp@`@~@vBTXd@L\\@f@J~An@~FlE~D|D~D~DzDrDrBfBnSnPzIfIvCjBd@ZLTJjA|BlEv@xBxCtK^xDFNdB~BjAxANPPNJFJD~@ZFBJFf@RLHl@Xj@d@fA~@`BvAn@h@DHDNDp@CTKTKDe@Cc@A_@FQNGZBn@RnDJnALPbAO??',
        stops: [
          {
            id: 'BucharestStop_ZiduriMosi_SW',
            name: 'Ziduri Mosi',
            coordinates: {
              lat: 44.454064,
              lon: 26.127963,
            },
          },
          {
            id: 'BucharestStop_BucurObor_SW',
            name: 'Bucur Obor',
            coordinates: {
              lat: 44.450224,
              lon: 26.125149,
            },
          },
          {
            id: 'BucharestStop_MihaiEminescu_SW',
            name: 'Mihai Eminescu',
            coordinates: {
              lat: 44.443805,
              lon: 26.11951,
            },
          },
          {
            id: 'BucharestStop_BdCarolI_SW_1',
            name: 'Bd. Carol I',
            coordinates: {
              lat: 44.438024,
              lon: 26.114524,
            },
          },
          {
            id: 'BucharestStop_HristoBotev_SW',
            name: 'Hristo Botev',
            coordinates: {
              lat: 44.435316,
              lon: 26.108577,
            },
          },
          {
            id: 'BucharestStop_PiataSfGheorghe_T_1_STBTram',
            name: 'Piata Sf. Gheorghe',
            coordinates: {
              lat: 44.432841,
              lon: 26.105651,
            },
          },
          {
            id: 'BucharestStop_PiataSfGheorghe_NE_1_STBTram',
            name: 'Piata Sf. Gheorghe',
            coordinates: {
              lat: 44.432537,
              lon: 26.103862,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'STBTram21',
              frequency_seconds_range: [246, 246],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['STBTram21'],
            },
          ],
          leg_departure_time: '2022-07-01T10:28:54+03:00',
          leg_arrival_time: '2022-07-01T10:44:45+03:00',
        },
        vehicle_types: ['tram'],
        services: [
          {
            id: 'STBTram21',
            name: '21',
            vehicle_types: ['tram'],
            brand: {
              id: 'STBTram',
              name: 'STB Tram',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/08a9524107a22ed001310c53a2ae796e172da86df840ac769656fcdd/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1645dd506e856e06bccbd321cf8054b165bb1901d3014916b13c23d0/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/da7949c4de120b37a052c632418ef35b9da1633d8d007a80974436ac/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a8b223f43107e3ef917fecfd02ad6fc996e94a71dbce84f92c308152/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/63adb23b0e2adf591880b6fae84df876a466cf2a0e010956552d25c9/d324a6fb/@2x.png',
                  width: 10,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/5902d5c1fcf716397d11375f634ffe2be3e5810fa5ead13b68712517/d324a6fb/@2x.png',
                  width: 10,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4c5994ba7c86d250ac8efcaae8609f7e6dcf13a638850d8da6b5236a/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/dc3ec677ec503427a3d0746d58994fcd29434c0c4411f98e95cc155c/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#BE1622',
            background_color: '#BE1622',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Piata Sf. Gheorghe',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 541,
        path: 'kfenGcli~C?IK@k@JGCEAEEGMCFDn@@Zo@HEAo@Fm@JQHUDcBZi@Lo@JUFUHSBQ@KCKG??CVEh@q@PYSCAIG??IEKIi@]]@AQAO[L',
        updatable_detail: {
          leg_departure_time: '2022-07-01T10:44:45+03:00',
          leg_arrival_time: '2022-07-01T10:53:46+03:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T10:15:00+03:00',
    route_arrival_time: '2022-07-01T10:53:46+03:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMzY5OSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzIwOCxcImR1cmF0aW9uXCI6MjMzMSxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDM2NTg5LDI2LjEwMzQyOFwifSxcImpyX2luZGV4XCI6NCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo5MDMsXCJkdXJhdGlvblwiOjc1NyxcImVjXCI6XCI0NC40NTQwNiwyNi4xMjc5NlwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQ0ODA4LDI2LjEzMzE4XCJ9LHtcImR1cmF0aW9uXCI6OTUxLFwiZW5kXCI6XCJCdWNoYXJlc3RTdG9wX1BpYXRhU2ZHaGVvcmdoZV9ORV8xX1NUQlRyYW1cIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlNUQlRyYW0yMVwiXSxcInN0YXJ0XCI6XCJCdWNoYXJlc3RTdG9wX1ppZHVyaU1vc2lfU1dcIixcInN0b3BfY291bnRcIjo3fSx7XCJkaXN0YW5jZVwiOjUzMixcImR1cmF0aW9uXCI6NTQxLFwiZWNcIjpcIjQ0LjQzNjQ5LDI2LjEwMzA1XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDMyNTQsMjYuMTAzODZcIn1dLFwicmVnaW9uXCI6XCJyby1idWNoYXJlc3RcIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiMWZkMWMzZTUtNWVkMy00NGQ3LTg4Y2QtMDk2NGJjZDY1MzZjXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDQuNDQ4MTc0LDI2LjEzMzMzOVwifSxcInRpbWVcIjpcIjIwMjItMDctMDFUMTA6MTU6MDArMDM6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJyby1idWNoYXJlc3QifQ.DL9VWXR0wPf6Y9BuePu6gV8YRfaTsNmWUOTgNTsfqRk',
  },
] as Route[]
