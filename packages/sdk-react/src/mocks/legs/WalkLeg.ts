import { LegWalking } from '@citymapper/api/@types'

export default {
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
} as LegWalking
