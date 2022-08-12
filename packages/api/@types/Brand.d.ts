import { BrandImage } from './BrandImage'

export interface Brand {
  /**
   * The identifier for this Brand
   */
  id: string

  /**
   * The name of Brand
   */
  name: string

  /**
   * A list of Images that can be used to represent this Brand in a user interface. API consumers should use the first Image in the list that meets their criteria.
   */
  images?: BrandImage[]
}
