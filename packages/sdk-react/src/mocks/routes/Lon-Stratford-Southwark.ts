import type { Route } from '@citymapper/api/@types'

export default [
  {
    start: {
      coordinates: {
        lat: 51.54641,
        lon: -0.009954,
      },
    },
    end: {
      coordinates: {
        lat: 51.502792,
        lon: -0.105698,
      },
    },
    distance_meters: 478,
    duration_seconds: 2134,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 190,
        path: 'etryHl}@MWM[LUBER[JOAI@CFc@F}@Bc@Bs@`@AD?H?d@@TA@NH?H??B?@QA',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:33:33+01:00',
          leg_arrival_time: '2022-06-16T16:36:43+01:00',
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
              frequency_seconds_range: [507, 507],
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
          leg_departure_time: '2022-06-16T16:43:00+01:00',
          leg_arrival_time: '2022-06-16T16:45:00+01:00',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/c5347dfe5d15f446310a015ba2fdd38a477f20c4b31851eda4ed1e50/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f5f026fe49cd6d1e285d68b5638a23e55fe42d64c6ed4f6ac218f66a/d324a6fb/@2x.png',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/2ce3a2c6274a482874eba939740507160683e2d43b4902d948087880/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/8768de61b035211677738e1c0dd3be8cab705c36063b1406de29cd7a/d324a6fb/@2x.png',
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
        duration_seconds: 165,
        path: 'atqyHhS????????????',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:45:00+01:00',
          leg_arrival_time: '2022-06-16T16:47:45+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1080,
        path: 'atqyHhSnAXrKsIr@e@bAgApB}ChAwAdAiA`@[tFoDpAs@r@_@pE_BfAm@tFiEdCqAfA_@dAMx@AvDl@|AKpCs@bAIDAbOQvOl@rD\\tBFxG]xCa@lCm@v@SfDqAnC}AlDeCnCqCjDeELOvB{B|AsAjBgAlF}BvGwDnAm@jBq@z@S~ACzCBtCh@~DrA|CvAdG`EtEzEzBtDdA`CdH~QH^z@hDTjALrAJzECpBSjGs@xHeBdN{AnHoBrHsBrG}@|Dk@fDWvBsDxi@QpDcBn]g@hIE~Hh@vGxA|GrBrFjCfDj@`BrHd_@vLpg@|AdPAjM?dBNz]^~q@B|@@Vt@hKH~E}AvQy@hNoA`FaFhLaFfKqGbMsDvIkErJiAxDoApGQlBCzA?v@C|OHvARlB|BtL`@jEb@j[e@zh@n@@',
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
            id: 'WestHam',
            name: 'West Ham',
            coordinates: {
              lat: 51.528182,
              lon: 0.00504,
            },
          },
          {
            id: 'CanningTown',
            name: 'Canning Town',
            coordinates: {
              lat: 51.514376,
              lon: 0.008454,
            },
          },
          {
            id: 'NorthGreenwich',
            name: 'North Greenwich',
            coordinates: {
              lat: 51.500182,
              lon: 0.003607,
            },
          },
          {
            id: 'CanaryWharf',
            name: 'Canary Wharf',
            coordinates: {
              lat: 51.50363,
              lon: -0.0195,
            },
          },
          {
            id: 'CanadaWater',
            name: 'Canada Water',
            coordinates: {
              lat: 51.497889,
              lon: -0.049706,
            },
          },
          {
            id: 'Bermondsey',
            name: 'Bermondsey',
            coordinates: {
              lat: 51.497949,
              lon: -0.063651,
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
            id: 'Southwark',
            name: 'Southwark',
            coordinates: {
              lat: 51.503843,
              lon: -0.105092,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Jubilee',
              frequency_seconds_range: [120, 120],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Jubilee'],
            },
          ],
          leg_departure_time: '2022-06-16T16:50:00+01:00',
          leg_arrival_time: '2022-06-16T17:08:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Jubilee',
            name: 'Jubilee',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/ccfa974722e4804ade7e6f87284716e5a02f06d2a1ef0df719af618e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d6c2fbdf8d8970167f00b374c960e63122f0ba46408642a02df497b9/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#868F98',
            background_color: '#868F98',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: true,
        },
        direction_description: 'Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 350,
        path: '{ijyHzmST???L?HG@I?GB?n@BdABbA?T@?V?`@?jAu@?',
        updatable_detail: {
          leg_departure_time: '2022-06-16T17:08:00+01:00',
          leg_arrival_time: '2022-06-16T17:13:50+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Southwark_Exit',
            stop_id: 'Southwark',
            coordinates: {
              lat: 51.5038167,
              lon: -0.1047782,
            },
          },
          duration_seconds: 165,
        },
      },
    ],
    route_departure_time: '2022-06-16T16:33:33+01:00',
    route_arrival_time: '2022-06-16T17:13:50+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTM5MzYxNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA4MjUsXCJkdXJhdGlvblwiOjIxMzQsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMjc5MiwtMC4xMDU2OThcIn0sXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MjMwLFwiZHVyYXRpb25cIjoxOTAsXCJlY1wiOlwiNTEuNTQ1NjMsLTAuMDA4NDZcIixcImluX3N0YXRpb25cIjpcIjAvMzBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDY0MywtMC4wMDk5OVwiLFwidG9fZXhpdFwiOlwiU3RyYXRmb3JkSW50ZXJuYXRpb25hbERMUl9FNTM0NFwifSx7XCJkdXJhdGlvblwiOjEyMCxcImVuZFwiOlwiU3RyYXRmb3JkXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJETFJcIl0sXCJzdGFydFwiOlwiU3RyYXRmb3JkSW50ZXJuYXRpb25hbERMUlwiLFwic3RvcF9jb3VudFwiOjIsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1N0cmF0Zm9yZEludGVybmF0aW9uYWxETFJfRExSXCIsXCJQbGF0Zm9ybV9TdHJhdGZvcmRfRF9kU0VcIl19LHtcImRpc3RhbmNlXCI6MCxcImR1cmF0aW9uXCI6MTY1LFwiZWNcIjpcIjUxLjU0MTI5LC0wLjAwMzI1XCIsXCJpbl9zdGF0aW9uXCI6XCIxLzE2NVwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjUxLjU0MTI5LC0wLjAwMzI1XCJ9LHtcImR1cmF0aW9uXCI6MTA4MCxcImVuZFwiOlwiU291dGh3YXJrXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJKdWJpbGVlXCJdLFwic3RhcnRcIjpcIlN0cmF0Zm9yZFwiLFwic3RvcF9jb3VudFwiOjksXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1N0cmF0Zm9yZF9KX2RTXCIsXCJQbGF0Zm9ybV9Tb3V0aHdhcmtfSl9kV1wiXX0se1wiZGlzdGFuY2VcIjoyNDgsXCJkdXJhdGlvblwiOjM1MCxcImVjXCI6XCI1MS41MDI3OSwtMC4xMDUzN1wiLFwiZnJvbV9leGl0XCI6XCJTb3V0aHdhcmtfRXhpdFwiLFwiaW5fc3RhdGlvblwiOlwiMi8xNjVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MDM4MiwtMC4xMDQ3OFwifV0sXCJwcmljZV9wZW5jZVwiOjI2MCxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImFhODI4ZWY2LTc0ZGEtNDdiZi05NDJkLWU1ZDMyMTRmNzRlNlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjU0NjQxLC0wLjAwOTk1NFwifSxcInRpbWVcIjpcIjIwMjItMDYtMTZUMTY6MzM6MzMrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.ATXipFs30QQf5QNa4U0aV3LS5SB8M9-psNYNtSMFP-8',
  },
  {
    start: {
      coordinates: {
        lat: 51.54641,
        lon: -0.009954,
      },
    },
    end: {
      coordinates: {
        lat: 51.502792,
        lon: -0.105698,
      },
    },
    distance_meters: 1168,
    duration_seconds: 2303,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 833,
        path: 'etryHl}@MWM[LUBER[JOAI@CFc@F}@Bc@Bs@`@AD?H?d@@TA@NH?H?H@B?@MbEy@??@}Ij@B|B@|BaDf@i@PSPMTKBQQB?[A_@??b@C',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:33:33+01:00',
          leg_arrival_time: '2022-06-16T16:47:26+01:00',
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
          duration_seconds: 225,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1080,
        path: 'atqyHhSnAXrKsIr@e@bAgApB}ChAwAdAiA`@[tFoDpAs@r@_@pE_BfAm@tFiEdCqAfA_@dAMx@AvDl@|AKpCs@bAIDAbOQvOl@rD\\tBFxG]xCa@lCm@v@SfDqAnC}AlDeCnCqCjDeELOvB{B|AsAjBgAlF}BvGwDnAm@jBq@z@S~ACzCBtCh@~DrA|CvAdG`EtEzEzBtDdA`CdH~QH^z@hDTjALrAJzECpBSjGs@xHeBdN{AnHoBrHsBrG}@|Dk@fDWvBsDxi@QpDcBn]g@hIE~Hh@vGxA|GrBrFjCfDj@`BrHd_@vLpg@|AdPAjM?dBNz]^~q@B|@@Vt@hKH~E}AvQy@hNoA`FaFhLaFfKqGbMsDvIkErJiAxDoApGQlBCzA?v@C|OHvARlB|BtL`@jEb@j[e@zh@n@@',
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
            id: 'WestHam',
            name: 'West Ham',
            coordinates: {
              lat: 51.528182,
              lon: 0.00504,
            },
          },
          {
            id: 'CanningTown',
            name: 'Canning Town',
            coordinates: {
              lat: 51.514376,
              lon: 0.008454,
            },
          },
          {
            id: 'NorthGreenwich',
            name: 'North Greenwich',
            coordinates: {
              lat: 51.500182,
              lon: 0.003607,
            },
          },
          {
            id: 'CanaryWharf',
            name: 'Canary Wharf',
            coordinates: {
              lat: 51.50363,
              lon: -0.0195,
            },
          },
          {
            id: 'CanadaWater',
            name: 'Canada Water',
            coordinates: {
              lat: 51.497889,
              lon: -0.049706,
            },
          },
          {
            id: 'Bermondsey',
            name: 'Bermondsey',
            coordinates: {
              lat: 51.497949,
              lon: -0.063651,
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
            id: 'Southwark',
            name: 'Southwark',
            coordinates: {
              lat: 51.503843,
              lon: -0.105092,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Jubilee',
              frequency_seconds_range: [120, 120],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Jubilee'],
            },
          ],
          leg_departure_time: '2022-06-16T16:50:00+01:00',
          leg_arrival_time: '2022-06-16T17:08:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Jubilee',
            name: 'Jubilee',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/ccfa974722e4804ade7e6f87284716e5a02f06d2a1ef0df719af618e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d6c2fbdf8d8970167f00b374c960e63122f0ba46408642a02df497b9/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#868F98',
            background_color: '#868F98',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: true,
        },
        direction_description: 'Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 350,
        path: '{ijyHzmST???L?HG@I?GB?n@BdABbA?T@?V?`@?jAu@?',
        updatable_detail: {
          leg_departure_time: '2022-06-16T17:08:00+01:00',
          leg_arrival_time: '2022-06-16T17:13:50+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Southwark_Exit',
            stop_id: 'Southwark',
            coordinates: {
              lat: 51.5038167,
              lon: -0.1047782,
            },
          },
          duration_seconds: 165,
        },
      },
    ],
    route_departure_time: '2022-06-16T16:33:33+01:00',
    route_arrival_time: '2022-06-16T17:13:50+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTM5MzYxNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA4MjUsXCJkdXJhdGlvblwiOjIzMDMsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMjc5MiwtMC4xMDU2OThcIn0sXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6OTIwLFwiZHVyYXRpb25cIjo4MzMsXCJlY1wiOlwiNTEuNTQyNCwtMC4wMDQ3M1wiLFwiaW5fc3RhdGlvblwiOlwiMC8yMjVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDY0MywtMC4wMDk5OVwiLFwidG9fZXhpdFwiOlwiU3RyYXRmb3JkX0UxXCJ9LHtcImR1cmF0aW9uXCI6MTA4MCxcImVuZFwiOlwiU291dGh3YXJrXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJKdWJpbGVlXCJdLFwic3RhcnRcIjpcIlN0cmF0Zm9yZFwiLFwic3RvcF9jb3VudFwiOjksXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1N0cmF0Zm9yZF9KX2RTXCIsXCJQbGF0Zm9ybV9Tb3V0aHdhcmtfSl9kV1wiXX0se1wiZGlzdGFuY2VcIjoyNDgsXCJkdXJhdGlvblwiOjM1MCxcImVjXCI6XCI1MS41MDI3OSwtMC4xMDUzN1wiLFwiZnJvbV9leGl0XCI6XCJTb3V0aHdhcmtfRXhpdFwiLFwiaW5fc3RhdGlvblwiOlwiMi8xNjVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MDM4MiwtMC4xMDQ3OFwifV0sXCJwcmljZV9wZW5jZVwiOjI2MCxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImFhODI4ZWY2LTc0ZGEtNDdiZi05NDJkLWU1ZDMyMTRmNzRlNlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjU0NjQxLC0wLjAwOTk1NFwifSxcInRpbWVcIjpcIjIwMjItMDYtMTZUMTY6MzM6MzMrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ._C3m_9BDT0BTJPIOEpAYjYXCDmdtbiLZ_GEf28pmk7s',
  },
  {
    start: {
      coordinates: {
        lat: 51.54641,
        lon: -0.009954,
      },
    },
    end: {
      coordinates: {
        lat: 51.502792,
        lon: -0.105698,
      },
    },
    distance_meters: 787,
    duration_seconds: 2270,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£4.25',
      amount: '4.25',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 142,
        path: 'etryHl}@MWM[LUBER[JOAI@CFc@F}@Bc@Bs@`@A?G?I?I?E?KJ?Z?@M',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:33:33+01:00',
          leg_arrival_time: '2022-06-16T16:35:55+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 120,
        path: 'kpryHjq@A\\z@?ExMn@zA~GVzAqB~@cBbMoTu@iCyCkFkCgCoEg@?D',
        stops: [
          {
            id: '490002268ZZ',
            name: 'Stratford International Station',
            coordinates: {
              lat: 51.545824,
              lon: -0.008057,
            },
            indicator_text: 'D',
          },
          {
            id: '490020130S',
            name: 'Westfield Avenue',
            coordinates: {
              lat: 51.543159,
              lon: -0.009991,
            },
            indicator_text: 'A',
          },
          {
            id: '490019793S',
            name: 'Stratford City Bus Station',
            coordinates: {
              lat: 51.54362,
              lon: -0.003927,
            },
            indicator_text: 'S',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus97',
              frequency_seconds_range: [447, 447],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus97'],
            },
          ],
          leg_departure_time: '2022-06-16T16:39:00+01:00',
          leg_arrival_time: '2022-06-16T16:41:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus97',
            name: '97',
            vehicle_types: ['bus'],
            brand: {
              id: 'LondonBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
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
            color: '#DC241F',
            background_color: '#C2322E',
            text_color: '#FFFFFF',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 369,
        path: 'sbryHpWAQ@?DAHAHAJAB?JEFAJ@HJH@P?RJLFFBPJ@@PLJlABr@b@C',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:41:00+01:00',
          leg_arrival_time: '2022-06-16T16:47:09+01:00',
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
          duration_seconds: 225,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1080,
        path: 'atqyHhSnAXrKsIr@e@bAgApB}ChAwAdAiA`@[tFoDpAs@r@_@pE_BfAm@tFiEdCqAfA_@dAMx@AvDl@|AKpCs@bAIDAbOQvOl@rD\\tBFxG]xCa@lCm@v@SfDqAnC}AlDeCnCqCjDeELOvB{B|AsAjBgAlF}BvGwDnAm@jBq@z@S~ACzCBtCh@~DrA|CvAdG`EtEzEzBtDdA`CdH~QH^z@hDTjALrAJzECpBSjGs@xHeBdN{AnHoBrHsBrG}@|Dk@fDWvBsDxi@QpDcBn]g@hIE~Hh@vGxA|GrBrFjCfDj@`BrHd_@vLpg@|AdPAjM?dBNz]^~q@B|@@Vt@hKH~E}AvQy@hNoA`FaFhLaFfKqGbMsDvIkErJiAxDoApGQlBCzA?v@C|OHvARlB|BtL`@jEb@j[e@zh@n@@',
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
            id: 'WestHam',
            name: 'West Ham',
            coordinates: {
              lat: 51.528182,
              lon: 0.00504,
            },
          },
          {
            id: 'CanningTown',
            name: 'Canning Town',
            coordinates: {
              lat: 51.514376,
              lon: 0.008454,
            },
          },
          {
            id: 'NorthGreenwich',
            name: 'North Greenwich',
            coordinates: {
              lat: 51.500182,
              lon: 0.003607,
            },
          },
          {
            id: 'CanaryWharf',
            name: 'Canary Wharf',
            coordinates: {
              lat: 51.50363,
              lon: -0.0195,
            },
          },
          {
            id: 'CanadaWater',
            name: 'Canada Water',
            coordinates: {
              lat: 51.497889,
              lon: -0.049706,
            },
          },
          {
            id: 'Bermondsey',
            name: 'Bermondsey',
            coordinates: {
              lat: 51.497949,
              lon: -0.063651,
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
            id: 'Southwark',
            name: 'Southwark',
            coordinates: {
              lat: 51.503843,
              lon: -0.105092,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Jubilee',
              frequency_seconds_range: [120, 120],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Jubilee'],
            },
          ],
          leg_departure_time: '2022-06-16T16:50:00+01:00',
          leg_arrival_time: '2022-06-16T17:08:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Jubilee',
            name: 'Jubilee',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/ccfa974722e4804ade7e6f87284716e5a02f06d2a1ef0df719af618e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d6c2fbdf8d8970167f00b374c960e63122f0ba46408642a02df497b9/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#868F98',
            background_color: '#868F98',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: true,
        },
        direction_description: 'Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 350,
        path: '{ijyHzmST???L?HG@I?GB?n@BdABbA?T@?V?`@?jAu@?',
        updatable_detail: {
          leg_departure_time: '2022-06-16T17:08:00+01:00',
          leg_arrival_time: '2022-06-16T17:13:50+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Southwark_Exit',
            stop_id: 'Southwark',
            coordinates: {
              lat: 51.5038167,
              lon: -0.1047782,
            },
          },
          duration_seconds: 165,
        },
      },
    ],
    route_departure_time: '2022-06-16T16:33:33+01:00',
    route_arrival_time: '2022-06-16T17:13:50+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTM5MzYxNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA4MjUsXCJkdXJhdGlvblwiOjIyNzAsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMjc5MiwtMC4xMDU2OThcIn0sXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTk0LFwiZHVyYXRpb25cIjoxNDIsXCJlY1wiOlwiNTEuNTQ1ODIsLTAuMDA4MDZcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDY0MywtMC4wMDk5OVwifSx7XCJkdXJhdGlvblwiOjEyMCxcImVuZFwiOlwiNDkwMDE5NzkzU1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzOTdcIl0sXCJzdGFydFwiOlwiNDkwMDAyMjY4WlpcIixcInN0b3BfY291bnRcIjozfSx7XCJkaXN0YW5jZVwiOjM0NSxcImR1cmF0aW9uXCI6MzY5LFwiZWNcIjpcIjUxLjU0MjQsLTAuMDA0NzNcIixcImluX3N0YXRpb25cIjpcIjAvMjI1XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTQzNjIsLTAuMDAzOTNcIixcInRvX2V4aXRcIjpcIlN0cmF0Zm9yZF9FMVwifSx7XCJkdXJhdGlvblwiOjEwODAsXCJlbmRcIjpcIlNvdXRod2Fya1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiSnViaWxlZVwiXSxcInN0YXJ0XCI6XCJTdHJhdGZvcmRcIixcInN0b3BfY291bnRcIjo5LFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9TdHJhdGZvcmRfSl9kU1wiLFwiUGxhdGZvcm1fU291dGh3YXJrX0pfZFdcIl19LHtcImRpc3RhbmNlXCI6MjQ4LFwiZHVyYXRpb25cIjozNTAsXCJlY1wiOlwiNTEuNTAyNzksLTAuMTA1MzdcIixcImZyb21fZXhpdFwiOlwiU291dGh3YXJrX0V4aXRcIixcImluX3N0YXRpb25cIjpcIjIvMTY1XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNTEuNTAzODIsLTAuMTA0NzhcIn1dLFwicHJpY2VfcGVuY2VcIjo0MjUsXCJyZWdpb25cIjpcInVrLWxvbmRvblwiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCJhYTgyOGVmNi03NGRhLTQ3YmYtOTQyZC1lNWQzMjE0Zjc0ZTZcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI1MS41NDY0MSwtMC4wMDk5NTRcIn0sXCJ0aW1lXCI6XCIyMDIyLTA2LTE2VDE2OjMzOjMzKzAxOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoidWstbG9uZG9uIn0.TCN00CnGC5_lSM-oIyyhk9GazrM4NEtzYvLI2LxTCPo',
  },
  {
    start: {
      coordinates: {
        lat: 51.54641,
        lon: -0.009954,
      },
    },
    end: {
      coordinates: {
        lat: 51.502792,
        lon: -0.105698,
      },
    },
    distance_meters: 817,
    duration_seconds: 2271,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£4.25',
      amount: '4.25',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 201,
        path: 'etryHl}@MWM[LUBER[JOAI@CFc@F}@Bc@Bs@`@AD?H?d@@TA?C?K?G?G?M?M?E??@C@A@E@?L??M?M?e@?gAIA',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:33:33+01:00',
          leg_arrival_time: '2022-06-16T16:36:54+01:00',
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 132,
        path: '}nryHll@fNqT',
        stops: [
          {
            id: '490018554E',
            name: 'Stratford International Station',
            coordinates: {
              lat: 51.545586,
              lon: -0.007274,
            },
            indicator_text: 'F',
          },
          {
            id: '490019793X',
            name: 'Stratford City Bus Station',
            coordinates: {
              lat: 51.543153,
              lon: -0.003819,
            },
            indicator_text: 'X',
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'LondonBus108',
              frequency_seconds_range: [360, 360],
              time_status: 'unknown',
            },
            {
              type: 'frequency',
              service_id: 'LondonBus339',
              frequency_seconds_range: [360, 360],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['LondonBus108', 'LondonBus339'],
            },
          ],
          leg_departure_time: '2022-06-16T16:46:48+01:00',
          leg_arrival_time: '2022-06-16T16:49:00+01:00',
        },
        vehicle_types: ['bus'],
        services: [
          {
            id: 'LondonBus108',
            name: '108',
            vehicle_types: ['bus'],
            brand: {
              id: 'LondonBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
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
            color: '#DC241F',
            background_color: '#C2322E',
            text_color: '#FFFFFF',
          },
          {
            id: 'LondonBus339',
            name: '339',
            vehicle_types: ['bus'],
            brand: {
              id: 'LondonBus',
              name: 'Bus',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  has_space_for_text: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
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
                  url: 'https://d3440lt1d9mf95.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
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
            color: '#DC241F',
            background_color: '#C2322E',
            text_color: '#FFFFFF',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 328,
        path: 'u_ryHzV?BP?RJLFFBPJ@@PLJlABr@b@C',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:49:00+01:00',
          leg_arrival_time: '2022-06-16T16:54:28+01:00',
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
          duration_seconds: 225,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 1080,
        path: 'atqyHhSnAXrKsIr@e@bAgApB}ChAwAdAiA`@[tFoDpAs@r@_@pE_BfAm@tFiEdCqAfA_@dAMx@AvDl@|AKpCs@bAIDAbOQvOl@rD\\tBFxG]xCa@lCm@v@SfDqAnC}AlDeCnCqCjDeELOvB{B|AsAjBgAlF}BvGwDnAm@jBq@z@S~ACzCBtCh@~DrA|CvAdG`EtEzEzBtDdA`CdH~QH^z@hDTjALrAJzECpBSjGs@xHeBdN{AnHoBrHsBrG}@|Dk@fDWvBsDxi@QpDcBn]g@hIE~Hh@vGxA|GrBrFjCfDj@`BrHd_@vLpg@|AdPAjM?dBNz]^~q@B|@@Vt@hKH~E}AvQy@hNoA`FaFhLaFfKqGbMsDvIkErJiAxDoApGQlBCzA?v@C|OHvARlB|BtL`@jEb@j[e@zh@n@@',
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
            id: 'WestHam',
            name: 'West Ham',
            coordinates: {
              lat: 51.528182,
              lon: 0.00504,
            },
          },
          {
            id: 'CanningTown',
            name: 'Canning Town',
            coordinates: {
              lat: 51.514376,
              lon: 0.008454,
            },
          },
          {
            id: 'NorthGreenwich',
            name: 'North Greenwich',
            coordinates: {
              lat: 51.500182,
              lon: 0.003607,
            },
          },
          {
            id: 'CanaryWharf',
            name: 'Canary Wharf',
            coordinates: {
              lat: 51.50363,
              lon: -0.0195,
            },
          },
          {
            id: 'CanadaWater',
            name: 'Canada Water',
            coordinates: {
              lat: 51.497889,
              lon: -0.049706,
            },
          },
          {
            id: 'Bermondsey',
            name: 'Bermondsey',
            coordinates: {
              lat: 51.497949,
              lon: -0.063651,
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
            id: 'Southwark',
            name: 'Southwark',
            coordinates: {
              lat: 51.503843,
              lon: -0.105092,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Jubilee',
              frequency_seconds_range: [120, 120],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['Jubilee'],
            },
          ],
          leg_departure_time: '2022-06-16T16:56:00+01:00',
          leg_arrival_time: '2022-06-16T17:14:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'Jubilee',
            name: 'Jubilee',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/ccfa974722e4804ade7e6f87284716e5a02f06d2a1ef0df719af618e/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/d6c2fbdf8d8970167f00b374c960e63122f0ba46408642a02df497b9/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#868F98',
            background_color: '#868F98',
            text_color: '#FFFFFF',
          },
        ],
        best_boarding_sections: {
          front: true,
          middle: false,
          back: true,
        },
        direction_description: 'Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 350,
        path: '{ijyHzmST???L?HG@I?GB?n@BdABbA?T@?V?`@?jAu@?',
        updatable_detail: {
          leg_departure_time: '2022-06-16T17:14:00+01:00',
          leg_arrival_time: '2022-06-16T17:19:50+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Southwark_Exit',
            stop_id: 'Southwark',
            coordinates: {
              lat: 51.5038167,
              lon: -0.1047782,
            },
          },
          duration_seconds: 165,
        },
      },
    ],
    route_departure_time: '2022-06-16T16:33:33+01:00',
    route_arrival_time: '2022-06-16T17:19:50+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTM5MzYxNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA4MjUsXCJkdXJhdGlvblwiOjIyNzEsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMjc5MiwtMC4xMDU2OThcIn0sXCJqcl9pbmRleFwiOjMsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6Mjg0LFwiZHVyYXRpb25cIjoyMDEsXCJlY1wiOlwiNTEuNTQ1NTksLTAuMDA3MjdcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDY0MywtMC4wMDk5OVwifSx7XCJkdXJhdGlvblwiOjEzMixcImVuZFwiOlwiNDkwMDE5NzkzWFwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiTG9uZG9uQnVzMTA4XCIsXCJMb25kb25CdXMzMzlcIl0sXCJzdGFydFwiOlwiNDkwMDE4NTU0RVwiLFwic3RvcF9jb3VudFwiOjJ9LHtcImRpc3RhbmNlXCI6Mjg1LFwiZHVyYXRpb25cIjozMjgsXCJlY1wiOlwiNTEuNTQyNCwtMC4wMDQ3M1wiLFwiaW5fc3RhdGlvblwiOlwiMC8yMjVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDMxNSwtMC4wMDM4MlwiLFwidG9fZXhpdFwiOlwiU3RyYXRmb3JkX0UxXCJ9LHtcImR1cmF0aW9uXCI6MTA4MCxcImVuZFwiOlwiU291dGh3YXJrXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJKdWJpbGVlXCJdLFwic3RhcnRcIjpcIlN0cmF0Zm9yZFwiLFwic3RvcF9jb3VudFwiOjksXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1N0cmF0Zm9yZF9KX2RTXCIsXCJQbGF0Zm9ybV9Tb3V0aHdhcmtfSl9kV1wiXX0se1wiZGlzdGFuY2VcIjoyNDgsXCJkdXJhdGlvblwiOjM1MCxcImVjXCI6XCI1MS41MDI3OSwtMC4xMDUzN1wiLFwiZnJvbV9leGl0XCI6XCJTb3V0aHdhcmtfRXhpdFwiLFwiaW5fc3RhdGlvblwiOlwiMi8xNjVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MDM4MiwtMC4xMDQ3OFwifV0sXCJwcmljZV9wZW5jZVwiOjQyNSxcInJlZ2lvblwiOlwidWstbG9uZG9uXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcImFhODI4ZWY2LTc0ZGEtNDdiZi05NDJkLWU1ZDMyMTRmNzRlNlwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjUxLjU0NjQxLC0wLjAwOTk1NFwifSxcInRpbWVcIjpcIjIwMjItMDYtMTZUMTY6MzM6MzMrMDE6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJ1ay1sb25kb24ifQ.rCyuErPg-_wOlQO4SvTA-jxHkd4-XunAvItRYlR0ts4',
  },
  {
    start: {
      coordinates: {
        lat: 51.54641,
        lon: -0.009954,
      },
    },
    end: {
      coordinates: {
        lat: 51.502792,
        lon: -0.105698,
      },
    },
    distance_meters: 1667,
    duration_seconds: 2396,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 743,
        path: 'etryHl}@MWM[LUBER[JOAI@CFc@F}@Bc@Bs@`@AD?H?d@@TA@NH?H?H@B?@MbEy@??@}Ij@B|B@|BaDf@i@PSPMTKBQQB?[A_@??b@C',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:33:33+01:00',
          leg_arrival_time: '2022-06-16T16:45:56+01:00',
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
        duration_seconds: 600,
        path: 'atqyHhS{@`BR\\xB`DfBzD`BtBhGvG~GnIxGnMxJdThErIjEjHlPpVhCtGjClInA`FlBjKjDhW\\pBTt@^nB??f@|Fl@hDlBfI^|B`@rDHfBJpGCdHKjGW`GSpC_@dCkAlFaNbk@m@rDIh@a@bFCrB?dCJbDx@vQjAzYXvC\\xBd@vBbDrLdDbJdIxUdAxB~DrH~RbZbBdBdBxAd@R`@NfD`Ap@ZdCnBx@~@r@nAd@`BPZjBvBL`@H^v@hG~@bFXM',
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
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'Central',
              frequency_seconds_range: [131, 131],
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
          leg_departure_time: '2022-06-16T16:46:00+01:00',
          leg_arrival_time: '2022-06-16T16:56:00+01:00',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/d1f430ba45fc7d134d841d060ecad2b6e2ad60550ec46761e8f55f81/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/7cc6a7780f45d7deacef753dc95309cab47b478ea0a8a9181c0b032c/d324a6fb/@2x.png',
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
          front: true,
          middle: false,
          back: false,
        },
        direction_description: 'Plat 3 Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 170,
        path: 'gelyHvjP??????????????',
        updatable_detail: {
          leg_departure_time: '2022-06-16T16:56:00+01:00',
          leg_arrival_time: '2022-06-16T16:58:50+01:00',
        },
        station_walk_type: 'change_platform',
      },
      {
        travel_mode: 'transit',
        duration_seconds: 180,
        path: 'gelyHvjPYNdE~XbAxIj@zGDfEEdEe@`OE|F@hBHfCHn@Np@\\|@l@~@\\^|F|DxBbCxCfEx@fBZ~@\\h@^`@^XnA`@tBN`@RVXPd@xH|XTf@\\d@b@b@^Vn@PpAZb@FH_C',
        stops: [
          {
            id: 'Bank',
            name: 'Bank',
            coordinates: {
              lat: 51.51332,
              lon: -0.088921,
            },
          },
          {
            id: 'Waterloo',
            name: 'Waterloo',
            coordinates: {
              lat: 51.50343,
              lon: -0.113734,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'frequency',
              service_id: 'WaterlooAndCity',
              frequency_seconds_range: [196, 196],
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['WaterlooAndCity'],
            },
          ],
          leg_departure_time: '2022-06-16T17:00:00+01:00',
          leg_arrival_time: '2022-06-16T17:03:00+01:00',
        },
        vehicle_types: ['metro'],
        services: [
          {
            id: 'WaterlooAndCity',
            name: 'Waterloo & City',
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
                url: 'https://d3440lt1d9mf95.cloudfront.net/5346a41fa8279fdd004803d938ad7b3fd42e432d1e4878d992e63372/d324a6fb/@2x.png',
                width: 24,
                height: 24,
                ui_role: 'service',
              },
              {
                url: 'https://d3440lt1d9mf95.cloudfront.net/39348bc11ec83c53cd8f7834c138fc32441f3b672f923eb4e8c455e4/d324a6fb/@2x.png',
                width: 16,
                height: 16,
                ui_role: 'service',
              },
            ],
            color: '#76D0BD',
            background_color: '#5BC3AD',
            text_color: '#113B92',
          },
        ],
        best_boarding_sections: {
          front: false,
          middle: false,
          back: true,
        },
        direction_description: 'Westbound',
      },
      {
        travel_mode: 'walk',
        duration_seconds: 562,
        path: '{ejyH~uTISBCPSFGLQDGFKX]PSb@i@FGBC?C?A?A?C?A??JMBCJKEKJK@G?K?AHKCIESIWHAHKBIBIBGh@mACKw@kDCIu@}CAG~@u@BCDEa@y@IUK]CMAI?O?yBu@?',
        updatable_detail: {
          leg_departure_time: '2022-06-16T17:03:00+01:00',
          leg_arrival_time: '2022-06-16T17:12:22+01:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'Waterloo_E2_WRoad',
            stop_id: 'Waterloo',
            coordinates: {
              lat: 51.50318,
              lon: -0.1112,
            },
            name: 'Waterloo Road',
            short_name: '2',
          },
          alternate_exits: [
            {
              id: 'Waterloo_E1_Westminster',
              stop_id: 'Waterloo',
              coordinates: {
                lat: 51.5024757,
                lon: -0.1113616,
              },
              name: 'Westminster Bridge Road',
              short_name: '1',
            },
            {
              id: 'Waterloo_E3_StnApproach',
              stop_id: 'Waterloo',
              coordinates: {
                lat: 51.5035073,
                lon: -0.1120337,
              },
              name: 'Station Approach',
              short_name: '3',
            },
            {
              id: 'Waterloo_E4_Tenison',
              stop_id: 'Waterloo',
              coordinates: {
                lat: 51.5040893,
                lon: -0.1128949,
              },
              name: 'Tenison Way',
              short_name: '4',
            },
            {
              id: 'Waterloo_E5_WBridge',
              stop_id: 'Waterloo',
              coordinates: {
                lat: 51.5037911,
                lon: -0.1138323,
              },
              name: 'Waterloo Bridge',
              short_name: '5',
            },
            {
              id: 'Waterloo_E6_SouthBank',
              stop_id: 'Waterloo',
              coordinates: {
                lat: 51.503748,
                lon: -0.115,
              },
              name: 'South Bank',
              short_name: '6',
            },
            {
              id: 'Waterloo_ELU_YorkRd',
              stop_id: 'Waterloo',
              coordinates: {
                lat: 51.503958,
                lon: -0.115179,
              },
              name: 'York Road',
            },
          ],
          duration_seconds: 135,
        },
      },
    ],
    route_departure_time: '2022-06-16T16:33:33+01:00',
    route_arrival_time: '2022-06-16T17:12:22+01:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NTM5MzYxNCwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTA4MjUsXCJkdXJhdGlvblwiOjIzOTYsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjUxLjUwMjc5MiwtMC4xMDU2OThcIn0sXCJqcl9pbmRleFwiOjQsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6OTIwLFwiZHVyYXRpb25cIjo3NDMsXCJlY1wiOlwiNTEuNTQyNCwtMC4wMDQ3M1wiLFwiaW5fc3RhdGlvblwiOlwiMC8xMzVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41NDY0MywtMC4wMDk5OVwiLFwidG9fZXhpdFwiOlwiU3RyYXRmb3JkX0UxXCJ9LHtcImR1cmF0aW9uXCI6NjAwLFwiZW5kXCI6XCJCYW5rXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJDZW50cmFsXCJdLFwic3RhcnRcIjpcIlN0cmF0Zm9yZFwiLFwic3RvcF9jb3VudFwiOjUsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1N0cmF0Zm9yZF9DX2RTV1wiLFwiUGxhdGZvcm1fQmFua19DX2RXXCJdfSx7XCJkaXN0YW5jZVwiOjAsXCJkdXJhdGlvblwiOjE3MCxcImVjXCI6XCI1MS41MTMzMiwtMC4wODg5MlwiLFwiaW5fc3RhdGlvblwiOlwiMS8xNzBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MTMzMiwtMC4wODg5MlwifSx7XCJkdXJhdGlvblwiOjE4MCxcImVuZFwiOlwiV2F0ZXJsb29cIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIldhdGVybG9vQW5kQ2l0eVwiXSxcInN0YXJ0XCI6XCJCYW5rXCIsXCJzdG9wX2NvdW50XCI6MixcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fQmFua19XY19kU1dcIixcIlBsYXRmb3JtX1dhdGVybG9vX1djX2RORVwiXX0se1wiZGlzdGFuY2VcIjo3NDcsXCJkdXJhdGlvblwiOjU2MixcImVjXCI6XCI1MS41MDI3OSwtMC4xMDUzN1wiLFwiZnJvbV9leGl0XCI6XCJXYXRlcmxvb19FMl9XUm9hZFwiLFwiaW5fc3RhdGlvblwiOlwiMi8xMzVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI1MS41MDMxOCwtMC4xMTEyXCJ9XSxcInByaWNlX3BlbmNlXCI6MjYwLFwicmVnaW9uXCI6XCJ1ay1sb25kb25cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiYWE4MjhlZjYtNzRkYS00N2JmLTk0MmQtZTVkMzIxNGY3NGU2XCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNTEuNTQ2NDEsLTAuMDA5OTU0XCJ9LFwidGltZVwiOlwiMjAyMi0wNi0xNlQxNjozMzozMyswMTowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6InVrLWxvbmRvbiJ9.HWP0vhgSdVCuvMJIxz47SSRpEr9KXtM1srFWr-vl3oM',
  },
] as Route[]
