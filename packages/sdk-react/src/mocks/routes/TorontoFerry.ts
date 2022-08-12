import { Route } from '@citymapper/api/@types/Route'

export default [
  {
    start: {
      coordinates: {
        lat: 43.639725,
        lon: -79.376038,
      },
    },
    end: {
      coordinates: {
        lat: 43.630964,
        lon: -79.355848,
      },
    },
    distance_meters: 277,
    duration_seconds: 1950,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$7.50',
      amount: '7.50',
      currency: 'CAD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 201,
        path: 'gljiG|cncNGWGSQ?BYWcAEKA@c@[?C??',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00-04:00',
          leg_arrival_time: '2022-07-01T12:18:21-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'CMStation_jack_layton_ferry_terminal_DefaultExit',
            stop_id: 'CMStation_jack_layton_ferry_terminal',
            coordinates: {
              lat: 43.64037,
              lon: -79.37525,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 900,
        path: 'iojiGh~mcN`w@ilB',
        stops: [
          {
            id: 'CMStation_jack_layton_ferry_terminal',
            name: 'Jack Layton Ferry Terminal',
            coordinates: {
              lat: 43.640365,
              lon: -79.375252,
            },
          },
          {
            id: 'CMStation_wards_island',
            name: "Ward's Island",
            coordinates: {
              lat: 43.631397,
              lon: -79.357756,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'CM_TorontoIslandFerry_ward',
              headsign: "Ward's Island",
              scheduled_time: '2022-07-01T12:30:00-04:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['CM_TorontoIslandFerry_ward'],
            },
          ],
          leg_departure_time: '2022-07-01T12:30:00-04:00',
          leg_arrival_time: '2022-07-01T12:45:00-04:00',
        },
        vehicle_types: ['ferry'],
        services: [
          {
            id: 'CM_TorontoIslandFerry_ward',
            name: 'Ward',
            vehicle_types: ['ferry'],
            brand: {
              id: 'TorontoIslandFerry',
              name: 'Toronto Island Ferry',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4b9042aa2e940e0ee83bf98aef8871533e8feb069bfcf8b8aaac2399/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/613131a139ad434acdabf6df3351225d692c2cd20c3fef559aeff9e5/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/20fabcb5752d3d7a2efa2173cc1be1fa1e72e7cc192aa2a8b18cd04d/d324a6fb/@2x.png',
                  width: 16,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/830ccdff407c4d09bce9a9ef2c147fa14512b8632102133d21699c12/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#22aced',
            background_color: '#22aced',
            text_color: '#FFFFFF',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 249,
        path: 'gwhiG~pjcNAADSDY@Y?S?QEa@AQD?@a@D_@RyBAG?CDM@EHAFCB???',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:45:00-04:00',
          leg_arrival_time: '2022-07-01T12:49:09-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'CMStation_wards_island_DefaultExit',
            stop_id: 'CMStation_wards_island',
            coordinates: {
              lat: 43.6314,
              lon: -79.35776,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00-04:00',
    route_arrival_time: '2022-07-01T12:49:09-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDkwOSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6NDI3MCxcImR1cmF0aW9uXCI6MTk1MCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDMuNjMwOTY0LC03OS4zNTU4NDhcIn0sXCJqcl9pbmRleFwiOjAsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTAyLFwiZHVyYXRpb25cIjoyMDEsXCJlY1wiOlwiNDMuNjQwMzcsLTc5LjM3NTI1XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDMuNjM5ODgsLTc5LjM3NjE1XCIsXCJ0b19leGl0XCI6XCJDTVN0YXRpb25famFja19sYXl0b25fZmVycnlfdGVybWluYWxfRGVmYXVsdEV4aXRcIn0se1wiZHVyYXRpb25cIjo5MDAsXCJlbmRcIjpcIkNNU3RhdGlvbl93YXJkc19pc2xhbmRcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIkNNX1Rvcm9udG9Jc2xhbmRGZXJyeV93YXJkXCJdLFwic3RhcnRcIjpcIkNNU3RhdGlvbl9qYWNrX2xheXRvbl9mZXJyeV90ZXJtaW5hbFwiLFwic3RvcF9jb3VudFwiOjIsXCJzdG9wX2lkc1wiOltcIkNNUGxhdGZvcm1famFja19sYXl0b25cIixcIkNNUGxhdGZvcm1fd2FyZHNfaXNsYW5kXCJdfSx7XCJkaXN0YW5jZVwiOjE3NSxcImR1cmF0aW9uXCI6MjQ5LFwiZWNcIjpcIjQzLjYzMTA3LC03OS4zNTU4MVwiLFwiZnJvbV9leGl0XCI6XCJDTVN0YXRpb25fd2FyZHNfaXNsYW5kX0RlZmF1bHRFeGl0XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDMuNjMxNCwtNzkuMzU3NzZcIn1dLFwicHJpY2VfcGVuY2VcIjo3NTAsXCJyZWdpb25cIjpcImNhLXRvcm9udG9cIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiMDdjNjhkOWQtYzM5ZS00ZjY0LWI3NTUtZmY0YzViOTM2ZTAzXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDMuNjM5NzI1LC03OS4zNzYwMzhcIn0sXCJ0aW1lXCI6XCIyMDIyLTA3LTAxVDEyOjE1OjAwLTA0OjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoiY2EtdG9yb250byJ9.hP1llpFpw10AP_VW2G2GsSQFFFWrGzBIZfXCONsKzX8',
  },
  {
    start: {
      coordinates: {
        lat: 43.639725,
        lon: -79.376038,
      },
    },
    end: {
      coordinates: {
        lat: 43.630964,
        lon: -79.355848,
      },
    },
    distance_meters: 3050,
    duration_seconds: 4228,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$7.50',
      amount: '7.50',
      currency: 'CAD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 201,
        path: 'gljiG|cncNGWGSQ?BYWcAEKA@c@[?C??',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00-04:00',
          leg_arrival_time: '2022-07-01T12:18:21-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'CMStation_jack_layton_ferry_terminal_DefaultExit',
            stop_id: 'CMStation_jack_layton_ferry_terminal',
            coordinates: {
              lat: 43.64037,
              lon: -79.37525,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 900,
        path: 'iojiGh~mcNfoB|R',
        stops: [
          {
            id: 'CMStation_jack_layton_ferry_terminal',
            name: 'Jack Layton Ferry Terminal',
            coordinates: {
              lat: 43.640365,
              lon: -79.375252,
            },
          },
          {
            id: 'CMStation_centre_island',
            name: 'Centre Island',
            coordinates: {
              lat: 43.622407,
              lon: -79.378442,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'CM_TorontoIslandFerry_centre',
              headsign: 'Centre Island',
              scheduled_time: '2022-07-01T12:45:00-04:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['CM_TorontoIslandFerry_centre'],
            },
          ],
          leg_departure_time: '2022-07-01T12:45:00-04:00',
          leg_arrival_time: '2022-07-01T13:00:00-04:00',
        },
        vehicle_types: ['ferry'],
        services: [
          {
            id: 'CM_TorontoIslandFerry_centre',
            name: 'Centre',
            vehicle_types: ['ferry'],
            brand: {
              id: 'TorontoIslandFerry',
              name: 'Toronto Island Ferry',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4b9042aa2e940e0ee83bf98aef8871533e8feb069bfcf8b8aaac2399/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/613131a139ad434acdabf6df3351225d692c2cd20c3fef559aeff9e5/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/20fabcb5752d3d7a2efa2173cc1be1fa1e72e7cc192aa2a8b18cd04d/d324a6fb/@2x.png',
                  width: 16,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/830ccdff407c4d09bce9a9ef2c147fa14512b8632102133d21699c12/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#22aced',
            background_color: '#22aced',
            text_color: '#FFFFFF',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 2527,
        path: 'a_giGfrncN?@D@LB@?F?HEHIPa@HMBE`@Of@SP]JWT]RQf@g@r@y@Zm@Rm@|@gDXs@N[Va@RSt@s@HGf@a@BCjAeATSZYAG?I?GBGBEIWISYy@B]DMRWLYJYNeARcB]eA]m@Wq@Ss@?m@H{@ToCXoBFOw@qCGSEIEGwAkAgCyBWY[e@q@sAw@oBYu@e@kAMWQWc@[_@U]SYMMMMO]q@Wi@_@o@[g@_@]MK[SWSWa@Sa@i@cAS_@Y_@eAuAU]_BcDcAeBo@cAwA_CkA{AsA}Au@y@_A{@i@e@c@]]Wo@a@cBgAYO]MEIYQ[O[OCAe@Sg@QGAe@k@q@w@c@i@KGOEMG[CqAM[nDFJDHB???',
        updatable_detail: {
          leg_departure_time: '2022-07-01T13:00:00-04:00',
          leg_arrival_time: '2022-07-01T13:42:07-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'CMStation_centre_island_DefaultExit',
            stop_id: 'CMStation_centre_island',
            coordinates: {
              lat: 43.62241,
              lon: -79.37844,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00-04:00',
    route_arrival_time: '2022-07-01T13:42:07-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDkwOSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6NDI3MCxcImR1cmF0aW9uXCI6NDIyOCxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDMuNjMwOTY0LC03OS4zNTU4NDhcIn0sXCJqcl9pbmRleFwiOjEsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTAyLFwiZHVyYXRpb25cIjoyMDEsXCJlY1wiOlwiNDMuNjQwMzcsLTc5LjM3NTI1XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDMuNjM5ODgsLTc5LjM3NjE1XCIsXCJ0b19leGl0XCI6XCJDTVN0YXRpb25famFja19sYXl0b25fZmVycnlfdGVybWluYWxfRGVmYXVsdEV4aXRcIn0se1wiZHVyYXRpb25cIjo5MDAsXCJlbmRcIjpcIkNNU3RhdGlvbl9jZW50cmVfaXNsYW5kXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJDTV9Ub3JvbnRvSXNsYW5kRmVycnlfY2VudHJlXCJdLFwic3RhcnRcIjpcIkNNU3RhdGlvbl9qYWNrX2xheXRvbl9mZXJyeV90ZXJtaW5hbFwiLFwic3RvcF9jb3VudFwiOjIsXCJzdG9wX2lkc1wiOltcIkNNUGxhdGZvcm1famFja19sYXl0b25cIixcIkNNUGxhdGZvcm1fY2VudHJlX2lzbGFuZFwiXX0se1wiZGlzdGFuY2VcIjoyOTQ4LFwiZHVyYXRpb25cIjoyNTI3LFwiZWNcIjpcIjQzLjYzMTA3LC03OS4zNTU4MVwiLFwiZnJvbV9leGl0XCI6XCJDTVN0YXRpb25fY2VudHJlX2lzbGFuZF9EZWZhdWx0RXhpdFwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQzLjYyMjQxLC03OS4zNzg0NFwifV0sXCJwcmljZV9wZW5jZVwiOjc1MCxcInJlZ2lvblwiOlwiY2EtdG9yb250b1wiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCIwN2M2OGQ5ZC1jMzllLTRmNjQtYjc1NS1mZjRjNWI5MzZlMDNcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0My42Mzk3MjUsLTc5LjM3NjAzOFwifSxcInRpbWVcIjpcIjIwMjItMDctMDFUMTI6MTU6MDAtMDQ6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJjYS10b3JvbnRvIn0.0aF8qdRVb0EVnQxWPeUyicXVIIZN2PUQ0JS80_zGdjw',
  },
  {
    start: {
      coordinates: {
        lat: 43.639725,
        lon: -79.376038,
      },
    },
    end: {
      coordinates: {
        lat: 43.630964,
        lon: -79.355848,
      },
    },
    distance_meters: 5502,
    duration_seconds: 6239,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '$7.50',
      amount: '7.50',
      currency: 'CAD',
    },
    legs: [
      {
        travel_mode: 'walk',
        duration_seconds: 201,
        path: 'gljiG|cncNGWGSQ?BYWcAEKA@c@[?C??',
        updatable_detail: {
          leg_departure_time: '2022-07-01T12:15:00-04:00',
          leg_arrival_time: '2022-07-01T12:18:21-04:00',
        },
        station_walk_type: 'enter_station',
        walk_details_enter_station: {
          recommended_exit: {
            id: 'CMStation_jack_layton_ferry_terminal_DefaultExit',
            stop_id: 'CMStation_jack_layton_ferry_terminal',
            coordinates: {
              lat: 43.64037,
              lon: -79.37525,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
      {
        travel_mode: 'transit',
        duration_seconds: 900,
        path: 'iojiGh~mcN|lAhuA',
        stops: [
          {
            id: 'CMStation_jack_layton_ferry_terminal',
            name: 'Jack Layton Ferry Terminal',
            coordinates: {
              lat: 43.640365,
              lon: -79.375252,
            },
          },
          {
            id: 'CMStation_hanlans_point',
            name: "Hanlan's Point",
            coordinates: {
              lat: 43.627898,
              lon: -79.389063,
            },
          },
        ],
        updatable_detail: {
          departures: [
            {
              type: 'scheduled',
              service_id: 'CM_TorontoIslandFerry_hanlan',
              headsign: "Hanlan's Point",
              scheduled_time: '2022-07-01T13:00:00-04:00',
              time_status: 'unknown',
            },
          ],
          live_departure_availability: 'unknown',
          statuses: [
            {
              type: 'no_issues',
              service_ids: ['CM_TorontoIslandFerry_hanlan'],
            },
          ],
          leg_departure_time: '2022-07-01T13:00:00-04:00',
          leg_arrival_time: '2022-07-01T13:15:00-04:00',
        },
        vehicle_types: ['ferry'],
        services: [
          {
            id: 'CM_TorontoIslandFerry_hanlan',
            name: 'Hanlan',
            vehicle_types: ['ferry'],
            brand: {
              id: 'TorontoIslandFerry',
              name: 'Toronto Island Ferry',
              images: [
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/4b9042aa2e940e0ee83bf98aef8871533e8feb069bfcf8b8aaac2399/d324a6fb/@2x.png',
                  width: 33,
                  height: 33,
                  ui_role: 'station',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/613131a139ad434acdabf6df3351225d692c2cd20c3fef559aeff9e5/d324a6fb/@2x.png',
                  width: 38,
                  height: 41,
                  ui_role: 'pin',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/20fabcb5752d3d7a2efa2173cc1be1fa1e72e7cc192aa2a8b18cd04d/d324a6fb/@2x.png',
                  width: 16,
                  height: 16,
                  ui_role: 'vehicle_compact',
                  is_generic: true,
                },
                {
                  url: 'https://d3440lt1d9mf95.cloudfront.net/830ccdff407c4d09bce9a9ef2c147fa14512b8632102133d21699c12/d324a6fb/@2x.png',
                  width: 24,
                  height: 33,
                  ui_role: 'vehicle',
                  is_generic: true,
                },
              ],
            },
            color: '#22aced',
            background_color: '#22aced',
            text_color: '#FFFFFF',
          },
        ],
      },
      {
        travel_mode: 'walk',
        duration_seconds: 4538,
        path: 'kahiGrtpcN@@^b@x@z@PAPHTT\\@h@HvADP@FAFA^CZ?`@DpDj@hBXD?xCb@zB`@P@Z@f@AbBEl@?rDLdDXTIPGN?L@L?HDNHFFNLF@P?N@XDPBXBZ?ZEf@SXI^Gd@G`@I\\KVOZWx@}@pAmAfAi@\\MZEPANDPF`@Xv@h@JDDDpAAVCVKRKb@_@`@k@JONS^u@X{@FOFUBGJUF]BY@[Bk@?MD}@D_@Bk@DWHk@Hm@BY?a@Aa@MyAKy@Ga@?q@@iCA}A?Y?Q@KJ}ABw@?K?IAWAUCOIm@o@{CCGiBiH@gA?m@Cm@Oq@Wu@aBeFSy@a@aAe@eAYc@}@mBeAeCS_@OU[w@_@q@Yc@IMIMEOK[E_@Eg@EOCKAEISK]O_@EMsC{HmAqDeAyDw@qCGSEIEGwAkAgCyBWY[e@q@sAw@oBYu@e@kAMWQWc@[_@U]SYMMMMO]q@Wi@_@o@[g@_@]MK[SWSWa@Sa@i@cAS_@Y_@eAuAU]_BcDcAeBo@cAwA_CkA{AsA}Au@y@_A{@i@e@c@]]Wo@a@cBgAYO]MEIYQ[O[OCAe@Sg@QGAe@k@q@w@c@i@KGOEMG[CqAM[nDFJDHB???',
        updatable_detail: {
          leg_departure_time: '2022-07-01T13:15:00-04:00',
          leg_arrival_time: '2022-07-01T14:30:38-04:00',
        },
        station_walk_type: 'exit_station',
        walk_details_exit_station: {
          recommended_exit: {
            id: 'CMStation_hanlans_point_DefaultExit',
            stop_id: 'CMStation_hanlans_point',
            coordinates: {
              lat: 43.6279,
              lon: -79.38906,
            },
            name: 'Default Exit',
          },
          duration_seconds: 90,
        },
      },
    ],
    route_departure_time: '2022-07-01T12:15:00-04:00',
    route_arrival_time: '2022-07-01T14:30:38-04:00',
    signature:
      'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY1NjYxMDkwOSwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6NDI3MCxcImR1cmF0aW9uXCI6NjIzOSxcImVuZFwiOntcImNvb3Jkc1wiOlwiNDMuNjMwOTY0LC03OS4zNTU4NDhcIn0sXCJqcl9pbmRleFwiOjIsXCJsZWdzXCI6W3tcImRpc3RhbmNlXCI6MTAyLFwiZHVyYXRpb25cIjoyMDEsXCJlY1wiOlwiNDMuNjQwMzcsLTc5LjM3NTI1XCIsXCJpbl9zdGF0aW9uXCI6XCIwLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDMuNjM5ODgsLTc5LjM3NjE1XCIsXCJ0b19leGl0XCI6XCJDTVN0YXRpb25famFja19sYXl0b25fZmVycnlfdGVybWluYWxfRGVmYXVsdEV4aXRcIn0se1wiZHVyYXRpb25cIjo5MDAsXCJlbmRcIjpcIkNNU3RhdGlvbl9oYW5sYW5zX3BvaW50XCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJDTV9Ub3JvbnRvSXNsYW5kRmVycnlfaGFubGFuXCJdLFwic3RhcnRcIjpcIkNNU3RhdGlvbl9qYWNrX2xheXRvbl9mZXJyeV90ZXJtaW5hbFwiLFwic3RvcF9jb3VudFwiOjIsXCJzdG9wX2lkc1wiOltcIkNNUGxhdGZvcm1famFja19sYXl0b25cIixcIkNNUGxhdGZvcm1faGFubGFuc19wb2ludFwiXX0se1wiZGlzdGFuY2VcIjo1NDAwLFwiZHVyYXRpb25cIjo0NTM4LFwiZWNcIjpcIjQzLjYzMTA3LC03OS4zNTU4MVwiLFwiZnJvbV9leGl0XCI6XCJDTVN0YXRpb25faGFubGFuc19wb2ludF9EZWZhdWx0RXhpdFwiLFwiaW5fc3RhdGlvblwiOlwiMi85MFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQzLjYyNzksLTc5LjM4OTA2XCJ9XSxcInByaWNlX3BlbmNlXCI6NzUwLFwicmVnaW9uXCI6XCJjYS10b3JvbnRvXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjA3YzY4ZDlkLWMzOWUtNGY2NC1iNzU1LWZmNGM1YjkzNmUwM1wiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQzLjYzOTcyNSwtNzkuMzc2MDM4XCJ9LFwidGltZVwiOlwiMjAyMi0wNy0wMVQxMjoxNTowMC0wNDowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6ImNhLXRvcm9udG8ifQ.89p0BskHOQ7FqXJnhNTaNkBbbOViFRUV461o79z6H4U',
  },
] as Route[]
