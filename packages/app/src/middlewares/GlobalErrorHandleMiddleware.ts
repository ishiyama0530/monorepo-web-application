import { HttpError, ILogger, LoggerSymbol } from '@modules/common'
import { NextFunction, Request, Response } from 'express'
import httpContext from 'express-http-context'
import { HttpContextKeys } from '../constants/HttpContextKeys'
import { iocContainer } from '../dependency_injection/IocContainer'
import { Error4xx } from '../dto/errors/Error4xx'
import { Error5xx } from '../dto/errors/Error5xx'
import { TraceMeta } from './SessionMiddleware'

let logger: ILogger | null = null

export const handle = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof HttpError) {
    res.status(error.status).json(new Error4xx(error.name))
  } else {
    res.status(500).json(new Error5xx('InternalServerError'))
  }

  if (logger === null) {
    logger = iocContainer.get<ILogger>(LoggerSymbol)
  }

  const traceMeta: TraceMeta = httpContext.get(HttpContextKeys.traceMeta)
  logger.error(
    '{' +
      `error: ${JSON.stringify(error)}, ` +
      `user: ${JSON.stringify(req.user)}, ` +
      `meta: ${JSON.stringify(traceMeta)}` +
      '}'
  )
}
