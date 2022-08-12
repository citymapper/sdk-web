import { LegUpdatableDetail } from './LegUpdatableDetail'

export interface RouteUpdate {
  /**
   * This is an parallel array of Leg Updatable Detail objects, one for every Leg in the original Route being updated. The ones corresponding to walking Legs will be empty, but the details corresponding to transit legs will contain updated departure information.
   */
  leg_updates: LegUpdatableDetail[]

  /**
   * The time at which Citymapper thinks the user will set out on this route, given available departure information. This is computed assuming that user is at the start of the route at the time of the request.
   */
  route_departure_time?: string

  /**
   * The time at which Citymapper thinks the user will arrive at the end of this route, given available departure information and expected travel speed. This is computed assuming that user is at the start of the route at the time of the request.
   */
  route_arrival_time?: string

  /**
   * The overall estimated time to traverse the entire route, in seconds.
   *
   * This value replaces the duration_seconds value from the original Route, as it will be recomputed to use the specific departure information contained in this Route update response.
   */
  route_duration_seconds?: number

  /**
   * Citymapper's assessment of how the accuracy level of duration_seconds should be displayed to the user. This is largely based on the type of the Departures used for times, but it involves additional heuristics developed over time for the Citymapper app.
   */
  route_duration_accuracy?: 'scheduled' | 'estimated' | 'live'

  /**
   * This is a Route signature from the update request, which should be used to associate this update with the correct Route.
   */
  request_signature: string
}
