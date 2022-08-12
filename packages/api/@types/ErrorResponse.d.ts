export interface ErrorResponse {
  /**
   * A developer-readable message explaining the problem. Must not be displayed to the end user.
   */
  message: string

  /**
   * A string code that can be used for triggering error handling code paths. Only present in responses with non-200 HTTP code. Note new values may be added at any time.
   */
  error_code:
    | 'no-results'
    | 'coverage-region'
    | 'coverage-start'
    | 'coverage-end'
    | 'coverage-distance'
    | 'signature'
    | 'unknown-brand'
    | 'unknown-scenario'
    | 'request-format'
    | 'deprecated'
}
