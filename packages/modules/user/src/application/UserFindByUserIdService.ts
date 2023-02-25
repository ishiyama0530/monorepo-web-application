import { NotFoundError } from '@modules/common'
import { injectable } from 'inversify'
import { UsersInMemoryDb } from '../../db/UsersInMemoryDb'
import { UserEntity } from '../domain/UserEntity'

export const UserFindByUserIdServiceSymbol = Symbol.for(
  `@modules/user/application/UserFindByUserIdService`
)

@injectable()
export class UserFindByUserIdService {
  async handle(userId: string): Promise<UserEntity> {
    const user = UsersInMemoryDb.find((x) => x.userId === userId)
    if (!user) {
      throw new NotFoundError(`userId:${userId}`)
    }
    return user
  }
}
