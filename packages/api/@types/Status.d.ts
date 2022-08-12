export interface Status {
  /**
   * Indicates the type/level/severity expressed by this Status. This can be used to choose icons, and determine whether to show different Status entries.
   */
  type: 'unknown' | 'no_issues' | 'travel_affected' | 'travel_prevented'

  /**
   * A relatively short title for the Status.
   */
  title: string

  /**
   * An in-depth description of the Status. This will be provided as plain text.
   */
  description: string

  /**
   * If this Status relates to Services rather than Stops, this will contain the id of one or more Services. The ability to specify multiple services is intended to prevent needless duplication of Status reporting.
   */
  service_ids: string[]

  /**
   * If this Status relates to specific stops (as opposed to Services, or sections of Services running between specific stops), this will contain the id of one or more relevant Stops.
   */
  stop_ids?: string[]

  /**
   * If this Status relates to sections of Services between different Stops, this will indicate which sections, in combination with service_ids. This field relates to services traveling between Stops, rather than whether or not the Stops are open or closed (which is represented by stop_ids).
   */
  service_stop_ranges?: {
    /**
     * The id of Stop which starts the affected section of the Service.
     */
    start_stop_id: string

    /**
     * The id of Stop which ends the affected section of the Service.
     */
    end_stop_id: string
  }[]
}
