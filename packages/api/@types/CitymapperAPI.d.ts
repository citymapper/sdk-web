export class CitymapperAPI {
  constructor(apiKey: string)

  travel_times(
    start: [number, number],
    end: [number, number],
    types?: ('walk' | 'transit' | 'bike' | 'scooter' | 'motorscooter')[]
  ): Promise<{
    walk_travel_time_minutes?: number
    transit_time_minutes?: number
    bike_time_minutes?: number
    scooter_time_minutes?: number
    motorscooter_time_minutes?: number
  }>
}
