import { Route } from '@citymapper/api/@types'

export default [
  {
    start: {
      coordinates: {
        lat: 51.455953,
        lon: 0.143465,
      },
    },
    end: {
      coordinates: {
        lat: 51.430337,
        lon: 0.273612,
      },
    },
    distance_meters: 1082,
    duration_seconds: 5245,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 173,
        path: '{_ayHs_[?@Ej@O|A?F@DEDC?eAU_@I[~@CJOdBAJC`@A@EA',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:06:43+01:00',
          leg_arrival_time: '2022-07-13T14:09:36+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2250,
        path: '}eayHstZn@cg@xEgOnCiTzC_[hFki@zB{Rr@oM|@gRzDgb@xBmGlFml@fByTpAeNbBaRxD_a@`Dg_@dBwOmF}l@jKoPly@ksF{KugB',
        stops: [
          {
            id: '490003973B',
            name: 'Trinity Place',
            coordinates: {
              lat: 51.457112,
              lon: 0.1417,
            },
            indicator_text: 'B',
          },
          {
            id: '490003975P',
            name: 'Mayplace Rd West / Bexleyheath Clock Twr',
            coordinates: {
              lat: 51.456869,
              lon: 0.148121,
            },
            indicator_text: 'P',
          },
          {
            id: '490003972E',
            name: 'Bexleyheath / Highland Road',
            coordinates: {
              lat: 51.455778,
              lon: 0.15072,
            },
            indicator_text: 'X',
          },
          {
            id: '490011016E2',
            name: 'Watling Street / Civic Offices',
            coordinates: {
              lat: 51.455059,
              lon: 0.154127,
            },
            indicator_text: 'J',
          },
          {
            id: '490010773E2',
            name: 'Park Grove',
            coordinates: {
              lat: 51.454275,
              lon: 0.158609,
            },
            indicator_text: 'K',
          },
          {
            id: '490010587S',
            name: 'Old Road',
            coordinates: {
              lat: 51.453107,
              lon: 0.165391,
            },
            indicator_text: 'S',
          },
          {
            id: '490004000E',
            name: 'Bigs Hill Wood',
            coordinates: {
              lat: 51.45249,
              lon: 0.168572,
            },
            indicator_text: 'T',
          },
          {
            id: '490016614AA',
            name: 'Bourne Road',
            coordinates: {
              lat: 51.452232,
              lon: 0.170891,
            },
            indicator_text: 'U',
          },
          {
            id: '490003980L',
            name: 'Bexley Lane',
            coordinates: {
              lat: 51.451923,
              lon: 0.173971,
            },
            indicator_text: 'V',
          },
          {
            id: '490005725D',
            name: 'Crayford Bridge',
            coordinates: {
              lat: 51.450982,
              lon: 0.179612,
            },
            indicator_text: 'D',
          },
          {
            id: '490005728J',
            name: 'Crayford Town Hall',
            coordinates: {
              lat: 51.450372,
              lon: 0.180964,
            },
            indicator_text: 'E',
          },
          {
            id: '490008004E',
            name: 'Heath Road',
            coordinates: {
              lat: 51.449184,
              lon: 0.188234,
            },
            indicator_text: 'F',
          },
          {
            id: '2400A019740A',
            name: 'Maiden Lane',
            coordinates: {
              lat: 51.44866,
              lon: 0.19172,
            },
          },
          {
            id: '2400A019750A',
            name: 'Bird In Hand',
            coordinates: {
              lat: 51.448246,
              lon: 0.194147,
            },
          },
          {
            id: '2400A019760A',
            name: 'Havelock Road',
            coordinates: {
              lat: 51.447748,
              lon: 0.197203,
            },
          },
          {
            id: '2400A019770A',
            name: 'West Hill School',
            coordinates: {
              lat: 51.446819,
              lon: 0.202642,
            },
          },
          {
            id: '2400102547',
            name: 'West Hill / Shepherds Lane',
            coordinates: {
              lat: 51.446011,
              lon: 0.207798,
            },
          },
          {
            id: '2400A019780A',
            name: 'Priory Hill',
            coordinates: {
              lat: 51.445502,
              lon: 0.210479,
            },
          },
          {
            id: '2400A019900A',
            name: 'Dartford Station',
            coordinates: {
              lat: 51.446694,
              lon: 0.217834,
            },
            indicator_text: 'C',
          },
          {
            id: '240075089',
            name: 'Hanau Bridge',
            coordinates: {
              lat: 51.444708,
              lon: 0.22063,
            },
            indicator_text: 'H',
          },
          {
            id: '2400A019210A',
            name: 'Darent Valley Hospital',
            coordinates: {
              lat: 51.435363,
              lon: 0.25973,
            },
          },
          {
            id: '2400A070060A',
            name: 'Bluewater Shopping Centre',
            coordinates: {
              lat: 51.437422,
              lon: 0.276479,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus96',
              frequency_seconds_range: [218, 218],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'Stagecoach_StagecoachLondon96',
              frequency_seconds_range: [218, 218],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: '96 test',
              description: 'test',
              service_ids: ['LondonBus96', 'Stagecoach_StagecoachLondon96'],
            },
          ],
          leg_departure_time: '2022-07-13T14:10:30+01:00',
          leg_arrival_time: '2022-07-13T14:48:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus96',
            name: '96',
            vehicle_types: ['bus'],
            brand: {
              id: 'LondonBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
                  width: 12,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
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
          },
          {
            id: 'Stagecoach_StagecoachLondon96',
            name: '96',
            vehicle_types: ['bus'],
            brand: {
              id: 'Stagecoach',
              name: 'Stagecoach',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/78316842966f361745da511eb419d525947ed0f1df4ebc3db4844a87/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/247b06cb9ffa9b1485cb00e99f9335c97b337d1904e43d0f8a61b39d/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8f0b645b8bcd8a0710f10682cced1ce7f255749cd605bccbe772ecab/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/c2dc5d384fdd9ad0963702d5a03faf29f69039932e81d0f6c442bccf/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/fc5abb9481e611b17021e6f0029888b4c248f203ffd7b614e747fd16/d324a6fb/@2x.png',
                  width: 12,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/252456705af48b4b9fe0a1d9df9e63639f1ee72d952bc5f6d2de9046/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#006BB5',
            background_color: '#006BB5',
            text_color: '#FFFFFF',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 195,
        path: '{j}xH__u@z@iAACCWGNEPANo@EEAa@IYIM~AEn@ADEj@AFC^?????@bAf@',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:48:00+01:00',
          leg_arrival_time: '2022-07-13T14:51:15+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 207,
        path: 'el}xH{xt@f\\yV',
        stops: [
          {
            id: '2400A070050A',
            name: 'Bluewater Shopping Centre',
            coordinates: {
              lat: 51.43763,
              lon: 0.275497,
            },
            indicator_text: '6',
          },
          {
            id: '2400A019990A',
            name: 'Ightham Cottages',
            coordinates: {
              lat: 51.432953,
              lon: 0.279307,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'GenericUKBus_Gocoachhire474',
              frequency_seconds_range: [3600, 3600],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['GenericUKBus_Gocoachhire474'],
            },
          ],
          leg_departure_time: '2022-07-13T15:10:00+01:00',
          leg_arrival_time: '2022-07-13T15:13:27+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'GenericUKBus_Gocoachhire474',
            name: '474',
            vehicle_types: ['bus'],
            brand: {
              id: 'GenericUKBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4a24e8645ca45771e815fcb840b7f9f335901171161151c97f446409/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/7c635b580b0dabfef289458c11ae84ba120e4c0f7b74f3bbc6a7568d/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4f771815c3f20ec2a24c2705ae32eb5a04ddae79dfd18d95b3e706d5/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/0e8620034b36ff4133629c070402fcc61eb018c146a96e9b8dca5b22/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/d8299b916f55671e843ab2eaaa7a5fc19611cb06d83714cc16ed392b/d324a6fb/@2x.png',
                  width: 12,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5216ba2e80678f4d1418b1b0a50e024ef3bdef218c649970f01caa27/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#2C4196',
            background_color: '#2C4196',
            text_color: '#FFFFFF',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 548,
        path: '}n|xHupu@?@BCl@_@f@YVCL?LFJNL^LNLHNDR@NOHMNBHDHJFNDZFfAPrB\\vEf@xETrBPxAdAvGEW',
        updatable_detail: {
          leg_departure_time: '2022-07-13T15:13:27+01:00',
          leg_arrival_time: '2022-07-13T15:22:35+01:00',
        },
      },
    ],
    route_departure_time: '2022-07-13T14:06:43+01:00',
    route_arrival_time: '2022-07-13T15:22:35+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxNzYwNywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA2NjAsXCJkdXJhdGlvblwiOjUyNDUsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQzMDMzNywwLjI3MzYxMlwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MjA4LFwiZHVyYXRpb25cIjoxNzMsXCJlY1wiOlwiNTEuNDU3MTEsMC4xNDE3XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDU2MTQsMC4xNDM0NlwifSx7XCJkdXJhdGlvblwiOjIyNTAsXCJlbmRcIjpcIjI0MDBBMDcwMDYwQVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzOTZcIixcIlN0YWdlY29hY2hfU3RhZ2Vjb2FjaExvbmRvbjk2XCJdLFwic3RhcnRcIjpcIjQ5MDAwMzk3M0JcIixcInN0b3BfY291bnRcIjoyMn0se1wiZGlzdGFuY2VcIjoyNjEsXCJkdXJhdGlvblwiOjE5NSxcImVjXCI6XCI1MS40Mzc2MywwLjI3NTVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40Mzc0MiwwLjI3NjQ4XCJ9LHtcImR1cmF0aW9uXCI6MjA3LFwiZW5kXCI6XCIyNDAwQTAxOTk5MEFcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkdlbmVyaWNVS0J1c19Hb2NvYWNoaGlyZTQ3NFwiXSxcInN0YXJ0XCI6XCIyNDAwQTA3MDA1MEFcIixcInN0b3BfY291bnRcIjoyfSx7XCJkaXN0YW5jZVwiOjYxMyxcImR1cmF0aW9uXCI6NTQ4LFwiZWNcIjpcIjUxLjQzMDQxLDAuMjczNThcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40MzI5NSwwLjI3OTMxXCJ9XSxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjRiMTlkNzAwLTRhYzEtNGFhNC05OTZiLWI3ZmFhNmM5YzRkNFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjQ1NTk1MywwLjE0MzQ2NVwifSxcInRpbWVcIjpcIjIwMjItMDctMTNUMTQ6MDY6NDMrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.0rglymvC6T_RW4DlhyUaYjWttW4l_jLW40L6AbiEJgU',
  },
  {
    start: {
      coordinates: {
        lat: 51.455953,
        lon: 0.143465,
      },
    },
    end: {
      coordinates: {
        lat: 51.430337,
        lon: 0.273612,
      },
    },
    distance_meters: 2444,
    duration_seconds: 4144,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£1.65',
      amount: '1.65',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 173,
        path: '{_ayHs_[?@Ej@O|A?F@DEDC?eAU_@I[~@CJOdBAJC`@A@EA',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:06:43+01:00',
          leg_arrival_time: '2022-07-13T14:09:36+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2010,
        path: '}eayHstZn@cg@xEgOnCiTzC_[hFki@zB{Rr@oM|@gRzDgb@xBmGlFml@fByTpAeNbBaRxD_a@`Dg_@dBwOmF}l@jKoPly@ksF',
        stops: [
          {
            id: '490003973B',
            name: 'Trinity Place',
            coordinates: {
              lat: 51.457112,
              lon: 0.1417,
            },
            indicator_text: 'B',
          },
          {
            id: '490003975P',
            name: 'Mayplace Rd West / Bexleyheath Clock Twr',
            coordinates: {
              lat: 51.456869,
              lon: 0.148121,
            },
            indicator_text: 'P',
          },
          {
            id: '490003972E',
            name: 'Bexleyheath / Highland Road',
            coordinates: {
              lat: 51.455778,
              lon: 0.15072,
            },
            indicator_text: 'X',
          },
          {
            id: '490011016E2',
            name: 'Watling Street / Civic Offices',
            coordinates: {
              lat: 51.455059,
              lon: 0.154127,
            },
            indicator_text: 'J',
          },
          {
            id: '490010773E2',
            name: 'Park Grove',
            coordinates: {
              lat: 51.454275,
              lon: 0.158609,
            },
            indicator_text: 'K',
          },
          {
            id: '490010587S',
            name: 'Old Road',
            coordinates: {
              lat: 51.453107,
              lon: 0.165391,
            },
            indicator_text: 'S',
          },
          {
            id: '490004000E',
            name: 'Bigs Hill Wood',
            coordinates: {
              lat: 51.45249,
              lon: 0.168572,
            },
            indicator_text: 'T',
          },
          {
            id: '490016614AA',
            name: 'Bourne Road',
            coordinates: {
              lat: 51.452232,
              lon: 0.170891,
            },
            indicator_text: 'U',
          },
          {
            id: '490003980L',
            name: 'Bexley Lane',
            coordinates: {
              lat: 51.451923,
              lon: 0.173971,
            },
            indicator_text: 'V',
          },
          {
            id: '490005725D',
            name: 'Crayford Bridge',
            coordinates: {
              lat: 51.450982,
              lon: 0.179612,
            },
            indicator_text: 'D',
          },
          {
            id: '490005728J',
            name: 'Crayford Town Hall',
            coordinates: {
              lat: 51.450372,
              lon: 0.180964,
            },
            indicator_text: 'E',
          },
          {
            id: '490008004E',
            name: 'Heath Road',
            coordinates: {
              lat: 51.449184,
              lon: 0.188234,
            },
            indicator_text: 'F',
          },
          {
            id: '2400A019740A',
            name: 'Maiden Lane',
            coordinates: {
              lat: 51.44866,
              lon: 0.19172,
            },
          },
          {
            id: '2400A019750A',
            name: 'Bird In Hand',
            coordinates: {
              lat: 51.448246,
              lon: 0.194147,
            },
          },
          {
            id: '2400A019760A',
            name: 'Havelock Road',
            coordinates: {
              lat: 51.447748,
              lon: 0.197203,
            },
          },
          {
            id: '2400A019770A',
            name: 'West Hill School',
            coordinates: {
              lat: 51.446819,
              lon: 0.202642,
            },
          },
          {
            id: '2400102547',
            name: 'West Hill / Shepherds Lane',
            coordinates: {
              lat: 51.446011,
              lon: 0.207798,
            },
          },
          {
            id: '2400A019780A',
            name: 'Priory Hill',
            coordinates: {
              lat: 51.445502,
              lon: 0.210479,
            },
          },
          {
            id: '2400A019900A',
            name: 'Dartford Station',
            coordinates: {
              lat: 51.446694,
              lon: 0.217834,
            },
            indicator_text: 'C',
          },
          {
            id: '240075089',
            name: 'Hanau Bridge',
            coordinates: {
              lat: 51.444708,
              lon: 0.22063,
            },
            indicator_text: 'H',
          },
          {
            id: '2400A019210A',
            name: 'Darent Valley Hospital',
            coordinates: {
              lat: 51.435363,
              lon: 0.25973,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus96',
              frequency_seconds_range: [218, 218],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'Stagecoach_StagecoachLondon96',
              frequency_seconds_range: [218, 218],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: '96 test',
              description: 'test',
              service_ids: ['LondonBus96', 'Stagecoach_StagecoachLondon96'],
            },
          ],
          leg_departure_time: '2022-07-13T14:10:30+01:00',
          leg_arrival_time: '2022-07-13T14:44:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus96',
            name: '96',
            vehicle_types: ['bus'],
            brand: {
              id: 'LondonBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
                  width: 12,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
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
          },
          {
            id: 'Stagecoach_StagecoachLondon96',
            name: '96',
            vehicle_types: ['bus'],
            brand: {
              id: 'Stagecoach',
              name: 'Stagecoach',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/78316842966f361745da511eb419d525947ed0f1df4ebc3db4844a87/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/247b06cb9ffa9b1485cb00e99f9335c97b337d1904e43d0f8a61b39d/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8f0b645b8bcd8a0710f10682cced1ce7f255749cd605bccbe772ecab/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/c2dc5d384fdd9ad0963702d5a03faf29f69039932e81d0f6c442bccf/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/fc5abb9481e611b17021e6f0029888b4c248f203ffd7b614e747fd16/d324a6fb/@2x.png',
                  width: 12,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/252456705af48b4b9fe0a1d9df9e63639f1ee72d952bc5f6d2de9046/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#006BB5',
            background_color: '#006BB5',
            text_color: '#FFFFFF',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 1889,
        path: '_~|xHivq@LBJ{BLmBHeBoAg@Y[CKGIGEG?I@EFg@Fk@[e@e@SQIKKm@Gy@FwAFi@LkAnBsPdBwOx@wH^kF\\kET}CRoBJ}@jAcGXuBDy@DoA@}BDy@?e@Be@BMRQb@WTEZKVKNIDCNKd@YBCl@_@f@YVCL?LFJNL^LNLHNDR@NOHMNBHDHJFNDZFfAPrB\\vEf@xETrBPxAdAvGEW',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:44:00+01:00',
          leg_arrival_time: '2022-07-13T15:15:29+01:00',
        },
      },
    ],
    route_departure_time: '2022-07-13T14:06:43+01:00',
    route_arrival_time: '2022-07-13T15:15:29+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxNzYwNywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA2NjAsXCJkdXJhdGlvblwiOjQxNDQsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQzMDMzNywwLjI3MzYxMlwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MjA4LFwiZHVyYXRpb25cIjoxNzMsXCJlY1wiOlwiNTEuNDU3MTEsMC4xNDE3XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDU2MTQsMC4xNDM0NlwifSx7XCJkdXJhdGlvblwiOjIwMTAsXCJlbmRcIjpcIjI0MDBBMDE5MjEwQVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzOTZcIixcIlN0YWdlY29hY2hfU3RhZ2Vjb2FjaExvbmRvbjk2XCJdLFwic3RhcnRcIjpcIjQ5MDAwMzk3M0JcIixcInN0b3BfY291bnRcIjoyMX0se1wiZGlzdGFuY2VcIjoyMjM2LFwiZHVyYXRpb25cIjoxODg5LFwiZWNcIjpcIjUxLjQzMDQxLDAuMjczNThcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40MzUzNiwwLjI1OTczXCJ9XSxcInByaWNlX3BlbmNlXCI6MTY1LFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNGIxOWQ3MDAtNGFjMS00YWE0LTk5NmItYjdmYWE2YzljNGQ0XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNDU1OTUzLDAuMTQzNDY1XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0xM1QxNDowNjo0MyswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.1NaOf9tOPdsYnFhQV8sI1nkxbqr3A6V8LXPSne_o1do',
  },
  {
    start: {
      coordinates: {
        lat: 51.455953,
        lon: 0.143465,
      },
    },
    end: {
      coordinates: {
        lat: 51.430337,
        lon: 0.273612,
      },
    },
    distance_meters: 2389,
    duration_seconds: 5546,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£1.65',
      amount: '1.65',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 302,
        path: '{_ayHs_[?@?iAJ{@IEw@WYa@?C@K@I?G@C@M?C@G?CBW@YBU?E@CB]?EBW?G@K@GHgA?Is@iGCCOOCc@GGY}@CB',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:06:43+01:00',
          leg_arrival_time: '2022-07-13T14:11:45+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2700,
        path: 'qdayH{{[kI{WwBaR_Ds`@tDif@`D}XbGuK|PqHpKaVtEqHxBmGnNLtHxAaW~Ibe@eg@vDgYs@{^hI_O}K{U@gSoF_LaEqJdBwO}Eyn@zJsNdLkp@lCuX_@{Pu@aHoAc^cE}XmAmUiI}~@gCgV}J{vAdcAnF',
        stops: [
          {
            id: '490003975S',
            name: 'Mayplace Rd West / Bexleyheath Clock Twr',
            coordinates: {
              lat: 51.456889,
              lon: 0.14798,
            },
            indicator_text: 'S',
          },
          {
            id: '490006620E',
            name: 'Foresters Crescent',
            coordinates: {
              lat: 51.458552,
              lon: 0.151959,
            },
            indicator_text: 'NG',
          },
          {
            id: '490015380E',
            name: 'Mayplace Road East / Pinnacle Hill',
            coordinates: {
              lat: 51.459153,
              lon: 0.15501,
            },
            indicator_text: 'NH',
          },
          {
            id: '490003626E',
            name: 'Mayplace Road East / Barnehurst Road',
            coordinates: {
              lat: 51.459953,
              lon: 0.160389,
            },
            indicator_text: 'NJ',
          },
          {
            id: '490009596E',
            name: 'Mayplace Road East / Manor Way',
            coordinates: {
              lat: 51.459036,
              lon: 0.16668,
            },
          },
          {
            id: '490014899E',
            name: 'Woodside Road',
            coordinates: {
              lat: 51.458231,
              lon: 0.170831,
            },
          },
          {
            id: '490009585E1',
            name: 'Manor Road / Manor Close',
            coordinates: {
              lat: 51.456926,
              lon: 0.172856,
            },
          },
          {
            id: '490010578E',
            name: 'Old Road / Perry Street',
            coordinates: {
              lat: 51.454064,
              lon: 0.17439,
            },
          },
          {
            id: '490005727H',
            name: 'Crayford High Street',
            coordinates: {
              lat: 51.452053,
              lon: 0.178079,
            },
            indicator_text: 'C',
          },
          {
            id: '490005725D',
            name: 'Crayford Bridge',
            coordinates: {
              lat: 51.450982,
              lon: 0.179612,
            },
            indicator_text: 'D',
          },
          {
            id: '490005728J',
            name: 'Crayford Town Hall',
            coordinates: {
              lat: 51.450372,
              lon: 0.180964,
            },
            indicator_text: 'E',
          },
          {
            id: '490001073N',
            name: 'Crayford Station',
            coordinates: {
              lat: 51.447891,
              lon: 0.180889,
            },
            indicator_text: 'H',
          },
          {
            id: '490011774S',
            name: 'Royston Road',
            coordinates: {
              lat: 51.446344,
              lon: 0.180441,
            },
            indicator_text: 'J',
          },
          {
            id: '490002043ZZ',
            name: 'Station Road / Chastilian Road',
            coordinates: {
              lat: 51.450189,
              lon: 0.178682,
            },
          },
          {
            id: '2400102531',
            name: 'North Road',
            coordinates: {
              lat: 51.444089,
              lon: 0.185112,
            },
          },
          {
            id: '2400A070830A',
            name: 'Seaton Road',
            coordinates: {
              lat: 51.443166,
              lon: 0.189313,
            },
          },
          {
            id: '2400102535',
            name: 'Princes Road',
            coordinates: {
              lat: 51.44343,
              lon: 0.194406,
            },
          },
          {
            id: '2400A072640A',
            name: 'Shepherds Lane / Havelock Road',
            coordinates: {
              lat: 51.441781,
              lon: 0.196974,
            },
          },
          {
            id: '2400102541',
            name: 'Somerset Road',
            coordinates: {
              lat: 51.443853,
              lon: 0.200628,
            },
          },
          {
            id: '2400102545',
            name: 'Dartford Grammar School For Girls',
            coordinates: {
              lat: 51.443837,
              lon: 0.203866,
            },
          },
          {
            id: '240090627',
            name: 'Dartford Grammar School For Boys',
            coordinates: {
              lat: 51.445039,
              lon: 0.205953,
            },
          },
          {
            id: '2400102547',
            name: 'West Hill / Shepherds Lane',
            coordinates: {
              lat: 51.446011,
              lon: 0.207798,
            },
          },
          {
            id: '2400A019780A',
            name: 'Priory Hill',
            coordinates: {
              lat: 51.445502,
              lon: 0.210479,
            },
          },
          {
            id: '2400A019910A',
            name: 'Dartford Station',
            coordinates: {
              lat: 51.446608,
              lon: 0.218132,
            },
            indicator_text: 'D',
          },
          {
            id: '240075089',
            name: 'Hanau Bridge',
            coordinates: {
              lat: 51.444708,
              lon: 0.22063,
            },
            indicator_text: 'H',
          },
          {
            id: '2400A060520A',
            name: 'Livingston Hospital',
            coordinates: {
              lat: 51.442598,
              lon: 0.228529,
            },
          },
          {
            id: '2400102527',
            name: 'Shenley Road',
            coordinates: {
              lat: 51.44189,
              lon: 0.232639,
            },
          },
          {
            id: '2400A018820A',
            name: 'The Brent',
            coordinates: {
              lat: 51.442051,
              lon: 0.235496,
            },
          },
          {
            id: '2400A018830A',
            name: 'Brentfield Road',
            coordinates: {
              lat: 51.44232,
              lon: 0.236948,
            },
          },
          {
            id: '2400A018840A',
            name: 'Milestone Road',
            coordinates: {
              lat: 51.442719,
              lon: 0.241932,
            },
          },
          {
            id: '2400A018850A',
            name: 'Brent School',
            coordinates: {
              lat: 51.443701,
              lon: 0.246082,
            },
          },
          {
            id: '2400A018860A',
            name: 'Welsh Tavern',
            coordinates: {
              lat: 51.444091,
              lon: 0.24967,
            },
          },
          {
            id: '2400A018870A',
            name: 'Elm Road',
            coordinates: {
              lat: 51.445738,
              lon: 0.259897,
            },
          },
          {
            id: '2400A018880A',
            name: 'The Bull',
            coordinates: {
              lat: 51.446422,
              lon: 0.263615,
            },
          },
          {
            id: '2400A018900A',
            name: 'Waterstone Park',
            coordinates: {
              lat: 51.448325,
              lon: 0.277684,
            },
          },
          {
            id: '2400A070060A',
            name: 'Bluewater Shopping Centre',
            coordinates: {
              lat: 51.437422,
              lon: 0.276479,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus492',
              frequency_seconds_range: [1830, 1830],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus492'],
            },
          ],
          leg_departure_time: '2022-07-13T14:14:00+01:00',
          leg_arrival_time: '2022-07-13T14:59:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus492',
            name: '492',
            vehicle_types: ['bus'],
            brand: {
              id: 'LondonBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
                  width: 12,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
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
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 1944,
        path: '{j}xH__u@z@iAACCWEe@GM?AGQIK[MQGQ?EJIFMAKKEO?SBQSGc@Ia@Ia@@A?g@@s@Gk@Og@G_@?i@NQB{@`@UFWAIEMKKIKQGOGUASCQ@]@OBSDOFQFQLO\\SREd@AfDj@zFl@fF~@`Ez@pFjAlAJv@Av@IfB]hAi@|@u@r@u@p@o@Z[LCJCL@JHHJVt@PrB\\vEf@xETrBPxAdAvGEW',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:59:00+01:00',
          leg_arrival_time: '2022-07-13T15:31:24+01:00',
        },
      },
    ],
    route_departure_time: '2022-07-13T14:06:43+01:00',
    route_arrival_time: '2022-07-13T15:31:24+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxNzYwNywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA2NjAsXCJkdXJhdGlvblwiOjU1NDYsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQzMDMzNywwLjI3MzYxMlwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6Mzc1LFwiZHVyYXRpb25cIjozMDIsXCJlY1wiOlwiNTEuNDU2ODksMC4xNDc5OFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ1NjE0LDAuMTQzNDZcIn0se1wiZHVyYXRpb25cIjoyNzAwLFwiZW5kXCI6XCIyNDAwQTA3MDA2MEFcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkxvbmRvbkJ1czQ5MlwiXSxcInN0YXJ0XCI6XCI0OTAwMDM5NzVTXCIsXCJzdG9wX2NvdW50XCI6MzZ9LHtcImRpc3RhbmNlXCI6MjAxNCxcImR1cmF0aW9uXCI6MTk0NCxcImVjXCI6XCI1MS40MzA0MSwwLjI3MzU4XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDM3NDIsMC4yNzY0OFwifV0sXCJwcmljZV9wZW5jZVwiOjE2NSxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjRiMTlkNzAwLTRhYzEtNGFhNC05OTZiLWI3ZmFhNmM5YzRkNFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjQ1NTk1MywwLjE0MzQ2NVwifSxcInRpbWVcIjpcIjIwMjItMDctMTNUMTQ6MDY6NDMrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.dFiXrleY8XQb69Xb4pAxX_J6836QVdf7eAobWK3qL4o',
  },
  {
    start: {
      coordinates: {
        lat: 51.455953,
        lon: 0.143465,
      },
    },
    end: {
      coordinates: {
        lat: 51.430337,
        lon: 0.273612,
      },
    },
    distance_meters: 2599,
    duration_seconds: 5097,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£1.65',
      amount: '1.65',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 302,
        path: '{_ayHs_[?@?iAJ{@IEw@WYa@?C@K@I?G@C@M?C@G?CBW@YBU?E@CB]?EBW?G@K@GHgA?Is@iGCCOOCc@GGY}@CB',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:06:43+01:00',
          leg_arrival_time: '2022-07-13T14:11:45+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 600,
        path: 'qdayH{{[kI{WwBaR_Ds`@tDif@`D}XbGuK|PqHpKaVtEqH',
        stops: [
          {
            id: '490003975S',
            name: 'Mayplace Rd West / Bexleyheath Clock Twr',
            coordinates: {
              lat: 51.456889,
              lon: 0.14798,
            },
            indicator_text: 'S',
          },
          {
            id: '490006620E',
            name: 'Foresters Crescent',
            coordinates: {
              lat: 51.458552,
              lon: 0.151959,
            },
            indicator_text: 'NG',
          },
          {
            id: '490015380E',
            name: 'Mayplace Road East / Pinnacle Hill',
            coordinates: {
              lat: 51.459153,
              lon: 0.15501,
            },
            indicator_text: 'NH',
          },
          {
            id: '490003626E',
            name: 'Mayplace Road East / Barnehurst Road',
            coordinates: {
              lat: 51.459953,
              lon: 0.160389,
            },
            indicator_text: 'NJ',
          },
          {
            id: '490009596E',
            name: 'Mayplace Road East / Manor Way',
            coordinates: {
              lat: 51.459036,
              lon: 0.16668,
            },
          },
          {
            id: '490014899E',
            name: 'Woodside Road',
            coordinates: {
              lat: 51.458231,
              lon: 0.170831,
            },
          },
          {
            id: '490009585E1',
            name: 'Manor Road / Manor Close',
            coordinates: {
              lat: 51.456926,
              lon: 0.172856,
            },
          },
          {
            id: '490010578E',
            name: 'Old Road / Perry Street',
            coordinates: {
              lat: 51.454064,
              lon: 0.17439,
            },
          },
          {
            id: '490005727H',
            name: 'Crayford High Street',
            coordinates: {
              lat: 51.452053,
              lon: 0.178079,
            },
            indicator_text: 'C',
          },
          {
            id: '490005725D',
            name: 'Crayford Bridge',
            coordinates: {
              lat: 51.450982,
              lon: 0.179612,
            },
            indicator_text: 'D',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus492',
              frequency_seconds_range: [1830, 1830],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus492'],
            },
          ],
          leg_departure_time: '2022-07-13T14:14:00+01:00',
          leg_arrival_time: '2022-07-13T14:24:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus492',
            name: '492',
            vehicle_types: ['bus'],
            brand: {
              id: 'LondonBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
                  width: 12,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
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
          },
        ],
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1260,
        path: 's_`yHqab@@BvAaC^uAHu@VqCZgAMWdE}d@RyB~@oCO{Aj@qIDu@fAmLbBcRrDaa@zBmV\\e@GsBR{BzA}Ov@sIK_Ai@u@oEk@e@]a@gAMgBv@}KPqKt@iF?m@Ng@rBMhBs@xAiBhDeEBsE|A{FfIa|@OuCQYHe@V@j@k@zQwqB`@wA`@_FEi@fAaNnB}PPaDp@iCAkAd@SnCdB~@@Df@e@zAIvAfBjB[vD]JQH',
        stops: [
          {
            id: '490005725D',
            name: 'Crayford Bridge',
            coordinates: {
              lat: 51.450982,
              lon: 0.179612,
            },
            indicator_text: 'D',
          },
          {
            id: '490005728J',
            name: 'Crayford Town Hall',
            coordinates: {
              lat: 51.450372,
              lon: 0.180964,
            },
            indicator_text: 'E',
          },
          {
            id: '490008004E',
            name: 'Heath Road',
            coordinates: {
              lat: 51.449184,
              lon: 0.188234,
            },
            indicator_text: 'F',
          },
          {
            id: '2400A019740A',
            name: 'Maiden Lane',
            coordinates: {
              lat: 51.44866,
              lon: 0.19172,
            },
          },
          {
            id: '2400A019750A',
            name: 'Bird In Hand',
            coordinates: {
              lat: 51.448246,
              lon: 0.194147,
            },
          },
          {
            id: '2400A019760A',
            name: 'Havelock Road',
            coordinates: {
              lat: 51.447748,
              lon: 0.197203,
            },
          },
          {
            id: '2400A019770A',
            name: 'West Hill School',
            coordinates: {
              lat: 51.446819,
              lon: 0.202642,
            },
          },
          {
            id: '2400102547',
            name: 'West Hill / Shepherds Lane',
            coordinates: {
              lat: 51.446011,
              lon: 0.207798,
            },
          },
          {
            id: '2400A019780A',
            name: 'Priory Hill',
            coordinates: {
              lat: 51.445502,
              lon: 0.210479,
            },
          },
          {
            id: '2400A019910A',
            name: 'Dartford Station',
            coordinates: {
              lat: 51.446608,
              lon: 0.218132,
            },
            indicator_text: 'D',
          },
          {
            id: '240075089',
            name: 'Hanau Bridge',
            coordinates: {
              lat: 51.444708,
              lon: 0.22063,
            },
            indicator_text: 'H',
          },
          {
            id: '2400101012',
            name: 'Darent Valley Hospital',
            coordinates: {
              lat: 51.435744,
              lon: 0.259116,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus428',
              frequency_seconds_range: [924, 924],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus428'],
            },
          ],
          leg_departure_time: '2022-07-13T14:32:00+01:00',
          leg_arrival_time: '2022-07-13T14:53:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus428',
            name: '428',
            vehicle_types: ['bus'],
            brand: {
              id: 'LondonBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
                  width: 12,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
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
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 1873,
        path: 'k`}xHorq@CTg@SFo@NsABe@C}@CWASAk@?GHmAEgAGO_@g@k@[e@e@SQIKKm@Gy@FwAFi@LkAnBsPdBwOx@wH^kF\\kET}CRoBJ}@jAcGXuBDy@DoA@}BDy@?e@Be@BMRQb@WTEZKVKNIDCNKd@YBCl@_@f@YVCL?LFJNL^LNLHNDR@NOHMNBHDHJFNDZFfAPrB\\vEf@xETrBPxAdAvGEW',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:53:00+01:00',
          leg_arrival_time: '2022-07-13T15:24:13+01:00',
        },
      },
    ],
    route_departure_time: '2022-07-13T14:06:43+01:00',
    route_arrival_time: '2022-07-13T15:24:13+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxNzYwNywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA2NjAsXCJkdXJhdGlvblwiOjUwOTcsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQzMDMzNywwLjI3MzYxMlwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjMsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6Mzc1LFwiZHVyYXRpb25cIjozMDIsXCJlY1wiOlwiNTEuNDU2ODksMC4xNDc5OFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ1NjE0LDAuMTQzNDZcIn0se1wiZHVyYXRpb25cIjo2MDAsXCJlbmRcIjpcIjQ5MDAwNTcyNURcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkxvbmRvbkJ1czQ5MlwiXSxcInN0YXJ0XCI6XCI0OTAwMDM5NzVTXCIsXCJzdG9wX2NvdW50XCI6MTB9LHtcImR1cmF0aW9uXCI6MTI2MCxcImVuZFwiOlwiMjQwMDEwMTAxMlwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzNDI4XCJdLFwic3RhcnRcIjpcIjQ5MDAwNTcyNURcIixcInN0b3BfY291bnRcIjoxMn0se1wiZGlzdGFuY2VcIjoyMjI0LFwiZHVyYXRpb25cIjoxODczLFwiZWNcIjpcIjUxLjQzMDQxLDAuMjczNThcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40MzU3NCwwLjI1OTEyXCJ9XSxcInByaWNlX3BlbmNlXCI6MTY1LFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNGIxOWQ3MDAtNGFjMS00YWE0LTk5NmItYjdmYWE2YzljNGQ0XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNDU1OTUzLDAuMTQzNDY1XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0xM1QxNDowNjo0MyswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.HqH09MfwQDTilRmr6b0-qiJdLZa4VIAHJ9YdYo1O2oY',
  },
  {
    start: {
      coordinates: {
        lat: 51.455953,
        lon: 0.143465,
      },
    },
    end: {
      coordinates: {
        lat: 51.430337,
        lon: 0.273612,
      },
    },
    distance_meters: 4336,
    duration_seconds: 5540,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 1127,
        path: '{_ayHs_[?@Ej@O|A?F@DEDC?eAU_@I[~@BLOrBEd@En@CNSnCEh@KlA?DWnDOT?NCRALAD?B?B@D@B@BMv@A`@Eh@ICoAQmCSSCk@Cg@Aw@Dm@HsAL_@D[BM@[A]AWGMEKJkBv@]NYLOF{BLKnFUvFkBOE|G?@?XA?',
        updatable_detail: {
          leg_departure_time: '2022-07-13T14:06:43+01:00',
          leg_arrival_time: '2022-07-13T14:25:30+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Bexleyheath_E31376',
            stop_id: 'Bexleyheath',
            coordinates: {
              lat: 51.4633775,
              lon: 0.1335565,
            },
          },
          alternate_exits: [
            {
              id: 'Bexleyheath_E31375',
              stop_id: 'Bexleyheath',
              coordinates: {
                lat: 51.4636129,
                lon: 0.1334667,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 660,
        path: '{mbyH{bYK?ByDKqKoAe[{Cuo@WmHQ}JMgMEiMLwOBaDbBmr@xAulCd@cF`AeEjAkC~@yAd~@ex@xEkHvDcKjBaJbAmIbBsRpC{N|DmM`@cCTL',
        stops: [
          {
            id: 'Bexleyheath',
            name: 'Bexleyheath',
            coordinates: {
              lat: 51.463498,
              lon: 0.133735,
            },
          },
          {
            id: 'Barnehurst',
            name: 'Barnehurst',
            coordinates: {
              lat: 51.464957,
              lon: 0.159646,
            },
          },
          {
            id: 'Dartford',
            name: 'Dartford',
            coordinates: {
              lat: 51.447369,
              lon: 0.219248,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailSE',
              headsign: 'Dartford',
              scheduled_time: '2022-07-13T14:33:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailSE'],
            },
          ],
          leg_departure_time: '2022-07-13T14:33:00+01:00',
          leg_arrival_time: '2022-07-13T14:44:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailSE',
            name: 'Southeastern',
            vehicle_types: ['rail'],
            brand: {
              id: 'NationalRail',
              name: 'National Rail',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5a2b29efb556588bc6ba282fd72fb542b96d387403b86e3c0b927418/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/c3dc58616e7d9a793e1b4b85a19ad88a3673a52137672cbcd0bbcb96/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/403add017870210937ae9f459196c7fbe12b09e5dd4dac3c43f67c65/d324a6fb/@2x.png',
                  width: 16,
                  height: 13,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/e9b75e4fa00a57b15a53092100e1872a1995f2551b2084176ff06b6b/d324a6fb/@2x.png',
                  width: 24,
                  height: 15,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/46f5ed6057ce3f31521ea3df78d1f5e491d826a7a099f20b2cea37ca/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/13b426c1537effebd0483a88aa93c51fe21c8485e25eff157db9b35a/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#1B89E6',
            background_color: '#1B89E6',
          },
        ],
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'ai_yHiyi@UMHi@\\{D\\oLwAo_AOmEs@cHY}AoBaHaC}EuFqJeByFmA{Ha@gHCqEd@apBPix@d@gQp@aKzAuNB@',
        stops: [
          {
            id: 'Dartford',
            name: 'Dartford',
            coordinates: {
              lat: 51.447369,
              lon: 0.219248,
            },
          },
          {
            id: 'StoneCrossing',
            name: 'Stone Crossing',
            coordinates: {
              lat: 51.451329,
              lon: 0.263771,
            },
          },
          {
            id: 'GreenhitheForBluewater',
            name: 'Greenhithe for Bluewater',
            coordinates: {
              lat: 51.45037,
              lon: 0.28029,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailTL',
              headsign: 'Rainham (Kent)',
              scheduled_time: '2022-07-13T14:58:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailSE', 'NationalRailTL'],
            },
          ],
          leg_departure_time: '2022-07-13T14:58:00+01:00',
          leg_arrival_time: '2022-07-13T15:04:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailSE',
            name: 'Southeastern',
            vehicle_types: ['rail'],
            brand: {
              id: 'NationalRail',
              name: 'National Rail',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5a2b29efb556588bc6ba282fd72fb542b96d387403b86e3c0b927418/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/c3dc58616e7d9a793e1b4b85a19ad88a3673a52137672cbcd0bbcb96/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/403add017870210937ae9f459196c7fbe12b09e5dd4dac3c43f67c65/d324a6fb/@2x.png',
                  width: 16,
                  height: 13,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/e9b75e4fa00a57b15a53092100e1872a1995f2551b2084176ff06b6b/d324a6fb/@2x.png',
                  width: 24,
                  height: 15,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/46f5ed6057ce3f31521ea3df78d1f5e491d826a7a099f20b2cea37ca/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/13b426c1537effebd0483a88aa93c51fe21c8485e25eff157db9b35a/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#1B89E6',
            background_color: '#1B89E6',
          },
          {
            id: 'NationalRailTL',
            name: 'Thameslink',
            vehicle_types: ['rail'],
            brand: {
              id: 'NationalRail',
              name: 'National Rail',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5a2b29efb556588bc6ba282fd72fb542b96d387403b86e3c0b927418/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/c3dc58616e7d9a793e1b4b85a19ad88a3673a52137672cbcd0bbcb96/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/403add017870210937ae9f459196c7fbe12b09e5dd4dac3c43f67c65/d324a6fb/@2x.png',
                  width: 16,
                  height: 13,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/e9b75e4fa00a57b15a53092100e1872a1995f2551b2084176ff06b6b/d324a6fb/@2x.png',
                  width: 24,
                  height: 15,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/1e4e232416177f31d325fbbde10539d3229dc29625c9827a413e2be6/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/d45c34b17d78178ef69cde20b65f8d6469b3dfa64b3be6460f2572ee/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#444E55',
            background_color: '#444E55',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 2701,
        path: 'k}_yHmuu@y@H?@Bb@E`A[~BE\\@b@H@DXHPHJXBrBN^G@Ll@K|@[^U`@[x@{@L]F[BSFOJKJCLBFBb@UpByBXYnCsBxDmB|@]^KDAdAUZIBt@j@Mn@GbA?zALJ@rA^~@^r@\\r@p@\\\\FJFHNHP?NIFIPCPB`@NfCnB`@VJFbAf@v@Zn@P~IzBfF~@`Ez@pFjAlAJv@Av@IfB]hAi@|@u@r@u@p@o@Z[LCJCL@JHHJVt@PrB\\vEf@xETrBPxAdAvGEW',
        updatable_detail: {
          leg_departure_time: '2022-07-13T15:04:00+01:00',
          leg_arrival_time: '2022-07-13T15:49:01+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'GreenhitheForBluewater_E32659',
            stop_id: 'GreenhitheForBluewater',
            coordinates: {
              lat: 51.4506188,
              lon: 0.2800722,
            },
          },
          alternate_exits: [
            {
              id: 'GreenhitheForBluewater_E32660',
              stop_id: 'GreenhitheForBluewater',
              coordinates: {
                lat: 51.450625,
                lon: 0.2802165,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-13T14:06:43+01:00',
    route_arrival_time: '2022-07-13T15:49:01+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxNzYwNywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA2NjAsXCJkdXJhdGlvblwiOjU1NDAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQzMDMzNywwLjI3MzYxMlwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjQsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTQwNSxcImR1cmF0aW9uXCI6MTEyNyxcImVjXCI6XCI1MS40NjMzOCwwLjEzMzU2XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDU2MTQsMC4xNDM0NlwiLFwidG9fZXhpdFwiOlwiQmV4bGV5aGVhdGhfRTMxMzc2XCJ9LHtcImR1cmF0aW9uXCI6NjYwLFwiZW5kXCI6XCJEYXJ0Zm9yZFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTmF0aW9uYWxSYWlsU0VcIl0sXCJzdGFydFwiOlwiQmV4bGV5aGVhdGhcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9CZXhsZXloZWF0aF9OYXRpb25hbFJhaWxcIixcIlBsYXRmb3JtX0RhcnRmb3JkX05hdGlvbmFsUmFpbE5hdGlvbmFsUmFpbEJ1c1wiXX0se1wiZHVyYXRpb25cIjozNjAsXCJlbmRcIjpcIkdyZWVuaGl0aGVGb3JCbHVld2F0ZXJcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIk5hdGlvbmFsUmFpbFNFXCIsXCJOYXRpb25hbFJhaWxUTFwiXSxcInN0YXJ0XCI6XCJEYXJ0Zm9yZFwiLFwic3RvcF9jb3VudFwiOjMsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX0RhcnRmb3JkX05hdGlvbmFsUmFpbE5hdGlvbmFsUmFpbEJ1c1wiLFwiUGxhdGZvcm1fR3JlZW5oaXRoZUZvckJsdWV3YXRlcl9OYXRpb25hbFJhaWxcIl19LHtcImRpc3RhbmNlXCI6MjkzMSxcImR1cmF0aW9uXCI6MjcwMSxcImVjXCI6XCI1MS40MzA0MSwwLjI3MzU4XCIsXCJmcm9tX2V4aXRcIjpcIkdyZWVuaGl0aGVGb3JCbHVld2F0ZXJfRTMyNjU5XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDUwNjIsMC4yODAwN1wifV0sXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCI0YjE5ZDcwMC00YWMxLTRhYTQtOTk2Yi1iN2ZhYTZjOWM0ZDRcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS40NTU5NTMsMC4xNDM0NjVcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTEzVDE0OjA2OjQzKzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.qwrksgTxqW5nJWevQE4J3xwiW1KfeR4SR57g5K2IOzw',
  },
] as Route[]
