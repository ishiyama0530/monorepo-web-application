import { NextFunction, Request, Response } from 'express'
import httpContext from 'express-http-context'
import { v4 as uuid } from 'uuid'
import { HttpContextKeys } from '../constants/HttpContextKeys'

export type TraceMeta = {
  traceId: string
}

export const handle = (req: Request, res: Response, next: NextFunction) => {
  const traceId = uuid()
  const meta: TraceMeta = { traceId }
  httpContext.set(HttpContextKeys.traceMeta, meta)

  next()

  res.setHeader('x-traceId', traceId)
}
