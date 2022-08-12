interface InstructionBase {
  type: 'turn' | 'enter_roundabout' | 'exit_roundabout' | 'arrive'
  /**
   * 0-based index into the list of coordinates provided by the path property of the Leg. This indicates the location at which the instruction is to be followed, so it will be the location of the turn on the path, or the start or end of the Leg.
   */
  path_index: number

  /**
   * The distance in meters of the section of the path prior to this instruction. This property will be omitted for initial instructions of type depart.
   */
  distance_meters?: number

  /**
   * The time in seconds that the user is expected to take to traverse the section of the path prior to this instruction. This property will be omitted for initial instructions of type depart.
   */
  time_seconds?: number

  /**
   * Plain-text description of the Instruction to the user.
   */
  description_text?: string

  /**
   * Text format for rendering the Instruction with emphasized elements, where `{key}` indicates a part of the string that must be replaced with content defined by the entry corresponding to `key` in `description_format_replacements`.
   *
   * This allows the elements described by the replacements to be formatted differently by the client, if desired.
   *
   * Key strings will contain only the characters `[a-zA-Z0-9]`.
   *
   * `{ }` will not be nested, and the literal characters `{` and `}` are encoded by the escape sequences `\{` and `\}`, respectively.
   */
  description_format?: string

  description_format_replacements?: {
    /**
     * A key corresponding to a string enclosed in `{}` in `description_format`.
     */
    key: string

    /**
     * The text to be used to replace the `{key}` substring in the `description_format`.
     */
    text: string

    /**
     * A value indicating what kind of real-world thing is being identified by this format replacement. This allows API clients to apply application-specific formatting if desired.
     */
    type?: /**
     * The name of a street, road, or other way
     */
    | 'street_name'
      /**
       * The number of an exit, generally from a roundabout
       */
      | 'exit_number'

    /**
     * An IETF BCP 47 language tag that indicates what language the associated `text` is in. Note that this can be different from the language of the surrounding description - this is most common when the replacement is a place-name in a local language whilst the description is in a different language.
     */
    language?: string
  }[]

  type_directions:
    | 'straight'
    | 'uturn'
    | 'left'
    | 'slight_left'
    | 'sharp_left'
    | 'right'
    | 'sligh_right'
    | 'sharp_right'
}

type InstructionDepart = Omit<
  InstructionBase,
  'distance_meters' | 'time_seconds' | 'type'
> & { type: 'depart' }

export type Instruction = InstructionBase | InstructionDepart
