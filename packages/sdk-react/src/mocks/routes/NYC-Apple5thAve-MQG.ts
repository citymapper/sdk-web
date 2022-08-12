import type { Route } from '@citymapper/api/@types'

export default [
  {
    start: {
      coordinates: {
        lat: 40.763848,
        lon: -73.975167,
      },
    },
    end: {
      coordinates: {
        lat: 40.750504,
        lon: -73.995627,
      },
    },
    distance_meters: 1098,
    duration_seconds: 1574,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 241,
        path: 'gsxwFbiobM_AvCm@lBi@bBZVIV',
        updatable_detail: {
          leg_departure_time: '2022-06-17T03:59:04-04:00',
          leg_arrival_time: '2022-06-17T04:03:05-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Subway57St_E02',
            stop_id: 'Subway57St',
            coordinates: {
              lat: 40.764227,
              lon: -73.97743,
            },
            name: '6th Ave & 57th St, SW corner',
          },
          alternate_exits: [
            {
              id: 'Subway57St_E01',
              stop_id: 'Subway57St',
              coordinates: {
                lat: 40.763874,
                lon: -73.977358,
              },
              name: '6th Ave & 56th St, NE corner',
            },
            {
              id: 'Subway57St_E03',
              stop_id: 'Subway57St',
              coordinates: {
                lat: 40.763998,
                lon: -73.977264,
              },
              name: '6th Ave & 57th St, SE corner',
            },
            {
              id: 'Subway57St_E04',
              stop_id: 'Subway57St',
              coordinates: {
                lat: 40.764652,
                lon: -73.977119,
              },
              name: '6th Ave & 57th St, NW corner',
            },
            {
              id: 'Subway57St_E05',
              stop_id: 'Subway57St',
              coordinates: {
                lat: 40.764564,
                lon: -73.97683,
              },
              name: '6th Ave & 57th St, NE corner',
            },
            {
              id: 'Subway57St_E06',
              stop_id: 'Subway57St',
              coordinates: {
                lat: 40.763482,
                lon: -73.977974,
              },
              name: '6th Ave & 56th St, SW corner',
            },
            {
              id: 'Subway57St_E07',
              stop_id: 'Subway57St',
              coordinates: {
                lat: 40.763392,
                lon: -73.977674,
              },
              name: '6th Ave & 56th St, SE corner',
            },
            {
              id: 'Subway57St_E08',
              stop_id: 'Subway57St',
              coordinates: {
                lat: 40.763831,
                lon: -73.977718,
              },
              name: '6th Ave & 56th St, NW corner',
            },
          ],
          duration_seconds: 60,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'yuxwF`vobM??d`@dWvZfSb[lS?A',
        stops: [
          {
            id: 'Subway57St',
            name: '57 St',
            coordinates: {
              lat: 40.763972,
              lon: -73.97745,
            },
          },
          {
            id: 'Subway4750StsRockefellerCtr',
            name: '47-50 Sts - Rockefeller Ctr',
            coordinates: {
              lat: 40.758663,
              lon: -73.981329,
            },
          },
          {
            id: 'Subway42StBryantPk',
            name: '42 St - Bryant Pk',
            coordinates: {
              lat: 40.754222,
              lon: -73.984569,
            },
          },
          {
            id: 'Subway34StHeraldSq',
            name: '34 St - Herald Sq',
            coordinates: {
              lat: 40.749544,
              lon: -73.987962,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'F',
              frequency_seconds_range: [1200, 1200],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['F'],
            },
          ],
          leg_departure_time: '2022-06-17T04:21:00-04:00',
          leg_arrival_time: '2022-06-17T04:26:00-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'F',
            name: 'F',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/c654cbafc2c372d289919441b308e7b7c9633f479194632eef157cb0/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/ae9cf55ae400de946c29343b2a0d05b03a4111a7faadf718f070f4f3/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#FF6319',
            background_color: '#FF6319',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: false,
        },
        direction_description: 'Downtown',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 633,
        path: 'iuuwFn{qbMJFABGNJFfAr@DDDBZTi@dBu@zBkB`GK\\KZKZGPCH[`A_@lASl@IXEHCJ{AzEWt@IXK\\FD@@GTWt@Od@',
        updatable_detail: {
          leg_departure_time: '2022-06-17T04:26:00-04:00',
          leg_arrival_time: '2022-06-17T04:36:33-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'PATH33St_E3474',
            stop_id: 'PATH33St',
            coordinates: {
              lat: 40.7485305,
              lon: -73.98856,
            },
            name: '32 St & 6 Avenue',
          },
          alternate_exits: [
            {
              id: 'PATH33St_E07',
              stop_id: 'PATH33St',
              coordinates: {
                lat: 40.7483795,
                lon: -73.9882585,
              },
              name: '32 St & Broadway NW corner, Greeley Square',
            },
            {
              id: 'PATH33St_E14',
              stop_id: 'PATH33St',
              coordinates: {
                lat: 40.748746,
                lon: -73.988774,
              },
              name: '6 Avenue 32-33 Sts ',
            },
            {
              id: 'PATH33St_E7821',
              stop_id: 'PATH33St',
              coordinates: {
                lat: 40.7483233,
                lon: -73.988088,
              },
              name: '32 Street & Broadway NE Corner ',
            },
            {
              id: 'PATH33St_E9180',
              stop_id: 'PATH33St',
              coordinates: {
                lat: 40.7498396,
                lon: -73.9881684,
              },
              name: '34th St & Broadway/6th Ave, SW corner',
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-06-17T03:59:04-04:00',
    route_arrival_time: '2022-06-17T04:36:33-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTQ1Mjc0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6Mjg3NyxcImR1cmF0aW9uXCI6MTU3NCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDAuNzUwNTA0LC03My45OTU2MjdcIn0sXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MjMyLFwiZHVyYXRpb25cIjoyNDEsXCJlY1wiOlwiNDAuNzY0MjMsLTczLjk3NzQzXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzYwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDAuNzYzNTYsLTczLjk3NTM4XCIsXCJ0b19leGl0XCI6XCJTdWJ3YXk1N1N0X0UwMlwifSx7XCJkdXJhdGlvblwiOjMwMCxcImVuZFwiOlwiU3Vid2F5MzRTdEhlcmFsZFNxXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJGXCJdLFwic3RhcnRcIjpcIlN1YndheTU3U3RcIixcInN0b3BfY291bnRcIjo0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXk1N1N0X0ZfZFNXXCIsXCJQbGF0Zm9ybV9TdWJ3YXkzNFN0SGVyYWxkU3FfQkRGTV9kU1dcIl19LHtcImRpc3RhbmNlXCI6ODY2LFwiZHVyYXRpb25cIjo2MzMsXCJlY1wiOlwiNDAuNzUwNTQsLTczLjk5NTZcIixcImZyb21fZXhpdFwiOlwiUEFUSDMzU3RfRTM0NzRcIixcImluX3N0YXRpb25cIjpcIjIvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC43NDg1MywtNzMuOTg4NTZcIn1dLFwicHJpY2VfcGVuY2VcIjoyNzUsXCJyZWdpb25cIjpcInVzLW55Y1wiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJmZDgzMDE4MS0wNDY1LTQzZTItYmE4My03NTRiYTdmYTA3ZTVcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0MC43NjM4NDgsLTczLjk3NTE2N1wifSxcInRpbWVcIjpcIjIwMjItMDYtMTdUMDM6NTk6MDQtMDQ6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1cy1ueWMifQ.hN5XzvhrPnMBjfZ--2beKZkKlM68hhRJ7avOdANMbg8',
  },
  {
    start: {
      coordinates: {
        lat: 40.763848,
        lon: -73.975167,
      },
    },
    end: {
      coordinates: {
        lat: 40.750504,
        lon: -73.995627,
      },
    },
    distance_meters: 1303,
    duration_seconds: 1560,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 692,
        path: 'gsxwFbiobM_AvCm@lBi@bBe@vACHM`@yApE}AbFSn@CDIXCFa@nAgAjDADIVGRYz@M`@M\\QM',
        updatable_detail: {
          leg_departure_time: '2022-06-17T03:59:04-04:00',
          leg_arrival_time: '2022-06-17T04:10:36-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Subway59StColumbusCircle_E11',
            stop_id: 'Subway59StColumbusCircle',
            coordinates: {
              lat: 40.7667006,
              lon: -73.982545,
            },
            name: '8th Ave & 57th St, NE corner',
          },
          alternate_exits: [
            {
              id: 'Subway59StColumbusCircle_E01',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.768777,
                lon: -73.982106,
              },
              name: 'Broadway & 60th St, SW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E02',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.769167,
                lon: -73.98232,
              },
              name: 'Columbus Circle & 59th St, SE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E03',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.769402,
                lon: -73.982357,
              },
              name: 'Broadway & 60th St, SW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E04',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.767654,
                lon: -73.981423,
              },
              name: 'Columbus Circle & 59th St, SE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E05',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.767642,
                lon: -73.981235,
              },
              name: 'Columbus Circle & 59th St, SE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E10',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.766936,
                lon: -73.98292,
              },
              name: '8th Ave & 57th St, NW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E12',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.7665097,
                lon: -73.982695,
              },
              name: '8th Ave & 57th St, SE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E13',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.7664893,
                lon: -73.983253,
              },
              name: '8th Ave & 57th St, SW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E14',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.7667616,
                lon: -73.983365,
              },
              name: '8th Ave & 57th St, SW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E4962',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.767659,
                lon: -73.982542,
              },
              name: '8th Ave & 58th St, NW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E4965',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.768649,
                lon: -73.981184,
              },
              name: 'Central Park West & 60th St, NE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E4966',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.768719,
                lon: -73.981788,
              },
              name: 'Central Park West & 60th St, West corner',
            },
            {
              id: 'Subway59StColumbusCircle_E4969',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.767367,
                lon: -73.982137,
              },
              name: '8th Ave & 58th St, NE corner',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'qpywF`rpbM??pBi@fAErJx@~Bb@|Cz@pErBxF`DbFpCnDjAhGzAhA\\hAj@tMrIt]jU@A',
        stops: [
          {
            id: 'Subway59StColumbusCircle',
            name: '59 St - Columbus Circle',
            coordinates: {
              lat: 40.768247,
              lon: -73.981929,
            },
          },
          {
            id: 'Subway50St1',
            name: '50 St',
            coordinates: {
              lat: 40.761728,
              lon: -73.983849,
            },
          },
          {
            id: 'SubwayTimesSq42St',
            name: 'Times Sq - 42 St',
            coordinates: {
              lat: 40.755986,
              lon: -73.986328,
            },
          },
          {
            id: 'Subway34StPennStation123',
            name: '34 St - Penn Station',
            coordinates: {
              lat: 40.750373,
              lon: -73.991057,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: '1',
              frequency_seconds_range: [540, 540],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: '2',
              frequency_seconds_range: [540, 540],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['1'],
            },
            {
              type: 'travel_affected',
              title:
                'Section Closed / Skipping Stations / Running Local / Trains Run in Two Sections',
              description:
                'No <2> trains between Chambers St and Atlantic Av-Barclays Ctr. <2> service runs in two sections: 1. Between Wakefield-241 St and Chambers St and via the <1> to/from South Ferry 2. Between Atlantic Av-Barclays Ctr and Flatbush Av-Brooklyn College Trains run local in both directions between 96 St and South Ferry. Trains from Flatbush Av-Brooklyn College skip Eastern Pkwy-Brooklyn Museum, Grand Army Plaza and Bergen St.',
              service_ids: ['2'],
            },
          ],
          leg_departure_time: '2022-06-17T04:19:00-04:00',
          leg_arrival_time: '2022-06-17T04:24:00-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: '1',
            name: '1',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/0d6becd37029a5cead2bb8b8790129edf1b2552f0935150d289c4264/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/f97469a10f9683a56d06cb6e48b2cf728fc3ba11ebb7ce1d3ef2b033/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#EE352E',
            background_color: '#EE352E',
            text_color: '#FFFFFF',
          },
          {
            id: '2',
            name: '2',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/de302b94d92cdc30951171a8c11a1a876046db381b15228833ad78c7/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/1a78b885ec44a2b83df5ec15ecae2d33dd4a28144e30f53857d157c3/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#EE352E',
            background_color: '#EE352E',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: false,
        },
        direction_description: 'Downtown',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 388,
        path: 's`vwFf_sbMj@^Wt@IXK\\FD@@GTWt@Od@',
        updatable_detail: {
          leg_departure_time: '2022-06-17T04:24:00-04:00',
          leg_arrival_time: '2022-06-17T04:30:28-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'RailStationPennStation_E1',
            stop_id: 'RailStationPennStation',
            coordinates: {
              lat: 40.750337,
              lon: -73.994282,
            },
            name: '8th Avenue at 31st Street',
          },
          alternate_exits: [
            {
              id: 'RailStationPennStation_E10764',
              stop_id: 'RailStationPennStation',
              coordinates: {
                lat: 40.7502065,
                lon: -73.9910587,
              },
              name: '33rd St & 7th Ave, SE Corner',
            },
            {
              id: 'RailStationPennStation_E2',
              stop_id: 'RailStationPennStation',
              coordinates: {
                lat: 40.749788,
                lon: -73.99171,
              },
              name: '7th Avenue at 32nd Street',
            },
            {
              id: 'RailStationPennStation_E3',
              stop_id: 'RailStationPennStation',
              coordinates: {
                lat: 40.75143,
                lon: -73.9944205,
              },
              name: 'Moynihan Hall, 8th Avenue at 33rd Street',
            },
            {
              id: 'RailStationPennStation_E4',
              stop_id: 'RailStationPennStation',
              coordinates: {
                lat: 40.752045479,
                lon: -73.9954711,
              },
              name: 'Moynihan Hall, West 33rd Street',
            },
            {
              id: 'RailStationPennStation_E4026',
              stop_id: 'RailStationPennStation',
              coordinates: {
                lat: 40.7511286,
                lon: -73.9936095,
              },
              name: '8th Avenue at 33rd Street',
            },
            {
              id: 'RailStationPennStation_E4028',
              stop_id: 'RailStationPennStation',
              coordinates: {
                lat: 40.751088,
                lon: -73.9911083,
              },
              name: '34th Street near 7th Avenue ',
            },
            {
              id: 'RailStationPennStation_E5',
              stop_id: 'RailStationPennStation',
              coordinates: {
                lat: 40.7510142,
                lon: -73.9962434,
              },
              name: 'Moynihan Hall, West 31rd Street',
            },
          ],
          duration_seconds: 270,
        },
      },
    ],
    route_departure_time: '2022-06-17T03:59:04-04:00',
    route_arrival_time: '2022-06-17T04:30:28-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTQ1Mjc0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6Mjg3NyxcImR1cmF0aW9uXCI6MTU2MCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDAuNzUwNTA0LC03My45OTU2MjdcIn0sXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6ODg5LFwiZHVyYXRpb25cIjo2OTIsXCJlY1wiOlwiNDAuNzY2NywtNzMuOTgyNTRcIixcImluX3N0YXRpb25cIjpcIjAvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC43NjM1NiwtNzMuOTc1MzhcIixcInRvX2V4aXRcIjpcIlN1YndheTU5U3RDb2x1bWJ1c0NpcmNsZV9FMTFcIn0se1wiZHVyYXRpb25cIjozMDAsXCJlbmRcIjpcIlN1YndheTM0U3RQZW5uU3RhdGlvbjEyM1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiMVwiLFwiMlwiXSxcInN0YXJ0XCI6XCJTdWJ3YXk1OVN0Q29sdW1idXNDaXJjbGVcIixcInN0b3BfY291bnRcIjo0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXk1OVN0Q29sdW1idXNDaXJjbGVfMTJfZFNcIixcIlBsYXRmb3JtX1N1YndheTM0U3RQZW5uMTIzXzIzX2RTV1wiXX0se1wiZGlzdGFuY2VcIjo0MTQsXCJkdXJhdGlvblwiOjM4OCxcImVjXCI6XCI0MC43NTA1NCwtNzMuOTk1NlwiLFwiZnJvbV9leGl0XCI6XCJSYWlsU3RhdGlvblBlbm5TdGF0aW9uX0UxXCIsXCJpbl9zdGF0aW9uXCI6XCIyLzI3MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQwLjc1MDM0LC03My45OTQyOFwifV0sXCJwcmljZV9wZW5jZVwiOjI3NSxcInJlZ2lvblwiOlwidXMtbnljXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImZkODMwMTgxLTA0NjUtNDNlMi1iYTgzLTc1NGJhN2ZhMDdlNVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQwLjc2Mzg0OCwtNzMuOTc1MTY3XCJ9LFwidGltZVwiOlwiMjAyMi0wNi0xN1QwMzo1OTowNC0wNDowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVzLW55YyJ9.2VrXy4a2Ca1aJSzuUhhcHn5cC6KhG8gZUF6jP0V5pyc',
  },
  {
    start: {
      coordinates: {
        lat: 40.763848,
        lon: -73.975167,
      },
    },
    end: {
      coordinates: {
        lat: 40.750504,
        lon: -73.995627,
      },
    },
    distance_meters: 1415,
    duration_seconds: 1607,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 524,
        path: 'gsxwFbiobM_AvCm@lBi@bBe@vACHM`@yApE}AbF`@VHY',
        updatable_detail: {
          leg_departure_time: '2022-06-17T03:59:04-04:00',
          leg_arrival_time: '2022-06-17T04:07:48-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Subway57St7Av_E02',
            stop_id: 'Subway57St7Av',
            coordinates: {
              lat: 40.765298,
              lon: -73.980033,
            },
            name: '7th Ave & 57th St, SE corner',
          },
          alternate_exits: [
            {
              id: 'Subway57St7Av_E01',
              stop_id: 'Subway57St7Av',
              coordinates: {
                lat: 40.765365,
                lon: -73.980341,
              },
              name: '7th Ave & 57th St, SW corner',
            },
            {
              id: 'Subway57St7Av_E03',
              stop_id: 'Subway57St7Av',
              coordinates: {
                lat: 40.765796,
                lon: -73.980012,
              },
              name: '7th Ave & 57th St, NW corner',
            },
            {
              id: 'Subway57St7Av_E04',
              stop_id: 'Subway57St7Av',
              coordinates: {
                lat: 40.765639,
                lon: -73.979764,
              },
              name: '7th Ave & 57th St, NE corner',
            },
            {
              id: 'Subway57St7Av_E05',
              stop_id: 'Subway57St7Av',
              coordinates: {
                lat: 40.764258,
                lon: -73.981278,
              },
              name: '7th Ave & 55th St, SW corner',
            },
            {
              id: 'Subway57St7Av_E06',
              stop_id: 'Subway57St7Av',
              coordinates: {
                lat: 40.764057,
                lon: -73.980803,
              },
              name: '7th Ave & 55th St, SE corner',
            },
            {
              id: 'Subway57St7Av_E07',
              stop_id: 'Subway57St7Av',
              coordinates: {
                lat: 40.764377,
                lon: -73.981167,
              },
              name: '7th Ave & 55th St, NW corner',
            },
            {
              id: 'Subway57St7Av_E08',
              stop_id: 'Subway57St7Av',
              coordinates: {
                lat: 40.764179,
                lon: -73.980683,
              },
              name: '7th Ave & 55th St, NE corner',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 270,
        path: 'czxwFbjpbM??v\\vTbIfFTLTLTLTLVLVJVLXHVJXJXHXJZHXFZH~IlBpIhBNDLBNBNDNBLBNBNBNBN@LBNBN@NBL@`MjA??',
        stops: [
          {
            id: 'Subway57St7Av',
            name: '57 St - 7 Av',
            coordinates: {
              lat: 40.764664,
              lon: -73.980658,
            },
          },
          {
            id: 'Subway49St',
            name: '49 St',
            coordinates: {
              lat: 40.759901,
              lon: -73.984139,
            },
          },
          {
            id: 'SubwayTimesSq42St',
            name: 'Times Sq - 42 St',
            coordinates: {
              lat: 40.755986,
              lon: -73.986328,
            },
          },
          {
            id: 'Subway34StHeraldSq',
            name: '34 St - Herald Sq',
            coordinates: {
              lat: 40.749544,
              lon: -73.987962,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'N',
              frequency_seconds_range: [547, 547],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'Q',
              frequency_seconds_range: [547, 547],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['N'],
            },
            {
              type: 'travel_affected',
              title: 'Trains Run in Two Sections',
              description:
                "No <Q> trains between Atlantic Av-Barclays Ctr and Prospect Park. <Q> service runs in two sections: 1. Between 96 St and Atlantic Av-Barclays Ctr (<D> <N> platform) 2. Between Prospect Park and Coney Island-Stillwell Av Free shuttle buses make stops between Atlantic Av-Barclays Ctr and Prospect Park. Transfer between trains and buses at Atlantic Av-Barclays Ctr and/or Prospect Park. This service change is expected to recur weeknights through Aug 19. What's happening? Track maintenance.",
              service_ids: ['Q'],
            },
          ],
          leg_departure_time: '2022-06-17T04:08:00-04:00',
          leg_arrival_time: '2022-06-17T04:12:30-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'N',
            name: 'N',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/639d0593ccae7d82c4dd9b23376cc514e290995507bcc594579cef79/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/5826f1389687c40ecf29513ec08cdfcf84b780ca00912ef78c811dbd/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#FCCC0A',
            background_color: '#FCCC0A',
            text_color: '#FFFFFF',
          },
          {
            id: 'Q',
            name: 'Q',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/65dac62c98bfa9b27e2d96b5e8444e8d96b185f7a266cb2b29eac4b0/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/a292ad58f9d1d62e27356299564687c5760a4153cfc7f2a75c9e23cc/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#FCCC0A',
            background_color: '#FCCC0A',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: false,
        },
        direction_description: 'Downtown',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 631,
        path: 'iuuwFt{qbMHDGNJFfAr@DDDBZTi@dBu@zBkB`GK\\KZKZGPCH[`A_@lASl@IXEHCJ{AzEWt@IXK\\FD@@GTWt@Od@',
        updatable_detail: {
          leg_departure_time: '2022-06-17T04:12:30-04:00',
          leg_arrival_time: '2022-06-17T04:23:01-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Subway34StHeraldSq_E6816',
            stop_id: 'Subway34StHeraldSq',
            coordinates: {
              lat: 40.7485313,
              lon: -73.9885874,
            },
            name: '32nd St & 6th Ave',
          },
          alternate_exits: [
            {
              id: 'Subway34StHeraldSq_E01',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.749615,
                lon: -73.988159,
              },
              name: '34th St & Broadway, SW corner',
            },
            {
              id: 'Subway34StHeraldSq_E02',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.749842,
                lon: -73.9881628,
              },
              name: '34th St & Broadway, SW corner',
            },
            {
              id: 'Subway34StHeraldSq_E03',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.750088,
                lon: -73.988142,
              },
              name: '34th St & Broadway, NW corner',
            },
            {
              id: 'Subway34StHeraldSq_E04',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.74959,
                lon: -73.98762,
              },
              name: '34th St & 6th Ave, SE corner',
            },
            {
              id: 'Subway34StHeraldSq_E05',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.749891,
                lon: -73.987495,
              },
              name: '34th St & 6th Ave, NW corner',
            },
            {
              id: 'Subway34StHeraldSq_E06',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.7483174,
                lon: -73.9880779,
              },
              name: 'Broadway & 32nd St, NE corner',
            },
            {
              id: 'Subway34StHeraldSq_E07',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.7483947,
                lon: -73.9882853,
              },
              name: 'Broadway & 32nd St, NW corner, Greeley Sq',
            },
            {
              id: 'Subway34StHeraldSq_E08',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.750674,
                lon: -73.988031,
              },
              name: '35th St & Broadway, SW corner',
            },
            {
              id: 'Subway34StHeraldSq_E09',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.750271,
                lon: -73.987066,
              },
              name: '35th St & 6th Ave, SE corner',
            },
            {
              id: 'Subway34StHeraldSq_E10',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.75088,
                lon: -73.988096,
              },
              name: '35th St & Broadway, NW corner',
            },
            {
              id: 'Subway34StHeraldSq_E11',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.750647,
                lon: -73.987346,
              },
              name: '35th St & 6th Ave, NW corner',
            },
            {
              id: 'Subway34StHeraldSq_E12',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.750404,
                lon: -73.986989,
              },
              name: '35th St & 6th Ave, NE corner',
            },
            {
              id: 'Subway34StHeraldSq_E13',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.74895,
                lon: -73.988623,
              },
              name: '33rd St & 6th Ave, SW Corner',
            },
            {
              id: 'Subway34StHeraldSq_E14',
              stop_id: 'Subway34StHeraldSq',
              coordinates: {
                lat: 40.7486982,
                lon: -73.9886935,
              },
              name: '32nd St & 6th Ave, NW Corner',
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-06-17T03:59:04-04:00',
    route_arrival_time: '2022-06-17T04:23:01-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTQ1Mjc0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6Mjg3NyxcImR1cmF0aW9uXCI6MTYwNyxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDAuNzUwNTA0LC03My45OTU2MjdcIn0sXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6NTcxLFwiZHVyYXRpb25cIjo1MjQsXCJlY1wiOlwiNDAuNzY1MywtNzMuOTgwMDNcIixcImluX3N0YXRpb25cIjpcIjAvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC43NjM1NiwtNzMuOTc1MzhcIixcInRvX2V4aXRcIjpcIlN1YndheTU3U3Q3QXZfRTAyXCJ9LHtcImR1cmF0aW9uXCI6MjcwLFwiZW5kXCI6XCJTdWJ3YXkzNFN0SGVyYWxkU3FcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIk5cIixcIlFcIl0sXCJzdGFydFwiOlwiU3Vid2F5NTdTdDdBdlwiLFwic3RvcF9jb3VudFwiOjQsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1N1YndheTU3U3Q3QXZfTlFSV19kU1dcIixcIlBsYXRmb3JtX1N1YndheTM0U3RIZXJhbGRTcV9OUVJXX2RTXCJdfSx7XCJkaXN0YW5jZVwiOjg0NCxcImR1cmF0aW9uXCI6NjMxLFwiZWNcIjpcIjQwLjc1MDU0LC03My45OTU2XCIsXCJmcm9tX2V4aXRcIjpcIlN1YndheTM0U3RIZXJhbGRTcV9FNjgxNlwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQwLjc0ODUzLC03My45ODg1OVwifV0sXCJwcmljZV9wZW5jZVwiOjI3NSxcInJlZ2lvblwiOlwidXMtbnljXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImZkODMwMTgxLTA0NjUtNDNlMi1iYTgzLTc1NGJhN2ZhMDdlNVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQwLjc2Mzg0OCwtNzMuOTc1MTY3XCJ9LFwidGltZVwiOlwiMjAyMi0wNi0xN1QwMzo1OTowNC0wNDowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVzLW55YyJ9.wkLa4EMKIOKxBVPqydjZOMtpbgGYmszRYe-J_azP8aI',
  },
  {
    start: {
      coordinates: {
        lat: 40.763848,
        lon: -73.975167,
      },
    },
    end: {
      coordinates: {
        lat: 40.750504,
        lon: -73.995627,
      },
    },
    distance_meters: 1777,
    duration_seconds: 1611,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 605,
        path: 'gsxwFbiobM_AvCm@lBi@bBZV@?VNVR\\T@@VNd@ZDBh@^b@XFDXRf@Zf@\\LHHDxA`AHDNJNLp@b@j@^JFFDDBz@j@r@d@M`@RN',
        updatable_detail: {
          leg_departure_time: '2022-06-17T03:59:04-04:00',
          leg_arrival_time: '2022-06-17T04:09:09-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Subway4750StsRockefellerCtr_E03',
            stop_id: 'Subway4750StsRockefellerCtr',
            coordinates: {
              lat: 40.760502,
              lon: -73.980218,
            },
            name: '6th Ave & 51st St, SW corner',
          },
          alternate_exits: [
            {
              id: 'Subway4750StsRockefellerCtr_E01',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.759434,
                lon: -73.981001,
              },
              name: '6th Ave & 49th St, NW corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E02',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.759896,
                lon: -73.980706,
              },
              name: '6th Ave & 50th St, SW corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E04',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.759953,
                lon: -73.980117,
              },
              name: '6th Ave & 50th St, NE corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E05',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.760125,
                lon: -73.980499,
              },
              name: '6th Ave & 50th St, NW corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E06',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.759301,
                lon: -73.980594,
              },
              name: '6th Ave & 49th St, NE corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E07',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.759414,
                lon: -73.981035,
              },
              name: '6th Ave & 49th St, NW corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E08',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.758623,
                lon: -73.981566,
              },
              name: '6th Ave & 48th St, SW corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E09',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.758977,
                lon: -73.981352,
              },
              name: '6th Ave & 48-49th Sts, W corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E10',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.759105,
                lon: -73.981252,
              },
              name: '6th Ave & 48-49th Sts, W corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E11',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.757801,
                lon: -73.981788,
              },
              name: '6th Ave & 47th St, SE corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E12',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.758024,
                lon: -73.982079,
              },
              name: '6th Ave & 47th St, SW corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E13',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.757981,
                lon: -73.98154,
              },
              name: '6th Ave & 47th St, NE corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E14',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.757862,
                lon: -73.981735,
              },
              name: '6th Ave & 47th St, SE corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E15',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.758486,
                lon: -73.981158,
              },
              name: '6th Ave & 48th St, SE corner',
            },
            {
              id: 'Subway4750StsRockefellerCtr_E16',
              stop_id: 'Subway4750StsRockefellerCtr',
              coordinates: {
                lat: 40.758615,
                lon: -73.981095,
              },
              name: '6th Ave & 48th St, NE corner',
            },
          ],
          duration_seconds: 60,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 180,
        path: 'stwwFhnpbM??vZfSb[hS??',
        stops: [
          {
            id: 'Subway4750StsRockefellerCtr',
            name: '47-50 Sts - Rockefeller Ctr',
            coordinates: {
              lat: 40.758663,
              lon: -73.981329,
            },
          },
          {
            id: 'Subway42StBryantPk',
            name: '42 St - Bryant Pk',
            coordinates: {
              lat: 40.754222,
              lon: -73.984569,
            },
          },
          {
            id: 'Subway34StHeraldSq',
            name: '34 St - Herald Sq',
            coordinates: {
              lat: 40.749544,
              lon: -73.987962,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'D',
              frequency_seconds_range: [581, 581],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'F',
              frequency_seconds_range: [581, 581],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['D', 'F'],
            },
          ],
          leg_departure_time: '2022-06-17T04:20:30-04:00',
          leg_arrival_time: '2022-06-17T04:23:30-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'D',
            name: 'D',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/2642c43fd92346b05a9983dfd20b33805bcd4a1389a8a578128ed570/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/712fe7f096e6119da2ecde68fe0266d9846e1c50b1e0a95f8a5b3c99/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#FF6319',
            background_color: '#FF6319',
            text_color: '#FFFFFF',
          },
          {
            id: 'F',
            name: 'F',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/c654cbafc2c372d289919441b308e7b7c9633f479194632eef157cb0/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/ae9cf55ae400de946c29343b2a0d05b03a4111a7faadf718f070f4f3/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#FF6319',
            background_color: '#FF6319',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: false,
        },
        direction_description: 'Downtown & Brooklyn',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 633,
        path: 'iuuwFn{qbMJFABGNJFfAr@DDDBZTi@dBu@zBkB`GK\\KZKZGPCH[`A_@lASl@IXEHCJ{AzEWt@IXK\\FD@@GTWt@Od@',
        updatable_detail: {
          leg_departure_time: '2022-06-17T04:23:30-04:00',
          leg_arrival_time: '2022-06-17T04:34:03-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'PATH33St_E3474',
            stop_id: 'PATH33St',
            coordinates: {
              lat: 40.7485305,
              lon: -73.98856,
            },
            name: '32 St & 6 Avenue',
          },
          alternate_exits: [
            {
              id: 'PATH33St_E07',
              stop_id: 'PATH33St',
              coordinates: {
                lat: 40.7483795,
                lon: -73.9882585,
              },
              name: '32 St & Broadway NW corner, Greeley Square',
            },
            {
              id: 'PATH33St_E14',
              stop_id: 'PATH33St',
              coordinates: {
                lat: 40.748746,
                lon: -73.988774,
              },
              name: '6 Avenue 32-33 Sts ',
            },
            {
              id: 'PATH33St_E7821',
              stop_id: 'PATH33St',
              coordinates: {
                lat: 40.7483233,
                lon: -73.988088,
              },
              name: '32 Street & Broadway NE Corner ',
            },
            {
              id: 'PATH33St_E9180',
              stop_id: 'PATH33St',
              coordinates: {
                lat: 40.7498396,
                lon: -73.9881684,
              },
              name: '34th St & Broadway/6th Ave, SW corner',
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-06-17T03:59:04-04:00',
    route_arrival_time: '2022-06-17T04:34:03-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTQ1Mjc0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6Mjg3NyxcImR1cmF0aW9uXCI6MTYxMSxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDAuNzUwNTA0LC03My45OTU2MjdcIn0sXCJqcl9pbmRleFwiOjMsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6OTExLFwiZHVyYXRpb25cIjo2MDUsXCJlY1wiOlwiNDAuNzYwNSwtNzMuOTgwMjJcIixcImluX3N0YXRpb25cIjpcIjAvNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC43NjM1NiwtNzMuOTc1MzhcIixcInRvX2V4aXRcIjpcIlN1YndheTQ3NTBTdHNSb2NrZWZlbGxlckN0cl9FMDNcIn0se1wiZHVyYXRpb25cIjoxODAsXCJlbmRcIjpcIlN1YndheTM0U3RIZXJhbGRTcVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiRFwiLFwiRlwiXSxcInN0YXJ0XCI6XCJTdWJ3YXk0NzUwU3RzUm9ja2VmZWxsZXJDdHJcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXk0NzUwU3RzUm9ja2VmZWxsZXJDdHJfQkRGTV9kU1dcIixcIlBsYXRmb3JtX1N1YndheTM0U3RIZXJhbGRTcV9CREZNX2RTV1wiXX0se1wiZGlzdGFuY2VcIjo4NjYsXCJkdXJhdGlvblwiOjYzMyxcImVjXCI6XCI0MC43NTA1NCwtNzMuOTk1NlwiLFwiZnJvbV9leGl0XCI6XCJQQVRIMzNTdF9FMzQ3NFwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQwLjc0ODUzLC03My45ODg1NlwifV0sXCJwcmljZV9wZW5jZVwiOjI3NSxcInJlZ2lvblwiOlwidXMtbnljXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImZkODMwMTgxLTA0NjUtNDNlMi1iYTgzLTc1NGJhN2ZhMDdlNVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQwLjc2Mzg0OCwtNzMuOTc1MTY3XCJ9LFwidGltZVwiOlwiMjAyMi0wNi0xN1QwMzo1OTowNC0wNDowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVzLW55YyJ9.z9OBIGJrLAJR-GNB9SNn-EkYhi4IIsU1EsdZQbFJ_Fw',
  },
  {
    start: {
      coordinates: {
        lat: 40.763848,
        lon: -73.975167,
      },
    },
    end: {
      coordinates: {
        lat: 40.750504,
        lon: -73.995627,
      },
    },
    distance_meters: 1247,
    duration_seconds: 1677,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 692,
        path: 'gsxwFbiobM_AvCm@lBi@bBe@vACHM`@yApE}AbFSn@CDIXCFa@nAgAjDADIVGRYz@M`@M\\QM',
        updatable_detail: {
          leg_departure_time: '2022-06-17T03:59:04-04:00',
          leg_arrival_time: '2022-06-17T04:10:36-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Subway59StColumbusCircle_E11',
            stop_id: 'Subway59StColumbusCircle',
            coordinates: {
              lat: 40.7667006,
              lon: -73.982545,
            },
            name: '8th Ave & 57th St, NE corner',
          },
          alternate_exits: [
            {
              id: 'Subway59StColumbusCircle_E01',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.768777,
                lon: -73.982106,
              },
              name: 'Broadway & 60th St, SW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E02',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.769167,
                lon: -73.98232,
              },
              name: 'Columbus Circle & 59th St, SE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E03',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.769402,
                lon: -73.982357,
              },
              name: 'Broadway & 60th St, SW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E04',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.767654,
                lon: -73.981423,
              },
              name: 'Columbus Circle & 59th St, SE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E05',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.767642,
                lon: -73.981235,
              },
              name: 'Columbus Circle & 59th St, SE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E10',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.766936,
                lon: -73.98292,
              },
              name: '8th Ave & 57th St, NW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E12',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.7665097,
                lon: -73.982695,
              },
              name: '8th Ave & 57th St, SE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E13',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.7664893,
                lon: -73.983253,
              },
              name: '8th Ave & 57th St, SW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E14',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.7667616,
                lon: -73.983365,
              },
              name: '8th Ave & 57th St, SW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E4962',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.767659,
                lon: -73.982542,
              },
              name: '8th Ave & 58th St, NW corner',
            },
            {
              id: 'Subway59StColumbusCircle_E4965',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.768649,
                lon: -73.981184,
              },
              name: 'Central Park West & 60th St, NE corner',
            },
            {
              id: 'Subway59StColumbusCircle_E4966',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.768719,
                lon: -73.981788,
              },
              name: 'Central Park West & 60th St, West corner',
            },
            {
              id: 'Subway59StColumbusCircle_E4969',
              stop_id: 'Subway59StColumbusCircle',
              coordinates: {
                lat: 40.767367,
                lon: -73.982137,
              },
              name: '8th Ave & 58th St, NE corner',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 270,
        path: '{pywFzppbM??tS~MbIjFtDbCd_@nVj^xU??',
        stops: [
          {
            id: 'Subway59StColumbusCircle',
            name: '59 St - Columbus Circle',
            coordinates: {
              lat: 40.768247,
              lon: -73.981929,
            },
          },
          {
            id: 'Subway50StCE',
            name: '50 St',
            coordinates: {
              lat: 40.762456,
              lon: -73.985984,
            },
          },
          {
            id: 'Subway42StPortAuthorityBusTerminal',
            name: '42 St - Port Authority Bus Terminal',
            coordinates: {
              lat: 40.757308,
              lon: -73.989735,
            },
          },
          {
            id: 'Subway34StPennStationACE',
            name: '34 St - Penn Station',
            coordinates: {
              lat: 40.752287,
              lon: -73.993391,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'A',
              frequency_seconds_range: [1178, 1178],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'C',
              frequency_seconds_range: [1178, 1178],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['A'],
            },
            {
              type: 'travel_affected',
              title: 'Service Change',
              description: '<C> trains do not run overnight.',
              service_ids: ['C'],
            },
          ],
          leg_departure_time: '2022-06-17T04:19:00-04:00',
          leg_arrival_time: '2022-06-17T04:23:30-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'A',
            name: 'A',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/54d940e48b214869b4c91b540b37c63bfc8902d767e29a153ba3a582/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/acca125f2d43f82c22f8e3ec6ffe19c2d8335c2d2dd917ba40d4b51a/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#2850AD',
            background_color: '#2850AD',
            text_color: '#FFFFFF',
          },
          {
            id: 'C',
            name: 'C',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/51f9760b076229eeb2a3db68f1dc124b5f0a49b9bf5496706053d657/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/a448425ead1fed740dadfeeabcc9293f24762dc97969329cbfd246b3/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#2850AD',
            background_color: '#2850AD',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: false,
        },
        direction_description: 'Downtown',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 323,
        path: 'qfvwFx|rbMO`@FDvA~@@@EHADADADx@h@LJ^TBBHDFD@@GTWt@Od@',
        updatable_detail: {
          leg_departure_time: '2022-06-17T04:23:30-04:00',
          leg_arrival_time: '2022-06-17T04:28:53-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Subway34StPennStationACE_E12',
            stop_id: 'Subway34StPennStationACE',
            coordinates: {
              lat: 40.751291,
              lon: -73.993887,
            },
            name: '8th Ave & 33rd St, SE corner',
          },
          alternate_exits: [
            {
              id: 'Subway34StPennStationACE_E02',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.75202,
                lon: -73.993352,
              },
              name: '8th Ave & 34th St, SE corner',
            },
            {
              id: 'Subway34StPennStationACE_E03',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.752161,
                lon: -73.993109,
              },
              name: '8th Ave & 34th St, NE corner',
            },
            {
              id: 'Subway34StPennStationACE_E04',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.752689,
                lon: -73.992742,
              },
              name: '8th Ave & 35th St, SE corner',
            },
            {
              id: 'Subway34StPennStationACE_E05',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.752796,
                lon: -73.992669,
              },
              name: '8th Ave & 35th St, NE corner',
            },
            {
              id: 'Subway34StPennStationACE_E06',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.752766,
                lon: -73.992596,
              },
              name: '8th Ave & 35th St, NE corner',
            },
            {
              id: 'Subway34StPennStationACE_E07',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.752877,
                lon: -73.993244,
              },
              name: '8th Ave & 35th St, SW corner',
            },
            {
              id: 'Subway34StPennStationACE_E08',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.753053,
                lon: -73.993256,
              },
              name: '8th Ave & 35th St, NW corner',
            },
            {
              id: 'Subway34StPennStationACE_E09',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.753032,
                lon: -73.993188,
              },
              name: '8th Ave & 35th St, NW corner',
            },
            {
              id: 'Subway34StPennStationACE_E10',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.752178,
                lon: -73.993701,
              },
              name: '8th Ave & 34th St, SW corner',
            },
            {
              id: 'Subway34StPennStationACE_E11',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.752427,
                lon: -73.993679,
              },
              name: '8th Ave & 34th St, NW corner',
            },
            {
              id: 'Subway34StPennStationACE_E13',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.751432,
                lon: -73.993538,
              },
              name: '8th Ave & 33rd St, NE corner',
            },
            {
              id: 'Subway34StPennStationACE_E14',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.751677,
                lon: -73.994107,
              },
              name: '8th Ave & 33rd St, NW corner',
            },
            {
              id: 'Subway34StPennStationACE_E15',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.751561,
                lon: -73.994243,
              },
              name: '8th Ave & 33rd St, SW corner',
            },
            {
              id: 'Subway34StPennStationACE_E16',
              stop_id: 'Subway34StPennStationACE',
              coordinates: {
                lat: 40.751539,
                lon: -73.994181,
              },
              name: '8th Ave & 33rd St, SW corner',
            },
          ],
          duration_seconds: 150,
        },
      },
    ],
    route_departure_time: '2022-06-17T03:59:04-04:00',
    route_arrival_time: '2022-06-17T04:28:53-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTQ1Mjc0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6Mjg3NyxcImR1cmF0aW9uXCI6MTY3NyxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDAuNzUwNTA0LC03My45OTU2MjdcIn0sXCJqcl9pbmRleFwiOjQsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6ODk5LFwiZHVyYXRpb25cIjo2OTIsXCJlY1wiOlwiNDAuNzY2NywtNzMuOTgyNTRcIixcImluX3N0YXRpb25cIjpcIjAvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC43NjM1NiwtNzMuOTc1MzhcIixcInRvX2V4aXRcIjpcIlN1YndheTU5U3RDb2x1bWJ1c0NpcmNsZV9FMTFcIn0se1wiZHVyYXRpb25cIjoyNzAsXCJlbmRcIjpcIlN1YndheTM0U3RQZW5uU3RhdGlvbkFDRVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQVwiLFwiQ1wiXSxcInN0YXJ0XCI6XCJTdWJ3YXk1OVN0Q29sdW1idXNDaXJjbGVcIixcInN0b3BfY291bnRcIjo0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXk1OVN0Q29sdW1idXNDaXJjbGVfQUJDRF9kU1wiLFwiUGxhdGZvcm1fU3Vid2F5MzRTdFBlbm5BQ0VfQV9kU1dcIl19LHtcImRpc3RhbmNlXCI6MzQ4LFwiZHVyYXRpb25cIjozMjMsXCJlY1wiOlwiNDAuNzUwNTQsLTczLjk5NTZcIixcImZyb21fZXhpdFwiOlwiU3Vid2F5MzRTdFBlbm5TdGF0aW9uQUNFX0UxMlwiLFwiaW5fc3RhdGlvblwiOlwiMi8xNTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC43NTEyOSwtNzMuOTkzODlcIn1dLFwicHJpY2VfcGVuY2VcIjoyNzUsXCJyZWdpb25cIjpcInVzLW55Y1wiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJmZDgzMDE4MS0wNDY1LTQzZTItYmE4My03NTRiYTdmYTA3ZTVcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0MC43NjM4NDgsLTczLjk3NTE2N1wifSxcInRpbWVcIjpcIjIwMjItMDYtMTdUMDM6NTk6MDQtMDQ6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1cy1ueWMifQ.op7C8PNXGrZFDSDK8KzZRk6GkWSt8_UrhzDa-0ZkRUA',
  },
] as Route[]
