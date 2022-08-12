interface DepartureTransitBase {
  /**
   * Indicates which Service in the Leg this Departure refers to, in order to indicate Service and Brand naming and imagery. This is redundant in single-Service Legs, but it's essential in Legs that have alternate equivalent services.
   */
  service_id: string

  /**
   * When Departures are given as part of a transit directions response in a Leg, the suggested_departure flag indicates whether Citymapper thinks this departure should be caught, following the estimated `route_departure_time` and subsequent `leg_departure_time` and `leg_arrival_time`s. Note that these times assume the user is at the start of the Route.
   */
  suggested_departure?: /**
   * Indicates that this departure is the one used to calculate the `leg_{depart,arrive}_time`
   */
  | 'suggested'
    /**
     * Indicates that taking this departure would still result in arriving at the same final `route_arrival_time`.
     */
    | 'alternative'

  /**
   * Text identifying the destination or pattern of this departure. This generally corresponds to text shown on the front of a transit vehicle. It will not include the Service or Brand name.
   */
  headsign?: string

  /**
   * A user-facing identifier for the scheduled time of this departure, effectively the original time of the departure in the local format. It will only be present where the scheduled time is commonly used as part of the name (typically along with the headsign) when referring to this departure in e.g. station announcements. A concrete example of this type of departure in an announcement might be the "10:45 to Liverpool Street", where "10:45" is the time_name, and "Liverpool Street" is the headsign
   */
  time_name?: string

  /**
   * A user-facing identifier for this specific departure or class of departures. This is generally used in commuter rail systems as a train number.
   */
  short_name?: string

  /**
   * Indicates whether or not the service is on time. This is generally only provided for services where this information is commonly provided to the rider, for instance commuter trains.
   */
  time_status?: /**
   * The status of this departure is unknown (also signaled by the `time_status` property being omitted).
   */
  | 'unknown'
    /**
     * This departure is on time.
     */
    | 'on_time'
    /**
     * This departure is running behind schedule. In this case, the amount of delay can be determined from the difference between `live_time` and `scheduled_time`.
     */
    | 'delay'
    /**
     * This departure has been canceled and will no longer arrive.
     */
    | 'cancellation'

  /**
   * A short string indicating the "platform" or "track", such as 18 or A, when available. This is only used for short identifiers that would appear next to the word "Platform" or "Track"; longer platform names that can be shown on their own will be passed in direction_description on TransitLeg instead.
   */
  platform_short_name?: string
}

interface DepartureTransitLive extends DepartureTransitBase {
  type: /**
   * Real-time information determined from vehicle tracking systems
   */
  'live'

  /**
   * The current time when the service is expected to depart, based on live vehicle tracking.
   *
   * The time is expressed in ISO 8601 format, including a date, time, and time zone in which the event occurs. For example, 2020-08-19T08:10:42-04:00 expresses August 19, 2020 at 8:10am in Eastern Daylight Time.
   */
  live_time: string

  /**
   * The time when the service is expected to depart, according to the pre-published timetable. In departures with type of live, the scheduled_time is included when possible to indicate which timetabled departure the Citymapper service has associated the live departure with.
   *
   * The time is expressed in ISO 8601 format, including a date, time, and time zone in which the event occurs. For example, 2020-08-19T08:10:42-04:00 expresses August 19, 2020 at 8:10am in Eastern Daylight Time.
   */
  scheduled_time?: string
}

interface DepartureTransitScheduledTime extends DepartureTransitBase {
  type: /**
   * A scheduled departure at an exact time according to the published timetable, does not include real-time/live information
   */
  'scheduled'
  /**
   * The time when the service is expected to depart, according to the pre-published timetable. In departures with type of live, the scheduled_time is included when possible to indicate which timetabled departure the Citymapper service has associated the live departure with.
   *
   * The time is expressed in ISO 8601 format, including a date, time, and time zone in which the event occurs. For example, 2020-08-19T08:10:42-04:00 expresses August 19, 2020 at 8:10am in Eastern Daylight Time.
   */
  scheduled_time?: string
}

interface DepartureTransitFrequency extends DepartureTransitBase {
  type: 'frequency'

  /**
   * The approximate time between departures during the time of day specified by `frequency_start_time` and `frequency_end_time`. The frequency is expressed as an array of two integers, which encode a range of headways.
   *
   * For instance, a value of [180, 300] means that vehicles are expected to depart roughly every 3-5 minutes. Providing the same number twice indicates a simple headway rather than a range. For instance, the value [750, 750] means that the headway is every 12.5 minutes.
   *
   * Multiple Departures with type of `frequency` can be returned in the same array, indicating how the `frequency` changes during different parts of the day. In this case, each Departure of type `frequency` will have a distinct `frequency_start_time` and `frequency_end_time` to indicate the time of day, along with the `frequency_seconds_range` expressing the service frequencies during that period.
   */
  frequency_seconds_range: [number, number]

  /**
   * The beginning of the period in the day in which this service has the frequency expressed by `frequency_seconds_range`.
   */
  frequency_start_time?: string

  /**
   * The end of the period in the day in which this service has the frequency expressed by `frequency_seconds_range`.
   */
  frequency_end_time?: string
}

export type Departure =
  | DepartureTransitLive
  | DepartureTransitScheduledTime
  | DepartureTransitFrequency
