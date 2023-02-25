import { ForbiddenError, UnauthorizedError } from '@modules/common'
import { Request } from 'express'
import { iocContainer } from '../dependency_injection/IocContainer'
import { AuthenticationSymbol, IAuthentication } from './Authentications/IAuthentication'

let authentication: IAuthentication | null = null

// set by tsoa.json
export async function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[]
): Promise<unknown> {
  if (securityName === 'auth') {
    if (authentication === null) {
      authentication = iocContainer.get<IAuthentication>(AuthenticationSymbol)
    }
    if (!request.headers.authorization) {
      throw new UnauthorizedError('Authorization header empty.')
    }
    // Bearer xxxxxx
    const token = request.headers.authorization.split(' ')[1]
    const result = await authentication.verifyToken(token, scopes)
    if (!result.ok) {
      if (result.status === 403) {
        throw new ForbiddenError(result.reason)
      } else {
        throw new UnauthorizedError(result.reason)
      }
    }
    return Promise.resolve({ userId: result.fields.iss })
  }

  throw new UnauthorizedError(`This securityName "${securityName}" is undefined.`)
}

// https://tsoa-community.github.io/docs/authentication.html
