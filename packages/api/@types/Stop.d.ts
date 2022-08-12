import { Coordinates } from './Coordinates'
export interface Stop {
  id: string

  name: string

  coordinates: Coordinates

  /**
   * Some transit systems (particularly in the UK) have 2-4 letter codes displayed prominently on bus stop poles to distinguish between nearby stops. When relevant, such "indicators" are provided in this field to allow them to be rendered into stop icons.
   */
  indicator_text?: string
}
