import { Departure } from './Departure'
import { HireVehicleDropoffLeg } from './HireVehicleDropoffLeg'
import { HireVehicleLeg } from './HireVehicleLegPickup'
import { Status } from './Status'
export interface LegUpdatableDetail {
  /**
   * An array of Departure objects, giving alternate departures for the services in the Legs in which this property appears. The array can contain a mixture of different Departure types—for example, it's common to receive live information for the next few departures, followed by scheduled information. For legs with multiple alternate Services, this array is likely to contain a mixture of departures corresponding to the different alternate services.
   *
   * The number of Departures returned will depend on the availability of information.
   */
  departures?: Departure[]

  /**
   * This indicates the availability of live departure information for the Services used in this Leg. Live departure information is not available for all transit services, and some transit services have live information that cannot be determined quickly enough to be included in all requests. The value of this property characterizes the contents of the departures array in this Leg Updatable Detail, and indicates whether an additional request is likely to yield additional live times for this Leg.
   */
  live_departure_availability?:
    | 'unknown'
    | 'none_available'
    | 'included'
    | 'additional_request'

  /**
   * An array of Status objects that relate to this Leg.
   */
  statuses?: Status[]

  /**
   * The time at which Citymapper thinks the user will set out on this leg, given available departure information. In the case of Legs of `travel_type` `transit`, this excludes waiting time.
   */
  leg_departure_time: string

  /**
   * The time at which Citymapper thinks the user will arrive at the end of this leg, given available departure information and expected travel speed.
   */
  leg_arrival_time: string

  /**
   * Included in a `self_piloted` leg which involves a hire vehicle. Indicates the locations where the user can pick up a vehicle used to complete the leg. The listed places are the ones determined to be the "best" places to pick up a vehicle - they might not always be the closest by crow-flies distance.
   */
  vehicle_pickup_places?: HireVehicleLeg[]

  /**
   * May be included in a `self_piloted` leg which involves a hire vehicle. Indicates the locations where can drop off the vehicle used to complete the leg. The listed places are the ones determined to be the "best" places to drop the vehicle off - they might not always be the ones closest to the eventual destination by crow-flies distance.
   */
  vehicle_dropoff_places?: HireVehicleDropoffLeg[]
}
