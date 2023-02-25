import { UserRole } from '@modules/user'

export const AuthenticationSymbol = Symbol.for('Authentication')

export type TokenParams = { exp: number; iss: string; role: UserRole }

export type VerifyResult =
  | {
      ok: true
      fields: TokenParams
    }
  | { ok: false; status: 401 | 403; reason: string }

export interface IAuthentication {
  issueToken(email: string, allowRoles: UserRole[]): Promise<string>
  verifyToken(token: string, roles?: string[]): Promise<VerifyResult>
}

export const scopes = {
  general: ['member', 'administrator'],
  maintenance: ['administrator']
}
