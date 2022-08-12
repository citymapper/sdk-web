import { Leg } from '@citymapper/api/@types'
import React from 'react'
import customRender from '../../../jest/customRender'
import RouteListItemSummary from '../RouteListItemSummary'

const legs = [
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
] as Leg[]

describe('RouteListItemSummary', () => {
  it('should not display transfer when it is less than 5 minutes by default', () => {
    const { container } = customRender(<RouteListItemSummary legs={legs} />)
    expect(
      container.querySelectorAll('[data-service-mode="walk"]').length
    ).toBe(1)
  })

  it('should display separator when transfer time is hidden', () => {
    const { container } = customRender(
      <RouteListItemSummary
        transferTimeMinimum={1}
        legs={legs}
        showTransferTime={false}
      />
    )

    expect(
      container.querySelectorAll('.cm-route-summary-separator').length
    ).toBe(4)
  })
})
