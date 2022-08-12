import { ErrorResponse } from './@types/ErrorResponse'

export class APIError extends Error {
  error_code: ErrorResponse['error_code']
  response: Response

  constructor(error: ErrorResponse, response: Response) {
    super(error.message)
    this.error_code = error.error_code
    this.response = response
  }
}
