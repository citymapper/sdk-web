import { Coordinates } from './Coordinates'
import { HireVehicleStationMetadata } from './HireVehicleMetadata'
export interface HireVehicleDropoffLeg {
  coordinates: Coordinates

  hire_vehicle_station: HireVehicleStationMetadata

  suggested: boolean
}
