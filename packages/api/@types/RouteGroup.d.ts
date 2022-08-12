export interface RouteGroup {
  /**
   * ID of a group a Route contains in.
   */
  group_id: string

  /**
   * Localised name of a Route group, e.g. 'Transit' or 'Le métro'.
   */
  group_name: string

  /**
   * A zero-based position of a Route within specific group.
   */
  route_position: string
}
