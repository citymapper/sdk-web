import { ComponentMeta, ComponentStory } from '@storybook/react'
import RouteListItemLeg from '../../../src/RouteList/RouteListItem/RouteListItemLeg'

export default {
  title: 'SDK/Routes/Components/Leg/Disrupted',
  component: RouteListItemLeg,
  argTypes: {
    serviceBranding: { defaultValue: true },
    serviceLegOptions: { defaultValue: true },
    serviceStyle: { defaultValue: 'box' },
    showTransferTime: { defaultValue: true },
    transferTimeLong: { defaultValue: 25 },
    serviceSeparator: { table: { disable: true } },
  },
  args: {},
} as ComponentMeta<typeof RouteListItemLeg>

const Template: ComponentStory<typeof RouteListItemLeg> = (args) => {
  return <RouteListItemLeg {...args} />
}

export const BayRidgeLexington45 = Template.bind({})
BayRidgeLexington45.args = {
  leg: {
    travel_mode: 'transit',
    duration_seconds: 1440,
    path: 'gdiwFlwobM??iWpPeBfAgT|q@gBpDEJgHr_A{Gp]gAnDse@lq@sB|AkBP{Dw@}Ak@]OmAo@sMoKGG}AyAiAyAiEoJeDcGo@kAiJaMg@uAgByBEEmCsB}AcA}FUg@Qah@ac@{@e@_EgAcEmDsPoLwJeI_Aq@g@g@wA}Be@e@o@]YGgP_CaCEcBRcAJ_AWcc@_Y{`@uWc]gUg@m@k@yECQ}@gFm@k@y~@mm@@E',
    stops: [
      {
        id: 'SubwayAtlanticAvBQ2345',
        name: 'Atlantic Av - Barclays Ctr',
        coordinates: {
          lat: 40.684359,
          lon: -73.977666,
        },
      },
      {
        id: 'SubwayNevinsSt',
        name: 'Nevins St',
        coordinates: {
          lat: 40.688246,
          lon: -73.980492,
        },
      },
      {
        id: 'SubwayBoroughHall',
        name: 'Borough Hall',
        coordinates: {
          lat: 40.693219,
          lon: -73.989998,
        },
      },
      {
        id: 'SubwayBowlingGreen',
        name: 'Bowling Green',
        coordinates: {
          lat: 40.704817,
          lon: -74.014065,
        },
      },
      {
        id: 'SubwayWallSt45',
        name: 'Wall St',
        coordinates: {
          lat: 40.707557,
          lon: -74.011862,
        },
      },
      {
        id: 'SubwayFultonStACJZ2345',
        name: 'Fulton St',
        coordinates: {
          lat: 40.710274,
          lon: -74.007778,
        },
      },
      {
        id: 'SubwayBrooklynBridgeCityHall',
        name: 'Brooklyn Bridge - City Hall',
        coordinates: {
          lat: 40.713065,
          lon: -74.004131,
        },
      },
      {
        id: 'Subway14StUnionSq',
        name: '14 St - Union Sq',
        coordinates: {
          lat: 40.734669,
          lon: -73.989956,
        },
      },
      {
        id: 'SubwayGrandCentral42St',
        name: 'Grand Central - 42 St',
        coordinates: {
          lat: 40.751776,
          lon: -73.976902,
        },
      },
      {
        id: 'Subway59St456',
        name: 'Lexington Av/59 St',
        coordinates: {
          lat: 40.762729,
          lon: -73.967441,
        },
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'frequency',
          service_id: '4',
          frequency_seconds_range: [177, 177],
          time_status: 'unknown',
        },
        {
          type: 'frequency',
          service_id: '5',
          frequency_seconds_range: [177, 177],
          time_status: 'unknown',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'no_issues',
          service_ids: ['4'],
        },
        {
          type: 'travel_affected',
          title: 'Delays',
          description:
            '<5> trains are running with delays in both directions after crews addressed a signal problem at Eastchester-Dyre Av. Southbound <5> trains have resumed running on the local track from Eastchester-Dyre Av to E 180 St.',
          service_ids: ['5'],
        },
      ],
      leg_departure_time: '2022-07-13T07:10:30-04:00',
      leg_arrival_time: '2022-07-13T07:34:30-04:00',
    },
    vehicle_types: ['metro'],
    services: [
      {
        id: '4',
        name: '4',
        vehicle_types: ['metro'],
        brand: {
          id: 'NewYorkSubway',
          name: 'Subway',
          images: [
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
              url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
            url: 'https://d1a19ub1xx68i2.cloudfront.net/c9bf161a29063cea7e4150372a60acdbfe352ad791ee79e9c886e7ab/d324a6fb/@2x.png',
            width: 24,
            height: 24,
            ui_role: 'service',
            replaces_name: true,
          },
          {
            url: 'https://d1a19ub1xx68i2.cloudfront.net/cb99747274bb7dfd50c5bf1451b0a81c2911fda6d0d9617ac5b340cd/d324a6fb/@2x.png',
            width: 16,
            height: 16,
            ui_role: 'service',
            replaces_name: true,
          },
        ],
        color: '#00933C',
        background_color: '#00933C',
        text_color: '#FFFFFF',
      },
      {
        id: '5',
        name: '5',
        vehicle_types: ['metro'],
        brand: {
          id: 'NewYorkSubway',
          name: 'Subway',
          images: [
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
              url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
            url: 'https://d1a19ub1xx68i2.cloudfront.net/149660ac2ad12f571875ad958f809724b966a544cebabd205229fe34/d324a6fb/@2x.png',
            width: 24,
            height: 24,
            ui_role: 'service',
            replaces_name: true,
          },
          {
            url: 'https://d1a19ub1xx68i2.cloudfront.net/daef45b412a4bbf31640e7a7dc883234b4002e2caa7c0f273645ec38/d324a6fb/@2x.png',
            width: 16,
            height: 16,
            ui_role: 'service',
            replaces_name: true,
          },
        ],
        color: '#00933C',
        background_color: '#00933C',
        text_color: '#FFFFFF',
      },
    ],
    best_boarding_sections: {
      front: false,
      middle: true,
      back: true,
    },
    direction_description: 'Manhattan',
  },
}

export const BayRidgeLexingtonR = Template.bind({})
BayRidgeLexingtonR.args = {
  leg: {
    travel_mode: 'transit',
    duration_seconds: 1320,
    path: '{|{vF~czbM??}d@oNak@aQu_@iLeHyByAs@q@m@mYmZcVaWeWeXye@ig@y_@ca@k^s_@g@g@u_@iZy_@kZsFcDuf@{Y??',
    stops: [
      {
        id: 'SubwayBayRidge95St',
        name: 'Bay Ridge - 95 St',
        coordinates: {
          lat: 40.616622,
          lon: -74.030876,
        },
      },
      {
        id: 'Subway86StR',
        name: '86 St',
        coordinates: {
          lat: 40.622687,
          lon: -74.028398,
        },
      },
      {
        id: 'Subway77StR',
        name: '77 St',
        coordinates: {
          lat: 40.629742,
          lon: -74.02551,
        },
      },
      {
        id: 'SubwayBayRidgeAv',
        name: 'Bay Ridge Av',
        coordinates: {
          lat: 40.634967,
          lon: -74.023377,
        },
      },
      {
        id: 'Subway59StNR',
        name: '59 St',
        coordinates: {
          lat: 40.641362,
          lon: -74.017881,
        },
      },
      {
        id: 'Subway53St',
        name: '53 St',
        coordinates: {
          lat: 40.645069,
          lon: -74.014034,
        },
      },
      {
        id: 'Subway45St',
        name: '45 St',
        coordinates: {
          lat: 40.648939,
          lon: -74.010006,
        },
      },
      {
        id: 'Subway36StDNR',
        name: '36 St',
        coordinates: {
          lat: 40.655144,
          lon: -74.003549,
        },
      },
      {
        id: 'Subway25St',
        name: '25 St',
        coordinates: {
          lat: 40.660397,
          lon: -73.998091,
        },
      },
      {
        id: 'SubwayProspectAvR',
        name: 'Prospect Av',
        coordinates: {
          lat: 40.665414,
          lon: -73.992872,
        },
      },
      {
        id: 'Subway4Av9St',
        name: '4 Av - 9 St',
        coordinates: {
          lat: 40.670272,
          lon: -73.989779,
        },
      },
      {
        id: 'SubwayUnionSt',
        name: 'Union St',
        coordinates: {
          lat: 40.677316,
          lon: -73.98311,
        },
      },
      {
        id: 'SubwayAtlanticAvBQ2345',
        name: 'Atlantic Av - Barclays Ctr',
        coordinates: {
          lat: 40.684359,
          lon: -73.977666,
        },
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'frequency',
          service_id: 'R',
          frequency_seconds_range: [403, 403],
          time_status: 'unknown',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'travel_affected',
          title: 'Service Change',
          description:
            "You may wait longer for a northbound <R> train. We're running as much service as we can with the train crews we have available.",
          service_ids: ['R'],
        },
      ],
      leg_departure_time: '2022-07-13T06:44:00-04:00',
      leg_arrival_time: '2022-07-13T07:06:00-04:00',
    },
    vehicle_types: ['metro'],
    services: [
      {
        id: 'R',
        name: 'R',
        vehicle_types: ['metro'],
        brand: {
          id: 'NewYorkSubway',
          name: 'Subway',
          images: [
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/04d3e48526e18be554c333263c6d61bcdd86bb1474af3494665a801c/d324a6fb/@2x.png',
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
              url: 'https://d1a19ub1xx68i2.cloudfront.net/702e9b448ec649f4f5e55dde636bad626e14753ea375d852eb244d5c/d324a6fb/@2x.png',
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
            url: 'https://d1a19ub1xx68i2.cloudfront.net/aaa556df8e4f1b291f9d2a8cb4517c6b5e8c250841b669974ff70ba9/d324a6fb/@2x.png',
            width: 24,
            height: 24,
            ui_role: 'service',
            replaces_name: true,
          },
          {
            url: 'https://d1a19ub1xx68i2.cloudfront.net/72c02c88e6d8b48e755a3d43ad8038e1fca3bfcfb35bb2cf7336e3ba/d324a6fb/@2x.png',
            width: 16,
            height: 16,
            ui_role: 'service',
            replaces_name: true,
          },
        ],
        color: '#FCCC0A',
        background_color: '#FCCC0A',
        text_color: '#FFFFFF',
      },
    ],
    best_boarding_sections: {
      front: true,
      middle: true,
      back: false,
    },
    direction_description: 'Manhattan',
  },
}

export const UxbridgeActonTown = Template.bind({})
UxbridgeActonTown.args = {
  leg: {
    travel_mode: 'transit',
    duration_seconds: 2160,
    path: 'stryHjk|AEDcAmDe@kB}BqKYmBU}BW_ECsC?uJEgBIeBk@_G{@oG{EgUeX{nAe@}By@uCoAuDsAyCcCcEiB{BqAuAo@k@oBoAeEqBwAc@iBYeEaA}@]k@_@k@Y}CsB}@m@oC{CqAkB{@wA_BiD{@{By@gC}CoKoEmNwCsIcC{HmJgYkAsDyBkIu@}C_@}BWkBq@eF_@mDu@cImFu`@aAeHsE{[qHuj@sAcNMoAa@eG_@qH_@cNKcMHyOPiId@gLd@aH~@yMvCk]hBeQ@O\\eEXwBvAoHdBaHjAyDj@}AfBkEjHuOnDiHrBoDhAeBvC_EpCaDnFsFxAmBnAsBhEsIh@w@~AaC|BgCjMiKjEyDjB}BfBmC|A}Ch@oAv@uBr@aCNq@h@aDPkCF}A^{QTgEhAuIvAyKnAgKNaBJeBXcH\\oERyAXeBd@oBhD{LbFmRjIkZnCyIVq@dQof@l@}ApBkElAsBxAqBjCiCpB}Av@e@fHmDrAgAfBuBz@cBp@gBrEuPzAuFb@oA^{@l@eAnA{AbAaAnY}UjFyE~BeCdGwIlAoBrGwLvAsB|BeCdB{AzBwApB{@RKvBk@dAS|CWzAI|DEpENdANjCt@zBjArC~BhB|BpGnLnAbBtAvA??z@v@rA|@l@T^Dl@AfA[\\W|@aAh@s@fBmBlAs@r@UnAGv@@tCh@pBVvDNfBVv@?|@AfBS`FiAhBq@|AaA`Au@~BmCd@y@vA{CtCaHpDiH~AqDfBgDh@u@JT',
    stops: [
      {
        id: 'Uxbridge',
        name: 'Uxbridge',
        coordinates: {
          lat: 51.546496,
          lon: -0.478139,
        },
      },
      {
        id: 'Hillingdon',
        name: 'Hillingdon',
        coordinates: {
          lat: 51.553717,
          lon: -0.449926,
        },
      },
      {
        id: 'Ickenham',
        name: 'Ickenham',
        coordinates: {
          lat: 51.561985,
          lon: -0.442027,
        },
      },
      {
        id: 'Ruislip',
        name: 'Ruislip',
        coordinates: {
          lat: 51.571449,
          lon: -0.421455,
        },
      },
      {
        id: 'RuislipManor',
        name: 'Ruislip Manor',
        coordinates: {
          lat: 51.573188,
          lon: -0.412346,
        },
      },
      {
        id: 'Eastcote',
        name: 'Eastcote',
        coordinates: {
          lat: 51.576493,
          lon: -0.396845,
        },
      },
      {
        id: 'RaynersLane',
        name: 'Rayners Lane',
        coordinates: {
          lat: 51.574977,
          lon: -0.371006,
        },
      },
      {
        id: 'SouthHarrow',
        name: 'South Harrow',
        coordinates: {
          lat: 51.564678,
          lon: -0.352212,
        },
      },
      {
        id: 'SudburyHill',
        name: 'Sudbury Hill',
        coordinates: {
          lat: 51.556996,
          lon: -0.336216,
        },
      },
      {
        id: 'SudburyTown',
        name: 'Sudbury Town',
        coordinates: {
          lat: 51.550782,
          lon: -0.315483,
        },
      },
      {
        id: 'Alperton',
        name: 'Alperton',
        coordinates: {
          lat: 51.540695,
          lon: -0.299487,
        },
      },
      {
        id: 'ParkRoyal',
        name: 'Park Royal',
        coordinates: {
          lat: 51.526901,
          lon: -0.284228,
        },
      },
      {
        id: 'NorthEaling',
        name: 'North Ealing',
        coordinates: {
          lat: 51.517555,
          lon: -0.289005,
        },
      },
      {
        id: 'EalingCommon',
        name: 'Ealing Common',
        coordinates: {
          lat: 51.510218,
          lon: -0.288214,
        },
      },
      {
        id: 'ActonTown',
        name: 'Acton Town',
        coordinates: {
          lat: 51.50275,
          lon: -0.280251,
        },
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'frequency',
          service_id: 'Piccadilly',
          frequency_seconds_range: [1200, 1200],
          time_status: 'unknown',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'travel_affected',
          title: 'Severe Delays',
          description:
            'Piccadilly Line: Severe delays between Acton Town and Uxbridge due to signal failure at Rayners Lane. Tickets are being accepted on London Buses between Acton Town / Harrow on the Hill and Uxbridge ',
          service_ids: ['Piccadilly'],
        },
      ],
      leg_departure_time: '2022-07-13T13:02:00+01:00',
      leg_arrival_time: '2022-07-13T13:38:00+01:00',
    },
    vehicle_types: ['metro'],
    services: [
      {
        id: 'Piccadilly',
        name: 'Piccadilly',
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
            url: 'https://d1a19ub1xx68i2.cloudfront.net/601d488ba37abdd0b275d43319d7c7983ce54f3f7616a3d93d94cfd1/d324a6fb/@2x.png',
            width: 24,
            height: 24,
            ui_role: 'service',
          },
          {
            url: 'https://d1a19ub1xx68i2.cloudfront.net/1b85932a224db976511c156c4cba802931fc378ae2a93a617a7198c7/d324a6fb/@2x.png',
            width: 16,
            height: 16,
            ui_role: 'service',
          },
        ],
        color: '#0019A8',
        background_color: '#2B3DA5',
        text_color: '#FFFFFF',
      },
    ],
    best_boarding_sections: {
      front: false,
      middle: false,
      back: true,
    },
    direction_description: 'Eastbound',
  },
}

export const BexleyheathBluewater = Template.bind({})
BexleyheathBluewater.args = {
  leg: {
    travel_mode: 'transit',
    duration_seconds: 2250,
    path: '}eayHstZn@cg@xEgOnCiTzC_[hFki@zB{Rr@oM|@gRzDgb@xBmGlFml@fByTpAeNbBaRxD_a@`Dg_@dBwOmF}l@jKoPly@ksF{KugB',
    stops: [
      {
        id: '490003973B',
        name: 'Trinity Place',
        coordinates: {
          lat: 51.457112,
          lon: 0.1417,
        },
        indicator_text: 'B',
      },
      {
        id: '490003975P',
        name: 'Mayplace Rd West / Bexleyheath Clock Twr',
        coordinates: {
          lat: 51.456869,
          lon: 0.148121,
        },
        indicator_text: 'P',
      },
      {
        id: '490003972E',
        name: 'Bexleyheath / Highland Road',
        coordinates: {
          lat: 51.455778,
          lon: 0.15072,
        },
        indicator_text: 'X',
      },
      {
        id: '490011016E2',
        name: 'Watling Street / Civic Offices',
        coordinates: {
          lat: 51.455059,
          lon: 0.154127,
        },
        indicator_text: 'J',
      },
      {
        id: '490010773E2',
        name: 'Park Grove',
        coordinates: {
          lat: 51.454275,
          lon: 0.158609,
        },
        indicator_text: 'K',
      },
      {
        id: '490010587S',
        name: 'Old Road',
        coordinates: {
          lat: 51.453107,
          lon: 0.165391,
        },
        indicator_text: 'S',
      },
      {
        id: '490004000E',
        name: 'Bigs Hill Wood',
        coordinates: {
          lat: 51.45249,
          lon: 0.168572,
        },
        indicator_text: 'T',
      },
      {
        id: '490016614AA',
        name: 'Bourne Road',
        coordinates: {
          lat: 51.452232,
          lon: 0.170891,
        },
        indicator_text: 'U',
      },
      {
        id: '490003980L',
        name: 'Bexley Lane',
        coordinates: {
          lat: 51.451923,
          lon: 0.173971,
        },
        indicator_text: 'V',
      },
      {
        id: '490005725D',
        name: 'Crayford Bridge',
        coordinates: {
          lat: 51.450982,
          lon: 0.179612,
        },
        indicator_text: 'D',
      },
      {
        id: '490005728J',
        name: 'Crayford Town Hall',
        coordinates: {
          lat: 51.450372,
          lon: 0.180964,
        },
        indicator_text: 'E',
      },
      {
        id: '490008004E',
        name: 'Heath Road',
        coordinates: {
          lat: 51.449184,
          lon: 0.188234,
        },
        indicator_text: 'F',
      },
      {
        id: '2400A019740A',
        name: 'Maiden Lane',
        coordinates: {
          lat: 51.44866,
          lon: 0.19172,
        },
      },
      {
        id: '2400A019750A',
        name: 'Bird In Hand',
        coordinates: {
          lat: 51.448246,
          lon: 0.194147,
        },
      },
      {
        id: '2400A019760A',
        name: 'Havelock Road',
        coordinates: {
          lat: 51.447748,
          lon: 0.197203,
        },
      },
      {
        id: '2400A019770A',
        name: 'West Hill School',
        coordinates: {
          lat: 51.446819,
          lon: 0.202642,
        },
      },
      {
        id: '2400102547',
        name: 'West Hill / Shepherds Lane',
        coordinates: {
          lat: 51.446011,
          lon: 0.207798,
        },
      },
      {
        id: '2400A019780A',
        name: 'Priory Hill',
        coordinates: {
          lat: 51.445502,
          lon: 0.210479,
        },
      },
      {
        id: '2400A019900A',
        name: 'Dartford Station',
        coordinates: {
          lat: 51.446694,
          lon: 0.217834,
        },
        indicator_text: 'C',
      },
      {
        id: '240075089',
        name: 'Hanau Bridge',
        coordinates: {
          lat: 51.444708,
          lon: 0.22063,
        },
        indicator_text: 'H',
      },
      {
        id: '2400A019210A',
        name: 'Darent Valley Hospital',
        coordinates: {
          lat: 51.435363,
          lon: 0.25973,
        },
      },
      {
        id: '2400A070060A',
        name: 'Bluewater Shopping Centre',
        coordinates: {
          lat: 51.437422,
          lon: 0.276479,
        },
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'frequency',
          service_id: 'LondonBus96',
          frequency_seconds_range: [218, 218],
          time_status: 'unknown',
        },
        {
          type: 'frequency',
          service_id: 'Stagecoach_StagecoachLondon96',
          frequency_seconds_range: [218, 218],
          time_status: 'unknown',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'travel_affected',
          title: '96 test',
          description: 'test',
          service_ids: ['LondonBus96', 'Stagecoach_StagecoachLondon96'],
        },
      ],
      leg_departure_time: '2022-07-13T14:10:30+01:00',
      leg_arrival_time: '2022-07-13T14:48:00+01:00',
    },
    vehicle_types: ['bus'],
    services: [
      {
        id: 'LondonBus96',
        name: '96',
        vehicle_types: ['bus'],
        brand: {
          id: 'LondonBus',
          name: 'Bus',
          images: [
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/48b8784c04f1ef54504b24468db3482c2da2df6572d5a4c4d758b602/d324a6fb/@2x.png',
              width: 33,
              height: 33,
              ui_role: 'station',
              has_space_for_text: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/f07d8df54ead4238c6cdb0f1a5264d7bf5b948a15848e9364600b32f/d324a6fb/@2x.png',
              width: 33,
              height: 33,
              ui_role: 'station',
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
              width: 33,
              height: 33,
              ui_role: 'station',
              is_generic: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/9d0396bf3a62b4400abd3590b3ff367bffe42ab380cbdcbae37ede41/d324a6fb/@2x.png',
              width: 38,
              height: 41,
              ui_role: 'pin',
              has_space_for_text: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/eac51b8d19db61809944bedb35abdb81f9345c85506d2a9189ea5372/d324a6fb/@2x.png',
              width: 38,
              height: 41,
              ui_role: 'pin',
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
              width: 38,
              height: 41,
              ui_role: 'pin',
              is_generic: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/d017fb8cdd82a312484df53e7bf3e1b4b39c1940a4ce077a6c617d2e/d324a6fb/@2x.png',
              width: 12,
              height: 16,
              ui_role: 'vehicle_compact',
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
              width: 13,
              height: 16,
              ui_role: 'vehicle_compact',
              is_generic: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/2e25c93eae55e23cd53e90678d66e4aed6b7beb11f6f869569a200c6/d324a6fb/@2x.png',
              width: 20,
              height: 20,
              ui_role: 'vehicle',
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
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
        id: 'Stagecoach_StagecoachLondon96',
        name: '96',
        vehicle_types: ['bus'],
        brand: {
          id: 'Stagecoach',
          name: 'Stagecoach',
          images: [
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/78316842966f361745da511eb419d525947ed0f1df4ebc3db4844a87/d324a6fb/@2x.png',
              width: 33,
              height: 33,
              ui_role: 'station',
              has_space_for_text: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/247b06cb9ffa9b1485cb00e99f9335c97b337d1904e43d0f8a61b39d/d324a6fb/@2x.png',
              width: 33,
              height: 33,
              ui_role: 'station',
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png',
              width: 33,
              height: 33,
              ui_role: 'station',
              is_generic: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/8f0b645b8bcd8a0710f10682cced1ce7f255749cd605bccbe772ecab/d324a6fb/@2x.png',
              width: 38,
              height: 41,
              ui_role: 'pin',
              has_space_for_text: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/c2dc5d384fdd9ad0963702d5a03faf29f69039932e81d0f6c442bccf/d324a6fb/@2x.png',
              width: 38,
              height: 41,
              ui_role: 'pin',
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png',
              width: 38,
              height: 41,
              ui_role: 'pin',
              is_generic: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/fc5abb9481e611b17021e6f0029888b4c248f203ffd7b614e747fd16/d324a6fb/@2x.png',
              width: 12,
              height: 16,
              ui_role: 'vehicle_compact',
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png',
              width: 13,
              height: 16,
              ui_role: 'vehicle_compact',
              is_generic: true,
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/252456705af48b4b9fe0a1d9df9e63639f1ee72d952bc5f6d2de9046/d324a6fb/@2x.png',
              width: 20,
              height: 20,
              ui_role: 'vehicle',
            },
            {
              url: 'https://d1a19ub1xx68i2.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png',
              width: 24,
              height: 33,
              ui_role: 'vehicle',
              is_generic: true,
            },
          ],
        },
        color: '#006BB5',
        background_color: '#006BB5',
        text_color: '#FFFFFF',
      },
    ],
  },
}
