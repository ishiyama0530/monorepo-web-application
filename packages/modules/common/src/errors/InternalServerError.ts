import { HttpError } from './HttpError'

export class InternalServerError extends HttpError {
  constructor(message: string) {
    super(500, 'Occurred internal server error', message)
  }
}
