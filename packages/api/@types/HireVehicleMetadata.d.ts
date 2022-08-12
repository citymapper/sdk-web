export interface HireVehicleMetadata {
  /**
   * The public name of this vehicle, if applicable, for display to the user.
   */
  name?: string

  /**
   * Indicates which Service in the Leg this Vehicle belongs to, in order to indicate Service and Brand naming and imagery. This is redundant in single-Service Legs, but it's essential in Legs that have alternate equivalent services.
   */
  service_id: string

  /**
   * The type of fuel this vehicle uses for propulsion (if any). Note, it is possible that additional values will be added to this list in future. If this field is not present, the vehicle has no internal propulsion source (i.e. it is purely human-powered).
   */
  propulsion_type?: 'electric' | 'combustion'

  /**
   * The estimated range this vehicle can travel with its remaining power or fuel, if applicable.
   */
  current_range_meters?: number

  /**
   * This vehicle's remaining power or fuel, expressed as a value between 0 and 1.
   */
  current_fuel_percent?: number
}

export interface HireVehicleStationMetadata {
  /**
   * The public name of the station for display to the user.
   */
  name: string

  /**
   * Indicates which Service in the Leg the vehicles contained in this dock belongs to, in order to indicate Service and Brand naming and imagery. This is redundant in single-Service Legs, but it's essential in Legs that have alternate equivalent services.
   */
  service_id: string

  /**
   * The number of vehicles at this station currently available for rental.
   */
  num_vehicles_available: number

  /**
   * The number of functional docks available that are able to accept vehicles for return. This field will not be present for stations with unlimited docking capacity.
   */
  num_docks_available: number
}
