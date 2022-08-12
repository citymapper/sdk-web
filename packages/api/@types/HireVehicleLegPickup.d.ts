import { Coordinates } from './Coordinates'
import { HireVehicleMetadata } from './HireVehicleMetadata'
import { HireVehicleStationMetadata } from './HireVehicleMetadata'

interface HireVehicleLegPickupBase {
  coordinates: Coordinates

  /**
   * When true, indicates that this represents the vehicle or station that corresponds to the data in the rest of the leg, and any preceeding walk leg
   */
  suggested: boolean
}

interface HireVehicleLegPickup extends HireVehicleLegPickupBase {
  /**
   * Represents a free floating vehicle (as opposed to a dock or station containing vehicles) which is available for pickup. If the vehicle includes a motor to provide assistance to the rider, then `propulsion_type` will indicate the type of fuel, and one (or both) of `current_range_meters` and `current_fuel_percent` may be present.
   */
  hire_vehicle: HireVehicleMetadata

  /**
   * Represents a station or "dock", where multiple hire vehicles may be parked.
   */
  hire_vehicle_station?: HireVehicleStationMetadata
}

interface HireVehicleLegPickupStation extends HireVehicleLegPickupBase {
  /**
   * Represents a free floating vehicle (as opposed to a dock or station containing vehicles) which is available for pickup. If the vehicle includes a motor to provide assistance to the rider, then `propulsion_type` will indicate the type of fuel, and one (or both) of `current_range_meters` and `current_fuel_percent` may be present.
   */
  hire_vehicle?: HireVehicleMetadata

  /**
   * Represents a station or "dock", where multiple hire vehicles may be parked.
   */
  hire_vehicle_station: HireVehicleStationMetadata
}

export type HireVehicleLeg = HireVehicleLegPickup | HireVehicleLegPickupStation
