import type {
  LegTransit,
  LegWalking,
  Route,
  VehicleType,
} from '@citymapper/api/@types'

export const renderWalkLeg = (duration: number): LegWalking => {
  return {
    travel_mode: 'walk',
    duration_seconds: duration,
    path: 'xxx',
  }
}
export const renderTransitLeg = (
  type: VehicleType,
  name: string
): LegTransit => {
  return {
    travel_mode: 'transit',
    path: 'xxx',
    path_annotations: [],
    stops: [
      {
        id: 'StopId',
        name: 'Stop Name',
        coordinates: {
          lat: 51.4,
          lon: -0.01,
        },
      },
    ],
    vehicle_types: [type],
    services: [
      {
        id: 'ServiceId',
        name: name,
        vehicle_types: [type],
        brand: {
          id: 'BrandId',
          name: 'Brand Name',
        },
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'frequency',
          service_id: 'ServiceId',
          frequency_seconds_range: [300, 300],
          time_status: 'unknown',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'no_issues',
          service_ids: ['ServiceId'],
          description: 'No issues',
          title: 'No issues',
        },
      ],
      leg_departure_time: '2022-06-16T16:43:00+01:00',
      leg_arrival_time: '2022-06-16T16:45:00+01:00',
    },
  }
}

export default [
  {
    start: {
      coordinates: {
        lat: 51.5,
        lon: -0.01,
      },
    },
    end: {
      coordinates: {
        lat: 51.4,
        lon: 0.1,
      },
    },
    distance_meters: 666,
    duration_seconds: 6666,
    duration_accuracy: 'scheduled',
    price: {
      formatted: '£2.60',
      amount: '2.60',
      currency: 'GBP',
    },
    legs: [
      renderWalkLeg(600),
      renderTransitLeg('bike', 'Bike'),
      renderWalkLeg(120),
      renderTransitLeg('bus', 'Bus'),
      renderWalkLeg(120),
      renderTransitLeg('bus_rapid_transit', 'BRT'),
      renderWalkLeg(120),
      renderTransitLeg('ebike', 'E-bike'),
      renderWalkLeg(120),
      renderTransitLeg('escooter', 'E-scooter'),
      renderWalkLeg(120),
      renderTransitLeg('ferry', 'Ferry'),
      renderWalkLeg(120),
      renderTransitLeg('funicular', 'Funicular'),
      renderWalkLeg(120),
      renderTransitLeg('gondola', 'Gondola'),
      renderWalkLeg(120),
      renderTransitLeg('helicopter', 'Helicopter'),
      renderWalkLeg(120),
      renderTransitLeg('light_rail', 'Light Rail'),
      renderWalkLeg(120),
      renderTransitLeg('metro', 'Metro'),
      renderWalkLeg(120),
      renderTransitLeg('monorail', 'Monorail'),
      renderWalkLeg(120),
      renderTransitLeg('motorscooter', 'Motorscooter'),
      renderWalkLeg(120),
      renderTransitLeg('rail', 'Rail'),
      renderWalkLeg(120),
      renderTransitLeg('subway', 'Subway'),
      renderWalkLeg(120),
      renderTransitLeg('streetcar', 'Streetcar'),
      renderWalkLeg(120),
      renderTransitLeg('tram', 'Tram'),
      renderWalkLeg(120),
      renderTransitLeg('trolley', 'Trolley'),
      renderWalkLeg(120),
      renderTransitLeg('trolleybus', 'Trolleybus'),
      renderWalkLeg(600),
    ],
    route_departure_time: '2022-06-20T10:52:26+01:00',
    route_arrival_time: '2022-06-20T11:35:00+01:00',
    signature: 'v2.xxx',
  },
] as Route[]
