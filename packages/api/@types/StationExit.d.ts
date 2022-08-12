import { Coordinates } from './Coordinates'
export interface StationExit {
  /**
   * Identifies this station exit. This is an internal identifier and must not be shown to the rider.
   */
  id: string

  /**
   * Identifies the station that this exit gives access to. When used in a walk Leg, this value will match a Stop id value in an adjoining transit Leg. This is an internal identifier and must not be shown to the rider.
   */
  stop_id: string

  /**
   * The geographical location of this exit.
   */
  coordinates: Coordinates

  /**
   * A rider-facing longer descriptive name for this exit. Depending on the station signage, an exit may have any combination of `name` and `short_name` (or neither).
   */
  name?: string

  /**
   * A rider-facing short code identifying this exit, usually a few numbers and/or letters. Depending on the station signage, an exit may have any combination of `name` and `short_name` (or neither).
   */
  short_name?: string
}
