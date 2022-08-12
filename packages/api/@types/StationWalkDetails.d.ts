import { StationExit } from './StationExit'
export interface StationWalkDetails {
  /**
   * Describes a station
   */
  recommended_exit: StationExit

  /**
   * Provides information about the other station entrances/exits for contextual display.
   */
  alternate_exits: StationExit[]

  /**
   * Indicates how much of the walking time in this Leg occurs inside of the station between the recommended entrance/exit and the platform.
   *
   * When omitted, this indicates that no information about the duration of the in-station portion of the walk is available.
   *
   * To determine the amount of walking time that occurs outside of the station, subtract this value from the Leg's overall `duration_seconds`. (The value is encoded this way so that API consumers that don't want to display this level of detail can simply display the Leg's `duration_seconds`.)
   */
  duration_seconds: number
}
