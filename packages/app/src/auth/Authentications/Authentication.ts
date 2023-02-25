import { NotFoundError, UnauthorizedError } from '@modules/common'
import { UserFindByEmailService, UserFindByEmailServiceSymbol } from '@modules/user'
import { inject, injectable } from 'inversify'
import jwt from 'jsonwebtoken'
import { IAuthentication, TokenParams, VerifyResult } from './IAuthentication'

const jwtTokenSecret = '4QWDirRuRJBCF4FzPx6icmPnbwmPeGjx'

@injectable()
export class Authentication implements IAuthentication {
  constructor(
    @inject(UserFindByEmailServiceSymbol)
    private readonly userFindByEmailService: UserFindByEmailService
  ) {}

  async issueToken(email: string, roles: string[]): Promise<string> {
    try {
      const resp = await this.userFindByEmailService.handle(email)
      if (!roles.some((x) => x === resp.role)) {
        throw new UnauthorizedError('Not permitted user.')
      }

      const payload: Partial<TokenParams> = {
        iss: resp.userId,
        role: resp.role
      }
      const token = jwt.sign(payload, jwtTokenSecret, {
        expiresIn: '30 hours'
      })
      return token
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new UnauthorizedError('Unregister user.')
      }
      throw error
    }
  }

  async verifyToken(token: string, roles?: string[]): Promise<VerifyResult> {
    try {
      const decoded = jwt.verify(token, jwtTokenSecret)
      if (!isTokenParams(decoded)) {
        return { ok: false, status: 401, reason: 'Invalid token.' }
      }
      if (roles && !roles.some((x) => x === decoded.role)) {
        return { ok: false, status: 403, reason: 'Not permitted user.' }
      }
      return { ok: true, fields: decoded }
    } catch (error) {
      if (error instanceof Error && error.name === 'JsonWebTokenError') {
        throw new UnauthorizedError('Invalid token.')
      }
      throw error
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTokenParams(arg: any): arg is TokenParams {
  return arg && arg.exp !== undefined && arg.iss !== undefined
}
