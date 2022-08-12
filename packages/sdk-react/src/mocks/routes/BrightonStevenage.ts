import { Route } from '@citymapper/api/@types'

export default [
  {
    start: {
      coordinates: {
        lat: 50.828852,
        lon: -0.143204,
      },
    },
    end: {
      coordinates: {
        lat: 51.902617,
        lon: -0.227855,
      },
    },
    distance_meters: 2011,
    duration_seconds: 10439,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 184,
        path: 'gofuH~}Z?QBcA@o@DgAJyA@KDa@ME',
        updatable_detail: {
          leg_departure_time: '2022-07-12T14:56:19+01:00',
          leg_arrival_time: '2022-07-12T14:59:23+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Brighton_E31528',
            stop_id: 'Brighton',
            coordinates: {
              lat: 50.8287468,
              lon: -0.1414609,
            },
          },
          alternate_exits: [
            {
              id: 'Brighton_E31526',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286149,
                lon: -0.1410828,
              },
            },
            {
              id: 'Brighton_E31527',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.829981,
                lon: -0.1404605,
              },
            },
            {
              id: 'Brighton_E31529',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286075,
                lon: -0.1411825,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 6360,
        path: 'gpfuH~qZ?g@yAC}@HkAZeO`GaAh@wCzBaHrHwBfDmJnSaDhFoDvE_EbEcDbCaMtG{DtAyHlB_LhBgM`CiHl@qG@iBKuGy@yNgDqEc@qFImGPgBRsCl@ab@bNcFvBeFvCgCjB}WtU}EjDoEbCyCnAyDlAwGnAgCTgEPaC@cH_@}IyAij@iLuEuAkmBmv@_EsBsgAap@}wDusB_x@_c@eFiCiFwByEaBstF}zAg@MeMwC}Gy@iISiHXiFp@gDr@iuApa@qHbCiFbCsG|Dc^zWoEtDsEtEoDdEwEnG_DzEwDzG{Zbl@qAzByExGyFdGqDzCmCjBmC~AiCjAcLlEwVtJwCvAiH|EeDvCcFxFaCdDgDxFcGtLgChEeClDmCbDiClCcv@vq@cCbBwDxBaDvAcEzAaDv@yHlAmCJsxBGeJGio@AoUL_FBgIQe{EFyFJaAJM@uGMyV?eLV}a@GmFQoaC?_TV_K`@}MfAeRrCaHn@m^pGgJpBoLhDqNhFu[|NkLlDcJ|AmDZsRt@eFUiLyA}SiGsF{B}yBclAmI}FiSaPaGeDyHsCeHuAwHc@_JRmJpA_TrD_Kx@kSvBkIjAyg@rFcJpAeHFkIi@cQqD_K{C_RmHi~@wg@qIwGqD}DiJkLiDqDsFsEuScN_JgHkDqD{x@c`AsS_W{CiEcPkWsEaKcTwb@oJ{SeE}HmCyDyNwPqCaC}DsCcCwAeGkCgHuBaIqAsFa@sUo@sNMa_@wAca@i@_EBeCGqDToAHwBOeE{@uE_ByKmFyDyBaH}EkB}A}KsL[OuBuByAsBeC{E]cA_CwEcA_BwBkC_GgJcD}DwBuBeCuBmLsHelA{j@iXuMaDwBiCyB{f@of@oC{BoHiF_B_A{DkB_k@_S{Du@sCUgGIwGZkEh@wDXeDDcH[oHqAyGaCuCyAmCcBgk@ya@yQaQsFiEoCcBgDcBuDyAkc@eM_E{@sCa@qD]gFMiFHkIh@eC\\aH|AiWtJ}M~FaF|C_e@j]kC~BuEbF}DlFoB`DuDdEmB|C}GlTiVht@mNr`@kGtOiXvn@kFdOaAbBiCdDoEhIg@pD??SpCDzDv@|JrBtKrAlF\\tG?rC`@d^[nCm@dBcA~As@l@iFhCoBl@w@JcB@gFu@eFCcIGiD`@yDJ_CBgPJcOlCiBp@{BhBgIxGoD|D{AnAq@~@aCrE{D|FaFzJmGzK}MhYe@`BgAhGQhBChBPdD`AhGJ|BEdCU|Bm@~Bg@dAq@`AaAt@qFhBmDjAsD`AkAf@qEx@sC@mB[}@[eB_BaB}Cy@iDqAsGk@wBuAqCi@y@yBsBgBs@wEaA_McFiTgJsD{BcEqDoCgDeEyGuF}JkFuHkEcFqEiEwDyC}GiEeIcDyC}@}HaBoC]yDO}AOiCWou@eFuESuF@{El@aItBaHpD{FxEcJnJwC~ByDxBeM~EcErBwD`Csr@dh@aF~EiIrKeCvDeDvFql@thAuDpGmC`EaDhEkGjH_uChrCmIvHkEdDkGvDuDjBss@fZuG~BcHdBoG|@qIf@oSh@uU|@gkAxCeFd@aFfA_FdBoaAjh@mCfBsC~BiCdCcg@ll@cDjD{IzH}WlTeGdEkKdGsGtCwFvB}DhAmK|B_JlAuLt@mRb@_ETch@dByFx@_Dp@uExAaHvCkDnBeDzBeDlCeC~Bep@pu@wEtEqFzDoG~CaHrByEr@iFVkHQkG}@yDeAsCeAiDcBiD{B{M}KuD{ByHyC_Dw@yFm@aLYiIBws@lAeGa@iBWcHgBoBw@okBk{@wqGiiCoDaA_Fw@iDU}FCqE\\ay@bMiHv@_Ll@}Uv@kDXgF~@eDx@{KhD{uAxe@}FfCwHdEoD~BcFvDsWbUoDnCyGlEaGbDon@`Y?B',
        stops: [
          {
            id: 'Brighton',
            name: 'Brighton',
            coordinates: {
              lat: 50.829003,
              lon: -0.14128,
            },
          },
          {
            id: 'BurgessHill',
            name: 'Burgess Hill',
            coordinates: {
              lat: 50.953654,
              lon: -0.127413,
            },
          },
          {
            id: 'HaywardsHeath',
            name: 'Haywards Heath',
            coordinates: {
              lat: 51.00568,
              lon: -0.105078,
            },
          },
          {
            id: 'Balcombe',
            name: 'Balcombe',
            coordinates: {
              lat: 51.05552,
              lon: -0.136934,
            },
          },
          {
            id: 'ThreeBridges',
            name: 'Three Bridges',
            coordinates: {
              lat: 51.116922,
              lon: -0.161184,
            },
          },
          {
            id: 'GatwickAirport',
            name: 'Gatwick Airport',
            coordinates: {
              lat: 51.156489,
              lon: -0.161042,
            },
          },
          {
            id: 'EastCroydon',
            name: 'East Croydon',
            coordinates: {
              lat: 51.375157,
              lon: -0.092694,
            },
          },
          {
            id: 'LondonBridge',
            name: 'London Bridge',
            coordinates: {
              lat: 51.505499,
              lon: -0.086922,
            },
          },
          {
            id: 'Blackfriars',
            name: 'Blackfriars',
            coordinates: {
              lat: 51.511585,
              lon: -0.103767,
            },
          },
          {
            id: 'CityThameslink',
            name: 'City Thameslink',
            coordinates: {
              lat: 51.515056,
              lon: -0.103547,
            },
          },
          {
            id: 'Farringdon',
            name: 'Farringdon',
            coordinates: {
              lat: 51.520445,
              lon: -0.105065,
            },
          },
          {
            id: 'StPancrasInternational',
            name: 'St Pancras International',
            coordinates: {
              lat: 51.532008,
              lon: -0.126906,
            },
          },
          {
            id: 'FinsburyPark',
            name: 'Finsbury Park',
            coordinates: {
              lat: 51.564402,
              lon: -0.106512,
            },
          },
          {
            id: 'Stevenage',
            name: 'Stevenage',
            coordinates: {
              lat: 51.901686,
              lon: -0.207109,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailTL',
              headsign: 'Cambridge',
              scheduled_time: '2022-07-12T15:12:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Disruption through Stevenage',
              description:
                'Stevenage: Disruption through Stevenage expected until 16:00',
              service_ids: ['NationalRailTL'],
            },
          ],
          leg_departure_time: '2022-07-12T15:12:00+01:00',
          leg_arrival_time: '2022-07-12T16:58:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailTL',
            name: 'Thameslink',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/1e4e232416177f31d325fbbde10539d3229dc29625c9827a413e2be6/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d45c34b17d78178ef69cde20b65f8d6469b3dfa64b3be6460f2572ee/d324a6fb/@2x.png',
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
        duration_seconds: 168,
        path: 'e`x{Hdmg@[yCIB_AZBV',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:58:00+01:00',
          leg_arrival_time: '2022-07-12T17:00:48+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Stevenage_E32064',
            stop_id: 'Stevenage',
            coordinates: {
              lat: 51.901633,
              lon: -0.207068,
            },
          },
          alternate_exits: [
            {
              id: 'Stevenage_E32065',
              stop_id: 'Stevenage',
              coordinates: {
                lat: 51.9015773,
                lon: -0.2057765,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 120,
        path: 'gcx{Hbjg@mK`OdFdb@',
        stops: [
          {
            id: '210021200945',
            name: 'Stevenage Railway Station',
            coordinates: {
              lat: 51.902118,
              lon: -0.206583,
            },
            indicator_text: 'N',
          },
          {
            id: '210021203770',
            name: 'Argyle Way',
            coordinates: {
              lat: 51.904109,
              lon: -0.20915,
            },
          },
          {
            id: '210021203775',
            name: 'Gunnels Wood Road',
            coordinates: {
              lat: 51.902962,
              lon: -0.214777,
            },
          },
        ],
        updatable_detail: {
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Arriva_ArrivaHertsAndEssex1'],
            },
          ],
          leg_departure_time: '2022-07-12T17:26:00+01:00',
          leg_arrival_time: '2022-07-12T17:28:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'Arriva_ArrivaHertsAndEssex1',
            name: '1',
            vehicle_types: ['bus'],
            brand: {
              id: 'Arriva',
              name: 'Arriva',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/804fa7faf8b7a6f1b59195e655af7defa27d55e08213831ac92a4573/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/539e8bcfff1d9c8bd6f26784ac3c18f3fd6c8b5af140a8ad7065475b/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/21a37ea4bed752fbac955bc9e9a5259749b0e5f8e06ac8557215ef67/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/6c247e5e1b5f44943d9b9a9d66e9bcde5a4b9eb026696d1041cb9d1e/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9577cd28e70356112442d0ab6fc978115b253b61bea758f53a6cf1f7/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/707b86c748a9cf9b5970273deaa531c8f173d854dad854b8b9c399b1/d324a6fb/@2x.png',
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
            color: '#10A7B8',
            background_color: '#10A7B8',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Stevenage',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 1495,
        path: 'ohx{Hj}h@QPDPTL@?JJLLFLDr@In@RIz@m@bCuBPJHJFP~@vBfAfCR`@zAxCJX|@`Cd@nAv@vBJZc@p@o@f@yAfAy@z@o@t@_@n@Sj@Il@Cn@BX?DNbB`@~Db@fCh@xCd@dDn@dEzA`Jm@h@e@Ta@TWHk@Lw@H[BW?_AEm@?k@Cg@E_@?O?_@QYQWQUM',
        updatable_detail: {
          leg_departure_time: '2022-07-12T17:28:00+01:00',
          leg_arrival_time: '2022-07-12T17:52:55+01:00',
        },
      },
    ],
    route_departure_time: '2022-07-12T14:56:19+01:00',
    route_arrival_time: '2022-07-12T17:52:55+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzYzNDE4MCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTcyNjUwLFwiZHVyYXRpb25cIjoxMDQzOSxcImVuZFwiOntcImNvb3Jkc1wiOlwiNTEuOTAyNjE3LC0wLjIyNzg1NVwifSxcImpyX2luZGV4XCI6MCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjoxNTksXCJkdXJhdGlvblwiOjE4NCxcImVjXCI6XCI1MC44Mjg3NSwtMC4xNDE0NlwiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUwLjgyODg0LC0wLjE0MzJcIixcInRvX2V4aXRcIjpcIkJyaWdodG9uX0UzMTUyOFwifSx7XCJkdXJhdGlvblwiOjYzNjAsXCJlbmRcIjpcIlN0ZXZlbmFnZVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTmF0aW9uYWxSYWlsVExcIl0sXCJzdGFydFwiOlwiQnJpZ2h0b25cIixcInN0b3BfY291bnRcIjoxNCxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fQnJpZ2h0b25fTmF0aW9uYWxSYWlsTmF0aW9uYWxSYWlsQnVzXCIsXCJQbGF0Zm9ybV9TdGV2ZW5hZ2VfQkduXCJdfSx7XCJkaXN0YW5jZVwiOjExMyxcImR1cmF0aW9uXCI6MTY4LFwiZWNcIjpcIjUxLjkwMjEyLC0wLjIwNjU4XCIsXCJmcm9tX2V4aXRcIjpcIlN0ZXZlbmFnZV9FMzIwNjRcIixcImluX3N0YXRpb25cIjpcIjIvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS45MDE2MywtMC4yMDcwN1wifSx7XCJkdXJhdGlvblwiOjEyMCxcImVuZFwiOlwiMjEwMDIxMjAzNzc1XCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJBcnJpdmFfQXJyaXZhSGVydHNBbmRFc3NleDFcIl0sXCJzdGFydFwiOlwiMjEwMDIxMjAwOTQ1XCIsXCJzdG9wX2NvdW50XCI6M30se1wiZGlzdGFuY2VcIjoxNzM5LFwiZHVyYXRpb25cIjoxNDk1LFwiZWNcIjpcIjUxLjkwMjc1LC0wLjIyODM4XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuOTAyOTYsLTAuMjE0NzhcIn1dLFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNWFiYWE5ZGEtZTY4YS00ODk3LTkwZGEtYzhhNzA2NDQ3MjI2XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTAuODI4ODUyLC0wLjE0MzIwNFwifSxcInRpbWVcIjpcIjIwMjItMDctMTJUMTQ6NTY6MTkrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.2XcNj6B7bHotFM3aL_56LjlM8Jwa446b8_c4d50cJeY',
  },
  {
    start: {
      coordinates: {
        lat: 50.828852,
        lon: -0.143204,
      },
    },
    end: {
      coordinates: {
        lat: 51.902617,
        lon: -0.227855,
      },
    },
    distance_meters: 2691,
    duration_seconds: 9317,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 184,
        path: 'gofuH~}Z?QBcA@o@DgAJyA@KDa@ME',
        updatable_detail: {
          leg_departure_time: '2022-07-12T14:56:19+01:00',
          leg_arrival_time: '2022-07-12T14:59:23+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Brighton_E31528',
            stop_id: 'Brighton',
            coordinates: {
              lat: 50.8287468,
              lon: -0.1414609,
            },
          },
          alternate_exits: [
            {
              id: 'Brighton_E31526',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286149,
                lon: -0.1410828,
              },
            },
            {
              id: 'Brighton_E31527',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.829981,
                lon: -0.1404605,
              },
            },
            {
              id: 'Brighton_E31529',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286075,
                lon: -0.1411825,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 6360,
        path: 'gpfuH~qZ?g@yAC}@HkAZeO`GaAh@wCzBaHrHwBfDmJnSaDhFoDvE_EbEcDbCaMtG{DtAyHlB_LhBgM`CiHl@qG@iBKuGy@yNgDqEc@qFImGPgBRsCl@ab@bNcFvBeFvCgCjB}WtU}EjDoEbCyCnAyDlAwGnAgCTgEPaC@cH_@}IyAij@iLuEuAkmBmv@_EsBsgAap@}wDusB_x@_c@eFiCiFwByEaBstF}zAg@MeMwC}Gy@iISiHXiFp@gDr@iuApa@qHbCiFbCsG|Dc^zWoEtDsEtEoDdEwEnG_DzEwDzG{Zbl@qAzByExGyFdGqDzCmCjBmC~AiCjAcLlEwVtJwCvAiH|EeDvCcFxFaCdDgDxFcGtLgChEeClDmCbDiClCcv@vq@cCbBwDxBaDvAcEzAaDv@yHlAmCJsxBGeJGio@AoUL_FBgIQe{EFyFJaAJM@uGMyV?eLV}a@GmFQoaC?_TV_K`@}MfAeRrCaHn@m^pGgJpBoLhDqNhFu[|NkLlDcJ|AmDZsRt@eFUiLyA}SiGsF{B}yBclAmI}FiSaPaGeDyHsCeHuAwHc@_JRmJpA_TrD_Kx@kSvBkIjAyg@rFcJpAeHFkIi@cQqD_K{C_RmHi~@wg@qIwGqD}DiJkLiDqDsFsEuScN_JgHkDqD{x@c`AsS_W{CiEcPkWsEaKcTwb@oJ{SeE}HmCyDyNwPqCaC}DsCcCwAeGkCgHuBaIqAsFa@sUo@sNMa_@wAca@i@_EBeCGqDToAHwBOeE{@uE_ByKmFyDyBaH}EkB}A}KsL[OuBuByAsBeC{E]cA_CwEcA_BwBkC_GgJcD}DwBuBeCuBmLsHelA{j@iXuMaDwBiCyB{f@of@oC{BoHiF_B_A{DkB_k@_S{Du@sCUgGIwGZkEh@wDXeDDcH[oHqAyGaCuCyAmCcBgk@ya@yQaQsFiEoCcBgDcBuDyAkc@eM_E{@sCa@qD]gFMiFHkIh@eC\\aH|AiWtJ}M~FaF|C_e@j]kC~BuEbF}DlFoB`DuDdEmB|C}GlTiVht@mNr`@kGtOiXvn@kFdOaAbBiCdDoEhIg@pD??SpCDzDv@|JrBtKrAlF\\tG?rC`@d^[nCm@dBcA~As@l@iFhCoBl@w@JcB@gFu@eFCcIGiD`@yDJ_CBgPJcOlCiBp@{BhBgIxGoD|D{AnAq@~@aCrE{D|FaFzJmGzK}MhYe@`BgAhGQhBChBPdD`AhGJ|BEdCU|Bm@~Bg@dAq@`AaAt@qFhBmDjAsD`AkAf@qEx@sC@mB[}@[eB_BaB}Cy@iDqAsGk@wBuAqCi@y@yBsBgBs@wEaA_McFiTgJsD{BcEqDoCgDeEyGuF}JkFuHkEcFqEiEwDyC}GiEeIcDyC}@}HaBoC]yDO}AOiCWou@eFuESuF@{El@aItBaHpD{FxEcJnJwC~ByDxBeM~EcErBwD`Csr@dh@aF~EiIrKeCvDeDvFql@thAuDpGmC`EaDhEkGjH_uChrCmIvHkEdDkGvDuDjBss@fZuG~BcHdBoG|@qIf@oSh@uU|@gkAxCeFd@aFfA_FdBoaAjh@mCfBsC~BiCdCcg@ll@cDjD{IzH}WlTeGdEkKdGsGtCwFvB}DhAmK|B_JlAuLt@mRb@_ETch@dByFx@_Dp@uExAaHvCkDnBeDzBeDlCeC~Bep@pu@wEtEqFzDoG~CaHrByEr@iFVkHQkG}@yDeAsCeAiDcBiD{B{M}KuD{ByHyC_Dw@yFm@aLYiIBws@lAeGa@iBWcHgBoBw@okBk{@wqGiiCoDaA_Fw@iDU}FCqE\\ay@bMiHv@_Ll@}Uv@kDXgF~@eDx@{KhD{uAxe@}FfCwHdEoD~BcFvDsWbUoDnCyGlEaGbDon@`Y?B',
        stops: [
          {
            id: 'Brighton',
            name: 'Brighton',
            coordinates: {
              lat: 50.829003,
              lon: -0.14128,
            },
          },
          {
            id: 'BurgessHill',
            name: 'Burgess Hill',
            coordinates: {
              lat: 50.953654,
              lon: -0.127413,
            },
          },
          {
            id: 'HaywardsHeath',
            name: 'Haywards Heath',
            coordinates: {
              lat: 51.00568,
              lon: -0.105078,
            },
          },
          {
            id: 'Balcombe',
            name: 'Balcombe',
            coordinates: {
              lat: 51.05552,
              lon: -0.136934,
            },
          },
          {
            id: 'ThreeBridges',
            name: 'Three Bridges',
            coordinates: {
              lat: 51.116922,
              lon: -0.161184,
            },
          },
          {
            id: 'GatwickAirport',
            name: 'Gatwick Airport',
            coordinates: {
              lat: 51.156489,
              lon: -0.161042,
            },
          },
          {
            id: 'EastCroydon',
            name: 'East Croydon',
            coordinates: {
              lat: 51.375157,
              lon: -0.092694,
            },
          },
          {
            id: 'LondonBridge',
            name: 'London Bridge',
            coordinates: {
              lat: 51.505499,
              lon: -0.086922,
            },
          },
          {
            id: 'Blackfriars',
            name: 'Blackfriars',
            coordinates: {
              lat: 51.511585,
              lon: -0.103767,
            },
          },
          {
            id: 'CityThameslink',
            name: 'City Thameslink',
            coordinates: {
              lat: 51.515056,
              lon: -0.103547,
            },
          },
          {
            id: 'Farringdon',
            name: 'Farringdon',
            coordinates: {
              lat: 51.520445,
              lon: -0.105065,
            },
          },
          {
            id: 'StPancrasInternational',
            name: 'St Pancras International',
            coordinates: {
              lat: 51.532008,
              lon: -0.126906,
            },
          },
          {
            id: 'FinsburyPark',
            name: 'Finsbury Park',
            coordinates: {
              lat: 51.564402,
              lon: -0.106512,
            },
          },
          {
            id: 'Stevenage',
            name: 'Stevenage',
            coordinates: {
              lat: 51.901686,
              lon: -0.207109,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailTL',
              headsign: 'Cambridge',
              scheduled_time: '2022-07-12T15:12:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Disruption through Stevenage',
              description:
                'Stevenage: Disruption through Stevenage expected until 16:00',
              service_ids: ['NationalRailTL'],
            },
          ],
          leg_departure_time: '2022-07-12T15:12:00+01:00',
          leg_arrival_time: '2022-07-12T16:58:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailTL',
            name: 'Thameslink',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/1e4e232416177f31d325fbbde10539d3229dc29625c9827a413e2be6/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d45c34b17d78178ef69cde20b65f8d6469b3dfa64b3be6460f2572ee/d324a6fb/@2x.png',
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
        duration_seconds: 2173,
        path: 'e`x{Hdmg@[yCIB_AZA@QBHZRIVIn@UTbBBRBRJl@?BBA@@@B?BC@A@HV@NMH\\dCID@F?JADCFEBDHFh@Hj@Hj@Hj@Fb@HTKZILOJOFKFIFCHENAPSHk@TWLMFC?KDK?OAG?C?KBgAb@F`@PbAXzAFVBJb@tAxAdETp@p@~APADHPQZjA_A~@ELCJ@T~@vBfAfCR`@zAxCJX|@`Cd@nAv@vBJZc@p@o@f@yAfAy@z@o@t@_@n@Sj@Il@Cn@BX?DNbB`@~Db@fCh@xCd@dDn@dEzA`Jm@h@e@Ta@TWHk@Lw@H[BW?_AEm@?k@Cg@E_@?O?_@QYQWQUM',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:58:00+01:00',
          leg_arrival_time: '2022-07-12T17:34:13+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Stevenage_E32064',
            stop_id: 'Stevenage',
            coordinates: {
              lat: 51.901633,
              lon: -0.207068,
            },
          },
          alternate_exits: [
            {
              id: 'Stevenage_E32065',
              stop_id: 'Stevenage',
              coordinates: {
                lat: 51.9015773,
                lon: -0.2057765,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-12T14:56:19+01:00',
    route_arrival_time: '2022-07-12T17:34:13+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzYzNDE4MCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTcyNjUwLFwiZHVyYXRpb25cIjo5MzE3LFwiZW5kXCI6e1wiY29vcmRzXCI6XCI1MS45MDI2MTcsLTAuMjI3ODU1XCJ9LFwianJfaW5kZXhcIjoxLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjE1OSxcImR1cmF0aW9uXCI6MTg0LFwiZWNcIjpcIjUwLjgyODc1LC0wLjE0MTQ2XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTAuODI4ODQsLTAuMTQzMlwiLFwidG9fZXhpdFwiOlwiQnJpZ2h0b25fRTMxNTI4XCJ9LHtcImR1cmF0aW9uXCI6NjM2MCxcImVuZFwiOlwiU3RldmVuYWdlXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJOYXRpb25hbFJhaWxUTFwiXSxcInN0YXJ0XCI6XCJCcmlnaHRvblwiLFwic3RvcF9jb3VudFwiOjE0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9CcmlnaHRvbl9OYXRpb25hbFJhaWxOYXRpb25hbFJhaWxCdXNcIixcIlBsYXRmb3JtX1N0ZXZlbmFnZV9CR25cIl19LHtcImRpc3RhbmNlXCI6MjUzMixcImR1cmF0aW9uXCI6MjE3MyxcImVjXCI6XCI1MS45MDI3NSwtMC4yMjgzOFwiLFwiZnJvbV9leGl0XCI6XCJTdGV2ZW5hZ2VfRTMyMDY0XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuOTAxNjMsLTAuMjA3MDdcIn1dLFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNWFiYWE5ZGEtZTY4YS00ODk3LTkwZGEtYzhhNzA2NDQ3MjI2XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTAuODI4ODUyLC0wLjE0MzIwNFwifSxcInRpbWVcIjpcIjIwMjItMDctMTJUMTQ6NTY6MTkrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.ntCT0O0CzI4-lQDC3YNPaGTcJnlRuIG-RpOE8CGKUAc',
  },
  {
    start: {
      coordinates: {
        lat: 50.828852,
        lon: -0.143204,
      },
    },
    end: {
      coordinates: {
        lat: 51.902617,
        lon: -0.227855,
      },
    },
    distance_meters: 1320,
    duration_seconds: 9752,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 184,
        path: 'gofuH~}Z?QBcA@o@DgAJyA@KDa@ME',
        updatable_detail: {
          leg_departure_time: '2022-07-12T14:56:19+01:00',
          leg_arrival_time: '2022-07-12T14:59:23+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Brighton_E31528',
            stop_id: 'Brighton',
            coordinates: {
              lat: 50.8287468,
              lon: -0.1414609,
            },
          },
          alternate_exits: [
            {
              id: 'Brighton_E31526',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286149,
                lon: -0.1410828,
              },
            },
            {
              id: 'Brighton_E31527',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.829981,
                lon: -0.1404605,
              },
            },
            {
              id: 'Brighton_E31529',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286075,
                lon: -0.1411825,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 6360,
        path: 'gpfuH~qZ?g@yAC}@HkAZeO`GaAh@wCzBaHrHwBfDmJnSaDhFoDvE_EbEcDbCaMtG{DtAyHlB_LhBgM`CiHl@qG@iBKuGy@yNgDqEc@qFImGPgBRsCl@ab@bNcFvBeFvCgCjB}WtU}EjDoEbCyCnAyDlAwGnAgCTgEPaC@cH_@}IyAij@iLuEuAkmBmv@_EsBsgAap@}wDusB_x@_c@eFiCiFwByEaBstF}zAg@MeMwC}Gy@iISiHXiFp@gDr@iuApa@qHbCiFbCsG|Dc^zWoEtDsEtEoDdEwEnG_DzEwDzG{Zbl@qAzByExGyFdGqDzCmCjBmC~AiCjAcLlEwVtJwCvAiH|EeDvCcFxFaCdDgDxFcGtLgChEeClDmCbDiClCcv@vq@cCbBwDxBaDvAcEzAaDv@yHlAmCJsxBGeJGio@AoUL_FBgIQe{EFyFJaAJM@uGMyV?eLV}a@GmFQoaC?_TV_K`@}MfAeRrCaHn@m^pGgJpBoLhDqNhFu[|NkLlDcJ|AmDZsRt@eFUiLyA}SiGsF{B}yBclAmI}FiSaPaGeDyHsCeHuAwHc@_JRmJpA_TrD_Kx@kSvBkIjAyg@rFcJpAeHFkIi@cQqD_K{C_RmHi~@wg@qIwGqD}DiJkLiDqDsFsEuScN_JgHkDqD{x@c`AsS_W{CiEcPkWsEaKcTwb@oJ{SeE}HmCyDyNwPqCaC}DsCcCwAeGkCgHuBaIqAsFa@sUo@sNMa_@wAca@i@_EBeCGqDToAHwBOeE{@uE_ByKmFyDyBaH}EkB}A}KsL[OuBuByAsBeC{E]cA_CwEcA_BwBkC_GgJcD}DwBuBeCuBmLsHelA{j@iXuMaDwBiCyB{f@of@oC{BoHiF_B_A{DkB_k@_S{Du@sCUgGIwGZkEh@wDXeDDcH[oHqAyGaCuCyAmCcBgk@ya@yQaQsFiEoCcBgDcBuDyAkc@eM_E{@sCa@qD]gFMiFHkIh@eC\\aH|AiWtJ}M~FaF|C_e@j]kC~BuEbF}DlFoB`DuDdEmB|C}GlTiVht@mNr`@kGtOiXvn@kFdOaAbBiCdDoEhIg@pD??SpCDzDv@|JrBtKrAlF\\tG?rC`@d^[nCm@dBcA~As@l@iFhCoBl@w@JcB@gFu@eFCcIGiD`@yDJ_CBgPJcOlCiBp@{BhBgIxGoD|D{AnAq@~@aCrE{D|FaFzJmGzK}MhYe@`BgAhGQhBChBPdD`AhGJ|BEdCU|Bm@~Bg@dAq@`AaAt@qFhBmDjAsD`AkAf@qEx@sC@mB[}@[eB_BaB}Cy@iDqAsGk@wBuAqCi@y@yBsBgBs@wEaA_McFiTgJsD{BcEqDoCgDeEyGuF}JkFuHkEcFqEiEwDyC}GiEeIcDyC}@}HaBoC]yDO}AOiCWou@eFuESuF@{El@aItBaHpD{FxEcJnJwC~ByDxBeM~EcErBwD`Csr@dh@aF~EiIrKeCvDeDvFql@thAuDpGmC`EaDhEkGjH_uChrCmIvHkEdDkGvDuDjBss@fZuG~BcHdBoG|@qIf@oSh@uU|@gkAxCeFd@aFfA_FdBoaAjh@mCfBsC~BiCdCcg@ll@cDjD{IzH}WlTeGdEkKdGsGtCwFvB}DhAmK|B_JlAuLt@mRb@_ETch@dByFx@_Dp@uExAaHvCkDnBeDzBeDlCeC~Bep@pu@wEtEqFzDoG~CaHrByEr@iFVkHQkG}@yDeAsCeAiDcBiD{B{M}KuD{ByHyC_Dw@yFm@aLYiIBws@lAeGa@iBWcHgBoBw@okBk{@wqGiiCoDaA_Fw@iDU}FCqE\\ay@bMiHv@_Ll@}Uv@kDXgF~@eDx@{KhD{uAxe@}FfCwHdEoD~BcFvDsWbUoDnCyGlEaGbDon@`Y?B',
        stops: [
          {
            id: 'Brighton',
            name: 'Brighton',
            coordinates: {
              lat: 50.829003,
              lon: -0.14128,
            },
          },
          {
            id: 'BurgessHill',
            name: 'Burgess Hill',
            coordinates: {
              lat: 50.953654,
              lon: -0.127413,
            },
          },
          {
            id: 'HaywardsHeath',
            name: 'Haywards Heath',
            coordinates: {
              lat: 51.00568,
              lon: -0.105078,
            },
          },
          {
            id: 'Balcombe',
            name: 'Balcombe',
            coordinates: {
              lat: 51.05552,
              lon: -0.136934,
            },
          },
          {
            id: 'ThreeBridges',
            name: 'Three Bridges',
            coordinates: {
              lat: 51.116922,
              lon: -0.161184,
            },
          },
          {
            id: 'GatwickAirport',
            name: 'Gatwick Airport',
            coordinates: {
              lat: 51.156489,
              lon: -0.161042,
            },
          },
          {
            id: 'EastCroydon',
            name: 'East Croydon',
            coordinates: {
              lat: 51.375157,
              lon: -0.092694,
            },
          },
          {
            id: 'LondonBridge',
            name: 'London Bridge',
            coordinates: {
              lat: 51.505499,
              lon: -0.086922,
            },
          },
          {
            id: 'Blackfriars',
            name: 'Blackfriars',
            coordinates: {
              lat: 51.511585,
              lon: -0.103767,
            },
          },
          {
            id: 'CityThameslink',
            name: 'City Thameslink',
            coordinates: {
              lat: 51.515056,
              lon: -0.103547,
            },
          },
          {
            id: 'Farringdon',
            name: 'Farringdon',
            coordinates: {
              lat: 51.520445,
              lon: -0.105065,
            },
          },
          {
            id: 'StPancrasInternational',
            name: 'St Pancras International',
            coordinates: {
              lat: 51.532008,
              lon: -0.126906,
            },
          },
          {
            id: 'FinsburyPark',
            name: 'Finsbury Park',
            coordinates: {
              lat: 51.564402,
              lon: -0.106512,
            },
          },
          {
            id: 'Stevenage',
            name: 'Stevenage',
            coordinates: {
              lat: 51.901686,
              lon: -0.207109,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailTL',
              headsign: 'Cambridge',
              scheduled_time: '2022-07-12T15:12:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Disruption through Stevenage',
              description:
                'Stevenage: Disruption through Stevenage expected until 16:00',
              service_ids: ['NationalRailTL'],
            },
          ],
          leg_departure_time: '2022-07-12T15:12:00+01:00',
          leg_arrival_time: '2022-07-12T16:58:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailTL',
            name: 'Thameslink',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/1e4e232416177f31d325fbbde10539d3229dc29625c9827a413e2be6/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d45c34b17d78178ef69cde20b65f8d6469b3dfa64b3be6460f2572ee/d324a6fb/@2x.png',
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
        duration_seconds: 168,
        path: 'e`x{Hdmg@[yCIB_AZBV',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:58:00+01:00',
          leg_arrival_time: '2022-07-12T17:00:48+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Stevenage_E32064',
            stop_id: 'Stevenage',
            coordinates: {
              lat: 51.901633,
              lon: -0.207068,
            },
          },
          alternate_exits: [
            {
              id: 'Stevenage_E32065',
              stop_id: 'Stevenage',
              coordinates: {
                lat: 51.9015773,
                lon: -0.2057765,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 600,
        path: 'gcx{Hbjg@_p@~DmLlEoQ`]|CvH`S`L`N`T',
        stops: [
          {
            id: '210021200945',
            name: 'Stevenage Railway Station',
            coordinates: {
              lat: 51.902118,
              lon: -0.206583,
            },
            indicator_text: 'N',
          },
          {
            id: '210021200130',
            name: 'Spice Rouge Restaurant',
            coordinates: {
              lat: 51.909956,
              lon: -0.207536,
            },
          },
          {
            id: '210021200135',
            name: 'The Mulberry Tree',
            coordinates: {
              lat: 51.912112,
              lon: -0.20857,
            },
          },
          {
            id: '210021203710',
            name: 'Essex Road',
            coordinates: {
              lat: 51.915071,
              lon: -0.213381,
            },
          },
          {
            id: '210021200320',
            name: 'Fleetwood Crescent',
            coordinates: {
              lat: 51.914277,
              lon: -0.214939,
            },
          },
          {
            id: '210021200360',
            name: 'Torquay Crescent',
            coordinates: {
              lat: 51.911071,
              lon: -0.217029,
            },
          },
          {
            id: '210021200540',
            name: 'Rutherford Close',
            coordinates: {
              lat: 51.908658,
              lon: -0.220396,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Arriva_ArrivaHertsAndEssex8',
              frequency_seconds_range: [1800, 1800],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Arriva_ArrivaHertsAndEssex8'],
            },
          ],
          leg_departure_time: '2022-07-12T17:02:00+01:00',
          leg_arrival_time: '2022-07-12T17:12:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'Arriva_ArrivaHertsAndEssex8',
            name: '8',
            vehicle_types: ['bus'],
            brand: {
              id: 'Arriva',
              name: 'Arriva',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/804fa7faf8b7a6f1b59195e655af7defa27d55e08213831ac92a4573/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/539e8bcfff1d9c8bd6f26784ac3c18f3fd6c8b5af140a8ad7065475b/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/21a37ea4bed752fbac955bc9e9a5259749b0e5f8e06ac8557215ef67/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/6c247e5e1b5f44943d9b9a9d66e9bcde5a4b9eb026696d1041cb9d1e/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9577cd28e70356112442d0ab6fc978115b253b61bea758f53a6cf1f7/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/707b86c748a9cf9b5970273deaa531c8f173d854dad854b8b9c399b1/d324a6fb/@2x.png',
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
            color: '#10A7B8',
            background_color: '#10A7B8',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Bragbury End',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 940,
        path: 'cly{Hn`j@ENv@x@BGDED?D@@@BDBJ?HADXb@Rd@nA`HJn@HLR?bAq@TCLHHPDR|AvKVlBXjBDHH@JALE`@[Za@LOPOFCHCH@DBPP\\b@Zd@Zh@Rd@Rf@\\pANp@`@`AbAdBz@dBRIr@k@VSPKNDNF@@',
        updatable_detail: {
          leg_departure_time: '2022-07-12T17:12:00+01:00',
          leg_arrival_time: '2022-07-12T17:27:40+01:00',
        },
      },
    ],
    route_departure_time: '2022-07-12T14:56:19+01:00',
    route_arrival_time: '2022-07-12T17:27:40+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzYzNDE4MCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTcyNjUwLFwiZHVyYXRpb25cIjo5NzUyLFwiZW5kXCI6e1wiY29vcmRzXCI6XCI1MS45MDI2MTcsLTAuMjI3ODU1XCJ9LFwianJfaW5kZXhcIjoyLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjE1OSxcImR1cmF0aW9uXCI6MTg0LFwiZWNcIjpcIjUwLjgyODc1LC0wLjE0MTQ2XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTAuODI4ODQsLTAuMTQzMlwiLFwidG9fZXhpdFwiOlwiQnJpZ2h0b25fRTMxNTI4XCJ9LHtcImR1cmF0aW9uXCI6NjM2MCxcImVuZFwiOlwiU3RldmVuYWdlXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJOYXRpb25hbFJhaWxUTFwiXSxcInN0YXJ0XCI6XCJCcmlnaHRvblwiLFwic3RvcF9jb3VudFwiOjE0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9CcmlnaHRvbl9OYXRpb25hbFJhaWxOYXRpb25hbFJhaWxCdXNcIixcIlBsYXRmb3JtX1N0ZXZlbmFnZV9CR25cIl19LHtcImRpc3RhbmNlXCI6MTEzLFwiZHVyYXRpb25cIjoxNjgsXCJlY1wiOlwiNTEuOTAyMTIsLTAuMjA2NThcIixcImZyb21fZXhpdFwiOlwiU3RldmVuYWdlX0UzMjA2NFwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjkwMTYzLC0wLjIwNzA3XCJ9LHtcImR1cmF0aW9uXCI6NjAwLFwiZW5kXCI6XCIyMTAwMjEyMDA1NDBcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkFycml2YV9BcnJpdmFIZXJ0c0FuZEVzc2V4OFwiXSxcInN0YXJ0XCI6XCIyMTAwMjEyMDA5NDVcIixcInN0b3BfY291bnRcIjo3fSx7XCJkaXN0YW5jZVwiOjEwNDgsXCJkdXJhdGlvblwiOjk0MCxcImVjXCI6XCI1MS45MDI3NSwtMC4yMjgzOFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjkwODY2LC0wLjIyMDRcIn1dLFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiNWFiYWE5ZGEtZTY4YS00ODk3LTkwZGEtYzhhNzA2NDQ3MjI2XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTAuODI4ODUyLC0wLjE0MzIwNFwifSxcInRpbWVcIjpcIjIwMjItMDctMTJUMTQ6NTY6MTkrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.KRtQvnCVUVAL3mTNLy2rBC_EjrVJe6HkzSe4y1PhjqA',
  },
  {
    start: {
      coordinates: {
        lat: 50.828852,
        lon: -0.143204,
      },
    },
    end: {
      coordinates: {
        lat: 51.902617,
        lon: -0.227855,
      },
    },
    distance_meters: 1796,
    duration_seconds: 9855,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 184,
        path: 'gofuH~}Z?QBcA@o@DgAJyA@KDa@ME',
        updatable_detail: {
          leg_departure_time: '2022-07-12T14:56:19+01:00',
          leg_arrival_time: '2022-07-12T14:59:23+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Brighton_E31528',
            stop_id: 'Brighton',
            coordinates: {
              lat: 50.8287468,
              lon: -0.1414609,
            },
          },
          alternate_exits: [
            {
              id: 'Brighton_E31526',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286149,
                lon: -0.1410828,
              },
            },
            {
              id: 'Brighton_E31527',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.829981,
                lon: -0.1404605,
              },
            },
            {
              id: 'Brighton_E31529',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286075,
                lon: -0.1411825,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 3600,
        path: 'gpfuH~qZ?e@cBCwATaUvJqBdB{EhFmC~D}IjRkDdG{DfFaDfDcI|FgHpDkIhC_a@tHkE`@iENwFUuGy@yNgDqEc@qFImGPgBRsCl@ab@bNcFvBeFvCgCjB}WtU}EjDoEbCyCnAyDlAwGnAgCTgEPaC@cH_@}IyAij@iLuEuAkmBmv@_EsBsgAap@}pFuwCeFiCiFwByEaBstF}zAmNeD}Gy@iISiHXiFp@gDr@iuApa@qHbCiFbCsG|Dc^zWoEtDsEtEoDdEwEnG_DzEwDzG{Zbl@qAzByExGyFdGqDzCmCjBmC~AiCjA{c@bQwCvAiH|EeDvCcFxFaCdDgDxFcGtLgChEeClDmCbDiClCcv@vq@cCbBwDxBaDvAcEzAaDv@yHlAmCJsxBGeJGio@Ao\\PgIQe{EFyFJaAJM@uGMyV?eLV}a@GmFQoaC?_TV_K`@}MfAeRrCaHn@m^pGgJpBoLhDqNhFu[|NkLlDcJ|AmDZsRt@eFUiLyA}SiGsF{B}yBclAmI}FiSaPaGeDyHsCeHuAwHc@_JRmJpA_TrD_Kx@kSvBkIjAyg@rFcJpAeHFkIi@cQqD_K{C_RmHi~@wg@qIwGqD}DiJkLiDqDsFsEuScN_JgHkDqD{x@c`AsS_W{CiEcPkWsEaKcTwb@oJ{SeE}HmCyDyNwPqCaC}DsCcCwAeGkCgHuBaIqAsFa@sUo@sNMa_@wAca@i@_EBeCGaG^wBOeE{@uE_ByKmFyDyBaH}EwKwIgC_BeCcAwBc@_CQ_BDiDl@wAb@cLpFuCzBwDjEyCzEmC~FqA|DsD|MyAlEsDnIuAhC_EjGws@flAmD|GcCzFgJ|WaBlF{@hDaA~EiDjTiD`N_HtQuDdH{EdHeHxHoEnDeGtDsCnAsK~CkDd@yH?iG]mHy@oGO{I^gBVuD~@qa@vNsDdCeCnCcBnCcCbGoBnImM`jAu@tFyBbJyBbGoBrDoBfCiHbHqf@j`@aGbDyDnAcBXeGV{CC}JeBoJyEaEqEeGoK{[iaAeAgGcAkNs@}E}@sDaCuF_BeC}BaC}BsA{EgBaAi@yBg@_CW{IJg_@a@aRAoDr@kFvBmEb@iBOwCmAwDeCcAiAoIqGuEeEi@]Jk@',
        stops: [
          {
            id: 'Brighton',
            name: 'Brighton',
            coordinates: {
              lat: 50.829003,
              lon: -0.14128,
            },
          },
          {
            id: 'GatwickAirport',
            name: 'Gatwick Airport',
            coordinates: {
              lat: 51.156489,
              lon: -0.161042,
            },
          },
          {
            id: 'Victoria',
            name: 'Victoria',
            coordinates: {
              lat: 51.49518,
              lon: -0.144102,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailGX',
              headsign: 'London Victoria',
              scheduled_time: '2022-07-12T15:09:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailGX'],
            },
          ],
          leg_departure_time: '2022-07-12T15:09:00+01:00',
          leg_arrival_time: '2022-07-12T16:09:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailGX',
            name: 'Gatwick Express',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/e2c0cdc0f35db766c2beccde9b94ff05ce516180f469775c216e5f41/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/590349bf7d9eb4264b9d911fc453fbcfd18d016ecf4bf39e68e9abef/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#E21020',
            background_color: '#E21020',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: false,
        },
      },
      {
        travel_mode: 'walk',
        duration_seconds: 250,
        path: 'arhyHbe[y@o@??iBgAKVtBn@??gFs@??',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:09:00+01:00',
          leg_arrival_time: '2022-07-12T16:13:10+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 480,
        path: 'c{hyH`b[pFGuFsBe@WgCkB{HyEgD_BwDmAqCk@aBKyAJqB^yAh@}BlAmEjCgI|Fg@Z_BdAuCz@_DJmBQyFwAaLaFgA]kB_@{CGuCPg@DcDhA_BZoEDkMg@kCWmB]sBm@uBoAiC}BcB_C{AoDiBqESk@kDwCkCoAaBiAuAo@iAkAaAkAy@eB}@yCMo@i@kCg@kDOcBKoBY}DoBgP]uDa@uFc@qE[gCC@',
        stops: [
          {
            id: 'Victoria',
            name: 'Victoria',
            coordinates: {
              lat: 51.49518,
              lon: -0.144102,
            },
          },
          {
            id: 'GreenPark',
            name: 'Green Park',
            coordinates: {
              lat: 51.50685,
              lon: -0.142927,
            },
          },
          {
            id: 'OxfordCircus',
            name: 'Oxford Circus',
            coordinates: {
              lat: 51.515124,
              lon: -0.141769,
            },
          },
          {
            id: 'WarrenStreet',
            name: 'Warren Street',
            coordinates: {
              lat: 51.524512,
              lon: -0.138272,
            },
          },
          {
            id: 'Euston',
            name: 'Euston',
            coordinates: {
              lat: 51.528185,
              lon: -0.133808,
            },
          },
          {
            id: 'KingsCrossStPancras',
            name: "King's Cross St Pancras",
            coordinates: {
              lat: 51.530397,
              lon: -0.123858,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Victoria',
              frequency_seconds_range: [119, 119],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Victoria'],
            },
          ],
          leg_departure_time: '2022-07-12T16:15:00+01:00',
          leg_arrival_time: '2022-07-12T16:23:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Victoria',
            name: 'Victoria',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/b51358cbb907a30424e854fdbc695e6f31090be51b4640d91dac171a/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/a5a9871df380f48a096917b6711b75d3549aea7edb06859c9ffd7401/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#00A0E2',
            background_color: '#009ADA',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Northbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 340,
        path: '_poyHbeW????????{AGQdAqBwD??',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:23:00+01:00',
          leg_arrival_time: '2022-07-12T16:28:40+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1260,
        path: '_woyHhaW?XkZg@g_@yAoEcAaf@oSsDiC_EaE}BeDyNiV}EmGuHmHmF_EmIuEkJcDcKiBikA{HkGBcDZgE~@gHzC{EzC{CdC_Q`PsE`CkMbF{HpEkDtCoh@r_@_FdEyGlHmBbCeHvK_i@lbAmL~SkFtH{FxGi{AlyAsYxYkB~AcWtVsPhO}IbGmHrDiv@h[oHxBkJ|AkF`@ce@~A{Ox@udAdCeGr@uDz@sEdBwb@fSg]|SkD|B{DfDqDvDs_@hd@_GjGcRhP}SpPyH`FcE|BuLlFaErAmGbBqI`BoDd@wl@lC{^hAiEZaFn@eFnAsGzBeIbEyBrAsFrEuG|Gyb@~f@sLnMkHdFsHpDgG|AgFp@yENwFOoFm@{DaAgDkA{CsAwBwAiSyOiBiAeFyBeDeAyEu@kEa@}GIax@`B_G?oHo@mHeBy\\cOmoAal@yxEklB}_@cQ}[qKoIaBsEW}B?aFRe}@xMyMdA_Tj@cM|@cHxAae@tOaRvGyj@lRaFrByIxEyDdCwLvJoN|LmF~DoKzGiHpDwi@hV?D',
        stops: [
          {
            id: 'KingsCross',
            name: "King's Cross",
            coordinates: {
              lat: 51.531532,
              lon: -0.124089,
            },
          },
          {
            id: 'Stevenage',
            name: 'Stevenage',
            coordinates: {
              lat: 51.901686,
              lon: -0.207109,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailGR',
              headsign: 'Bradford Forster Square',
              scheduled_time: '2022-07-12T16:33:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Disruption through Stevenage',
              description:
                'Stevenage: Disruption through Stevenage expected until 16:00',
              service_ids: ['NationalRailGN', 'NationalRailGR'],
            },
            {
              type: 'no_issues',
              service_ids: ['NationalRailTL'],
            },
          ],
          leg_departure_time: '2022-07-12T16:33:00+01:00',
          leg_arrival_time: '2022-07-12T16:54:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailGN',
            name: 'Great Northern',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/681b2c8f63ee27c288c8d6450ccbd07dfd8be4c6f36407dcf7cb466e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/6030e64f9885ef262d629a68bee63a52f2b92c578b4b094839930e25/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#43165C',
            background_color: '#43165C',
          },
          {
            id: 'NationalRailGR',
            name: 'London North Eastern Railway',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/da85040728d8e0a7ccfd3be31ed4f144a6ab72e2266e59482cd7480c/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/7b8a3f9e166b787751eb0d0acb5d8c04e88835c1eba06d1fd043246f/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#CC0524',
            background_color: '#CC0524',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/1e4e232416177f31d325fbbde10539d3229dc29625c9827a413e2be6/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d45c34b17d78178ef69cde20b65f8d6469b3dfa64b3be6460f2572ee/d324a6fb/@2x.png',
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
        duration_seconds: 168,
        path: 'e`x{Hdmg@[yCIB_AZBV',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:54:00+01:00',
          leg_arrival_time: '2022-07-12T16:56:48+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Stevenage_E32064',
            stop_id: 'Stevenage',
            coordinates: {
              lat: 51.901633,
              lon: -0.207068,
            },
          },
          alternate_exits: [
            {
              id: 'Stevenage_E32065',
              stop_id: 'Stevenage',
              coordinates: {
                lat: 51.9015773,
                lon: -0.2057765,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 600,
        path: 'gcx{Hbjg@_p@~DmLlEoQ`]|CvH`S`L`N`T',
        stops: [
          {
            id: '210021200945',
            name: 'Stevenage Railway Station',
            coordinates: {
              lat: 51.902118,
              lon: -0.206583,
            },
            indicator_text: 'N',
          },
          {
            id: '210021200130',
            name: 'Spice Rouge Restaurant',
            coordinates: {
              lat: 51.909956,
              lon: -0.207536,
            },
          },
          {
            id: '210021200135',
            name: 'The Mulberry Tree',
            coordinates: {
              lat: 51.912112,
              lon: -0.20857,
            },
          },
          {
            id: '210021203710',
            name: 'Essex Road',
            coordinates: {
              lat: 51.915071,
              lon: -0.213381,
            },
          },
          {
            id: '210021200320',
            name: 'Fleetwood Crescent',
            coordinates: {
              lat: 51.914277,
              lon: -0.214939,
            },
          },
          {
            id: '210021200360',
            name: 'Torquay Crescent',
            coordinates: {
              lat: 51.911071,
              lon: -0.217029,
            },
          },
          {
            id: '210021200540',
            name: 'Rutherford Close',
            coordinates: {
              lat: 51.908658,
              lon: -0.220396,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Arriva_ArrivaHertsAndEssex8',
              frequency_seconds_range: [1800, 1800],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Arriva_ArrivaHertsAndEssex8'],
            },
          ],
          leg_departure_time: '2022-07-12T17:02:00+01:00',
          leg_arrival_time: '2022-07-12T17:12:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'Arriva_ArrivaHertsAndEssex8',
            name: '8',
            vehicle_types: ['bus'],
            brand: {
              id: 'Arriva',
              name: 'Arriva',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/804fa7faf8b7a6f1b59195e655af7defa27d55e08213831ac92a4573/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/539e8bcfff1d9c8bd6f26784ac3c18f3fd6c8b5af140a8ad7065475b/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/21a37ea4bed752fbac955bc9e9a5259749b0e5f8e06ac8557215ef67/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/6c247e5e1b5f44943d9b9a9d66e9bcde5a4b9eb026696d1041cb9d1e/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9577cd28e70356112442d0ab6fc978115b253b61bea758f53a6cf1f7/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/707b86c748a9cf9b5970273deaa531c8f173d854dad854b8b9c399b1/d324a6fb/@2x.png',
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
            color: '#10A7B8',
            background_color: '#10A7B8',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Bragbury End',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 940,
        path: 'cly{Hn`j@ENv@x@BGDED?D@@@BDBJ?HADXb@Rd@nA`HJn@HLR?bAq@TCLHHPDR|AvKVlBXjBDHH@JALE`@[Za@LOPOFCHCH@DBPP\\b@Zd@Zh@Rd@Rf@\\pANp@`@`AbAdBz@dBRIr@k@VSPKNDNF@@',
        updatable_detail: {
          leg_departure_time: '2022-07-12T17:12:00+01:00',
          leg_arrival_time: '2022-07-12T17:27:40+01:00',
        },
      },
    ],
    route_departure_time: '2022-07-12T14:56:19+01:00',
    route_arrival_time: '2022-07-12T17:27:40+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzYzNDE4MCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTcyNjUwLFwiZHVyYXRpb25cIjo5ODU1LFwiZW5kXCI6e1wiY29vcmRzXCI6XCI1MS45MDI2MTcsLTAuMjI3ODU1XCJ9LFwianJfaW5kZXhcIjozLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjE1OSxcImR1cmF0aW9uXCI6MTg0LFwiZWNcIjpcIjUwLjgyODc1LC0wLjE0MTQ2XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTAuODI4ODQsLTAuMTQzMlwiLFwidG9fZXhpdFwiOlwiQnJpZ2h0b25fRTMxNTI4XCJ9LHtcImR1cmF0aW9uXCI6MzYwMCxcImVuZFwiOlwiVmljdG9yaWFcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIk5hdGlvbmFsUmFpbEdYXCJdLFwic3RhcnRcIjpcIkJyaWdodG9uXCIsXCJzdG9wX2NvdW50XCI6MyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fQnJpZ2h0b25fTmF0aW9uYWxSYWlsTmF0aW9uYWxSYWlsQnVzXCIsXCJQbGF0Zm9ybV9WaWN0b3JpYV9HWFwiXX0se1wiZGlzdGFuY2VcIjozMDksXCJkdXJhdGlvblwiOjI1MCxcImVjXCI6XCI1MS40OTYzNCwtMC4xNDM4NFwiLFwiaW5fc3RhdGlvblwiOlwiMS8yNTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40OTQ4OSwtMC4xNDQzNFwifSx7XCJkdXJhdGlvblwiOjQ4MCxcImVuZFwiOlwiS2luZ3NDcm9zc1N0UGFuY3Jhc1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiVmljdG9yaWFcIl0sXCJzdGFydFwiOlwiVmljdG9yaWFcIixcInN0b3BfY291bnRcIjo2LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9WaWN0b3JpYV9WX2ROXCIsXCJQbGF0Zm9ybV9LaW5nc0Nyb3NzU3RQYW5jcmFzX1ZfZE5FXCJdfSx7XCJkaXN0YW5jZVwiOjE2NyxcImR1cmF0aW9uXCI6MzQwLFwiZWNcIjpcIjUxLjUzMTUyLC0wLjEyMzI1XCIsXCJpbl9zdGF0aW9uXCI6XCIxLzM0MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUzMDQsLTAuMTIzODZcIn0se1wiZHVyYXRpb25cIjoxMjYwLFwiZW5kXCI6XCJTdGV2ZW5hZ2VcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIk5hdGlvbmFsUmFpbEdOXCIsXCJOYXRpb25hbFJhaWxHUlwiLFwiTmF0aW9uYWxSYWlsVExcIl0sXCJzdGFydFwiOlwiS2luZ3NDcm9zc1wiLFwic3RvcF9jb3VudFwiOjIsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX0tpbmdzQ3Jvc3NfTmF0aW9uYWxSYWlsXCIsXCJQbGF0Zm9ybV9TdGV2ZW5hZ2VfQkduXCJdfSx7XCJkaXN0YW5jZVwiOjExMyxcImR1cmF0aW9uXCI6MTY4LFwiZWNcIjpcIjUxLjkwMjEyLC0wLjIwNjU4XCIsXCJmcm9tX2V4aXRcIjpcIlN0ZXZlbmFnZV9FMzIwNjRcIixcImluX3N0YXRpb25cIjpcIjIvOTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS45MDE2MywtMC4yMDcwN1wifSx7XCJkdXJhdGlvblwiOjYwMCxcImVuZFwiOlwiMjEwMDIxMjAwNTQwXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJBcnJpdmFfQXJyaXZhSGVydHNBbmRFc3NleDhcIl0sXCJzdGFydFwiOlwiMjEwMDIxMjAwOTQ1XCIsXCJzdG9wX2NvdW50XCI6N30se1wiZGlzdGFuY2VcIjoxMDQ4LFwiZHVyYXRpb25cIjo5NDAsXCJlY1wiOlwiNTEuOTAyNzUsLTAuMjI4MzhcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS45MDg2NiwtMC4yMjA0XCJ9XSxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjVhYmFhOWRhLWU2OGEtNDg5Ny05MGRhLWM4YTcwNjQ0NzIyNlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUwLjgyODg1MiwtMC4xNDMyMDRcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTEyVDE0OjU2OjE5KzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.YO039LaMo2FLvdQDpgs8EpGlli77FHBOAlkdbfwEG0U',
  },
  {
    start: {
      coordinates: {
        lat: 50.828852,
        lon: -0.143204,
      },
    },
    end: {
      coordinates: {
        lat: 51.902617,
        lon: -0.227855,
      },
    },
    distance_meters: 3167,
    duration_seconds: 9420,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 184,
        path: 'gofuH~}Z?QBcA@o@DgAJyA@KDa@ME',
        updatable_detail: {
          leg_departure_time: '2022-07-12T14:56:19+01:00',
          leg_arrival_time: '2022-07-12T14:59:23+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Brighton_E31528',
            stop_id: 'Brighton',
            coordinates: {
              lat: 50.8287468,
              lon: -0.1414609,
            },
          },
          alternate_exits: [
            {
              id: 'Brighton_E31526',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286149,
                lon: -0.1410828,
              },
            },
            {
              id: 'Brighton_E31527',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.829981,
                lon: -0.1404605,
              },
            },
            {
              id: 'Brighton_E31529',
              stop_id: 'Brighton',
              coordinates: {
                lat: 50.8286075,
                lon: -0.1411825,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 3600,
        path: 'gpfuH~qZ?e@cBCwATaUvJqBdB{EhFmC~D}IjRkDdG{DfFaDfDcI|FgHpDkIhC_a@tHkE`@iENwFUuGy@yNgDqEc@qFImGPgBRsCl@ab@bNcFvBeFvCgCjB}WtU}EjDoEbCyCnAyDlAwGnAgCTgEPaC@cH_@}IyAij@iLuEuAkmBmv@_EsBsgAap@}pFuwCeFiCiFwByEaBstF}zAmNeD}Gy@iISiHXiFp@gDr@iuApa@qHbCiFbCsG|Dc^zWoEtDsEtEoDdEwEnG_DzEwDzG{Zbl@qAzByExGyFdGqDzCmCjBmC~AiCjA{c@bQwCvAiH|EeDvCcFxFaCdDgDxFcGtLgChEeClDmCbDiClCcv@vq@cCbBwDxBaDvAcEzAaDv@yHlAmCJsxBGeJGio@Ao\\PgIQe{EFyFJaAJM@uGMyV?eLV}a@GmFQoaC?_TV_K`@}MfAeRrCaHn@m^pGgJpBoLhDqNhFu[|NkLlDcJ|AmDZsRt@eFUiLyA}SiGsF{B}yBclAmI}FiSaPaGeDyHsCeHuAwHc@_JRmJpA_TrD_Kx@kSvBkIjAyg@rFcJpAeHFkIi@cQqD_K{C_RmHi~@wg@qIwGqD}DiJkLiDqDsFsEuScN_JgHkDqD{x@c`AsS_W{CiEcPkWsEaKcTwb@oJ{SeE}HmCyDyNwPqCaC}DsCcCwAeGkCgHuBaIqAsFa@sUo@sNMa_@wAca@i@_EBeCGaG^wBOeE{@uE_ByKmFyDyBaH}EwKwIgC_BeCcAwBc@_CQ_BDiDl@wAb@cLpFuCzBwDjEyCzEmC~FqA|DsD|MyAlEsDnIuAhC_EjGws@flAmD|GcCzFgJ|WaBlF{@hDaA~EiDjTiD`N_HtQuDdH{EdHeHxHoEnDeGtDsCnAsK~CkDd@yH?iG]mHy@oGO{I^gBVuD~@qa@vNsDdCeCnCcBnCcCbGoBnImM`jAu@tFyBbJyBbGoBrDoBfCiHbHqf@j`@aGbDyDnAcBXeGV{CC}JeBoJyEaEqEeGoK{[iaAeAgGcAkNs@}E}@sDaCuF_BeC}BaC}BsA{EgBaAi@yBg@_CW{IJg_@a@aRAoDr@kFvBmEb@iBOwCmAwDeCcAiAoIqGuEeEi@]Jk@',
        stops: [
          {
            id: 'Brighton',
            name: 'Brighton',
            coordinates: {
              lat: 50.829003,
              lon: -0.14128,
            },
          },
          {
            id: 'GatwickAirport',
            name: 'Gatwick Airport',
            coordinates: {
              lat: 51.156489,
              lon: -0.161042,
            },
          },
          {
            id: 'Victoria',
            name: 'Victoria',
            coordinates: {
              lat: 51.49518,
              lon: -0.144102,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailGX',
              headsign: 'London Victoria',
              scheduled_time: '2022-07-12T15:09:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailGX'],
            },
          ],
          leg_departure_time: '2022-07-12T15:09:00+01:00',
          leg_arrival_time: '2022-07-12T16:09:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailGX',
            name: 'Gatwick Express',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/e2c0cdc0f35db766c2beccde9b94ff05ce516180f469775c216e5f41/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/590349bf7d9eb4264b9d911fc453fbcfd18d016ecf4bf39e68e9abef/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#E21020',
            background_color: '#E21020',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: false,
        },
      },
      {
        travel_mode: 'walk',
        duration_seconds: 250,
        path: 'arhyHbe[y@o@??iBgAKVtBn@??gFs@??',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:09:00+01:00',
          leg_arrival_time: '2022-07-12T16:13:10+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 480,
        path: 'c{hyH`b[pFGuFsBe@WgCkB{HyEgD_BwDmAqCk@aBKyAJqB^yAh@}BlAmEjCgI|Fg@Z_BdAuCz@_DJmBQyFwAaLaFgA]kB_@{CGuCPg@DcDhA_BZoEDkMg@kCWmB]sBm@uBoAiC}BcB_C{AoDiBqESk@kDwCkCoAaBiAuAo@iAkAaAkAy@eB}@yCMo@i@kCg@kDOcBKoBY}DoBgP]uDa@uFc@qE[gCC@',
        stops: [
          {
            id: 'Victoria',
            name: 'Victoria',
            coordinates: {
              lat: 51.49518,
              lon: -0.144102,
            },
          },
          {
            id: 'GreenPark',
            name: 'Green Park',
            coordinates: {
              lat: 51.50685,
              lon: -0.142927,
            },
          },
          {
            id: 'OxfordCircus',
            name: 'Oxford Circus',
            coordinates: {
              lat: 51.515124,
              lon: -0.141769,
            },
          },
          {
            id: 'WarrenStreet',
            name: 'Warren Street',
            coordinates: {
              lat: 51.524512,
              lon: -0.138272,
            },
          },
          {
            id: 'Euston',
            name: 'Euston',
            coordinates: {
              lat: 51.528185,
              lon: -0.133808,
            },
          },
          {
            id: 'KingsCrossStPancras',
            name: "King's Cross St Pancras",
            coordinates: {
              lat: 51.530397,
              lon: -0.123858,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Victoria',
              frequency_seconds_range: [119, 119],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Victoria'],
            },
          ],
          leg_departure_time: '2022-07-12T16:15:00+01:00',
          leg_arrival_time: '2022-07-12T16:23:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Victoria',
            name: 'Victoria',
            vehicle_types: ['metro'],
            brand: {
              id: 'Underground',
              name: 'Tube',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/8b8aba6801e6c6a8bf1b19accbe5e251d29903dc364ce037759c356f/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4ccce98ceba94488c18974347aea28abc65372f501672c853437fb4a/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/b51358cbb907a30424e854fdbc695e6f31090be51b4640d91dac171a/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/a5a9871df380f48a096917b6711b75d3549aea7edb06859c9ffd7401/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#00A0E2',
            background_color: '#009ADA',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Northbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 340,
        path: '_poyHbeW????????{AGQdAqBwD??',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:23:00+01:00',
          leg_arrival_time: '2022-07-12T16:28:40+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1260,
        path: '_woyHhaW?XkZg@g_@yAoEcAaf@oSsDiC_EaE}BeDyNiV}EmGuHmHmF_EmIuEkJcDcKiBikA{HkGBcDZgE~@gHzC{EzC{CdC_Q`PsE`CkMbF{HpEkDtCoh@r_@_FdEyGlHmBbCeHvK_i@lbAmL~SkFtH{FxGi{AlyAsYxYkB~AcWtVsPhO}IbGmHrDiv@h[oHxBkJ|AkF`@ce@~A{Ox@udAdCeGr@uDz@sEdBwb@fSg]|SkD|B{DfDqDvDs_@hd@_GjGcRhP}SpPyH`FcE|BuLlFaErAmGbBqI`BoDd@wl@lC{^hAiEZaFn@eFnAsGzBeIbEyBrAsFrEuG|Gyb@~f@sLnMkHdFsHpDgG|AgFp@yENwFOoFm@{DaAgDkA{CsAwBwAiSyOiBiAeFyBeDeAyEu@kEa@}GIax@`B_G?oHo@mHeBy\\cOmoAal@yxEklB}_@cQ}[qKoIaBsEW}B?aFRe}@xMyMdA_Tj@cM|@cHxAae@tOaRvGyj@lRaFrByIxEyDdCwLvJoN|LmF~DoKzGiHpDwi@hV?D',
        stops: [
          {
            id: 'KingsCross',
            name: "King's Cross",
            coordinates: {
              lat: 51.531532,
              lon: -0.124089,
            },
          },
          {
            id: 'Stevenage',
            name: 'Stevenage',
            coordinates: {
              lat: 51.901686,
              lon: -0.207109,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailGR',
              headsign: 'Bradford Forster Square',
              scheduled_time: '2022-07-12T16:33:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Disruption through Stevenage',
              description:
                'Stevenage: Disruption through Stevenage expected until 16:00',
              service_ids: ['NationalRailGN', 'NationalRailGR'],
            },
            {
              type: 'no_issues',
              service_ids: ['NationalRailTL'],
            },
          ],
          leg_departure_time: '2022-07-12T16:33:00+01:00',
          leg_arrival_time: '2022-07-12T16:54:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailGN',
            name: 'Great Northern',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/681b2c8f63ee27c288c8d6450ccbd07dfd8be4c6f36407dcf7cb466e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/6030e64f9885ef262d629a68bee63a52f2b92c578b4b094839930e25/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#43165C',
            background_color: '#43165C',
          },
          {
            id: 'NationalRailGR',
            name: 'London North Eastern Railway',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/da85040728d8e0a7ccfd3be31ed4f144a6ab72e2266e59482cd7480c/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/7b8a3f9e166b787751eb0d0acb5d8c04e88835c1eba06d1fd043246f/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#CC0524',
            background_color: '#CC0524',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/1e4e232416177f31d325fbbde10539d3229dc29625c9827a413e2be6/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d45c34b17d78178ef69cde20b65f8d6469b3dfa64b3be6460f2572ee/d324a6fb/@2x.png',
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
        duration_seconds: 2173,
        path: 'e`x{Hdmg@[yCIB_AZA@QBHZRIVIn@UTbBBRBRJl@?BBA@@@B?BC@A@HV@NMH\\dCID@F?JADCFEBDHFh@Hj@Hj@Hj@Fb@HTKZILOJOFKFIFCHENAPSHk@TWLMFC?KDK?OAG?C?KBgAb@F`@PbAXzAFVBJb@tAxAdETp@p@~APADHPQZjA_A~@ELCJ@T~@vBfAfCR`@zAxCJX|@`Cd@nAv@vBJZc@p@o@f@yAfAy@z@o@t@_@n@Sj@Il@Cn@BX?DNbB`@~Db@fCh@xCd@dDn@dEzA`Jm@h@e@Ta@TWHk@Lw@H[BW?_AEm@?k@Cg@E_@?O?_@QYQWQUM',
        updatable_detail: {
          leg_departure_time: '2022-07-12T16:54:00+01:00',
          leg_arrival_time: '2022-07-12T17:30:13+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Stevenage_E32064',
            stop_id: 'Stevenage',
            coordinates: {
              lat: 51.901633,
              lon: -0.207068,
            },
          },
          alternate_exits: [
            {
              id: 'Stevenage_E32065',
              stop_id: 'Stevenage',
              coordinates: {
                lat: 51.9015773,
                lon: -0.2057765,
              },
            },
          ],
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-12T14:56:19+01:00',
    route_arrival_time: '2022-07-12T17:30:13+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NzYzNDE4MCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTcyNjUwLFwiZHVyYXRpb25cIjo5NDIwLFwiZW5kXCI6e1wiY29vcmRzXCI6XCI1MS45MDI2MTcsLTAuMjI3ODU1XCJ9LFwianJfaW5kZXhcIjo0LFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjE1OSxcImR1cmF0aW9uXCI6MTg0LFwiZWNcIjpcIjUwLjgyODc1LC0wLjE0MTQ2XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTAuODI4ODQsLTAuMTQzMlwiLFwidG9fZXhpdFwiOlwiQnJpZ2h0b25fRTMxNTI4XCJ9LHtcImR1cmF0aW9uXCI6MzYwMCxcImVuZFwiOlwiVmljdG9yaWFcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIk5hdGlvbmFsUmFpbEdYXCJdLFwic3RhcnRcIjpcIkJyaWdodG9uXCIsXCJzdG9wX2NvdW50XCI6MyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fQnJpZ2h0b25fTmF0aW9uYWxSYWlsTmF0aW9uYWxSYWlsQnVzXCIsXCJQbGF0Zm9ybV9WaWN0b3JpYV9HWFwiXX0se1wiZGlzdGFuY2VcIjozMDksXCJkdXJhdGlvblwiOjI1MCxcImVjXCI6XCI1MS40OTYzNCwtMC4xNDM4NFwiLFwiaW5fc3RhdGlvblwiOlwiMS8yNTBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40OTQ4OSwtMC4xNDQzNFwifSx7XCJkdXJhdGlvblwiOjQ4MCxcImVuZFwiOlwiS2luZ3NDcm9zc1N0UGFuY3Jhc1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiVmljdG9yaWFcIl0sXCJzdGFydFwiOlwiVmljdG9yaWFcIixcInN0b3BfY291bnRcIjo2LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9WaWN0b3JpYV9WX2ROXCIsXCJQbGF0Zm9ybV9LaW5nc0Nyb3NzU3RQYW5jcmFzX1ZfZE5FXCJdfSx7XCJkaXN0YW5jZVwiOjE2NyxcImR1cmF0aW9uXCI6MzQwLFwiZWNcIjpcIjUxLjUzMTUyLC0wLjEyMzI1XCIsXCJpbl9zdGF0aW9uXCI6XCIxLzM0MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUzMDQsLTAuMTIzODZcIn0se1wiZHVyYXRpb25cIjoxMjYwLFwiZW5kXCI6XCJTdGV2ZW5hZ2VcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIk5hdGlvbmFsUmFpbEdOXCIsXCJOYXRpb25hbFJhaWxHUlwiLFwiTmF0aW9uYWxSYWlsVExcIl0sXCJzdGFydFwiOlwiS2luZ3NDcm9zc1wiLFwic3RvcF9jb3VudFwiOjIsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX0tpbmdzQ3Jvc3NfTmF0aW9uYWxSYWlsXCIsXCJQbGF0Zm9ybV9TdGV2ZW5hZ2VfQkduXCJdfSx7XCJkaXN0YW5jZVwiOjI1MzIsXCJkdXJhdGlvblwiOjIxNzMsXCJlY1wiOlwiNTEuOTAyNzUsLTAuMjI4MzhcIixcImZyb21fZXhpdFwiOlwiU3RldmVuYWdlX0UzMjA2NFwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjkwMTYzLC0wLjIwNzA3XCJ9XSxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjVhYmFhOWRhLWU2OGEtNDg5Ny05MGRhLWM4YTcwNjQ0NzIyNlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUwLjgyODg1MiwtMC4xNDMyMDRcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTEyVDE0OjU2OjE5KzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.P7ltfvSL3P833I77WeJ9lE-IgecL3bVuh-1YmK2ZYnY',
  },
] as Route[]
