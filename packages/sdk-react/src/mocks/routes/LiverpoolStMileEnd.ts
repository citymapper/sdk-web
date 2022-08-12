import { Route } from '@citymapper/api/@types'

export default [
  {
    start: {
      coordinates: {
        lat: 51.525503,
        lon: -0.082223,
      },
    },
    end: {
      coordinates: {
        lat: 51.522569,
        lon: -0.037005,
      },
    },
    distance_meters: 1570,
    duration_seconds: 1583,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 801,
        path: '_qnyHnaOb@aAN]@CBGDK^}@Vk@Tk@LWXk@DI@ALUP_@LBH@H@D?H?b@@b@DDEF?D@@?J@D@ZHf@LTHZH\\Lz@ZNFRHd@RJBDDBDFCFCBBDBRHFBNHpAj@NFFBFBZPF_@DUBMD]\\LDBNHXNd@T@?LFnAl@RJH@XHXLFHfAd@@@?A',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:07:01+01:00',
          leg_arrival_time: '2022-07-13T11:20:22+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'LiverpoolStreet_E6_ExchangeSq',
            stop_id: 'LiverpoolStreet',
            coordinates: {
              lat: 51.5189393,
              lon: -0.0821265,
            },
            name: 'Exchange Square',
            short_name: '6',
          },
          alternate_exits: [
            {
              id: 'LiverpoolStreet_E1_BishopsgateW',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5174955,
                lon: -0.0805288,
              },
              name: 'Bishopsgate (West)',
              short_name: '1',
            },
            {
              id: 'LiverpoolStreet_E2_BishopsgateE',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.517313,
                lon: -0.0804204,
              },
              name: 'Bishopsgate (East) via subway',
              short_name: '2',
            },
            {
              id: 'LiverpoolStreet_E3_OldBroadSt',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5176825,
                lon: -0.0826327,
              },
              name: 'Old Broad St',
              short_name: '3',
            },
            {
              id: 'LiverpoolStreet_E4_Broadgate',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.51819,
                lon: -0.083653,
              },
              name: 'Broadgate',
              short_name: '4',
            },
            {
              id: 'LiverpoolStreet_E5_SunSt',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5189729,
                lon: -0.0822231,
              },
              name: 'Sun St Passage',
              short_name: '5',
            },
            {
              id: 'LiverpoolStreet_E7_Buses',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5179223,
                lon: -0.0827478,
              },
              name: 'Buses',
            },
            {
              id: 'LiverpoolStreet_E_Broadgate',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5178027,
                lon: -0.08379668,
              },
              name: 'Broadgate',
            },
          ],
          duration_seconds: 180,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'a_myHxeOCVe@SeByAcBeB_ScZ_EsHeAyBeIyUeDcJcDsLe@wB]yBYwCkA{Yy@wQKcD?eCBsB`@cFHi@l@sD`Nck@jAmF^eCRqCVaGJkGBeHKqGIgBa@sD_@}BmBgIm@iDe@qFr@U',
        stops: [
          {
            id: 'LiverpoolStreet',
            name: 'Liverpool Street',
            coordinates: {
              lat: 51.517742,
              lon: -0.081662,
            },
          },
          {
            id: 'BethnalGreen',
            name: 'Bethnal Green',
            coordinates: {
              lat: 51.527195,
              lon: -0.055431,
            },
          },
          {
            id: 'MileEnd',
            name: 'Mile End',
            coordinates: {
              lat: 51.525082,
              lon: -0.033289,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Central',
              frequency_seconds_range: [146, 146],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Central'],
            },
          ],
          leg_departure_time: '2022-07-13T11:21:00+01:00',
          leg_arrival_time: '2022-07-13T11:26:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Central',
            name: 'Central',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/d1f430ba45fc7d134d841d060ecad2b6e2ad60550ec46761e8f55f81/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/7cc6a7780f45d7deacef753dc95309cab47b478ea0a8a9181c0b032c/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#DC241F',
            background_color: '#DC241F',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: false,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 434,
        path: 'wonyHroEOL@D@J@FBTJj@F`@DR?HBVBLBPP`@Jd@HCFC@P@DFCBT\\Y^UJENCZ@NBJBRBPD^ZBDRRJNFHHJHNLRZt@Z`@@DBHJPBP@FDH?D@P@N@RBJ@DDTLx@HGNA',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:26:00+01:00',
          leg_arrival_time: '2022-07-13T11:33:14+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'MileEnd_E3506',
            stop_id: 'MileEnd',
            coordinates: {
              lat: 51.5252397,
              lon: -0.0333789,
            },
          },
          duration_seconds: 70,
        },
      },
    ],
    route_departure_time: '2022-07-13T11:07:01+01:00',
    route_arrival_time: '2022-07-13T11:33:14+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwNjgyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzgyMSxcImR1cmF0aW9uXCI6MTU4MyxcImVuZFwiOntcImNvb3Jkc1wiOlwiNTEuNTIyNTY5LC0wLjAzNzAwNVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTA3NCxcImR1cmF0aW9uXCI6ODAxLFwiZWNcIjpcIjUxLjUxODk0LC0wLjA4MjEzXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzE4MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUyNTQ0LC0wLjA4MjMyXCIsXCJ0b19leGl0XCI6XCJMaXZlcnBvb2xTdHJlZXRfRTZfRXhjaGFuZ2VTcVwifSx7XCJkdXJhdGlvblwiOjMwMCxcImVuZFwiOlwiTWlsZUVuZFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQ2VudHJhbFwiXSxcInN0YXJ0XCI6XCJMaXZlcnBvb2xTdHJlZXRcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9MaXZlcnBvb2xTdHJlZXRfQ19kTkVcIixcIlBsYXRmb3JtX01pbGVFbmRfQ19kTkVcIl19LHtcImRpc3RhbmNlXCI6NDk2LFwiZHVyYXRpb25cIjo0MzQsXCJlY1wiOlwiNTEuNTIyNTcsLTAuMDM3MDJcIixcImZyb21fZXhpdFwiOlwiTWlsZUVuZF9FMzUwNlwiLFwiaW5fc3RhdGlvblwiOlwiMi83MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUyNTI0LC0wLjAzMzM4XCJ9XSxcInByaWNlX3BlbmNlXCI6MjYwLFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNDM2ZDM1M2YtNDI2NC00NmU3LWExZDUtMWI1YTYzMGNmNjk1XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNTI1NTAzLC0wLjA4MjIyM1wifSxcInRpbWVcIjpcIjIwMjItMDctMTNUMTE6MDc6MDErMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.JZzA86RpGd0PCdqPcfiLwpFID67ytyWlAyEVnvXZkt4',
  },
  {
    start: {
      coordinates: {
        lat: 51.525503,
        lon: -0.082223,
      },
    },
    end: {
      coordinates: {
        lat: 51.522569,
        lon: -0.037005,
      },
    },
    distance_meters: 1151,
    duration_seconds: 1531,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 557,
        path: '_qnyHnaOb@aAN]@CBGDK^}@Vk@Tk@LWXk@DI@ALUP_@P_@BIDGBIZi@@C??FKr@uAA]?IAi@AgAEiA?KGsB?I?K?KBQF?@@F?@U@S@IDG@qA?]?kA???w@Aq@Aw@TAD?f@DJ@LD??KD',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:07:01+01:00',
          leg_arrival_time: '2022-07-13T11:16:18+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'ShoreditchHighStreet_E8424',
            stop_id: 'ShoreditchHighStreet',
            coordinates: {
              lat: 51.5232539,
              lon: -0.0752917,
            },
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 120,
        path: 'cdnyHfuMR?F_PRqD`Co[h@wLLuAHo@h@iCX}@`AuBz@yAzAsBzA_ClCaFRb@',
        stops: [
          {
            id: 'ShoreditchHighStreet',
            name: 'Shoreditch High Street',
            coordinates: {
              lat: 51.52338,
              lon: -0.07524,
            },
          },
          {
            id: 'Whitechapel',
            name: 'Whitechapel',
            coordinates: {
              lat: 51.519455,
              lon: -0.059985,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Overground',
              frequency_seconds_range: [222, 222],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Overground'],
            },
          ],
          leg_departure_time: '2022-07-13T11:18:00+01:00',
          leg_arrival_time: '2022-07-13T11:20:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Overground',
            name: 'Overground',
            vehicle_types: ['metro'],
            brand: {
              id: 'Overground',
              name: 'Overground',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/ce534606dca3a9a59b03956fb8d23031df2270aded5e43f2f1fa3d69/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/168c8d6aed2e17f2d01a5268b1bd25aef601a632f309f071630d8b07/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/26fead9cfff99f38590144a2af240782b458d1481a8638088211c215/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/8dd70007e513b76822a4fbc2e6fc72cd3365d216901cf66bc5fb3456/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#E86A10',
            background_color: '#E86A10',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: false,
        },
        direction_description: 'Southbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 60,
        path: 'skmyHzuJ????????',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:20:00+01:00',
          leg_arrival_time: '2022-07-13T11:21:00+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 180,
        path: 'skmyH|uJ_ARAKCeBL_CPiCAaAs@uFwDw_@oDc\\McAg@{De@wG_@_Jq@iGoCyL}CkG{C}KyAcJn@_@',
        stops: [
          {
            id: 'Whitechapel',
            name: 'Whitechapel',
            coordinates: {
              lat: 51.519455,
              lon: -0.059985,
            },
          },
          {
            id: 'StepneyGreen',
            name: 'Stepney Green',
            coordinates: {
              lat: 51.522026,
              lon: -0.046875,
            },
          },
          {
            id: 'MileEnd',
            name: 'Mile End',
            coordinates: {
              lat: 51.525082,
              lon: -0.033289,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'District',
              frequency_seconds_range: [172, 172],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'HammersmithAndCity',
              frequency_seconds_range: [172, 172],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['District', 'HammersmithAndCity'],
            },
          ],
          leg_departure_time: '2022-07-13T11:21:00+01:00',
          leg_arrival_time: '2022-07-13T11:24:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'District',
            name: 'District',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/67906b44ef950220bcc14815933871155c5d89cbe71c5aa1499c14a2/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/672b5e85dd65413374043b475f792473742712a786e4739808e241d5/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#007229',
            background_color: '#007229',
            text_color: '#FFFFFF',
          },
          {
            id: 'HammersmithAndCity',
            name: 'Hammersmith & City',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/3cd9d0ee946ff4b4376346eabd45d6d47901c8c35790a1b75d538f8c/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/de57e2a9b140fd0f9ebe4d5cc5af2237779c8267e7e9ec6a5446bc14/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#D799AF',
            background_color: '#D18BA4',
            text_color: '#113B92',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: false,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 454,
        path: 'wonyHroEOL@D@J@FBTJj@F`@DR?HBVBLBPP`@Jd@HCFC@P@DFCBT\\Y^UJENCZ@NBJBRBPD^ZBDRRJNFHHJHNLRZt@Z`@@DBHJPBP@FDH?D@P@N@RBJ@DDTLx@HGNA',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:24:00+01:00',
          leg_arrival_time: '2022-07-13T11:31:34+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'MileEnd_E3506',
            stop_id: 'MileEnd',
            coordinates: {
              lat: 51.5252397,
              lon: -0.0333789,
            },
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-13T11:07:01+01:00',
    route_arrival_time: '2022-07-13T11:31:34+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwNjgyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzgyMSxcImR1cmF0aW9uXCI6MTUzMSxcImVuZFwiOntcImNvb3Jkc1wiOlwiNTEuNTIyNTY5LC0wLjAzNzAwNVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6NjU1LFwiZHVyYXRpb25cIjo1NTcsXCJlY1wiOlwiNTEuNTIzMjUsLTAuMDc1MjlcIixcImluX3N0YXRpb25cIjpcIjAvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MjU0NCwtMC4wODIzMlwiLFwidG9fZXhpdFwiOlwiU2hvcmVkaXRjaEhpZ2hTdHJlZXRfRTg0MjRcIn0se1wiZHVyYXRpb25cIjoxMjAsXCJlbmRcIjpcIldoaXRlY2hhcGVsXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJPdmVyZ3JvdW5kXCJdLFwic3RhcnRcIjpcIlNob3JlZGl0Y2hIaWdoU3RyZWV0XCIsXCJzdG9wX2NvdW50XCI6MixcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fU2hvcmVkaXRjaEhpZ2hTdHJlZXRfT18xXCIsXCJQbGF0Zm9ybV9XaGl0ZWNoYXBlbF9PX2RTXCJdfSx7XCJkaXN0YW5jZVwiOjAsXCJkdXJhdGlvblwiOjYwLFwiZWNcIjpcIjUxLjUxOTQ2LC0wLjA1OTk4XCIsXCJpbl9zdGF0aW9uXCI6XCIxLzYwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTE5NDYsLTAuMDU5OThcIn0se1wiZHVyYXRpb25cIjoxODAsXCJlbmRcIjpcIk1pbGVFbmRcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkRpc3RyaWN0XCIsXCJIYW1tZXJzbWl0aEFuZENpdHlcIl0sXCJzdGFydFwiOlwiV2hpdGVjaGFwZWxcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9XaGl0ZWNoYXBlbF9ESGNfZEVcIixcIlBsYXRmb3JtX01pbGVFbmRfREhjX2RFXCJdfSx7XCJkaXN0YW5jZVwiOjQ5NixcImR1cmF0aW9uXCI6NDU0LFwiZWNcIjpcIjUxLjUyMjU3LC0wLjAzNzAyXCIsXCJmcm9tX2V4aXRcIjpcIk1pbGVFbmRfRTM1MDZcIixcImluX3N0YXRpb25cIjpcIjIvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MjUyNCwtMC4wMzMzOFwifV0sXCJwcmljZV9wZW5jZVwiOjI2MCxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjQzNmQzNTNmLTQyNjQtNDZlNy1hMWQ1LTFiNWE2MzBjZjY5NVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjUyNTUwMywtMC4wODIyMjNcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTEzVDExOjA3OjAxKzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.9XdqchKbeAg_oFz7wTjMtGGgGN1dRhgZps97-bMd6a0',
  },
  {
    start: {
      coordinates: {
        lat: 51.525503,
        lon: -0.082223,
      },
    },
    end: {
      coordinates: {
        lat: 51.522569,
        lon: -0.037005,
      },
    },
    distance_meters: 825,
    duration_seconds: 1556,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£4.25',
      amount: '4.25',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 64,
        path: '_qnyHnaOEJCDq@fBWl@EI',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:07:01+01:00',
          leg_arrival_time: '2022-07-13T11:08:05+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'ysnyHlfOFJdFkMfCyEdAsBM]OkJxFvB|BjAlEzB|E`@jA`@dFfBfAbADM',
        stops: [
          {
            id: '490011448S',
            name: 'Pitfield Street',
            coordinates: {
              lat: 51.525894,
              lon: -0.083112,
            },
            indicator_text: 'M',
          },
          {
            id: '490005910S',
            name: 'Shoreditch High Street Station',
            coordinates: {
              lat: 51.524049,
              lon: -0.07973,
            },
            indicator_text: 'B',
          },
          {
            id: '490005524D',
            name: 'Commercial Street / Worship Street',
            coordinates: {
              lat: 51.521928,
              lon: -0.078147,
            },
            indicator_text: 'D',
          },
          {
            id: '490011187S',
            name: 'Primrose Street',
            coordinates: {
              lat: 51.519408,
              lon: -0.079089,
            },
            indicator_text: 'J',
          },
          {
            id: '490000138L',
            name: 'Liverpool Street Station',
            coordinates: {
              lat: 51.517884,
              lon: -0.07996,
            },
            indicator_text: 'L',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus135',
              frequency_seconds_range: [297, 297],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LondonBus205',
              frequency_seconds_range: [297, 297],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus135', 'LondonBus205'],
            },
          ],
          leg_departure_time: '2022-07-13T11:09:00+01:00',
          leg_arrival_time: '2022-07-13T11:15:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus135',
            name: '135',
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
            id: 'LondonBus205',
            name: '205',
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
        duration_seconds: 226,
        path: 'wamyHvrNENB@HFTTJLB@HHJLDDFFEJ',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:15:00+01:00',
          leg_arrival_time: '2022-07-13T11:18:46+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'LiverpoolStreet_E1_BishopsgateW',
            stop_id: 'LiverpoolStreet',
            coordinates: {
              lat: 51.5174955,
              lon: -0.0805288,
            },
            name: 'Bishopsgate (West)',
            short_name: '1',
          },
          alternate_exits: [
            {
              id: 'LiverpoolStreet_E2_BishopsgateE',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.517313,
                lon: -0.0804204,
              },
              name: 'Bishopsgate (East) via subway',
              short_name: '2',
            },
            {
              id: 'LiverpoolStreet_E3_OldBroadSt',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5176825,
                lon: -0.0826327,
              },
              name: 'Old Broad St',
              short_name: '3',
            },
            {
              id: 'LiverpoolStreet_E4_Broadgate',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.51819,
                lon: -0.083653,
              },
              name: 'Broadgate',
              short_name: '4',
            },
            {
              id: 'LiverpoolStreet_E5_SunSt',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5189729,
                lon: -0.0822231,
              },
              name: 'Sun St Passage',
              short_name: '5',
            },
            {
              id: 'LiverpoolStreet_E6_ExchangeSq',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5189393,
                lon: -0.0821265,
              },
              name: 'Exchange Square',
              short_name: '6',
            },
            {
              id: 'LiverpoolStreet_E7_Buses',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5179223,
                lon: -0.0827478,
              },
              name: 'Buses',
            },
            {
              id: 'LiverpoolStreet_E_Broadgate',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5178027,
                lon: -0.08379668,
              },
              name: 'Broadgate',
            },
          ],
          duration_seconds: 180,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'a_myHxeOCVe@SeByAcBeB_ScZ_EsHeAyBeIyUeDcJcDsLe@wB]yBYwCkA{Yy@wQKcD?eCBsB`@cFHi@l@sD`Nck@jAmF^eCRqCVaGJkGBeHKqGIgBa@sD_@}BmBgIm@iDe@qFr@U',
        stops: [
          {
            id: 'LiverpoolStreet',
            name: 'Liverpool Street',
            coordinates: {
              lat: 51.517742,
              lon: -0.081662,
            },
          },
          {
            id: 'BethnalGreen',
            name: 'Bethnal Green',
            coordinates: {
              lat: 51.527195,
              lon: -0.055431,
            },
          },
          {
            id: 'MileEnd',
            name: 'Mile End',
            coordinates: {
              lat: 51.525082,
              lon: -0.033289,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Central',
              frequency_seconds_range: [146, 146],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Central'],
            },
          ],
          leg_departure_time: '2022-07-13T11:21:00+01:00',
          leg_arrival_time: '2022-07-13T11:26:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Central',
            name: 'Central',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/d1f430ba45fc7d134d841d060ecad2b6e2ad60550ec46761e8f55f81/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/7cc6a7780f45d7deacef753dc95309cab47b478ea0a8a9181c0b032c/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#DC241F',
            background_color: '#DC241F',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: false,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 434,
        path: 'wonyHroEOL@D@J@FBTJj@F`@DR?HBVBLBPP`@Jd@HCFC@P@DFCBT\\Y^UJENCZ@NBJBRBPD^ZBDRRJNFHHJHNLRZt@Z`@@DBHJPBP@FDH?D@P@N@RBJ@DDTLx@HGNA',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:26:00+01:00',
          leg_arrival_time: '2022-07-13T11:33:14+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'MileEnd_E3506',
            stop_id: 'MileEnd',
            coordinates: {
              lat: 51.5252397,
              lon: -0.0333789,
            },
          },
          duration_seconds: 70,
        },
      },
    ],
    route_departure_time: '2022-07-13T11:07:01+01:00',
    route_arrival_time: '2022-07-13T11:33:14+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwNjgyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzgyMSxcImR1cmF0aW9uXCI6MTU1NixcImVuZFwiOntcImNvb3Jkc1wiOlwiNTEuNTIyNTY5LC0wLjAzNzAwNVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6NzksXCJkdXJhdGlvblwiOjY0LFwiZWNcIjpcIjUxLjUyNTg5LC0wLjA4MzExXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTI1NDQsLTAuMDgyMzJcIn0se1wiZHVyYXRpb25cIjozNjAsXCJlbmRcIjpcIjQ5MDAwMDEzOExcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkxvbmRvbkJ1czEzNVwiLFwiTG9uZG9uQnVzMjA1XCJdLFwic3RhcnRcIjpcIjQ5MDAxMTQ0OFNcIixcInN0b3BfY291bnRcIjo1fSx7XCJkaXN0YW5jZVwiOjI1MCxcImR1cmF0aW9uXCI6MjI2LFwiZWNcIjpcIjUxLjUxNzUsLTAuMDgwNTNcIixcImluX3N0YXRpb25cIjpcIjAvMTgwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTE3ODgsLTAuMDc5OTZcIixcInRvX2V4aXRcIjpcIkxpdmVycG9vbFN0cmVldF9FMV9CaXNob3BzZ2F0ZVdcIn0se1wiZHVyYXRpb25cIjozMDAsXCJlbmRcIjpcIk1pbGVFbmRcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkNlbnRyYWxcIl0sXCJzdGFydFwiOlwiTGl2ZXJwb29sU3RyZWV0XCIsXCJzdG9wX2NvdW50XCI6MyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fTGl2ZXJwb29sU3RyZWV0X0NfZE5FXCIsXCJQbGF0Zm9ybV9NaWxlRW5kX0NfZE5FXCJdfSx7XCJkaXN0YW5jZVwiOjQ5NixcImR1cmF0aW9uXCI6NDM0LFwiZWNcIjpcIjUxLjUyMjU3LC0wLjAzNzAyXCIsXCJmcm9tX2V4aXRcIjpcIk1pbGVFbmRfRTM1MDZcIixcImluX3N0YXRpb25cIjpcIjIvNzBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MjUyNCwtMC4wMzMzOFwifV0sXCJwcmljZV9wZW5jZVwiOjQyNSxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjQzNmQzNTNmLTQyNjQtNDZlNy1hMWQ1LTFiNWE2MzBjZjY5NVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjUyNTUwMywtMC4wODIyMjNcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTEzVDExOjA3OjAxKzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.RuabYb8yay1SNXWdp21lTrNFia8wP_34APfHXaysNJ4',
  },
  {
    start: {
      coordinates: {
        lat: 51.525503,
        lon: -0.082223,
      },
    },
    end: {
      coordinates: {
        lat: 51.522569,
        lon: -0.037005,
      },
    },
    distance_meters: 1387,
    duration_seconds: 1654,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£4.25',
      amount: '4.25',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 801,
        path: '_qnyHnaOb@aAN]@CBGDK^}@Vk@Tk@LWXk@DI@ALUP_@LBH@H@D?H?b@@b@DDEF?D@@?J@D@ZHf@LTHZH\\Lz@ZNFRHd@RJBDDBDFCFCBBDBRHFBNHpAj@NFFBFBZPF_@DUBMD]\\LDBNHXNd@T@?LFnAl@RJH@XHXLFHfAd@@@?A',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:07:01+01:00',
          leg_arrival_time: '2022-07-13T11:20:22+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'LiverpoolStreet_E6_ExchangeSq',
            stop_id: 'LiverpoolStreet',
            coordinates: {
              lat: 51.5189393,
              lon: -0.0821265,
            },
            name: 'Exchange Square',
            short_name: '6',
          },
          alternate_exits: [
            {
              id: 'LiverpoolStreet_E1_BishopsgateW',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5174955,
                lon: -0.0805288,
              },
              name: 'Bishopsgate (West)',
              short_name: '1',
            },
            {
              id: 'LiverpoolStreet_E2_BishopsgateE',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.517313,
                lon: -0.0804204,
              },
              name: 'Bishopsgate (East) via subway',
              short_name: '2',
            },
            {
              id: 'LiverpoolStreet_E3_OldBroadSt',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5176825,
                lon: -0.0826327,
              },
              name: 'Old Broad St',
              short_name: '3',
            },
            {
              id: 'LiverpoolStreet_E4_Broadgate',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.51819,
                lon: -0.083653,
              },
              name: 'Broadgate',
              short_name: '4',
            },
            {
              id: 'LiverpoolStreet_E5_SunSt',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5189729,
                lon: -0.0822231,
              },
              name: 'Sun St Passage',
              short_name: '5',
            },
            {
              id: 'LiverpoolStreet_E7_Buses',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5179223,
                lon: -0.0827478,
              },
              name: 'Buses',
            },
            {
              id: 'LiverpoolStreet_E_Broadgate',
              stop_id: 'LiverpoolStreet',
              coordinates: {
                lat: 51.5178027,
                lon: -0.08379668,
              },
              name: 'Broadgate',
            },
          ],
          duration_seconds: 180,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'a_myHxeOCVe@SeByAcBeB_ScZ_EsHeAyBeIyUeDcJcDsLe@wB]yBYwCkA{Yy@wQKcD?eCBsB`@cFHi@l@sD`Nck@jAmF^eCRqCVaGJkGBeHKqGIgBa@sD_@}BmBgIm@iDe@qFr@U',
        stops: [
          {
            id: 'LiverpoolStreet',
            name: 'Liverpool Street',
            coordinates: {
              lat: 51.517742,
              lon: -0.081662,
            },
          },
          {
            id: 'BethnalGreen',
            name: 'Bethnal Green',
            coordinates: {
              lat: 51.527195,
              lon: -0.055431,
            },
          },
          {
            id: 'MileEnd',
            name: 'Mile End',
            coordinates: {
              lat: 51.525082,
              lon: -0.033289,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Central',
              frequency_seconds_range: [146, 146],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Central'],
            },
          ],
          leg_departure_time: '2022-07-13T11:21:00+01:00',
          leg_arrival_time: '2022-07-13T11:26:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Central',
            name: 'Central',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/d1f430ba45fc7d134d841d060ecad2b6e2ad60550ec46761e8f55f81/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/7cc6a7780f45d7deacef753dc95309cab47b478ea0a8a9181c0b032c/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#DC241F',
            background_color: '#DC241F',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: false,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 96,
        path: 'wonyHroEOLGUGa@?CFE',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:26:00+01:00',
          leg_arrival_time: '2022-07-13T11:27:36+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'MileEnd_E3506',
            stop_id: 'MileEnd',
            coordinates: {
              lat: 51.5252397,
              lon: -0.0333789,
            },
          },
          duration_seconds: 70,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 80,
        path: 'opnyH`nEE@rBtMxAtFDE',
        stops: [
          {
            id: '490000146C',
            name: 'Mile End Station',
            coordinates: {
              lat: 51.525364,
              lon: -0.033125,
            },
            indicator_text: 'C',
          },
          {
            id: '490007341W',
            name: 'Regents Canal',
            coordinates: {
              lat: 51.524326,
              lon: -0.036687,
            },
            indicator_text: 'F',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus25',
              frequency_seconds_range: [264, 264],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LondonBus205',
              frequency_seconds_range: [264, 264],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus25', 'LondonBus205'],
            },
          ],
          leg_departure_time: '2022-07-13T11:28:00+01:00',
          leg_arrival_time: '2022-07-13T11:29:20+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus25',
            name: '25',
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
            id: 'LondonBus205',
            name: '205',
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
        duration_seconds: 197,
        path: 'ajnyHhdFEDDNHXBY?C@CFRDNDPDNXWVMFCh@MFCDABAn@OPGJ?F@@DD?b@ED?HADTLx@HGNA',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:29:20+01:00',
          leg_arrival_time: '2022-07-13T11:32:37+01:00',
        },
      },
    ],
    route_departure_time: '2022-07-13T11:07:01+01:00',
    route_arrival_time: '2022-07-13T11:32:37+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwNjgyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzgyMSxcImR1cmF0aW9uXCI6MTY1NCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNTEuNTIyNTY5LC0wLjAzNzAwNVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjMsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTA3NCxcImR1cmF0aW9uXCI6ODAxLFwiZWNcIjpcIjUxLjUxODk0LC0wLjA4MjEzXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzE4MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUyNTQ0LC0wLjA4MjMyXCIsXCJ0b19leGl0XCI6XCJMaXZlcnBvb2xTdHJlZXRfRTZfRXhjaGFuZ2VTcVwifSx7XCJkdXJhdGlvblwiOjMwMCxcImVuZFwiOlwiTWlsZUVuZFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQ2VudHJhbFwiXSxcInN0YXJ0XCI6XCJMaXZlcnBvb2xTdHJlZXRcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9MaXZlcnBvb2xTdHJlZXRfQ19kTkVcIixcIlBsYXRmb3JtX01pbGVFbmRfQ19kTkVcIl19LHtcImRpc3RhbmNlXCI6NTMsXCJkdXJhdGlvblwiOjk2LFwiZWNcIjpcIjUxLjUyNTM2LC0wLjAzMzEyXCIsXCJmcm9tX2V4aXRcIjpcIk1pbGVFbmRfRTM1MDZcIixcImluX3N0YXRpb25cIjpcIjIvNzBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MjUyNCwtMC4wMzMzOFwifSx7XCJkdXJhdGlvblwiOjgwLFwiZW5kXCI6XCI0OTAwMDczNDFXXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJMb25kb25CdXMyMDVcIixcIkxvbmRvbkJ1czI1XCJdLFwic3RhcnRcIjpcIjQ5MDAwMDE0NkNcIixcInN0b3BfY291bnRcIjoyfSx7XCJkaXN0YW5jZVwiOjI2MCxcImR1cmF0aW9uXCI6MTk3LFwiZWNcIjpcIjUxLjUyMjU3LC0wLjAzNzAyXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTI0MzMsLTAuMDM2NjlcIn1dLFwicHJpY2VfcGVuY2VcIjo0MjUsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCI0MzZkMzUzZi00MjY0LTQ2ZTctYTFkNS0xYjVhNjMwY2Y2OTVcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS41MjU1MDMsLTAuMDgyMjIzXCJ9LFwidGltZVwiOlwiMjAyMi0wNy0xM1QxMTowNzowMSswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.VSJ2GfJ1BztwEiCZVLmOuCh3KYifNWg2myu9M4q-w4Q',
  },
  {
    start: {
      coordinates: {
        lat: 51.525503,
        lon: -0.082223,
      },
    },
    end: {
      coordinates: {
        lat: 51.522569,
        lon: -0.037005,
      },
    },
    distance_meters: 1923,
    duration_seconds: 2007,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 1136,
        path: '_qnyHnaOb@aAN]@CBGDK^}@Vk@Tk@LWXk@DI@ALUP_@P_@BIDGBIZi@@C??FKr@uAFMFK@CnAcCLS\\u@HC@CBGBGBOBWH[DSDK@I?Cf@y@b@o@DGBEJMRYFKHMFIV]LQ^i@h@w@NSHKFG@CJOt@y@??f@k@FGXW@ARSNKFGFAFCLCRAD?F?j@@f@?r@@@?D?L?b@@L?XAXGPCBAPAPCDAHEDCNMZMXULKb@]BCl@e@ZU@AfAy@@?BCNKDEFE~@u@hBuARONMBCDCHG??XWHG?@@???B@@???DEBJHEB@FB@@?ADE???????@@@@BBJGF',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:07:01+01:00',
          leg_arrival_time: '2022-07-13T11:25:57+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'AldgateEast_E2_Toynbee',
            stop_id: 'AldgateEast',
            coordinates: {
              lat: 51.515251,
              lon: -0.072172,
            },
            name: 'Toynbee Hall',
            short_name: '2',
          },
          alternate_exits: [
            {
              id: 'AldgateEast_E1_Leman',
              stop_id: 'AldgateEast',
              coordinates: {
                lat: 51.515036,
                lon: -0.071936,
              },
              name: 'Leman St',
              short_name: '1',
            },
            {
              id: 'AldgateEast_E3_WchapGal',
              stop_id: 'AldgateEast',
              coordinates: {
                lat: 51.5160292,
                lon: -0.070209,
              },
              name: 'Whitechapel Gallery',
              short_name: '3',
            },
            {
              id: 'AldgateEast_E4_WchapRd',
              stop_id: 'AldgateEast',
              coordinates: {
                lat: 51.5157889,
                lon: -0.0700089,
              },
              name: 'Whitechapel Road (South Side)',
              short_name: '4',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'eqlyHxbM`@]Qs@yImXoEiPeBmIWq@s@w@a@q@{@kB_@qAw@qEKcBAKCeBL_CPiCAaAs@uFwDw_@oDc\\McAg@{De@wG_@_Jq@iGoCyL}CkG{C}KyAcJn@_@',
        stops: [
          {
            id: 'AldgateEast',
            name: 'Aldgate East',
            coordinates: {
              lat: 51.515233,
              lon: -0.072287,
            },
          },
          {
            id: 'Whitechapel',
            name: 'Whitechapel',
            coordinates: {
              lat: 51.519455,
              lon: -0.059985,
            },
          },
          {
            id: 'StepneyGreen',
            name: 'Stepney Green',
            coordinates: {
              lat: 51.522026,
              lon: -0.046875,
            },
          },
          {
            id: 'MileEnd',
            name: 'Mile End',
            coordinates: {
              lat: 51.525082,
              lon: -0.033289,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'District',
              frequency_seconds_range: [172, 172],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'HammersmithAndCity',
              frequency_seconds_range: [172, 172],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['District', 'HammersmithAndCity'],
            },
          ],
          leg_departure_time: '2022-07-13T11:27:00+01:00',
          leg_arrival_time: '2022-07-13T11:33:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'District',
            name: 'District',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/67906b44ef950220bcc14815933871155c5d89cbe71c5aa1499c14a2/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/672b5e85dd65413374043b475f792473742712a786e4739808e241d5/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#007229',
            background_color: '#007229',
            text_color: '#FFFFFF',
          },
          {
            id: 'HammersmithAndCity',
            name: 'Hammersmith & City',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/3cd9d0ee946ff4b4376346eabd45d6d47901c8c35790a1b75d538f8c/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/de57e2a9b140fd0f9ebe4d5cc5af2237779c8267e7e9ec6a5446bc14/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#D799AF',
            background_color: '#D18BA4',
            text_color: '#113B92',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: true,
          back: false,
        },
        direction_description: 'Eastbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 454,
        path: 'wonyHroEOL@D@J@FBTJj@F`@DR?HBVBLBPP`@Jd@HCFC@P@DFCBT\\Y^UJENCZ@NBJBRBPD^ZBDRRJNFHHJHNLRZt@Z`@@DBHJPBP@FDH?D@P@N@RBJ@DDTLx@HGNA',
        updatable_detail: {
          leg_departure_time: '2022-07-13T11:33:00+01:00',
          leg_arrival_time: '2022-07-13T11:40:34+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'MileEnd_E3506',
            stop_id: 'MileEnd',
            coordinates: {
              lat: 51.5252397,
              lon: -0.0333789,
            },
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-13T11:07:01+01:00',
    route_arrival_time: '2022-07-13T11:40:34+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzcwNjgyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MzgyMSxcImR1cmF0aW9uXCI6MjAwNyxcImVuZFwiOntcImNvb3Jkc1wiOlwiNTEuNTIyNTY5LC0wLjAzNzAwNVwifSxcImVudmlyb25tZW50XCI6XCJzdGFnaW5nXCIsXCJqcl9pbmRleFwiOjQsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTQyNyxcImR1cmF0aW9uXCI6MTEzNixcImVjXCI6XCI1MS41MTUyNSwtMC4wNzIxN1wiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUyNTQ0LC0wLjA4MjMyXCIsXCJ0b19leGl0XCI6XCJBbGRnYXRlRWFzdF9FMl9Ub3luYmVlXCJ9LHtcImR1cmF0aW9uXCI6MzYwLFwiZW5kXCI6XCJNaWxlRW5kXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJEaXN0cmljdFwiLFwiSGFtbWVyc21pdGhBbmRDaXR5XCJdLFwic3RhcnRcIjpcIkFsZGdhdGVFYXN0XCIsXCJzdG9wX2NvdW50XCI6NCxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fQWxkZ2F0ZUVhc3RfREhjX2RORVwiLFwiUGxhdGZvcm1fTWlsZUVuZF9ESGNfZEVcIl19LHtcImRpc3RhbmNlXCI6NDk2LFwiZHVyYXRpb25cIjo0NTQsXCJlY1wiOlwiNTEuNTIyNTcsLTAuMDM3MDJcIixcImZyb21fZXhpdFwiOlwiTWlsZUVuZF9FMzUwNlwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUyNTI0LC0wLjAzMzM4XCJ9XSxcInByaWNlX3BlbmNlXCI6MjYwLFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNDM2ZDM1M2YtNDI2NC00NmU3LWExZDUtMWI1YTYzMGNmNjk1XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNTI1NTAzLC0wLjA4MjIyM1wifSxcInRpbWVcIjpcIjIwMjItMDctMTNUMTE6MDc6MDErMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.een5Rkdf3j6syJXQj2V659QFKCdfB2n4mRw-CwJ9PmU',
  },
] as Route[]
