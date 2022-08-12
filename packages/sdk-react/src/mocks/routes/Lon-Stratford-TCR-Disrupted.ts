import { Route } from '@citymapper/api/@types'

export default [
  {
    start: {
      coordinates: {
        lat: 51.545214,
        lon: -0.01326,
      },
    },
    end: {
      coordinates: {
        lat: 51.516216,
        lon: -0.132817,
      },
    },
    distance_meters: 1297,
    duration_seconds: 2258,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 901,
        path: 'ylryHhpA[?kAAOKKQGQTQDAHEb@AZ?H?B?DKdEDD?@C@CDAD?@CBC@M@UBo@De@Fk@BU?OAI@ADCBABA?K?Q?W?MFADABCB?DCDABCJUt@gAP[b@y@?A??CGAAn@gA@?ACq@sAHMDKCUnBkDBODWB]FcA?gDEaGAk@?[A_@??b@C',
        updatable_detail: {
          leg_departure_time: '2022-07-18T09:35:29+01:00',
          leg_arrival_time: '2022-07-18T09:50:30+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Stratford_E1',
            stop_id: 'Stratford',
            coordinates: {
              lat: 51.542395,
              lon: -0.004727,
            },
            name: 'Westfield Stratford City',
          },
          alternate_exits: [
            {
              id: 'Stratford_E2',
              stop_id: 'Stratford',
              coordinates: {
                lat: 51.541926,
                lon: -0.002705,
              },
              name: 'Mezzanine',
            },
            {
              id: 'Stratford_E3',
              stop_id: 'Stratford',
              coordinates: {
                lat: 51.541423,
                lon: -0.002899,
              },
              name: 'Stratford Bus Station',
            },
          ],
          duration_seconds: 135,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1020,
        path: 'atqyHhS{@`BR\\xB`DfBzD`BtBhGvG~GnIxGnMxJdThErIjEjHlPpVhCtGjClInA`FlBjKjDhW\\pBTt@^nB??f@|Fl@hDlBfI^|B`@rDHfBJpGCdHKjGW`GSpC_@dCkAlFaNbk@m@rDIh@a@bFCrB?dCJbDx@vQjAzYXvC\\xBd@vBbDrLdDbJdIxUdAxB~DrH~RbZbBdBdBxAd@R`@NfD`Ap@ZdCnBx@~@r@nAd@`BPZjBvBL`@H^v@hG~@bF??Fl@@l@EjAkE~d@UpAgAfFi@`C}BlLaIn]eAnGgAh_@EtA@`GL~Ph@bI^hJDbAl@xLr@tQ~@rO|@`KLrEl@G',
        stops: [
          {
            id: 'Stratford',
            name: 'Stratford',
            coordinates: {
              lat: 51.54129,
              lon: -0.00325,
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
          {
            id: 'BethnalGreen',
            name: 'Bethnal Green',
            coordinates: {
              lat: 51.527195,
              lon: -0.055431,
            },
          },
          {
            id: 'LiverpoolStreet',
            name: 'Liverpool Street',
            coordinates: {
              lat: 51.517742,
              lon: -0.081662,
            },
          },
          {
            id: 'Bank',
            name: 'Bank',
            coordinates: {
              lat: 51.51332,
              lon: -0.088921,
            },
          },
          {
            id: 'StPauls',
            name: "St Paul's",
            coordinates: {
              lat: 51.514801,
              lon: -0.097574,
            },
          },
          {
            id: 'ChanceryLane',
            name: 'Chancery Lane',
            coordinates: {
              lat: 51.518123,
              lon: -0.111677,
            },
          },
          {
            id: 'Holborn',
            name: 'Holborn',
            coordinates: {
              lat: 51.517439,
              lon: -0.120009,
            },
          },
          {
            id: 'TottenhamCourtRoad',
            name: 'Tottenham Court Road',
            coordinates: {
              lat: 51.51621,
              lon: -0.130871,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Central',
              frequency_seconds_range: [149, 149],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Severe Delays',
              description:
                'Central Line: Severe delays due to heat related speed restrictions. ',
              service_ids: ['Central'],
            },
          ],
          leg_departure_time: '2022-07-18T09:52:00+01:00',
          leg_arrival_time: '2022-07-18T10:09:00+01:00',
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
          middle: false,
          back: true,
        },
        direction_description: 'Plat 3 Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 288,
        path: '{wlyHzoXW??LB^JxCBn@@LBz@D`A?D?N@VFG',
        updatable_detail: {
          leg_departure_time: '2022-07-18T10:09:00+01:00',
          leg_arrival_time: '2022-07-18T10:13:48+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'TottenhamCourtRoad_E1_OxSouth',
            stop_id: 'TottenhamCourtRoad',
            coordinates: {
              lat: 51.5163,
              lon: -0.1307,
            },
            name: 'Oxford Street (South Side)',
            short_name: '1',
          },
          alternate_exits: [
            {
              id: 'TottenhamCourtRoad_E2_TCR',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.516575,
                lon: -0.13017,
              },
              name: 'Tottenham Court Road',
              short_name: '2',
            },
            {
              id: 'TottenhamCourtRoad_E3_NewOx',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.51628,
                lon: -0.13003,
              },
              name: 'New Oxford St',
              short_name: '3',
            },
            {
              id: 'TottenhamCourtRoad_E4_CXR',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.515876,
                lon: -0.129851,
              },
              name: 'Charing Cross Road',
              short_name: '4',
            },
            {
              id: 'TottenhamCourtRoad_E5_DeanSt',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.5158554,
                lon: -0.1340419,
              },
              name: 'Dean Street',
            },
          ],
          duration_seconds: 160,
        },
      },
    ],
    route_departure_time: '2022-07-18T09:35:29+01:00',
    route_arrival_time: '2022-07-18T10:13:48+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1ODEzMzMzOCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTEyNTQsXCJkdXJhdGlvblwiOjIyNTgsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUxNjIxNiwtMC4xMzI4MTdcIn0sXCJlbnZpcm9ubWVudFwiOlwic3RhZ2luZ1wiLFwianJfaW5kZXhcIjowLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjExMTIsXCJkdXJhdGlvblwiOjkwMSxcImVjXCI6XCI1MS41NDI0LC0wLjAwNDczXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzEzNVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjU0NTI1LC0wLjAxMzAxXCIsXCJ0b19leGl0XCI6XCJTdHJhdGZvcmRfRTFcIn0se1wiZHVyYXRpb25cIjoxMDIwLFwiZW5kXCI6XCJUb3R0ZW5oYW1Db3VydFJvYWRcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkNlbnRyYWxcIl0sXCJzdGFydFwiOlwiU3RyYXRmb3JkXCIsXCJzdG9wX2NvdW50XCI6OSxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fU3RyYXRmb3JkX0NfZFNXXCIsXCJQbGF0Zm9ybV9Ub3R0ZW5oYW1Db3VydFJvYWRfQ19kV1wiXX0se1wiZGlzdGFuY2VcIjoxODUsXCJkdXJhdGlvblwiOjI4OCxcImVjXCI6XCI1MS41MTYyMSwtMC4xMzI4M1wiLFwiZnJvbV9leGl0XCI6XCJUb3R0ZW5oYW1Db3VydFJvYWRfRTFfT3hTb3V0aFwiLFwiaW5fc3RhdGlvblwiOlwiMi8xNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MTYzLC0wLjEzMDdcIn1dLFwicHJpY2VfcGVuY2VcIjoyNjAsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJjYjIxOTk2Ni02MmRjLTQ0YTgtYWY0ZC00ZGNjZjVhODFkZGZcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS41NDUyMTQsLTAuMDEzMjZcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTE4VDA5OjM1OjI5KzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.g_bpN2M8fDbvxDNg0Owee6vZcD16ZViuNZ5e99erYUU',
  },
  {
    start: {
      coordinates: {
        lat: 51.545214,
        lon: -0.01326,
      },
    },
    end: {
      coordinates: {
        lat: 51.516216,
        lon: -0.132817,
      },
    },
    distance_meters: 758,
    duration_seconds: 2320,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 513,
        path: 'ylryHhpA[?kAAOKKQGQTQDAHEb@A@Q@{BC_@Oo@e@uAO[e@eAy@mBQa@M[LUBER[JOAI@CFc@F}@Bc@Bs@`@AD?H?d@@TA@NH?H??B?@QA',
        updatable_detail: {
          leg_departure_time: '2022-07-18T09:35:29+01:00',
          leg_arrival_time: '2022-07-18T09:44:02+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'StratfordInternationalDLR_E5344',
            stop_id: 'StratfordInternationalDLR',
            coordinates: {
              lat: 51.5456333,
              lon: -0.0084636,
            },
            name: 'East Village / Olympic Park',
          },
          alternate_exits: [
            {
              id: 'StratfordInternationalDLR_E5345',
              stop_id: 'StratfordInternationalDLR',
              coordinates: {
                lat: 51.5456095,
                lon: -0.0098927,
              },
              name: 'Buses',
            },
          ],
          duration_seconds: 30,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 120,
        path: 'soryHps@KxAC|FHfADXl@lBhAfDTf@d@v@v@~@x@x@TLbAXt@Hz@Ed@MdAk@b@a@j@{@Xm@Vu@`@gBXuBF{@BuB?mAE_AQ_AiBaII}@E}@?uAF{BRoB^eBXw@Zg@jBgBAuA',
        stops: [
          {
            id: 'StratfordInternationalDLR',
            name: 'Stratford International',
            coordinates: {
              lat: 51.5457,
              lon: -0.00841,
            },
          },
          {
            id: 'Stratford',
            name: 'Stratford',
            coordinates: {
              lat: 51.54129,
              lon: -0.00325,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'DLR',
              frequency_seconds_range: [600, 600],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['DLR'],
            },
          ],
          leg_departure_time: '2022-07-18T09:51:00+01:00',
          leg_arrival_time: '2022-07-18T09:53:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'DLR',
            name: 'DLR',
            vehicle_types: ['metro'],
            brand: {
              id: 'DLR',
              name: 'DLR',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/c5347dfe5d15f446310a015ba2fdd38a477f20c4b31851eda4ed1e50/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/f5f026fe49cd6d1e285d68b5638a23e55fe42d64c6ed4f6ac218f66a/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/2ce3a2c6274a482874eba939740507160683e2d43b4902d948087880/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/8768de61b035211677738e1c0dd3be8cab705c36063b1406de29cd7a/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#00AFAD',
            background_color: '#00AFAD',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Woolwich Arsenal',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 105,
        path: 'atqyHhS??????????',
        updatable_detail: {
          leg_departure_time: '2022-07-18T09:53:00+01:00',
          leg_arrival_time: '2022-07-18T09:54:45+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1020,
        path: 'atqyHhS{@`BR\\xB`DfBzD`BtBhGvG~GnIxGnMxJdThErIjEjHlPpVhCtGjClInA`FlBjKjDhW\\pBTt@^nB??f@|Fl@hDlBfI^|B`@rDHfBJpGCdHKjGW`GSpC_@dCkAlFaNbk@m@rDIh@a@bFCrB?dCJbDx@vQjAzYXvC\\xBd@vBbDrLdDbJdIxUdAxB~DrH~RbZbBdBdBxAd@R`@NfD`Ap@ZdCnBx@~@r@nAd@`BPZjBvBL`@H^v@hG~@fFBHDlAEjAkE~d@UpAgAfFi@`C}BlLaIn]eAnGgAh_@EtA@`GL~Ph@bI^hJDbAl@xLr@tQ~@rO|@`KLrEl@G',
        stops: [
          {
            id: 'Stratford',
            name: 'Stratford',
            coordinates: {
              lat: 51.54129,
              lon: -0.00325,
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
          {
            id: 'BethnalGreen',
            name: 'Bethnal Green',
            coordinates: {
              lat: 51.527195,
              lon: -0.055431,
            },
          },
          {
            id: 'LiverpoolStreet',
            name: 'Liverpool Street',
            coordinates: {
              lat: 51.517742,
              lon: -0.081662,
            },
          },
          {
            id: 'Bank',
            name: 'Bank',
            coordinates: {
              lat: 51.51332,
              lon: -0.088921,
            },
          },
          {
            id: 'StPauls',
            name: "St Paul's",
            coordinates: {
              lat: 51.514801,
              lon: -0.097574,
            },
          },
          {
            id: 'ChanceryLane',
            name: 'Chancery Lane',
            coordinates: {
              lat: 51.518123,
              lon: -0.111677,
            },
          },
          {
            id: 'Holborn',
            name: 'Holborn',
            coordinates: {
              lat: 51.517439,
              lon: -0.120009,
            },
          },
          {
            id: 'TottenhamCourtRoad',
            name: 'Tottenham Court Road',
            coordinates: {
              lat: 51.51621,
              lon: -0.130871,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Central',
              frequency_seconds_range: [149, 149],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Severe Delays',
              description:
                'Central Line: Severe delays due to heat related speed restrictions. ',
              service_ids: ['Central'],
            },
          ],
          leg_departure_time: '2022-07-18T09:57:00+01:00',
          leg_arrival_time: '2022-07-18T10:14:00+01:00',
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
          middle: false,
          back: true,
        },
        direction_description: 'Plat 3 Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 288,
        path: '{wlyHzoXW??LB^JxCBn@@LBz@D`A?D?N@VFG',
        updatable_detail: {
          leg_departure_time: '2022-07-18T10:14:00+01:00',
          leg_arrival_time: '2022-07-18T10:18:48+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'TottenhamCourtRoad_E1_OxSouth',
            stop_id: 'TottenhamCourtRoad',
            coordinates: {
              lat: 51.5163,
              lon: -0.1307,
            },
            name: 'Oxford Street (South Side)',
            short_name: '1',
          },
          alternate_exits: [
            {
              id: 'TottenhamCourtRoad_E2_TCR',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.516575,
                lon: -0.13017,
              },
              name: 'Tottenham Court Road',
              short_name: '2',
            },
            {
              id: 'TottenhamCourtRoad_E3_NewOx',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.51628,
                lon: -0.13003,
              },
              name: 'New Oxford St',
              short_name: '3',
            },
            {
              id: 'TottenhamCourtRoad_E4_CXR',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.515876,
                lon: -0.129851,
              },
              name: 'Charing Cross Road',
              short_name: '4',
            },
            {
              id: 'TottenhamCourtRoad_E5_DeanSt',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.5158554,
                lon: -0.1340419,
              },
              name: 'Dean Street',
            },
          ],
          duration_seconds: 160,
        },
      },
    ],
    route_departure_time: '2022-07-18T09:35:29+01:00',
    route_arrival_time: '2022-07-18T10:18:48+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1ODEzMzMzOCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTEyNTQsXCJkdXJhdGlvblwiOjIzMjAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUxNjIxNiwtMC4xMzI4MTdcIn0sXCJlbnZpcm9ubWVudFwiOlwic3RhZ2luZ1wiLFwianJfaW5kZXhcIjoxLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjU3MyxcImR1cmF0aW9uXCI6NTEzLFwiZWNcIjpcIjUxLjU0NTYzLC0wLjAwODQ2XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzMwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTQ1MjUsLTAuMDEzMDFcIixcInRvX2V4aXRcIjpcIlN0cmF0Zm9yZEludGVybmF0aW9uYWxETFJfRTUzNDRcIn0se1wiZHVyYXRpb25cIjoxMjAsXCJlbmRcIjpcIlN0cmF0Zm9yZFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiRExSXCJdLFwic3RhcnRcIjpcIlN0cmF0Zm9yZEludGVybmF0aW9uYWxETFJcIixcInN0b3BfY291bnRcIjoyLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdHJhdGZvcmRJbnRlcm5hdGlvbmFsRExSX0RMUlwiLFwiUGxhdGZvcm1fU3RyYXRmb3JkX0RfZFNFXCJdfSx7XCJkaXN0YW5jZVwiOjAsXCJkdXJhdGlvblwiOjEwNSxcImVjXCI6XCI1MS41NDEyOSwtMC4wMDMyNVwiLFwiaW5fc3RhdGlvblwiOlwiMS8xMDVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDEyOSwtMC4wMDMyNVwifSx7XCJkdXJhdGlvblwiOjEwMjAsXCJlbmRcIjpcIlRvdHRlbmhhbUNvdXJ0Um9hZFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiQ2VudHJhbFwiXSxcInN0YXJ0XCI6XCJTdHJhdGZvcmRcIixcInN0b3BfY291bnRcIjo5LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdHJhdGZvcmRfQ19kU1dcIixcIlBsYXRmb3JtX1RvdHRlbmhhbUNvdXJ0Um9hZF9DX2RXXCJdfSx7XCJkaXN0YW5jZVwiOjE4NSxcImR1cmF0aW9uXCI6Mjg4LFwiZWNcIjpcIjUxLjUxNjIxLC0wLjEzMjgzXCIsXCJmcm9tX2V4aXRcIjpcIlRvdHRlbmhhbUNvdXJ0Um9hZF9FMV9PeFNvdXRoXCIsXCJpbl9zdGF0aW9uXCI6XCIyLzE2MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjUxNjMsLTAuMTMwN1wifV0sXCJwcmljZV9wZW5jZVwiOjI2MCxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImNiMjE5OTY2LTYyZGMtNDRhOC1hZjRkLTRkY2NmNWE4MWRkZlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjU0NTIxNCwtMC4wMTMyNlwifSxcInRpbWVcIjpcIjIwMjItMDctMThUMDk6MzU6MjkrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.YKSV0nE_J2BnYRQ0aM8ZiCyA5VJ4DudnrpQnzKNpcRk',
  },
  {
    start: {
      coordinates: {
        lat: 51.545214,
        lon: -0.01326,
      },
    },
    end: {
      coordinates: {
        lat: 51.516216,
        lon: -0.132817,
      },
    },
    distance_meters: 1332,
    duration_seconds: 2605,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 901,
        path: 'ylryHhpA[?kAAOKKQGQTQDAHEb@AZ?H?B?DKdEDD?@C@CDAD?@CBC@M@UBo@De@Fk@BU?OAI@ADCBABA?K?Q?W?MFADABCB?DCDABCJUt@gAP[b@y@?A??CGAAn@gA@?ACq@sAHMDKCUnBkDBODWB]FcA?gDEaGAk@?[A_@??b@C',
        updatable_detail: {
          leg_departure_time: '2022-07-18T09:35:29+01:00',
          leg_arrival_time: '2022-07-18T09:50:30+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Stratford_E1',
            stop_id: 'Stratford',
            coordinates: {
              lat: 51.542395,
              lon: -0.004727,
            },
            name: 'Westfield Stratford City',
          },
          alternate_exits: [
            {
              id: 'Stratford_E2',
              stop_id: 'Stratford',
              coordinates: {
                lat: 51.541926,
                lon: -0.002705,
              },
              name: 'Mezzanine',
            },
            {
              id: 'Stratford_E3',
              stop_id: 'Stratford',
              coordinates: {
                lat: 51.541423,
                lon: -0.002899,
              },
              name: 'Stratford Bus Station',
            },
          ],
          duration_seconds: 135,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 480,
        path: 'atqyHhSiBlC??nB|CbCzCjJnJhBlBtBjCnFfIdEdHh@dAnArClQxb@v@tB`BfF`BhHf@pC`@dC^pDb@dFd@~Hv@dQv@fJpAbKbDxRt@lFRjBf@`GdDhd@d@fFf@dEZhBn@|Bx@pDz@vEp@tEr@fFbA|JZpD`@fFVbE`@~JJ|DD|HjAzd@NtCNzAz@zFX|CJ|Ab@bMNjIPpC\\|Bl@fC\\dAZt@lJpKpIvDDW',
        stops: [
          {
            id: 'Stratford',
            name: 'Stratford',
            coordinates: {
              lat: 51.54129,
              lon: -0.00325,
            },
          },
          {
            id: 'LiverpoolStreet',
            name: 'Liverpool Street',
            coordinates: {
              lat: 51.517742,
              lon: -0.081662,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'ElizabethLine',
              frequency_seconds_range: [453, 453],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Minor Delays',
              description:
                'Minor delays between Paddington and Heathrow Airport / Reading and between Liverpool Street and Shenfield due to heat related speed restrictions. GOOD SERVICE on the rest of the line. ',
              service_ids: ['ElizabethLine'],
            },
          ],
          leg_departure_time: '2022-07-18T09:53:00+01:00',
          leg_arrival_time: '2022-07-18T10:01:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'ElizabethLine',
            name: 'Elizabeth Line',
            vehicle_types: ['metro'],
            brand: {
              id: 'TfLRail',
              name: 'Elizabeth Line',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/df6afee8b786f5d932b191ce8a8c8c520550d11daebe5a865da2305d/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8df17cf59095c589cdd521546b5839fc95bf95d711959eaecda16d92/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/5144031e56b5e5d30b7ec62bbbced8349368ff12911fff258a6500b8/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/e5210acc12abc1b465eb266479a4770c3519ae6ad8d07b4bda36dda6/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#6950A1',
            background_color: '#6950A1',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: false,
        },
        direction_description: 'Plat 5 Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 315,
        path: '{bmyHx}N??~@M????????????',
        updatable_detail: {
          leg_departure_time: '2022-07-18T10:01:00+01:00',
          leg_arrival_time: '2022-07-18T10:06:15+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: '{`myHj}NnDqD??VhBPjEAnAGhAg@dFmEf[[tBaAlFmAxFeD~Mc@|BSrAShBMxBCtAAfEDfHxAxRd@vHNtC??DnBFfHA~FGpEG|BQxCu@lHWdDKdCC`B@hBHhBNjBTjBl@fDz@bDbAxC`C|FbAvBvBbEjAhBjEbFbBdCd@`A^nAXtAZzBHtADtAG`EIjB_@xEMpCGvCuFbA',
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
            id: 'Farringdon',
            name: 'Farringdon',
            coordinates: {
              lat: 51.520445,
              lon: -0.105065,
            },
          },
          {
            id: 'TottenhamCourtRoad',
            name: 'Tottenham Court Road',
            coordinates: {
              lat: 51.51621,
              lon: -0.130871,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'ElizabethLine',
              frequency_seconds_range: [300, 300],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['ElizabethLine'],
            },
          ],
          leg_departure_time: '2022-07-18T10:08:00+01:00',
          leg_arrival_time: '2022-07-18T10:13:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'ElizabethLine',
            name: 'Elizabeth Line',
            vehicle_types: ['metro'],
            brand: {
              id: 'TfLRail',
              name: 'Elizabeth Line',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/df6afee8b786f5d932b191ce8a8c8c520550d11daebe5a865da2305d/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8df17cf59095c589cdd521546b5839fc95bf95d711959eaecda16d92/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/5144031e56b5e5d30b7ec62bbbced8349368ff12911fff258a6500b8/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/e5210acc12abc1b465eb266479a4770c3519ae6ad8d07b4bda36dda6/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#6950A1',
            background_color: '#6950A1',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Westbound (plat B)',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 308,
        path: '{wlyHzoXW??LB^JxCBn@@LBz@D`A?D?N@VFG',
        updatable_detail: {
          leg_departure_time: '2022-07-18T10:13:00+01:00',
          leg_arrival_time: '2022-07-18T10:18:08+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'TottenhamCourtRoad_E1_OxSouth',
            stop_id: 'TottenhamCourtRoad',
            coordinates: {
              lat: 51.5163,
              lon: -0.1307,
            },
            name: 'Oxford Street (South Side)',
            short_name: '1',
          },
          alternate_exits: [
            {
              id: 'TottenhamCourtRoad_E2_TCR',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.516575,
                lon: -0.13017,
              },
              name: 'Tottenham Court Road',
              short_name: '2',
            },
            {
              id: 'TottenhamCourtRoad_E3_NewOx',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.51628,
                lon: -0.13003,
              },
              name: 'New Oxford St',
              short_name: '3',
            },
            {
              id: 'TottenhamCourtRoad_E4_CXR',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.515876,
                lon: -0.129851,
              },
              name: 'Charing Cross Road',
              short_name: '4',
            },
            {
              id: 'TottenhamCourtRoad_E5_DeanSt',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.5158554,
                lon: -0.1340419,
              },
              name: 'Dean Street',
            },
          ],
          duration_seconds: 180,
        },
      },
    ],
    route_departure_time: '2022-07-18T09:35:29+01:00',
    route_arrival_time: '2022-07-18T10:18:08+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1ODEzMzMzOCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTEyNTQsXCJkdXJhdGlvblwiOjI2MDUsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUxNjIxNiwtMC4xMzI4MTdcIn0sXCJlbnZpcm9ubWVudFwiOlwic3RhZ2luZ1wiLFwianJfaW5kZXhcIjoyLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjExMTIsXCJkdXJhdGlvblwiOjkwMSxcImVjXCI6XCI1MS41NDI0LC0wLjAwNDczXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzEzNVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjU0NTI1LC0wLjAxMzAxXCIsXCJ0b19leGl0XCI6XCJTdHJhdGZvcmRfRTFcIn0se1wiZHVyYXRpb25cIjo0ODAsXCJlbmRcIjpcIkxpdmVycG9vbFN0cmVldFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiRWxpemFiZXRoTGluZVwiXSxcInN0YXJ0XCI6XCJTdHJhdGZvcmRcIixcInN0b3BfY291bnRcIjoyLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdHJhdGZvcmRfRUxfZFdcIixcIlBsYXRmb3JtX0xpdmVycG9vbFN0cmVldF9OYXRpb25hbFJhaWxUZkxSYWlsXCJdfSx7XCJkaXN0YW5jZVwiOjM1LFwiZHVyYXRpb25cIjozMTUsXCJlY1wiOlwiNTEuNTE3NzQsLTAuMDgxNjZcIixcImluX3N0YXRpb25cIjpcIjEvMzE1XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTE4MDYsLTAuMDgxNzNcIn0se1wiZHVyYXRpb25cIjozMDAsXCJlbmRcIjpcIlRvdHRlbmhhbUNvdXJ0Um9hZFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiRWxpemFiZXRoTGluZVwiXSxcInN0YXJ0XCI6XCJMaXZlcnBvb2xTdHJlZXRcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9MaXZlcnBvb2xTdHJlZXRfRUxfZFdcIixcIlBsYXRmb3JtX1RvdHRlbmhhbUNvdXJ0Um9hZF9FTF9kV1wiXX0se1wiZGlzdGFuY2VcIjoxODUsXCJkdXJhdGlvblwiOjMwOCxcImVjXCI6XCI1MS41MTYyMSwtMC4xMzI4M1wiLFwiZnJvbV9leGl0XCI6XCJUb3R0ZW5oYW1Db3VydFJvYWRfRTFfT3hTb3V0aFwiLFwiaW5fc3RhdGlvblwiOlwiMi8xODBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MTYzLC0wLjEzMDdcIn1dLFwicHJpY2VfcGVuY2VcIjoyNjAsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJjYjIxOTk2Ni02MmRjLTQ0YTgtYWY0ZC00ZGNjZjVhODFkZGZcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS41NDUyMTQsLTAuMDEzMjZcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTE4VDA5OjM1OjI5KzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.PX1PsQ02TOFzNu-sMvJok4edTyy3V_Oa9arA2iGAJK8',
  },
  {
    start: {
      coordinates: {
        lat: 51.545214,
        lon: -0.01326,
      },
    },
    end: {
      coordinates: {
        lat: 51.516216,
        lon: -0.132817,
      },
    },
    distance_meters: 1332,
    duration_seconds: 2675,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 871,
        path: 'ylryHhpA[?kAAOKKQGQTQDAHEb@AZ?H?B?DKdEDD?@C@CDAD?@CBC@M@UBo@De@Fk@BU?OAI@ADCBABA?K?Q?W?MFADABCB?DCDABCJUt@gAP[b@y@?A??CGAAn@gA@?ACq@sAHMDKCUnBkDBODWB]FcA?gDEaGAk@?[A_@??b@C',
        updatable_detail: {
          leg_departure_time: '2022-07-18T09:35:29+01:00',
          leg_arrival_time: '2022-07-18T09:50:00+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'Stratford_E1',
            stop_id: 'Stratford',
            coordinates: {
              lat: 51.542395,
              lon: -0.004727,
            },
            name: 'Westfield Stratford City',
          },
          alternate_exits: [
            {
              id: 'Stratford_E2',
              stop_id: 'Stratford',
              coordinates: {
                lat: 51.541926,
                lon: -0.002705,
              },
              name: 'Mezzanine',
            },
            {
              id: 'Stratford_E3',
              stop_id: 'Stratford',
              coordinates: {
                lat: 51.541423,
                lon: -0.002899,
              },
              name: 'Stratford Bus Station',
            },
          ],
          duration_seconds: 105,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 540,
        path: 'atqyHhSkA~BlAxB|FxHzKbMdGrIzCjFbCbFtSpf@bDxJrBhJt@vEt@dHj@jIz@hRb@rF~@~HhDrTxAlKh@lFvDvg@d@hFjAhI~BzKvAlJlAlK|@pKt@jL^xKLnOd@|QR~LXtF~AtMTbFTnQZtEn@`DbAtCbDnFvCdDbAn@~IbEL{@',
        stops: [
          {
            id: 'Stratford',
            name: 'Stratford',
            coordinates: {
              lat: 51.54129,
              lon: -0.00325,
            },
          },
          {
            id: 'LiverpoolStreet',
            name: 'Liverpool Street',
            coordinates: {
              lat: 51.517742,
              lon: -0.081662,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailLE',
              headsign: 'London Liverpool Street',
              scheduled_time: '2022-07-18T09:54:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title:
                'Reduced service and Disruption between Cambridge and Audley End',
              description:
                'Extreme Weather: Extreme Heat to affect England and Wales from Sunday 17 to Tuesday 19 July',
              service_ids: ['NationalRailLE'],
            },
          ],
          leg_departure_time: '2022-07-18T09:54:00+01:00',
          leg_arrival_time: '2022-07-18T10:03:00+01:00',
        },
        vehicle_types: ['rail'],
        services: [
          {
            id: 'NationalRailLE',
            name: 'Greater Anglia',
            vehicle_types: ['rail'],
            brand: {
              id: 'NationalRail',
              name: 'National Rail',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5a2b29efb556588bc6ba282fd72fb542b96d387403b86e3c0b927418/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/c3dc58616e7d9a793e1b4b85a19ad88a3673a52137672cbcd0bbcb96/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/403add017870210937ae9f459196c7fbe12b09e5dd4dac3c43f67c65/d324a6fb/@2x.png',
                  width: 16,
                  height: 13,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/e9b75e4fa00a57b15a53092100e1872a1995f2551b2084176ff06b6b/d324a6fb/@2x.png',
                  width: 24,
                  height: 15,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/2e85f1649e45cf863adeb201b101d6b32ece13b5715e4d35ba933a22/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/adbc235d019095c91c586ba7d6e4e96bc312c8b0c61ff399d3c29e7c/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#A8A8A8',
            background_color: '#A8A8A8',
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
        duration_seconds: 315,
        path: '{bmyHx}N??~@M????????????',
        updatable_detail: {
          leg_departure_time: '2022-07-18T10:03:00+01:00',
          leg_arrival_time: '2022-07-18T10:08:15+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: '{`myHj}NnDqD??VhBPjEAnAGhAg@dFmEf[[tBaAlFmAxFeD~Mc@|BSrAShBMxBCtAAfEDfHxAxRd@vHNtC??DnBFfHA~FGpEG|BQxCu@lHWdDKdCC`B@hBHhBNjBTjBl@fDz@bDbAxC`C|FbAvBvBbEjAhBjEbFbBdCd@`A^nAXtAZzBHtADtAG`EIjB_@xEMpCGvCuFbA',
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
            id: 'Farringdon',
            name: 'Farringdon',
            coordinates: {
              lat: 51.520445,
              lon: -0.105065,
            },
          },
          {
            id: 'TottenhamCourtRoad',
            name: 'Tottenham Court Road',
            coordinates: {
              lat: 51.51621,
              lon: -0.130871,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'ElizabethLine',
              frequency_seconds_range: [300, 300],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['ElizabethLine'],
            },
          ],
          leg_departure_time: '2022-07-18T10:13:00+01:00',
          leg_arrival_time: '2022-07-18T10:18:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'ElizabethLine',
            name: 'Elizabeth Line',
            vehicle_types: ['metro'],
            brand: {
              id: 'TfLRail',
              name: 'Elizabeth Line',
              images: [
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/df6afee8b786f5d932b191ce8a8c8c520550d11daebe5a865da2305d/d324a6fb/@2x.png',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/8df17cf59095c589cdd521546b5839fc95bf95d711959eaecda16d92/d324a6fb/@2x.png',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/5144031e56b5e5d30b7ec62bbbced8349368ff12911fff258a6500b8/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/e5210acc12abc1b465eb266479a4770c3519ae6ad8d07b4bda36dda6/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#6950A1',
            background_color: '#6950A1',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Westbound (plat B)',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 308,
        path: '{wlyHzoXW??LB^JxCBn@@LBz@D`A?D?N@VFG',
        updatable_detail: {
          leg_departure_time: '2022-07-18T10:18:00+01:00',
          leg_arrival_time: '2022-07-18T10:23:08+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'TottenhamCourtRoad_E1_OxSouth',
            stop_id: 'TottenhamCourtRoad',
            coordinates: {
              lat: 51.5163,
              lon: -0.1307,
            },
            name: 'Oxford Street (South Side)',
            short_name: '1',
          },
          alternate_exits: [
            {
              id: 'TottenhamCourtRoad_E2_TCR',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.516575,
                lon: -0.13017,
              },
              name: 'Tottenham Court Road',
              short_name: '2',
            },
            {
              id: 'TottenhamCourtRoad_E3_NewOx',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.51628,
                lon: -0.13003,
              },
              name: 'New Oxford St',
              short_name: '3',
            },
            {
              id: 'TottenhamCourtRoad_E4_CXR',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.515876,
                lon: -0.129851,
              },
              name: 'Charing Cross Road',
              short_name: '4',
            },
            {
              id: 'TottenhamCourtRoad_E5_DeanSt',
              stop_id: 'TottenhamCourtRoad',
              coordinates: {
                lat: 51.5158554,
                lon: -0.1340419,
              },
              name: 'Dean Street',
            },
          ],
          duration_seconds: 180,
        },
      },
    ],
    route_departure_time: '2022-07-18T09:35:29+01:00',
    route_arrival_time: '2022-07-18T10:23:08+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1ODEzMzMzOCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTEyNTQsXCJkdXJhdGlvblwiOjI2NzUsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUxNjIxNiwtMC4xMzI4MTdcIn0sXCJlbnZpcm9ubWVudFwiOlwic3RhZ2luZ1wiLFwianJfaW5kZXhcIjozLFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjExMTIsXCJkdXJhdGlvblwiOjg3MSxcImVjXCI6XCI1MS41NDI0LC0wLjAwNDczXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzEwNVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjU0NTI1LC0wLjAxMzAxXCIsXCJ0b19leGl0XCI6XCJTdHJhdGZvcmRfRTFcIn0se1wiZHVyYXRpb25cIjo1NDAsXCJlbmRcIjpcIkxpdmVycG9vbFN0cmVldFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTmF0aW9uYWxSYWlsTEVcIl0sXCJzdGFydFwiOlwiU3RyYXRmb3JkXCIsXCJzdG9wX2NvdW50XCI6MixcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fU3RyYXRmb3JkX1JhaWxcIixcIlBsYXRmb3JtX0xpdmVycG9vbFN0cmVldF9OYXRpb25hbFJhaWxUZkxSYWlsXCJdfSx7XCJkaXN0YW5jZVwiOjM1LFwiZHVyYXRpb25cIjozMTUsXCJlY1wiOlwiNTEuNTE3NzQsLTAuMDgxNjZcIixcImluX3N0YXRpb25cIjpcIjEvMzE1XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTE4MDYsLTAuMDgxNzNcIn0se1wiZHVyYXRpb25cIjozMDAsXCJlbmRcIjpcIlRvdHRlbmhhbUNvdXJ0Um9hZFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiRWxpemFiZXRoTGluZVwiXSxcInN0YXJ0XCI6XCJMaXZlcnBvb2xTdHJlZXRcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9MaXZlcnBvb2xTdHJlZXRfRUxfZFdcIixcIlBsYXRmb3JtX1RvdHRlbmhhbUNvdXJ0Um9hZF9FTF9kV1wiXX0se1wiZGlzdGFuY2VcIjoxODUsXCJkdXJhdGlvblwiOjMwOCxcImVjXCI6XCI1MS41MTYyMSwtMC4xMzI4M1wiLFwiZnJvbV9leGl0XCI6XCJUb3R0ZW5oYW1Db3VydFJvYWRfRTFfT3hTb3V0aFwiLFwiaW5fc3RhdGlvblwiOlwiMi8xODBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MTYzLC0wLjEzMDdcIn1dLFwicHJpY2VfcGVuY2VcIjoyNjAsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJjYjIxOTk2Ni02MmRjLTQ0YTgtYWY0ZC00ZGNjZjVhODFkZGZcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS41NDUyMTQsLTAuMDEzMjZcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTE4VDA5OjM1OjI5KzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.g-d9DoxENraLl37kCShXTjtySqxr5WfKbogwBmT77Ow',
  },
  {
    start: {
      coordinates: {
        lat: 51.545214,
        lon: -0.01326,
      },
    },
    end: {
      coordinates: {
        lat: 51.516216,
        lon: -0.132817,
      },
    },
    distance_meters: 1606,
    duration_seconds: 2770,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£6.70',
      amount: '6.70',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 672,
        path: 'ylryHhpA[?kAAOKKQGQTQDAHEb@A@Q@{BC_@Oo@e@uAO[e@eAy@mBQa@M[LUBER[JOAI@CFc@F}@Bc@Bs@`@AD?H?d@@TA@NH?H??BL?',
        updatable_detail: {
          leg_departure_time: '2022-07-18T09:35:29+01:00',
          leg_arrival_time: '2022-07-18T09:46:41+01:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'StratfordInternational_E5349',
            stop_id: 'StratfordInternational',
            coordinates: {
              lat: 51.5454685,
              lon: -0.0084603,
            },
            name: 'DLR',
          },
          alternate_exits: [
            {
              id: 'StratfordInternational_E5348',
              stop_id: 'StratfordInternational',
              coordinates: {
                lat: 51.5444544,
                lon: -0.0085032,
              },
              name: 'Westfield Stratford City',
            },
          ],
          duration_seconds: 190,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 420,
        path: 'ejryHtu@W?Ixj@K|TWzQi@zOaAvOkAfOoBf\\g@hYItmBE|LMlLg@fQyI~cCKbH?jHHlHZbLbAdNvBtPnUlyAnHpc@vCfPvBrIbGlRjAjGz@~Cp@pAdCtCvBbAjJz@lBWvDoBhNkKZzA',
        stops: [
          {
            id: 'StratfordInternational',
            name: 'Stratford International',
            coordinates: {
              lat: 51.544828,
              lon: -0.00875,
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
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'NationalRailSE',
              headsign: 'St Pancras International',
              scheduled_time: '2022-07-18T09:47:00+01:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'travel_affected',
              title: 'Amended service',
              description:
                'Extreme Weather: Extreme Heat to affect England and Wales from Sunday 17 to Tuesday 19 July',
              service_ids: ['NationalRailSE'],
            },
          ],
          leg_departure_time: '2022-07-18T09:47:00+01:00',
          leg_arrival_time: '2022-07-18T09:54:00+01:00',
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
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5a2b29efb556588bc6ba282fd72fb542b96d387403b86e3c0b927418/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/c3dc58616e7d9a793e1b4b85a19ad88a3673a52137672cbcd0bbcb96/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/403add017870210937ae9f459196c7fbe12b09e5dd4dac3c43f67c65/d324a6fb/@2x.png',
                  width: 16,
                  height: 13,
                  ui_role: 'vehicle_compact',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png',
                  width: 13,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/e9b75e4fa00a57b15a53092100e1872a1995f2551b2084176ff06b6b/d324a6fb/@2x.png',
                  width: 24,
                  height: 15,
                  ui_role: 'vehicle',
                },
                {
                  url: 'https://d1a19ub1xx68i2.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            images: [
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/46f5ed6057ce3f31521ea3df78d1f5e491d826a7a099f20b2cea37ca/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/13b426c1537effebd0483a88aa93c51fe21c8485e25eff157db9b35a/d324a6fb/@2x.png',
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
        duration_seconds: 406,
        path: 'azoyHbxW????UeFFZnIuK??????????',
        updatable_detail: {
          leg_departure_time: '2022-07-18T09:54:00+01:00',
          leg_arrival_time: '2022-07-18T10:00:46+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 300,
        path: '_poyHbeWBAZfCb@pE`@tF\\tDnBfPX|DJnBNbBf@jDh@jCLn@|@xCx@dB`AjAhAjAtAn@`BhAjCnAjDvCRj@hBpEzAnDbB~BhC|BtBnArBl@lB\\jCVjMf@nEE~A[bDiAf@EAw@',
        stops: [
          {
            id: 'KingsCrossStPancras',
            name: "King's Cross St Pancras",
            coordinates: {
              lat: 51.530397,
              lon: -0.123858,
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
            id: 'WarrenStreet',
            name: 'Warren Street',
            coordinates: {
              lat: 51.524512,
              lon: -0.138272,
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
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Victoria',
              frequency_seconds_range: [132, 132],
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
          leg_departure_time: '2022-07-18T10:01:00+01:00',
          leg_arrival_time: '2022-07-18T10:06:00+01:00',
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
                url: 'https://d1a19ub1xx68i2.cloudfront.net/b51358cbb907a30424e854fdbc695e6f31090be51b4640d91dac171a/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d1a19ub1xx68i2.cloudfront.net/a5a9871df380f48a096917b6711b75d3549aea7edb06859c9ffd7401/d324a6fb/@2x.png',
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
          front: true,
          middle: false,
          back: false,
        },
        direction_description: 'Southbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 616,
        path: 'sqlyHfpZMBEi@A]CWEq@GcA?CE{@EcAOoCG{AI{AQ}C?EEMCWCIGuAASCSBQC_@CIKiBCe@AUAW@KAKASASE}@?EAYEg@GwACg@?KC]FG',
        updatable_detail: {
          leg_departure_time: '2022-07-18T10:06:00+01:00',
          leg_arrival_time: '2022-07-18T10:16:16+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'OxfordCircus_E7',
            stop_id: 'OxfordCircus',
            coordinates: {
              lat: 51.5152975,
              lon: -0.1410017,
            },
            name: 'Oxford Street (East)',
            short_name: '7',
          },
          alternate_exits: [
            {
              id: 'OxfordCircus_E1',
              stop_id: 'OxfordCircus',
              coordinates: {
                lat: 51.5154363,
                lon: -0.1418861,
              },
              name: 'Regent Street (North)',
              short_name: '1',
            },
            {
              id: 'OxfordCircus_E2',
              stop_id: 'OxfordCircus',
              coordinates: {
                lat: 51.5151875,
                lon: -0.1417613,
              },
              name: 'Oxford Street (East)',
              short_name: '2',
            },
            {
              id: 'OxfordCircus_E3',
              stop_id: 'OxfordCircus',
              coordinates: {
                lat: 51.5151325,
                lon: -0.1421653,
              },
              name: 'Regent Street (South)',
              short_name: '3',
            },
            {
              id: 'OxfordCircus_E4',
              stop_id: 'OxfordCircus',
              coordinates: {
                lat: 51.5153979,
                lon: -0.1422163,
              },
              name: 'Oxford Street (West)',
              short_name: '4',
            },
            {
              id: 'OxfordCircus_E5',
              stop_id: 'OxfordCircus',
              coordinates: {
                lat: 51.5152436,
                lon: -0.1414893,
              },
              name: 'Regent Street',
              short_name: '5',
            },
            {
              id: 'OxfordCircus_E6',
              stop_id: 'OxfordCircus',
              coordinates: {
                lat: 51.5152868,
                lon: -0.1411867,
              },
              name: 'Argyll Street',
              short_name: '6',
            },
            {
              id: 'OxfordCircus_E8',
              stop_id: 'OxfordCircus',
              coordinates: {
                lat: 51.5150294,
                lon: -0.1409806,
              },
              name: 'Argyll Street',
              short_name: '8',
            },
          ],
          duration_seconds: 170,
        },
      },
    ],
    route_departure_time: '2022-07-18T09:35:29+01:00',
    route_arrival_time: '2022-07-18T10:16:16+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1ODEzMzMzOCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTEyNTQsXCJkdXJhdGlvblwiOjI3NzAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUxNjIxNiwtMC4xMzI4MTdcIn0sXCJlbnZpcm9ubWVudFwiOlwic3RhZ2luZ1wiLFwianJfaW5kZXhcIjo0LFwibGVnc1wiOlt7XCJkaXN0YW5jZVwiOjYzNixcImR1cmF0aW9uXCI6NjcyLFwiZWNcIjpcIjUxLjU0NTQ3LC0wLjAwODQ2XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzE5MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjU0NTI1LC0wLjAxMzAxXCIsXCJ0b19leGl0XCI6XCJTdHJhdGZvcmRJbnRlcm5hdGlvbmFsX0U1MzQ5XCJ9LHtcImR1cmF0aW9uXCI6NDIwLFwiZW5kXCI6XCJTdFBhbmNyYXNJbnRlcm5hdGlvbmFsXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJOYXRpb25hbFJhaWxTRVwiXSxcInN0YXJ0XCI6XCJTdHJhdGZvcmRJbnRlcm5hdGlvbmFsXCIsXCJzdG9wX2NvdW50XCI6MixcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fU3RyYXRmb3JkSW50ZXJuYXRpb25hbF9OYXRpb25hbFJhaWxcIixcIlBsYXRmb3JtX1N0UGFuY3Jhc0ludGVybmF0aW9uYWxfRXVyb3N0YXJcIl19LHtcImRpc3RhbmNlXCI6MzI1LFwiZHVyYXRpb25cIjo0MDYsXCJlY1wiOlwiNTEuNTMwNCwtMC4xMjM4NlwiLFwiaW5fc3RhdGlvblwiOlwiMS80MDZcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MzIwMSwtMC4xMjY5XCJ9LHtcImR1cmF0aW9uXCI6MzAwLFwiZW5kXCI6XCJPeGZvcmRDaXJjdXNcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlZpY3RvcmlhXCJdLFwic3RhcnRcIjpcIktpbmdzQ3Jvc3NTdFBhbmNyYXNcIixcInN0b3BfY291bnRcIjo0LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9LaW5nc0Nyb3NzU3RQYW5jcmFzX1ZfZFdcIixcIlBsYXRmb3JtX094Zm9yZENpcmN1c19WX2RTXCJdfSx7XCJkaXN0YW5jZVwiOjY0NSxcImR1cmF0aW9uXCI6NjE2LFwiZWNcIjpcIjUxLjUxNjIxLC0wLjEzMjgzXCIsXCJmcm9tX2V4aXRcIjpcIk94Zm9yZENpcmN1c19FN1wiLFwiaW5fc3RhdGlvblwiOlwiMi8xNzBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MTUzLC0wLjE0MVwifV0sXCJwcmljZV9wZW5jZVwiOjY3MCxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImNiMjE5OTY2LTYyZGMtNDRhOC1hZjRkLTRkY2NmNWE4MWRkZlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjU0NTIxNCwtMC4wMTMyNlwifSxcInRpbWVcIjpcIjIwMjItMDctMThUMDk6MzU6MjkrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.USzaH2lHggxSV8NnfWJjU11c-KOlksw5IZTaUs2YYQ0',
  },
] as Route[]
