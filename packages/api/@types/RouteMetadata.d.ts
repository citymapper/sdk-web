import { RouteGroup } from './RouteGroup'
export interface RouteMetadata {
  groups: RouteGroup[]

  /**
   * Human-readable localized name of the profile identifier. For example, if a response has "language": "de-DE", profile in a walk Route object may be "main_roads" and this localized profile_name will be "Hauptstraßen".
   */
  profile_name: string
}
