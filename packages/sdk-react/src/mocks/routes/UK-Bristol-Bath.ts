import { Route } from '@citymapper/api/@types/Route'

export default [
  {
    start: {
      coordinates: {
        lat: 51.44674,
        lon: -2.596422,
      },
    },
    end: {
      coordinates: {
        lat: 51.384805,
        lon: -2.363102,
      },
    },
    distance_meters: 2456,
    duration_seconds: 3400,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 1168,
        path: '_e_yHpczNFANG?CDQEOCGq@sBYe@s@iA}@yAGSGO?Q?c@?C?A?c@@?B?H?NBCKCI?I?I@}@FeAF}@LyA@CXaBViAHkA@K@QGEMQk@I@S@KHB@O@MD??GPQDyA@QFaADg@Bi@Io@m@kCS{@I]Ma@CCc@y@[{@s@}AIQg@iA]w@O]g@sACMHuB@K@IDKCQNYGIACXm@ACGIM[DO@I@IiA}Ce@sADGKSs@uBGSGS?M@KGIAE?@',
        updatable_detail: {
          leg_departure_time: '2022-06-30T17:46:05+01:00',
          leg_arrival_time: '2022-06-30T18:05:33+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'BristolStation_BristolTempleMeadsRailStation_E38065',
            stop_id: 'BristolStation_BristolTempleMeadsRailStation',
            coordinates: {
              lat: 51.449633,
              lon: -2.581117,
            },
            name: 'Station Approach',
          },
          alternate_exits: [
            {
              id: 'BristolStation_BristolTempleMeadsRailStation_E38064',
              stop_id: 'BristolStation_BristolTempleMeadsRailStation',
              coordinates: {
                lat: 51.450092,
                lon: -2.581237,
              },
              name: 'Temple Quay',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 960,
        path: 'ct_yHfdwN]gCuBaA_Ay@_B}CwA}GoAsNk@aJMcH@yD\\cLpBcTzBmRpN}qArBoOlBaLbC}K`C}IfEuL~C_IlFuKpHwLdH}IpCwCjImH|CwB~B{A~HcH~FiHpGkKzDaInPcc@nHaOrKiTbB}DvFqOtUwp@xCuJPs@xDwP|BsLrBcNdBgOdEog@rBkPpCuPnAgGlD{NvBoHhC}HvBcGtEyKjDiHfFcJfu@agAdEeHfFyKlB_FfZ_~@tC}KpAgGtAgIbBeOdAkPXiLXsPl@eMh@qHlBcPnBsLtBmJdDyLdGkO~CoHdDsJfCoJvA}GxA{JpAyMhF_gAHi@|K_`CMmG_@kDg@iBWT',
        stops: [
          {
            id: 'BristolStation_BristolTempleMeadsRailStation',
            name: 'Bristol Temple Meads',
            coordinates: {
              lat: 51.449142,
              lon: -2.581315,
            },
          },
          {
            id: 'BristolStation_KeynshamRailStation',
            name: 'Keynsham',
            coordinates: {
              lat: 51.417975,
              lon: -2.495629,
            },
          },
          {
            id: 'BristolStation_OldfieldParkRailStation',
            name: 'Oldfield Park',
            coordinates: {
              lat: 51.379229,
              lon: -2.380508,
            },
          },
          {
            id: 'BristolStation_BathSpaRailStation',
            name: 'Bath Spa',
            coordinates: {
              lat: 51.377685,
              lon: -2.357018,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailGW',
              headsign: 'Westbury (Wilts)',
              scheduled_time: '2022-06-30T18:10:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailGW'],
            },
          ],
          leg_departure_time: '2022-06-30T18:10:00+01:00',
          leg_arrival_time: '2022-06-30T18:26:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailGW',
            name: 'Great Western Railway',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/0407d9190d3af97eb77b51ea5a8a0fbf5eee98060a3d9a597c095333/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/f5aa41982763c8a84acb1aa643ce29c3e04cf83ab6fcd5f84c4112c9/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#005936',
            background_color: '#005936',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 976,
        path: 'quqxHjjkMIF??@F?D?@?B?@??G?IPEDCjBGNABADC?CrAA^Aj@At@Cd@Az@GPCHCDCBODC?G@QBIFYZQX_@h@_@^ILs@z@m@v@}AlBININGLK^I`@MKIEE?E?E@KHML_@RYFMB]D??WBOBCBCDEHEL?Os@?GAKCICKEGAG?M@g@DMAk@RA?cAZ{@VC?CACF?FAHEAE?ODaBb@sBj@_@JWJMyA',
        updatable_detail: {
          leg_departure_time: '2022-06-30T18:26:00+01:00',
          leg_arrival_time: '2022-06-30T18:42:16+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'BristolStation_BathSpaRailStation_DefaultExit',
            stop_id: 'BristolStation_BathSpaRailStation',
            coordinates: {
              lat: 51.37769,
              lon: -2.35702,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-06-30T17:46:05+01:00',
    route_arrival_time: '2022-06-30T18:42:16+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwNzU2NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTk1NzcsXCJkdXJhdGlvblwiOjM0MDAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjM4NDgwNSwtMi4zNjMxMDJcIn0sXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTM5MSxcImR1cmF0aW9uXCI6MTE2OCxcImVjXCI6XCI1MS40NDk2MywtMi41ODExMlwiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ0NjcyLC0yLjU5NjU3XCIsXCJ0b19leGl0XCI6XCJCcmlzdG9sU3RhdGlvbl9CcmlzdG9sVGVtcGxlTWVhZHNSYWlsU3RhdGlvbl9FMzgwNjVcIn0se1wiZHVyYXRpb25cIjo5NjAsXCJlbmRcIjpcIkJyaXN0b2xTdGF0aW9uX0JhdGhTcGFSYWlsU3RhdGlvblwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTmF0aW9uYWxSYWlsR1dcIl0sXCJzdGFydFwiOlwiQnJpc3RvbFN0YXRpb25fQnJpc3RvbFRlbXBsZU1lYWRzUmFpbFN0YXRpb25cIixcInN0b3BfY291bnRcIjo0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9CcmlzdG9sVGVtcGxlTWVhZHNSYWlsX05hdGlvbmFsUmFpbFwiLFwiUGxhdGZvcm1fQnJpc3RvbEJhdGhTcGFSYWlsX05hdGlvbmFsUmFpbE5hdGlvbmFsUmFpbEJ1c1wiXX0se1wiZGlzdGFuY2VcIjoxMDY1LFwiZHVyYXRpb25cIjo5NzYsXCJlY1wiOlwiNTEuMzg0NzUsLTIuMzYzMDhcIixcImZyb21fZXhpdFwiOlwiQnJpc3RvbFN0YXRpb25fQmF0aFNwYVJhaWxTdGF0aW9uX0RlZmF1bHRFeGl0XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuMzc3NjksLTIuMzU3MDJcIn1dLFwicmVnaW9uXCI6XCJ1ay1icmlzdG9sXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImUwODFmZWQ4LWY2NTMtNGYxYi1iNWI2LWYyZTllNTE1NDIwOFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjQ0Njc0LC0yLjU5NjQyMlwifSxcInRpbWVcIjpcIjIwMjItMDYtMzBUMTc6NDY6MDUrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1icmlzdG9sIn0.yawRaHYqeNwjfsV2s9iNjwhqGfy8c0Ip6paGnLBJ0kc',
  },
  {
    start: {
      coordinates: {
        lat: 51.44674,
        lon: -2.596422,
      },
    },
    end: {
      coordinates: {
        lat: 51.384805,
        lon: -2.363102,
      },
    },
    distance_meters: 1252,
    duration_seconds: 3932,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 514,
        path: '_e_yHpczNa@Ny@NE?I@E@U?_AAo@C}@?I?e@?a@@O@_AFYBk@@S@YAKAo@OyAWUE[Gc@GOEI@Q?QEk@IWEIAWPOJKHMHEDKJKJQRGBYTGBSJYHYB?M',
        updatable_detail: {
          leg_departure_time: '2022-06-30T17:46:05+01:00',
          leg_arrival_time: '2022-06-30T17:54:39+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 2580,
        path: 'gj`yHrfzN??rAM??x@q@??ZgA????@E@E@C@EBCBEDCBAF???B@N@F@D@JBp@T`@FB@LLLBJ@VDRD^H^Fx@PvAF??@_ANgF@q@Be@HqCDkB@e@@O?KAUAOCICICCACCCCCCCGCCAGA???@?@A@?@A??@A?A??@A?A??AA?AA?AA??A?AA??A?A?A?A?A?A?A?A?A@??A?A@??A@?NuB?CNoB@OFq@F[Jc@H[BGBMFY??EMAGAG?GAG?G@G?E?E@C?A@C?A@C?A@C@EBEBEBCDCBABADAB?H@Fe@DWB[@S?_@?m@Ae@GuAEsACo@?ECo@A[Gy@Au@BaAFgCCAC?B?@mALyBT}B??Tc@Vk@BIHSDKFMJULWCBLW??FKTc@Tc@Xg@@EXc@??JQfAqBFSj@iATc@h@cAP[NKLUDIvA{BRWTYZ[VWZUVQVOt@[TG??FQBEDCJITQXSNMRSBCPONQJODGDIN[Ti@Vm@HU\\y@Rk@b@oALa@FSDUJa@BQDQ@IBOF_@D[Hy@Dk@Bs@Bi@BuB?kB@i@BY?Y???SEsCCa@AaAQmECaACuACmAAy@?u@?eAA[?i@@{@@o@?C@q@@g@B_@H}@Ds@??J_AD]Hm@JaAL_AFm@@QFq@BY\\aFLkBBe@?MAWDu@@c@??B]FgATcAV]n@y@NQPMJILGFCRKLDv@_@d@Sl@WZODC@AXQZQvEaDpB_BDIFIf@m@RUXa@`@e@??\\c@b@o@RYV_@T_@HMLSLYPg@Re@J[J[Ng@`@sAV}@DQT_A??@CFU\\uAJa@JU?APYT[BCFEDEFCDCFAFAJCV@R?Z@`@@d@@H?\\GDUBUDU@Q@Q?EBe@?E?U?U?e@A_ACg@?GAYS_FCc@?[?]?U@Y@IAU@KBWVoAJSpTa^dDkSzJkr@jFkb@ECJBJmALaBNqBLwATsCh@kHf@{G^mE\\gDRkBDa@Cq@C[KIKQGOAKEQAQAQ@QBMBSDOHMHOJKZ}Ah@gDT{AHk@`ByKTmAV{A\\kBd@wBpAcG~@qD|@}Cb@{ArA_Ej@}At@yBlBgFlB{EL_@xAmD`BwDjBcEx@iBv@aBnAeCx@yAt@oAt@kAlAgBbAaBn@kAHQDG\\w@N_@FQDIDKVw@\\kAZiA`@}A@If@{CD_@DWb@iDFi@LeAb@wD~@{HTuB^oCVkBl@kDfCiLBg@EQCSAa@Ji@NUPKbAqA?AXo@Xg@Dc@Lq@PeAIIHJr@}DxAiHl@kDn@gD`@{Ap@wBbAgCv@}AXi@??EQDPz@wAhAmB|@gBl@eBJ]BKBKp@cCb@wAj@wBL_@JYl@iA`BaCHK?AEOFLt@{@|B_DdAcBhAwBb@w@R]^s@d@w@d@{@\\m@Pc@V{@VqAp@yCGGFFbA_FvB{JP_AL{@LuAHqALoBJiAJo@Ni@^{@j@iAFIGMFLVc@PYPW`@kAd@}BHs@Fq@LaC@{BBo@HgALg@\\o@fAuATYhBwB|@_ARSGQFPh@i@xAcBTWJI\\Q|@a@dAg@`@SVMDEpA{@z@w@h@k@V_@FOP[Vm@nCmFh@eA`@y@l@oAv@sBdAwCJa@pAeEt@aCDKGGFF^kAh@}AXy@Zs@l@qAp@mAz@_B`@y@Xi@h@iATm@\\uATgAp@kCKKJJDO\\sA`@mAf@mA|@gBh@_Ah@{@r@aA`AiAd@i@nA}A^g@xA}BxA{Bh@aAPc@Fc@Lw@@IJ}AAM?M@KBKBKDIDGDCLg@De@?}@Am@O@NA?CEs@yDce@a@{FC]E_@i@gHa@eFg@uFOgBs@qGUyBKoAGcAAEOFNGOkAa@iEDWKMEKCO?MOgA{@eDmAsDkB{FKg@Im@EUGq@CU?IBs@`AsDb@wALa@DQZ}Ah@aC`AkFLu@j@uC~@aDf@uAAA`@}@Te@|@mBj@kAfCiFTc@bAoBxAqCn@mAfAyBR_@f@eARc@N]Xk@|@sBJu@H_ADwADwA@}@?{B?aBAgFCcCI?HAEkCCkAAu@_@mJAECg@@Y?O@Q@[FK@MLsAJ_BBSPcCDg@@_@CYC_@_@cCGg@U{AKi@AKEMOs@ESEOQo@g@kB]uAWkAKk@Ig@Iu@Ec@A_@GqB?Y@i@Bq@@I\\oEHcAH}AH{@B[Hc@Je@Jg@XaAZaARu@\\uABMPu@@EFWD]DYFe@HaAHu@Fc@BMDQH_@D[D[Fg@Fm@b@}DJqAn@qHxAv@t@h@FBF?HADGBIp@_CXgAb@{AFYGG',
        stops: [
          {
            id: 'BristolStop_TheCentre_SE_2',
            name: 'The Centre',
            coordinates: {
              lat: 51.45268,
              lon: -2.59706,
            },
            indicator_text: 'C3',
          },
          {
            id: 'BristolStop_TempleMeadsStn_E',
            name: 'Temple Meads Stn',
            coordinates: {
              lat: 51.44901,
              lon: -2.58569,
            },
            indicator_text: 'T3',
          },
          {
            id: 'BristolStop_TempleMeadsStn_S',
            name: 'Temple Meads Stn',
            coordinates: {
              lat: 51.44827,
              lon: -2.58302,
            },
            indicator_text: 'T1',
          },
          {
            id: 'BristolStop_TotterdownBridge_E_1',
            name: 'Totterdown Bridge',
            coordinates: {
              lat: 51.44262,
              lon: -2.57237,
            },
          },
          {
            id: 'BristolStop_Paintworks_E',
            name: 'Paintworks',
            coordinates: {
              lat: 51.44272,
              lon: -2.56584,
            },
          },
          {
            id: 'BristolStop_ArnosCourt_SE_1',
            name: 'Arnos Court',
            coordinates: {
              lat: 51.44207,
              lon: -2.56128,
            },
            indicator_text: 'C',
          },
          {
            id: 'BristolStop_TramwayRoad_SE_1',
            name: 'Tramway Road',
            coordinates: {
              lat: 51.43754,
              lon: -2.5569,
            },
          },
          {
            id: 'BristolStop_EagleRoad_S',
            name: 'Eagle Road',
            coordinates: {
              lat: 51.43591,
              lon: -2.55371,
            },
          },
          {
            id: 'BristolStop_BrislingtonSquare_SE',
            name: 'Brislington Square',
            coordinates: {
              lat: 51.43395,
              lon: -2.54792,
            },
          },
          {
            id: 'BristolStop_FlowersHill_SE_1',
            name: 'Flowers Hill',
            coordinates: {
              lat: 51.43048,
              lon: -2.54299,
            },
          },
          {
            id: 'BristolStop_EmeryRoad_E',
            name: 'Emery Road',
            coordinates: {
              lat: 51.42965,
              lon: -2.53973,
            },
          },
          {
            id: 'BristolStop_BrislingtonHouse_E',
            name: 'Brislington House',
            coordinates: {
              lat: 51.42775,
              lon: -2.53151,
            },
          },
          {
            id: 'BristolStop_HicksGate_SE',
            name: 'Hicks Gate',
            coordinates: {
              lat: 51.4266,
              lon: -2.52583,
            },
          },
          {
            id: 'BristolStop_EllsbridgeHouse_SE',
            name: 'Ellsbridge House',
            coordinates: {
              lat: 51.41192,
              lon: -2.48045,
            },
          },
          {
            id: 'BristolStop_PixashLane_SE',
            name: 'Pixash Lane',
            coordinates: {
              lat: 51.40955,
              lon: -2.47387,
            },
          },
          {
            id: 'BristolStop_CopseRoad_SE',
            name: 'Copse Road',
            coordinates: {
              lat: 51.40669,
              lon: -2.46851,
            },
          },
          {
            id: 'BristolStop_NormanRoad_SE',
            name: 'Norman Road',
            coordinates: {
              lat: 51.40352,
              lon: -2.46318,
            },
          },
          {
            id: 'BristolStop_TyningRoad_SE',
            name: 'Tyning Road',
            coordinates: {
              lat: 51.40161,
              lon: -2.45657,
            },
          },
          {
            id: 'BristolStop_TheShallows_SE',
            name: 'The Shallows',
            coordinates: {
              lat: 51.39908,
              lon: -2.45071,
            },
          },
          {
            id: 'BristolStop_Dryleaze_SE',
            name: 'Dryleaze',
            coordinates: {
              lat: 51.3931,
              lon: -2.44237,
            },
          },
          {
            id: 'BristolStop_CorstonLane_SE',
            name: 'Corston Lane',
            coordinates: {
              lat: 51.39057,
              lon: -2.43708,
            },
          },
          {
            id: 'BristolStop_TheGlobe_E',
            name: 'The Globe',
            coordinates: {
              lat: 51.38637,
              lon: -2.42905,
            },
          },
          {
            id: 'BristolStop_TwertonFork_E',
            name: 'Twerton Fork',
            coordinates: {
              lat: 51.38869,
              lon: -2.414,
            },
          },
          {
            id: 'BristolStop_NewbridgeGardens_SE',
            name: 'Newbridge Gardens',
            coordinates: {
              lat: 51.38838,
              lon: -2.40138,
            },
          },
          {
            id: 'BristolStop_RudmorePark_E',
            name: 'Rudmore Park',
            coordinates: {
              lat: 51.38678,
              lon: -2.39859,
            },
          },
          {
            id: 'BristolStop_CharmouthRoad_E',
            name: 'Charmouth Road',
            coordinates: {
              lat: 51.38509,
              lon: -2.3958,
            },
          },
          {
            id: 'BristolStop_HorstmannClose_E',
            name: 'Horstmann Close',
            coordinates: {
              lat: 51.38433,
              lon: -2.39002,
            },
          },
          {
            id: 'BristolStop_TheWeston_SE',
            name: 'The Weston',
            coordinates: {
              lat: 51.38443,
              lon: -2.38559,
            },
          },
          {
            id: 'BristolStop_WindsorVillas_E',
            name: 'Windsor Villas',
            coordinates: {
              lat: 51.38443,
              lon: -2.38309,
            },
          },
          {
            id: 'BristolStop_ParkLane_SE',
            name: 'Park Lane',
            coordinates: {
              lat: 51.38559,
              lon: -2.37782,
            },
          },
          {
            id: 'BristolStop_ComfortablePlace_E',
            name: 'Comfortable Place',
            coordinates: {
              lat: 51.38445,
              lon: -2.37319,
            },
          },
          {
            id: 'BristolStop_NileStreet_SE',
            name: 'Nile Street',
            coordinates: {
              lat: 51.38398,
              lon: -2.37099,
            },
          },
          {
            id: 'BristolStop_JamesStreetWest_SE',
            name: 'James Street West',
            coordinates: {
              lat: 51.38193,
              lon: -2.36669,
            },
            indicator_text: 'GC',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'First_FirstInBristolBathTheWestX39',
              frequency_seconds_range: [900, 900],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['First_FirstInBristolBathTheWestX39'],
            },
          ],
          leg_departure_time: '2022-06-30T17:55:00+01:00',
          leg_arrival_time: '2022-06-30T18:38:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'First_FirstInBristolBathTheWestX39',
            name: 'X39',
            vehicle_types: ['bus'],
            brand: {
              id: 'First',
              name: 'First',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/6e610db315a489498ab1b57ac4e1b54fa04353545987d7bf2dfa0c2d/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/d9891eb584339c18df81bdd69c558182c460d34922a12a9e15f388a7/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/558170c52ae60cd28353adfb63555c2e445d2491d0a39e3221a3375d/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/12faf7c2d0080455b8317bc6e2d46bc827fd4c8331584ef8cea2b989/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1842b9fc7c1458d24e1c964ae2454f1c230eff9af8348f663f5c0374/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0f057ca1fe0fd48bfe8d34759be0307b13756d8c222ca876e405d119/d324a6fb/@2x.png',
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
            color: '#D50560',
            background_color: '#47587c',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Bath City Centre',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 538,
        path: 'aprxHxfmMFF^uA@CLg@Ps@WQmAeA_Au@UQKGSMMMKIEOO{AEOEIEEGEKCaBd@EAECCEEKYwDsBj@_@JWJMyA',
        updatable_detail: {
          leg_departure_time: '2022-06-30T18:38:00+01:00',
          leg_arrival_time: '2022-06-30T18:46:58+01:00',
        },
      },
    ],
    route_departure_time: '2022-06-30T17:46:05+01:00',
    route_arrival_time: '2022-06-30T18:46:58+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwNzU2NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTk1NzcsXCJkdXJhdGlvblwiOjM5MzIsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjM4NDgwNSwtMi4zNjMxMDJcIn0sXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6Njg1LFwiZHVyYXRpb25cIjo1MTQsXCJlY1wiOlwiNTEuNDUyNjgsLTIuNTk3MDZcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40NDY3MiwtMi41OTY1N1wifSx7XCJkdXJhdGlvblwiOjI1ODAsXCJlbmRcIjpcIkJyaXN0b2xTdG9wX0phbWVzU3RyZWV0V2VzdF9TRVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiRmlyc3RfRmlyc3RJbkJyaXN0b2xCYXRoVGhlV2VzdFgzOVwiXSxcInN0YXJ0XCI6XCJCcmlzdG9sU3RvcF9UaGVDZW50cmVfU0VfMlwiLFwic3RvcF9jb3VudFwiOjMzfSx7XCJkaXN0YW5jZVwiOjU2NyxcImR1cmF0aW9uXCI6NTM4LFwiZWNcIjpcIjUxLjM4NDc1LC0yLjM2MzA4XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuMzgxOTMsLTIuMzY2NjlcIn1dLFwicmVnaW9uXCI6XCJ1ay1icmlzdG9sXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImUwODFmZWQ4LWY2NTMtNGYxYi1iNWI2LWYyZTllNTE1NDIwOFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjQ0Njc0LC0yLjU5NjQyMlwifSxcInRpbWVcIjpcIjIwMjItMDYtMzBUMTc6NDY6MDUrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1icmlzdG9sIn0.0VTCFQp8PjICz0PYVyc1-kuzWAxeLib4S1IlVgNdHZo',
  },
  {
    start: {
      coordinates: {
        lat: 51.44674,
        lon: -2.596422,
      },
    },
    end: {
      coordinates: {
        lat: 51.384805,
        lon: -2.363102,
      },
    },
    distance_meters: 1717,
    duration_seconds: 3609,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 161,
        path: '_e_yHpczNFA?D?B@DH@FDBBJDBDBFLRL`@Hb@Lp@J`AB`@B`@?p@?`@Af@O^@@',
        updatable_detail: {
          leg_departure_time: '2022-06-30T17:46:05+01:00',
          leg_arrival_time: '2022-06-30T17:48:46+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: 'sa_yHnrzNF@???I@GDm@?g@?_@?[C[A]CUCYEWEYCMEOEQEMOYA?KYKS??A?CAAAACAC?EAE?C?A@A?A?A@C@C@A@?@Q??Ne@Xw@?AJiAG_BCaBCiA@}@@e@Bi@@W?CB]JeAR{B@I?ALmAD]A]?O@Y??AOWQKIQIuAQKA??i@Ee@K_@Is@QSEWEIAaAM_AOEACAE?I?KBKD??CFADCDCBCBA@C@C@E@C@G?EACACACCCCEECEEMAGAG?GAG?G@G?E?E@C?A@C?A@C?A@C@EBEBEBCDCBABADAB?H@Fe@DWB[@S?_@?m@Ae@GuAEsACo@?ECo@A[Gy@Au@BaAFqCNwF??YLYRE@KDOFEDKDWL]L@D',
        stops: [
          {
            id: 'BristolStop_WappingWharf_E_1',
            name: 'Wapping Wharf',
            coordinates: {
              lat: 51.44618,
              lon: -2.59896,
            },
          },
          {
            id: 'BristolStop_RedcliffHill_NE',
            name: 'Redcliff Hill',
            coordinates: {
              lat: 51.4468,
              lon: -2.59093,
            },
            indicator_text: 'R2',
          },
          {
            id: 'BristolStop_TempleMeadsStn_N',
            name: 'Temple Meads Stn',
            coordinates: {
              lat: 51.44967,
              lon: -2.58489,
            },
            indicator_text: 'T2',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'MetrobusM2',
              frequency_seconds_range: [1185, 1185],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['MetrobusM2'],
            },
          ],
          leg_departure_time: '2022-06-30T17:50:00+01:00',
          leg_arrival_time: '2022-06-30T17:55:00+01:00',
        },
        vehicle_types: ['bus_rapid_transit', 'bus'],
        services: [
          {
            id: 'MetrobusM2',
            name: 'm2',
            vehicle_types: ['bus_rapid_transit', 'bus'],
            brand: {
              id: 'BristolMetrobus',
              name: 'Metrobus',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/384226911c92b603ead8f67db6dd7b3427f73c8214b190b6d427b6cf/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/fbfc288c843f5969ebe2d3a0535f7281c433b2f6ba6131bb2537d9f2/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/c20cf02478623066c761d4c0175f4e30455eeaa6c2697fd2f0ee320f/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/b2011eaacdf6adf332ab09580814b562dc72065dcc0e4badf70e311c/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f1917910d5dad3ae714552efc14e15202e72556cf7b10704d7b17c3a/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f2a9a894fe547d5ce62deef4a5c27157af557d5fc68495c41bda12fb/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/e0c28d9b347379808d2b47a450f2d74aca9e05497c72e1b37e011cdf/d324a6fb/@2x.png',
                  width: 25,
                  height: 33,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/54b7b7679293e838e73e289dcec4803f0dd62ab065bbd6a70c54e929/d324a6fb/@2x.png',
                  width: 25,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/b887fc7c883b7e963d8271ec1338c5f1e42a4adefb60a042b5c0aa9c/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
                replaces_name: true,
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/72aea55a045db3eeda67834e2ee2449c151e4d45e31c5e0bacfb4c2c/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
                replaces_name: true,
              },
            ],
            color: '#F7941D',
            background_color: '#757575',
          },
        ],
        direction_description: 'Cabot Circus',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 373,
        path: 'mw_yHpzwNAKx@_@CUCOMFEIEIGGIGEIAKMqCA?IIASGq@Im@Gg@@E?IAGAGGECAE@Me@Yw@_@iAAEf@k@RUFG??',
        updatable_detail: {
          leg_departure_time: '2022-06-30T17:55:00+01:00',
          leg_arrival_time: '2022-06-30T18:01:13+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'BristolStation_BristolTempleMeadsRailStation_E38064',
            stop_id: 'BristolStation_BristolTempleMeadsRailStation',
            coordinates: {
              lat: 51.450092,
              lon: -2.581237,
            },
            name: 'Temple Quay',
          },
          alternate_exits: [
            {
              id: 'BristolStation_BristolTempleMeadsRailStation_E38065',
              stop_id: 'BristolStation_BristolTempleMeadsRailStation',
              coordinates: {
                lat: 51.449633,
                lon: -2.581117,
              },
              name: 'Station Approach',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 960,
        path: 'ct_yHfdwN]gCuBaA_Ay@_B}CwA}GoAsNk@aJMcH@yD\\cLpBcTzBmRpN}qArBoOlBaLbC}K`C}IfEuL~C_IlFuKpHwLdH}IpCwCjImH|CwB~B{A~HcH~FiHpGkKzDaInPcc@nHaOrKiTbB}DvFqOtUwp@xCuJPs@xDwP|BsLrBcNdBgOdEog@rBkPpCuPnAgGlD{NvBoHhC}HvBcGtEyKjDiHfFcJfu@agAdEeHfFyKlB_FfZ_~@tC}KpAgGtAgIbBeOdAkPXiLXsPl@eMh@qHlBcPnBsLtBmJdDyLdGkO~CoHdDsJfCoJvA}GxA{JpAyMhF_gAHi@|K_`CMmG_@kDg@iBWT',
        stops: [
          {
            id: 'BristolStation_BristolTempleMeadsRailStation',
            name: 'Bristol Temple Meads',
            coordinates: {
              lat: 51.449142,
              lon: -2.581315,
            },
          },
          {
            id: 'BristolStation_KeynshamRailStation',
            name: 'Keynsham',
            coordinates: {
              lat: 51.417975,
              lon: -2.495629,
            },
          },
          {
            id: 'BristolStation_OldfieldParkRailStation',
            name: 'Oldfield Park',
            coordinates: {
              lat: 51.379229,
              lon: -2.380508,
            },
          },
          {
            id: 'BristolStation_BathSpaRailStation',
            name: 'Bath Spa',
            coordinates: {
              lat: 51.377685,
              lon: -2.357018,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailGW',
              headsign: 'Westbury (Wilts)',
              scheduled_time: '2022-06-30T18:10:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailGW'],
            },
          ],
          leg_departure_time: '2022-06-30T18:10:00+01:00',
          leg_arrival_time: '2022-06-30T18:26:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailGW',
            name: 'Great Western Railway',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/0407d9190d3af97eb77b51ea5a8a0fbf5eee98060a3d9a597c095333/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/f5aa41982763c8a84acb1aa643ce29c3e04cf83ab6fcd5f84c4112c9/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#005936',
            background_color: '#005936',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 976,
        path: 'quqxHjjkMIF??@F?D?@?B?@??G?IPEDCjBGNABADC?CrAA^Aj@At@Cd@Az@GPCHCDCBODC?G@QBIFYZQX_@h@_@^ILs@z@m@v@}AlBININGLK^I`@MKIEE?E?E@KHML_@RYFMB]D??WBOBCBCDEHEL?Os@?GAKCICKEGAG?M@g@DMAk@RA?cAZ{@VC?CACF?FAHEAE?ODaBb@sBj@_@JWJMyA',
        updatable_detail: {
          leg_departure_time: '2022-06-30T18:26:00+01:00',
          leg_arrival_time: '2022-06-30T18:42:16+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'BristolStation_BathSpaRailStation_DefaultExit',
            stop_id: 'BristolStation_BathSpaRailStation',
            coordinates: {
              lat: 51.37769,
              lon: -2.35702,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-06-30T17:46:05+01:00',
    route_arrival_time: '2022-06-30T18:42:16+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwNzU2NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTk1NzcsXCJkdXJhdGlvblwiOjM2MDksXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjM4NDgwNSwtMi4zNjMxMDJcIn0sXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MjAwLFwiZHVyYXRpb25cIjoxNjEsXCJlY1wiOlwiNTEuNDQ2MTgsLTIuNTk4OTZcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40NDY3MiwtMi41OTY1N1wifSx7XCJkdXJhdGlvblwiOjMwMCxcImVuZFwiOlwiQnJpc3RvbFN0b3BfVGVtcGxlTWVhZHNTdG5fTlwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTWV0cm9idXNNMlwiXSxcInN0YXJ0XCI6XCJCcmlzdG9sU3RvcF9XYXBwaW5nV2hhcmZfRV8xXCIsXCJzdG9wX2NvdW50XCI6M30se1wiZGlzdGFuY2VcIjo0NTIsXCJkdXJhdGlvblwiOjM3MyxcImVjXCI6XCI1MS40NTAwOSwtMi41ODEyNFwiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ0OTY3LC0yLjU4NDg5XCIsXCJ0b19leGl0XCI6XCJCcmlzdG9sU3RhdGlvbl9CcmlzdG9sVGVtcGxlTWVhZHNSYWlsU3RhdGlvbl9FMzgwNjRcIn0se1wiZHVyYXRpb25cIjo5NjAsXCJlbmRcIjpcIkJyaXN0b2xTdGF0aW9uX0JhdGhTcGFSYWlsU3RhdGlvblwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTmF0aW9uYWxSYWlsR1dcIl0sXCJzdGFydFwiOlwiQnJpc3RvbFN0YXRpb25fQnJpc3RvbFRlbXBsZU1lYWRzUmFpbFN0YXRpb25cIixcInN0b3BfY291bnRcIjo0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9CcmlzdG9sVGVtcGxlTWVhZHNSYWlsX05hdGlvbmFsUmFpbFwiLFwiUGxhdGZvcm1fQnJpc3RvbEJhdGhTcGFSYWlsX05hdGlvbmFsUmFpbE5hdGlvbmFsUmFpbEJ1c1wiXX0se1wiZGlzdGFuY2VcIjoxMDY1LFwiZHVyYXRpb25cIjo5NzYsXCJlY1wiOlwiNTEuMzg0NzUsLTIuMzYzMDhcIixcImZyb21fZXhpdFwiOlwiQnJpc3RvbFN0YXRpb25fQmF0aFNwYVJhaWxTdGF0aW9uX0RlZmF1bHRFeGl0XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuMzc3NjksLTIuMzU3MDJcIn1dLFwicmVnaW9uXCI6XCJ1ay1icmlzdG9sXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImUwODFmZWQ4LWY2NTMtNGYxYi1iNWI2LWYyZTllNTE1NDIwOFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjQ0Njc0LC0yLjU5NjQyMlwifSxcInRpbWVcIjpcIjIwMjItMDYtMzBUMTc6NDY6MDUrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1icmlzdG9sIn0.mo5HOYczm9K-eiuZ5pZMitlaVL0P4_H1M0RzvP7sqB4',
  },
  {
    start: {
      coordinates: {
        lat: 51.44674,
        lon: -2.596422,
      },
    },
    end: {
      coordinates: {
        lat: 51.384805,
        lon: -2.363102,
      },
    },
    distance_meters: 1775,
    duration_seconds: 3677,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 448,
        path: '_e_yHpczNFANG?CDQEOCGq@sBYe@s@iA}@yAGSGO?Q?c@?C?A?c@@?B?H?NBCKCI?I?I@}@FeAF}@LyA@CXaBViAHkA@K@Q@a@VDTB?D',
        updatable_detail: {
          leg_departure_time: '2022-06-30T17:46:05+01:00',
          leg_arrival_time: '2022-06-30T17:53:33+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 240,
        path: 'oe_yHh`yN?ESCYCSEUGMCICc@MgC_@kAQO?SLIPOLOBMCKGIMEIEQAM?S@QDQFMFITKPa@FSB[@[?]AmAMeDMeDAk@Aa@?_@?a@@s@B_AAYl@eOi@aB??',
        stops: [
          {
            id: 'BristolStop_RedcliffHill_NE',
            name: 'Redcliff Hill',
            coordinates: {
              lat: 51.4468,
              lon: -2.59093,
            },
            indicator_text: 'R2',
          },
          {
            id: 'BristolStop_TempleMeadsStn_E',
            name: 'Temple Meads Stn',
            coordinates: {
              lat: 51.44901,
              lon: -2.58569,
            },
            indicator_text: 'T3',
          },
          {
            id: 'BristolStop_TempleMeadsStn_W',
            name: 'Temple Meads Stn',
            coordinates: {
              lat: 51.44898,
              lon: -2.58262,
            },
            indicator_text: 'T6',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'First_FirstInBristolBathTheWestA1',
              frequency_seconds_range: [1200, 1200],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['First_FirstInBristolBathTheWestA1'],
            },
          ],
          leg_departure_time: '2022-06-30T17:56:00+01:00',
          leg_arrival_time: '2022-06-30T18:00:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'First_FirstInBristolBathTheWestA1',
            name: 'A1',
            vehicle_types: ['bus'],
            brand: {
              id: 'First',
              name: 'First',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/6e610db315a489498ab1b57ac4e1b54fa04353545987d7bf2dfa0c2d/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/d9891eb584339c18df81bdd69c558182c460d34922a12a9e15f388a7/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/558170c52ae60cd28353adfb63555c2e445d2491d0a39e3221a3375d/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/12faf7c2d0080455b8317bc6e2d46bc827fd4c8331584ef8cea2b989/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1842b9fc7c1458d24e1c964ae2454f1c230eff9af8348f663f5c0374/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0f057ca1fe0fd48bfe8d34759be0307b13756d8c222ca876e405d119/d324a6fb/@2x.png',
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
            color: '#D50560',
            background_color: '#47587c',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Bristol',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 209,
        path: 'cs_yHjlwNIHe@sADGKSs@uBGSGS?M@KGIAE?@',
        updatable_detail: {
          leg_departure_time: '2022-06-30T18:00:00+01:00',
          leg_arrival_time: '2022-06-30T18:03:29+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'BristolStation_BristolTempleMeadsRailStation_E38065',
            stop_id: 'BristolStation_BristolTempleMeadsRailStation',
            coordinates: {
              lat: 51.449633,
              lon: -2.581117,
            },
            name: 'Station Approach',
          },
          alternate_exits: [
            {
              id: 'BristolStation_BristolTempleMeadsRailStation_E38064',
              stop_id: 'BristolStation_BristolTempleMeadsRailStation',
              coordinates: {
                lat: 51.450092,
                lon: -2.581237,
              },
              name: 'Temple Quay',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 960,
        path: 'ct_yHfdwN]gCuBaA_Ay@_B}CwA}GoAsNk@aJMcH@yD\\cLpBcTzBmRpN}qArBoOlBaLbC}K`C}IfEuL~C_IlFuKpHwLdH}IpCwCjImH|CwB~B{A~HcH~FiHpGkKzDaInPcc@nHaOrKiTbB}DvFqOtUwp@xCuJPs@xDwP|BsLrBcNdBgOdEog@rBkPpCuPnAgGlD{NvBoHhC}HvBcGtEyKjDiHfFcJfu@agAdEeHfFyKlB_FfZ_~@tC}KpAgGtAgIbBeOdAkPXiLXsPl@eMh@qHlBcPnBsLtBmJdDyLdGkO~CoHdDsJfCoJvA}GxA{JpAyMhF_gAHi@|K_`CMmG_@kDg@iBWT',
        stops: [
          {
            id: 'BristolStation_BristolTempleMeadsRailStation',
            name: 'Bristol Temple Meads',
            coordinates: {
              lat: 51.449142,
              lon: -2.581315,
            },
          },
          {
            id: 'BristolStation_KeynshamRailStation',
            name: 'Keynsham',
            coordinates: {
              lat: 51.417975,
              lon: -2.495629,
            },
          },
          {
            id: 'BristolStation_OldfieldParkRailStation',
            name: 'Oldfield Park',
            coordinates: {
              lat: 51.379229,
              lon: -2.380508,
            },
          },
          {
            id: 'BristolStation_BathSpaRailStation',
            name: 'Bath Spa',
            coordinates: {
              lat: 51.377685,
              lon: -2.357018,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailGW',
              headsign: 'Westbury (Wilts)',
              scheduled_time: '2022-06-30T18:10:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailGW'],
            },
          ],
          leg_departure_time: '2022-06-30T18:10:00+01:00',
          leg_arrival_time: '2022-06-30T18:26:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailGW',
            name: 'Great Western Railway',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/0407d9190d3af97eb77b51ea5a8a0fbf5eee98060a3d9a597c095333/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/f5aa41982763c8a84acb1aa643ce29c3e04cf83ab6fcd5f84c4112c9/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#005936',
            background_color: '#005936',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 976,
        path: 'quqxHjjkMIF??@F?D?@?B?@??G?IPEDCjBGNABADC?CrAA^Aj@At@Cd@Az@GPCHCDCBODC?G@QBIFYZQX_@h@_@^ILs@z@m@v@}AlBININGLK^I`@MKIEE?E?E@KHML_@RYFMB]D??WBOBCBCDEHEL?Os@?GAKCICKEGAG?M@g@DMAk@RA?cAZ{@VC?CACF?FAHEAE?ODaBb@sBj@_@JWJMyA',
        updatable_detail: {
          leg_departure_time: '2022-06-30T18:26:00+01:00',
          leg_arrival_time: '2022-06-30T18:42:16+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'BristolStation_BathSpaRailStation_DefaultExit',
            stop_id: 'BristolStation_BathSpaRailStation',
            coordinates: {
              lat: 51.37769,
              lon: -2.35702,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-06-30T17:46:05+01:00',
    route_arrival_time: '2022-06-30T18:42:16+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwNzU2NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTk1NzcsXCJkdXJhdGlvblwiOjM2NzcsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjM4NDgwNSwtMi4zNjMxMDJcIn0sXCJqcl9pbmRleFwiOjMsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6NTEzLFwiZHVyYXRpb25cIjo0NDgsXCJlY1wiOlwiNTEuNDQ2OCwtMi41OTA5M1wiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ0NjcyLC0yLjU5NjU3XCJ9LHtcImR1cmF0aW9uXCI6MjQwLFwiZW5kXCI6XCJCcmlzdG9sU3RvcF9UZW1wbGVNZWFkc1N0bl9XXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJGaXJzdF9GaXJzdEluQnJpc3RvbEJhdGhUaGVXZXN0QTFcIl0sXCJzdGFydFwiOlwiQnJpc3RvbFN0b3BfUmVkY2xpZmZIaWxsX05FXCIsXCJzdG9wX2NvdW50XCI6M30se1wiZGlzdGFuY2VcIjoxOTcsXCJkdXJhdGlvblwiOjIwOSxcImVjXCI6XCI1MS40NDk2MywtMi41ODExMlwiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ0ODk4LC0yLjU4MjYyXCIsXCJ0b19leGl0XCI6XCJCcmlzdG9sU3RhdGlvbl9CcmlzdG9sVGVtcGxlTWVhZHNSYWlsU3RhdGlvbl9FMzgwNjVcIn0se1wiZHVyYXRpb25cIjo5NjAsXCJlbmRcIjpcIkJyaXN0b2xTdGF0aW9uX0JhdGhTcGFSYWlsU3RhdGlvblwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTmF0aW9uYWxSYWlsR1dcIl0sXCJzdGFydFwiOlwiQnJpc3RvbFN0YXRpb25fQnJpc3RvbFRlbXBsZU1lYWRzUmFpbFN0YXRpb25cIixcInN0b3BfY291bnRcIjo0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9CcmlzdG9sVGVtcGxlTWVhZHNSYWlsX05hdGlvbmFsUmFpbFwiLFwiUGxhdGZvcm1fQnJpc3RvbEJhdGhTcGFSYWlsX05hdGlvbmFsUmFpbE5hdGlvbmFsUmFpbEJ1c1wiXX0se1wiZGlzdGFuY2VcIjoxMDY1LFwiZHVyYXRpb25cIjo5NzYsXCJlY1wiOlwiNTEuMzg0NzUsLTIuMzYzMDhcIixcImZyb21fZXhpdFwiOlwiQnJpc3RvbFN0YXRpb25fQmF0aFNwYVJhaWxTdGF0aW9uX0RlZmF1bHRFeGl0XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuMzc3NjksLTIuMzU3MDJcIn1dLFwicmVnaW9uXCI6XCJ1ay1icmlzdG9sXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImUwODFmZWQ4LWY2NTMtNGYxYi1iNWI2LWYyZTllNTE1NDIwOFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjQ0Njc0LC0yLjU5NjQyMlwifSxcInRpbWVcIjpcIjIwMjItMDYtMzBUMTc6NDY6MDUrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1icmlzdG9sIn0.bpva1U_Q6BYL51D9AjJ-n-v71UfRDmvQoJvOuh4R-XM',
  },
  {
    start: {
      coordinates: {
        lat: 51.44674,
        lon: -2.596422,
      },
    },
    end: {
      coordinates: {
        lat: 51.384805,
        lon: -2.363102,
      },
    },
    distance_meters: 1882,
    duration_seconds: 3720,
    duration_accuracy: 'scheduled',
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 467,
        path: '_e_yHpczNa@Ny@NE?I@E@U?_AAo@C}@?I?e@?a@@O@_AFYBk@@S@YAKAo@OyAWUE[Gc@GOEI@Q?QEk@IWEIAWPOJKHMHEDKJKJQRGBAE',
        updatable_detail: {
          leg_departure_time: '2022-06-30T17:46:05+01:00',
          leg_arrival_time: '2022-06-30T17:53:52+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 360,
        path: '_g`yHfezNENHG??@???NM??NO??HO??Lk@??FW??@A@C???ABCBEDCBAF???B@N@F@D@JBp@T`@FB@LLLBJ@VDRD^H^Fx@PvAF??@_ANgF@q@Be@HqCDkB@e@@O?KAUAOCICICCACCCCCCCGCCAGA???@?@A@?@A??@A?A??@A?A??AA?AA?AA??A?AA??A?A?A?A?A?A?A?A?A@??A?A@??A@?NuB?CNoB@OFq@F[Jc@H[BGBMFY??EMAGAG?GAG?G@G?E?E@C?A@C?A@C?A@C@EBEBEBCDCBABADAB?H@Fe@DWB[@MIC??H??A?_@?m@Ae@GuAEsACo@?ECo@A[Gy@Au@BaAFqCNwF??@k@DG\\w@JQPe@uAaE',
        stops: [
          {
            id: 'BristolStop_TheCentre_SE_3',
            name: 'The Centre',
            coordinates: {
              lat: 51.45216,
              lon: -2.59684,
            },
            indicator_text: 'C5',
          },
          {
            id: 'BristolStop_RedcliffeWay_E_1',
            name: 'Redcliffe Way',
            coordinates: {
              lat: 51.4489,
              lon: -2.58936,
            },
            indicator_text: 'R5',
          },
          {
            id: 'BristolStop_TempleMeadsStn_W',
            name: 'Temple Meads Stn',
            coordinates: {
              lat: 51.44898,
              lon: -2.58262,
            },
            indicator_text: 'T6',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'First_FirstInBristolBathTheWest73',
              frequency_seconds_range: [912, 912],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['First_FirstInBristolBathTheWest73'],
            },
          ],
          leg_departure_time: '2022-06-30T17:57:00+01:00',
          leg_arrival_time: '2022-06-30T18:03:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'First_FirstInBristolBathTheWest73',
            name: '73',
            vehicle_types: ['bus'],
            brand: {
              id: 'First',
              name: 'First',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/6e610db315a489498ab1b57ac4e1b54fa04353545987d7bf2dfa0c2d/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/d9891eb584339c18df81bdd69c558182c460d34922a12a9e15f388a7/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/558170c52ae60cd28353adfb63555c2e445d2491d0a39e3221a3375d/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/12faf7c2d0080455b8317bc6e2d46bc827fd4c8331584ef8cea2b989/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/1842b9fc7c1458d24e1c964ae2454f1c230eff9af8348f663f5c0374/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/0f057ca1fe0fd48bfe8d34759be0307b13756d8c222ca876e405d119/d324a6fb/@2x.png',
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
            color: '#D50560',
            background_color: '#47587c',
            text_color: '#FFFFFF',
          },
        ],
        direction_description: 'Temple Meads',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 209,
        path: 'cs_yHjlwNIHe@sADGKSs@uBGSGS?M@KGIAE?@',
        updatable_detail: {
          leg_departure_time: '2022-06-30T18:03:00+01:00',
          leg_arrival_time: '2022-06-30T18:06:29+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'BristolStation_BristolTempleMeadsRailStation_E38065',
            stop_id: 'BristolStation_BristolTempleMeadsRailStation',
            coordinates: {
              lat: 51.449633,
              lon: -2.581117,
            },
            name: 'Station Approach',
          },
          alternate_exits: [
            {
              id: 'BristolStation_BristolTempleMeadsRailStation_E38064',
              stop_id: 'BristolStation_BristolTempleMeadsRailStation',
              coordinates: {
                lat: 51.450092,
                lon: -2.581237,
              },
              name: 'Temple Quay',
            },
          ],
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 960,
        path: 'ct_yHfdwN]gCuBaA_Ay@_B}CwA}GoAsNk@aJMcH@yD\\cLpBcTzBmRpN}qArBoOlBaLbC}K`C}IfEuL~C_IlFuKpHwLdH}IpCwCjImH|CwB~B{A~HcH~FiHpGkKzDaInPcc@nHaOrKiTbB}DvFqOtUwp@xCuJPs@xDwP|BsLrBcNdBgOdEog@rBkPpCuPnAgGlD{NvBoHhC}HvBcGtEyKjDiHfFcJfu@agAdEeHfFyKlB_FfZ_~@tC}KpAgGtAgIbBeOdAkPXiLXsPl@eMh@qHlBcPnBsLtBmJdDyLdGkO~CoHdDsJfCoJvA}GxA{JpAyMhF_gAHi@|K_`CMmG_@kDg@iBWT',
        stops: [
          {
            id: 'BristolStation_BristolTempleMeadsRailStation',
            name: 'Bristol Temple Meads',
            coordinates: {
              lat: 51.449142,
              lon: -2.581315,
            },
          },
          {
            id: 'BristolStation_KeynshamRailStation',
            name: 'Keynsham',
            coordinates: {
              lat: 51.417975,
              lon: -2.495629,
            },
          },
          {
            id: 'BristolStation_OldfieldParkRailStation',
            name: 'Oldfield Park',
            coordinates: {
              lat: 51.379229,
              lon: -2.380508,
            },
          },
          {
            id: 'BristolStation_BathSpaRailStation',
            name: 'Bath Spa',
            coordinates: {
              lat: 51.377685,
              lon: -2.357018,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailGW',
              headsign: 'Westbury (Wilts)',
              scheduled_time: '2022-06-30T18:10:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['NationalRailGW'],
            },
          ],
          leg_departure_time: '2022-06-30T18:10:00+01:00',
          leg_arrival_time: '2022-06-30T18:26:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailGW',
            name: 'Great Western Railway',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/0407d9190d3af97eb77b51ea5a8a0fbf5eee98060a3d9a597c095333/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/f5aa41982763c8a84acb1aa643ce29c3e04cf83ab6fcd5f84c4112c9/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#005936',
            background_color: '#005936',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 976,
        path: 'quqxHjjkMIF??@F?D?@?B?@??G?IPEDCjBGNABADC?CrAA^Aj@At@Cd@Az@GPCHCDCBODC?G@QBIFYZQX_@h@_@^ILs@z@m@v@}AlBININGLK^I`@MKIEE?E?E@KHML_@RYFMB]D??WBOBCBCDEHEL?Os@?GAKCICKEGAG?M@g@DMAk@RA?cAZ{@VC?CACF?FAHEAE?ODaBb@sBj@_@JWJMyA',
        updatable_detail: {
          leg_departure_time: '2022-06-30T18:26:00+01:00',
          leg_arrival_time: '2022-06-30T18:42:16+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'BristolStation_BathSpaRailStation_DefaultExit',
            stop_id: 'BristolStation_BathSpaRailStation',
            coordinates: {
              lat: 51.37769,
              lon: -2.35702,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-06-30T17:46:05+01:00',
    route_arrival_time: '2022-06-30T18:42:16+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYwNzU2NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTk1NzcsXCJkdXJhdGlvblwiOjM3MjAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjM4NDgwNSwtMi4zNjMxMDJcIn0sXCJqcl9pbmRleFwiOjQsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6NjIwLFwiZHVyYXRpb25cIjo0NjcsXCJlY1wiOlwiNTEuNDUyMTYsLTIuNTk2ODRcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS40NDY3MiwtMi41OTY1N1wifSx7XCJkdXJhdGlvblwiOjM2MCxcImVuZFwiOlwiQnJpc3RvbFN0b3BfVGVtcGxlTWVhZHNTdG5fV1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiRmlyc3RfRmlyc3RJbkJyaXN0b2xCYXRoVGhlV2VzdDczXCJdLFwic3RhcnRcIjpcIkJyaXN0b2xTdG9wX1RoZUNlbnRyZV9TRV8zXCIsXCJzdG9wX2NvdW50XCI6M30se1wiZGlzdGFuY2VcIjoxOTcsXCJkdXJhdGlvblwiOjIwOSxcImVjXCI6XCI1MS40NDk2MywtMi41ODExMlwiLFwiaW5fc3RhdGlvblwiOlwiMC85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjQ0ODk4LC0yLjU4MjYyXCIsXCJ0b19leGl0XCI6XCJCcmlzdG9sU3RhdGlvbl9CcmlzdG9sVGVtcGxlTWVhZHNSYWlsU3RhdGlvbl9FMzgwNjVcIn0se1wiZHVyYXRpb25cIjo5NjAsXCJlbmRcIjpcIkJyaXN0b2xTdGF0aW9uX0JhdGhTcGFSYWlsU3RhdGlvblwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTmF0aW9uYWxSYWlsR1dcIl0sXCJzdGFydFwiOlwiQnJpc3RvbFN0YXRpb25fQnJpc3RvbFRlbXBsZU1lYWRzUmFpbFN0YXRpb25cIixcInN0b3BfY291bnRcIjo0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9CcmlzdG9sVGVtcGxlTWVhZHNSYWlsX05hdGlvbmFsUmFpbFwiLFwiUGxhdGZvcm1fQnJpc3RvbEJhdGhTcGFSYWlsX05hdGlvbmFsUmFpbE5hdGlvbmFsUmFpbEJ1c1wiXX0se1wiZGlzdGFuY2VcIjoxMDY1LFwiZHVyYXRpb25cIjo5NzYsXCJlY1wiOlwiNTEuMzg0NzUsLTIuMzYzMDhcIixcImZyb21fZXhpdFwiOlwiQnJpc3RvbFN0YXRpb25fQmF0aFNwYVJhaWxTdGF0aW9uX0RlZmF1bHRFeGl0XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuMzc3NjksLTIuMzU3MDJcIn1dLFwicmVnaW9uXCI6XCJ1ay1icmlzdG9sXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImUwODFmZWQ4LWY2NTMtNGYxYi1iNWI2LWYyZTllNTE1NDIwOFwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjQ0Njc0LC0yLjU5NjQyMlwifSxcInRpbWVcIjpcIjIwMjItMDYtMzBUMTc6NDY6MDUrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1icmlzdG9sIn0.d17rgREETJZbfvdlbR-BhOj8InX9-Q2G9mEPmgCILZU',
  },
] as Route[]
