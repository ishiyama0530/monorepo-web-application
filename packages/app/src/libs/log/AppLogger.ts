import { ILogger } from '@modules/common'
import httpContext from 'express-http-context'
import { injectable } from 'inversify'
import { HttpContextKeys } from '../../constants/HttpContextKeys'
import { TraceMeta } from '../../middlewares/SessionMiddleware'

@injectable()
export class AppLogger implements ILogger {
  info(message: string): void {
    console.log(`level: info, msg: ${message}, traceId: ${this.getTraceId()}`)
  }
  warn(message: string): void {
    console.warn(`level: warn, msg: ${message}, traceId: ${this.getTraceId()}`)
  }
  error(message: string): void {
    console.error(`level: error, msg: ${message}, traceId: ${this.getTraceId()}`)
  }
  fatal(message: string): void {
    console.error(`level: fatal, msg: ${message}, traceId: ${this.getTraceId()}`)
  }

  private getTraceId() {
    const traceMeta: TraceMeta = httpContext.get(HttpContextKeys.traceMeta)
    return traceMeta.traceId
  }
}
