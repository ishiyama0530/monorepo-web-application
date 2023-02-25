export class HttpError extends Error {
  constructor(readonly status: number, name: string, message: string) {
    super(message)
    this.name = name
  }
}
