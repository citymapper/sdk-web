import { Brand } from './Brand'
import { ServiceImage } from './ServiceImage'
import { VehicleType } from './VehicleType'
export interface Service {
  /**
   * The identifier for the service
   */
  id: string

  /**
   * A string that can be displayed to the user to describe this service
   */
  name: string

  /**
   * This is a priority list of vehicle types that can be used to describe the vehicle used by this Service. The list is ordered from more specific to less specific vehicle type, to allow for refinements to the list of types to be added over time, and to allow consumers of the API to make more generic distinctions if desired.
   */
  vehicle_types: VehicleType[]

  /**
   * Provides the branding attached to the service. The main purpose of Brand is to determine which specific imagery to show for the service, particularly in the case where the Service doesn't have distinct images of its own.
   */
  brand: Brand

  images?: ServiceImage[]

  image_key?: string

  /**
   * The basic color associated with this service, for graphical uses such as map lines.
   *
   * The color is encoded as a capitalized hexadecimal RGB value starting with #. For instance, #2850AD encodes the 24-bit RGB value of (40, 80, 173).
   */
  color?: string

  /**
   * A background color for use with this service, in cases where text will be shown on a colored background. Used in conjunction with text_color.
   *
   * The color is encoded as a capitalized hexadecimal RGB value starting with #. For instance, #2850AD encodes the 24-bit RGB value of (40, 80, 173).
   */
  background_color?: string

  /**
   * A text color for use with this service, in cases where text will be shown on a colored background. Used in conjunction with background_color. If omitted, it means that white (#FFFFFF) has sufficient contrast against the given background_color or color values.
   */
  text_color?: string
}
