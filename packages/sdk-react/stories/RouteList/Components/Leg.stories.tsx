import { ComponentMeta, ComponentStory } from '@storybook/react'
import RouteListItemLeg from '../../../src/RouteList/RouteListItem/RouteListItemLeg'

export default {
  title: 'SDK/Routes/Components/Leg',
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

export const Walk = Template.bind({})
Walk.args = {
  leg: {
    travel_mode: 'walk',
    duration_seconds: 679,
    path: 'exayH|iBkAA_BCoAAcAUWEE?E@c@NC@EKOg@GK_@gAKGUM{@_@c@UUWUa@Q_@Q_@m@{@MEi@AOBcBFAO?{@Ac@Ao@Fw@FmAAe@GAE?IA@OIA?BaBE',
    updatable_detail: {
      leg_departure_time: '2022-06-20T10:52:26+01:00',
      leg_arrival_time: '2022-06-20T11:03:45+01:00',
    },
    station_walk_type: 'enter_station',
    walk_details_enter_station: {
      recommended_exit: {
        id: 'Lewisham_E30334',
        stop_id: 'Lewisham',
        coordinates: {
          lat: 51.4650702,
          lon: -0.013304,
        },
        name: 'Station Road (bridge)',
      },
      alternate_exits: [
        {
          id: 'Lewisham_E30358',
          stop_id: 'Lewisham',
          coordinates: {
            lat: 51.4648096,
            lon: -0.0127029,
          },
          name: 'Station Road (buses)',
        },
      ],
      duration_seconds: 90,
    },
  },
}

export const Southeastern = Template.bind({})
Southeastern.args = {
  leg: {
    travel_mode: 'transit',
    duration_seconds: 1080,
    path: 'iubyHznAuCkA@I`AoNn@eXOwPwBmr@M_He@wLWkGm@iGeBwJQ{BGkC^iFr@yCxIkYjNqh@|j@muBZkDAmDcBkRWcFaAqR{A}VmPa{B{Cqa@oAkLs@eFyBiLgQss@oAsHa@{DKoBSeEEmHBeDpBw_@VyGLcHfAm~Ap@{^?o@J?',
    stops: [
      {
        id: 'Lewisham',
        name: 'Lewisham',
        coordinates: {
          lat: 51.464687,
          lon: -0.012783,
        },
      },
      {
        id: 'Blackheath',
        name: 'Blackheath',
        coordinates: {
          lat: 51.465795,
          lon: 0.008872,
        },
      },
      {
        id: 'Kidbrooke',
        name: 'Kidbrooke',
        coordinates: {
          lat: 51.46212,
          lon: 0.027498,
        },
      },
      {
        id: 'Eltham',
        name: 'Eltham',
        coordinates: {
          lat: 51.455642,
          lon: 0.052472,
        },
      },
      {
        id: 'Falconwood',
        name: 'Falconwood',
        coordinates: {
          lat: 51.459153,
          lon: 0.079304,
        },
      },
      {
        id: 'Welling',
        name: 'Welling',
        coordinates: {
          lat: 51.464797,
          lon: 0.10169,
        },
      },
      {
        id: 'Bexleyheath',
        name: 'Bexleyheath',
        coordinates: {
          lat: 51.463498,
          lon: 0.133735,
        },
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'scheduled',
          service_id: 'NationalRailSE',
          headsign: 'Dartford',
          scheduled_time: '2022-06-20T11:15:00+01:00',
          time_status: 'on_time',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'no_issues',
          service_ids: ['NationalRailSE'],
        },
      ],
      leg_departure_time: '2022-06-20T11:15:00+01:00',
      leg_arrival_time: '2022-06-20T11:33:00+01:00',
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
            url: 'https://d3440lt1d9mf95.cloudfront.net/46f5ed6057ce3f31521ea3df78d1f5e491d826a7a099f20b2cea37ca/d324a6fb/@2x.png',
            width: 24,
            height: 24,
            ui_role: 'service',
          },
          {
            url: 'https://d3440lt1d9mf95.cloudfront.net/13b426c1537effebd0483a88aa93c51fe21c8485e25eff157db9b35a/d324a6fb/@2x.png',
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
}

export const JubileeLine = Template.bind({})
JubileeLine.args = {
  leg: {
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
}

export const SingleBus = Template.bind({})
SingleBus.args = {
  leg: {
    travel_mode: 'transit',
    duration_seconds: 2470,
    path: '{obyHnlA?ZTAH?ZIZw@{@yG~DoCv@qBH}@{@}AQiAaA_GKoD`A_KjAoM?sBYsBiAeDSi@iCse@[qBqCgKwCe@]GiBn@{@hBkBvGy@HuAoCc@{@gB{FuCkBKI{PgT_AkBsCyFkBoCk@sJeAeRyAcNa@oDw@o@IkA^yAe@}G]kFQwFBqGPmBvBkXdBwTnCk]\\}CbCkUrAcJ`AsGbBiPjAaLfAoNvAwQHCdD}Z|AwNl@oKf@qIlDg]dA_LjD__@~Dqb@z@eJdAwLpDab@rDmb@bByR?gAHw@|@eJTyJrC{R`@uCdDy]~B_WtC_[KE',
    stops: [
      {
        id: '490001177X',
        name: 'Lewisham Station',
        coordinates: {
          lat: 51.463819,
          lon: -0.012395,
        },
        indicator_text: 'D',
      },
      {
        id: '490009239K',
        name: 'Lockmead Road',
        coordinates: {
          lat: 51.462825,
          lon: -0.008379,
        },
        indicator_text: 'K',
      },
      {
        id: '490013561E',
        name: 'The Squirrels',
        coordinates: {
          lat: 51.462863,
          lon: -0.00426,
        },
        indicator_text: 'F',
      },
      {
        id: '490012772E',
        name: "St Margaret's Church / Brandram Road",
        coordinates: {
          lat: 51.463015,
          lon: -0.000021,
        },
        indicator_text: 'D',
      },
      {
        id: '490004066B',
        name: 'Blackheath Hospital',
        coordinates: {
          lat: 51.463957,
          lon: 0.006988,
        },
        indicator_text: 'B',
      },
      {
        id: '490001029B',
        name: 'Blackheath Station',
        coordinates: {
          lat: 51.465387,
          lon: 0.009096,
        },
        indicator_text: 'D',
      },
      {
        id: '490011771G',
        name: 'Royal Parade',
        coordinates: {
          lat: 51.467669,
          lon: 0.007612,
        },
        indicator_text: 'G',
      },
      {
        id: '490010003K',
        name: 'Montpelier Row',
        coordinates: {
          lat: 51.46909,
          lon: 0.009719,
        },
        indicator_text: 'K',
      },
      {
        id: '490012711N',
        name: 'St Germans Place',
        coordinates: {
          lat: 51.47233,
          lon: 0.013749,
        },
        indicator_text: 'M',
      },
      {
        id: '490008705E',
        name: 'Shooters Hill Road / Stratheden Road',
        coordinates: {
          lat: 51.473865,
          lon: 0.017589,
        },
        indicator_text: 'P',
      },
      {
        id: '490013014E1',
        name: 'Shooters Hill Road / Kidbrooke Park Road',
        coordinates: {
          lat: 51.47467,
          lon: 0.023068,
        },
        indicator_text: 'R',
      },
      {
        id: '490015427E',
        name: 'Shooters Hill Road / Eastbrook Road',
        coordinates: {
          lat: 51.475187,
          lon: 0.026461,
        },
        indicator_text: 'S',
      },
      {
        id: '490010537E',
        name: 'Hervey Road',
        coordinates: {
          lat: 51.475336,
          lon: 0.030845,
        },
        indicator_text: 'T',
      },
      {
        id: '490008478E',
        name: 'Weyman Road',
        coordinates: {
          lat: 51.474744,
          lon: 0.034909,
        },
        indicator_text: 'U',
      },
      {
        id: '490005011E',
        name: 'Charlton Park Lane',
        coordinates: {
          lat: 51.474225,
          lon: 0.038385,
        },
      },
      {
        id: '490010733E',
        name: 'Pallet Way',
        coordinates: {
          lat: 51.473353,
          lon: 0.044034,
        },
        indicator_text: 'SA',
      },
      {
        id: '490004460E',
        name: 'Shooters Hill Road / Baker Road',
        coordinates: {
          lat: 51.472234,
          lon: 0.049384,
        },
        indicator_text: 'SB',
      },
      {
        id: '490012108E',
        name: 'Shooters Hill Road / Academy Road',
        coordinates: {
          lat: 51.471415,
          lon: 0.053538,
        },
        indicator_text: 'SC',
      },
      {
        id: '490011486E',
        name: 'Red Lion Lane',
        coordinates: {
          lat: 51.470661,
          lon: 0.058097,
        },
        indicator_text: 'SD',
      },
      {
        id: '490009803E',
        name: 'Memorial Hospital',
        coordinates: {
          lat: 51.469396,
          lon: 0.065614,
        },
        indicator_text: 'SE',
      },
      {
        id: '490006288E',
        name: 'Eaglesfield Road',
        coordinates: {
          lat: 51.468659,
          lon: 0.070116,
        },
        indicator_text: 'SF',
      },
      {
        id: '490010701E',
        name: 'Oxleas Wood / Woodlands Farm',
        coordinates: {
          lat: 51.467266,
          lon: 0.078735,
        },
        indicator_text: 'SG',
      },
      {
        id: '490014349E',
        name: 'Eastcote Road',
        coordinates: {
          lat: 51.466419,
          lon: 0.083866,
        },
        indicator_text: 'SH',
      },
      {
        id: '490012086E',
        name: 'Bellegrove Road / Sherwood Road',
        coordinates: {
          lat: 51.465455,
          lon: 0.089552,
        },
        indicator_text: 'W',
      },
      {
        id: '490014364E',
        name: 'Bellegrove Road / Welling Way',
        coordinates: {
          lat: 51.464808,
          lon: 0.093539,
        },
        indicator_text: 'E',
      },
      {
        id: '490004922C',
        name: 'Central Avenue / Welling Station',
        coordinates: {
          lat: 51.46389,
          lon: 0.099141,
        },
        indicator_text: 'C',
      },
      {
        id: '490006018H',
        name: 'Deepdene Road',
        coordinates: {
          lat: 51.463015,
          lon: 0.104816,
        },
        indicator_text: 'H',
      },
      {
        id: '490014353S',
        name: 'Welling High Street',
        coordinates: {
          lat: 51.462425,
          lon: 0.108619,
        },
        indicator_text: 'S',
      },
      {
        id: '490007611E',
        name: 'Guy, Earl Of Warwick',
        coordinates: {
          lat: 51.461303,
          lon: 0.115506,
        },
        indicator_text: 'BA',
      },
      {
        id: '490003948E',
        name: 'Bethel Road',
        coordinates: {
          lat: 51.46031,
          lon: 0.121175,
        },
        indicator_text: 'BB',
      },
      {
        id: '490016645E',
        name: 'Crook Log Leisure Centre',
        coordinates: {
          lat: 51.459647,
          lon: 0.125003,
        },
        indicator_text: 'BC',
      },
      {
        id: '490005805E',
        name: 'Crook Log / Dallin Road',
        coordinates: {
          lat: 51.4589,
          lon: 0.129488,
        },
        indicator_text: 'BD',
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'frequency',
          service_id: 'LondonBus89',
          frequency_seconds_range: [720, 720],
          time_status: 'unknown',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'no_issues',
          service_ids: ['LondonBus89'],
        },
      ],
      leg_departure_time: '2022-06-20T11:08:00+01:00',
      leg_arrival_time: '2022-06-20T11:49:10+01:00',
    },
    vehicle_types: ['bus'],
    services: [
      {
        id: 'LondonBus89',
        name: '89',
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
}

export const MultipleBuses = Template.bind({})
MultipleBuses.args = {
  leg: {
    travel_mode: 'transit',
    duration_seconds: 2470,
    path: '{obyHnlA?ZTAH?ZIZw@{@yG~DoCv@qBH}@{@}AQiAaA_GKoD`A_KjAoM?sBYsBiAeDSi@iCse@[qBqCgKwCe@]GiBn@{@hBkBvGy@HuAoCc@{@gB{FuCkBKI{PgT_AkBsCyFkBoCk@sJeAeRyAcNa@oDw@o@IkA^yAe@}G]kFQwFBqGPmBvBkXdBwTnCk]\\}CbCkUrAcJ`AsGbBiPjAaLfAoNvAwQHCdD}Z|AwNl@oKf@qIlDg]dA_LjD__@~Dqb@z@eJdAwLpDab@rDmb@bByR?gAHw@|@eJTyJrC{R`@uCdDy]~B_WtC_[KE',
    stops: [
      {
        id: '490001177X',
        name: 'Lewisham Station',
        coordinates: {
          lat: 51.463819,
          lon: -0.012395,
        },
        indicator_text: 'D',
      },
      {
        id: '490009239K',
        name: 'Lockmead Road',
        coordinates: {
          lat: 51.462825,
          lon: -0.008379,
        },
        indicator_text: 'K',
      },
      {
        id: '490013561E',
        name: 'The Squirrels',
        coordinates: {
          lat: 51.462863,
          lon: -0.00426,
        },
        indicator_text: 'F',
      },
      {
        id: '490012772E',
        name: "St Margaret's Church / Brandram Road",
        coordinates: {
          lat: 51.463015,
          lon: -0.000021,
        },
        indicator_text: 'D',
      },
      {
        id: '490004066B',
        name: 'Blackheath Hospital',
        coordinates: {
          lat: 51.463957,
          lon: 0.006988,
        },
        indicator_text: 'B',
      },
      {
        id: '490001029B',
        name: 'Blackheath Station',
        coordinates: {
          lat: 51.465387,
          lon: 0.009096,
        },
        indicator_text: 'D',
      },
      {
        id: '490011771G',
        name: 'Royal Parade',
        coordinates: {
          lat: 51.467669,
          lon: 0.007612,
        },
        indicator_text: 'G',
      },
      {
        id: '490010003K',
        name: 'Montpelier Row',
        coordinates: {
          lat: 51.46909,
          lon: 0.009719,
        },
        indicator_text: 'K',
      },
      {
        id: '490012711N',
        name: 'St Germans Place',
        coordinates: {
          lat: 51.47233,
          lon: 0.013749,
        },
        indicator_text: 'M',
      },
      {
        id: '490008705E',
        name: 'Shooters Hill Road / Stratheden Road',
        coordinates: {
          lat: 51.473865,
          lon: 0.017589,
        },
        indicator_text: 'P',
      },
      {
        id: '490013014E1',
        name: 'Shooters Hill Road / Kidbrooke Park Road',
        coordinates: {
          lat: 51.47467,
          lon: 0.023068,
        },
        indicator_text: 'R',
      },
      {
        id: '490015427E',
        name: 'Shooters Hill Road / Eastbrook Road',
        coordinates: {
          lat: 51.475187,
          lon: 0.026461,
        },
        indicator_text: 'S',
      },
      {
        id: '490010537E',
        name: 'Hervey Road',
        coordinates: {
          lat: 51.475336,
          lon: 0.030845,
        },
        indicator_text: 'T',
      },
      {
        id: '490008478E',
        name: 'Weyman Road',
        coordinates: {
          lat: 51.474744,
          lon: 0.034909,
        },
        indicator_text: 'U',
      },
      {
        id: '490005011E',
        name: 'Charlton Park Lane',
        coordinates: {
          lat: 51.474225,
          lon: 0.038385,
        },
      },
      {
        id: '490010733E',
        name: 'Pallet Way',
        coordinates: {
          lat: 51.473353,
          lon: 0.044034,
        },
        indicator_text: 'SA',
      },
      {
        id: '490004460E',
        name: 'Shooters Hill Road / Baker Road',
        coordinates: {
          lat: 51.472234,
          lon: 0.049384,
        },
        indicator_text: 'SB',
      },
      {
        id: '490012108E',
        name: 'Shooters Hill Road / Academy Road',
        coordinates: {
          lat: 51.471415,
          lon: 0.053538,
        },
        indicator_text: 'SC',
      },
      {
        id: '490011486E',
        name: 'Red Lion Lane',
        coordinates: {
          lat: 51.470661,
          lon: 0.058097,
        },
        indicator_text: 'SD',
      },
      {
        id: '490009803E',
        name: 'Memorial Hospital',
        coordinates: {
          lat: 51.469396,
          lon: 0.065614,
        },
        indicator_text: 'SE',
      },
      {
        id: '490006288E',
        name: 'Eaglesfield Road',
        coordinates: {
          lat: 51.468659,
          lon: 0.070116,
        },
        indicator_text: 'SF',
      },
      {
        id: '490010701E',
        name: 'Oxleas Wood / Woodlands Farm',
        coordinates: {
          lat: 51.467266,
          lon: 0.078735,
        },
        indicator_text: 'SG',
      },
      {
        id: '490014349E',
        name: 'Eastcote Road',
        coordinates: {
          lat: 51.466419,
          lon: 0.083866,
        },
        indicator_text: 'SH',
      },
      {
        id: '490012086E',
        name: 'Bellegrove Road / Sherwood Road',
        coordinates: {
          lat: 51.465455,
          lon: 0.089552,
        },
        indicator_text: 'W',
      },
      {
        id: '490014364E',
        name: 'Bellegrove Road / Welling Way',
        coordinates: {
          lat: 51.464808,
          lon: 0.093539,
        },
        indicator_text: 'E',
      },
      {
        id: '490004922C',
        name: 'Central Avenue / Welling Station',
        coordinates: {
          lat: 51.46389,
          lon: 0.099141,
        },
        indicator_text: 'C',
      },
      {
        id: '490006018H',
        name: 'Deepdene Road',
        coordinates: {
          lat: 51.463015,
          lon: 0.104816,
        },
        indicator_text: 'H',
      },
      {
        id: '490014353S',
        name: 'Welling High Street',
        coordinates: {
          lat: 51.462425,
          lon: 0.108619,
        },
        indicator_text: 'S',
      },
      {
        id: '490007611E',
        name: 'Guy, Earl Of Warwick',
        coordinates: {
          lat: 51.461303,
          lon: 0.115506,
        },
        indicator_text: 'BA',
      },
      {
        id: '490003948E',
        name: 'Bethel Road',
        coordinates: {
          lat: 51.46031,
          lon: 0.121175,
        },
        indicator_text: 'BB',
      },
      {
        id: '490016645E',
        name: 'Crook Log Leisure Centre',
        coordinates: {
          lat: 51.459647,
          lon: 0.125003,
        },
        indicator_text: 'BC',
      },
      {
        id: '490005805E',
        name: 'Crook Log / Dallin Road',
        coordinates: {
          lat: 51.4589,
          lon: 0.129488,
        },
        indicator_text: 'BD',
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'frequency',
          service_id: 'LondonBus89',
          frequency_seconds_range: [720, 720],
          time_status: 'unknown',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'no_issues',
          service_ids: ['LondonBus89'],
        },
      ],
      leg_departure_time: '2022-06-20T11:08:00+01:00',
      leg_arrival_time: '2022-06-20T11:49:10+01:00',
    },
    vehicle_types: ['bus'],
    services: [
      {
        id: 'LondonBus89',
        name: '89',
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
        id: 'LondonBus96',
        name: '96',
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
}

export const JubileeAndBus = Template.bind({})
JubileeAndBus.args = {
  leg: {
    travel_mode: 'transit',
    duration_seconds: 2470,
    path: '{obyHnlA?ZTAH?ZIZw@{@yG~DoCv@qBH}@{@}AQiAaA_GKoD`A_KjAoM?sBYsBiAeDSi@iCse@[qBqCgKwCe@]GiBn@{@hBkBvGy@HuAoCc@{@gB{FuCkBKI{PgT_AkBsCyFkBoCk@sJeAeRyAcNa@oDw@o@IkA^yAe@}G]kFQwFBqGPmBvBkXdBwTnCk]\\}CbCkUrAcJ`AsGbBiPjAaLfAoNvAwQHCdD}Z|AwNl@oKf@qIlDg]dA_LjD__@~Dqb@z@eJdAwLpDab@rDmb@bByR?gAHw@|@eJTyJrC{R`@uCdDy]~B_WtC_[KE',
    stops: [
      {
        id: '490001177X',
        name: 'Lewisham Station',
        coordinates: {
          lat: 51.463819,
          lon: -0.012395,
        },
        indicator_text: 'D',
      },
      {
        id: '490009239K',
        name: 'Lockmead Road',
        coordinates: {
          lat: 51.462825,
          lon: -0.008379,
        },
        indicator_text: 'K',
      },
      {
        id: '490013561E',
        name: 'The Squirrels',
        coordinates: {
          lat: 51.462863,
          lon: -0.00426,
        },
        indicator_text: 'F',
      },
      {
        id: '490012772E',
        name: "St Margaret's Church / Brandram Road",
        coordinates: {
          lat: 51.463015,
          lon: -0.000021,
        },
        indicator_text: 'D',
      },
      {
        id: '490004066B',
        name: 'Blackheath Hospital',
        coordinates: {
          lat: 51.463957,
          lon: 0.006988,
        },
        indicator_text: 'B',
      },
      {
        id: '490001029B',
        name: 'Blackheath Station',
        coordinates: {
          lat: 51.465387,
          lon: 0.009096,
        },
        indicator_text: 'D',
      },
      {
        id: '490011771G',
        name: 'Royal Parade',
        coordinates: {
          lat: 51.467669,
          lon: 0.007612,
        },
        indicator_text: 'G',
      },
      {
        id: '490010003K',
        name: 'Montpelier Row',
        coordinates: {
          lat: 51.46909,
          lon: 0.009719,
        },
        indicator_text: 'K',
      },
      {
        id: '490012711N',
        name: 'St Germans Place',
        coordinates: {
          lat: 51.47233,
          lon: 0.013749,
        },
        indicator_text: 'M',
      },
      {
        id: '490008705E',
        name: 'Shooters Hill Road / Stratheden Road',
        coordinates: {
          lat: 51.473865,
          lon: 0.017589,
        },
        indicator_text: 'P',
      },
      {
        id: '490013014E1',
        name: 'Shooters Hill Road / Kidbrooke Park Road',
        coordinates: {
          lat: 51.47467,
          lon: 0.023068,
        },
        indicator_text: 'R',
      },
      {
        id: '490015427E',
        name: 'Shooters Hill Road / Eastbrook Road',
        coordinates: {
          lat: 51.475187,
          lon: 0.026461,
        },
        indicator_text: 'S',
      },
      {
        id: '490010537E',
        name: 'Hervey Road',
        coordinates: {
          lat: 51.475336,
          lon: 0.030845,
        },
        indicator_text: 'T',
      },
      {
        id: '490008478E',
        name: 'Weyman Road',
        coordinates: {
          lat: 51.474744,
          lon: 0.034909,
        },
        indicator_text: 'U',
      },
      {
        id: '490005011E',
        name: 'Charlton Park Lane',
        coordinates: {
          lat: 51.474225,
          lon: 0.038385,
        },
      },
      {
        id: '490010733E',
        name: 'Pallet Way',
        coordinates: {
          lat: 51.473353,
          lon: 0.044034,
        },
        indicator_text: 'SA',
      },
      {
        id: '490004460E',
        name: 'Shooters Hill Road / Baker Road',
        coordinates: {
          lat: 51.472234,
          lon: 0.049384,
        },
        indicator_text: 'SB',
      },
      {
        id: '490012108E',
        name: 'Shooters Hill Road / Academy Road',
        coordinates: {
          lat: 51.471415,
          lon: 0.053538,
        },
        indicator_text: 'SC',
      },
      {
        id: '490011486E',
        name: 'Red Lion Lane',
        coordinates: {
          lat: 51.470661,
          lon: 0.058097,
        },
        indicator_text: 'SD',
      },
      {
        id: '490009803E',
        name: 'Memorial Hospital',
        coordinates: {
          lat: 51.469396,
          lon: 0.065614,
        },
        indicator_text: 'SE',
      },
      {
        id: '490006288E',
        name: 'Eaglesfield Road',
        coordinates: {
          lat: 51.468659,
          lon: 0.070116,
        },
        indicator_text: 'SF',
      },
      {
        id: '490010701E',
        name: 'Oxleas Wood / Woodlands Farm',
        coordinates: {
          lat: 51.467266,
          lon: 0.078735,
        },
        indicator_text: 'SG',
      },
      {
        id: '490014349E',
        name: 'Eastcote Road',
        coordinates: {
          lat: 51.466419,
          lon: 0.083866,
        },
        indicator_text: 'SH',
      },
      {
        id: '490012086E',
        name: 'Bellegrove Road / Sherwood Road',
        coordinates: {
          lat: 51.465455,
          lon: 0.089552,
        },
        indicator_text: 'W',
      },
      {
        id: '490014364E',
        name: 'Bellegrove Road / Welling Way',
        coordinates: {
          lat: 51.464808,
          lon: 0.093539,
        },
        indicator_text: 'E',
      },
      {
        id: '490004922C',
        name: 'Central Avenue / Welling Station',
        coordinates: {
          lat: 51.46389,
          lon: 0.099141,
        },
        indicator_text: 'C',
      },
      {
        id: '490006018H',
        name: 'Deepdene Road',
        coordinates: {
          lat: 51.463015,
          lon: 0.104816,
        },
        indicator_text: 'H',
      },
      {
        id: '490014353S',
        name: 'Welling High Street',
        coordinates: {
          lat: 51.462425,
          lon: 0.108619,
        },
        indicator_text: 'S',
      },
      {
        id: '490007611E',
        name: 'Guy, Earl Of Warwick',
        coordinates: {
          lat: 51.461303,
          lon: 0.115506,
        },
        indicator_text: 'BA',
      },
      {
        id: '490003948E',
        name: 'Bethel Road',
        coordinates: {
          lat: 51.46031,
          lon: 0.121175,
        },
        indicator_text: 'BB',
      },
      {
        id: '490016645E',
        name: 'Crook Log Leisure Centre',
        coordinates: {
          lat: 51.459647,
          lon: 0.125003,
        },
        indicator_text: 'BC',
      },
      {
        id: '490005805E',
        name: 'Crook Log / Dallin Road',
        coordinates: {
          lat: 51.4589,
          lon: 0.129488,
        },
        indicator_text: 'BD',
      },
    ],
    updatable_detail: {
      departures: [
        {
          type: 'frequency',
          service_id: 'LondonBus89',
          frequency_seconds_range: [720, 720],
          time_status: 'unknown',
        },
      ],
      live_departure_availability: 'unknown',
      statuses: [
        {
          type: 'no_issues',
          service_ids: ['LondonBus89'],
        },
      ],
      leg_departure_time: '2022-06-20T11:08:00+01:00',
      leg_arrival_time: '2022-06-20T11:49:10+01:00',
    },
    vehicle_types: ['bus'],
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
      {
        id: 'LondonBus89',
        name: '89',
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
}
