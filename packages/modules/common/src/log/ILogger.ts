export const LoggerSymbol = Symbol.for('@common/modules/logger')

export interface ILogger {
  info(message: string): void
  warn(message: string): void
  error(message: string): void
  fatal(message: string): void
}
