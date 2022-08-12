import { ResponseDirections } from './@types/ResponseDirections'
import { ResponseTravelTimes } from './@types/ResponseTravelTimes'
import { RouteUpdate } from './@types/RouteUpdate'
import { APIError } from './APIError'
/* I think we will need to import node-fetch here */

class Citymapper {
  private apiKey: string
  private apiEndpoint: string = 'https://api.external.citymapper.com/api'

  constructor(config: { apiKey: string; apiEndpoint?: string }) {
    this.apiKey = config.apiKey
    if (config.apiEndpoint) {
      this.apiEndpoint = config.apiEndpoint
    }
  }

  private async request<D = any>(
    url: string,
    init?: RequestInit
  ): Promise<Response & { data: D }> {
    const res = await fetch(this.apiEndpoint + url, {
      ...init,
      headers: {
        ...init?.headers,
        'Citymapper-Partner-Key': this.apiKey,
      },
    })

    if (res.status >= 200 && res.status < 300) {
      const data = await res.json()
      return { ...res, data }
    }
    const error = await res.json()
    throw new APIError(error, res)
  }

  /**
   * Takes an object and returns a URLSearchParams
   */
  private construct_params(params: Record<string, any>) {
    const url = new URLSearchParams()
    Object.keys(params).forEach((key) => {
      if (typeof params[key] === 'string') {
        url.append(key, encodeURI(params[key]))
      }
      if (Array.isArray(params[key])) {
        url.append(key, params[key].map((f: string) => encodeURI(f)).join(','))
      }
    })
    return url
  }

  /**
   * Determines the travel time in various modes of travel between the given two points at the time the request is made. If the call returns code 200, at least one of the `*_time_minutes` fields will be populated. Otherwise, a code 400 response will be returned.
   *
   * A request outside of the API coverage areas will be signaled with a code 400 response containing an `error_code` value of `coverage-start` or `coverage-end`. These failures are fast/resource-efficient and are not billed, so there's no need to pre-filter potential requests by location.
   *
   * Successful responses (HTTP code 200) will consume one "Travel Time" credit for each time returned. Unsuccessful calls will not consume any credits.
   */
  async travel_times(
    start: [number, number],
    end: [number, number],
    types?: ('walk' | 'transit' | 'bike' | 'scooter' | 'motorscooter')[]
  ): Promise<ResponseTravelTimes> {
    const params = this.construct_params({
      start,
      end,
      traveltime_types: types,
    })

    const { data } = await this.request<ResponseTravelTimes>(
      '/1/traveltimes?' + params
    )

    return data
  }

  /**
   * Gets a scooter route between two points, providing enough information to render it on a map, along with a duration estimate. (These results are optimized for small battery-powered scooters that the rider stands on.)
   *
   * This call assumes that the rider has a scooter at the `start` point, and provides an e-scooter route from there to the `end` point if both are within Citymapper's supported areas. The resulting route should contain a single scooter leg, though the `path_annotations` property of the Leg may indicate sections during which the user should walk beside the scooter.
   *
   * This call does not incorporate any information about scooter operators' coverage or parking areas, but other API calls may be available to do so.
   *
   * Successful responses (HTTP code 200) will consume one "Scooter Route" credit (or one "Scooter Reroute" credit if reroute_signature is used) for each HTTP response. Unsuccessful calls will not consume any credits.
   */
  async directions_scooter_ride(
    start: [number, number],
    end: [number, number],
    language?: string,
    /**
     * When rerouting (requesting an update to a previous response that accounts for the user's updated location), this value should be set to the signature provided in the original Route. This allows for more efficient determination of the updated Route.
     *
     * When providing this parameter, the current_location (when applicable) or start location should be set to the user's latest location.
     *
     * When this parameter is included, Citymapper may not return results in cases where the request differs significantly from the original, for instance if the end location is different, or if more than 1 hour has passed since the original request.
     */
    reroute_signature?: string,
    /**
     * An angle clockwise from North between 0 and 359, where North is 0 and East is 90.
     *
     * This bearing is used to influence the initial instruction text and/or routing, most-commonly to avoid the user from being asked to make a u-turn, if continuing on their current bearing gives a comparable route.
     *
     * This should be provided only if you wish to influence the initial direction of travel for the route.
     */
    start_bearing?: number
  ): Promise<ResponseDirections> {
    const params = this.construct_params({
      start,
      end,
      language,
      reroute_signature,
      start_bearing,
    })
    const { data } = await this.request<ResponseDirections>(
      '/1/directions/scooterride?' + params
    )
    return data
  }

  /**
   * **NOTE** this API is not available through open access, please contact sales. Please contact Citymapper using the details provided at the top of the page for information on integrating and using this API.
   *
   * Gets an e-scooter route between two points, including any initial and final walks. The resulting Route provides enough information to render it on a map, along with a duration estimate. These results are optimized for small battery-powered scooters that the rider stands on.
   *
   * This call can be used in several different ways:
   *
   * **Use any scooter of the specified Brand**
   *
   * This is the simplest call, only requiring start, end, and brand_id. Citymapper assumes that the user is at the start point, and chooses a scooter of the specified Brand, if possible.
   *
   * **Use a scooter at a specified location**
   *
   * By adding original_vehicle_location to start, end, and brand_id, Citymapper plans a Route that assumes the scooter is at the given location.
   *
   * **Update a Route in progress**
   *
   * In order to retrieve an updated Route that includes rerouting from the user's current location if they've diverged from the planned Route, the caller can add the current_location and ride_state properties, which indicates which Leg of the resulting Route should be rerouted around the user's current_location.
   *
   * Successful responses (HTTP code 200) will consume one "Scooter Route" credit (or one "Scooter Reroute" credit if reroute_signature is used) for each HTTP response. Unsuccessful calls will not consume any credits.
   */
  async directions_scooter(
    start: [number, number],
    end: [number, number],
    /**
     * The ID of the Brand of e-scooters to use for this route. This is necessary in order to determine the location of available scooters, along with any associated coverage and parking restrictions.
     */
    brand_id: string,
    /**
     * Indicates where along the Route the user is. If omitted, walking_to_vehicle is used. This property along with current_location allows the retrieval of an updated Route that reflects the user's current progress through it.
     */
    ride_state?: 'walking_to_vehicle' | 'riding' | 'walking_to_end',
    /**
     * The user's current location, in order to update the Route based on the user's location. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This parameter is used to get an updated Route that reflects the user's actual location if they diverge from the path given in the Route.
     *
     * If this is provided, the returned Route will contain this location. Which Leg of the Route will contain this location is decided by the value of the ride_state parameter.
     */
    current_location?: [number, number],
    /**
     * The location of the vehicle to be used, at the beginning of the vehicle ride part of the user's trip along the Route. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This must be provided when ride_state is riding or walking_to_end. If not provided when ride_state is walking_to_vehicle (or not specified), Citymapper will attempt to find the most appropriate vehicle that belongs to the specified brand_id.
     */
    ride_start_location?: [number, number],
    /**
     * The location the vehicle was dropped off at the end of the vehicle ride part of the user's trip along the Route. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This must be provided when ride_state is walking_to_end. In all other states this parameter is ignored.
     */
    ride_end_location?: [number, number],
    language?: string,
    reroute_signature?: string,
    start_bearing?: number
  ): Promise<ResponseDirections> {
    const params = this.construct_params({
      start,
      end,
      brand_id,
      ride_state,
      current_location,
      ride_start_location,
      ride_end_location,
      language,
      reroute_signature,
      start_bearing,
    })
    const { data } = await this.request<ResponseDirections>(
      '/1/directions/scooter?' + params
    )
    return data
  }

  /**
   * Gets a bike route between two points, providing enough information to render it on a map, along with a duration estimate.
   *
   * This call assumes that the rider has a bicycle at the start point, and provides a biking route from there to the end point if both are within Citymapper's supported areas. The resulting route should contain a single bike leg, though the path_annotations property of the Leg may indicate sections during which the user should walk beside the bike.
   *
   * This call does not incorporate any information about bike operators' coverage or parking areas, but other API calls may be available to do so.
   *
   * The maximum great-circle distance between the start and end is limited to 200km for this API.
   *
   * Successful responses (HTTP code 200) will consume one "Bike Route" credit (or one "Bike Reroute" credit if reroute_signature is used) for each HTTP response. Unsuccessful calls will not consume any credits.
   */
  async directions_bike_ride(
    start: [number, number],
    end: [number, number],
    /**
     * Indicates which "profiles" to use when calculating bike directions. Each profile can generate a different Route option, so requesting more profiles will generally give more options. Note that sometimes some of the resulting Routes will be identical (in the case of one route being optimal in more than one way), and a profile may not always yield a Route.
     * @default regular
     */
    profiles?: /**
     * Attempts to use roads with less traffic
     */
    | 'quiet'
      /**
       * The default profile, balances traffic with directness
       */
      | 'regular'
      /**
       * Attempts to find the shortest sensible Route
       */
      | 'fast',
    language?: string,
    reroute_signature?: string,
    start_bearing?: number
  ): Promise<ResponseDirections> {
    const params = this.construct_params({
      start,
      end,
      profiles,
      language,
      reroute_signature,
      start_bearing,
    })
    const { data } = await this.request<ResponseDirections>(
      '/1/directions/bikeride?' + params
    )
    return data
  }

  /**
   * **NOTE** this API is not available through open access, please contact sales. Please contact Citymapper using the details provided at the top of the page for information on integrating and using this API.
   *
   * Gets an bike route between two points, including any initial and final walks. The resulting Route provides enough information to render it on a map, along with a duration estimate.
   *
   * This call can be used in several different ways:
   *
   * **Use any bike of the specified Brand**
   *
   * This is the simplest call, only requiring start, end, and brand_id. Citymapper assumes that the user is at the start point, and chooses a bike of the specified Brand, if possible.
   *
   * **Use a bike at a specified location**
   *
   * By adding original_vehicle_location to start, end, and brand_id, Citymapper plans a Route that assumes the bike is at the given location.
   *
   * **Update a Route in progress**
   *
   * In order to retrieve an updated Route that includes rerouting from the user's current location if they've diverged from the planned Route, the caller can add the current_location and ride_state properties, which indicates which Leg of the resulting Route should be rerouted around the user's current_location.
   *
   * Successful responses (HTTP code 200) will consume one "Bike Route" credit (or one "Bike Reroute" credit if reroute_signature is used) for each HTTP response. Unsuccessful calls will not consume any credits.
   */
  async directions_bike(
    start: [number, number],
    end: [number, number],
    /**
     * The ID of the Brand of bikes to use for this route. This is necessary in order to determine the location of available bikes, along with any associated coverage and parking restrictions.
     */
    brand_id: string,
    /**
     * Indicates where along the Route the user is. If omitted, walking_to_vehicle is used. This property along with current_location allows the retrieval of an updated Route that reflects the user's current progress through it.
     */
    ride_state?: 'walking_to_vehicle' | 'riding' | 'walking_to_end',
    /**
     * The user's current location, in order to update the Route based on the user's location. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This parameter is used to get an updated Route that reflects the user's actual location if they diverge from the path given in the Route.
     *
     * If this is provided, the returned Route will contain this location. Which Leg of the Route will contain this location is decided by the value of the ride_state parameter.
     */
    current_location?: [number, number],
    /**
     * The location of the vehicle to be used, at the beginning of the vehicle ride part of the user's trip along the Route. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This must be provided when ride_state is riding or walking_to_end. If not provided when ride_state is walking_to_vehicle (or not specified), Citymapper will attempt to find the most appropriate vehicle that belongs to the specified brand_id.
     */
    ride_start_location?: [number, number],
    /**
     * The location the vehicle was dropped off at the end of the vehicle ride part of the user's trip along the Route. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This must be provided when ride_state is walking_to_end. In all other states this parameter is ignored.
     */
    ride_end_location?: [number, number],
    language?: string,
    reroute_signature?: string,
    start_bearing?: number
  ): Promise<ResponseDirections> {
    const params = this.construct_params({
      start,
      end,
      brand_id,
      ride_state,
      current_location,
      ride_start_location,
      ride_end_location,
      language,
      reroute_signature,
      start_bearing,
    })

    const { data } = await this.request<ResponseDirections>(
      '/1/directions/bike?' + params
    )

    return data
  }

  /**
   * Gets a motorscooter route between two points, providing enough information to render it on a map, along with a duration estimate. (These results are optimized for larger internal combustion or electric scooters where the rider is seated.)
   *
   * This call assumes that the rider has a scooter at the start point, and provides an e-scooter route from there to the end point if both are within Citymapper's supported areas. The resulting route should contain a single scooter leg, though the path_annotations property of the Leg may indicate sections during which the user should walk beside the scooter.
   *
   * This call does not incorporate any information about scooter operators' coverage or parking areas, but other API calls may be available to do so.
   *
   * Successful responses (HTTP code 200) will consume one "Motor Scooter Route" credit (or one "Motor Scooter Reroute" credit if reroute_signature is used) for each HTTP response. Unsuccessful calls will not consume any credits.
   */
  async directions_motorscooter_ride(
    start: [number, number],
    end: [number, number],
    language?: string,
    reroute_signature?: string,
    start_bearing?: number
  ) {
    const params = this.construct_params({
      start,
      end,
      language,
      reroute_signature,
      start_bearing,
    })

    const { data } = await this.request<ResponseDirections>(
      '/1/directions/motorscooterride?' + params
    )

    return data
  }

  /**
   *
   */
  async directions_motorscooter(
    start: [number, number],
    end: [number, number],
    /**
     * The ID of the Brand of scooters to use for this route. This is necessary in order to determine the location of available scooters, along with any associated coverage and parking restrictions.
     */
    brand_id: string,
    /**
     * Indicates where along the Route the user is. If omitted, walking_to_vehicle is used. This property along with current_location allows the retrieval of an updated Route that reflects the user's current progress through it.
     */
    ride_state?: 'walking_to_vehicle' | 'riding' | 'walking_to_end',
    /**
     * The user's current location, in order to update the Route based on the user's location. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This parameter is used to get an updated Route that reflects the user's actual location if they diverge from the path given in the Route.
     *
     * If this is provided, the returned Route will contain this location. Which Leg of the Route will contain this location is decided by the value of the ride_state parameter.
     */
    current_location?: [number, number],
    /**
     * The location of the vehicle to be used, at the beginning of the vehicle ride part of the user's trip along the Route. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This must be provided when ride_state is riding or walking_to_end. If not provided when ride_state is walking_to_vehicle (or not specified), Citymapper will attempt to find the most appropriate vehicle that belongs to the specified brand_id.
     */
    ride_start_location?: [number, number],
    /**
     * The location the vehicle was dropped off at the end of the vehicle ride part of the user's trip along the Route. Provided in WGS84 'latitude,longitude' format. Coordinates should be in decimal, and only the first 6 digits of precision will be used.
     *
     * This must be provided when ride_state is walking_to_end. In all other states this parameter is ignored.
     */
    ride_end_location?: [number, number],
    language?: string,
    reroute_signature?: string,
    start_bearing?: number
  ): Promise<ResponseDirections> {
    const params = this.construct_params({
      start,
      end,
      brand_id,
      ride_state,
      current_location,
      ride_start_location,
      ride_end_location,
      language,
      reroute_signature,
      start_bearing,
    })

    const { data } = await this.request<ResponseDirections>(
      '/1/directions/motorscooter?' + params
    )

    return data
  }

  /**
   * Gets a walking route between two points, providing enough information to render it on a map, along with a duration estimate.
   *
   * Walking routes are expected to have a single Leg with a travel_mode of walk.
   *
   * If Citymapper can't compute walking directions for those points (generally for coverage reasons), the API will return a code 400 response.
   *
   * The maximum great-circle distance between the start and end is limited to 100km for this API.
   *
   * Successful responses (HTTP code 200) will consume one "Walk Route" credit (or one "Walk Reroute" credit if reroute_signature is used) for each HTTP response. Unsuccessful calls will not consume any credits.
   */
  async directions_walking(
    start: [number, number],
    end: [number, number],
    language?: string,
    /**
     * Indicates which "profiles" to use when calculating walking directions. Each profile can generate a different Route option, so requesting more profiles will generally give more options. Note that sometimes some of the resulting Routes will be identical (in the case of one route being optimal in more than one way), and a profile may not always yield a Route.
     */
    profiles?: /**
     * The default profile, attempts to find the fastest sensible Route
     */
    | 'fast'
      /**
       * Attempts to avoid backstreets and parks
       */
      | 'main_roads',
    reroute_signature?: string,
    start_bearing?: number
  ): Promise<ResponseDirections> {
    const params = this.construct_params({
      start,
      end,
      language,
      profiles,
      reroute_signature,
      start_bearing,
    })

    const { data } = await this.request<ResponseDirections>(
      '/1/directions/walk?' + params
    )
    return data
  }

  /**
   * By default, the results will contain up to 5 Routes. Each one will contain several Legs: usually one at the start and end of the Route with travel_mode of walk, with at least one with travel_mode of transit in between.
   *
   * Successful responses (HTTP code 200) will consume one "Transit Route" credit for each HTTP response. Unsuccessful calls will not consume any credits.
   */
  async directions_transit(
    start: [number, number],
    end: [number, number],
    /**
     * The time to be used as a departure or arrival time constraint when getting directions.
     *
     * The time is expressed in ISO 8601 format, including a date, time, and time zone. For example, 2020-08-19T08:10:42-04:00 expresses August 19, 2020 at 8:10am in Eastern Daylight Time.
     */
    time?: string,

    /**
     * When a time value is given, this determines how the time will be used to constrain the directions that are returned. When this isn't specified, depart_approximate is used. If no time is given, this has no effect.
     */
    time_type?: /**
     * Directions are chosen that get the user to their destination on or before time
     */
    | 'arrive'
      /**
       * Directions are chosen assuming the user leaves their origin as soon after time as possible
       */
      | 'depart'
      /**
       * Similar to depart, but allowing for later departures in order to return more preferable options even if they leave a bit later. This is Citymapper's default way of choosing directions when the time isn't specified
       */
      | 'depart_approximate',

    language?: string,

    /**
     * Maximum number of routes to return
     * @default 5
     */
    limit?: number
  ): Promise<ResponseDirections> {
    const params = this.construct_params({
      start,
      end,
      time,
      time_type,
      language,
      limit,
    })

    const { data } = await this.request<ResponseDirections>(
      '/1/directions/transit?' + params
    )

    return data
  }
  /**
   * **NOTE** This API requires the use of a Scenario ID to select the routing scenario used to determine the type and properties of Routes returned from this endpoint. Please contact Citymapper using the details provided at the top of the page for information on integrating and using this API.
   *
   * Computes Routes between two points based on a provided scenario.
   *
   * One or more groups of routes can be provided depending on a scenario. Each group will contain several Routes. Each Route will contain one or more Legs.
   *
   * Successful responses (HTTP code 200) will consume "Scenario Route" credits depending on a provided scenario and may vary. Unsuccessful calls will not consume any credits.
   */
  async directions_scenario(
    /**
     * Scenario ID for directions.
     */
    scenario_id: string,
    start: [number, number],
    end: [number, number],
    /**
     * The time to be used as a departure or arrival time constraint when getting directions.
     *
     * The time is expressed in ISO 8601 format, including a date, time, and time zone. For example, 2020-08-19T08:10:42-04:00 expresses August 19, 2020 at 8:10am in Eastern Daylight Time.
     */
    time?: string,

    /**
     * When a time value is given, this determines how the time will be used to constrain the directions that are returned. When this isn't specified, depart_approximate is used. If no time is given, this has no effect.
     */
    time_type?: /**
     * Directions are chosen that get the user to their destination on or before time
     */
    | 'arrive'
      /**
       * Directions are chosen assuming the user leaves their origin as soon after time as possible
       */
      | 'depart'
      /**
       * Similar to depart, but allowing for later departures in order to return more preferable options even if they leave a bit later. This is Citymapper's default way of choosing directions when the time isn't specified
       */
      | 'depart_approximate',
    language?: string
  ): Promise<ResponseDirections> {
    const params = this.construct_params({
      scenario_id,
      start,
      end,
      time,
      time_type,
      language,
    })

    const { data } = await this.request<ResponseDirections>(
      '/1/directions/scenario?' + params
    )
    return data
  }

  /**
   * This retrieves current and live departure information for multiple Routes previously obtained from the /directions/ endpoints.
   *
   * Only Routes that have at least one Leg with a Leg Updatable Detail can be updated using this API.
   *
   * Note it may not always be possible for Citymapper to provide current times or live departure and disruption information for a Leg.
   *
   * Successful responses (HTTP code 200) will consume one "Live Update" credit for each HTTP response. Unsuccessful calls will not consume any credits.
   */
  async live_departures(
    /**
     * An array of signature properties from previously-obtained Routes
     */
    signatures: string[]
  ): Promise<{ route_updates: RouteUpdate[] }> {
    const { data } = await this.request<{ route_updates: RouteUpdate[] }>(
      '/1/live/routeupdates',
      {
        method: 'POST',
        body: JSON.stringify({ signatures }),
      }
    )

    return data
  }
}

export default Citymapper
