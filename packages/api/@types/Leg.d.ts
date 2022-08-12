import { Instruction } from './Instruction'
import { LegUpdatableDetail } from './LegUpdatableDetail'
import { PathAnnotation } from './PathAnnotation'
import { Service } from './Service'
import { StationWalkDetails } from './StationWalkDetails'
import { Stop } from './Stop'
import { VehicleType } from './VehicleType'

interface LegBase {
  /**
   * The time required to traverse this leg, excluding any waiting or boarding time at the beginning. May be omitted in rare circumstances when the duration cannot be computed.
   */
  duration_seconds?: number

  /**
   * The geographic path that the leg traverses, as a series of WGS84 coordinates encoded in Google Polyline Format, with a decimal precision of 5 digits.
   */
  path: string

  /**
   * Array of Path Annotations providing extra metadata about sections of the `path`. For instance, in Legs with `travel_mode` of `self_piloted`, these annotations can indicate sections of the path where the user should dismount their vehicle and walk alongside it due to terrain or restrictions.
   *
   * Each Path Annotation specifies a `start_index` and `end_index`, which are indices into the series of coordinates encoded by `path`. (For example, an index of 1 refers to the coordinate (51.51341, -0.08896) in the `path` example above.)
   *
   * `path_annotations` will contain annotations in order of increasing `start_index`, and will not contain overlapped ranges (though multiple annotations can refer to the same coordinate).
   */
  path_annotations: PathAnnotation[]

  /**
   * Indicates the services that can be used to complete this Leg. This field is omitted when the concept is not relevant, for instance when `travel_mode` is walk or `self_piloted` (in non-branded results). When more than one service is listed, that means that alternate equivalent services are available (for instance, two buses or trains that travel between the same set of stops).
   */
  services?: Service[]

  /**
   * This object contains elements that can be updated using `/api/1/live/routeupdates` calls, to provide the latest departure information. When receiving updates, the previous Leg Updatable Detail for each Leg can be replaced with the new one.
   */
  updatable_detail?: LegUpdatableDetail

  /**
   * This is a priority list of vehicle types that can be used to describe the vehicle used in this leg. The list is ordered from more specific to less specific vehicle type, to allow for refinements to the list of types to be added over time, and to allow consumers of the API to make more generic distinctions if desired. In the case that this Leg has Services specified, this value will contain the intersection of values given in the individual Services' `vehicle_types` fields.
   */
  vehicle_types?: VehicleType[]
}

interface LegWalking
  extends Omit<LegBase, 'vehicle_type' | 'services' | 'path_annotations'> {
  /**
   * Identifies the kind of travel described by this leg. New options are likely to be added over time. This value indicates which other fields are likely to be populated in the Leg.
   */
  travel_mode: 'walk'

  /**
   * This provides the list of turn instructions to guide the user through Legs where the user needs to navigate, such as when walking or using a scooter or bike.
   */
  instructions?: Instruction[]

  /**
   * If provided, indicates which parts of a walk are inside of a station.
   */
  station_walk_type?: /**
   * This walking leg has no relationship to a transit station, so no `walk_details_*` fields are provided. This is the default when this field is omitted.
   */
  | 'outside_station'
    /**
     * This walking leg ends by entering a station and walking to the platform, `walk_details_enter_station` is provided
     */
    | 'enter_station'
    /**
     * This walking leg takes place entirely between two platforms in one station, no `walk_details_*` fields are provided.
     */
    | 'change_platforms'
    /**
     * This walking leg starts by exiting a station, `walk_details_exit_station` is provided
     */
    | 'exit_station'
    /**
     * This walking leg involves exiting a station and entering another nearby station; both `walk_details_exit_station` and `walk_details_enter_station` are provided
     */
    | 'walk_between_stations'

  /**
   * When a walk Leg ends by entering a transit station, this can provide information on which entrance the rider should use, and how much of the Leg's walk duration takes place between the entrance and the platform.
   */
  walk_details_enter_station?: StationWalkDetails

  /**
   * When a walk Leg begins by exiting a transit station, this can provide information on which exit the rider should use, and how much of the Leg's walk duration takes place between the platform and the exit.
   */
  walk_details_exit_station?: StationWalkDetails

  path_annotations?: (PathAnnotation & {
    /**
     * If present and true, this Path Annotation refers to a section of the path where the user should dismount and walk alongside their vehicle. This only relevant in the case of Legs where travel_mode is self_piloted.
     */
    should_walk?: boolean
  })[]
}

interface LegTransit extends LegBase {
  /**
   * Identifies the kind of travel described by this leg. New options are likely to be added over time. This value indicates which other fields are likely to be populated in the Leg.
   *
   * Public transportation with fixed routes & stops such as bus, metro, train, ferry
   */
  travel_mode: 'transit'

  stops: Stop[]
}

interface LegSelfPiloted extends Omit<LegBase, 'services'> {
  /**
   * Identifies the kind of travel described by this leg. New options are likely to be added over time. This value indicates which other fields are likely to be populated in the Leg.
   *
   * Vehicles such as e-scooters, bicycles, motor scooters, private automobiles that the user pilots themselves
   */
  travel_mode: 'self_piloted'

  /**
   * This provides the list of turn instructions to guide the user through Legs where the user needs to navigate, such as when walking or using a scooter or bike.
   */
  instructions: Instruction[]
}

interface LegOnDemand extends LegBase {
  /**
   * Identifies the kind of travel described by this leg. New options are likely to be added over time. This value indicates which other fields are likely to be populated in the Leg.
   *
   * Services such as rideshare, cab, demand-responsive transit services where the path, pickup and dropoff points are determined by the user rather than fully pre-determined
   */
  travel_mode: 'on_demand'
}

export type Leg = LegWalking | LegTransit | LegSelfPiloted | LegOnDemand
