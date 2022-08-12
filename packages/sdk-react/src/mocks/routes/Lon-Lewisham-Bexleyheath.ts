import type { Route } from '@citymapper/api/@types'
export default [
  {
    start: {
      coordinates: {
        lat: 51.460031,
        lon: -0.017358,
      },
    },
    end: {
      coordinates: {
        lat: 51.463504,
        lon: 0.133318,
      },
    },
    distance_meters: 855,
    duration_seconds: 2163,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.80',
      amount: '2.80',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 679,
        path: 'exayH|iBkAA_BCoAAcAUWEE?E@c@NC@EKOg@GK_@gAKGUM{@_@c@UUWUa@Q_@Q_@m@{@MEi@AOBcBFAO?{@Ac@Ao@Fw@FmAAe@GAE?IA@OIA?BaBE',
        updatable_detail: {
          leg_departure_time: '2022-06-20T10:52:26+01:00',
          leg_arrival_time: '2022-06-20T11:03:45+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Lewisham_E30334',
            stop_id: 'Lewisham',
            coordinates: {
              lat: 51.4650702,
              lon: -0.013304,
            },
            name: 'Station Road (bridge)',
          },
          alternate_exits: [
            {
              id: 'Lewisham_E30358',
              stop_id: 'Lewisham',
              coordinates: {
                lat: 51.4648096,
                lon: -0.0127029,
              },
              name: 'Station Road (buses)',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1080,
        path: 'iubyHznAuCkA@I`AoNn@eXOwPwBmr@M_He@wLWkGm@iGeBwJQ{BGkC^iFr@yCxIkYjNqh@|j@muBZkDAmDcBkRWcFaAqR{A}VmPa{B{Cqa@oAkLs@eFyBiLgQss@oAsHa@{DKoBSeEEmHBeDpBw_@VyGLcHfAm~Ap@{^?o@J?',
        stops: [
          {
            id: 'Lewisham',
            name: 'Lewisham',
            coordinates: {
              lat: 51.464687,
              lon: -0.012783,
            },
          },
          {
            id: 'Blackheath',
            name: 'Blackheath',
            coordinates: {
              lat: 51.465795,
              lon: 0.008872,
            },
          },
          {
            id: 'Kidbrooke',
            name: 'Kidbrooke',
            coordinates: {
              lat: 51.46212,
              lon: 0.027498,
            },
          },
          {
            id: 'Eltham',
            name: 'Eltham',
            coordinates: {
              lat: 51.455642,
              lon: 0.052472,
            },
          },
          {
            id: 'Falconwood',
            name: 'Falconwood',
            coordinates: {
              lat: 51.459153,
              lon: 0.079304,
            },
          },
          {
            id: 'Welling',
            name: 'Welling',
            coordinates: {
              lat: 51.464797,
              lon: 0.10169,
            },
          },
          {
            id: 'Bexleyheath',
            name: 'Bexleyheath',
            coordinates: {
              lat: 51.463498,
              lon: 0.133735,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailSE',
              headsign: 'Dartford',
              scheduled_time: '2022-06-20T11:15:00+01:00',
              time_status: 'on_time',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailSE'],
            },
          ],
          leg_departure_time: '2022-06-20T11:15:00+01:00',
          leg_arrival_time: '2022-06-20T11:33:00+01:00',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/46f5ed6057ce3f31521ea3df78d1f5e491d826a7a099f20b2cea37ca/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/13b426c1537effebd0483a88aa93c51fe21c8485e25eff157db9b35a/d324a6fb/@2x.png',
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
        travel_mode: 'walk',
        duration_seconds: 120,
        path: 'cmbyHwaY@??Y?ACAA?Ap@?BCB?D',
        updatable_detail: {
          leg_departure_time: '2022-06-20T11:33:00+01:00',
          leg_arrival_time: '2022-06-20T11:35:00+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
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
    ],
    route_departure_time: '2022-06-20T10:52:26+01:00',
    route_arrival_time: '2022-06-20T11:35:00+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTcxODc0NywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTM0NjAsXCJkdXJhdGlvblwiOjIxNjMsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQ2MzUwNCwwLjEzMzMxOFwifSxcImpyX2luZGV4XCI6MCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo4MDAsXCJkdXJhdGlvblwiOjY3OSxcImVjXCI6XCI1MS40NjUwNywtMC4wMTMzXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDYwMDMsLTAuMDE3MTFcIixcInRvX2V4aXRcIjpcIkxld2lzaGFtX0UzMDMzNFwifSx7XCJkdXJhdGlvblwiOjEwODAsXCJlbmRcIjpcIkJleGxleWhlYXRoXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJOYXRpb25hbFJhaWxTRVwiXSxcInN0YXJ0XCI6XCJMZXdpc2hhbVwiLFwic3RvcF9jb3VudFwiOjcsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX0xld2lzaGFtX05hdGlvbmFsUmFpbFwiLFwiUGxhdGZvcm1fQmV4bGV5aGVhdGhfTmF0aW9uYWxSYWlsXCJdfSx7XCJkaXN0YW5jZVwiOjU1LFwiZHVyYXRpb25cIjoxMjAsXCJlY1wiOlwiNTEuNDYzNDMsMC4xMzMzOVwiLFwiZnJvbV9leGl0XCI6XCJCZXhsZXloZWF0aF9FMzEzNzZcIixcImluX3N0YXRpb25cIjpcIjIvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40NjMzOCwwLjEzMzU2XCJ9XSxcInByaWNlX3BlbmNlXCI6MjgwLFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNzhiZjAzZTAtY2MxYy00ODI5LThiNmMtMDlkYTliZmM4MTlmXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNDYwMDMxLC0wLjAxNzM1OFwifSxcInRpbWVcIjpcIjIwMjItMDYtMjBUMTA6NTI6MjYrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.T9HYgpz1ah_eJoBf0h8XN_khSNg0yloLcYqycpb2uwI',
  },
  {
    start: {
      coordinates: {
        lat: 51.460031,
        lon: -0.017358,
      },
    },
    end: {
      coordinates: {
        lat: 51.463504,
        lon: 0.133318,
      },
    },
    distance_meters: 1466,
    duration_seconds: 3860,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£1.65',
      amount: '1.65',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 584,
        path: 'exayH|iBkAA_BCoAAcAUWEE?E@c@NC@EKOg@GK_@gAKGUMN{@LQDCHGBCHMF[@K@Q@O?U@W?Io@sA_AaBCKGCq@s@DKLUJo@D[DWBWEAqA_@WESEOAYC?EAIG?USG?Ac@',
        updatable_detail: {
          leg_departure_time: '2022-06-20T10:52:26+01:00',
          leg_arrival_time: '2022-06-20T11:02:10+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2470,
        path: '{obyHnlA?ZTAH?ZIZw@{@yG~DoCv@qBH}@{@}AQiAaA_GKoD`A_KjAoM?sBYsBiAeDSi@iCse@[qBqCgKwCe@]GiBn@{@hBkBvGy@HuAoCc@{@gB{FuCkBKI{PgT_AkBsCyFkBoCk@sJeAeRyAcNa@oDw@o@IkA^yAe@}G]kFQwFBqGPmBvBkXdBwTnCk]\\}CbCkUrAcJ`AsGbBiPjAaLfAoNvAwQHCdD}Z|AwNl@oKf@qIlDg]dA_LjD__@~Dqb@z@eJdAwLpDab@rDmb@bByR?gAHw@|@eJTyJrC{R`@uCdDy]~B_WtC_[KE',
        stops: [
          {
            id: '490001177X',
            name: 'Lewisham Station',
            coordinates: {
              lat: 51.463819,
              lon: -0.012395,
            },
            indicator_text: 'D',
          },
          {
            id: '490009239K',
            name: 'Lockmead Road',
            coordinates: {
              lat: 51.462825,
              lon: -0.008379,
            },
            indicator_text: 'K',
          },
          {
            id: '490013561E',
            name: 'The Squirrels',
            coordinates: {
              lat: 51.462863,
              lon: -0.00426,
            },
            indicator_text: 'F',
          },
          {
            id: '490012772E',
            name: "St Margaret's Church / Brandram Road",
            coordinates: {
              lat: 51.463015,
              lon: -0.000021,
            },
            indicator_text: 'D',
          },
          {
            id: '490004066B',
            name: 'Blackheath Hospital',
            coordinates: {
              lat: 51.463957,
              lon: 0.006988,
            },
            indicator_text: 'B',
          },
          {
            id: '490001029B',
            name: 'Blackheath Station',
            coordinates: {
              lat: 51.465387,
              lon: 0.009096,
            },
            indicator_text: 'D',
          },
          {
            id: '490011771G',
            name: 'Royal Parade',
            coordinates: {
              lat: 51.467669,
              lon: 0.007612,
            },
            indicator_text: 'G',
          },
          {
            id: '490010003K',
            name: 'Montpelier Row',
            coordinates: {
              lat: 51.46909,
              lon: 0.009719,
            },
            indicator_text: 'K',
          },
          {
            id: '490012711N',
            name: 'St Germans Place',
            coordinates: {
              lat: 51.47233,
              lon: 0.013749,
            },
            indicator_text: 'M',
          },
          {
            id: '490008705E',
            name: 'Shooters Hill Road / Stratheden Road',
            coordinates: {
              lat: 51.473865,
              lon: 0.017589,
            },
            indicator_text: 'P',
          },
          {
            id: '490013014E1',
            name: 'Shooters Hill Road / Kidbrooke Park Road',
            coordinates: {
              lat: 51.47467,
              lon: 0.023068,
            },
            indicator_text: 'R',
          },
          {
            id: '490015427E',
            name: 'Shooters Hill Road / Eastbrook Road',
            coordinates: {
              lat: 51.475187,
              lon: 0.026461,
            },
            indicator_text: 'S',
          },
          {
            id: '490010537E',
            name: 'Hervey Road',
            coordinates: {
              lat: 51.475336,
              lon: 0.030845,
            },
            indicator_text: 'T',
          },
          {
            id: '490008478E',
            name: 'Weyman Road',
            coordinates: {
              lat: 51.474744,
              lon: 0.034909,
            },
            indicator_text: 'U',
          },
          {
            id: '490005011E',
            name: 'Charlton Park Lane',
            coordinates: {
              lat: 51.474225,
              lon: 0.038385,
            },
          },
          {
            id: '490010733E',
            name: 'Pallet Way',
            coordinates: {
              lat: 51.473353,
              lon: 0.044034,
            },
            indicator_text: 'SA',
          },
          {
            id: '490004460E',
            name: 'Shooters Hill Road / Baker Road',
            coordinates: {
              lat: 51.472234,
              lon: 0.049384,
            },
            indicator_text: 'SB',
          },
          {
            id: '490012108E',
            name: 'Shooters Hill Road / Academy Road',
            coordinates: {
              lat: 51.471415,
              lon: 0.053538,
            },
            indicator_text: 'SC',
          },
          {
            id: '490011486E',
            name: 'Red Lion Lane',
            coordinates: {
              lat: 51.470661,
              lon: 0.058097,
            },
            indicator_text: 'SD',
          },
          {
            id: '490009803E',
            name: 'Memorial Hospital',
            coordinates: {
              lat: 51.469396,
              lon: 0.065614,
            },
            indicator_text: 'SE',
          },
          {
            id: '490006288E',
            name: 'Eaglesfield Road',
            coordinates: {
              lat: 51.468659,
              lon: 0.070116,
            },
            indicator_text: 'SF',
          },
          {
            id: '490010701E',
            name: 'Oxleas Wood / Woodlands Farm',
            coordinates: {
              lat: 51.467266,
              lon: 0.078735,
            },
            indicator_text: 'SG',
          },
          {
            id: '490014349E',
            name: 'Eastcote Road',
            coordinates: {
              lat: 51.466419,
              lon: 0.083866,
            },
            indicator_text: 'SH',
          },
          {
            id: '490012086E',
            name: 'Bellegrove Road / Sherwood Road',
            coordinates: {
              lat: 51.465455,
              lon: 0.089552,
            },
            indicator_text: 'W',
          },
          {
            id: '490014364E',
            name: 'Bellegrove Road / Welling Way',
            coordinates: {
              lat: 51.464808,
              lon: 0.093539,
            },
            indicator_text: 'E',
          },
          {
            id: '490004922C',
            name: 'Central Avenue / Welling Station',
            coordinates: {
              lat: 51.46389,
              lon: 0.099141,
            },
            indicator_text: 'C',
          },
          {
            id: '490006018H',
            name: 'Deepdene Road',
            coordinates: {
              lat: 51.463015,
              lon: 0.104816,
            },
            indicator_text: 'H',
          },
          {
            id: '490014353S',
            name: 'Welling High Street',
            coordinates: {
              lat: 51.462425,
              lon: 0.108619,
            },
            indicator_text: 'S',
          },
          {
            id: '490007611E',
            name: 'Guy, Earl Of Warwick',
            coordinates: {
              lat: 51.461303,
              lon: 0.115506,
            },
            indicator_text: 'BA',
          },
          {
            id: '490003948E',
            name: 'Bethel Road',
            coordinates: {
              lat: 51.46031,
              lon: 0.121175,
            },
            indicator_text: 'BB',
          },
          {
            id: '490016645E',
            name: 'Crook Log Leisure Centre',
            coordinates: {
              lat: 51.459647,
              lon: 0.125003,
            },
            indicator_text: 'BC',
          },
          {
            id: '490005805E',
            name: 'Crook Log / Dallin Road',
            coordinates: {
              lat: 51.4589,
              lon: 0.129488,
            },
            indicator_text: 'BD',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus89',
              frequency_seconds_range: [720, 720],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus89'],
            },
          ],
          leg_departure_time: '2022-06-20T11:08:00+01:00',
          leg_arrival_time: '2022-06-20T11:49:10+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus89',
            name: '89',
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
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 566,
        path: 'cqayHihXFBHw@BWTkCeA]c@O}@[mDiA_A_@kBs@i@QcA]iA]qA[a@Io@Oc@KSGWGBmE?Y?ACAA?Ap@?BCB?D',
        updatable_detail: {
          leg_departure_time: '2022-06-20T11:49:10+01:00',
          leg_arrival_time: '2022-06-20T11:58:36+01:00',
        },
      },
    ],
    route_departure_time: '2022-06-20T10:52:26+01:00',
    route_arrival_time: '2022-06-20T11:58:36+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTcxODc0NywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTM0NjAsXCJkdXJhdGlvblwiOjM4NjAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQ2MzUwNCwwLjEzMzMxOFwifSxcImpyX2luZGV4XCI6MSxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo3MzMsXCJkdXJhdGlvblwiOjU4NCxcImVjXCI6XCI1MS40NjM4MiwtMC4wMTIzOVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ2MDAzLC0wLjAxNzExXCJ9LHtcImR1cmF0aW9uXCI6MjQ3MCxcImVuZFwiOlwiNDkwMDA1ODA1RVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzODlcIl0sXCJzdGFydFwiOlwiNDkwMDAxMTc3WFwiLFwic3RvcF9jb3VudFwiOjMyfSx7XCJkaXN0YW5jZVwiOjczMyxcImR1cmF0aW9uXCI6NTY2LFwiZWNcIjpcIjUxLjQ2MzQzLDAuMTMzMzlcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40NTg5LDAuMTI5NDlcIn1dLFwicHJpY2VfcGVuY2VcIjoxNjUsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCI3OGJmMDNlMC1jYzFjLTQ4MjktOGI2Yy0wOWRhOWJmYzgxOWZcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS40NjAwMzEsLTAuMDE3MzU4XCJ9LFwidGltZVwiOlwiMjAyMi0wNi0yMFQxMDo1MjoyNiswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.YyyNF3AlpdzBh252VLECElja6zVwEYLnQguknEgXm68',
  },
  {
    start: {
      coordinates: {
        lat: 51.460031,
        lon: -0.017358,
      },
    },
    end: {
      coordinates: {
        lat: 51.463504,
        lon: 0.133318,
      },
    },
    distance_meters: 1923,
    duration_seconds: 4295,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£4.25',
      amount: '4.25',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 679,
        path: 'exayH|iBkAA_BCoAAcAUWEE?E@c@NC@EKOg@GK_@gAKGUM{@_@c@UUWUa@Q_@Q_@m@{@MEi@AOBcBFAO?{@Ac@Ao@Fw@FmAAe@GAE?IA@OIA?BaBE',
        updatable_detail: {
          leg_departure_time: '2022-06-20T10:52:26+01:00',
          leg_arrival_time: '2022-06-20T11:03:45+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Lewisham_E30334',
            stop_id: 'Lewisham',
            coordinates: {
              lat: 51.4650702,
              lon: -0.013304,
            },
            name: 'Station Road (bridge)',
          },
          alternate_exits: [
            {
              id: 'Lewisham_E30358',
              stop_id: 'Lewisham',
              coordinates: {
                lat: 51.4648096,
                lon: -0.0127029,
              },
              name: 'Station Road (buses)',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 960,
        path: 'iubyHznAuCkA@I`AoNn@eXOwPwBmr@M_He@wLWkGm@iGqAkH_BcGuAwDcCqEaAkAmEsCe]{Mcl@oKsFoCqBeBkByBoCeEkAeC{DmKkBaKeAuKy@{I}BuLeNsh@uGiYw@uKI_En@cPbB{PHy@N}HM_FyAoN_@_HCcFN_Ft@kGhBoI|B}Gh@mCn@cDp@mFTcF?uJgAa_AI?',
        stops: [
          {
            id: 'Lewisham',
            name: 'Lewisham',
            coordinates: {
              lat: 51.464687,
              lon: -0.012783,
            },
          },
          {
            id: 'Blackheath',
            name: 'Blackheath',
            coordinates: {
              lat: 51.465795,
              lon: 0.008872,
            },
          },
          {
            id: 'Charlton',
            name: 'Charlton',
            coordinates: {
              lat: 51.486812,
              lon: 0.031257,
            },
          },
          {
            id: 'WoolwichDockyard',
            name: 'Woolwich Dockyard',
            coordinates: {
              lat: 51.491125,
              lon: 0.054642,
            },
          },
          {
            id: 'WoolwichArsenal',
            name: 'Woolwich Arsenal',
            coordinates: {
              lat: 51.49,
              lon: 0.069,
            },
          },
          {
            id: 'Plumstead',
            name: 'Plumstead',
            coordinates: {
              lat: 51.489793,
              lon: 0.084256,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailSE',
              headsign: 'Dartford',
              scheduled_time: '2022-06-20T11:30:00+01:00',
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
          leg_departure_time: '2022-06-20T11:30:00+01:00',
          leg_arrival_time: '2022-06-20T11:46:00+01:00',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/46f5ed6057ce3f31521ea3df78d1f5e491d826a7a099f20b2cea37ca/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/13b426c1537effebd0483a88aa93c51fe21c8485e25eff157db9b35a/d324a6fb/@2x.png',
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
        travel_mode: 'walk',
        duration_seconds: 147,
        path: 'cqgyHoqOHG?EAECe@A?AACCCECCKBCA?AA_@CEAE@CJODGGM',
        updatable_detail: {
          leg_departure_time: '2022-06-20T11:46:00+01:00',
          leg_arrival_time: '2022-06-20T11:48:27+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Plumstead_E31204',
            stop_id: 'Plumstead',
            coordinates: {
              lat: 51.489622,
              lon: 0.0848825,
            },
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1200,
        path: '{qgyHovO@B|@aBpAgG\\iDrDsKb@qBVkAdCwSHk@vCqRfAeHJcEJaE^kFnCdAbGpAfGHbCD`F{@lBuBfAmCXq@`GqK`@qAdC_IrAqAjCu@HAhCiBdC{EdCcClAwBn@iAz@w@Au@nAeDTkAz@qEfAqMBgEo@gHI]_Ic[mCoKWIDg@{@gDqFaTyEcRaAsDoAwIe@gCoAuG}@kJI{MIo@_@wCx@a@h@mDtAqCx@e@t@CxCKBp@jHbVzHjW~AfFRMnHfAJWX`@xAh@JA',
        stops: [
          {
            id: '490001227L',
            name: 'Plumstead High Street / Plumstead Stn',
            coordinates: {
              lat: 51.489742,
              lon: 0.085679,
            },
            indicator_text: 'B',
          },
          {
            id: '490008908P',
            name: 'Lakedale Road',
            coordinates: {
              lat: 51.487831,
              lon: 0.09095,
            },
            indicator_text: 'D',
          },
          {
            id: '490011077E2',
            name: 'Plumstead High Street / Police Station',
            coordinates: {
              lat: 51.486988,
              lon: 0.094858,
            },
            indicator_text: 'E',
          },
          {
            id: '490011276E1',
            name: 'Purrett Road',
            coordinates: {
              lat: 51.486258,
              lon: 0.098008,
            },
            indicator_text: 'G',
          },
          {
            id: '490011075E2',
            name: 'Plumstead Corner / Church Manorway',
            coordinates: {
              lat: 51.485819,
              lon: 0.100422,
            },
            indicator_text: 'J',
          },
          {
            id: '490011819S',
            name: 'Rutherglen Road',
            coordinates: {
              lat: 51.482197,
              lon: 0.101782,
            },
            indicator_text: 'N',
          },
          {
            id: '490008782S',
            name: "King's Highway",
            coordinates: {
              lat: 51.479543,
              lon: 0.103374,
            },
            indicator_text: 'J',
          },
          {
            id: '490009212S',
            name: 'Littledale',
            coordinates: {
              lat: 51.477939,
              lon: 0.106022,
            },
            indicator_text: 'K',
          },
          {
            id: '490004917S',
            name: 'Cemetery Road',
            coordinates: {
              lat: 51.476135,
              lon: 0.108358,
            },
            indicator_text: 'L',
          },
          {
            id: '490011070S',
            name: 'Plumstead Cemetery',
            coordinates: {
              lat: 51.473673,
              lon: 0.111211,
            },
            indicator_text: 'M',
          },
          {
            id: '490010520E',
            name: 'Okehampton Crescent / Lodge Hill',
            coordinates: {
              lat: 51.472646,
              lon: 0.113324,
            },
            indicator_text: 'S',
          },
          {
            id: '490013722E',
            name: 'Tor Road',
            coordinates: {
              lat: 51.472269,
              lon: 0.119268,
            },
            indicator_text: 'T',
          },
          {
            id: '490011081E',
            name: 'Plymstock Road',
            coordinates: {
              lat: 51.47386,
              lon: 0.123777,
            },
            indicator_text: 'T',
          },
          {
            id: '490004245E',
            name: 'King Harolds Way / Brampton Road',
            coordinates: {
              lat: 51.474973,
              lon: 0.126853,
            },
            indicator_text: 'U',
          },
          {
            id: '490014405E1',
            name: 'Westbourne Road',
            coordinates: {
              lat: 51.476189,
              lon: 0.130207,
            },
            indicator_text: 'V',
          },
          {
            id: '490009054E',
            name: 'Leckwith Avenue',
            coordinates: {
              lat: 51.477294,
              lon: 0.133269,
            },
            indicator_text: 'W',
          },
          {
            id: '490009083E',
            name: 'Lenham Road',
            coordinates: {
              lat: 51.478196,
              lon: 0.136594,
            },
            indicator_text: 'X',
          },
          {
            id: '490006206E',
            name: 'Bedonwell Road / Dryhill Road',
            coordinates: {
              lat: 51.479006,
              lon: 0.142436,
            },
          },
          {
            id: '490010860N1',
            name: 'Parsonage Manorway',
            coordinates: {
              lat: 51.477622,
              lon: 0.145323,
            },
          },
          {
            id: '490013491S',
            name: 'The Pantiles',
            coordinates: {
              lat: 51.475294,
              lon: 0.14134,
            },
          },
          {
            id: '490014748E',
            name: 'Winchelsea Avenue',
            coordinates: {
              lat: 51.47371,
              lon: 0.13745,
            },
          },
          {
            id: '490010991S',
            name: 'Pickford Lane / Long Lane',
            coordinates: {
              lat: 51.470954,
              lon: 0.135709,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus422',
              frequency_seconds_range: [600, 600],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus422'],
            },
          ],
          leg_departure_time: '2022-06-20T11:51:00+01:00',
          leg_arrival_time: '2022-06-20T12:11:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus422',
            name: '422',
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
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 745,
        path: 'm|cyHeoYCHx@z@p@dAn@b@hB^dATh@Nz@P`@Pt@Xf@T@?n@Tx@N|@Jp@Fh@?fBBp@d@t@n@ZNp@N|A\\PD`@Jh@Ll@Ln@NVDPDRD|@NBmE?Y?ACAA?Ap@?BCB?D',
        updatable_detail: {
          leg_departure_time: '2022-06-20T12:11:00+01:00',
          leg_arrival_time: '2022-06-20T12:23:25+01:00',
        },
      },
    ],
    route_departure_time: '2022-06-20T10:52:26+01:00',
    route_arrival_time: '2022-06-20T12:23:25+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTcxODc0NywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTM0NjAsXCJkdXJhdGlvblwiOjQyOTUsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQ2MzUwNCwwLjEzMzMxOFwifSxcImpyX2luZGV4XCI6MixcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo4MDAsXCJkdXJhdGlvblwiOjY3OSxcImVjXCI6XCI1MS40NjUwNywtMC4wMTMzXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDYwMDMsLTAuMDE3MTFcIixcInRvX2V4aXRcIjpcIkxld2lzaGFtX0UzMDMzNFwifSx7XCJkdXJhdGlvblwiOjk2MCxcImVuZFwiOlwiUGx1bXN0ZWFkXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJOYXRpb25hbFJhaWxTRVwiXSxcInN0YXJ0XCI6XCJMZXdpc2hhbVwiLFwic3RvcF9jb3VudFwiOjYsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX0xld2lzaGFtX05hdGlvbmFsUmFpbFwiLFwiUGxhdGZvcm1fUGx1bXN0ZWFkX05hdGlvbmFsUmFpbE5hdGlvbmFsUmFpbEJ1c1wiXX0se1wiZGlzdGFuY2VcIjoxMjgsXCJkdXJhdGlvblwiOjE0NyxcImVjXCI6XCI1MS40ODk3NCwwLjA4NTY4XCIsXCJmcm9tX2V4aXRcIjpcIlBsdW1zdGVhZF9FMzEyMDRcIixcImluX3N0YXRpb25cIjpcIjIvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40ODk2MiwwLjA4NDg4XCJ9LHtcImR1cmF0aW9uXCI6MTIwMCxcImVuZFwiOlwiNDkwMDEwOTkxU1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzNDIyXCJdLFwic3RhcnRcIjpcIjQ5MDAwMTIyN0xcIixcInN0b3BfY291bnRcIjoyMn0se1wiZGlzdGFuY2VcIjo5OTUsXCJkdXJhdGlvblwiOjc0NSxcImVjXCI6XCI1MS40NjM0MywwLjEzMzM5XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDcwOTUsMC4xMzU3MVwifV0sXCJwcmljZV9wZW5jZVwiOjQyNSxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjc4YmYwM2UwLWNjMWMtNDgyOS04YjZjLTA5ZGE5YmZjODE5ZlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjQ2MDAzMSwtMC4wMTczNThcIn0sXCJ0aW1lXCI6XCIyMDIyLTA2LTIwVDEwOjUyOjI2KzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.WGr2kxNnCJRd2ZI6pRPTxoo-4VvMEmd2VyQvXioo1rM',
  },
  {
    start: {
      coordinates: {
        lat: 51.460031,
        lon: -0.017358,
      },
    },
    end: {
      coordinates: {
        lat: 51.463504,
        lon: 0.133318,
      },
    },
    distance_meters: 2042,
    duration_seconds: 4309,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£4.25',
      amount: '4.25',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 679,
        path: 'exayH|iBkAA_BCoAAcAUWEE?E@c@NC@EKOg@GK_@gAKGUM{@_@c@UUWUa@Q_@Q_@m@{@MEi@AOBcBFAO?{@Ac@Ao@Fw@FmAAe@GAE?IA@OIA?BaBE',
        updatable_detail: {
          leg_departure_time: '2022-06-20T10:52:26+01:00',
          leg_arrival_time: '2022-06-20T11:03:45+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Lewisham_E30334',
            stop_id: 'Lewisham',
            coordinates: {
              lat: 51.4650702,
              lon: -0.013304,
            },
            name: 'Station Road (bridge)',
          },
          alternate_exits: [
            {
              id: 'Lewisham_E30358',
              stop_id: 'Lewisham',
              coordinates: {
                lat: 51.4648096,
                lon: -0.0127029,
              },
              name: 'Station Road (buses)',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1140,
        path: 'iubyHznAuCkA@I`AoNn@eXOwPwBmr@M_He@wLWkGm@iGqAkH_BcGuAwDcCqEaAkAmEsCe]{Mcl@oKsFoCqBeBkByBoCeEkAeC{DmKkBaKeAuKy@{I}BuLeNsh@uGiYw@uKI_En@cPbB{PHy@N}HM_FyAoN_@_HCcFN_Ft@kGhBoI|B}Gh@mCn@cDp@mFTcF?uJgAa_AgGagF??',
        stops: [
          {
            id: 'Lewisham',
            name: 'Lewisham',
            coordinates: {
              lat: 51.464687,
              lon: -0.012783,
            },
          },
          {
            id: 'Blackheath',
            name: 'Blackheath',
            coordinates: {
              lat: 51.465795,
              lon: 0.008872,
            },
          },
          {
            id: 'Charlton',
            name: 'Charlton',
            coordinates: {
              lat: 51.486812,
              lon: 0.031257,
            },
          },
          {
            id: 'WoolwichDockyard',
            name: 'Woolwich Dockyard',
            coordinates: {
              lat: 51.491125,
              lon: 0.054642,
            },
          },
          {
            id: 'WoolwichArsenal',
            name: 'Woolwich Arsenal',
            coordinates: {
              lat: 51.49,
              lon: 0.069,
            },
          },
          {
            id: 'Plumstead',
            name: 'Plumstead',
            coordinates: {
              lat: 51.489793,
              lon: 0.084256,
            },
          },
          {
            id: 'AbbeyWood',
            name: 'Abbey Wood',
            coordinates: {
              lat: 51.491061,
              lon: 0.121394,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailSE',
              headsign: 'Dartford',
              scheduled_time: '2022-06-20T11:30:00+01:00',
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
          leg_departure_time: '2022-06-20T11:30:00+01:00',
          leg_arrival_time: '2022-06-20T11:49:00+01:00',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/46f5ed6057ce3f31521ea3df78d1f5e491d826a7a099f20b2cea37ca/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/13b426c1537effebd0483a88aa93c51fe21c8485e25eff157db9b35a/d324a6fb/@2x.png',
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
        travel_mode: 'walk',
        duration_seconds: 296,
        path: 'u{gyHyuVMO??BK@GJ?HA@ATFPCJCDAF??e@?QAwA?ALC?ZQ@',
        updatable_detail: {
          leg_departure_time: '2022-06-20T11:49:00+01:00',
          leg_arrival_time: '2022-06-20T11:53:56+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'AbbeyWood_from_ticket_hall',
            stop_id: 'AbbeyWood',
            coordinates: {
              lat: 51.4913051,
              lon: 0.1214054,
            },
            name: 'Ticket Hall',
          },
          duration_seconds: 180,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 742,
        path: 'iygyH{zV@Hr@UzCGpF^Zd@@x@Yp@iD\\k@FMO@sKPIr@qB\\aAjB_DdDeCx@m@fBaDlAw@bFBnGt@vDDtBpA|@DnCuBBA~@YJzH?RQ|Q`FuArHsBvIcC^YhImGbBqARe@JNtAqBXa@BgA|A}EfA}Ev@wKDc@dDoKb@sCFmAX_FIS^sC|@mCv@aCvDaGdH_LIQ',
        stops: [
          {
            id: '490001001D',
            name: 'Harrow Manorway / Abbey Wood Station',
            coordinates: {
              lat: 51.49093,
              lon: 0.122223,
            },
            indicator_text: 'D',
          },
          {
            id: '490003039E',
            name: 'Abbey Wood Road',
            coordinates: {
              lat: 51.489492,
              lon: 0.121176,
            },
            indicator_text: 'E',
          },
          {
            id: '490006877S',
            name: 'Abbey Road',
            coordinates: {
              lat: 51.489485,
              lon: 0.124014,
            },
            indicator_text: 'W',
          },
          {
            id: '490016308S',
            name: 'Woodland Way',
            coordinates: {
              lat: 51.487924,
              lon: 0.125799,
            },
          },
          {
            id: '490016307S',
            name: 'Hurst Lane',
            coordinates: {
              lat: 51.481689,
              lon: 0.126964,
            },
            indicator_text: 'F',
          },
          {
            id: '490010253W',
            name: 'New Road',
            coordinates: {
              lat: 51.481194,
              lon: 0.125472,
            },
            indicator_text: 'H',
          },
          {
            id: '490001977Z',
            name: 'Hail & Ride Burcharbro Road',
            coordinates: {
              lat: 51.480235,
              lon: 0.12282,
            },
          },
          {
            id: '490002147ZZ',
            name: 'Hail & Ride West Heath Road',
            coordinates: {
              lat: 51.478704,
              lon: 0.123441,
            },
          },
          {
            id: '490000987ZZ',
            name: 'Hail & Ride Brampton Road',
            coordinates: {
              lat: 51.476837,
              lon: 0.124232,
            },
          },
          {
            id: '490012539ZZ',
            name: "Hail & Ride St Andrew's Parish Church",
            coordinates: {
              lat: 51.475194,
              lon: 0.125596,
            },
          },
          {
            id: '490004249S',
            name: 'Brampton Road / Long Lane',
            coordinates: {
              lat: 51.474113,
              lon: 0.126669,
            },
            indicator_text: 'Q',
          },
          {
            id: '490009788S',
            name: 'Melanie Close',
            coordinates: {
              lat: 51.472868,
              lon: 0.131392,
            },
          },
          {
            id: '490005898S',
            name: 'Long Lane / Kipling Road',
            coordinates: {
              lat: 51.471764,
              lon: 0.134695,
            },
          },
          {
            id: '490002146ZZ',
            name: 'Hail & Ride Franklin Road',
            coordinates: {
              lat: 51.471229,
              lon: 0.137406,
            },
          },
          {
            id: '490002145ZZ',
            name: 'Hail & Ride Hudson Road',
            coordinates: {
              lat: 51.470033,
              lon: 0.13938,
            },
          },
          {
            id: '490002144ZZ',
            name: 'Hail & Ride Cloudesley Road',
            coordinates: {
              lat: 51.468556,
              lon: 0.141456,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus301',
              frequency_seconds_range: [720, 720],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus301'],
            },
          ],
          leg_departure_time: '2022-06-20T11:55:00+01:00',
          leg_arrival_time: '2022-06-20T12:07:22+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus301',
            name: '301',
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
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 828,
        path: 'omcyHcsZJR|AiCFBNEBCZb@`AhAx@x@r@j@TNz@d@z@^lBb@vBVxD^N@?^\\nHHhAJfCVCLCD?D?FtBLrIF@E|GCAA?Ap@?BCB?D',
        updatable_detail: {
          leg_departure_time: '2022-06-20T12:07:22+01:00',
          leg_arrival_time: '2022-06-20T12:21:10+01:00',
        },
      },
    ],
    route_departure_time: '2022-06-20T10:52:26+01:00',
    route_arrival_time: '2022-06-20T12:21:10+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTcxODc0NywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTM0NjAsXCJkdXJhdGlvblwiOjQzMDksXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQ2MzUwNCwwLjEzMzMxOFwifSxcImpyX2luZGV4XCI6MyxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo4MDAsXCJkdXJhdGlvblwiOjY3OSxcImVjXCI6XCI1MS40NjUwNywtMC4wMTMzXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDYwMDMsLTAuMDE3MTFcIixcInRvX2V4aXRcIjpcIkxld2lzaGFtX0UzMDMzNFwifSx7XCJkdXJhdGlvblwiOjExNDAsXCJlbmRcIjpcIkFiYmV5V29vZFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTmF0aW9uYWxSYWlsU0VcIl0sXCJzdGFydFwiOlwiTGV3aXNoYW1cIixcInN0b3BfY291bnRcIjo3LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9MZXdpc2hhbV9OYXRpb25hbFJhaWxcIixcIlBsYXRmb3JtX0FiYmV5V29vZF9OYXRpb25hbFJhaWxcIl19LHtcImRpc3RhbmNlXCI6MTczLFwiZHVyYXRpb25cIjoyOTYsXCJlY1wiOlwiNTEuNDkwOTMsMC4xMjIyMlwiLFwiZnJvbV9leGl0XCI6XCJBYmJleVdvb2RfZnJvbV90aWNrZXRfaGFsbFwiLFwiaW5fc3RhdGlvblwiOlwiMi8xODBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40OTEzMSwwLjEyMTQxXCJ9LHtcImR1cmF0aW9uXCI6NzQyLFwiZW5kXCI6XCI0OTAwMDIxNDRaWlwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzMzAxXCJdLFwic3RhcnRcIjpcIjQ5MDAwMTAwMURcIixcInN0b3BfY291bnRcIjoxNn0se1wiZGlzdGFuY2VcIjoxMDY5LFwiZHVyYXRpb25cIjo4MjgsXCJlY1wiOlwiNTEuNDYzNDMsMC4xMzMzOVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ2ODU2LDAuMTQxNDZcIn1dLFwicHJpY2VfcGVuY2VcIjo0MjUsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCI3OGJmMDNlMC1jYzFjLTQ4MjktOGI2Yy0wOWRhOWJmYzgxOWZcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS40NjAwMzEsLTAuMDE3MzU4XCJ9LFwidGltZVwiOlwiMjAyMi0wNi0yMFQxMDo1MjoyNiswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.wFl0Fs8Ricn0Fk71_PI0bm3tH3Bh3z-f_k47DnmD3zU',
  },
  {
    start: {
      coordinates: {
        lat: 51.460031,
        lon: -0.017358,
      },
    },
    end: {
      coordinates: {
        lat: 51.463504,
        lon: 0.133318,
      },
    },
    distance_meters: 1047,
    duration_seconds: 3878,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£1.65',
      amount: '1.65',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 584,
        path: 'exayH|iBkAA_BCoAAcAUWEE?E@c@NC@EKOg@GK_@gAKGUMN{@LQDCHGBCHMF[@K@Q@O?U@W?Io@sA_AaBCKGCq@s@DKLUJo@D[DWBWEAqA_@WESEOAYC?EAIG?USG?Ac@',
        updatable_detail: {
          leg_departure_time: '2022-06-20T10:52:26+01:00',
          leg_arrival_time: '2022-06-20T11:02:10+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2526,
        path: '{obyHnlA?ZTAH?ZIZw@{@yG~DoCv@qBH}@{@}AQiAaA_GKoD`A_KjAoM?sBYsBiAeDSi@iCse@[qBqCgKwCe@]GiBn@{@hBkBvGy@HuAoCc@{@gB{FuCkBKI{PgT_AkBsCyFkBoCk@sJeAeRyAcNa@oDw@o@IkA^yAe@}G]kFQwFBqGPmBvBkXdBwTnCk]\\}CbCkUrAcJ`AsGbBiPjAaLfAoNvAwQHCdD}Z|AwNl@oKf@qIlDg]dA_LjD__@~Dqb@z@eJdAwLpDab@rDmb@bByR?gAHw@|@eJTyJrC{R`@uCdDy]~B_WtC_[vAqOLaBIC',
        stops: [
          {
            id: '490001177X',
            name: 'Lewisham Station',
            coordinates: {
              lat: 51.463819,
              lon: -0.012395,
            },
            indicator_text: 'D',
          },
          {
            id: '490009239K',
            name: 'Lockmead Road',
            coordinates: {
              lat: 51.462825,
              lon: -0.008379,
            },
            indicator_text: 'K',
          },
          {
            id: '490013561E',
            name: 'The Squirrels',
            coordinates: {
              lat: 51.462863,
              lon: -0.00426,
            },
            indicator_text: 'F',
          },
          {
            id: '490012772E',
            name: "St Margaret's Church / Brandram Road",
            coordinates: {
              lat: 51.463015,
              lon: -0.000021,
            },
            indicator_text: 'D',
          },
          {
            id: '490004066B',
            name: 'Blackheath Hospital',
            coordinates: {
              lat: 51.463957,
              lon: 0.006988,
            },
            indicator_text: 'B',
          },
          {
            id: '490001029B',
            name: 'Blackheath Station',
            coordinates: {
              lat: 51.465387,
              lon: 0.009096,
            },
            indicator_text: 'D',
          },
          {
            id: '490011771G',
            name: 'Royal Parade',
            coordinates: {
              lat: 51.467669,
              lon: 0.007612,
            },
            indicator_text: 'G',
          },
          {
            id: '490010003K',
            name: 'Montpelier Row',
            coordinates: {
              lat: 51.46909,
              lon: 0.009719,
            },
            indicator_text: 'K',
          },
          {
            id: '490012711N',
            name: 'St Germans Place',
            coordinates: {
              lat: 51.47233,
              lon: 0.013749,
            },
            indicator_text: 'M',
          },
          {
            id: '490008705E',
            name: 'Shooters Hill Road / Stratheden Road',
            coordinates: {
              lat: 51.473865,
              lon: 0.017589,
            },
            indicator_text: 'P',
          },
          {
            id: '490013014E1',
            name: 'Shooters Hill Road / Kidbrooke Park Road',
            coordinates: {
              lat: 51.47467,
              lon: 0.023068,
            },
            indicator_text: 'R',
          },
          {
            id: '490015427E',
            name: 'Shooters Hill Road / Eastbrook Road',
            coordinates: {
              lat: 51.475187,
              lon: 0.026461,
            },
            indicator_text: 'S',
          },
          {
            id: '490010537E',
            name: 'Hervey Road',
            coordinates: {
              lat: 51.475336,
              lon: 0.030845,
            },
            indicator_text: 'T',
          },
          {
            id: '490008478E',
            name: 'Weyman Road',
            coordinates: {
              lat: 51.474744,
              lon: 0.034909,
            },
            indicator_text: 'U',
          },
          {
            id: '490005011E',
            name: 'Charlton Park Lane',
            coordinates: {
              lat: 51.474225,
              lon: 0.038385,
            },
          },
          {
            id: '490010733E',
            name: 'Pallet Way',
            coordinates: {
              lat: 51.473353,
              lon: 0.044034,
            },
            indicator_text: 'SA',
          },
          {
            id: '490004460E',
            name: 'Shooters Hill Road / Baker Road',
            coordinates: {
              lat: 51.472234,
              lon: 0.049384,
            },
            indicator_text: 'SB',
          },
          {
            id: '490012108E',
            name: 'Shooters Hill Road / Academy Road',
            coordinates: {
              lat: 51.471415,
              lon: 0.053538,
            },
            indicator_text: 'SC',
          },
          {
            id: '490011486E',
            name: 'Red Lion Lane',
            coordinates: {
              lat: 51.470661,
              lon: 0.058097,
            },
            indicator_text: 'SD',
          },
          {
            id: '490009803E',
            name: 'Memorial Hospital',
            coordinates: {
              lat: 51.469396,
              lon: 0.065614,
            },
            indicator_text: 'SE',
          },
          {
            id: '490006288E',
            name: 'Eaglesfield Road',
            coordinates: {
              lat: 51.468659,
              lon: 0.070116,
            },
            indicator_text: 'SF',
          },
          {
            id: '490010701E',
            name: 'Oxleas Wood / Woodlands Farm',
            coordinates: {
              lat: 51.467266,
              lon: 0.078735,
            },
            indicator_text: 'SG',
          },
          {
            id: '490014349E',
            name: 'Eastcote Road',
            coordinates: {
              lat: 51.466419,
              lon: 0.083866,
            },
            indicator_text: 'SH',
          },
          {
            id: '490012086E',
            name: 'Bellegrove Road / Sherwood Road',
            coordinates: {
              lat: 51.465455,
              lon: 0.089552,
            },
            indicator_text: 'W',
          },
          {
            id: '490014364E',
            name: 'Bellegrove Road / Welling Way',
            coordinates: {
              lat: 51.464808,
              lon: 0.093539,
            },
            indicator_text: 'E',
          },
          {
            id: '490004922C',
            name: 'Central Avenue / Welling Station',
            coordinates: {
              lat: 51.46389,
              lon: 0.099141,
            },
            indicator_text: 'C',
          },
          {
            id: '490006018H',
            name: 'Deepdene Road',
            coordinates: {
              lat: 51.463015,
              lon: 0.104816,
            },
            indicator_text: 'H',
          },
          {
            id: '490014353S',
            name: 'Welling High Street',
            coordinates: {
              lat: 51.462425,
              lon: 0.108619,
            },
            indicator_text: 'S',
          },
          {
            id: '490007611E',
            name: 'Guy, Earl Of Warwick',
            coordinates: {
              lat: 51.461303,
              lon: 0.115506,
            },
            indicator_text: 'BA',
          },
          {
            id: '490003948E',
            name: 'Bethel Road',
            coordinates: {
              lat: 51.46031,
              lon: 0.121175,
            },
            indicator_text: 'BB',
          },
          {
            id: '490016645E',
            name: 'Crook Log Leisure Centre',
            coordinates: {
              lat: 51.459647,
              lon: 0.125003,
            },
            indicator_text: 'BC',
          },
          {
            id: '490005805E',
            name: 'Crook Log / Dallin Road',
            coordinates: {
              lat: 51.4589,
              lon: 0.129488,
            },
            indicator_text: 'BD',
          },
          {
            id: '490013960E',
            name: 'Upton Road',
            coordinates: {
              lat: 51.458384,
              lon: 0.132616,
            },
            indicator_text: 'BK',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus89',
              frequency_seconds_range: [720, 720],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus89'],
            },
          ],
          leg_departure_time: '2022-06-20T11:08:00+01:00',
          leg_arrival_time: '2022-06-20T11:50:06+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus89',
            name: '89',
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
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 38,
        path: '{mayH{{XHBEh@IbACJFB',
        updatable_detail: {
          leg_departure_time: '2022-06-20T11:50:06+01:00',
          leg_arrival_time: '2022-06-20T11:50:44+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 171,
        path: '}mayHywXMEi@|GuKwDmFkBmPuDAP',
        stops: [
          {
            id: '490013960W',
            name: 'Upton Road',
            coordinates: {
              lat: 51.458387,
              lon: 0.131969,
            },
            indicator_text: 'BN',
          },
          {
            id: '490007256N',
            name: 'Glynde Road',
            coordinates: {
              lat: 51.460718,
              lon: 0.131415,
            },
            indicator_text: 'BE',
          },
          {
            id: '490001025A',
            name: 'Bexleyheath Station',
            coordinates: {
              lat: 51.464693,
              lon: 0.132853,
            },
            indicator_text: 'BF',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus422',
              frequency_seconds_range: [237, 237],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LondonBusB11',
              frequency_seconds_range: [237, 237],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LondonBusB12',
              frequency_seconds_range: [237, 237],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LondonBusB15',
              frequency_seconds_range: [237, 237],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: [
                'LondonBus422',
                'LondonBusB11',
                'LondonBusB12',
                'LondonBusB15',
              ],
            },
          ],
          leg_departure_time: '2022-06-20T11:52:09+01:00',
          leg_arrival_time: '2022-06-20T11:55:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus422',
            name: '422',
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
          },
          {
            id: 'LondonBusB11',
            name: 'B11',
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
          },
          {
            id: 'LondonBusB12',
            name: 'B12',
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
          },
          {
            id: 'LondonBusB15',
            name: 'B15',
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
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 201,
        path: 'iubyHi}X?Mh@Ll@Ln@NVDPDRD|@NBmE?Y?ACAA?Ap@?BCB?D',
        updatable_detail: {
          leg_departure_time: '2022-06-20T11:55:00+01:00',
          leg_arrival_time: '2022-06-20T11:58:21+01:00',
        },
      },
    ],
    route_departure_time: '2022-06-20T10:52:26+01:00',
    route_arrival_time: '2022-06-20T11:58:21+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTcxODc0NywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTM0NjAsXCJkdXJhdGlvblwiOjM4NzgsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjQ2MzUwNCwwLjEzMzMxOFwifSxcImpyX2luZGV4XCI6NCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo3MzMsXCJkdXJhdGlvblwiOjU4NCxcImVjXCI6XCI1MS40NjM4MiwtMC4wMTIzOVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ2MDAzLC0wLjAxNzExXCJ9LHtcImR1cmF0aW9uXCI6MjUyNixcImVuZFwiOlwiNDkwMDEzOTYwRVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzODlcIl0sXCJzdGFydFwiOlwiNDkwMDAxMTc3WFwiLFwic3RvcF9jb3VudFwiOjMzfSx7XCJkaXN0YW5jZVwiOjU0LFwiZHVyYXRpb25cIjozOCxcImVjXCI6XCI1MS40NTgzOSwwLjEzMTk3XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNDU4MzgsMC4xMzI2MlwifSx7XCJkdXJhdGlvblwiOjE3MSxcImVuZFwiOlwiNDkwMDAxMDI1QVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzNDIyXCIsXCJMb25kb25CdXNCMTFcIixcIkxvbmRvbkJ1c0IxMlwiLFwiTG9uZG9uQnVzQjE1XCJdLFwic3RhcnRcIjpcIjQ5MDAxMzk2MFdcIixcInN0b3BfY291bnRcIjozfSx7XCJkaXN0YW5jZVwiOjI2MCxcImR1cmF0aW9uXCI6MjAxLFwiZWNcIjpcIjUxLjQ2MzQzLDAuMTMzMzlcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40NjQ2OSwwLjEzMjg1XCJ9XSxcInByaWNlX3BlbmNlXCI6MTY1LFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNzhiZjAzZTAtY2MxYy00ODI5LThiNmMtMDlkYTliZmM4MTlmXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNDYwMDMxLC0wLjAxNzM1OFwifSxcInRpbWVcIjpcIjIwMjItMDYtMjBUMTA6NTI6MjYrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.ClvuAHakj1e8Xmozg1nUDt3zWKLRoc_3a_Sf65yFdh8',
  },
] as Route[]
