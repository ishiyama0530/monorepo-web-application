import { injectable } from 'inversify'
import { seed, UsersInMemoryDb } from '../../db/UsersInMemoryDb'
import { IUserRepository, UserEntity } from '../domain'

@injectable()
export class UserRepository implements IUserRepository {
  async create(user: Readonly<UserEntity>): Promise<void> {
    UsersInMemoryDb.push(user)
    return Promise.resolve()
  }

  async delete(userId: string): Promise<void> {
    // TODO: admin削除しない
    const idx = UsersInMemoryDb.findIndex((x) => x.userId === userId)
    UsersInMemoryDb.splice(idx, 1)
    if (UsersInMemoryDb.length < 3) {
      UsersInMemoryDb.push(...seed.filter((x) => x.role !== 'administrator'))
    }
    return Promise.resolve()
  }
}
