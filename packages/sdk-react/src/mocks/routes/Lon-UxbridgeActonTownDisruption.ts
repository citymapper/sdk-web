import { Route } from '@citymapper/api/@types'

export default [
  {
    start: {
      coordinates: {
        lat: 51.537557,
        lon: -0.481619,
      },
    },
    end: {
      coordinates: {
        lat: 51.50301,
        lon: -0.283085,
      },
    },
    distance_meters: 1533,
    duration_seconds: 3962,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£1.90',
      amount: '1.90',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 1085,
        path: 'm_qyHha}A??@nA?PAb@SGGCIE]IA?eAYWIaAOMAa@Ao@A}@AmBAU?C?a@CO?m@CC?q@E_AOwAU[CYAwACaA@i@HK@YAG?GA_@AQC]Ci@RLWDQ@QKJK@Y?CICG_Aw@OMKSCHU[]c@g@q@S[[a@AC[]K?SG_@QMOCEAGAEAC?E?E??@ADIASHsA@G??@A?A@A@A@ABCDABAB?@?BEJU?KEWQ}@Oq@EO?AkA~@',
        updatable_detail: {
          leg_departure_time: '2022-07-13T12:30:21+01:00',
          leg_arrival_time: '2022-07-13T12:48:26+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2160,
        path: 'stryHjk|AEDcAmDe@kB}BqKYmBU}BW_ECsC?uJEgBIeBk@_G{@oG{EgUeX{nAe@}By@uCoAuDsAyCcCcEiB{BqAuAo@k@oBoAeEqBwAc@iBYeEaA}@]k@_@k@Y}CsB}@m@oC{CqAkB{@wA_BiD{@{By@gC}CoKoEmNwCsIcC{HmJgYkAsDyBkIu@}C_@}BWkBq@eF_@mDu@cImFu`@aAeHsE{[qHuj@sAcNMoAa@eG_@qH_@cNKcMHyOPiId@gLd@aH~@yMvCk]hBeQ@O\\eEXwBvAoHdBaHjAyDj@}AfBkEjHuOnDiHrBoDhAeBvC_EpCaDnFsFxAmBnAsBhEsIh@w@~AaC|BgCjMiKjEyDjB}BfBmC|A}Ch@oAv@uBr@aCNq@h@aDPkCF}A^{QTgEhAuIvAyKnAgKNaBJeBXcH\\oERyAXeBd@oBhD{LbFmRjIkZnCyIVq@dQof@l@}ApBkElAsBxAqBjCiCpB}Av@e@fHmDrAgAfBuBz@cBp@gBrEuPzAuFb@oA^{@l@eAnA{AbAaAnY}UjFyE~BeCdGwIlAoBrGwLvAsB|BeCdB{AzBwApB{@RKvBk@dAS|CWzAI|DEpENdANjCt@zBjArC~BhB|BpGnLnAbBtAvA??z@v@rA|@l@T^Dl@AfA[\\W|@aAh@s@fBmBlAs@r@UnAGv@@tCh@pBVvDNfBVv@?|@AfBS`FiAhBq@|AaA`Au@~BmCd@y@vA{CtCaHpDiH~AqDfBgDh@u@JT',
        stops: [
          {
            id: 'Uxbridge',
            name: 'Uxbridge',
            coordinates: {
              lat: 51.546496,
              lon: -0.478139,
            },
          },
          {
            id: 'Hillingdon',
            name: 'Hillingdon',
            coordinates: {
              lat: 51.553717,
              lon: -0.449926,
            },
          },
          {
            id: 'Ickenham',
            name: 'Ickenham',
            coordinates: {
              lat: 51.561985,
              lon: -0.442027,
            },
          },
          {
            id: 'Ruislip',
            name: 'Ruislip',
            coordinates: {
              lat: 51.571449,
              lon: -0.421455,
            },
          },
          {
            id: 'RuislipManor',
            name: 'Ruislip Manor',
            coordinates: {
              lat: 51.573188,
              lon: -0.412346,
            },
          },
          {
            id: 'Eastcote',
            name: 'Eastcote',
            coordinates: {
              lat: 51.576493,
              lon: -0.396845,
            },
          },
          {
            id: 'RaynersLane',
            name: 'Rayners Lane',
            coordinates: {
              lat: 51.574977,
              lon: -0.371006,
            },
          },
          {
            id: 'SouthHarrow',
            name: 'South Harrow',
            coordinates: {
              lat: 51.564678,
              lon: -0.352212,
            },
          },
          {
            id: 'SudburyHill',
            name: 'Sudbury Hill',
            coordinates: {
              lat: 51.556996,
              lon: -0.336216,
            },
          },
          {
            id: 'SudburyTown',
            name: 'Sudbury Town',
            coordinates: {
              lat: 51.550782,
              lon: -0.315483,
            },
          },
          {
            id: 'Alperton',
            name: 'Alperton',
            coordinates: {
              lat: 51.540695,
              lon: -0.299487,
            },
          },
          {
            id: 'ParkRoyal',
            name: 'Park Royal',
            coordinates: {
              lat: 51.526901,
              lon: -0.284228,
            },
          },
          {
            id: 'NorthEaling',
            name: 'North Ealing',
            coordinates: {
              lat: 51.517555,
              lon: -0.289005,
            },
          },
          {
            id: 'EalingCommon',
            name: 'Ealing Common',
            coordinates: {
              lat: 51.510218,
              lon: -0.288214,
            },
          },
          {
            id: 'ActonTown',
            name: 'Acton Town',
            coordinates: {
              lat: 51.50275,
              lon: -0.280251,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Piccadilly',
              frequency_seconds_range: [1200, 1200],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Severe Delays',
              description:
                'Piccadilly Line: Severe delays between Acton Town and Uxbridge due to signal failure at Rayners Lane. Tickets are being accepted on London Buses between Acton Town / Harrow on the Hill and Uxbridge ',
              service_ids: ['Piccadilly'],
            },
          ],
          leg_departure_time: '2022-07-13T13:02:00+01:00',
          leg_arrival_time: '2022-07-13T13:38:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Piccadilly',
            name: 'Piccadilly',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/601d488ba37abdd0b275d43319d7c7983ce54f3f7616a3d93d94cfd1/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/1b85932a224db976511c156c4cba802931fc378ae2a93a617a7198c7/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#0019A8',
            background_color: '#2B3DA5',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 317,
        path: '}djyHpwu@GNHJTd@WZoAfE@tB_@|@@^T\\BD?JAFB?B@HDDBFJ??',
        updatable_detail: {
          leg_departure_time: '2022-07-13T13:38:00+01:00',
          leg_arrival_time: '2022-07-13T13:43:17+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'ActonTown_E2962',
            stop_id: 'ActonTown',
            coordinates: {
              lat: 51.5030273,
              lon: -0.2804096,
            },
            name: 'Gunnersbury Lane',
          },
          duration_seconds: 60,
        },
      },
    ],
    route_departure_time: '2022-07-13T12:30:21+01:00',
    route_arrival_time: '2022-07-13T13:43:17+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxMTgyNiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjAxNzcsXCJkdXJhdGlvblwiOjM5NjIsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMzAxLC0wLjI4MzA4NVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTI0MyxcImR1cmF0aW9uXCI6MTA4NSxcImVjXCI6XCI1MS41NDY1LC0wLjQ3ODE0XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTM3OTksLTAuNDgxNjVcIixcInRvX2V4aXRcIjpcIlV4YnJpZGdlX2RlZmF1bHRcIn0se1wiZHVyYXRpb25cIjoyMTYwLFwiZW5kXCI6XCJBY3RvblRvd25cIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlBpY2NhZGlsbHlcIl0sXCJzdGFydFwiOlwiVXhicmlkZ2VcIixcInN0b3BfY291bnRcIjoxNSxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fVXhicmlkZ2VfVW5kZXJncm91bmRcIixcIlBsYXRmb3JtX0FjdG9uVG93bl9EUF9kU0VcIl19LHtcImRpc3RhbmNlXCI6MjkwLFwiZHVyYXRpb25cIjozMTcsXCJlY1wiOlwiNTEuNTAzMjksLTAuMjgzMzRcIixcImZyb21fZXhpdFwiOlwiQWN0b25Ub3duX0UyOTYyXCIsXCJpbl9zdGF0aW9uXCI6XCIyLzYwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTAzMDMsLTAuMjgwNDFcIn1dLFwicHJpY2VfcGVuY2VcIjoxOTAsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJhM2FlZmEzYi1jMTk3LTRmZDMtYjI4MS1jYjY3ZWUzMTMzZWJcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS41Mzc1NTcsLTAuNDgxNjE5XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0xM1QxMjozMDoyMSswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.4MaAzhbZ3qt6b5lD1PKE1r1ysT1SxTtWcu6ZB0LB2NA',
  },
  {
    start: {
      coordinates: {
        lat: 51.537557,
        lon: -0.481619,
      },
    },
    end: {
      coordinates: {
        lat: 51.50301,
        lon: -0.283085,
      },
    },
    distance_meters: 778,
    duration_seconds: 3909,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£3.55',
      amount: '3.55',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 105,
        path: 'm_qyHha}A??@nA?PAb@SGGCIE]IE`@',
        updatable_detail: {
          leg_departure_time: '2022-07-13T12:30:21+01:00',
          leg_arrival_time: '2022-07-13T12:32:06+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 258,
        path: 'waqyHte}ADe@}A]iM_@CAgEo@sDKkANsCUeCxD_@Dc@[}@BaAh@oE`CaEz@m@OUa@CsCeCcDN[dE}BhB{ADYAOY_BMH',
        stops: [
          {
            id: '490005688N',
            name: 'Cowley Mill Road',
            coordinates: {
              lat: 51.538357,
              lon: -0.482346,
            },
            indicator_text: 'BX',
          },
          {
            id: '490014592N',
            name: 'Whitehall School',
            coordinates: {
              lat: 51.541095,
              lon: -0.481996,
            },
            indicator_text: 'J',
          },
          {
            id: '490005845P',
            name: 'Crown Walk',
            coordinates: {
              lat: 51.545744,
              lon: -0.482706,
            },
            indicator_text: 'P',
          },
          {
            id: '490015585E',
            name: 'Belmont Road',
            coordinates: {
              lat: 51.547397,
              lon: -0.479825,
            },
            indicator_text: 'D',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus222',
              frequency_seconds_range: [315, 315],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LondonBusU5',
              frequency_seconds_range: [315, 315],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus222', 'LondonBusU5'],
            },
          ],
          leg_departure_time: '2022-07-13T12:35:42+01:00',
          leg_arrival_time: '2022-07-13T12:40:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus222',
            name: '222',
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
            id: 'LondonBusU5',
            name: 'U5',
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
        duration_seconds: 364,
        path: 'gzryHzu|APKRlADT@NALB??E?Q?ENIH?bA{@BC~AoAGKAECEGSBAPW?C?C@C?C?A@E?E@EBGBC@C@A?A@A@A@ABCDABAB?@?BEJU?KEWQ}@Oq@EO?AkA~@',
        updatable_detail: {
          leg_departure_time: '2022-07-13T12:40:00+01:00',
          leg_arrival_time: '2022-07-13T12:46:04+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2160,
        path: 'stryHjk|AEDcAmDe@kB}BqKYmBU}BW_ECsC?uJEgBIeBk@_G{@oG{EgUeX{nAe@}By@uCoAuDsAyCcCcEiB{BqAuAo@k@oBoAeEqBwAc@iBYeEaA}@]k@_@k@Y}CsB}@m@oC{CqAkB{@wA_BiD{@{By@gC}CoKoEmNwCsIcC{HmJgYkAsDyBkIu@}C_@}BWkBq@eF_@mDu@cImFu`@aAeHsE{[qHuj@sAcNMoAa@eG_@qH_@cNKcMHyOPiId@gLd@aH~@yMvCk]hBeQ@O\\eEXwBvAoHdBaHjAyDj@}AfBkEjHuOnDiHrBoDhAeBvC_EpCaDnFsFxAmBnAsBhEsIh@w@~AaC|BgCjMiKjEyDjB}BfBmC|A}Ch@oAv@uBr@aCNq@h@aDPkCF}A^{QTgEhAuIvAyKnAgKNaBJeBXcH\\oERyAXeBd@oBhD{LbFmRjIkZnCyIVq@dQof@l@}ApBkElAsBxAqBjCiCpB}Av@e@fHmDrAgAfBuBz@cBp@gBrEuPzAuFb@oA^{@l@eAnA{AbAaAnY}UjFyE~BeCdGwIlAoBrGwLvAsB|BeCdB{AzBwApB{@RKvBk@dAS|CWzAI|DEpENdANjCt@zBjArC~BhB|BpGnLnAbBtAvA??z@v@rA|@l@T^Dl@AfA[\\W|@aAh@s@fBmBlAs@r@UnAGv@@tCh@pBVvDNfBVv@?|@AfBS`FiAhBq@|AaA`Au@~BmCd@y@vA{CtCaHpDiH~AqDfBgDh@u@JT',
        stops: [
          {
            id: 'Uxbridge',
            name: 'Uxbridge',
            coordinates: {
              lat: 51.546496,
              lon: -0.478139,
            },
          },
          {
            id: 'Hillingdon',
            name: 'Hillingdon',
            coordinates: {
              lat: 51.553717,
              lon: -0.449926,
            },
          },
          {
            id: 'Ickenham',
            name: 'Ickenham',
            coordinates: {
              lat: 51.561985,
              lon: -0.442027,
            },
          },
          {
            id: 'Ruislip',
            name: 'Ruislip',
            coordinates: {
              lat: 51.571449,
              lon: -0.421455,
            },
          },
          {
            id: 'RuislipManor',
            name: 'Ruislip Manor',
            coordinates: {
              lat: 51.573188,
              lon: -0.412346,
            },
          },
          {
            id: 'Eastcote',
            name: 'Eastcote',
            coordinates: {
              lat: 51.576493,
              lon: -0.396845,
            },
          },
          {
            id: 'RaynersLane',
            name: 'Rayners Lane',
            coordinates: {
              lat: 51.574977,
              lon: -0.371006,
            },
          },
          {
            id: 'SouthHarrow',
            name: 'South Harrow',
            coordinates: {
              lat: 51.564678,
              lon: -0.352212,
            },
          },
          {
            id: 'SudburyHill',
            name: 'Sudbury Hill',
            coordinates: {
              lat: 51.556996,
              lon: -0.336216,
            },
          },
          {
            id: 'SudburyTown',
            name: 'Sudbury Town',
            coordinates: {
              lat: 51.550782,
              lon: -0.315483,
            },
          },
          {
            id: 'Alperton',
            name: 'Alperton',
            coordinates: {
              lat: 51.540695,
              lon: -0.299487,
            },
          },
          {
            id: 'ParkRoyal',
            name: 'Park Royal',
            coordinates: {
              lat: 51.526901,
              lon: -0.284228,
            },
          },
          {
            id: 'NorthEaling',
            name: 'North Ealing',
            coordinates: {
              lat: 51.517555,
              lon: -0.289005,
            },
          },
          {
            id: 'EalingCommon',
            name: 'Ealing Common',
            coordinates: {
              lat: 51.510218,
              lon: -0.288214,
            },
          },
          {
            id: 'ActonTown',
            name: 'Acton Town',
            coordinates: {
              lat: 51.50275,
              lon: -0.280251,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Piccadilly',
              frequency_seconds_range: [1200, 1200],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Severe Delays',
              description:
                'Piccadilly Line: Severe delays between Acton Town and Uxbridge due to signal failure at Rayners Lane. Tickets are being accepted on London Buses between Acton Town / Harrow on the Hill and Uxbridge ',
              service_ids: ['Piccadilly'],
            },
          ],
          leg_departure_time: '2022-07-13T13:02:00+01:00',
          leg_arrival_time: '2022-07-13T13:38:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Piccadilly',
            name: 'Piccadilly',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/601d488ba37abdd0b275d43319d7c7983ce54f3f7616a3d93d94cfd1/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/1b85932a224db976511c156c4cba802931fc378ae2a93a617a7198c7/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#0019A8',
            background_color: '#2B3DA5',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 317,
        path: '}djyHpwu@GNHJTd@WZoAfE@tB_@|@@^T\\BD?JAFB?B@HDDBFJ??',
        updatable_detail: {
          leg_departure_time: '2022-07-13T13:38:00+01:00',
          leg_arrival_time: '2022-07-13T13:43:17+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'ActonTown_E2962',
            stop_id: 'ActonTown',
            coordinates: {
              lat: 51.5030273,
              lon: -0.2804096,
            },
            name: 'Gunnersbury Lane',
          },
          duration_seconds: 60,
        },
      },
    ],
    route_departure_time: '2022-07-13T12:30:21+01:00',
    route_arrival_time: '2022-07-13T13:43:17+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxMTgyNiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjAxNzcsXCJkdXJhdGlvblwiOjM5MDksXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMzAxLC0wLjI4MzA4NVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6OTcsXCJkdXJhdGlvblwiOjEwNSxcImVjXCI6XCI1MS41MzgzNiwtMC40ODIzNVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUzNzk5LC0wLjQ4MTY1XCJ9LHtcImR1cmF0aW9uXCI6MjU4LFwiZW5kXCI6XCI0OTAwMTU1ODVFXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJMb25kb25CdXMyMjJcIixcIkxvbmRvbkJ1c1U1XCJdLFwic3RhcnRcIjpcIjQ5MDAwNTY4OE5cIixcInN0b3BfY291bnRcIjo0fSx7XCJkaXN0YW5jZVwiOjM5MSxcImR1cmF0aW9uXCI6MzY0LFwiZWNcIjpcIjUxLjU0NjUsLTAuNDc4MTRcIixcImluX3N0YXRpb25cIjpcIjAvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDc0LC0wLjQ3OTgyXCIsXCJ0b19leGl0XCI6XCJVeGJyaWRnZV9kZWZhdWx0XCJ9LHtcImR1cmF0aW9uXCI6MjE2MCxcImVuZFwiOlwiQWN0b25Ub3duXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJQaWNjYWRpbGx5XCJdLFwic3RhcnRcIjpcIlV4YnJpZGdlXCIsXCJzdG9wX2NvdW50XCI6MTUsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1V4YnJpZGdlX1VuZGVyZ3JvdW5kXCIsXCJQbGF0Zm9ybV9BY3RvblRvd25fRFBfZFNFXCJdfSx7XCJkaXN0YW5jZVwiOjI5MCxcImR1cmF0aW9uXCI6MzE3LFwiZWNcIjpcIjUxLjUwMzI5LC0wLjI4MzM0XCIsXCJmcm9tX2V4aXRcIjpcIkFjdG9uVG93bl9FMjk2MlwiLFwiaW5fc3RhdGlvblwiOlwiMi82MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUwMzAzLC0wLjI4MDQxXCJ9XSxcInByaWNlX3BlbmNlXCI6MzU1LFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiYTNhZWZhM2ItYzE5Ny00ZmQzLWIyODEtY2I2N2VlMzEzM2ViXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNTM3NTU3LC0wLjQ4MTYxOVwifSxcInRpbWVcIjpcIjIwMjItMDctMTNUMTI6MzA6MjErMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.KHP5VNXy7Q9XzXK36Jsg9y4t36JpqiO0lNqkkkIaEuI',
  },
  {
    start: {
      coordinates: {
        lat: 51.537557,
        lon: -0.481619,
      },
    },
    end: {
      coordinates: {
        lat: 51.50301,
        lon: -0.283085,
      },
    },
    distance_meters: 387,
    duration_seconds: 4040,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£3.45',
      amount: '3.45',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 103,
        path: 'm_qyHha}A??@nA?PAb@SGGCIE]IA?B]',
        updatable_detail: {
          leg_departure_time: '2022-07-13T12:30:21+01:00',
          leg_arrival_time: '2022-07-13T12:32:04+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2114,
        path: 'oaqyHtc}AAXpEfA~Gu@dNd@fFPpFm@bEoAh@Bt@BrC{Bj@OdARzKfG~@RfAU|HyA|FoB|Ag@xEeD`EqHz@_@~BcArHsHFIxGeEnAmBfBkEn@g@fJcHfDk@FAxEnApDpDPuAOsCDWVEFV]xFbAv@zABhCiA`B{AbC{B|@aEn@kB~@mCl@o@~GiCj@qAh@cDP_A~@gD`@]jBU~Dg@hPyNPShD_EZaA|A}TnAiQGyA}@eDIoCt@eEG}BRu@d@UhAn@HnB_@nAdDfO~@vAbGrFrC~Et@c@zBcC|BcCnAQfDdAvEVl@UlAkBpAmBrFyBhCYbGo@t@{@fCkHjKgZz@y@pAQfGlCJ{HXeTj@ib@n@ce@HsGAaUUoIs@iWGiCi@{LW_GPoG~@eIzD_TpB{KbGe\\j@yCKsAP}@t@iA`CmMxA}H|B_Of@_DMcBLs@`@WxEsXbCoNlDiOUUPeAEC',
        stops: [
          {
            id: '490005688S',
            name: 'Cowley Mill Road',
            coordinates: {
              lat: 51.538317,
              lon: -0.482031,
            },
            indicator_text: 'BU',
          },
          {
            id: '490006802S',
            name: 'Ferndale Crescent',
            coordinates: {
              lat: 51.533403,
              lon: -0.482367,
            },
            indicator_text: 'BV',
          },
          {
            id: '490012611S',
            name: 'Station Road',
            coordinates: {
              lat: 51.529844,
              lon: -0.481866,
            },
            indicator_text: 'BW',
          },
          {
            id: '490003887S',
            name: 'Benbow Waye',
            coordinates: {
              lat: 51.525546,
              lon: -0.482527,
            },
            indicator_text: 'Q',
          },
          {
            id: '490010244S',
            name: 'New Peachey Lane',
            coordinates: {
              lat: 51.522682,
              lon: -0.481541,
            },
            indicator_text: 'R',
          },
          {
            id: '490010708S',
            name: 'Packet Boat Lane',
            coordinates: {
              lat: 51.519876,
              lon: -0.478738,
            },
            indicator_text: 'S',
          },
          {
            id: '490010986S',
            name: 'Philpots Bridge',
            coordinates: {
              lat: 51.517704,
              lon: -0.476922,
            },
            indicator_text: 'T',
          },
          {
            id: '490006729S',
            name: 'Yiewsley Library',
            coordinates: {
              lat: 51.515086,
              lon: -0.474113,
            },
            indicator_text: 'W',
          },
          {
            id: '490015005B',
            name: 'Yiewsley High Street',
            coordinates: {
              lat: 51.512421,
              lon: -0.472486,
            },
            indicator_text: 'B',
          },
          {
            id: '490006815H',
            name: 'Ferrers Avenue',
            coordinates: {
              lat: 51.508385,
              lon: -0.47327,
            },
            indicator_text: 'H',
          },
          {
            id: '490004259J',
            name: 'Brandville Road',
            coordinates: {
              lat: 51.507207,
              lon: -0.471148,
            },
            indicator_text: 'J',
          },
          {
            id: '490005291S',
            name: 'Church Road',
            coordinates: {
              lat: 51.504778,
              lon: -0.468319,
            },
          },
          {
            id: '490014424S',
            name: 'Porters Way',
            coordinates: {
              lat: 51.503617,
              lon: -0.466873,
            },
          },
          {
            id: '490009727S',
            name: 'Maxwell Road',
            coordinates: {
              lat: 51.499812,
              lon: -0.464062,
            },
          },
          {
            id: '490005095E',
            name: 'Cherry Lane School',
            coordinates: {
              lat: 51.498356,
              lon: -0.459285,
            },
          },
          {
            id: '490013500S',
            name: 'The Plough',
            coordinates: {
              lat: 51.493484,
              lon: -0.458066,
            },
          },
          {
            id: '490007821S',
            name: 'Harmondsworth Lane',
            coordinates: {
              lat: 51.489938,
              lon: -0.457105,
            },
          },
          {
            id: '490012175S',
            name: 'Sipson Close',
            coordinates: {
              lat: 51.487583,
              lon: -0.455802,
            },
          },
          {
            id: '490012177S',
            name: 'Sipson Way',
            coordinates: {
              lat: 51.485362,
              lon: -0.453818,
            },
            indicator_text: 'BH',
          },
          {
            id: '490012176E',
            name: 'Nene Road',
            coordinates: {
              lat: 51.481323,
              lon: -0.448237,
            },
            indicator_text: 'BJ',
          },
          {
            id: '490004139E',
            name: "Bolton's Lane",
            coordinates: {
              lat: 51.48117,
              lon: -0.444843,
            },
            indicator_text: 'BK',
          },
          {
            id: '490010251G',
            name: 'New Road',
            coordinates: {
              lat: 51.480969,
              lon: -0.43919,
            },
            indicator_text: 'D',
          },
          {
            id: '490007811C',
            name: 'Harlington Corner',
            coordinates: {
              lat: 51.480744,
              lon: -0.433092,
            },
            indicator_text: 'E',
          },
          {
            id: '490015397E',
            name: 'Nobel Drive',
            coordinates: {
              lat: 51.4808,
              lon: -0.426523,
            },
            indicator_text: 'F',
          },
          {
            id: '490010677W2',
            name: 'Oxford Avenue',
            coordinates: {
              lat: 51.481062,
              lon: -0.422626,
            },
            indicator_text: 'CA',
          },
          {
            id: '490013596E',
            name: 'Craneswater',
            coordinates: {
              lat: 51.481356,
              lon: -0.419735,
            },
            indicator_text: 'CB',
          },
          {
            id: '490005704E',
            name: 'Waye Avenue',
            coordinates: {
              lat: 51.480083,
              lon: -0.412031,
            },
            indicator_text: 'CC',
          },
          {
            id: '490013235E',
            name: 'The Avenue',
            coordinates: {
              lat: 51.479533,
              lon: -0.409962,
            },
            indicator_text: 'CD',
          },
          {
            id: '490013495E',
            name: 'The Parkway',
            coordinates: {
              lat: 51.478193,
              lon: -0.405314,
            },
            indicator_text: 'CE',
          },
          {
            id: '490011470E',
            name: 'Rectory Road',
            coordinates: {
              lat: 51.47703,
              lon: -0.401136,
            },
            indicator_text: 'CF',
          },
          {
            id: '490013776E1',
            name: 'Henlys Roundabout',
            coordinates: {
              lat: 51.475931,
              lon: -0.396998,
            },
            indicator_text: 'CH',
          },
          {
            id: '490007425E',
            name: 'Great West Road / Renfrew Road',
            coordinates: {
              lat: 51.474484,
              lon: -0.391203,
            },
            indicator_text: 'M',
          },
          {
            id: '490000118A',
            name: 'Hounslow West Station',
            coordinates: {
              lat: 51.472961,
              lon: -0.385669,
            },
            indicator_text: 'A',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus222',
              frequency_seconds_range: [585, 585],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus222'],
            },
          ],
          leg_departure_time: '2022-07-13T12:39:46+01:00',
          leg_arrival_time: '2022-07-13T13:15:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus222',
            name: '222',
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
        duration_seconds: 141,
        path: '_idyHlijAOJ',
        updatable_detail: {
          leg_departure_time: '2022-07-13T13:15:00+01:00',
          leg_arrival_time: '2022-07-13T13:17:21+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1020,
        path: 'oidyHxijAeB~A??o@gIWeCQkCGyB?mDBcAf@uI`@gDf@kC`@aBfFgPbAcE`@yBj@iE^uFJoB@wAEyIGmEEaAImBC}B?mIGaC]iFaAoGcAsFoBeKgA_FEUm@kBaAuBy@qAu@_AcCyB{BmAeA]aD[}EBqEJ}BWoBi@uBkAsAmAKKiB{B{AsCiA}Cy@eDg@yCk@eF}@kJc@eDq@uDcAuDoAqCs@mAm[ac@{AkCsAwCgSah@wBoDmHsMGKoCmEiA{BkDkKg@aBu@aDcAiFkAqI{AoMMoAo@kG{DuYe@sCaAkE??uFcSiAgEm@sDs@oHaEej@k@mEq@uD}CqKe@}BSuBIaC?sBJoBRmBb@yBfAeDbEqJxDoJ\\q@h@u@JT',
        stops: [
          {
            id: 'HounslowWest',
            name: 'Hounslow West',
            coordinates: {
              lat: 51.473035,
              lon: -0.385732,
            },
          },
          {
            id: 'HounslowCentral',
            name: 'Hounslow Central',
            coordinates: {
              lat: 51.471083,
              lon: -0.366922,
            },
          },
          {
            id: 'HounslowEast',
            name: 'Hounslow East',
            coordinates: {
              lat: 51.473171,
              lon: -0.356695,
            },
          },
          {
            id: 'Osterley',
            name: 'Osterley',
            coordinates: {
              lat: 51.480929,
              lon: -0.351994,
            },
          },
          {
            id: 'BostonManor',
            name: 'Boston Manor',
            coordinates: {
              lat: 51.495696,
              lon: -0.324764,
            },
          },
          {
            id: 'Northfields',
            name: 'Northfields',
            coordinates: {
              lat: 51.499276,
              lon: -0.314157,
            },
          },
          {
            id: 'SouthEaling',
            name: 'South Ealing',
            coordinates: {
              lat: 51.501368,
              lon: -0.307019,
            },
          },
          {
            id: 'ActonTown',
            name: 'Acton Town',
            coordinates: {
              lat: 51.50275,
              lon: -0.280251,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Piccadilly',
              frequency_seconds_range: [300, 300],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Piccadilly'],
            },
          ],
          leg_departure_time: '2022-07-13T13:19:00+01:00',
          leg_arrival_time: '2022-07-13T13:36:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Piccadilly',
            name: 'Piccadilly',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/601d488ba37abdd0b275d43319d7c7983ce54f3f7616a3d93d94cfd1/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/1b85932a224db976511c156c4cba802931fc378ae2a93a617a7198c7/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#0019A8',
            background_color: '#2B3DA5',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 317,
        path: '}djyHpwu@GNHJTd@WZoAfE@tB_@|@@^T\\BD?JAFB?B@HDDBFJ??',
        updatable_detail: {
          leg_departure_time: '2022-07-13T13:36:00+01:00',
          leg_arrival_time: '2022-07-13T13:41:17+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'ActonTown_E2962',
            stop_id: 'ActonTown',
            coordinates: {
              lat: 51.5030273,
              lon: -0.2804096,
            },
            name: 'Gunnersbury Lane',
          },
          duration_seconds: 60,
        },
      },
    ],
    route_departure_time: '2022-07-13T12:30:21+01:00',
    route_arrival_time: '2022-07-13T13:41:17+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxMTgyNiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjAxNzcsXCJkdXJhdGlvblwiOjQwNDAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMzAxLC0wLjI4MzA4NVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6OTcsXCJkdXJhdGlvblwiOjEwMyxcImVjXCI6XCI1MS41MzgzMiwtMC40ODIwM1wiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUzNzk5LC0wLjQ4MTY1XCJ9LHtcImR1cmF0aW9uXCI6MjExNCxcImVuZFwiOlwiNDkwMDAwMTE4QVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzMjIyXCJdLFwic3RhcnRcIjpcIjQ5MDAwNTY4OFNcIixcInN0b3BfY291bnRcIjozM30se1wiZHVyYXRpb25cIjoxNDEsXCJlY1wiOlwiNTEuNDczMDM1LC0wLjM4NTczMlwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ3Mjk2MSwtMC4zODU2NjlcIn0se1wiZHVyYXRpb25cIjoxMDIwLFwiZW5kXCI6XCJBY3RvblRvd25cIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlBpY2NhZGlsbHlcIl0sXCJzdGFydFwiOlwiSG91bnNsb3dXZXN0XCIsXCJzdG9wX2NvdW50XCI6OCxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fSG91bnNsb3dXZXN0X1BfZEVcIixcIlBsYXRmb3JtX0FjdG9uVG93bl9EUF9kU0VcIl19LHtcImRpc3RhbmNlXCI6MjkwLFwiZHVyYXRpb25cIjozMTcsXCJlY1wiOlwiNTEuNTAzMjksLTAuMjgzMzRcIixcImZyb21fZXhpdFwiOlwiQWN0b25Ub3duX0UyOTYyXCIsXCJpbl9zdGF0aW9uXCI6XCIyLzYwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTAzMDMsLTAuMjgwNDFcIn1dLFwicHJpY2VfcGVuY2VcIjozNDUsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJhM2FlZmEzYi1jMTk3LTRmZDMtYjI4MS1jYjY3ZWUzMTMzZWJcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS41Mzc1NTcsLTAuNDgxNjE5XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0xM1QxMjozMDoyMSswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.yNJqsc0JlWKUWiaPBZ1uvpd67RdtIjfXvQ4dN3CX5zg',
  },
  {
    start: {
      coordinates: {
        lat: 51.537557,
        lon: -0.481619,
      },
    },
    end: {
      coordinates: {
        lat: 51.50301,
        lon: -0.283085,
      },
    },
    distance_meters: 1533,
    duration_seconds: 4124,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£1.90',
      amount: '1.90',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 1085,
        path: 'm_qyHha}A??@nA?PAb@SGGCIE]IA?eAYWIaAOMAa@Ao@A}@AmBAU?C?a@CO?m@CC?q@E_AOwAU[CYAwACaA@i@HK@YAG?GA_@AQC]Ci@RLWDQ@QKJK@Y?CICG_Aw@OMKSCHU[]c@g@q@S[[a@AC[]K?SG_@QMOCEAGAEAC?E?E??@ADIASHsA@G??@A?A@A@A@ABCDABAB?@?BEJU?KEWQ}@Oq@EO?AkA~@',
        updatable_detail: {
          leg_departure_time: '2022-07-13T12:30:21+01:00',
          leg_arrival_time: '2022-07-13T12:48:26+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 780,
        path: 'stryHjk|AEDcAmDe@kB}BqKYmBU}BW_ECsC?uJEgBIeBk@_G{@oG{EgUeX{nAe@}By@uCoAuDsAyCcCcEiB{BqAuAo@k@oBoAeEqBwAc@iBYqCm@qBq@wD}B}@o@}@m@oC{CqAkB{@wAk@mAs@{A{@{By@gC}CoKoEmNwCsIcC{HqFgPgEsMuC}KYkA_@}BUkBcAyHeA}KmFu`@aAeHsE{[qHuj@sAcNMoAa@eGi@iLUkJIaJ?oGFkJPiITyF`@_Iz@aMhCg[d@kFhBeQZL',
        stops: [
          {
            id: 'Uxbridge',
            name: 'Uxbridge',
            coordinates: {
              lat: 51.546496,
              lon: -0.478139,
            },
          },
          {
            id: 'Hillingdon',
            name: 'Hillingdon',
            coordinates: {
              lat: 51.553717,
              lon: -0.449926,
            },
          },
          {
            id: 'Ickenham',
            name: 'Ickenham',
            coordinates: {
              lat: 51.561985,
              lon: -0.442027,
            },
          },
          {
            id: 'Ruislip',
            name: 'Ruislip',
            coordinates: {
              lat: 51.571449,
              lon: -0.421455,
            },
          },
          {
            id: 'RuislipManor',
            name: 'Ruislip Manor',
            coordinates: {
              lat: 51.573188,
              lon: -0.412346,
            },
          },
          {
            id: 'Eastcote',
            name: 'Eastcote',
            coordinates: {
              lat: 51.576493,
              lon: -0.396845,
            },
          },
          {
            id: 'RaynersLane',
            name: 'Rayners Lane',
            coordinates: {
              lat: 51.574977,
              lon: -0.371006,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Metropolitan',
              frequency_seconds_range: [405, 405],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Metropolitan'],
            },
          ],
          leg_departure_time: '2022-07-13T12:51:00+01:00',
          leg_arrival_time: '2022-07-13T13:04:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Metropolitan',
            name: 'Metropolitan',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/b5d317f356f4190e05614021f064b29c94f0e8e13111a3e155b9123e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/b328c9ab5122de4a5c91f85b58d45821ed5da559436369eee2b9d5e7/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#751056',
            background_color: '#751056',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1200,
        path: 'sfxyHxmgA[M@O\\eEXwBvAoHdBaHjAyDj@}AfBkEjHuOnDiHrBoDhAeBvC_EpCaDnFsFxAmBnAsBhEsIh@w@~AaC|BgCjMiKjEyDjB}BfBmC|A}Ch@oAv@uBr@aCNq@h@aDPkCF}A^{QTgEhAuIvAyKnAgKNaBJeBXcH\\oERyAXeBd@oBhD{LbFmRjIkZnCyIVq@dQof@l@}ApBkElAsBxAqBjCiCpB}Av@e@fHmDrAgAfBuBz@cBp@gBrEuPzAuFb@oA^{@l@eAnA{AbAaAnY}UjFyE~BeCdGwIlAoBrGwLvAsB|BeCdB{AzBwApB{@RKvBk@dAS|CWzAI|DEpENdANjCt@zBjArC~BhB|BpGnLnAbBtAvA??z@v@rA|@l@T^Dl@AfA[\\W|@aAh@s@fBmBlAs@r@UnAGv@@tCh@pBVvDNfBVv@?|@AfBS`FiAhBq@|AaA`Au@~BmCd@y@vA{CtCaHpDiH~AqDfBgDh@u@JT',
        stops: [
          {
            id: 'RaynersLane',
            name: 'Rayners Lane',
            coordinates: {
              lat: 51.574977,
              lon: -0.371006,
            },
          },
          {
            id: 'SouthHarrow',
            name: 'South Harrow',
            coordinates: {
              lat: 51.564678,
              lon: -0.352212,
            },
          },
          {
            id: 'SudburyHill',
            name: 'Sudbury Hill',
            coordinates: {
              lat: 51.556996,
              lon: -0.336216,
            },
          },
          {
            id: 'SudburyTown',
            name: 'Sudbury Town',
            coordinates: {
              lat: 51.550782,
              lon: -0.315483,
            },
          },
          {
            id: 'Alperton',
            name: 'Alperton',
            coordinates: {
              lat: 51.540695,
              lon: -0.299487,
            },
          },
          {
            id: 'ParkRoyal',
            name: 'Park Royal',
            coordinates: {
              lat: 51.526901,
              lon: -0.284228,
            },
          },
          {
            id: 'NorthEaling',
            name: 'North Ealing',
            coordinates: {
              lat: 51.517555,
              lon: -0.289005,
            },
          },
          {
            id: 'EalingCommon',
            name: 'Ealing Common',
            coordinates: {
              lat: 51.510218,
              lon: -0.288214,
            },
          },
          {
            id: 'ActonTown',
            name: 'Acton Town',
            coordinates: {
              lat: 51.50275,
              lon: -0.280251,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Piccadilly',
              frequency_seconds_range: [1215, 1215],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Severe Delays',
              description:
                'Piccadilly Line: Severe delays between Acton Town and Uxbridge due to signal failure at Rayners Lane. Tickets are being accepted on London Buses between Acton Town / Harrow on the Hill and Uxbridge ',
              service_ids: ['Piccadilly'],
            },
          ],
          leg_departure_time: '2022-07-13T13:08:00+01:00',
          leg_arrival_time: '2022-07-13T13:28:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Piccadilly',
            name: 'Piccadilly',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/601d488ba37abdd0b275d43319d7c7983ce54f3f7616a3d93d94cfd1/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/1b85932a224db976511c156c4cba802931fc378ae2a93a617a7198c7/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#0019A8',
            background_color: '#2B3DA5',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 317,
        path: '}djyHpwu@GNHJTd@WZoAfE@tB_@|@@^T\\BD?JAFB?B@HDDBFJ??',
        updatable_detail: {
          leg_departure_time: '2022-07-13T13:28:00+01:00',
          leg_arrival_time: '2022-07-13T13:33:17+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'ActonTown_E2962',
            stop_id: 'ActonTown',
            coordinates: {
              lat: 51.5030273,
              lon: -0.2804096,
            },
            name: 'Gunnersbury Lane',
          },
          duration_seconds: 60,
        },
      },
    ],
    route_departure_time: '2022-07-13T12:30:21+01:00',
    route_arrival_time: '2022-07-13T13:33:17+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxMTgyNiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjAxNzcsXCJkdXJhdGlvblwiOjQxMjQsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMzAxLC0wLjI4MzA4NVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjMsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTI0MyxcImR1cmF0aW9uXCI6MTA4NSxcImVjXCI6XCI1MS41NDY1LC0wLjQ3ODE0XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTM3OTksLTAuNDgxNjVcIixcInRvX2V4aXRcIjpcIlV4YnJpZGdlX2RlZmF1bHRcIn0se1wiZHVyYXRpb25cIjo3ODAsXCJlbmRcIjpcIlJheW5lcnNMYW5lXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJNZXRyb3BvbGl0YW5cIl0sXCJzdGFydFwiOlwiVXhicmlkZ2VcIixcInN0b3BfY291bnRcIjo3LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9VeGJyaWRnZV9VbmRlcmdyb3VuZFwiLFwiUGxhdGZvcm1fUmF5bmVyc0xhbmVfTVBcIl19LHtcImR1cmF0aW9uXCI6MTIwMCxcImVuZFwiOlwiQWN0b25Ub3duXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJQaWNjYWRpbGx5XCJdLFwic3RhcnRcIjpcIlJheW5lcnNMYW5lXCIsXCJzdG9wX2NvdW50XCI6OSxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fUmF5bmVyc0xhbmVfTVBcIixcIlBsYXRmb3JtX0FjdG9uVG93bl9EUF9kU0VcIl19LHtcImRpc3RhbmNlXCI6MjkwLFwiZHVyYXRpb25cIjozMTcsXCJlY1wiOlwiNTEuNTAzMjksLTAuMjgzMzRcIixcImZyb21fZXhpdFwiOlwiQWN0b25Ub3duX0UyOTYyXCIsXCJpbl9zdGF0aW9uXCI6XCIyLzYwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTAzMDMsLTAuMjgwNDFcIn1dLFwicHJpY2VfcGVuY2VcIjoxOTAsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJhM2FlZmEzYi1jMTk3LTRmZDMtYjI4MS1jYjY3ZWUzMTMzZWJcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS41Mzc1NTcsLTAuNDgxNjE5XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0xM1QxMjozMDoyMSswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.FjB9l1k9_jIE3MxjodkhaYqzvaI8cr5JGiZpL_PGiic',
  },
  {
    start: {
      coordinates: {
        lat: 51.537557,
        lon: -0.481619,
      },
    },
    end: {
      coordinates: {
        lat: 51.50301,
        lon: -0.283085,
      },
    },
    distance_meters: 778,
    duration_seconds: 3938,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£3.55',
      amount: '3.55',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 105,
        path: 'm_qyHha}A??@nA?PAb@SGGCIE]IE`@',
        updatable_detail: {
          leg_departure_time: '2022-07-13T12:30:21+01:00',
          leg_arrival_time: '2022-07-13T12:32:06+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 258,
        path: 'waqyHte}ADe@}A]iM_@CAgEo@sDKkANsCUeCxD_@Dc@[}@BaAh@oE`CaEz@m@OUa@CsCeCcDN[dE}BhB{ADYAOY_BMH',
        stops: [
          {
            id: '490005688N',
            name: 'Cowley Mill Road',
            coordinates: {
              lat: 51.538357,
              lon: -0.482346,
            },
            indicator_text: 'BX',
          },
          {
            id: '490014592N',
            name: 'Whitehall School',
            coordinates: {
              lat: 51.541095,
              lon: -0.481996,
            },
            indicator_text: 'J',
          },
          {
            id: '490005845P',
            name: 'Crown Walk',
            coordinates: {
              lat: 51.545744,
              lon: -0.482706,
            },
            indicator_text: 'P',
          },
          {
            id: '490015585E',
            name: 'Belmont Road',
            coordinates: {
              lat: 51.547397,
              lon: -0.479825,
            },
            indicator_text: 'D',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus222',
              frequency_seconds_range: [315, 315],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LondonBusU5',
              frequency_seconds_range: [315, 315],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus222', 'LondonBusU5'],
            },
          ],
          leg_departure_time: '2022-07-13T12:35:42+01:00',
          leg_arrival_time: '2022-07-13T12:40:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus222',
            name: '222',
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
            id: 'LondonBusU5',
            name: 'U5',
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
        duration_seconds: 364,
        path: 'gzryHzu|APKRlADT@NALB??E?Q?ENIH?bA{@BC~AoAGKAECEGSBAPW?C?C@C?C?A@E?E@EBGBC@C@A?A@A@A@ABCDABAB?@?BEJU?KEWQ}@Oq@EO?AkA~@',
        updatable_detail: {
          leg_departure_time: '2022-07-13T12:40:00+01:00',
          leg_arrival_time: '2022-07-13T12:46:04+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 780,
        path: 'stryHjk|AEDcAmDe@kB}BqKYmBU}BW_ECsC?uJEgBIeBk@_G{@oG{EgUeX{nAe@}By@uCoAuDsAyCcCcEiB{BqAuAo@k@oBoAeEqBwAc@iBYqCm@qBq@wD}B}@o@}@m@oC{CqAkB{@wAk@mAs@{A{@{By@gC}CoKoEmNwCsIcC{HqFgPgEsMuC}KYkA_@}BUkBcAyHeA}KmFu`@aAeHsE{[qHuj@sAcNMoAa@eGi@iLUkJIaJ?oGFkJPiITyF`@_Iz@aMhCg[d@kFhBeQZL',
        stops: [
          {
            id: 'Uxbridge',
            name: 'Uxbridge',
            coordinates: {
              lat: 51.546496,
              lon: -0.478139,
            },
          },
          {
            id: 'Hillingdon',
            name: 'Hillingdon',
            coordinates: {
              lat: 51.553717,
              lon: -0.449926,
            },
          },
          {
            id: 'Ickenham',
            name: 'Ickenham',
            coordinates: {
              lat: 51.561985,
              lon: -0.442027,
            },
          },
          {
            id: 'Ruislip',
            name: 'Ruislip',
            coordinates: {
              lat: 51.571449,
              lon: -0.421455,
            },
          },
          {
            id: 'RuislipManor',
            name: 'Ruislip Manor',
            coordinates: {
              lat: 51.573188,
              lon: -0.412346,
            },
          },
          {
            id: 'Eastcote',
            name: 'Eastcote',
            coordinates: {
              lat: 51.576493,
              lon: -0.396845,
            },
          },
          {
            id: 'RaynersLane',
            name: 'Rayners Lane',
            coordinates: {
              lat: 51.574977,
              lon: -0.371006,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Metropolitan',
              frequency_seconds_range: [405, 405],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Metropolitan'],
            },
          ],
          leg_departure_time: '2022-07-13T12:51:00+01:00',
          leg_arrival_time: '2022-07-13T13:04:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Metropolitan',
            name: 'Metropolitan',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/b5d317f356f4190e05614021f064b29c94f0e8e13111a3e155b9123e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/b328c9ab5122de4a5c91f85b58d45821ed5da559436369eee2b9d5e7/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#751056',
            background_color: '#751056',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1200,
        path: 'sfxyHxmgA[M@O\\eEXwBvAoHdBaHjAyDj@}AfBkEjHuOnDiHrBoDhAeBvC_EpCaDnFsFxAmBnAsBhEsIh@w@~AaC|BgCjMiKjEyDjB}BfBmC|A}Ch@oAv@uBr@aCNq@h@aDPkCF}A^{QTgEhAuIvAyKnAgKNaBJeBXcH\\oERyAXeBd@oBhD{LbFmRjIkZnCyIVq@dQof@l@}ApBkElAsBxAqBjCiCpB}Av@e@fHmDrAgAfBuBz@cBp@gBrEuPzAuFb@oA^{@l@eAnA{AbAaAnY}UjFyE~BeCdGwIlAoBrGwLvAsB|BeCdB{AzBwApB{@RKvBk@dAS|CWzAI|DEpENdANjCt@zBjArC~BhB|BpGnLnAbBtAvA??z@v@rA|@l@T^Dl@AfA[\\W|@aAh@s@fBmBlAs@r@UnAGv@@tCh@pBVvDNfBVv@?|@AfBS`FiAhBq@|AaA`Au@~BmCd@y@vA{CtCaHpDiH~AqDfBgDh@u@JT',
        stops: [
          {
            id: 'RaynersLane',
            name: 'Rayners Lane',
            coordinates: {
              lat: 51.574977,
              lon: -0.371006,
            },
          },
          {
            id: 'SouthHarrow',
            name: 'South Harrow',
            coordinates: {
              lat: 51.564678,
              lon: -0.352212,
            },
          },
          {
            id: 'SudburyHill',
            name: 'Sudbury Hill',
            coordinates: {
              lat: 51.556996,
              lon: -0.336216,
            },
          },
          {
            id: 'SudburyTown',
            name: 'Sudbury Town',
            coordinates: {
              lat: 51.550782,
              lon: -0.315483,
            },
          },
          {
            id: 'Alperton',
            name: 'Alperton',
            coordinates: {
              lat: 51.540695,
              lon: -0.299487,
            },
          },
          {
            id: 'ParkRoyal',
            name: 'Park Royal',
            coordinates: {
              lat: 51.526901,
              lon: -0.284228,
            },
          },
          {
            id: 'NorthEaling',
            name: 'North Ealing',
            coordinates: {
              lat: 51.517555,
              lon: -0.289005,
            },
          },
          {
            id: 'EalingCommon',
            name: 'Ealing Common',
            coordinates: {
              lat: 51.510218,
              lon: -0.288214,
            },
          },
          {
            id: 'ActonTown',
            name: 'Acton Town',
            coordinates: {
              lat: 51.50275,
              lon: -0.280251,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Piccadilly',
              frequency_seconds_range: [1215, 1215],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Severe Delays',
              description:
                'Piccadilly Line: Severe delays between Acton Town and Uxbridge due to signal failure at Rayners Lane. Tickets are being accepted on London Buses between Acton Town / Harrow on the Hill and Uxbridge ',
              service_ids: ['Piccadilly'],
            },
          ],
          leg_departure_time: '2022-07-13T13:08:00+01:00',
          leg_arrival_time: '2022-07-13T13:28:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Piccadilly',
            name: 'Piccadilly',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/601d488ba37abdd0b275d43319d7c7983ce54f3f7616a3d93d94cfd1/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/1b85932a224db976511c156c4cba802931fc378ae2a93a617a7198c7/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#0019A8',
            background_color: '#2B3DA5',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 317,
        path: '}djyHpwu@GNHJTd@WZoAfE@tB_@|@@^T\\BD?JAFB?B@HDDBFJ??',
        updatable_detail: {
          leg_departure_time: '2022-07-13T13:28:00+01:00',
          leg_arrival_time: '2022-07-13T13:33:17+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'ActonTown_E2962',
            stop_id: 'ActonTown',
            coordinates: {
              lat: 51.5030273,
              lon: -0.2804096,
            },
            name: 'Gunnersbury Lane',
          },
          duration_seconds: 60,
        },
      },
    ],
    route_departure_time: '2022-07-13T12:30:21+01:00',
    route_arrival_time: '2022-07-13T13:33:17+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcxMTgyNiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjAxNzcsXCJkdXJhdGlvblwiOjM5MzgsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMzAxLC0wLjI4MzA4NVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjQsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6OTcsXCJkdXJhdGlvblwiOjEwNSxcImVjXCI6XCI1MS41MzgzNiwtMC40ODIzNVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUzNzk5LC0wLjQ4MTY1XCJ9LHtcImR1cmF0aW9uXCI6MjU4LFwiZW5kXCI6XCI0OTAwMTU1ODVFXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJMb25kb25CdXMyMjJcIixcIkxvbmRvbkJ1c1U1XCJdLFwic3RhcnRcIjpcIjQ5MDAwNTY4OE5cIixcInN0b3BfY291bnRcIjo0fSx7XCJkaXN0YW5jZVwiOjM5MSxcImR1cmF0aW9uXCI6MzY0LFwiZWNcIjpcIjUxLjU0NjUsLTAuNDc4MTRcIixcImluX3N0YXRpb25cIjpcIjAvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDc0LC0wLjQ3OTgyXCIsXCJ0b19leGl0XCI6XCJVeGJyaWRnZV9kZWZhdWx0XCJ9LHtcImR1cmF0aW9uXCI6NzgwLFwiZW5kXCI6XCJSYXluZXJzTGFuZVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTWV0cm9wb2xpdGFuXCJdLFwic3RhcnRcIjpcIlV4YnJpZGdlXCIsXCJzdG9wX2NvdW50XCI6NyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fVXhicmlkZ2VfVW5kZXJncm91bmRcIixcIlBsYXRmb3JtX1JheW5lcnNMYW5lX01QXCJdfSx7XCJkdXJhdGlvblwiOjEyMDAsXCJlbmRcIjpcIkFjdG9uVG93blwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiUGljY2FkaWxseVwiXSxcInN0YXJ0XCI6XCJSYXluZXJzTGFuZVwiLFwic3RvcF9jb3VudFwiOjksXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1JheW5lcnNMYW5lX01QXCIsXCJQbGF0Zm9ybV9BY3RvblRvd25fRFBfZFNFXCJdfSx7XCJkaXN0YW5jZVwiOjI5MCxcImR1cmF0aW9uXCI6MzE3LFwiZWNcIjpcIjUxLjUwMzI5LC0wLjI4MzM0XCIsXCJmcm9tX2V4aXRcIjpcIkFjdG9uVG93bl9FMjk2MlwiLFwiaW5fc3RhdGlvblwiOlwiMi82MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUwMzAzLC0wLjI4MDQxXCJ9XSxcInByaWNlX3BlbmNlXCI6MzU1LFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiYTNhZWZhM2ItYzE5Ny00ZmQzLWIyODEtY2I2N2VlMzEzM2ViXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNTM3NTU3LC0wLjQ4MTYxOVwifSxcInRpbWVcIjpcIjIwMjItMDctMTNUMTI6MzA6MjErMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.ND0jAAqM-xMbZHzEKA4SSnUgvWb2cYHJ7uKvArz6S14',
  },
] as Route[]
