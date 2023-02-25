import { injectable } from 'inversify'
import { UsersInMemoryDb } from '../../db/UsersInMemoryDb'
import { UserEntity } from '../domain/UserEntity'

export const UserFindManyServiceSymbol = Symbol.for(`@modules/user/application/UserFindManyService`)

@injectable()
export class UserFindManyService {
  async handle(): Promise<UserEntity[]> {
    return UsersInMemoryDb.map((x) => x).reverse()
  }
}
