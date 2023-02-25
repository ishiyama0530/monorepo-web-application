import { injectable } from 'inversify'
import { ILogger } from './ILogger'

@injectable()
export class ConsoleLogger implements ILogger {
  info(message: string): void {
    console.log('[info]:' + message)
  }
  warn(message: string): void {
    console.warn('[warn]:' + message)
  }
  error(message: string): void {
    console.error('[error]:' + message)
  }
  fatal(message: string): void {
    console.error('[fatal]:' + message)
  }
}
