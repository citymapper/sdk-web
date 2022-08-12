import { Route } from '@citymapper/api/@types'

export default {
  start: {
    coordinates: {
      lat: 51.518752,
      lon: -0.081437,
    },
  },
  end: {
    coordinates: {
      lat: 51.521689,
      lon: -0.081824,
    },
  },
  distance_meters: 457,
  duration_seconds: 351,
  legs: [
    {
      travel_mode: 'walk',
      duration_seconds: 351,
      path: 'khmyHj`OAAgAe@GIYKYK?GCAYMIEMICBQNKPEP_@pAGL{@qA_@a@GECC[U[QGCGCOGqAk@OIGCSIECCCGBGB@H?H?l@CjAL@',
      instructions: [
        {
          path_index: 0,
          description_text: 'Walk North on Broadgate Link',
          description_format: 'Walk North on {street_name}',
          description_format_replacements: [
            {
              key: 'street_name',
              text: 'Broadgate Link',
              type: 'street_name',
              language: 'en-GB',
            },
          ],
          type: 'depart',
        },
        {
          path_index: 3,
          distance_meters: 49,
          time_seconds: 37,
          description_text: 'Continue straight on Sun Street Passage',
          description_format: 'Continue straight on {street_name}',
          description_format_replacements: [
            {
              key: 'street_name',
              text: 'Sun Street Passage',
              type: 'street_name',
              language: 'en-GB',
            },
          ],
          type: 'turn',
          type_direction: 'straight',
        },
        {
          path_index: 5,
          distance_meters: 30,
          time_seconds: 23,
          description_text: 'Slight right',
          type: 'turn',
          type_direction: 'slight_right',
        },
        {
          path_index: 16,
          distance_meters: 106,
          time_seconds: 85,
          description_text: 'Turn right onto Appold Street',
          description_format: 'Turn right onto {street_name}',
          description_format_replacements: [
            {
              key: 'street_name',
              text: 'Appold Street',
              type: 'street_name',
              language: 'en-GB',
            },
          ],
          type: 'turn',
          type_direction: 'right',
        },
        {
          path_index: 31,
          distance_meters: 205,
          time_seconds: 154,
          description_text: 'Turn left',
          type: 'turn',
          type_direction: 'left',
        },
        {
          path_index: 33,
          distance_meters: 10,
          time_seconds: 7,
          description_text: 'Turn left onto Worship Street',
          description_format: 'Turn left onto {street_name}',
          description_format_replacements: [
            {
              key: 'street_name',
              text: 'Worship Street',
              type: 'street_name',
              language: 'en-GB',
            },
          ],
          type: 'turn',
          type_direction: 'left',
        },
        {
          path_index: 37,
          distance_meters: 49,
          time_seconds: 39,
          description_text: 'Turn left',
          type: 'turn',
          type_direction: 'left',
        },
        {
          path_index: 38,
          distance_meters: 8,
          time_seconds: 6,
          description_text: 'Arrive at your destination',
          type: 'arrive',
        },
      ],
    },
  ],
  route_metadata: {
    profile_name: 'Fast',
  },
  profile: 'fast',
  signature:
    'v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp3YWxrMSIsImlhdCI6MTY1ODE1OTAxNSwidHRsIjozNjAwLCJzdGFydCI6eyJsYXQiOjUxLjUxODc1MiwibG5nIjotMC4wODE0Mzd9LCJlbmQiOnsibGF0Ijo1MS41MjE2ODksImxuZyI6LTAuMDgxODI0fX0.UAe4bCyif1tkwH3WHBmUiDTgDuSszDTp26P6mAhFPrE',
} as Route
