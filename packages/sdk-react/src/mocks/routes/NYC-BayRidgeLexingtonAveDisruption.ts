import { Route } from '@citymapper/api/@types'

export default [
  {
    start: {
      coordinates: {
        lat: 40.617261,
        lon: -74.03204,
      },
    },
    end: {
      coordinates: {
        lat: 40.762375,
        lon: -73.968511,
      },
    },
    distance_meters: 507,
    duration_seconds: 3476,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 232,
        path: '_a|vFbkzbML]Ri@FK|@}BJYJDl@P`@LVHD@JBCZEN??JH',
        updatable_detail: {
          leg_departure_time: '2022-07-13T06:32:20-04:00',
          leg_arrival_time: '2022-07-13T06:36:12-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'SubwayBayRidge95St_E01',
            stop_id: 'SubwayBayRidge95St',
            coordinates: {
              lat: 40.616021,
              lon: -74.031383,
            },
            name: '4th Ave & 95th St, SW corner',
          },
          alternate_exits: [
            {
              id: 'SubwayBayRidge95St_E02',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.615893,
                lon: -74.03086,
              },
              name: '5th Ave & 95th St, NE corner',
            },
            {
              id: 'SubwayBayRidge95St_E03',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.616189,
                lon: -74.031234,
              },
              name: '4th Ave & 95th St, NW corner',
            },
            {
              id: 'SubwayBayRidge95St_E04',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.617587,
                lon: -74.030696,
              },
              name: '4th Ave & 93th St, SW corner',
            },
            {
              id: 'SubwayBayRidge95St_E05',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.617363,
                lon: -74.030404,
              },
              name: '4th Ave & 93th St, NE corner',
            },
          ],
          duration_seconds: 60,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1320,
        path: '{|{vF~czbM??}d@oNak@aQu_@iLeHyByAs@q@m@mYmZcVaWeWeXye@ig@y_@ca@k^s_@g@g@u_@iZy_@kZsFcDuf@{Y??',
        stops: [
          {
            id: 'SubwayBayRidge95St',
            name: 'Bay Ridge - 95 St',
            coordinates: {
              lat: 40.616622,
              lon: -74.030876,
            },
          },
          {
            id: 'Subway86StR',
            name: '86 St',
            coordinates: {
              lat: 40.622687,
              lon: -74.028398,
            },
          },
          {
            id: 'Subway77StR',
            name: '77 St',
            coordinates: {
              lat: 40.629742,
              lon: -74.02551,
            },
          },
          {
            id: 'SubwayBayRidgeAv',
            name: 'Bay Ridge Av',
            coordinates: {
              lat: 40.634967,
              lon: -74.023377,
            },
          },
          {
            id: 'Subway59StNR',
            name: '59 St',
            coordinates: {
              lat: 40.641362,
              lon: -74.017881,
            },
          },
          {
            id: 'Subway53St',
            name: '53 St',
            coordinates: {
              lat: 40.645069,
              lon: -74.014034,
            },
          },
          {
            id: 'Subway45St',
            name: '45 St',
            coordinates: {
              lat: 40.648939,
              lon: -74.010006,
            },
          },
          {
            id: 'Subway36StDNR',
            name: '36 St',
            coordinates: {
              lat: 40.655144,
              lon: -74.003549,
            },
          },
          {
            id: 'Subway25St',
            name: '25 St',
            coordinates: {
              lat: 40.660397,
              lon: -73.998091,
            },
          },
          {
            id: 'SubwayProspectAvR',
            name: 'Prospect Av',
            coordinates: {
              lat: 40.665414,
              lon: -73.992872,
            },
          },
          {
            id: 'Subway4Av9St',
            name: '4 Av - 9 St',
            coordinates: {
              lat: 40.670272,
              lon: -73.989779,
            },
          },
          {
            id: 'SubwayUnionSt',
            name: 'Union St',
            coordinates: {
              lat: 40.677316,
              lon: -73.98311,
            },
          },
          {
            id: 'SubwayAtlanticAvBQ2345',
            name: 'Atlantic Av - Barclays Ctr',
            coordinates: {
              lat: 40.684359,
              lon: -73.977666,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'R',
              frequency_seconds_range: [403, 403],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Service Change',
              description:
                "You may wait longer for a northbound <R> train. We're running as much service as we can with the train crews we have available.",
              service_ids: ['R'],
            },
          ],
          leg_departure_time: '2022-07-13T06:44:00-04:00',
          leg_arrival_time: '2022-07-13T07:06:00-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'R',
            name: 'R',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/aaa556df8e4f1b291f9d2a8cb4517c6b5e8c250841b669974ff70ba9/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/72c02c88e6d8b48e755a3d43ad8038e1fca3bfcfb35bb2cf7336e3ba/d324a6fb/@2x.png',
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
          middle: true,
          back: false,
        },
        direction_description: 'Manhattan',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 150,
        path: '}_iwFp~obMiCcF????????',
        updatable_detail: {
          leg_departure_time: '2022-07-13T07:06:00-04:00',
          leg_arrival_time: '2022-07-13T07:08:30-04:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1440,
        path: 'gdiwFlwobM??iWpPeBfAgT|q@gBpDEJgHr_A{Gp]gAnDse@lq@sB|AkBP{Dw@}Ak@]OmAo@sMoKGG}AyAiAyAiEoJeDcGo@kAiJaMg@uAgByBEEmCsB}AcA}FUg@Qah@ac@{@e@_EgAcEmDsPoLwJeI_Aq@g@g@wA}Be@e@o@]YGgP_CaCEcBRcAJ_AWcc@_Y{`@uWc]gUg@m@k@yECQ}@gFm@k@y~@mm@@E',
        stops: [
          {
            id: 'SubwayAtlanticAvBQ2345',
            name: 'Atlantic Av - Barclays Ctr',
            coordinates: {
              lat: 40.684359,
              lon: -73.977666,
            },
          },
          {
            id: 'SubwayNevinsSt',
            name: 'Nevins St',
            coordinates: {
              lat: 40.688246,
              lon: -73.980492,
            },
          },
          {
            id: 'SubwayBoroughHall',
            name: 'Borough Hall',
            coordinates: {
              lat: 40.693219,
              lon: -73.989998,
            },
          },
          {
            id: 'SubwayBowlingGreen',
            name: 'Bowling Green',
            coordinates: {
              lat: 40.704817,
              lon: -74.014065,
            },
          },
          {
            id: 'SubwayWallSt45',
            name: 'Wall St',
            coordinates: {
              lat: 40.707557,
              lon: -74.011862,
            },
          },
          {
            id: 'SubwayFultonStACJZ2345',
            name: 'Fulton St',
            coordinates: {
              lat: 40.710274,
              lon: -74.007778,
            },
          },
          {
            id: 'SubwayBrooklynBridgeCityHall',
            name: 'Brooklyn Bridge - City Hall',
            coordinates: {
              lat: 40.713065,
              lon: -74.004131,
            },
          },
          {
            id: 'Subway14StUnionSq',
            name: '14 St - Union Sq',
            coordinates: {
              lat: 40.734669,
              lon: -73.989956,
            },
          },
          {
            id: 'SubwayGrandCentral42St',
            name: 'Grand Central - 42 St',
            coordinates: {
              lat: 40.751776,
              lon: -73.976902,
            },
          },
          {
            id: 'Subway59St456',
            name: 'Lexington Av/59 St',
            coordinates: {
              lat: 40.762729,
              lon: -73.967441,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: '4',
              frequency_seconds_range: [177, 177],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: '5',
              frequency_seconds_range: [177, 177],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['4'],
            },
            {
              type: 'travel_affected',
              title: 'Delays',
              description:
                '<5> trains are running with delays in both directions after crews addressed a signal problem at Eastchester-Dyre Av. Southbound <5> trains have resumed running on the local track from Eastchester-Dyre Av to E 180 St.',
              service_ids: ['5'],
            },
          ],
          leg_departure_time: '2022-07-13T07:10:30-04:00',
          leg_arrival_time: '2022-07-13T07:34:30-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: '4',
            name: '4',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/c9bf161a29063cea7e4150372a60acdbfe352ad791ee79e9c886e7ab/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/cb99747274bb7dfd50c5bf1451b0a81c2911fda6d0d9617ac5b340cd/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#00933C',
            background_color: '#00933C',
            text_color: '#FFFFFF',
          },
          {
            id: '5',
            name: '5',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/149660ac2ad12f571875ad958f809724b966a544cebabd205229fe34/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/daef45b412a4bbf31640e7a7dc883234b4002e2caa7c0f273645ec38/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#00933C',
            background_color: '#00933C',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: true,
        },
        direction_description: 'Manhattan',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 112,
        path: 'wjxwFn}mbMSMABM^',
        updatable_detail: {
          leg_departure_time: '2022-07-13T07:34:30-04:00',
          leg_arrival_time: '2022-07-13T07:36:22-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Subway59St456_E4017',
            stop_id: 'Subway59St456',
            coordinates: {
              lat: 40.7622009,
              lon: -73.9684042,
            },
            name: 'E 59th St & Lex Ave SW Corner',
          },
          alternate_exits: [
            {
              id: 'Subway59St456_E01',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762092,
                lon: -73.96634,
              },
              name: 'E 60th St & 3rd Av SW Corner',
            },
            {
              id: 'Subway59St456_E02',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762353,
                lon: -73.966155,
              },
              name: 'E 60th St & 3rd Av NW Corner',
            },
            {
              id: 'Subway59St456_E03',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.761996,
                lon: -73.966105,
              },
              name: 'E 60th St & 3rd Av SE Corner',
            },
            {
              id: 'Subway59St456_E04',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762255,
                lon: -73.965918,
              },
              name: 'E 60th St & 3rd Av NE Corner',
            },
            {
              id: 'Subway59St456_E4016',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7624285,
                lon: -73.9682594,
              },
              name: 'E 59th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4018',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7620709,
                lon: -73.9680394,
              },
              name: 'E 59th St & Lex Ave SE Corner',
            },
            {
              id: 'Subway59St456_E4019',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7629608,
                lon: -73.967794,
              },
              name: 'E 60th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4020',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628856,
                lon: -73.9676009,
              },
              name: 'E 60th St & Lex Ave NE Corner',
            },
            {
              id: 'Subway59St456_E4021',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628348,
                lon: -73.9679522,
              },
              name: 'E 60th St & Lex Ave SW Corner',
            },
            {
              id: 'Subway59St456_E5032',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.76266,
                lon: -73.967625,
              },
              name: 'Lexington Ave & 60th St, SE corner',
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-13T06:32:20-04:00',
    route_arrival_time: '2022-07-13T07:36:22-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwODM0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjEwNTksXCJkdXJhdGlvblwiOjM0NzYsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQwLjc2MjM3NSwtNzMuOTY4NTExXCJ9LFwiZW52aXJvbm1lbnRcIjpcInN0YWdpbmdcIixcImpyX2luZGV4XCI6MCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjozMDMsXCJkdXJhdGlvblwiOjIzMixcImVjXCI6XCI0MC42MTYwMiwtNzQuMDMxMzhcIixcImluX3N0YXRpb25cIjpcIjAvNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC42MTcyOCwtNzQuMDMyMDJcIixcInRvX2V4aXRcIjpcIlN1YndheUJheVJpZGdlOTVTdF9FMDFcIn0se1wiZHVyYXRpb25cIjoxMzIwLFwiZW5kXCI6XCJTdWJ3YXlBdGxhbnRpY0F2QlEyMzQ1XCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJSXCJdLFwic3RhcnRcIjpcIlN1YndheUJheVJpZGdlOTVTdFwiLFwic3RvcF9jb3VudFwiOjEzLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXlCYXlSaWRnZTk1U3RfUl9kTlwiLFwiUGxhdGZvcm1fU3Vid2F5QXRsYW50aWNBdkJRMjM0NV9OUldfZE5cIl19LHtcImRpc3RhbmNlXCI6MTIzLFwiZHVyYXRpb25cIjoxNTAsXCJlY1wiOlwiNDAuNjg0MzYsLTczLjk3NzY3XCIsXCJpbl9zdGF0aW9uXCI6XCIxLzE1MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQwLjY4MzY3LC03My45Nzg4MVwifSx7XCJkdXJhdGlvblwiOjE0NDAsXCJlbmRcIjpcIlN1YndheTU5U3Q0NTZcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIjRcIixcIjVcIl0sXCJzdGFydFwiOlwiU3Vid2F5QXRsYW50aWNBdkJRMjM0NVwiLFwic3RvcF9jb3VudFwiOjEwLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXlBdGxhbnRpY0F2QlEyMzQ1XzQ1X2ROV1wiLFwiUGxhdGZvcm1fU3Vid2F5NTlTdDQ1Nl80NV9kTkVcIl19LHtcImRpc3RhbmNlXCI6ODEsXCJkdXJhdGlvblwiOjExMixcImVjXCI6XCI0MC43NjIzOCwtNzMuOTY4NTFcIixcImZyb21fZXhpdFwiOlwiU3Vid2F5NTlTdDQ1Nl9FNDAxN1wiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQwLjc2MjIsLTczLjk2ODRcIn1dLFwicHJpY2VfcGVuY2VcIjoyNzUsXCJyZWdpb25cIjpcInVzLW55Y1wiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCIyZmEyMmUzYS0zY2JiLTQ2NmQtOTYxYi0yYTNiNDY2ZTFmMDVcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0MC42MTcyNjEsLTc0LjAzMjA0XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0xM1QwNjozMjoyMC0wNDowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVzLW55YyJ9.9JXf2anxvz40NGI8pbnH88DIt88_p0J2r8TSOsbhAMY',
  },
  {
    start: {
      coordinates: {
        lat: 40.617261,
        lon: -74.03204,
      },
    },
    end: {
      coordinates: {
        lat: 40.762375,
        lon: -73.968511,
      },
    },
    distance_meters: 441,
    duration_seconds: 3507,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 232,
        path: '_a|vFbkzbML]Ri@FK|@}BJYJDl@P`@LVHD@JBCZEN??JH',
        updatable_detail: {
          leg_departure_time: '2022-07-13T06:32:20-04:00',
          leg_arrival_time: '2022-07-13T06:36:12-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'SubwayBayRidge95St_E01',
            stop_id: 'SubwayBayRidge95St',
            coordinates: {
              lat: 40.616021,
              lon: -74.031383,
            },
            name: '4th Ave & 95th St, SW corner',
          },
          alternate_exits: [
            {
              id: 'SubwayBayRidge95St_E02',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.615893,
                lon: -74.03086,
              },
              name: '5th Ave & 95th St, NE corner',
            },
            {
              id: 'SubwayBayRidge95St_E03',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.616189,
                lon: -74.031234,
              },
              name: '4th Ave & 95th St, NW corner',
            },
            {
              id: 'SubwayBayRidge95St_E04',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.617587,
                lon: -74.030696,
              },
              name: '4th Ave & 93th St, SW corner',
            },
            {
              id: 'SubwayBayRidge95St_E05',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.617363,
                lon: -74.030404,
              },
              name: '4th Ave & 93th St, NE corner',
            },
          ],
          duration_seconds: 60,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 450,
        path: '{|{vF~czbM??}d@oNak@aQu_@iLeHyByAs@q@m@mYmZ@A',
        stops: [
          {
            id: 'SubwayBayRidge95St',
            name: 'Bay Ridge - 95 St',
            coordinates: {
              lat: 40.616622,
              lon: -74.030876,
            },
          },
          {
            id: 'Subway86StR',
            name: '86 St',
            coordinates: {
              lat: 40.622687,
              lon: -74.028398,
            },
          },
          {
            id: 'Subway77StR',
            name: '77 St',
            coordinates: {
              lat: 40.629742,
              lon: -74.02551,
            },
          },
          {
            id: 'SubwayBayRidgeAv',
            name: 'Bay Ridge Av',
            coordinates: {
              lat: 40.634967,
              lon: -74.023377,
            },
          },
          {
            id: 'Subway59StNR',
            name: '59 St',
            coordinates: {
              lat: 40.641362,
              lon: -74.017881,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'R',
              frequency_seconds_range: [403, 403],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Service Change',
              description:
                "You may wait longer for a northbound <R> train. We're running as much service as we can with the train crews we have available.",
              service_ids: ['R'],
            },
          ],
          leg_departure_time: '2022-07-13T06:44:00-04:00',
          leg_arrival_time: '2022-07-13T06:51:30-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'R',
            name: 'R',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/aaa556df8e4f1b291f9d2a8cb4517c6b5e8c250841b669974ff70ba9/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/72c02c88e6d8b48e755a3d43ad8038e1fca3bfcfb35bb2cf7336e3ba/d324a6fb/@2x.png',
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
        direction_description: 'Manhattan',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2370,
        path: 'ow`wFvrwbM??eVaWeWcX{[c]{HgI{_@ca@i^s_@GEEGGEEEGEEEGGEEEEGEEEGEEEGEEEw]sXy]uXIGKIIGKGIGIIKEIGIGIEIGIEIGIEGEyCeBuf@{YyDyBGEGEICGCGCGCICGAGCGAI?GAGAI?G?yL~@I@I@GBIBIBGDGDIDGFEFGFGHEHGJEHcClIENEJGLEJGJGHIJGFIHIFIFIFKDKDKDuFxBwD~AKFKFKFIHIHGJGJGLELCNEPANCRAR?RShOQtMA\\AZCZEXEVGTGTIRKPKNMNOLOJQHQHOFOFMHMHKJKJKJILILGNINENGPEPCRw@dEqHta@ETCTGVETEVGVEVGVGVGXGXGVGZGXIXoVlcAkBbGMXKXMVOTMRORQPQNQNQLSJUHSHUFWF_G`AcBVMBK@MBO@M@OBQ@OBS@QBS@S@SBU@UBI?G@G@G@G@IBG@GBGBGDGBGDGDGDEDq@h@KHKHMFKDKDKBI@K@KAIAKAICIEIGIIeA_ACCAACCCAACCACCAACCCACCCAACCACCEEGCGEEEGCGEGE}RgLmDoBIIGIGIEIEICKAKAM?M?K@OBMBOBOFOFSDODOBOBO@O@M?M?OAKCMAMEKEKGKGK_D_CAAAAA?AAAA?AAAAAAAAA?AAAAAAA?AAAAAAA??AAAAAA?AAAAAA?AAAA?AA?oB}AqCyBA?AA??AAA??AA?AAA??AA?A?AAA???AAA?A?AAA??AA?A?AA??AAA??AA?AAa`@}ZoAcALHLHLDLDLBJ@J?L?JCHCJGJGHIJKHKzBmD{BlDIJKJIHKFKFIBKBM?K?KAMCMEMEMIMIoZiVod@u^_F}DGEGEGEGEGEGCIEGCGCICGAGCIAGAIAyU}CqIgAIAGAGAIAGAICGAIAIAIAIAIAICIAIAiIwAIAIAKAICIAGAKAIAGAIAI?IAIAIAI?wCWkG]K?KAIAK?IAIAK?GAKAGAI?IAGAIAGAaLmAoXsCaMkAMAOCOAOCMCOAOCOCOCMCOCOEOCMCOEqIiB_JmB[IYG[IYKYIYKWKYIWMWKWMUMUMUMUMcIgFw\\wT}HgFOKMKKMIMGMGOCOCOAOAQ@Q@QBSDSFStIkX@E@C@C@E?C@E?C@E?C?E?C@E?CAE?CGcBK}B?E?C?C?E?C@C?E@C?E@C?E@C@E@E@CjLy^??',
        stops: [
          {
            id: 'Subway59StNR',
            name: '59 St',
            coordinates: {
              lat: 40.641362,
              lon: -74.017881,
            },
          },
          {
            id: 'Subway36StDNR',
            name: '36 St',
            coordinates: {
              lat: 40.655144,
              lon: -74.003549,
            },
          },
          {
            id: 'SubwayAtlanticAvBQ2345',
            name: 'Atlantic Av - Barclays Ctr',
            coordinates: {
              lat: 40.684359,
              lon: -73.977666,
            },
          },
          {
            id: 'SubwayCanalStJNQRZ6',
            name: 'Canal St',
            coordinates: {
              lat: 40.718803,
              lon: -74.000193,
            },
          },
          {
            id: 'Subway14StUnionSq',
            name: '14 St - Union Sq',
            coordinates: {
              lat: 40.734669,
              lon: -73.989956,
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
          {
            id: 'SubwayTimesSq42St',
            name: 'Times Sq - 42 St',
            coordinates: {
              lat: 40.755986,
              lon: -73.986328,
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
            id: 'Subway57St7Av',
            name: '57 St - 7 Av',
            coordinates: {
              lat: 40.764664,
              lon: -73.980658,
            },
          },
          {
            id: 'Subway5Av59St',
            name: '5 Av/59 St',
            coordinates: {
              lat: 40.764811,
              lon: -73.973347,
            },
          },
          {
            id: 'Subway59St456',
            name: 'Lexington Av/59 St',
            coordinates: {
              lat: 40.762729,
              lon: -73.967441,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'N',
              frequency_seconds_range: [418, 418],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['N'],
            },
          ],
          leg_departure_time: '2022-07-13T06:54:00-04:00',
          leg_arrival_time: '2022-07-13T07:33:30-04:00',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/639d0593ccae7d82c4dd9b23376cc514e290995507bcc594579cef79/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/5826f1389687c40ecf29513ec08cdfcf84b780ca00912ef78c811dbd/d324a6fb/@2x.png',
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
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Manhattan',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 112,
        path: 'wjxwFn}mbMSMABM^',
        updatable_detail: {
          leg_departure_time: '2022-07-13T07:33:30-04:00',
          leg_arrival_time: '2022-07-13T07:35:22-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Subway59St456_E4017',
            stop_id: 'Subway59St456',
            coordinates: {
              lat: 40.7622009,
              lon: -73.9684042,
            },
            name: 'E 59th St & Lex Ave SW Corner',
          },
          alternate_exits: [
            {
              id: 'Subway59St456_E01',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762092,
                lon: -73.96634,
              },
              name: 'E 60th St & 3rd Av SW Corner',
            },
            {
              id: 'Subway59St456_E02',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762353,
                lon: -73.966155,
              },
              name: 'E 60th St & 3rd Av NW Corner',
            },
            {
              id: 'Subway59St456_E03',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.761996,
                lon: -73.966105,
              },
              name: 'E 60th St & 3rd Av SE Corner',
            },
            {
              id: 'Subway59St456_E04',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762255,
                lon: -73.965918,
              },
              name: 'E 60th St & 3rd Av NE Corner',
            },
            {
              id: 'Subway59St456_E4016',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7624285,
                lon: -73.9682594,
              },
              name: 'E 59th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4018',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7620709,
                lon: -73.9680394,
              },
              name: 'E 59th St & Lex Ave SE Corner',
            },
            {
              id: 'Subway59St456_E4019',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7629608,
                lon: -73.967794,
              },
              name: 'E 60th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4020',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628856,
                lon: -73.9676009,
              },
              name: 'E 60th St & Lex Ave NE Corner',
            },
            {
              id: 'Subway59St456_E4021',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628348,
                lon: -73.9679522,
              },
              name: 'E 60th St & Lex Ave SW Corner',
            },
            {
              id: 'Subway59St456_E5032',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.76266,
                lon: -73.967625,
              },
              name: 'Lexington Ave & 60th St, SE corner',
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-13T06:32:20-04:00',
    route_arrival_time: '2022-07-13T07:35:22-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwODM0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjEwNTksXCJkdXJhdGlvblwiOjM1MDcsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQwLjc2MjM3NSwtNzMuOTY4NTExXCJ9LFwiZW52aXJvbm1lbnRcIjpcInN0YWdpbmdcIixcImpyX2luZGV4XCI6MSxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjozMDMsXCJkdXJhdGlvblwiOjIzMixcImVjXCI6XCI0MC42MTYwMiwtNzQuMDMxMzhcIixcImluX3N0YXRpb25cIjpcIjAvNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC42MTcyOCwtNzQuMDMyMDJcIixcInRvX2V4aXRcIjpcIlN1YndheUJheVJpZGdlOTVTdF9FMDFcIn0se1wiZHVyYXRpb25cIjo0NTAsXCJlbmRcIjpcIlN1YndheTU5U3ROUlwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiUlwiXSxcInN0YXJ0XCI6XCJTdWJ3YXlCYXlSaWRnZTk1U3RcIixcInN0b3BfY291bnRcIjo1LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXlCYXlSaWRnZTk1U3RfUl9kTlwiLFwiUGxhdGZvcm1fU3Vid2F5NTlTdE5SX05RUldfZE5FXCJdfSx7XCJkdXJhdGlvblwiOjIzNzAsXCJlbmRcIjpcIlN1YndheTU5U3Q0NTZcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIk5cIl0sXCJzdGFydFwiOlwiU3Vid2F5NTlTdE5SXCIsXCJzdG9wX2NvdW50XCI6MTEsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1N1YndheTU5U3ROUl9OUVJXX2RORVwiLFwiUGxhdGZvcm1fU3Vid2F5NTlTdDQ1Nl9OUldfZFNFXCJdfSx7XCJkaXN0YW5jZVwiOjEzOCxcImR1cmF0aW9uXCI6MTEyLFwiZWNcIjpcIjQwLjc2MjM4LC03My45Njg1MVwiLFwiZnJvbV9leGl0XCI6XCJTdWJ3YXk1OVN0NDU2X0U0MDE3XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDAuNzYyMiwtNzMuOTY4NFwifV0sXCJwcmljZV9wZW5jZVwiOjI3NSxcInJlZ2lvblwiOlwidXMtbnljXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjJmYTIyZTNhLTNjYmItNDY2ZC05NjFiLTJhM2I0NjZlMWYwNVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQwLjYxNzI2MSwtNzQuMDMyMDRcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTEzVDA2OjMyOjIwLTA0OjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidXMtbnljIn0.rknaZMergwg9IbEm5KTQIh0xMpNRs8kFXBlmnnc3L90',
  },
  {
    start: {
      coordinates: {
        lat: 40.617261,
        lon: -74.03204,
      },
    },
    end: {
      coordinates: {
        lat: 40.762375,
        lon: -73.968511,
      },
    },
    distance_meters: 441,
    duration_seconds: 4030,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 232,
        path: '_a|vFbkzbML]Ri@FK|@}BJYJDl@P`@LVHD@JBCZEN??JH',
        updatable_detail: {
          leg_departure_time: '2022-07-13T06:32:20-04:00',
          leg_arrival_time: '2022-07-13T06:36:12-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'SubwayBayRidge95St_E01',
            stop_id: 'SubwayBayRidge95St',
            coordinates: {
              lat: 40.616021,
              lon: -74.031383,
            },
            name: '4th Ave & 95th St, SW corner',
          },
          alternate_exits: [
            {
              id: 'SubwayBayRidge95St_E02',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.615893,
                lon: -74.03086,
              },
              name: '5th Ave & 95th St, NE corner',
            },
            {
              id: 'SubwayBayRidge95St_E03',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.616189,
                lon: -74.031234,
              },
              name: '4th Ave & 95th St, NW corner',
            },
            {
              id: 'SubwayBayRidge95St_E04',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.617587,
                lon: -74.030696,
              },
              name: '4th Ave & 93th St, SW corner',
            },
            {
              id: 'SubwayBayRidge95St_E05',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.617363,
                lon: -74.030404,
              },
              name: '4th Ave & 93th St, NE corner',
            },
          ],
          duration_seconds: 60,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 3540,
        path: '{|{vF~czbM??}d@oNak@aQu_@iLeHyByAs@q@m@mYmZcVaWeWeXye@ig@y_@ca@k^s_@g@g@u_@iZy_@kZsFcDuf@{Y??aE_Cs@YcAKcM`Am@R_@Zc@p@iC|ISd@a@h@s@f@kGfCeEdBa@XY`@Qj@MhAS|OSrNEv@Kp@Oj@a@t@m@h@cAb@g@^k@r@_@`A_AjFeIxc@iAtFaW`eAkBbGg@jA_AnAu@l@}@^mHnAcBXoHr@y@\\mBvAWJa@Fa@ESIwBmBUOc@[mSqLmDqB_@g@Mo@Dw@b@cBJ}@?]Gg@[o@aDaCk@q@qB}AsCyBk@Y_`@}Za]mXod@u^gFcEg@[eA[cV_DqIgAiPkC{Ea@??_Kk@gMsAgXuCE?_OwAyCg@aJoBuK_C{CaA_D_BcIkFw\\sT}HgF]W]i@Oo@Ca@Bc@Hg@dJsYBu@GcBK}B@[Jm@|Ku]Lc@??',
        stops: [
          {
            id: 'SubwayBayRidge95St',
            name: 'Bay Ridge - 95 St',
            coordinates: {
              lat: 40.616622,
              lon: -74.030876,
            },
          },
          {
            id: 'Subway86StR',
            name: '86 St',
            coordinates: {
              lat: 40.622687,
              lon: -74.028398,
            },
          },
          {
            id: 'Subway77StR',
            name: '77 St',
            coordinates: {
              lat: 40.629742,
              lon: -74.02551,
            },
          },
          {
            id: 'SubwayBayRidgeAv',
            name: 'Bay Ridge Av',
            coordinates: {
              lat: 40.634967,
              lon: -74.023377,
            },
          },
          {
            id: 'Subway59StNR',
            name: '59 St',
            coordinates: {
              lat: 40.641362,
              lon: -74.017881,
            },
          },
          {
            id: 'Subway53St',
            name: '53 St',
            coordinates: {
              lat: 40.645069,
              lon: -74.014034,
            },
          },
          {
            id: 'Subway45St',
            name: '45 St',
            coordinates: {
              lat: 40.648939,
              lon: -74.010006,
            },
          },
          {
            id: 'Subway36StDNR',
            name: '36 St',
            coordinates: {
              lat: 40.655144,
              lon: -74.003549,
            },
          },
          {
            id: 'Subway25St',
            name: '25 St',
            coordinates: {
              lat: 40.660397,
              lon: -73.998091,
            },
          },
          {
            id: 'SubwayProspectAvR',
            name: 'Prospect Av',
            coordinates: {
              lat: 40.665414,
              lon: -73.992872,
            },
          },
          {
            id: 'Subway4Av9St',
            name: '4 Av - 9 St',
            coordinates: {
              lat: 40.670272,
              lon: -73.989779,
            },
          },
          {
            id: 'SubwayUnionSt',
            name: 'Union St',
            coordinates: {
              lat: 40.677316,
              lon: -73.98311,
            },
          },
          {
            id: 'SubwayAtlanticAvBQ2345',
            name: 'Atlantic Av - Barclays Ctr',
            coordinates: {
              lat: 40.684359,
              lon: -73.977666,
            },
          },
          {
            id: 'SubwayDeKalbAvBQR',
            name: 'Dekalb Av',
            coordinates: {
              lat: 40.690635,
              lon: -73.981824,
            },
          },
          {
            id: 'SubwayJayStMetroTech',
            name: 'Jay St - Metrotech',
            coordinates: {
              lat: 40.692338,
              lon: -73.987342,
            },
          },
          {
            id: 'SubwayCourtSt',
            name: 'Court St',
            coordinates: {
              lat: 40.6941,
              lon: -73.991777,
            },
          },
          {
            id: 'SubwayWhitehallSt',
            name: 'Whitehall St',
            coordinates: {
              lat: 40.703087,
              lon: -74.012994,
            },
          },
          {
            id: 'SubwayRectorStR',
            name: 'Rector St',
            coordinates: {
              lat: 40.70722,
              lon: -74.013342,
            },
          },
          {
            id: 'SubwayCortlandtStR',
            name: 'Cortlandt St',
            coordinates: {
              lat: 40.710759,
              lon: -74.010965,
            },
          },
          {
            id: 'SubwayCityHall',
            name: 'City Hall',
            coordinates: {
              lat: 40.713282,
              lon: -74.006978,
            },
          },
          {
            id: 'SubwayCanalStJNQRZ6',
            name: 'Canal St',
            coordinates: {
              lat: 40.718803,
              lon: -74.000193,
            },
          },
          {
            id: 'SubwayPrinceSt',
            name: 'Prince St',
            coordinates: {
              lat: 40.724329,
              lon: -73.997702,
            },
          },
          {
            id: 'Subway8StNYU',
            name: '8 St - Nyu',
            coordinates: {
              lat: 40.730328,
              lon: -73.992629,
            },
          },
          {
            id: 'Subway14StUnionSq',
            name: '14 St - Union Sq',
            coordinates: {
              lat: 40.734669,
              lon: -73.989956,
            },
          },
          {
            id: 'Subway23StNR',
            name: '23 St',
            coordinates: {
              lat: 40.741303,
              lon: -73.989344,
            },
          },
          {
            id: 'Subway28StNR',
            name: '28 St',
            coordinates: {
              lat: 40.745494,
              lon: -73.988691,
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
          {
            id: 'SubwayTimesSq42St',
            name: 'Times Sq - 42 St',
            coordinates: {
              lat: 40.755986,
              lon: -73.986328,
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
            id: 'Subway57St7Av',
            name: '57 St - 7 Av',
            coordinates: {
              lat: 40.764664,
              lon: -73.980658,
            },
          },
          {
            id: 'Subway5Av59St',
            name: '5 Av/59 St',
            coordinates: {
              lat: 40.764811,
              lon: -73.973347,
            },
          },
          {
            id: 'Subway59St456',
            name: 'Lexington Av/59 St',
            coordinates: {
              lat: 40.762729,
              lon: -73.967441,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'R',
              frequency_seconds_range: [439, 439],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Service Change',
              description:
                "You may wait longer for a northbound <R> train. We're running as much service as we can with the train crews we have available.",
              service_ids: ['R'],
            },
          ],
          leg_departure_time: '2022-07-13T06:44:00-04:00',
          leg_arrival_time: '2022-07-13T07:43:00-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'R',
            name: 'R',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/aaa556df8e4f1b291f9d2a8cb4517c6b5e8c250841b669974ff70ba9/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/72c02c88e6d8b48e755a3d43ad8038e1fca3bfcfb35bb2cf7336e3ba/d324a6fb/@2x.png',
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
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Manhattan',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 112,
        path: 'wjxwFn}mbMSMABM^',
        updatable_detail: {
          leg_departure_time: '2022-07-13T07:43:00-04:00',
          leg_arrival_time: '2022-07-13T07:44:52-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Subway59St456_E4017',
            stop_id: 'Subway59St456',
            coordinates: {
              lat: 40.7622009,
              lon: -73.9684042,
            },
            name: 'E 59th St & Lex Ave SW Corner',
          },
          alternate_exits: [
            {
              id: 'Subway59St456_E01',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762092,
                lon: -73.96634,
              },
              name: 'E 60th St & 3rd Av SW Corner',
            },
            {
              id: 'Subway59St456_E02',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762353,
                lon: -73.966155,
              },
              name: 'E 60th St & 3rd Av NW Corner',
            },
            {
              id: 'Subway59St456_E03',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.761996,
                lon: -73.966105,
              },
              name: 'E 60th St & 3rd Av SE Corner',
            },
            {
              id: 'Subway59St456_E04',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762255,
                lon: -73.965918,
              },
              name: 'E 60th St & 3rd Av NE Corner',
            },
            {
              id: 'Subway59St456_E4016',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7624285,
                lon: -73.9682594,
              },
              name: 'E 59th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4018',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7620709,
                lon: -73.9680394,
              },
              name: 'E 59th St & Lex Ave SE Corner',
            },
            {
              id: 'Subway59St456_E4019',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7629608,
                lon: -73.967794,
              },
              name: 'E 60th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4020',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628856,
                lon: -73.9676009,
              },
              name: 'E 60th St & Lex Ave NE Corner',
            },
            {
              id: 'Subway59St456_E4021',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628348,
                lon: -73.9679522,
              },
              name: 'E 60th St & Lex Ave SW Corner',
            },
            {
              id: 'Subway59St456_E5032',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.76266,
                lon: -73.967625,
              },
              name: 'Lexington Ave & 60th St, SE corner',
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-13T06:32:20-04:00',
    route_arrival_time: '2022-07-13T07:44:52-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwODM0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjEwNTksXCJkdXJhdGlvblwiOjQwMzAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQwLjc2MjM3NSwtNzMuOTY4NTExXCJ9LFwiZW52aXJvbm1lbnRcIjpcInN0YWdpbmdcIixcImpyX2luZGV4XCI6MixcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjozMDMsXCJkdXJhdGlvblwiOjIzMixcImVjXCI6XCI0MC42MTYwMiwtNzQuMDMxMzhcIixcImluX3N0YXRpb25cIjpcIjAvNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC42MTcyOCwtNzQuMDMyMDJcIixcInRvX2V4aXRcIjpcIlN1YndheUJheVJpZGdlOTVTdF9FMDFcIn0se1wiZHVyYXRpb25cIjozNTQwLFwiZW5kXCI6XCJTdWJ3YXk1OVN0NDU2XCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJSXCJdLFwic3RhcnRcIjpcIlN1YndheUJheVJpZGdlOTVTdFwiLFwic3RvcF9jb3VudFwiOjMyLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXlCYXlSaWRnZTk1U3RfUl9kTlwiLFwiUGxhdGZvcm1fU3Vid2F5NTlTdDQ1Nl9OUldfZFNFXCJdfSx7XCJkaXN0YW5jZVwiOjEzOCxcImR1cmF0aW9uXCI6MTEyLFwiZWNcIjpcIjQwLjc2MjM4LC03My45Njg1MVwiLFwiZnJvbV9leGl0XCI6XCJTdWJ3YXk1OVN0NDU2X0U0MDE3XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDAuNzYyMiwtNzMuOTY4NFwifV0sXCJwcmljZV9wZW5jZVwiOjI3NSxcInJlZ2lvblwiOlwidXMtbnljXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjJmYTIyZTNhLTNjYmItNDY2ZC05NjFiLTJhM2I0NjZlMWYwNVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQwLjYxNzI2MSwtNzQuMDMyMDRcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTEzVDA2OjMyOjIwLTA0OjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidXMtbnljIn0.WslDEgiasR2ybMlr47dTUMiYOomaZIuVVFB8Caby0tc',
  },
  {
    start: {
      coordinates: {
        lat: 40.617261,
        lon: -74.03204,
      },
    },
    end: {
      coordinates: {
        lat: 40.762375,
        lon: -73.968511,
      },
    },
    distance_meters: 611,
    duration_seconds: 3187,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$2.75',
      amount: '2.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 232,
        path: '_a|vFbkzbML]Ri@FK|@}BJYJDl@P`@LVHD@JBCZEN??JH',
        updatable_detail: {
          leg_departure_time: '2022-07-13T06:32:20-04:00',
          leg_arrival_time: '2022-07-13T06:36:12-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'SubwayBayRidge95St_E01',
            stop_id: 'SubwayBayRidge95St',
            coordinates: {
              lat: 40.616021,
              lon: -74.031383,
            },
            name: '4th Ave & 95th St, SW corner',
          },
          alternate_exits: [
            {
              id: 'SubwayBayRidge95St_E02',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.615893,
                lon: -74.03086,
              },
              name: '5th Ave & 95th St, NE corner',
            },
            {
              id: 'SubwayBayRidge95St_E03',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.616189,
                lon: -74.031234,
              },
              name: '4th Ave & 95th St, NW corner',
            },
            {
              id: 'SubwayBayRidge95St_E04',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.617587,
                lon: -74.030696,
              },
              name: '4th Ave & 93th St, SW corner',
            },
            {
              id: 'SubwayBayRidge95St_E05',
              stop_id: 'SubwayBayRidge95St',
              coordinates: {
                lat: 40.617363,
                lon: -74.030404,
              },
              name: '4th Ave & 93th St, NE corner',
            },
          ],
          duration_seconds: 60,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 450,
        path: '{|{vF~czbM??}d@oNak@aQu_@iLeHyByAs@q@m@mYmZ@A',
        stops: [
          {
            id: 'SubwayBayRidge95St',
            name: 'Bay Ridge - 95 St',
            coordinates: {
              lat: 40.616622,
              lon: -74.030876,
            },
          },
          {
            id: 'Subway86StR',
            name: '86 St',
            coordinates: {
              lat: 40.622687,
              lon: -74.028398,
            },
          },
          {
            id: 'Subway77StR',
            name: '77 St',
            coordinates: {
              lat: 40.629742,
              lon: -74.02551,
            },
          },
          {
            id: 'SubwayBayRidgeAv',
            name: 'Bay Ridge Av',
            coordinates: {
              lat: 40.634967,
              lon: -74.023377,
            },
          },
          {
            id: 'Subway59StNR',
            name: '59 St',
            coordinates: {
              lat: 40.641362,
              lon: -74.017881,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'R',
              frequency_seconds_range: [403, 403],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Service Change',
              description:
                "You may wait longer for a northbound <R> train. We're running as much service as we can with the train crews we have available.",
              service_ids: ['R'],
            },
          ],
          leg_departure_time: '2022-07-13T06:44:00-04:00',
          leg_arrival_time: '2022-07-13T06:51:30-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'R',
            name: 'R',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/aaa556df8e4f1b291f9d2a8cb4517c6b5e8c250841b669974ff70ba9/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/72c02c88e6d8b48e755a3d43ad8038e1fca3bfcfb35bb2cf7336e3ba/d324a6fb/@2x.png',
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
        direction_description: 'Manhattan',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1470,
        path: 'ow`wFvrwbM??eVaWeWcX{[c]{HgI{_@ca@i^s_@GEEGGEEEGEEEGGEEEEGEEEGEEEGEEEw]sXy]uXIGKIIGKGIGIIKEIGIGIEIGIEIGIEGEyCeBuf@{YyDyBGEGEICGCGCGCICGAGCGAI?GAGAI?G?yL~@I@I@GBIBIBGDGDIDGFEFGFGHEHGJEHcClIENEJGLEJGJGHIJGFIHIFIFIFKDKDKDuFxBwD~AKFKFKFIHIHGJGJGLELCNEPANCRAR?RShOQtMA\\AZCZEXEVGTGTIRKPKNMNOLOJQHQHOFOFMHMHKJKJKJILILGNINENGPEPCRw@dEqHta@ETCTGVETEVGVEVGVGVGXGXGVGZGXIXoVlcAkBbGMXKXMVOTMRORQPQNQNQLSJUHSHUFWF_G`AcBVMBK@MBO@M@OBQ@OBS@QBS@S@SBU@UBI?G@G@G@G@IBG@GBGBGDGBGDGDGDEDq@h@KHKHMFKDKDKBI@K@KAIAKAICIEIGIIeA_ACCAACCCAACCACCAACCCACCCAACCACCEEGCGEEEGCGEGE}RgLmDoBIIGIGIEIEICKAKAM?M?K@OBMBOBOFOFSDODOBOBO@O@M?M?OAKCMAMEKEKGKGK_D_CAAAAA?AAAA?AAAAAAAAA?AAAAAAA?AAAAAAA??AAAAAA?AAAAAA?AAAA?AA?oB}AqCyBA?AA??AAA??AA?AAA??AA?A?AAA???AAA?A?AAA??AA?A?AA??AAA??AA?AAa`@}ZoAcALHLHLDLDLBJ@J?L?JCHCJGJGHIJKHKzBmD{BlDIJKJIHKFKFIBKBM?K?KAMCMEMEMIMIoZiVod@u^_F}DGEGEGEGEGEGCIEGCGCICGAGCIAGAIAyU}C??',
        stops: [
          {
            id: 'Subway59StNR',
            name: '59 St',
            coordinates: {
              lat: 40.641362,
              lon: -74.017881,
            },
          },
          {
            id: 'Subway36StDNR',
            name: '36 St',
            coordinates: {
              lat: 40.655144,
              lon: -74.003549,
            },
          },
          {
            id: 'SubwayAtlanticAvBQ2345',
            name: 'Atlantic Av - Barclays Ctr',
            coordinates: {
              lat: 40.684359,
              lon: -73.977666,
            },
          },
          {
            id: 'SubwayCanalStJNQRZ6',
            name: 'Canal St',
            coordinates: {
              lat: 40.718803,
              lon: -74.000193,
            },
          },
          {
            id: 'Subway14StUnionSq',
            name: '14 St - Union Sq',
            coordinates: {
              lat: 40.734669,
              lon: -73.989956,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'N',
              frequency_seconds_range: [385, 385],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'Q',
              frequency_seconds_range: [385, 385],
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
              title: 'Delays',
              description:
                'Northbound <Q> trains are delayed while we address a signal problem at DeKalb Av.',
              service_ids: ['Q'],
            },
          ],
          leg_departure_time: '2022-07-13T06:54:00-04:00',
          leg_arrival_time: '2022-07-13T07:18:30-04:00',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/639d0593ccae7d82c4dd9b23376cc514e290995507bcc594579cef79/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/5826f1389687c40ecf29513ec08cdfcf84b780ca00912ef78c811dbd/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/65dac62c98bfa9b27e2d96b5e8444e8d96b185f7a266cb2b29eac4b0/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/a292ad58f9d1d62e27356299564687c5760a4153cfc7f2a75c9e23cc/d324a6fb/@2x.png',
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
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Manhattan',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 150,
        path: 'keswF`hrbM??hGaFs@dB??',
        updatable_detail: {
          leg_departure_time: '2022-07-13T07:18:30-04:00',
          leg_arrival_time: '2022-07-13T07:21:00-04:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'u~rwFddrbM?Ai@D{@Gm@OibBmgA]e@Sm@m@{Dq@wEWm@]_@}~@sm@??',
        stops: [
          {
            id: 'Subway14StUnionSq',
            name: '14 St - Union Sq',
            coordinates: {
              lat: 40.734669,
              lon: -73.989956,
            },
          },
          {
            id: 'SubwayGrandCentral42St',
            name: 'Grand Central - 42 St',
            coordinates: {
              lat: 40.751776,
              lon: -73.976902,
            },
          },
          {
            id: 'Subway59St456',
            name: 'Lexington Av/59 St',
            coordinates: {
              lat: 40.762729,
              lon: -73.967441,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: '4',
              frequency_seconds_range: [175, 175],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: '5',
              frequency_seconds_range: [175, 175],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['4'],
            },
            {
              type: 'travel_affected',
              title: 'Delays',
              description:
                '<5> trains are running with delays in both directions after crews addressed a signal problem at Eastchester-Dyre Av. Southbound <5> trains have resumed running on the local track from Eastchester-Dyre Av to E 180 St.',
              service_ids: ['5'],
            },
          ],
          leg_departure_time: '2022-07-13T07:23:30-04:00',
          leg_arrival_time: '2022-07-13T07:29:30-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: '4',
            name: '4',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/c9bf161a29063cea7e4150372a60acdbfe352ad791ee79e9c886e7ab/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/cb99747274bb7dfd50c5bf1451b0a81c2911fda6d0d9617ac5b340cd/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#00933C',
            background_color: '#00933C',
            text_color: '#FFFFFF',
          },
          {
            id: '5',
            name: '5',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/149660ac2ad12f571875ad958f809724b966a544cebabd205229fe34/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/daef45b412a4bbf31640e7a7dc883234b4002e2caa7c0f273645ec38/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#00933C',
            background_color: '#00933C',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: true,
        },
        direction_description: 'Uptown & The Bronx',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 112,
        path: 'wjxwFn}mbMSMABM^',
        updatable_detail: {
          leg_departure_time: '2022-07-13T07:29:30-04:00',
          leg_arrival_time: '2022-07-13T07:31:22-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Subway59St456_E4017',
            stop_id: 'Subway59St456',
            coordinates: {
              lat: 40.7622009,
              lon: -73.9684042,
            },
            name: 'E 59th St & Lex Ave SW Corner',
          },
          alternate_exits: [
            {
              id: 'Subway59St456_E01',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762092,
                lon: -73.96634,
              },
              name: 'E 60th St & 3rd Av SW Corner',
            },
            {
              id: 'Subway59St456_E02',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762353,
                lon: -73.966155,
              },
              name: 'E 60th St & 3rd Av NW Corner',
            },
            {
              id: 'Subway59St456_E03',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.761996,
                lon: -73.966105,
              },
              name: 'E 60th St & 3rd Av SE Corner',
            },
            {
              id: 'Subway59St456_E04',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762255,
                lon: -73.965918,
              },
              name: 'E 60th St & 3rd Av NE Corner',
            },
            {
              id: 'Subway59St456_E4016',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7624285,
                lon: -73.9682594,
              },
              name: 'E 59th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4018',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7620709,
                lon: -73.9680394,
              },
              name: 'E 59th St & Lex Ave SE Corner',
            },
            {
              id: 'Subway59St456_E4019',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7629608,
                lon: -73.967794,
              },
              name: 'E 60th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4020',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628856,
                lon: -73.9676009,
              },
              name: 'E 60th St & Lex Ave NE Corner',
            },
            {
              id: 'Subway59St456_E4021',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628348,
                lon: -73.9679522,
              },
              name: 'E 60th St & Lex Ave SW Corner',
            },
            {
              id: 'Subway59St456_E5032',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.76266,
                lon: -73.967625,
              },
              name: 'Lexington Ave & 60th St, SE corner',
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-13T06:32:20-04:00',
    route_arrival_time: '2022-07-13T07:31:22-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwODM0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjEwNTksXCJkdXJhdGlvblwiOjMxODcsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQwLjc2MjM3NSwtNzMuOTY4NTExXCJ9LFwiZW52aXJvbm1lbnRcIjpcInN0YWdpbmdcIixcImpyX2luZGV4XCI6MyxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjozMDMsXCJkdXJhdGlvblwiOjIzMixcImVjXCI6XCI0MC42MTYwMiwtNzQuMDMxMzhcIixcImluX3N0YXRpb25cIjpcIjAvNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0MC42MTcyOCwtNzQuMDMyMDJcIixcInRvX2V4aXRcIjpcIlN1YndheUJheVJpZGdlOTVTdF9FMDFcIn0se1wiZHVyYXRpb25cIjo0NTAsXCJlbmRcIjpcIlN1YndheTU5U3ROUlwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiUlwiXSxcInN0YXJ0XCI6XCJTdWJ3YXlCYXlSaWRnZTk1U3RcIixcInN0b3BfY291bnRcIjo1LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXlCYXlSaWRnZTk1U3RfUl9kTlwiLFwiUGxhdGZvcm1fU3Vid2F5NTlTdE5SX05RUldfZE5FXCJdfSx7XCJkdXJhdGlvblwiOjE0NzAsXCJlbmRcIjpcIlN1YndheTE0U3RVbmlvblNxXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJOXCIsXCJRXCJdLFwic3RhcnRcIjpcIlN1YndheTU5U3ROUlwiLFwic3RvcF9jb3VudFwiOjUsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1N1YndheTU5U3ROUl9OUVJXX2RORVwiLFwiUGxhdGZvcm1fU3Vid2F5MTRTdFVuaW9uU3FfTlFSV19kTlwiXX0se1wiZGlzdGFuY2VcIjoyMjcsXCJkdXJhdGlvblwiOjE1MCxcImVjXCI6XCI0MC43MzQ2NywtNzMuOTg5OTVcIixcImluX3N0YXRpb25cIjpcIjEvMTUwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDAuNzM1NzQsLTczLjk5MDU3XCJ9LHtcImR1cmF0aW9uXCI6MzYwLFwiZW5kXCI6XCJTdWJ3YXk1OVN0NDU2XCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCI0XCIsXCI1XCJdLFwic3RhcnRcIjpcIlN1YndheTE0U3RVbmlvblNxXCIsXCJzdG9wX2NvdW50XCI6MyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fU3Vid2F5MTRTdFVuaW9uU3FfNDU2X2RORVwiLFwiUGxhdGZvcm1fU3Vid2F5NTlTdDQ1Nl80NV9kTkVcIl19LHtcImRpc3RhbmNlXCI6ODEsXCJkdXJhdGlvblwiOjExMixcImVjXCI6XCI0MC43NjIzOCwtNzMuOTY4NTFcIixcImZyb21fZXhpdFwiOlwiU3Vid2F5NTlTdDQ1Nl9FNDAxN1wiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQwLjc2MjIsLTczLjk2ODRcIn1dLFwicHJpY2VfcGVuY2VcIjoyNzUsXCJyZWdpb25cIjpcInVzLW55Y1wiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCIyZmEyMmUzYS0zY2JiLTQ2NmQtOTYxYi0yYTNiNDY2ZTFmMDVcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0MC42MTcyNjEsLTc0LjAzMjA0XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0xM1QwNjozMjoyMC0wNDowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVzLW55YyJ9.G3nRIKez-GwdrYglXOiYe-ItRZWrCmxP8ol1j0ueSJo',
  },
  {
    start: {
      coordinates: {
        lat: 40.617261,
        lon: -74.03204,
      },
    },
    end: {
      coordinates: {
        lat: 40.762375,
        lon: -73.968511,
      },
    },
    distance_meters: 1471,
    duration_seconds: 3429,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$6.75',
      amount: '6.75',
      currency: 'USD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 1028,
        path: '_a|vFbkzbML]Ri@FK|@}BJYJWN]HSKEkAaAiByA[WOM]YIGFOXs@x@oBz@yBTm@NOJUTk@DIf@sAJSVo@v@kBBGvAyDqFmESOoDwCu@m@aCoBOKWUDMVe@NYMM',
        updatable_detail: {
          leg_departure_time: '2022-07-13T06:32:20-04:00',
          leg_arrival_time: '2022-07-13T06:49:28-04:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1043,
        path: 'kj|vFrixbMLL??o@lAo@nAi@dAMXUGWOiAy@qA_ASOs@i@}C}BoCyBoDoC{@o@e@[k@YaAg@_Aa@}@Wo@K_@EuAi@MGu@UkA_@}@WsEqAoCy@wAa@eCs@aDw@{@UmA]c@Ma@Km@QeBc@OCiBY}@Gk@AS?a@?i@Bc@@sAZWHYJw@b@e@`@m@p@MN_@h@W^ILk@`Aq@pA[n@_AjBKTg@`Ak@jAc@v@_AfB{@hAm@j@SPq@b@eAb@u@Py@Ju@@e@Ci@Ea@K]I]Mu@_@YSw@m@qAkAe@k@y@{@aAaAqBsBkBoBsBqBqBsBOOeBcBiBoBoBqBm@q@}@aAsBuB{@}@u@w@sBsBiBsBsBuBiBoBuB{BqBuBmBsBoBqBoBuBmBqBIIk@m@c@e@SUsBwBoBqBsB{BiBkBiBmBIKoBqBmBsBqBsBoByBiBmBqBuBmBsBoBqBsByBeFiFEE??kBqB_BaBQSo@o@w@q@QKo@[SKu@YIC[Gk@K}@K[Ce@A[?_@@m@Fm@Hu@R]Hy@ZqAj@_Bv@QJQHoDlBcAj@sEbCc@V{BjAIDm@Zs@^QJiDjB_@RuC|A_CnAWL{At@SJy@l@q@^mC|Au@b@iAr@oA|@QNe@^qA`Ao@f@WRaAt@mA`As@h@a@ZcAp@oBtA}@n@_@V{C~@qAd@_@@oAHyBl@a@ToBdAuEhCiAl@]XyFfE_ClBIHc@\\IHaBtAkEzC{A~@y@b@yBx@[Js@R}Ab@uJbCiAZ_ATo@N{A`@aEdAwDbAsGbBoJjCSDaB^OB]Do@JQBQB}ALaBDM?}@?iAGg@CGAm@Iu@Sa@ISEg@Oe@MOEq@Ui@Qe@Oa@Km@Oo@Je@Lg@XKLWXOZA\\?V@d@Lv@fB^tAVb@Tf@R~@ZhBd@f@L?W?g@?YAqCFy@@MBKBSBO@@',
        stops: [
          {
            id: '305505',
            name: '86 St/7 Av',
            coordinates: {
              lat: 40.618778,
              lon: -74.02154,
            },
          },
          {
            id: '805039',
            name: 'Gowanus Exp./22 St (N.B.)',
            coordinates: {
              lat: 40.663351,
              lon: -73.998119,
            },
          },
          {
            id: '903205_1',
            name: 'Battery Pl/Greenwich St',
            coordinates: {
              lat: 40.704707,
              lon: -74.015088,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'NewYorkCityBusX28',
              frequency_seconds_range: [453, 453],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NewYorkCityBusX28'],
            },
          ],
          leg_departure_time: '2022-07-13T06:55:00-04:00',
          leg_arrival_time: '2022-07-13T07:12:23-04:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'NewYorkCityBusX28',
            name: 'X28',
            vehicle_types: ['bus'],
            brand: {
              id: 'NewYorkCityBus',
              name: 'New York City Bus',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/508331843f29d927e5f1e4caafdcd7f68215de6e5592b082d0d8d9c5/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/997769ce12f7046596547233034a5c8a55c55146fc12d430d81a2f14/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/e2a49cc25c6b78facdab4a3e75cf637d6d2c96022c46bab85a48f262/d324a6fb/@2x.png',
                  width: 24,
                  height: 24,
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
            color: '#00933C',
            background_color: '#00933C',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Church St/Thomas St | W 23 St/5 Av',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 110,
        path: 'mcmwFhawbMGCBO??BSQGBYDUOG',
        updatable_detail: {
          leg_departure_time: '2022-07-13T07:12:23-04:00',
          leg_arrival_time: '2022-07-13T07:14:13-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'SubwayBowlingGreen_E03',
            stop_id: 'SubwayBowlingGreen',
            coordinates: {
              lat: 40.704825,
              lon: -74.014572,
            },
            name: 'Broadway & Battery Pl, NW corner',
          },
          alternate_exits: [
            {
              id: 'SubwayBowlingGreen_E01',
              stop_id: 'SubwayBowlingGreen',
              coordinates: {
                lat: 40.704659,
                lon: -74.01392,
              },
              name: 'State & Battery Pl, SW corner',
            },
            {
              id: 'SubwayBowlingGreen_E02',
              stop_id: 'SubwayBowlingGreen',
              coordinates: {
                lat: 40.704629,
                lon: -74.013502,
              },
              name: 'Broadway & Bowling Green, NW corner',
            },
            {
              id: 'SubwayBowlingGreen_E04',
              stop_id: 'SubwayBowlingGreen',
              coordinates: {
                lat: 40.704795,
                lon: -74.014454,
              },
              name: 'Broadway & Battery Pl, NW corner',
            },
            {
              id: 'SubwayBowlingGreen_E05',
              stop_id: 'SubwayBowlingGreen',
              coordinates: {
                lat: 40.704157,
                lon: -74.014509,
              },
              name: 'State & Battery Pl, SW corner',
            },
          ],
          duration_seconds: 60,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 900,
        path: 'cdmwF|zvbM?Am@Yq@a@cMyJqPwM??qD{CS_@Og@}CsRMi@Qa@U]qBqB??cDqCi@[q@O_FY_@K[OyYcWiLmJo@]oDcAc@SeNiKuGoEiMeKs@y@w@wAk@i@e@Yy@UoO}BsBAyBPi@D{@Gm@OibBmgA]e@Sm@m@{Dq@wEWm@]_@}~@sm@??',
        stops: [
          {
            id: 'SubwayBowlingGreen',
            name: 'Bowling Green',
            coordinates: {
              lat: 40.704817,
              lon: -74.014065,
            },
          },
          {
            id: 'SubwayWallSt45',
            name: 'Wall St',
            coordinates: {
              lat: 40.707557,
              lon: -74.011862,
            },
          },
          {
            id: 'SubwayFultonStACJZ2345',
            name: 'Fulton St',
            coordinates: {
              lat: 40.710274,
              lon: -74.007778,
            },
          },
          {
            id: 'SubwayBrooklynBridgeCityHall',
            name: 'Brooklyn Bridge - City Hall',
            coordinates: {
              lat: 40.713065,
              lon: -74.004131,
            },
          },
          {
            id: 'Subway14StUnionSq',
            name: '14 St - Union Sq',
            coordinates: {
              lat: 40.734669,
              lon: -73.989956,
            },
          },
          {
            id: 'SubwayGrandCentral42St',
            name: 'Grand Central - 42 St',
            coordinates: {
              lat: 40.751776,
              lon: -73.976902,
            },
          },
          {
            id: 'Subway59St456',
            name: 'Lexington Av/59 St',
            coordinates: {
              lat: 40.762729,
              lon: -73.967441,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: '4',
              frequency_seconds_range: [171, 171],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: '5',
              frequency_seconds_range: [171, 171],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['4'],
            },
            {
              type: 'travel_affected',
              title: 'Delays',
              description:
                '<5> trains are running with delays in both directions after crews addressed a signal problem at Eastchester-Dyre Av. Southbound <5> trains have resumed running on the local track from Eastchester-Dyre Av to E 180 St.',
              service_ids: ['5'],
            },
          ],
          leg_departure_time: '2022-07-13T07:14:30-04:00',
          leg_arrival_time: '2022-07-13T07:29:30-04:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: '4',
            name: '4',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/c9bf161a29063cea7e4150372a60acdbfe352ad791ee79e9c886e7ab/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/cb99747274bb7dfd50c5bf1451b0a81c2911fda6d0d9617ac5b340cd/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#00933C',
            background_color: '#00933C',
            text_color: '#FFFFFF',
          },
          {
            id: '5',
            name: '5',
            vehicle_types: ['metro'],
            brand: {
              id: 'NewYorkSubway',
              name: 'Subway',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/149660ac2ad12f571875ad958f809724b966a544cebabd205229fe34/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/daef45b412a4bbf31640e7a7dc883234b4002e2caa7c0f273645ec38/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#00933C',
            background_color: '#00933C',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: true,
        },
        direction_description: 'Uptown & The Bronx',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 112,
        path: 'wjxwFn}mbMSMABM^',
        updatable_detail: {
          leg_departure_time: '2022-07-13T07:29:30-04:00',
          leg_arrival_time: '2022-07-13T07:31:22-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Subway59St456_E4017',
            stop_id: 'Subway59St456',
            coordinates: {
              lat: 40.7622009,
              lon: -73.9684042,
            },
            name: 'E 59th St & Lex Ave SW Corner',
          },
          alternate_exits: [
            {
              id: 'Subway59St456_E01',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762092,
                lon: -73.96634,
              },
              name: 'E 60th St & 3rd Av SW Corner',
            },
            {
              id: 'Subway59St456_E02',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762353,
                lon: -73.966155,
              },
              name: 'E 60th St & 3rd Av NW Corner',
            },
            {
              id: 'Subway59St456_E03',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.761996,
                lon: -73.966105,
              },
              name: 'E 60th St & 3rd Av SE Corner',
            },
            {
              id: 'Subway59St456_E04',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.762255,
                lon: -73.965918,
              },
              name: 'E 60th St & 3rd Av NE Corner',
            },
            {
              id: 'Subway59St456_E4016',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7624285,
                lon: -73.9682594,
              },
              name: 'E 59th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4018',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7620709,
                lon: -73.9680394,
              },
              name: 'E 59th St & Lex Ave SE Corner',
            },
            {
              id: 'Subway59St456_E4019',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7629608,
                lon: -73.967794,
              },
              name: 'E 60th St & Lex Ave NW Corner',
            },
            {
              id: 'Subway59St456_E4020',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628856,
                lon: -73.9676009,
              },
              name: 'E 60th St & Lex Ave NE Corner',
            },
            {
              id: 'Subway59St456_E4021',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.7628348,
                lon: -73.9679522,
              },
              name: 'E 60th St & Lex Ave SW Corner',
            },
            {
              id: 'Subway59St456_E5032',
              stop_id: 'Subway59St456',
              coordinates: {
                lat: 40.76266,
                lon: -73.967625,
              },
              name: 'Lexington Ave & 60th St, SE corner',
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-13T06:32:20-04:00',
    route_arrival_time: '2022-07-13T07:31:22-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwODM0NSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MjEwNTksXCJkdXJhdGlvblwiOjM0MjksXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQwLjc2MjM3NSwtNzMuOTY4NTExXCJ9LFwiZW52aXJvbm1lbnRcIjpcInN0YWdpbmdcIixcImpyX2luZGV4XCI6NCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjoxMjg2LFwiZHVyYXRpb25cIjoxMDI4LFwiZWNcIjpcIjQwLjYxODc4LC03NC4wMjE1NFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQwLjYxNzI4LC03NC4wMzIwMlwifSx7XCJkdXJhdGlvblwiOjEwNDMsXCJlbmRcIjpcIjkwMzIwNV8xXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJOZXdZb3JrQ2l0eUJ1c1gyOFwiXSxcInN0YXJ0XCI6XCIzMDU1MDVcIixcInN0b3BfY291bnRcIjozfSx7XCJkaXN0YW5jZVwiOjEwNCxcImR1cmF0aW9uXCI6MTEwLFwiZWNcIjpcIjQwLjcwNDgzLC03NC4wMTQ1N1wiLFwiaW5fc3RhdGlvblwiOlwiMC82MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQwLjcwNDcxLC03NC4wMTUwOVwiLFwidG9fZXhpdFwiOlwiU3Vid2F5Qm93bGluZ0dyZWVuX0UwM1wifSx7XCJkdXJhdGlvblwiOjkwMCxcImVuZFwiOlwiU3Vid2F5NTlTdDQ1NlwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiNFwiLFwiNVwiXSxcInN0YXJ0XCI6XCJTdWJ3YXlCb3dsaW5nR3JlZW5cIixcInN0b3BfY291bnRcIjo3LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdWJ3YXlCb3dsaW5nR3JlZW5fNDVfZE5FXCIsXCJQbGF0Zm9ybV9TdWJ3YXk1OVN0NDU2XzQ1X2RORVwiXX0se1wiZGlzdGFuY2VcIjo4MSxcImR1cmF0aW9uXCI6MTEyLFwiZWNcIjpcIjQwLjc2MjM4LC03My45Njg1MVwiLFwiZnJvbV9leGl0XCI6XCJTdWJ3YXk1OVN0NDU2X0U0MDE3XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDAuNzYyMiwtNzMuOTY4NFwifV0sXCJwcmljZV9wZW5jZVwiOjY3NSxcInJlZ2lvblwiOlwidXMtbnljXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjJmYTIyZTNhLTNjYmItNDY2ZC05NjFiLTJhM2I0NjZlMWYwNVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQwLjYxNzI2MSwtNzQuMDMyMDRcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTEzVDA2OjMyOjIwLTA0OjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidXMtbnljIn0._KE6JRZNIUdFtiu2cgRYgw4THLlK-CJo-8gMnNqHh-I',
  },
] as Route[]
