import { Route } from '@citymapper/api/@types/Route'

export default [
  {
    start: {
      coordinates: {
        lat: 43.725707,
        lon: 7.419024,
      },
    },
    end: {
      coordinates: {
        lat: 43.660886,
        lon: 7.20912,
      },
    },
    distance_meters: 2425,
    duration_seconds: 4944,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '22.00€',
      amount: '22.00',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 710,
        path: 'sd{iGy_hl@??CBCGmCgECDWEE?M?SHOTMRMUE?AM?Iw@Da@FSPILFHE^?HCh@Av@ALAHA@C@A@AB?D@BG@MBMDELEBMJMNKNGVCPGAAPADERA@A?A@?BA@KDE@E?S?G@U?M@c@FM@WFg@RYRYVGDGFKPCCE@CCEBI@?REFGDK?eA?C?CCs@?_@?CE?M?I?I@?L??KCE]?U@Y@e@Dc@FEYE_@Cg@GSC?CACEEECICICMAGCGAEAAC??E?AD[',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:26:50+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2580,
        path: 'ik|iGu|gl@~j@jiB`nKpje@',
        stops: [
          {
            id: 'MonacoStop_PlaceDarmesMonaco_SW',
            name: "Place d'Armes _ Monaco",
            coordinates: {
              lat: 43.731886,
              lon: 7.418508,
            },
          },
          {
            id: 'MonacoStop_BautuganCapDAil_E',
            name: 'Bautugan _ Cap D Ail',
            coordinates: {
              lat: 43.724846,
              lon: 7.401488,
            },
          },
          {
            id: 'MonacoStop_AeroportTerminal2Nice_NE',
            name: 'Aéroport Terminal 2 _ Nice',
            coordinates: {
              lat: 43.660997,
              lon: 7.205079,
            },
          },
        ],
        updatable_detail: {
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['ZouBus110'],
            },
          ],
          leg_departure_time: '2022-07-01T13:17:00+02:00',
          leg_arrival_time: '2022-07-01T14:00:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'ZouBus110',
            name: '110',
            vehicle_types: ['bus'],
            brand: {
              id: 'ZouBus',
              name: 'Zou! Bus',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/532dec18d7641c24171b0d7b43c81d24837df710bf9d9c72f2f089a8/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/14a9202fd31c5deed778c933e53d3a5c0e8bbdf2b310f58276f92f87/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e369bc90366855122089bfe15ab7e78442e268dd9b71e443bd2e77f9/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0058eafff6c491bb87e33707ef329af13a2447867e82c675dd8898e6/d324a6fb/@2x.png',
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
            color: '#2C4196',
            background_color: '#2C4196',
          },
        ],
        direction_description: 'Aéroport Terminal 2 _ Nice',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 1054,
        path: 'gpniGwf~j@HhA]FA?i@HMBKBGBIDMJGDGHEHGLEJo@tCGRENKPEFSRGBI@IBqALaAJUC[DQSMBKBCHEJC@MCC?G@MBG?ICIA]WYUIIEKAKCOAIBG@OAOCM@SCc@YyECc@Ee@Cc@COKg@CMCSUaEAOUyBOqCAU?WDAD?FABAh@G`@Er@Kr@GfBWvCt@NCfJoAD@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T14:00:00+02:00',
          leg_arrival_time: '2022-07-01T14:17:34+02:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T14:17:34+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwOTMxNSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjcxMjgsXCJkdXJhdGlvblwiOjQ5NDQsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQzLjY2MDg4Niw3LjIwOTEyXCJ9LFwianJfaW5kZXhcIjowLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjk5OCxcImR1cmF0aW9uXCI6NzEwLFwiZWNcIjpcIjQzLjczMTg5LDcuNDE4NTFcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0My43MjU3LDcuNDE5MDFcIn0se1wiZHVyYXRpb25cIjoyNTgwLFwiZW5kXCI6XCJNb25hY29TdG9wX0Flcm9wb3J0VGVybWluYWwyTmljZV9ORVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiWm91QnVzMTEwXCJdLFwic3RhcnRcIjpcIk1vbmFjb1N0b3BfUGxhY2VEYXJtZXNNb25hY29fU1dcIixcInN0b3BfY291bnRcIjozfSx7XCJkaXN0YW5jZVwiOjE0MjcsXCJkdXJhdGlvblwiOjEwNTQsXCJlY1wiOlwiNDMuNjYwODksNy4yMDkwN1wiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQzLjY2MSw3LjIwNTA4XCJ9XSxcInByaWNlX3BlbmNlXCI6MjIwMCxcInJlZ2lvblwiOlwibWMtbW9uYWNvXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImU5NGFkMGYyLTk0YjAtNGZlMS1iMGRkLTk2YjgzOTIzMTVmNFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQzLjcyNTcwNyw3LjQxOTAyNFwifSxcInRpbWVcIjpcIjIwMjItMDctMDFUMTI6MTU6MDArMDI6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJtYy1tb25hY28ifQ.-6_0S8DcFunuzcTlCRLLnqReGqp40X1SOOaLcWt3QRA',
  },
  {
    start: {
      coordinates: {
        lat: 43.725707,
        lon: 7.419024,
      },
    },
    end: {
      coordinates: {
        lat: 43.660886,
        lon: 7.20912,
      },
    },
    distance_meters: 1809,
    duration_seconds: 4901,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '22.00€',
      amount: '22.00',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 710,
        path: 'sd{iGy_hl@??CBCGmCgECDWEE?M?SHOTMRMUE?AM?Iw@Da@FSPILFHE^?HCh@Av@ALAHA@C@A@AB?D@BG@MBMDELEBMJMNKNGVCPGAAPADERA@A?A@?BA@KDE@E?S?G@U?M@c@FM@WFg@RYRYVGDGFKPCCE@CCEBI@?REFGDK?eA?C?CCs@?_@?CE?M?I?I@?L??KCE]?U@Y@e@Dc@FEYE_@Cg@GSC?CACEEECICICMAGCGAEAAC??E?AD[',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:26:50+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2580,
        path: 'ik|iGu|gl@~j@jiB`nKpje@',
        stops: [
          {
            id: 'MonacoStop_PlaceDarmesMonaco_SW',
            name: "Place d'Armes _ Monaco",
            coordinates: {
              lat: 43.731886,
              lon: 7.418508,
            },
          },
          {
            id: 'MonacoStop_BautuganCapDAil_E',
            name: 'Bautugan _ Cap D Ail',
            coordinates: {
              lat: 43.724846,
              lon: 7.401488,
            },
          },
          {
            id: 'MonacoStop_AeroportTerminal2Nice_NE',
            name: 'Aéroport Terminal 2 _ Nice',
            coordinates: {
              lat: 43.660997,
              lon: 7.205079,
            },
          },
        ],
        updatable_detail: {
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['ZouBus110'],
            },
          ],
          leg_departure_time: '2022-07-01T13:17:00+02:00',
          leg_arrival_time: '2022-07-01T14:00:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'ZouBus110',
            name: '110',
            vehicle_types: ['bus'],
            brand: {
              id: 'ZouBus',
              name: 'Zou! Bus',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/532dec18d7641c24171b0d7b43c81d24837df710bf9d9c72f2f089a8/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/14a9202fd31c5deed778c933e53d3a5c0e8bbdf2b310f58276f92f87/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e369bc90366855122089bfe15ab7e78442e268dd9b71e443bd2e77f9/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0058eafff6c491bb87e33707ef329af13a2447867e82c675dd8898e6/d324a6fb/@2x.png',
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
            color: '#2C4196',
            background_color: '#2C4196',
          },
        ],
        direction_description: 'Aéroport Terminal 2 _ Nice',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 64,
        path: 'gpniGwf~j@HhAZGB?G_A',
        updatable_detail: {
          leg_departure_time: '2022-07-01T14:00:00+02:00',
          leg_arrival_time: '2022-07-01T14:01:04+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'MonacoStation_AeroportTerminal2_default',
            stop_id: 'MonacoStation_AeroportTerminal2',
            coordinates: {
              lat: 43.660832,
              lon: 7.205069,
            },
          },
          duration_seconds: 10,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 240,
        path: 'eoniGuf~j@D`B{CP_ClF_M`AkDwl@LA',
        stops: [
          {
            id: 'MonacoStation_AeroportTerminal2',
            name: 'Aéroport Terminal 2',
            coordinates: {
              lat: 43.660832,
              lon: 7.205069,
            },
          },
          {
            id: 'MonacoStation_AeroportTerminal1',
            name: 'Aéroport Terminal 1',
            coordinates: {
              lat: 43.665346,
              lon: 7.210287,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LignesdAzurTramL2',
              frequency_seconds_range: [293, 293],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LignesdAzurTramL3',
              frequency_seconds_range: [293, 293],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LignesdAzurTramL2', 'LignesdAzurTramL3'],
            },
          ],
          leg_departure_time: '2022-07-01T14:04:00+02:00',
          leg_arrival_time: '2022-07-01T14:08:00+02:00',
        },
        vehicle_types: ['tram'],
        services: [
          {
            id: 'LignesdAzurTramL2',
            name: 'L2',
            vehicle_types: ['tram'],
            brand: {
              id: 'LignesdAzurTram',
              name: 'Tram',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/c3ca820e0924a0f3a2f2fa1a45790280844fb55a9cbdd35fb19e03c5/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1f3d7d2d3a3873ebdfa4a1d1559684c6f0fca6a3f347541add605c3e/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/7d50fc0cbcb2d8f860c79156d9d3662e88812c82765fd4ecd7b1fc6a/d324a6fb/@2x.png',
                  width: 15,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4cc55852ef60593e5b6b380411d0b492c580c9411939c3935c9c65a4/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
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
            images: [
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/ee1d4d768aa60a28947a5b6444fb55b48e7a4e9c06e92f9a576c89de/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/67213fafbd88dff01361c9cd22ac7a99e5131098b1d00cd5701e2888/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#01519E',
            background_color: '#01519E',
          },
          {
            id: 'LignesdAzurTramL3',
            name: 'L3',
            vehicle_types: ['tram'],
            brand: {
              id: 'LignesdAzurTram',
              name: 'Tram',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/c3ca820e0924a0f3a2f2fa1a45790280844fb55a9cbdd35fb19e03c5/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1f3d7d2d3a3873ebdfa4a1d1559684c6f0fca6a3f347541add605c3e/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/7d50fc0cbcb2d8f860c79156d9d3662e88812c82765fd4ecd7b1fc6a/d324a6fb/@2x.png',
                  width: 15,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4cc55852ef60593e5b6b380411d0b492c580c9411939c3935c9c65a4/d324a6fb/@2x.png',
                  width: 20,
                  height: 20,
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
            images: [
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/b0612dbf8432f9b24c5a6e3e4413c549e867ceec129ee9a84932e4df/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d674db0ba4f960ac03425232a03b7e8db0aa5a8bf05650a00ee4014c/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#009640',
            background_color: '#009640',
          },
        ],
        direction_description: 'Port Lympia | Saint-Isidore',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 561,
        path: 'mkoiGig_k@mBVHpALx@Dj@@TFRVx@?P?DDNB?JAXC\\GP@DAD?FABAh@G`@Er@Kr@GfBWvCt@NCfJoAD@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T14:08:00+02:00',
          leg_arrival_time: '2022-07-01T14:17:21+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'MonacoStation_AeroportTerminal1_default',
            stop_id: 'MonacoStation_AeroportTerminal1',
            coordinates: {
              lat: 43.665346,
              lon: 7.210287,
            },
          },
          duration_seconds: 10,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T14:17:21+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwOTMxNSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjcxMjgsXCJkdXJhdGlvblwiOjQ5MDEsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQzLjY2MDg4Niw3LjIwOTEyXCJ9LFwianJfaW5kZXhcIjoxLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjk5OCxcImR1cmF0aW9uXCI6NzEwLFwiZWNcIjpcIjQzLjczMTg5LDcuNDE4NTFcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0My43MjU3LDcuNDE5MDFcIn0se1wiZHVyYXRpb25cIjoyNTgwLFwiZW5kXCI6XCJNb25hY29TdG9wX0Flcm9wb3J0VGVybWluYWwyTmljZV9ORVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiWm91QnVzMTEwXCJdLFwic3RhcnRcIjpcIk1vbmFjb1N0b3BfUGxhY2VEYXJtZXNNb25hY29fU1dcIixcInN0b3BfY291bnRcIjozfSx7XCJkaXN0YW5jZVwiOjc0LFwiZHVyYXRpb25cIjo2NCxcImVjXCI6XCI0My42NjA4Myw3LjIwNTA3XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzEwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDMuNjYxLDcuMjA1MDhcIixcInRvX2V4aXRcIjpcIk1vbmFjb1N0YXRpb25fQWVyb3BvcnRUZXJtaW5hbDJfZGVmYXVsdFwifSx7XCJkdXJhdGlvblwiOjI0MCxcImVuZFwiOlwiTW9uYWNvU3RhdGlvbl9BZXJvcG9ydFRlcm1pbmFsMVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTGlnbmVzZEF6dXJUcmFtTDJcIixcIkxpZ25lc2RBenVyVHJhbUwzXCJdLFwic3RhcnRcIjpcIk1vbmFjb1N0YXRpb25fQWVyb3BvcnRUZXJtaW5hbDJcIixcInN0b3BfY291bnRcIjoyLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9Nb25hY29BZXJvcG9ydFRlcm1pbmFsMl9MaWduZXNkQXp1clRyYW1cIixcIlBsYXRmb3JtX01vbmFjb0Flcm9wb3J0VGVybWluYWwxX1RyYW1fZE5cIl19LHtcImRpc3RhbmNlXCI6NzM3LFwiZHVyYXRpb25cIjo1NjEsXCJlY1wiOlwiNDMuNjYwODksNy4yMDkwN1wiLFwiZnJvbV9leGl0XCI6XCJNb25hY29TdGF0aW9uX0Flcm9wb3J0VGVybWluYWwxX2RlZmF1bHRcIixcImluX3N0YXRpb25cIjpcIjIvMTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0My42NjUzNSw3LjIxMDI5XCJ9XSxcInByaWNlX3BlbmNlXCI6MjIwMCxcInJlZ2lvblwiOlwibWMtbW9uYWNvXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImU5NGFkMGYyLTk0YjAtNGZlMS1iMGRkLTk2YjgzOTIzMTVmNFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQzLjcyNTcwNyw3LjQxOTAyNFwifSxcInRpbWVcIjpcIjIwMjItMDctMDFUMTI6MTU6MDArMDI6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJtYy1tb25hY28ifQ.G7haFJXYWcSj2AftY-duFnT0gRAHAOvMKcBY3ReCX9Y',
  },
  {
    start: {
      coordinates: {
        lat: 43.725707,
        lon: 7.419024,
      },
    },
    end: {
      coordinates: {
        lat: 43.660886,
        lon: 7.20912,
      },
    },
    distance_meters: 3404,
    duration_seconds: 5213,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '5.00€',
      amount: '5.00',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 1200,
        path: 'sd{iGy_hl@??CBCGmCgECDWEE?M?SHOTMRMUE?AM?Iw@Da@FSPILFHE^?HCh@Av@ALAHA@C@A@AB?D@BG@MBMDELEBMJMNKNGVCPGAAPADERA@A?A@?BA@KDE@E?S?G@U?M@c@FM@WFg@RYRYVGDGFKPCCE@CCEBI@?REFGDK?eA?C?CCs@?_@?CE?M?I?I@?L??KCE]?U@Y@e@Dc@FEYE_@u@xA@IcAw@kA{@QBC@AACAGEECAA?AACGEEAWOEA{@JODUDE@?B',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:35:00+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'MonacoStation_GareDeMonacomontecarlo_FontvieilleLeRocher',
            stop_id: 'MonacoStation_GareDeMonacomontecarlo',
            coordinates: {
              lat: 43.7335854,
              lon: 7.4179072,
            },
            name: 'Fontvieille / Le Rocher',
          },
          alternate_exits: [
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_BoulevarddeSuisse',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7386436,
                lon: 7.4201617,
              },
              name: 'Boulevard de Suisse - Casino',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_JardinExotiqueHopital',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7370148,
                lon: 7.4190049,
              },
              name: 'Jardin Exotique Hopital',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_LaCondamine',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7340965,
                lon: 7.4178333,
              },
              name: 'La Condamine',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_MonteCarlo',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7387466,
                lon: 7.4192958,
              },
              name: 'Monte Carlo',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_ParvisSainteDevote',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7382126,
                lon: 7.4197173,
              },
              name: 'Parvis Sainte Dévote',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_PortHercule',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7370834,
                lon: 7.4210839,
              },
              name: 'Port Hercule',
            },
          ],
          duration_seconds: 360,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2040,
        path: 'ot}iG}chl@X[rCnGtHjMhDzHtCtCrAbA`B|@|Cl@dG`@lMnAnI|BpHtDbM`FtA`@bCXrAx@b@`@\\l@Pf@Jn@b@tJ?rB]tN?fDp@|JXlBhB|H`AzGHtADtBKbDa@rC_@hCi@bBcF`HoC`D{@pA{@dB]dA}@jHMvGZrI~@pIrA~Gf@tB|@`CtEhIpB`EzCdI\\hAd@~CP|EC`KmBfS[xBYlAmBpEuD`G_AxBs@tC_@dEe@rSDrCHhAXrBb@tBx@hCtAdEbMxUbC~DjBdCpAfAlErCjFnEvD|HfBbMTrDHfFNvC|ApOPnAd@nBb@tAlEvJvCtFnAhBfBfBdBpA~CxAjNlFnHrDlHzEbChBtA~AjAtBr@`Cf@pCPrC?vCElAUlBs@rCuAlDaBvBy@v@kDnBsBvAyAfBsDlFeBhE]fA[vAi@vEK|CT~E@\\dNvmBQbOc@jEi@nC]pAgAhCaA~AaBhCaNbQcAtBo@nBk@xCeDj`@IhFFrB`@lGzDxT`DlMvB~FtB`JtH|TlBbHnAtD?VbQ~g@^~AbDhJhCfI`AbCtBlEv@jAnAlAdCbBfBr@nHdClBhAfA~@pAtAtu@zfAlBnBhInHzBzCnUba@lCfDnD`DlZvTvBxBvCrEn@zAhDnLQL',
        stops: [
          {
            id: 'MonacoStation_GareDeMonacomontecarlo',
            name: 'Monaco-Monte-Carlo',
            coordinates: {
              lat: 43.738483,
              lon: 7.41967,
            },
          },
          {
            id: 'MonacoStation_GareDeCapdail',
            name: "Cap-d'Ail",
            coordinates: {
              lat: 43.720596,
              lon: 7.394439,
            },
          },
          {
            id: 'MonacoStation_GareDeEze',
            name: 'Eze',
            coordinates: {
              lat: 43.722331,
              lon: 7.356986,
            },
          },
          {
            id: 'MonacoStation_GareDeBeaulieusurmer',
            name: 'Beaulieu-sur-Mer',
            coordinates: {
              lat: 43.706673,
              lon: 7.331569,
            },
          },
          {
            id: 'MonacoStation_GareDeVillefranchesurmer',
            name: 'Villefranche-sur-Mer',
            coordinates: {
              lat: 43.707009,
              lon: 7.314303,
            },
          },
          {
            id: 'MonacoStation_GareDeNiceriquier',
            name: 'Nice-Riquier',
            coordinates: {
              lat: 43.705702,
              lon: 7.290389,
            },
          },
          {
            id: 'MonacoStation_GareDeNiceville',
            name: 'Nice-Ville',
            coordinates: {
              lat: 43.704711,
              lon: 7.261786,
            },
          },
          {
            id: 'MonacoStation_GareDeNicestaugustin',
            name: 'Nice-St-Augustin',
            coordinates: {
              lat: 43.671043,
              lon: 7.216941,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'SNCFTERTer',
              headsign: 'Grasse',
              short_name: '86036',
              scheduled_time: '2022-07-01T12:58:00+02:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['SNCFTERTer'],
            },
          ],
          leg_departure_time: '2022-07-01T12:58:00+02:00',
          leg_arrival_time: '2022-07-01T13:32:00+02:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'SNCFTERTer',
            name: 'TER',
            vehicle_types: ['rail'],
            brand: {
              id: 'SNCFTER',
              name: 'TER',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0f5deba7cad589483333aeb82eca4ddd013877c6e7f5e0ac11395336/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/25ce35b4936f3db72aab4bc0b85e9b2f9e941c88bd9ea6f191b9e3e1/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/12bba749901758e1f9d8566e974bbde4aaef1f737a293710164e9a6c/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/85df60670444ab74ef47e431eb5d838e600dea7122f128fa4edc19e9/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/daa76005f6017f8e0adebf9bce8c0ee81ede777dd671b1cbe009717e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/60aeafebac3b5c7f3f57e0abd001057be265af00b55e08b3e6fb75e3/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#034EA2',
            background_color: '#034EA2',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: true,
          back: false,
        },
      },
      {
        travel_mode: 'walk',
        duration_seconds: 1373,
        path: 'empiGul`k@_@r@HJ^^Xd@Rv@^tBBLJVFV?JKjBGn@@?HCREFADCIrACZFf@??jB|GLJj@?pBGP@BJBFHXBJJATCzAOB^t@zCPr@ZpADRFTn@zBZl@T^F@BDDFH@H?`@GXE^@fAQXELDD?L?BAHAj@GNKDAD?FABAh@G`@Er@Kr@GfBWvCt@NCfJoAD@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T13:32:00+02:00',
          leg_arrival_time: '2022-07-01T13:54:53+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'MonacoStation_GareDeNicestaugustin_Exit_Edouard_Grinda',
            stop_id: 'MonacoStation_GareDeNicestaugustin',
            coordinates: {
              lat: 43.670753,
              lon: 7.216269,
            },
            name: 'Avenue Edouard Grinda',
          },
          duration_seconds: 180,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T13:54:53+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwOTMxNSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjcxMjgsXCJkdXJhdGlvblwiOjUyMTMsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQzLjY2MDg4Niw3LjIwOTEyXCJ9LFwianJfaW5kZXhcIjoyLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjE3NDAsXCJkdXJhdGlvblwiOjEyMDAsXCJlY1wiOlwiNDMuNzMzNTksNy40MTc5MVwiLFwiaW5fc3RhdGlvblwiOlwiMC8zNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0My43MjU3LDcuNDE5MDFcIixcInRvX2V4aXRcIjpcIk1vbmFjb1N0YXRpb25fR2FyZURlTW9uYWNvbW9udGVjYXJsb19Gb250dmllaWxsZUxlUm9jaGVyXCJ9LHtcImR1cmF0aW9uXCI6MjA0MCxcImVuZFwiOlwiTW9uYWNvU3RhdGlvbl9HYXJlRGVOaWNlc3RhdWd1c3RpblwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiU05DRlRFUlRlclwiXSxcInN0YXJ0XCI6XCJNb25hY29TdGF0aW9uX0dhcmVEZU1vbmFjb21vbnRlY2FybG9cIixcInN0b3BfY291bnRcIjo4LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9tY21vbmFjb1NUQVRJT05HYXJlRGVNb25hY29tb250ZWNhcmxvX0ltbm12TGF2X2RTV1wiLFwiUGxhdGZvcm1fbWNtb25hY29TVEFUSU9OR2FyZURlTmljZXN0YXVndXN0aW5fU05DRlRFUl9kU1dcIl19LHtcImRpc3RhbmNlXCI6MTY2NCxcImR1cmF0aW9uXCI6MTM3MyxcImVjXCI6XCI0My42NjA4OSw3LjIwOTA3XCIsXCJmcm9tX2V4aXRcIjpcIk1vbmFjb1N0YXRpb25fR2FyZURlTmljZXN0YXVndXN0aW5fRXhpdF9FZG91YXJkX0dyaW5kYVwiLFwiaW5fc3RhdGlvblwiOlwiMi8xODBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0My42NzA3NSw3LjIxNjI3XCJ9XSxcInByaWNlX3BlbmNlXCI6NTAwLFwicmVnaW9uXCI6XCJtYy1tb25hY29cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiZTk0YWQwZjItOTRiMC00ZmUxLWIwZGQtOTZiODM5MjMxNWY0XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDMuNzI1NzA3LDcuNDE5MDI0XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMjoxNTowMCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6Im1jLW1vbmFjbyJ9.MW3xF42432cfiS10qY0eXRgU361XfC9H13XxYwOE61c',
  },
  {
    start: {
      coordinates: {
        lat: 43.725707,
        lon: 7.419024,
      },
    },
    end: {
      coordinates: {
        lat: 43.660886,
        lon: 7.20912,
      },
    },
    distance_meters: 2686,
    duration_seconds: 5852,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '7.00€',
      amount: '7.00',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 167,
        path: 'sd{iGy_hl@??CBJNLTJN@@BF@NGHABEFQXOVMREDDFSZDHeAhBIIOLCAAAC?C?ABA?CCKa@CB',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:17:47+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 632,
        path: '}i{iGivgl@BAXrAGtIYz@w@dBWLQTCDCh@w@h@D^JTKlAHVf@\\FZ[nBQPw@a@GW\\iBXGl@ZDRc@~BKHsCc@c@j@mAc@Dc@YA[m@Ok@yBoBOGyDoIsAiBcBcFKs@R]S_@OFm@qA_AoCAU',
        stops: [
          {
            id: 'MonacoStop_Heliport_W_1',
            name: 'Heliport',
            coordinates: {
              lat: 43.726546,
              lon: 7.417492,
            },
          },
          {
            id: 'MonacoStop_StadeLouisIi_N_1',
            name: 'Stade Louis II',
            coordinates: {
              lat: 43.727021,
              lon: 7.41432,
            },
          },
          {
            id: 'MonacoStop_Cimetiere_NE_2',
            name: 'Cimetière',
            coordinates: {
              lat: 43.728977,
              lon: 7.412712,
            },
          },
          {
            id: 'MonacoStop_PlaceDarmesCiii_NE',
            name: "Place d'Armes CIII",
            coordinates: {
              lat: 43.73218,
              lon: 7.418642,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'MonacoBus4',
              frequency_seconds_range: [660, 660],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['MonacoBus4'],
            },
          ],
          leg_departure_time: '2022-07-01T12:22:13+02:00',
          leg_arrival_time: '2022-07-01T12:32:45+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'MonacoBus4',
            name: '4',
            vehicle_types: ['bus'],
            brand: {
              id: 'MonacoBus',
              name: 'Autobus',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/ad4e05e1fc6488b572607ab4acbc3e94bf7e04f6f6bf660834b5bf52/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a3d30652404e665414d6c3e5e55d30fcd69c72f4f556255f70082350/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/028cc531bcbfb0014e53f2210f49eafb290f482d5259cc4fd15e3261/d324a6fb/@2x.png',
                  width: 15,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/b53723bc787475fec726a912a7f3d935da382acb8f7bf0f2f3b2d62d/d324a6fb/@2x.png',
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
            images: [
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/ee37955973db625a9b7cb34bd5a4c08471ddbf0690c173391fb0d3c2/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/b9cfcc8dd228908c809b0689b54b59739f73e8e8535aad1ca06cb3cb/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#FBB900',
            background_color: '#FBB900',
            text_color: '#000000',
          },
        ],
        direction_description: 'Saint-Roman',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 520,
        path: 'cm|iGo}gl@EDCCGMS]ABEDC@?@G@IZYhBECGCGCOr@?AACGEEAWOEA{@JODUDE@?B',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:32:45+02:00',
          leg_arrival_time: '2022-07-01T12:41:25+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'MonacoStation_GareDeMonacomontecarlo_FontvieilleLeRocher',
            stop_id: 'MonacoStation_GareDeMonacomontecarlo',
            coordinates: {
              lat: 43.7335854,
              lon: 7.4179072,
            },
            name: 'Fontvieille / Le Rocher',
          },
          alternate_exits: [
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_BoulevarddeSuisse',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7386436,
                lon: 7.4201617,
              },
              name: 'Boulevard de Suisse - Casino',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_JardinExotiqueHopital',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7370148,
                lon: 7.4190049,
              },
              name: 'Jardin Exotique Hopital',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_LaCondamine',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7340965,
                lon: 7.4178333,
              },
              name: 'La Condamine',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_MonteCarlo',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7387466,
                lon: 7.4192958,
              },
              name: 'Monte Carlo',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_ParvisSainteDevote',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7382126,
                lon: 7.4197173,
              },
              name: 'Parvis Sainte Dévote',
            },
            {
              id: 'MonacoStation_GareDeMonacomontecarlo_PortHercule',
              stop_id: 'MonacoStation_GareDeMonacomontecarlo',
              coordinates: {
                lat: 43.7370834,
                lon: 7.4210839,
              },
              name: 'Port Hercule',
            },
          ],
          duration_seconds: 360,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2040,
        path: 'ot}iG}chl@X[rCnGtHjMhDzHtCtCrAbA`B|@|Cl@dG`@lMnAnI|BpHtDbM`FtA`@bCXrAx@b@`@\\l@Pf@Jn@b@tJ?rB]tN?fDp@|JXlBhB|H`AzGHtADtBKbDa@rC_@hCi@bBcF`HoC`D{@pA{@dB]dA}@jHMvGZrI~@pIrA~Gf@tB|@`CtEhIpB`EzCdI\\hAd@~CP|EC`KmBfS[xBYlAmBpEuD`G_AxBs@tC_@dEe@rSDrCHhAXrBb@tBx@hCtAdEbMxUbC~DjBdCpAfAlErCjFnEvD|HfBbMTrDHfFNvC|ApOPnAd@nBb@tAlEvJvCtFnAhBfBfBdBpA~CxAjNlFnHrDlHzEbChBtA~AjAtBr@`Cf@pCPrC?vCElAUlBs@rCuAlDaBvBy@v@kDnBsBvAyAfBsDlFeBhE]fA[vAi@vEK|CT~E@\\dNvmBQbOc@jEi@nC]pAgAhCaA~AaBhCaNbQcAtBo@nBk@xCeDj`@IhFFrB`@lGzDxT`DlMvB~FtB`JtH|TlBbHnAtD?VbQ~g@^~AbDhJhCfI`AbCtBlEv@jAnAlAdCbBfBr@nHdClBhAfA~@pAtAtu@zfAlBnBhInHzBzCnUba@lCfDnD`DlZvTvBxBvCrEn@zAhDnLQL',
        stops: [
          {
            id: 'MonacoStation_GareDeMonacomontecarlo',
            name: 'Monaco-Monte-Carlo',
            coordinates: {
              lat: 43.738483,
              lon: 7.41967,
            },
          },
          {
            id: 'MonacoStation_GareDeCapdail',
            name: "Cap-d'Ail",
            coordinates: {
              lat: 43.720596,
              lon: 7.394439,
            },
          },
          {
            id: 'MonacoStation_GareDeEze',
            name: 'Eze',
            coordinates: {
              lat: 43.722331,
              lon: 7.356986,
            },
          },
          {
            id: 'MonacoStation_GareDeBeaulieusurmer',
            name: 'Beaulieu-sur-Mer',
            coordinates: {
              lat: 43.706673,
              lon: 7.331569,
            },
          },
          {
            id: 'MonacoStation_GareDeVillefranchesurmer',
            name: 'Villefranche-sur-Mer',
            coordinates: {
              lat: 43.707009,
              lon: 7.314303,
            },
          },
          {
            id: 'MonacoStation_GareDeNiceriquier',
            name: 'Nice-Riquier',
            coordinates: {
              lat: 43.705702,
              lon: 7.290389,
            },
          },
          {
            id: 'MonacoStation_GareDeNiceville',
            name: 'Nice-Ville',
            coordinates: {
              lat: 43.704711,
              lon: 7.261786,
            },
          },
          {
            id: 'MonacoStation_GareDeNicestaugustin',
            name: 'Nice-St-Augustin',
            coordinates: {
              lat: 43.671043,
              lon: 7.216941,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'SNCFTERTer',
              headsign: 'Grasse',
              short_name: '86036',
              scheduled_time: '2022-07-01T12:58:00+02:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['SNCFTERTer'],
            },
          ],
          leg_departure_time: '2022-07-01T12:58:00+02:00',
          leg_arrival_time: '2022-07-01T13:32:00+02:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'SNCFTERTer',
            name: 'TER',
            vehicle_types: ['rail'],
            brand: {
              id: 'SNCFTER',
              name: 'TER',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0f5deba7cad589483333aeb82eca4ddd013877c6e7f5e0ac11395336/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/25ce35b4936f3db72aab4bc0b85e9b2f9e941c88bd9ea6f191b9e3e1/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/12bba749901758e1f9d8566e974bbde4aaef1f737a293710164e9a6c/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/85df60670444ab74ef47e431eb5d838e600dea7122f128fa4edc19e9/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/daa76005f6017f8e0adebf9bce8c0ee81ede777dd671b1cbe009717e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/60aeafebac3b5c7f3f57e0abd001057be265af00b55e08b3e6fb75e3/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#034EA2',
            background_color: '#034EA2',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: true,
          back: false,
        },
      },
      {
        travel_mode: 'walk',
        duration_seconds: 1373,
        path: 'empiGul`k@_@r@HJ^^Xd@Rv@^tBBLJVFV?JKjBGn@@?HCREFADCIrACZFf@??jB|GLJj@?pBGP@BJBFHXBJJATCzAOB^t@zCPr@ZpADRFTn@zBZl@T^F@BDDFH@H?`@GXE^@fAQXELDD?L?BAHAj@GNKDAD?FABAh@G`@Er@Kr@GfBWvCt@NCfJoAD@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T13:32:00+02:00',
          leg_arrival_time: '2022-07-01T13:54:53+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'MonacoStation_GareDeNicestaugustin_Exit_Edouard_Grinda',
            stop_id: 'MonacoStation_GareDeNicestaugustin',
            coordinates: {
              lat: 43.670753,
              lon: 7.216269,
            },
            name: 'Avenue Edouard Grinda',
          },
          duration_seconds: 180,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T13:54:53+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwOTMxNSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjcxMjgsXCJkdXJhdGlvblwiOjU4NTIsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQzLjY2MDg4Niw3LjIwOTEyXCJ9LFwianJfaW5kZXhcIjozLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjIzMyxcImR1cmF0aW9uXCI6MTY3LFwiZWNcIjpcIjQzLjcyNjU1LDcuNDE3NDlcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0My43MjU3LDcuNDE5MDFcIn0se1wiZHVyYXRpb25cIjo2MzIsXCJlbmRcIjpcIk1vbmFjb1N0b3BfUGxhY2VEYXJtZXNDaWlpX05FXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJNb25hY29CdXM0XCJdLFwic3RhcnRcIjpcIk1vbmFjb1N0b3BfSGVsaXBvcnRfV18xXCIsXCJzdG9wX2NvdW50XCI6NH0se1wiZGlzdGFuY2VcIjo3ODksXCJkdXJhdGlvblwiOjUyMCxcImVjXCI6XCI0My43MzM1OSw3LjQxNzkxXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzM2MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQzLjczMjE4LDcuNDE4NjRcIixcInRvX2V4aXRcIjpcIk1vbmFjb1N0YXRpb25fR2FyZURlTW9uYWNvbW9udGVjYXJsb19Gb250dmllaWxsZUxlUm9jaGVyXCJ9LHtcImR1cmF0aW9uXCI6MjA0MCxcImVuZFwiOlwiTW9uYWNvU3RhdGlvbl9HYXJlRGVOaWNlc3RhdWd1c3RpblwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiU05DRlRFUlRlclwiXSxcInN0YXJ0XCI6XCJNb25hY29TdGF0aW9uX0dhcmVEZU1vbmFjb21vbnRlY2FybG9cIixcInN0b3BfY291bnRcIjo4LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9tY21vbmFjb1NUQVRJT05HYXJlRGVNb25hY29tb250ZWNhcmxvX0ltbm12TGF2X2RTV1wiLFwiUGxhdGZvcm1fbWNtb25hY29TVEFUSU9OR2FyZURlTmljZXN0YXVndXN0aW5fU05DRlRFUl9kU1dcIl19LHtcImRpc3RhbmNlXCI6MTY2NCxcImR1cmF0aW9uXCI6MTM3MyxcImVjXCI6XCI0My42NjA4OSw3LjIwOTA3XCIsXCJmcm9tX2V4aXRcIjpcIk1vbmFjb1N0YXRpb25fR2FyZURlTmljZXN0YXVndXN0aW5fRXhpdF9FZG91YXJkX0dyaW5kYVwiLFwiaW5fc3RhdGlvblwiOlwiMi8xODBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0My42NzA3NSw3LjIxNjI3XCJ9XSxcInByaWNlX3BlbmNlXCI6NzAwLFwicmVnaW9uXCI6XCJtYy1tb25hY29cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiZTk0YWQwZjItOTRiMC00ZmUxLWIwZGQtOTZiODM5MjMxNWY0XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDMuNzI1NzA3LDcuNDE5MDI0XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMjoxNTowMCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6Im1jLW1vbmFjbyJ9.Vvr_CHGMyUEjj7dktog3xqi5YHdVeWEvN0MTWGoOmSU',
  },
] as Route[]
