import { Waypoint } from './Waypoint'
import { Price } from './Price'
import { Leg } from './Leg'
import { RouteMetadata } from './RouteMetadata'
export interface Route {
  start: Waypoint

  end: Waypoint

  /**
   * The overall distance of the entire Route, in meters.
   */
  distance_meters?: number

  /**
   * The overall estimated time to traverse the entire Route, in seconds, based on the selected vehicle or departure in the response.
   */
  duration_seconds?: number

  /**
   * Citymapper's assessment of how the accuracy level of duration_seconds should be displayed to the user. This is largely based on the type of the Departures used for times, but it involves additional heuristics developed over time for the Citymapper app.
   *
   * When this field is not provided, the value `scheduled` should be used.
   */
  duration_accuracy?: /**
   * A duration that should be considered approximate, as its calculation involved more uncertainty than usual. This is the lowest accuracy
   */
  | 'estimated'
    /**
     * A normal duration, typically based on published timetable information.
     */
    | 'scheduled'
    /**
     * A duration largely based on real-time/live departure information. This is the highest accuracy.
     */
    | 'live'

  price?: Price

  /**
   * An estimate of the greenhouse gas emissions of the route, expressed in grams of carbon dioxide equivalent (CO2e).
   */
  emissions_grams_co2e?: number

  /**
   * Array of Legs comprising the Route, in the order in which they should be traversed. Every valid Route will have at least one.
   */
  legs: Leg[]

  /**
   * The time at which Citymapper thinks the user will set out on this route, given available departure information. This is computed assuming that user is at the start of the route.
   *
   * Updated values for `route_departure_time` and `route_arrival_time` are returned by `/api/1/live/routeupdates` to reflect any updated departure information.
   */
  route_departure_time?: string

  /**
   * The time at which Citymapper thinks the user will arrive at the end of this route, given available departure information and expected travel speed. This is computed assuming that user is at the start of the route.
   *
   * Updated values for `route_departure_time` and `route_arrival_time` are returned by `/api/1/live/routeupdates` to reflect any updated departure information.
   */
  route_arrival_time?: string

  /**
   * Any metadata associated with the Route.
   */
  route_metadata?: RouteMetadata

  /**
   * Indicates which routing "profile" was used to calculate this Route. For example, a response from a bike routing endpoint may return multiple routes, one with a `quiet` profile and another with a `fast` profile.
   *
   * Note that new values can be added at any time, so any code parsing this field must be able to handle unexpected values.
   *
   * This value will match the `profiles` request parameter on endpoints that support selecting specific routing profiles.
   *
   * This value is intended to be machine readable only. For a profile name to show to a user, use the `profile_name` in the `route_metadata` object instead.
   */
  profile?: string

  /**
   * A value to be passed back to the server in subsequent calls to refer to this Route (for instance, when requesting live departure information via `/api/1/live/routeupdates`). It must be treated as an opaque value.
   */
  signature: string
}
