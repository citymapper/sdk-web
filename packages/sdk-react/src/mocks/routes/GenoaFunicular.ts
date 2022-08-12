import { Route } from '@citymapper/api/@types/Route'

export default [
  {
    start: {
      coordinates: {
        lat: 44.416046,
        lon: 8.91717,
      },
    },
    end: {
      coordinates: {
        lat: 44.42548,
        lon: 8.936073,
      },
    },
    distance_meters: 678,
    duration_seconds: 2043,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 268,
        path: 'k~anGwslu@AGKo@t@Y?K@IDGHAFDBHp@WCQLEBAi@qDIKMI@Qm@EI@WFSLIFGDUq@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:19:28+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 420,
        path: 'q`bnGw_mu@Lt@eAd@^gEJ{@~@eHMcA}@gAHk@YOMIKs@u@Uu@VQ^Kb@QNiBZBdFGn@WGWmDcAeCkDuI}@LbAzEo@JoE{NTo@\\Ad@\\\\V~EtCt@yA@s@@s@x@sJG[O[qAi@qF_Ci@o@Y{@a@qAOQw@]O_@@m@JWZIn@Tr@GRKdAkB\\O@F',
        stops: [
          {
            id: 'GenovaStop_FantiDitaliaprincipeFs_E',
            name: "Fanti D'Italia/Principe FS",
            coordinates: {
              lat: 44.416252,
              lon: 8.919155,
            },
          },
          {
            id: 'GenovaStop_DoriametroPrincipe_NE',
            name: "Doria/Metro' Principe",
            coordinates: {
              lat: 44.416279,
              lon: 8.91999,
            },
          },
          {
            id: 'GenovaStop_PrincipeFs_NW',
            name: 'Principe FS',
            coordinates: {
              lat: 44.416454,
              lon: 8.922449,
            },
          },
          {
            id: 'GenovaStop_Provvidenzaavezzana_NE',
            name: 'Provvidenza/Avezzana',
            coordinates: {
              lat: 44.417892,
              lon: 8.921063,
            },
          },
          {
            id: 'GenovaStop_Ferreiraosservatorio_NE',
            name: 'Ferreira/Osservatorio',
            coordinates: {
              lat: 44.418438,
              lon: 8.922452,
            },
          },
          {
            id: 'GenovaStop_Santugoalmeria_W',
            name: "Sant'Ugo/Almeria",
            coordinates: {
              lat: 44.419384,
              lon: 8.924216,
            },
          },
          {
            id: 'GenovaStop_Almeriaosservatorio_NE',
            name: 'Almeria/Osservatorio',
            coordinates: {
              lat: 44.419373,
              lon: 8.922905,
            },
          },
          {
            id: 'GenovaStop_BassigiardiniMontale_S',
            name: 'Bassi/Giardini Montale',
            coordinates: {
              lat: 44.420174,
              lon: 8.925448,
            },
          },
          {
            id: 'GenovaStop_Firenze1Dogali_E',
            name: 'Firenze 1/Dogali',
            coordinates: {
              lat: 44.418591,
              lon: 8.925359,
            },
          },
          {
            id: 'GenovaStop_Firenze2SanBarnaba_NE',
            name: 'Firenze 2/San Barnaba',
            coordinates: {
              lat: 44.418808,
              lon: 8.928041,
            },
          },
          {
            id: 'GenovaStop_Firenze3Pellizzari_SE',
            name: 'Firenze 3/Pellizzari',
            coordinates: {
              lat: 44.420353,
              lon: 8.92917,
            },
          },
          {
            id: 'GenovaStop_Firenze4SanNicola_SE',
            name: 'Firenze 4/San Nicola',
            coordinates: {
              lat: 44.419666,
              lon: 8.930932,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus36',
              frequency_seconds_range: [520, 520],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaBus36'],
            },
          ],
          leg_departure_time: '2022-07-01T12:27:00+02:00',
          leg_arrival_time: '2022-07-01T12:34:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'AMTGenovaBus36',
            name: '36',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#8b168a',
            background_color: '#8b168a',
          },
        ],
        direction_description: 'Merani/Capolinea',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 158,
        path: '}ubnGiiou@AKKDCMEUAWEUDuA',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:34:00+02:00',
          leg_arrival_time: '2022-07-01T12:36:38+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'GenovaStation_SanNicoloimpSpec_default',
            stop_id: 'GenovaStation_SanNicoloimpSpec',
            coordinates: {
              lat: 44.4198,
              lon: 8.9318,
            },
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 180,
        path: '_ybnGeoou@?CKA[K_@Og@]_Am@u@g@MI[YMO]e@Wk@g@qAy@qByBaGGQ_A_CiAyCk@{AKC',
        stops: [
          {
            id: 'GenovaStation_SanNicoloimpSpec',
            name: "San Nicolo'",
            coordinates: {
              lat: 44.4198,
              lon: 8.9318,
            },
          },
          {
            id: 'GenovaStation_FossatoimpSpec',
            name: 'Fossato',
            coordinates: {
              lat: 44.4215,
              lon: 8.93279,
            },
          },
          {
            id: 'GenovaStation_ViaPreveimpSpec',
            name: 'Via Preve',
            coordinates: {
              lat: 44.42233,
              lon: 8.93427,
            },
          },
          {
            id: 'GenovaStation_SanSimoneimpSpec',
            name: 'San Simone',
            coordinates: {
              lat: 44.42298,
              lon: 8.93565,
            },
          },
          {
            id: 'GenovaStation_RighiimpSpec',
            name: 'Righi',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaFunicularFri',
              frequency_seconds_range: [1125, 1125],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaFunicularFri'],
            },
          ],
          leg_departure_time: '2022-07-01T12:48:00+02:00',
          leg_arrival_time: '2022-07-01T12:51:00+02:00',
        },
        vehicle_types: ['funicular'],
        services: [
          {
            id: 'AMTGenovaFunicularFri',
            name: 'FRI',
            vehicle_types: ['funicular'],
            brand: {
              id: 'AMTGenovaFunicular',
              name: 'Funicular',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a271bfe94909a1b2bebc32b592c229e2bd775f4b63dfa800be116b32/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9c98395266aa8869fad6c7839a798eabceb30875da6be571294178cd/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/97fa5e6ec66a0b5a5b3003d7f81d1ea3e0d505f647035b960367c84d/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/08216922643bcec0a8947c871baf58cd8860e7681c7f07ef5ebbc32b/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4b4bbb062a1decd3111c8873ed30be6303d061a7a496497a15600641/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4bbc2f784ff500dbbaabe489427b30e6d3ca19263c258131253f5818/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/135b2b2586e749b1755e15e4ea3d9b5217e2e1304c922bffae39505b/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/cc591b74fad7fdee7284f4c6fbc32d6de1139f04d7c28b2dd22a73b8/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#da241b',
            background_color: '#da241b',
          },
        ],
        direction_description: 'Righi',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 282,
        path: 'sqcnG}spu@SUABGNEDIREFINEFQTUNu@|@o@bAiA`B',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:51:00+02:00',
          leg_arrival_time: '2022-07-01T12:55:42+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'GenovaStation_RighiimpSpec_default',
            stop_id: 'GenovaStation_RighiimpSpec',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:55:42+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDEyNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6NTgzOCxcImR1cmF0aW9uXCI6MjA0MyxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDI1NDgsOC45MzYwNzNcIn0sXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MzIxLFwiZHVyYXRpb25cIjoyNjgsXCJlY1wiOlwiNDQuNDE2MjUsOC45MTkxNlwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQxNTksOC45MTcyNFwifSx7XCJkdXJhdGlvblwiOjQyMCxcImVuZFwiOlwiR2Vub3ZhU3RvcF9GaXJlbnplNFNhbk5pY29sYV9TRVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhQnVzMzZcIl0sXCJzdGFydFwiOlwiR2Vub3ZhU3RvcF9GYW50aURpdGFsaWFwcmluY2lwZUZzX0VcIixcInN0b3BfY291bnRcIjoxMn0se1wiZGlzdGFuY2VcIjoxMjAsXCJkdXJhdGlvblwiOjE1OCxcImVjXCI6XCI0NC40MTk4LDguOTMxOFwiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQxOTY3LDguOTMwOTNcIixcInRvX2V4aXRcIjpcIkdlbm92YVN0YXRpb25fU2FuTmljb2xvaW1wU3BlY19kZWZhdWx0XCJ9LHtcImR1cmF0aW9uXCI6MTgwLFwiZW5kXCI6XCJHZW5vdmFTdGF0aW9uX1JpZ2hpaW1wU3BlY1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhRnVuaWN1bGFyRnJpXCJdLFwic3RhcnRcIjpcIkdlbm92YVN0YXRpb25fU2FuTmljb2xvaW1wU3BlY1wiLFwic3RvcF9jb3VudFwiOjUsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX0dlbm92YVNhbk5pY29sb2ltcFNwZWNfQU1UR2Vub3ZhRnVuaWN1bGFyXCIsXCJQbGF0Zm9ybV9HZW5vdmFSaWdoaWltcFNwZWNfRl9UXCJdfSx7XCJkaXN0YW5jZVwiOjIzNyxcImR1cmF0aW9uXCI6MjgyLFwiZWNcIjpcIjQ0LjQyNTUyLDguOTM2MTRcIixcImZyb21fZXhpdFwiOlwiR2Vub3ZhU3RhdGlvbl9SaWdoaWltcFNwZWNfZGVmYXVsdFwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQyNDEsOC45Mzc3NVwifV0sXCJwcmljZV9wZW5jZVwiOjE1MCxcInJlZ2lvblwiOlwiaXQtZ2Vub3ZhXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjRkOWI1YzEyLTMxN2EtNDVmZC05ZDRjLTRmNTQ2NTVjNzg2NFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQ0LjQxNjA0Niw4LjkxNzE3XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMjoxNTowMCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6Iml0LWdlbm92YSJ9.76YDo5IR8nBa3nIy5_G-lYBxat3XuJLrjU_4wKmbaVo',
  },
  {
    start: {
      coordinates: {
        lat: 44.416046,
        lon: 8.91717,
      },
    },
    end: {
      coordinates: {
        lat: 44.42548,
        lon: 8.936073,
      },
    },
    distance_meters: 773,
    duration_seconds: 2108,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 249,
        path: 'k~anGwslu@AGKo@t@Y?K@IDGHAFDBHp@WCQLEBAi@qDIKMI@Q\\BD\\DVHt@@?DC',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:19:09+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 240,
        path: 'izanGy{lu@EBWkBk@wIb@uD\\oCf@kCv@{BpEgI|DiHdC{BvB}Ad@GpBu@rAQQ{Aw@BoBdA{@~@BNgG`Fs@sA{B}BJs@@?',
        stops: [
          {
            id: 'GenovaStop_MarittimaprincipeFs_E',
            name: 'Marittima/Principe FS',
            coordinates: {
              lat: 44.415249,
              lon: 8.918525,
            },
          },
          {
            id: 'GenovaStop_Gramsci1Commenda_SE',
            name: 'Gramsci 1/Commenda',
            coordinates: {
              lat: 44.415398,
              lon: 8.921661,
            },
          },
          {
            id: 'GenovaStop_Gramsci2MetroDarsena_SE',
            name: "Gramsci 2/Metro' Darsena",
            coordinates: {
              lat: 44.413757,
              lon: 8.92536,
            },
          },
          {
            id: 'GenovaStop_Nunziata_SE',
            name: 'Nunziata',
            coordinates: {
              lat: 44.413696,
              lon: 8.928207,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus18',
              frequency_seconds_range: [235, 235],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus20',
              frequency_seconds_range: [235, 235],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaBus18', 'AMTGenovaBus20'],
            },
          ],
          leg_departure_time: '2022-07-01T12:23:00+02:00',
          leg_arrival_time: '2022-07-01T12:27:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'AMTGenovaBus18',
            name: '18',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#ff0000',
            background_color: '#ff0000',
          },
          {
            id: 'AMTGenovaBus20',
            name: '20',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#ff0000',
            background_color: '#ff0000',
          },
        ],
        direction_description:
          'Mosso/Pronto Soccorso | Ospedale San Martino/Capolinea | Rimassa/Morin',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 337,
        path: 'spanGixnu@CADWDWHc@Hi@@E\\wBF[B]B[BQO@CKAECSBUGIIKJi@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:27:00+02:00',
          leg_arrival_time: '2022-07-01T12:32:37+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'GenovaStation_ZeccaimpSpec_default',
            stop_id: 'GenovaStation_ZeccaimpSpec',
            coordinates: {
              lat: 44.41344,
              lon: 8.93061,
            },
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'ipanGyfou@?M}@@c@As@I}Cs@WKQMQOe@k@Y[[[g@S]CY?k@FS@MB}BNg@BgAB_EGiCg@_@C??i@IYEKA[K_@Og@]_Am@u@g@MI[YMO]e@Wk@g@qAy@qByBaGGQ_A_CiAyCk@{AKC',
        stops: [
          {
            id: 'GenovaStation_ZeccaimpSpec',
            name: 'Zecca',
            coordinates: {
              lat: 44.41344,
              lon: 8.93061,
            },
          },
          {
            id: 'GenovaStation_CarbonaraimpSpec',
            name: 'Carbonara',
            coordinates: {
              lat: 44.41673,
              lon: 8.93168,
            },
          },
          {
            id: 'GenovaStation_SanNicoloimpSpec',
            name: "San Nicolo'",
            coordinates: {
              lat: 44.4198,
              lon: 8.9318,
            },
          },
          {
            id: 'GenovaStation_FossatoimpSpec',
            name: 'Fossato',
            coordinates: {
              lat: 44.4215,
              lon: 8.93279,
            },
          },
          {
            id: 'GenovaStation_ViaPreveimpSpec',
            name: 'Via Preve',
            coordinates: {
              lat: 44.42233,
              lon: 8.93427,
            },
          },
          {
            id: 'GenovaStation_SanSimoneimpSpec',
            name: 'San Simone',
            coordinates: {
              lat: 44.42298,
              lon: 8.93565,
            },
          },
          {
            id: 'GenovaStation_RighiimpSpec',
            name: 'Righi',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaFunicularFri',
              frequency_seconds_range: [1125, 1125],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaFunicularFri'],
            },
          ],
          leg_departure_time: '2022-07-01T12:45:00+02:00',
          leg_arrival_time: '2022-07-01T12:51:00+02:00',
        },
        vehicle_types: ['funicular'],
        services: [
          {
            id: 'AMTGenovaFunicularFri',
            name: 'FRI',
            vehicle_types: ['funicular'],
            brand: {
              id: 'AMTGenovaFunicular',
              name: 'Funicular',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a271bfe94909a1b2bebc32b592c229e2bd775f4b63dfa800be116b32/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9c98395266aa8869fad6c7839a798eabceb30875da6be571294178cd/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/97fa5e6ec66a0b5a5b3003d7f81d1ea3e0d505f647035b960367c84d/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/08216922643bcec0a8947c871baf58cd8860e7681c7f07ef5ebbc32b/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4b4bbb062a1decd3111c8873ed30be6303d061a7a496497a15600641/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4bbc2f784ff500dbbaabe489427b30e6d3ca19263c258131253f5818/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/135b2b2586e749b1755e15e4ea3d9b5217e2e1304c922bffae39505b/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/cc591b74fad7fdee7284f4c6fbc32d6de1139f04d7c28b2dd22a73b8/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#da241b',
            background_color: '#da241b',
          },
        ],
        direction_description: 'Righi',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 282,
        path: 'sqcnG}spu@SUABGNEDIREFINEFQTUNu@|@o@bAiA`B',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:51:00+02:00',
          leg_arrival_time: '2022-07-01T12:55:42+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'GenovaStation_RighiimpSpec_default',
            stop_id: 'GenovaStation_RighiimpSpec',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:55:42+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDEyNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6NTgzOCxcImR1cmF0aW9uXCI6MjEwOCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDI1NDgsOC45MzYwNzNcIn0sXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6Mjk1LFwiZHVyYXRpb25cIjoyNDksXCJlY1wiOlwiNDQuNDE1MjUsOC45MTg1M1wiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQxNTksOC45MTcyNFwifSx7XCJkdXJhdGlvblwiOjI0MCxcImVuZFwiOlwiR2Vub3ZhU3RvcF9OdW56aWF0YV9TRVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhQnVzMThcIixcIkFNVEdlbm92YUJ1czIwXCJdLFwic3RhcnRcIjpcIkdlbm92YVN0b3BfTWFyaXR0aW1hcHJpbmNpcGVGc19FXCIsXCJzdG9wX2NvdW50XCI6NH0se1wiZGlzdGFuY2VcIjoyNDEsXCJkdXJhdGlvblwiOjMzNyxcImVjXCI6XCI0NC40MTM0NCw4LjkzMDYxXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDEzNyw4LjkyODIxXCIsXCJ0b19leGl0XCI6XCJHZW5vdmFTdGF0aW9uX1plY2NhaW1wU3BlY19kZWZhdWx0XCJ9LHtcImR1cmF0aW9uXCI6MzYwLFwiZW5kXCI6XCJHZW5vdmFTdGF0aW9uX1JpZ2hpaW1wU3BlY1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhRnVuaWN1bGFyRnJpXCJdLFwic3RhcnRcIjpcIkdlbm92YVN0YXRpb25fWmVjY2FpbXBTcGVjXCIsXCJzdG9wX2NvdW50XCI6NyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fR2Vub3ZhWmVjY2FpbXBTcGVjX0FNVEdlbm92YUZ1bmljdWxhcl8xXCIsXCJQbGF0Zm9ybV9HZW5vdmFSaWdoaWltcFNwZWNfRl9UXCJdfSx7XCJkaXN0YW5jZVwiOjIzNyxcImR1cmF0aW9uXCI6MjgyLFwiZWNcIjpcIjQ0LjQyNTUyLDguOTM2MTRcIixcImZyb21fZXhpdFwiOlwiR2Vub3ZhU3RhdGlvbl9SaWdoaWltcFNwZWNfZGVmYXVsdFwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQyNDEsOC45Mzc3NVwifV0sXCJwcmljZV9wZW5jZVwiOjE1MCxcInJlZ2lvblwiOlwiaXQtZ2Vub3ZhXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjRkOWI1YzEyLTMxN2EtNDVmZC05ZDRjLTRmNTQ2NTVjNzg2NFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQ0LjQxNjA0Niw4LjkxNzE3XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMjoxNTowMCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6Iml0LWdlbm92YSJ9.W3KBd2nFnOUabPWt1dYZaQgceAcCo0e_KfnRfbPLoKM',
  },
  {
    start: {
      coordinates: {
        lat: 44.416046,
        lon: 8.91717,
      },
    },
    end: {
      coordinates: {
        lat: 44.42548,
        lon: 8.936073,
      },
    },
    distance_meters: 1604,
    duration_seconds: 2346,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 1329,
        path: 'k~anGwslu@AGKo@t@Y?K@IDGHAFDBHp@WCQLEBAi@qDIKMI@QBU@?BG@G?GOyAGs@Gs@Ec@?IFiAJ@PqALoAXqCf@kCv@{Bf@cAFKzB{Dd@{@DIhBgDb@{@HMVc@FIESGWC@CCOS_@k@W_@MQKIAACAs@i@CE?EZiBBOLk@ZwB@GKCF[B]B[BQO@CKAECSBUGIIKJi@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:37:09+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'GenovaStation_ZeccaimpSpec_default',
            stop_id: 'GenovaStation_ZeccaimpSpec',
            coordinates: {
              lat: 44.41344,
              lon: 8.93061,
            },
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'ipanGyfou@?M}@@c@As@I}Cs@WKQMQOe@k@Y[[[g@S]CY?k@FS@MB}BNg@BgAB_EGiCg@_@C??i@IYEKA[K_@Og@]_Am@u@g@MI[YMO]e@Wk@g@qAy@qByBaGGQ_A_CiAyCk@{AKC',
        stops: [
          {
            id: 'GenovaStation_ZeccaimpSpec',
            name: 'Zecca',
            coordinates: {
              lat: 44.41344,
              lon: 8.93061,
            },
          },
          {
            id: 'GenovaStation_CarbonaraimpSpec',
            name: 'Carbonara',
            coordinates: {
              lat: 44.41673,
              lon: 8.93168,
            },
          },
          {
            id: 'GenovaStation_SanNicoloimpSpec',
            name: "San Nicolo'",
            coordinates: {
              lat: 44.4198,
              lon: 8.9318,
            },
          },
          {
            id: 'GenovaStation_FossatoimpSpec',
            name: 'Fossato',
            coordinates: {
              lat: 44.4215,
              lon: 8.93279,
            },
          },
          {
            id: 'GenovaStation_ViaPreveimpSpec',
            name: 'Via Preve',
            coordinates: {
              lat: 44.42233,
              lon: 8.93427,
            },
          },
          {
            id: 'GenovaStation_SanSimoneimpSpec',
            name: 'San Simone',
            coordinates: {
              lat: 44.42298,
              lon: 8.93565,
            },
          },
          {
            id: 'GenovaStation_RighiimpSpec',
            name: 'Righi',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaFunicularFri',
              frequency_seconds_range: [1125, 1125],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaFunicularFri'],
            },
          ],
          leg_departure_time: '2022-07-01T12:45:00+02:00',
          leg_arrival_time: '2022-07-01T12:51:00+02:00',
        },
        vehicle_types: ['funicular'],
        services: [
          {
            id: 'AMTGenovaFunicularFri',
            name: 'FRI',
            vehicle_types: ['funicular'],
            brand: {
              id: 'AMTGenovaFunicular',
              name: 'Funicular',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a271bfe94909a1b2bebc32b592c229e2bd775f4b63dfa800be116b32/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9c98395266aa8869fad6c7839a798eabceb30875da6be571294178cd/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/97fa5e6ec66a0b5a5b3003d7f81d1ea3e0d505f647035b960367c84d/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/08216922643bcec0a8947c871baf58cd8860e7681c7f07ef5ebbc32b/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4b4bbb062a1decd3111c8873ed30be6303d061a7a496497a15600641/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4bbc2f784ff500dbbaabe489427b30e6d3ca19263c258131253f5818/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/135b2b2586e749b1755e15e4ea3d9b5217e2e1304c922bffae39505b/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/cc591b74fad7fdee7284f4c6fbc32d6de1139f04d7c28b2dd22a73b8/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#da241b',
            background_color: '#da241b',
          },
        ],
        direction_description: 'Righi',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 282,
        path: 'sqcnG}spu@SUABGNEDIREFINEFQTUNu@|@o@bAiA`B',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:51:00+02:00',
          leg_arrival_time: '2022-07-01T12:55:42+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'GenovaStation_RighiimpSpec_default',
            stop_id: 'GenovaStation_RighiimpSpec',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:55:42+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDEyNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6NTgzOCxcImR1cmF0aW9uXCI6MjM0NixcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDI1NDgsOC45MzYwNzNcIn0sXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTM2NyxcImR1cmF0aW9uXCI6MTMyOSxcImVjXCI6XCI0NC40MTM0NCw4LjkzMDYxXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDE1OSw4LjkxNzI0XCIsXCJ0b19leGl0XCI6XCJHZW5vdmFTdGF0aW9uX1plY2NhaW1wU3BlY19kZWZhdWx0XCJ9LHtcImR1cmF0aW9uXCI6MzYwLFwiZW5kXCI6XCJHZW5vdmFTdGF0aW9uX1JpZ2hpaW1wU3BlY1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhRnVuaWN1bGFyRnJpXCJdLFwic3RhcnRcIjpcIkdlbm92YVN0YXRpb25fWmVjY2FpbXBTcGVjXCIsXCJzdG9wX2NvdW50XCI6NyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fR2Vub3ZhWmVjY2FpbXBTcGVjX0FNVEdlbm92YUZ1bmljdWxhcl8xXCIsXCJQbGF0Zm9ybV9HZW5vdmFSaWdoaWltcFNwZWNfRl9UXCJdfSx7XCJkaXN0YW5jZVwiOjIzNyxcImR1cmF0aW9uXCI6MjgyLFwiZWNcIjpcIjQ0LjQyNTUyLDguOTM2MTRcIixcImZyb21fZXhpdFwiOlwiR2Vub3ZhU3RhdGlvbl9SaWdoaWltcFNwZWNfZGVmYXVsdFwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQyNDEsOC45Mzc3NVwifV0sXCJwcmljZV9wZW5jZVwiOjE1MCxcInJlZ2lvblwiOlwiaXQtZ2Vub3ZhXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjRkOWI1YzEyLTMxN2EtNDVmZC05ZDRjLTRmNTQ2NTVjNzg2NFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQ0LjQxNjA0Niw4LjkxNzE3XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMjoxNTowMCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6Iml0LWdlbm92YSJ9.M3qh5vQzCWqY49Ta9ukVTynizeXTxG52bjRo4iWCnWo',
  },
  {
    start: {
      coordinates: {
        lat: 44.416046,
        lon: 8.91717,
      },
    },
    end: {
      coordinates: {
        lat: 44.42548,
        lon: 8.936073,
      },
    },
    distance_meters: 931,
    duration_seconds: 2234,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 412,
        path: 'k~anGwslu@AGKo@t@Y?K@IDGHAFDBHp@WCQLEBAi@qDIKMI@QBU@?BG@G?GOyAGs@Gs@Ec@?IFiAJ@PqALoAB@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:21:52+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 240,
        path: 'g{anGkomu@GC\\oCf@kCv@{BpEgI|DiHdC{BvB}Ad@GpBu@rAQQ{Aw@BoBdA{@~@BNgG`Fs@sA{B}BJs@@?',
        stops: [
          {
            id: 'GenovaStop_Gramsci1Commenda_SE',
            name: 'Gramsci 1/Commenda',
            coordinates: {
              lat: 44.415398,
              lon: 8.921661,
            },
          },
          {
            id: 'GenovaStop_Gramsci2MetroDarsena_SE',
            name: "Gramsci 2/Metro' Darsena",
            coordinates: {
              lat: 44.413757,
              lon: 8.92536,
            },
          },
          {
            id: 'GenovaStop_Nunziata_SE',
            name: 'Nunziata',
            coordinates: {
              lat: 44.413696,
              lon: 8.928207,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus18',
              frequency_seconds_range: [123, 123],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus20',
              frequency_seconds_range: [123, 123],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus34',
              frequency_seconds_range: [123, 123],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus35',
              frequency_seconds_range: [123, 123],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: [
                'AMTGenovaBus18',
                'AMTGenovaBus20',
                'AMTGenovaBus34',
                'AMTGenovaBus35',
              ],
            },
          ],
          leg_departure_time: '2022-07-01T12:22:00+02:00',
          leg_arrival_time: '2022-07-01T12:26:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'AMTGenovaBus18',
            name: '18',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#ff0000',
            background_color: '#ff0000',
          },
          {
            id: 'AMTGenovaBus20',
            name: '20',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#ff0000',
            background_color: '#ff0000',
          },
          {
            id: 'AMTGenovaBus34',
            name: '34',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#fed222',
            background_color: '#fed222',
          },
          {
            id: 'AMTGenovaBus35',
            name: '35',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#1600ff',
            background_color: '#1600ff',
          },
        ],
        direction_description: 'Caricamento/Acquario, Mosso/Pronto Soccorso',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 337,
        path: 'spanGixnu@CADWDWHc@Hi@@E\\wBF[B]B[BQO@CKAECSBUGIIKJi@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:26:00+02:00',
          leg_arrival_time: '2022-07-01T12:31:37+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'GenovaStation_ZeccaimpSpec_default',
            stop_id: 'GenovaStation_ZeccaimpSpec',
            coordinates: {
              lat: 44.41344,
              lon: 8.93061,
            },
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'ipanGyfou@?M}@@c@As@I}Cs@WKQMQOe@k@Y[[[g@S]CY?k@FS@MB}BNg@BgAB_EGiCg@_@C??i@IYEKA[K_@Og@]_Am@u@g@MI[YMO]e@Wk@g@qAy@qByBaGGQ_A_CiAyCk@{AKC',
        stops: [
          {
            id: 'GenovaStation_ZeccaimpSpec',
            name: 'Zecca',
            coordinates: {
              lat: 44.41344,
              lon: 8.93061,
            },
          },
          {
            id: 'GenovaStation_CarbonaraimpSpec',
            name: 'Carbonara',
            coordinates: {
              lat: 44.41673,
              lon: 8.93168,
            },
          },
          {
            id: 'GenovaStation_SanNicoloimpSpec',
            name: "San Nicolo'",
            coordinates: {
              lat: 44.4198,
              lon: 8.9318,
            },
          },
          {
            id: 'GenovaStation_FossatoimpSpec',
            name: 'Fossato',
            coordinates: {
              lat: 44.4215,
              lon: 8.93279,
            },
          },
          {
            id: 'GenovaStation_ViaPreveimpSpec',
            name: 'Via Preve',
            coordinates: {
              lat: 44.42233,
              lon: 8.93427,
            },
          },
          {
            id: 'GenovaStation_SanSimoneimpSpec',
            name: 'San Simone',
            coordinates: {
              lat: 44.42298,
              lon: 8.93565,
            },
          },
          {
            id: 'GenovaStation_RighiimpSpec',
            name: 'Righi',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaFunicularFri',
              frequency_seconds_range: [1125, 1125],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaFunicularFri'],
            },
          ],
          leg_departure_time: '2022-07-01T12:45:00+02:00',
          leg_arrival_time: '2022-07-01T12:51:00+02:00',
        },
        vehicle_types: ['funicular'],
        services: [
          {
            id: 'AMTGenovaFunicularFri',
            name: 'FRI',
            vehicle_types: ['funicular'],
            brand: {
              id: 'AMTGenovaFunicular',
              name: 'Funicular',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a271bfe94909a1b2bebc32b592c229e2bd775f4b63dfa800be116b32/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9c98395266aa8869fad6c7839a798eabceb30875da6be571294178cd/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/97fa5e6ec66a0b5a5b3003d7f81d1ea3e0d505f647035b960367c84d/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/08216922643bcec0a8947c871baf58cd8860e7681c7f07ef5ebbc32b/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4b4bbb062a1decd3111c8873ed30be6303d061a7a496497a15600641/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4bbc2f784ff500dbbaabe489427b30e6d3ca19263c258131253f5818/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/135b2b2586e749b1755e15e4ea3d9b5217e2e1304c922bffae39505b/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/cc591b74fad7fdee7284f4c6fbc32d6de1139f04d7c28b2dd22a73b8/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#da241b',
            background_color: '#da241b',
          },
        ],
        direction_description: 'Righi',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 282,
        path: 'sqcnG}spu@SUABGNEDIREFINEFQTUNu@|@o@bAiA`B',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:51:00+02:00',
          leg_arrival_time: '2022-07-01T12:55:42+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'GenovaStation_RighiimpSpec_default',
            stop_id: 'GenovaStation_RighiimpSpec',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:55:42+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDEyNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6NTgzOCxcImR1cmF0aW9uXCI6MjIzNCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDI1NDgsOC45MzYwNzNcIn0sXCJqcl9pbmRleFwiOjMsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6NDUzLFwiZHVyYXRpb25cIjo0MTIsXCJlY1wiOlwiNDQuNDE1NCw4LjkyMTY2XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDE1OSw4LjkxNzI0XCJ9LHtcImR1cmF0aW9uXCI6MjQwLFwiZW5kXCI6XCJHZW5vdmFTdG9wX051bnppYXRhX1NFXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJBTVRHZW5vdmFCdXMxOFwiLFwiQU1UR2Vub3ZhQnVzMjBcIixcIkFNVEdlbm92YUJ1czM0XCIsXCJBTVRHZW5vdmFCdXMzNVwiXSxcInN0YXJ0XCI6XCJHZW5vdmFTdG9wX0dyYW1zY2kxQ29tbWVuZGFfU0VcIixcInN0b3BfY291bnRcIjozfSx7XCJkaXN0YW5jZVwiOjI0MSxcImR1cmF0aW9uXCI6MzM3LFwiZWNcIjpcIjQ0LjQxMzQ0LDguOTMwNjFcIixcImluX3N0YXRpb25cIjpcIjAvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MTM3LDguOTI4MjFcIixcInRvX2V4aXRcIjpcIkdlbm92YVN0YXRpb25fWmVjY2FpbXBTcGVjX2RlZmF1bHRcIn0se1wiZHVyYXRpb25cIjozNjAsXCJlbmRcIjpcIkdlbm92YVN0YXRpb25fUmlnaGlpbXBTcGVjXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJBTVRHZW5vdmFGdW5pY3VsYXJGcmlcIl0sXCJzdGFydFwiOlwiR2Vub3ZhU3RhdGlvbl9aZWNjYWltcFNwZWNcIixcInN0b3BfY291bnRcIjo3LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9HZW5vdmFaZWNjYWltcFNwZWNfQU1UR2Vub3ZhRnVuaWN1bGFyXzFcIixcIlBsYXRmb3JtX0dlbm92YVJpZ2hpaW1wU3BlY19GX1RcIl19LHtcImRpc3RhbmNlXCI6MjM3LFwiZHVyYXRpb25cIjoyODIsXCJlY1wiOlwiNDQuNDI1NTIsOC45MzYxNFwiLFwiZnJvbV9leGl0XCI6XCJHZW5vdmFTdGF0aW9uX1JpZ2hpaW1wU3BlY19kZWZhdWx0XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDI0MSw4LjkzNzc1XCJ9XSxcInByaWNlX3BlbmNlXCI6MTUwLFwicmVnaW9uXCI6XCJpdC1nZW5vdmFcIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNGQ5YjVjMTItMzE3YS00NWZkLTlkNGMtNGY1NDY1NWM3ODY0XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDQuNDE2MDQ2LDguOTE3MTdcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTAxVDEyOjE1OjAwKzAyOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoiaXQtZ2Vub3ZhIn0.YTV1oVN8TA-Wj5tG_NfjX2qHEFTDPO95nQtNC5UGi2g',
  },
  {
    start: {
      coordinates: {
        lat: 44.416046,
        lon: 8.91717,
      },
    },
    end: {
      coordinates: {
        lat: 44.42548,
        lon: 8.936073,
      },
    },
    distance_meters: 855,
    duration_seconds: 2314,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 327,
        path: 'k~anGwslu@AGKo@t@Y?K@IDGHAFDBHp@WCQLEBAi@qDIKMI@QBUE@]EKEIECA?CCOUs@o@{@WOGf@EC',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:20:27+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'oabnG}cmu@LDa@bDGhBTg@~AoA`@IjAHk@wIb@uD\\oCf@kCv@{BpEgI|DiHdC{BvB}Ad@GpBu@rAQQ{Aw@BoBdA{@~@BNgG`Fs@sA{B}BJs@@?',
        stops: [
          {
            id: 'GenovaStop_DoriametroPrincipe_W',
            name: "Doria/Metro' Principe",
            coordinates: {
              lat: 44.416401,
              lon: 8.919827,
            },
          },
          {
            id: 'GenovaStop_Gramsci1Commenda_SE',
            name: 'Gramsci 1/Commenda',
            coordinates: {
              lat: 44.415398,
              lon: 8.921661,
            },
          },
          {
            id: 'GenovaStop_Gramsci2MetroDarsena_SE',
            name: "Gramsci 2/Metro' Darsena",
            coordinates: {
              lat: 44.413757,
              lon: 8.92536,
            },
          },
          {
            id: 'GenovaStop_Nunziata_SE',
            name: 'Nunziata',
            coordinates: {
              lat: 44.413696,
              lon: 8.928207,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus34',
              frequency_seconds_range: [258, 258],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus35',
              frequency_seconds_range: [258, 258],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaBus34', 'AMTGenovaBus35'],
            },
          ],
          leg_departure_time: '2022-07-01T12:23:00+02:00',
          leg_arrival_time: '2022-07-01T12:29:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'AMTGenovaBus34',
            name: '34',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#fed222',
            background_color: '#fed222',
          },
          {
            id: 'AMTGenovaBus35',
            name: '35',
            vehicle_types: ['bus'],
            brand: {
              id: 'AMTGenovaBus',
              name: 'Bus Linee Urbane di Genova',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1b9c10c83d528ba98574d1a7382a962fba37d2b8aa752046db4b1b3a/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0793a978ac33fb39ddd0e70bb5cbd61d0b2a40670ef50d52cd4c0aed/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f340a2e84015230c753e9f8d6e26a5403762466c699aa91244e99c47/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a269e34d2f1cb56d292b3fce05ce0d29a5e08454a89aea78c6103779/d324a6fb/@2x.png',
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
            color: '#1600ff',
            background_color: '#1600ff',
          },
        ],
        direction_description: 'Vannucci/Museo Villa Croce | Resasco/Capolinea',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 337,
        path: 'spanGixnu@CADWDWHc@Hi@@E\\wBF[B]B[BQO@CKAECSBUGIIKJi@',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:29:00+02:00',
          leg_arrival_time: '2022-07-01T12:34:37+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'GenovaStation_ZeccaimpSpec_default',
            stop_id: 'GenovaStation_ZeccaimpSpec',
            coordinates: {
              lat: 44.41344,
              lon: 8.93061,
            },
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: 'ipanGyfou@?M}@@c@As@I}Cs@WKQMQOe@k@Y[[[g@S]CY?k@FS@MB}BNg@BgAB_EGiCg@_@C??i@IYEKA[K_@Og@]_Am@u@g@MI[YMO]e@Wk@g@qAy@qByBaGGQ_A_CiAyCk@{AKC',
        stops: [
          {
            id: 'GenovaStation_ZeccaimpSpec',
            name: 'Zecca',
            coordinates: {
              lat: 44.41344,
              lon: 8.93061,
            },
          },
          {
            id: 'GenovaStation_CarbonaraimpSpec',
            name: 'Carbonara',
            coordinates: {
              lat: 44.41673,
              lon: 8.93168,
            },
          },
          {
            id: 'GenovaStation_SanNicoloimpSpec',
            name: "San Nicolo'",
            coordinates: {
              lat: 44.4198,
              lon: 8.9318,
            },
          },
          {
            id: 'GenovaStation_FossatoimpSpec',
            name: 'Fossato',
            coordinates: {
              lat: 44.4215,
              lon: 8.93279,
            },
          },
          {
            id: 'GenovaStation_ViaPreveimpSpec',
            name: 'Via Preve',
            coordinates: {
              lat: 44.42233,
              lon: 8.93427,
            },
          },
          {
            id: 'GenovaStation_SanSimoneimpSpec',
            name: 'San Simone',
            coordinates: {
              lat: 44.42298,
              lon: 8.93565,
            },
          },
          {
            id: 'GenovaStation_RighiimpSpec',
            name: 'Righi',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaFunicularFri',
              frequency_seconds_range: [1125, 1125],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaFunicularFri'],
            },
          ],
          leg_departure_time: '2022-07-01T12:45:00+02:00',
          leg_arrival_time: '2022-07-01T12:51:00+02:00',
        },
        vehicle_types: ['funicular'],
        services: [
          {
            id: 'AMTGenovaFunicularFri',
            name: 'FRI',
            vehicle_types: ['funicular'],
            brand: {
              id: 'AMTGenovaFunicular',
              name: 'Funicular',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/a271bfe94909a1b2bebc32b592c229e2bd775f4b63dfa800be116b32/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9c98395266aa8869fad6c7839a798eabceb30875da6be571294178cd/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/97fa5e6ec66a0b5a5b3003d7f81d1ea3e0d505f647035b960367c84d/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/08216922643bcec0a8947c871baf58cd8860e7681c7f07ef5ebbc32b/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4b4bbb062a1decd3111c8873ed30be6303d061a7a496497a15600641/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4bbc2f784ff500dbbaabe489427b30e6d3ca19263c258131253f5818/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/135b2b2586e749b1755e15e4ea3d9b5217e2e1304c922bffae39505b/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/cc591b74fad7fdee7284f4c6fbc32d6de1139f04d7c28b2dd22a73b8/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#da241b',
            background_color: '#da241b',
          },
        ],
        direction_description: 'Righi',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 282,
        path: 'sqcnG}spu@SUABGNEDIREFINEFQTUNu@|@o@bAiA`B',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:51:00+02:00',
          leg_arrival_time: '2022-07-01T12:55:42+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'GenovaStation_RighiimpSpec_default',
            stop_id: 'GenovaStation_RighiimpSpec',
            coordinates: {
              lat: 44.4241,
              lon: 8.93775,
            },
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:55:42+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDEyNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6NTgzOCxcImR1cmF0aW9uXCI6MjMxNCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDI1NDgsOC45MzYwNzNcIn0sXCJqcl9pbmRleFwiOjQsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6Mzc3LFwiZHVyYXRpb25cIjozMjcsXCJlY1wiOlwiNDQuNDE2NCw4LjkxOTgzXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDE1OSw4LjkxNzI0XCJ9LHtcImR1cmF0aW9uXCI6MzYwLFwiZW5kXCI6XCJHZW5vdmFTdG9wX051bnppYXRhX1NFXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJBTVRHZW5vdmFCdXMzNFwiLFwiQU1UR2Vub3ZhQnVzMzVcIl0sXCJzdGFydFwiOlwiR2Vub3ZhU3RvcF9Eb3JpYW1ldHJvUHJpbmNpcGVfV1wiLFwic3RvcF9jb3VudFwiOjR9LHtcImRpc3RhbmNlXCI6MjQxLFwiZHVyYXRpb25cIjozMzcsXCJlY1wiOlwiNDQuNDEzNDQsOC45MzA2MVwiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQxMzcsOC45MjgyMVwiLFwidG9fZXhpdFwiOlwiR2Vub3ZhU3RhdGlvbl9aZWNjYWltcFNwZWNfZGVmYXVsdFwifSx7XCJkdXJhdGlvblwiOjM2MCxcImVuZFwiOlwiR2Vub3ZhU3RhdGlvbl9SaWdoaWltcFNwZWNcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkFNVEdlbm92YUZ1bmljdWxhckZyaVwiXSxcInN0YXJ0XCI6XCJHZW5vdmFTdGF0aW9uX1plY2NhaW1wU3BlY1wiLFwic3RvcF9jb3VudFwiOjcsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX0dlbm92YVplY2NhaW1wU3BlY19BTVRHZW5vdmFGdW5pY3VsYXJfMVwiLFwiUGxhdGZvcm1fR2Vub3ZhUmlnaGlpbXBTcGVjX0ZfVFwiXX0se1wiZGlzdGFuY2VcIjoyMzcsXCJkdXJhdGlvblwiOjI4MixcImVjXCI6XCI0NC40MjU1Miw4LjkzNjE0XCIsXCJmcm9tX2V4aXRcIjpcIkdlbm92YVN0YXRpb25fUmlnaGlpbXBTcGVjX2RlZmF1bHRcIixcImluX3N0YXRpb25cIjpcIjIvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MjQxLDguOTM3NzVcIn1dLFwicHJpY2VfcGVuY2VcIjoxNTAsXCJyZWdpb25cIjpcIml0LWdlbm92YVwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCI0ZDliNWMxMi0zMTdhLTQ1ZmQtOWQ0Yy00ZjU0NjU1Yzc4NjRcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0NC40MTYwNDYsOC45MTcxN1wifSxcInRpbWVcIjpcIjIwMjItMDctMDFUMTI6MTU6MDArMDI6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJpdC1nZW5vdmEifQ.AM6jdJF39zFn7CmAVOZ0BwKAaWI2oGw9v2qYyCol99E',
  },
] as Route[]
