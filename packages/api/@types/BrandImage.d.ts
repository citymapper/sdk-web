interface BrandImageBase {
  /**
   * The URL from which this Image can be retrieved. The image will be encoded in PNG format unless the `format` field indicates otherwise.
   */
  url: string

  /**
   * The width of the image in screen units. This corresponds to `px` in CSS, "points" on iOS, and "density-independent pixels" on Android.
   */
  width?: number

  /**
   * The height of the image in screen units. This corresponds to `px` in CSS, "points" on iOS, and "density-independent pixels" on Android.
   */
  height?: number

  /**
   * Indicates the ratio of image pixels to screen units. When not provided, 2 should be assumed. For instance, an Image with a width of 38, height of 41, and pixel_ratio of 2 has image pixel dimensions of 76 x 82.
   */
  pixel_ratio?: number

  /**
   * Indicates the file format of the image. The default value is png, indicating Portable Network Graphics bitmap format. At time of writing, all Images returned are in png format, and therefore this field will usually be omitted. However, in the future, additional format types may be provided in responses.
   */
  format?: string

  /**
   * If true, this indicates that this is a generic image entirely based on the vehicle type, rather than being customized for the specific brand or service. When a specific branded image of the same ui_role is available, it will be provided earlier in the list of images.
   */
  is_generic?: boolean

  /**
   * If true, this image contains a designated area for overlaying extra textual elements such as "stop indicator" letters. (Some regions have 2-4 letter codes on bus stop poles to distinguish between nearby stops.) The specific renderable area will depend on the ui_role.
   *
   * When this is true, there will generally also be a peer Image without space for text, for the more common case where no text rendering is needed. This alternate Image will appear earlier in the list of Images.
   */
  has_space_for_text?: boolean
}

interface BrandImagePinStation extends BrandImageBase {
  /**
   * Indicates the role that this image plays in a user interface. New values may be added at any time. See the parent object in the response for valid values in this context.
   */
  ui_role: /**
   * A pushpin-styled icon to display the location of a station, a stop or a dock with vehicles for hire on a map
   */
  | 'pin'
    /**
     * An icon to display beside the name of a station, stop or vehicle hire dock
     */
    | 'station'

  /**
   * Applies to BrandImages with ui_role of pin or station if Brand offers hire vehicles.
   *
   * If true, then this image represents a drop-off place for hire vehicles, for example a docking station for cycles or a parking area for e-scooters.
   *
   * An image representing drop-off place (is_dropoff_place set to true) will always be accompanied by an image representing pick-up place (is_dropoff_place set to false) provided earlier in the list of images.
   */
  is_dropoff_place?: boolean

  /**
   * Applies to BrandImages with ui_role of pin or station if Brand offers hire vehicles.
   *
   * If true, then this image represents a low capacity variant of pick-up or drop-off place for hire vehicles.
   *
   * Low capacity variant will always be accompanied by high capacity variant provided earlier in the list of images.
   */
  low_capacity?: boolean
}

interface BrandImageVehicle extends BrandImageBase {
  /**
   * Indicates the role that this image plays in a user interface. New values may be added at any time. See the parent object in the response for valid values in this context.
   */
  ui_role: /**
   * An icon that depicts the mode of travel for use in directions
   */
  | 'vehicle'
    /**
     * A compact icon to be displayed before the name of a Service to indicate the vehicle type
     */
    | 'vehicle_compact'
    /**
     * A pushpin-styled icon to display a free floating hire vehicle (for example bicycles or e-scooters) on a map
     */
    | 'pin_vehicle'
}

export type BrandImage = BrandImagePinStation | BrandImageVehicle
