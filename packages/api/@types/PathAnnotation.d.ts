export interface PathAnnotation {
  /**
   * The start index of the coordinate range, as a 0-based index into the list of coordinates encoded by the path of a Leg.
   */
  start_index: number

  /**
   * The end index of the coordinate range, as a 0-based index into the list of coordinates encoded by the path of a Leg. end_index must be greater than or equal to start_index. If end_index = start_index, this refers to a single coordinate in the path.
   */
  end_index: number
}
