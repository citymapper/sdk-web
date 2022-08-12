import { Route } from '@citymapper/api/@types/Route'

export default [
  {
    start: {
      coordinates: {
        lat: 44.41698,
        lon: 8.923012,
      },
    },
    end: {
      coordinates: {
        lat: 44.418301,
        lon: 8.927757,
      },
    },
    distance_meters: 293,
    duration_seconds: 729,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 61,
        path: '{dbnG{vmu@DCL?J@RFJFFFDXDRDP?@FE',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:16:01+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'yabnGitmu@?CMIKs@u@Uu@VQ^Kb@QNiBZBdFGn@WGWmDcAeCkDuI}@LbAzEo@JoE{NTo@\\Ad@\\\\V~EtCt@yA@s@@s@x@sJG[O[qAi@BM',
        stops: [
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
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus36',
              frequency_seconds_range: [522, 522],
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
          leg_departure_time: '2022-07-01T12:19:00+02:00',
          leg_arrival_time: '2022-07-01T12:24:00+02:00',
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
        duration_seconds: 194,
        path: 'qpbnGgwnu@CL?A}B_APE|Al@dAd@PFDDRX',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:24:00+02:00',
          leg_arrival_time: '2022-07-01T12:27:14+02:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:27:14+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDMyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTU5MixcImR1cmF0aW9uXCI6NzI5LFwiZW5kXCI6e1wiY29vcmRzXCI6XCI0NC40MTgzMDEsOC45Mjc3NTdcIn0sXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6NzUsXCJkdXJhdGlvblwiOjYxLFwiZWNcIjpcIjQ0LjQxNjQ1LDguOTIyNDVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MTY5NCw4LjkyMjg2XCJ9LHtcImR1cmF0aW9uXCI6MzAwLFwiZW5kXCI6XCJHZW5vdmFTdG9wX0ZpcmVuemUyU2FuQmFybmFiYV9ORVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhQnVzMzZcIl0sXCJzdGFydFwiOlwiR2Vub3ZhU3RvcF9QcmluY2lwZUZzX05XXCIsXCJzdG9wX2NvdW50XCI6OH0se1wiZGlzdGFuY2VcIjoyMTgsXCJkdXJhdGlvblwiOjE5NCxcImVjXCI6XCI0NC40MTgzMyw4LjkyNzcxXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDE4ODEsOC45MjgwNFwifV0sXCJwcmljZV9wZW5jZVwiOjE1MCxcInJlZ2lvblwiOlwiaXQtZ2Vub3ZhXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImUxNzllYTVjLTFmYmEtNDc4Yy1iNDM5LWM5Y2E2YzVlNGI4MlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQ0LjQxNjk4LDguOTIzMDEyXCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMjoxNTowMCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6Iml0LWdlbm92YSJ9.fclw54mP1Nn13meX1zON89js8LsGJfdZXYKD79_0Og4',
  },
  {
    start: {
      coordinates: {
        lat: 44.41698,
        lon: 8.923012,
      },
    },
    end: {
      coordinates: {
        lat: 44.418301,
        lon: 8.927757,
      },
    },
    distance_meters: 355,
    duration_seconds: 889,
    duration_accuracy: 'scheduled',
    price: {
      formatted: 'Free',
      amount: '0.00',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 199,
        path: '{dbnG{vmu@DCJOTYNUHOR[FEHCMOSQWSCA',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:18:19+02:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'CMStation_balbi_default',
            stop_id: 'CMStation_balbi',
            coordinates: {
              lat: 44.416725,
              lon: 8.92375,
            },
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 240,
        path: 'qcbnGm|mu@uK}F',
        stops: [
          {
            id: 'CMStation_balbi',
            name: 'Balbi',
            coordinates: {
              lat: 44.416725,
              lon: 8.92375,
            },
          },
          {
            id: 'CMStation_dogali',
            name: 'Dogali',
            coordinates: {
              lat: 44.418758,
              lon: 8.925021,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'CM_AMTGenovaLift_monteg',
              frequency_seconds_range: [420, 420],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['CM_AMTGenovaLift_monteg'],
            },
          ],
          leg_departure_time: '2022-07-01T12:25:00+02:00',
          leg_arrival_time: '2022-07-01T12:29:00+02:00',
        },
        vehicle_types: ['gondola'],
        services: [
          {
            id: 'CM_AMTGenovaLift_monteg',
            name: 'MONTEG.',
            vehicle_types: ['gondola'],
            brand: {
              id: 'AMTGenovaLift',
              name: 'Ascensori AMT',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/b66d3b001e198640989d7d13f2beed5addd02e39f2cc338357c1eba8/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/b5c801d3d4feec8d1af3466094eb5e5ebcf4908822cfb5c2fd0aeb7e/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/440541041a89cdb7d4dc8eeb0c78e17c6a311af07f9a0518396169da/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/16c5462f9452b90052a24f340cdb46d33ca071f62f26bf3fa9806db3/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/2a6256ad05b85f94d52c75837f03bf5d11c1b2409821204b44bb287d/d324a6fb/@2x.png',
                  width: 16,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/627a9155dec6fbb456352a9511fb872686cd29588b42793c900c78c6/d324a6fb/@2x.png',
                  width: 15,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/65003cb240f61f2b3be5319a877d9a00bb37d498fb92bca619fd342a/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/ab918557f1e1d5174b5df9c570e91a07aa729cd0a3222a5b9fc77cf9/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#046cb4',
            background_color: '#046cb4',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Dogali',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 310,
        path: 'gpbnGkdnu@HHFKBg@D@ZyDXyC?G@EHq@@IDq@M_@AA',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:29:00+02:00',
          leg_arrival_time: '2022-07-01T12:34:10+02:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'CMStation_dogali_default',
            stop_id: 'CMStation_dogali',
            coordinates: {
              lat: 44.418758,
              lon: 8.925021,
            },
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:34:10+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDMyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTU5MixcImR1cmF0aW9uXCI6ODg5LFwiZW5kXCI6e1wiY29vcmRzXCI6XCI0NC40MTgzMDEsOC45Mjc3NTdcIn0sXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTE3LFwiZHVyYXRpb25cIjoxOTksXCJlY1wiOlwiNDQuNDE2NzMsOC45MjM3NVwiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQxNjk0LDguOTIyODZcIixcInRvX2V4aXRcIjpcIkNNU3RhdGlvbl9iYWxiaV9kZWZhdWx0XCJ9LHtcImR1cmF0aW9uXCI6MjQwLFwiZW5kXCI6XCJDTVN0YXRpb25fZG9nYWxpXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJDTV9BTVRHZW5vdmFMaWZ0X21vbnRlZ1wiXSxcInN0YXJ0XCI6XCJDTVN0YXRpb25fYmFsYmlcIixcInN0b3BfY291bnRcIjoyLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9DTWJhbGJpX0FNVEdlbm92YUxpZnRcIixcIlBsYXRmb3JtX0NNZG9nYWxpX0FNVEdlbm92YUxpZnRcIl19LHtcImRpc3RhbmNlXCI6MjM4LFwiZHVyYXRpb25cIjozMTAsXCJlY1wiOlwiNDQuNDE4MzMsOC45Mjc3MVwiLFwiZnJvbV9leGl0XCI6XCJDTVN0YXRpb25fZG9nYWxpX2RlZmF1bHRcIixcImluX3N0YXRpb25cIjpcIjIvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MTg3Niw4LjkyNTAyXCJ9XSxcInByaWNlX3BlbmNlXCI6MCxcInJlZ2lvblwiOlwiaXQtZ2Vub3ZhXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImUxNzllYTVjLTFmYmEtNDc4Yy1iNDM5LWM5Y2E2YzVlNGI4MlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQ0LjQxNjk4LDguOTIzMDEyXCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMjoxNTowMCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6Iml0LWdlbm92YSJ9.TV4wpkrUs0XVIap0twzph0YeSphPmwcblyn4eYL3VhE',
  },
  {
    start: {
      coordinates: {
        lat: 44.41698,
        lon: 8.923012,
      },
    },
    end: {
      coordinates: {
        lat: 44.418301,
        lon: 8.927757,
      },
    },
    distance_meters: 591,
    duration_seconds: 990,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 45,
        path: '{dbnG{vmu@DCJOTYNUHOAA',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:15:45+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: '{bbnGqymu@DFEHOTUXKNKFIDIFGHIJELERGJEFGBE@KBc@DWBUDE?EBCD?H@F?P@T@N?h@?j@@bA?H?PCJCBCBC?E?GCCGCGAOCq@Aa@AYAUAIAMO]Sc@MYM[KUO]IOQ]Oa@o@yAa@{@[u@MY_@{@GKCGECE?C?CBCDADAD@LDPPz@R|@\\`BNz@Jd@Nr@BL@H?HABADA@CBC?E?EACCEGCKSq@So@c@wAc@sAq@uBY{@Y_AEKGOK[CMAI?I@G@GmBu@?A',
        stops: [
          {
            id: 'GenovaStop_ArsenaleprincipeFs_NW',
            name: 'Arsenale/Principe FS',
            coordinates: {
              lat: 44.416615,
              lon: 8.923287,
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
            id: 'GenovaStop_Spinolabassi_N',
            name: 'Spinola/Bassi',
            coordinates: {
              lat: 44.421089,
              lon: 8.925753,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus35',
              frequency_seconds_range: [468, 468],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaBus35'],
            },
          ],
          leg_departure_time: '2022-07-01T12:21:00+02:00',
          leg_arrival_time: '2022-07-01T12:26:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
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
        direction_description: 'S.F. Da Paola | Vesuvio/Capolinea Inferiore',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 489,
        path: 'y~bnG}hnu@ADfBp@@IFIBEDEFCD?D?F@DB??RL?ErDxBnAt@@A^}@BGDc@F@D@ZyDXyC?G@EHq@@IDq@M_@AA',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:26:00+02:00',
          leg_arrival_time: '2022-07-01T12:34:09+02:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:34:09+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDMyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTU5MixcImR1cmF0aW9uXCI6OTkwLFwiZW5kXCI6e1wiY29vcmRzXCI6XCI0NC40MTgzMDEsOC45Mjc3NTdcIn0sXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6NTEsXCJkdXJhdGlvblwiOjQ1LFwiZWNcIjpcIjQ0LjQxNjYyLDguOTIzMjlcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MTY5NCw4LjkyMjg2XCJ9LHtcImR1cmF0aW9uXCI6MzAwLFwiZW5kXCI6XCJHZW5vdmFTdG9wX1NwaW5vbGFiYXNzaV9OXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJBTVRHZW5vdmFCdXMzNVwiXSxcInN0YXJ0XCI6XCJHZW5vdmFTdG9wX0Fyc2VuYWxlcHJpbmNpcGVGc19OV1wiLFwic3RvcF9jb3VudFwiOjZ9LHtcImRpc3RhbmNlXCI6NTQwLFwiZHVyYXRpb25cIjo0ODksXCJlY1wiOlwiNDQuNDE4MzMsOC45Mjc3MVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ0LjQyMTA5LDguOTI1NzVcIn1dLFwicHJpY2VfcGVuY2VcIjoxNTAsXCJyZWdpb25cIjpcIml0LWdlbm92YVwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJlMTc5ZWE1Yy0xZmJhLTQ3OGMtYjQzOS1jOWNhNmM1ZTRiODJcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0NC40MTY5OCw4LjkyMzAxMlwifSxcInRpbWVcIjpcIjIwMjItMDctMDFUMTI6MTU6MDArMDI6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJpdC1nZW5vdmEifQ.S7ZYyAPfwCzV-ouRfxv4E-qJZ31oxjNE1qp2s8Wohn0',
  },
  {
    start: {
      coordinates: {
        lat: 44.41698,
        lon: 8.923012,
      },
    },
    end: {
      coordinates: {
        lat: 44.418301,
        lon: 8.927757,
      },
    },
    distance_meters: 851,
    duration_seconds: 1197,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 501,
        path: '{dbnG{vmu@DCJOTYNUHOR[FEHCDUL[JAZu@Pa@`A{BXm@|@qBDM@CZu@hAkCECN_@NY?APa@xAoDBEZg@@E?EBOCKEKSUB@?C',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:23:21+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'kranG}znu@?Bo@SAa@BkDsAm@I@GL[|CKdAQLuK_AAVa@@GhBLPvCh@KLiGr@LPlACNPBXsBdEaEjICE',
        stops: [
          {
            id: 'GenovaStop_Nunziatabandiera_N',
            name: 'Nunziata/Bandiera',
            coordinates: {
              lat: 44.413979,
              lon: 8.928628,
            },
          },
          {
            id: 'GenovaStop_BrignoleDeFerraricarmine_N',
            name: 'Brignole De Ferrari/Carmine',
            coordinates: {
              lat: 44.414871,
              lon: 8.929099,
            },
          },
          {
            id: 'GenovaStop_AlbergoDeiPoveriuniversita_W',
            name: "Albergo dei Poveri/Universita'",
            coordinates: {
              lat: 44.417259,
              lon: 8.928877,
            },
          },
          {
            id: 'GenovaStop_Dogali1Kassala_NW',
            name: 'Dogali 1/Kassala',
            coordinates: {
              lat: 44.417843,
              lon: 8.926426,
            },
          },
          {
            id: 'GenovaStop_Dogali2Bassi_NE',
            name: 'Dogali 2/Bassi',
            coordinates: {
              lat: 44.418827,
              lon: 8.924796,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus39',
              frequency_seconds_range: [447, 447],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus40',
              frequency_seconds_range: [447, 447],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaBus39', 'AMTGenovaBus40'],
            },
          ],
          leg_departure_time: '2022-07-01T12:29:00+02:00',
          leg_arrival_time: '2022-07-01T12:34:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'AMTGenovaBus39',
            name: '39',
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
          {
            id: 'AMTGenovaBus40',
            name: '40',
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
        direction_description:
          'Costanzi/Capolinea | Vesuvio/Capolinea Superiore',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 247,
        path: 'upbnG_cnu@BBFKJYFKBg@D@ZyDXyC?G@EHq@@IDq@M_@AA',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:34:00+02:00',
          leg_arrival_time: '2022-07-01T12:38:07+02:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:38:07+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDMyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTU5MixcImR1cmF0aW9uXCI6MTE5NyxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDE4MzAxLDguOTI3NzU3XCJ9LFwianJfaW5kZXhcIjozLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjU5OCxcImR1cmF0aW9uXCI6NTAxLFwiZWNcIjpcIjQ0LjQxMzk4LDguOTI4NjNcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0NC40MTY5NCw4LjkyMjg2XCJ9LHtcImR1cmF0aW9uXCI6MzAwLFwiZW5kXCI6XCJHZW5vdmFTdG9wX0RvZ2FsaTJCYXNzaV9ORVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhQnVzMzlcIixcIkFNVEdlbm92YUJ1czQwXCJdLFwic3RhcnRcIjpcIkdlbm92YVN0b3BfTnVuemlhdGFiYW5kaWVyYV9OXCIsXCJzdG9wX2NvdW50XCI6NX0se1wiZGlzdGFuY2VcIjoyNTMsXCJkdXJhdGlvblwiOjI0NyxcImVjXCI6XCI0NC40MTgzMyw4LjkyNzcxXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDE4ODMsOC45MjQ4XCJ9XSxcInByaWNlX3BlbmNlXCI6MTUwLFwicmVnaW9uXCI6XCJpdC1nZW5vdmFcIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiZTE3OWVhNWMtMWZiYS00NzhjLWI0MzktYzljYTZjNWU0YjgyXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDQuNDE2OTgsOC45MjMwMTJcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTAxVDEyOjE1OjAwKzAyOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoiaXQtZ2Vub3ZhIn0.ZaH5rVvZRdayiGn4bIp5YW9YY7HHgULK598z_UXSSh4',
  },
  {
    start: {
      coordinates: {
        lat: 44.41698,
        lon: 8.923012,
      },
    },
    end: {
      coordinates: {
        lat: 44.418301,
        lon: 8.927757,
      },
    },
    distance_meters: 406,
    duration_seconds: 1482,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '1.50€',
      amount: '1.50',
      currency: 'EUR',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 83,
        path: '{dbnG{vmu@DCL?J@RFJFFFDXDRDP?@Nd@FJ??CD',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00+02:00',
          leg_arrival_time: '2022-07-01T12:16:23+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 420,
        path: 'mabnGkrmu@HGDNp@x@Jd@?r@aAvHa@bDGhBTg@~AoA`@IjAHk@wIb@uD\\oCf@kCv@{BpEgI|DiHdC{BvB}Ad@GpBu@rAQQ{Aw@BoBdA{@~@BNgG`Fs@sA{B}BJs@@?',
        stops: [
          {
            id: 'GenovaStop_PrincipeFs_W',
            name: 'Principe FS',
            coordinates: {
              lat: 44.416389,
              lon: 8.92214,
            },
          },
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
              service_id: 'AMTGenovaBus35',
              frequency_seconds_range: [475, 475],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaBus35'],
            },
          ],
          leg_departure_time: '2022-07-01T12:19:00+02:00',
          leg_arrival_time: '2022-07-01T12:26:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
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
        direction_description: 'Vannucci/Museo Villa Croce',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 51,
        path: 'spanGixnu@CADW?GCECGKEGKIESG?C',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:26:00+02:00',
          leg_arrival_time: '2022-07-01T12:26:51+02:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'kranG}znu@?Bo@SAa@BkDsAm@I@GL[|CKdAQLuK_AAVa@@GhBLPvCh@KLiGr@LPlACNPBXsBdEaEjICE',
        stops: [
          {
            id: 'GenovaStop_Nunziatabandiera_N',
            name: 'Nunziata/Bandiera',
            coordinates: {
              lat: 44.413979,
              lon: 8.928628,
            },
          },
          {
            id: 'GenovaStop_BrignoleDeFerraricarmine_N',
            name: 'Brignole De Ferrari/Carmine',
            coordinates: {
              lat: 44.414871,
              lon: 8.929099,
            },
          },
          {
            id: 'GenovaStop_AlbergoDeiPoveriuniversita_W',
            name: "Albergo dei Poveri/Universita'",
            coordinates: {
              lat: 44.417259,
              lon: 8.928877,
            },
          },
          {
            id: 'GenovaStop_Dogali1Kassala_NW',
            name: 'Dogali 1/Kassala',
            coordinates: {
              lat: 44.417843,
              lon: 8.926426,
            },
          },
          {
            id: 'GenovaStop_Dogali2Bassi_NE',
            name: 'Dogali 2/Bassi',
            coordinates: {
              lat: 44.418827,
              lon: 8.924796,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus39',
              frequency_seconds_range: [447, 447],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'AMTGenovaBus40',
              frequency_seconds_range: [447, 447],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['AMTGenovaBus39', 'AMTGenovaBus40'],
            },
          ],
          leg_departure_time: '2022-07-01T12:29:00+02:00',
          leg_arrival_time: '2022-07-01T12:34:00+02:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'AMTGenovaBus39',
            name: '39',
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
          {
            id: 'AMTGenovaBus40',
            name: '40',
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
        direction_description:
          'Costanzi/Capolinea | Vesuvio/Capolinea Superiore',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 247,
        path: 'upbnG_cnu@BBFKJYFKBg@D@ZyDXyC?G@EHq@@IDq@M_@AA',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:34:00+02:00',
          leg_arrival_time: '2022-07-01T12:38:07+02:00',
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00+02:00',
    route_arrival_time: '2022-07-01T12:38:07+02:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDMyMywiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTU5MixcImR1cmF0aW9uXCI6MTQ4MixcImVuZFwiOntcImNvb3Jkc1wiOlwiNDQuNDE4MzAxLDguOTI3NzU3XCJ9LFwianJfaW5kZXhcIjo0LFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjk4LFwiZHVyYXRpb25cIjo4MyxcImVjXCI6XCI0NC40MTYzOSw4LjkyMjE0XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDE2OTQsOC45MjI4NlwifSx7XCJkdXJhdGlvblwiOjQyMCxcImVuZFwiOlwiR2Vub3ZhU3RvcF9OdW56aWF0YV9TRVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhQnVzMzVcIl0sXCJzdGFydFwiOlwiR2Vub3ZhU3RvcF9QcmluY2lwZUZzX1dcIixcInN0b3BfY291bnRcIjo1fSx7XCJkaXN0YW5jZVwiOjU1LFwiZHVyYXRpb25cIjo1MSxcImVjXCI6XCI0NC40MTM5OCw4LjkyODYzXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDEzNyw4LjkyODIxXCJ9LHtcImR1cmF0aW9uXCI6MzAwLFwiZW5kXCI6XCJHZW5vdmFTdG9wX0RvZ2FsaTJCYXNzaV9ORVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQU1UR2Vub3ZhQnVzMzlcIixcIkFNVEdlbm92YUJ1czQwXCJdLFwic3RhcnRcIjpcIkdlbm92YVN0b3BfTnVuemlhdGFiYW5kaWVyYV9OXCIsXCJzdG9wX2NvdW50XCI6NX0se1wiZGlzdGFuY2VcIjoyNTMsXCJkdXJhdGlvblwiOjI0NyxcImVjXCI6XCI0NC40MTgzMyw4LjkyNzcxXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDQuNDE4ODMsOC45MjQ4XCJ9XSxcInByaWNlX3BlbmNlXCI6MTUwLFwicmVnaW9uXCI6XCJpdC1nZW5vdmFcIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiZTE3OWVhNWMtMWZiYS00NzhjLWI0MzktYzljYTZjNWU0YjgyXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDQuNDE2OTgsOC45MjMwMTJcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTAxVDEyOjE1OjAwKzAyOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoiaXQtZ2Vub3ZhIn0.HCe7q71M3o1EXJ-LL9MVqSdtv1bLyP3eHrdWlRa3hH8',
  },
] as Route[]
