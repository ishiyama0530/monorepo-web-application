import { NotFoundError } from '@modules/common'
import { injectable } from 'inversify'
import { UsersInMemoryDb } from '../../db/UsersInMemoryDb'
import { UserEntity } from '../domain/UserEntity'

export const UserFindByEmailServiceSymbol = Symbol.for(
  `@modules/user/application/UserFindByEmailService`
)

@injectable()
export class UserFindByEmailService {
  async handle(email: string): Promise<UserEntity> {
    const user = UsersInMemoryDb.find((x) => x.email === email)
    if (!user) {
      throw new NotFoundError(`email:${email}`)
    }
    return user
  }
}
