export interface Price {
  /**
   * The given price as a formatted string. By default, this is in the native currency format of the region where the route occurs.
   */
  formatted: string

  /**
   * The price as a decimal value, encoded as a string to avoid floating-point accuracy issues. It will not include currency symbols, and the separator between major and minor units will always be `.`, regardless of the region.
   */
  amount: string

  /**
   * The currency in which the price is given, in three-letter ISO 4217 form.
   */
  currency: string
}
