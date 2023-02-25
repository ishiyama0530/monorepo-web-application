import { UserEntity } from './UserEntity'

export const UserRepositorySymbol = Symbol.for('@modules/user/domain/UserRepository')

export interface IUserRepository {
  create(user: Readonly<UserEntity>): Promise<void>
  delete(userId: string): Promise<void>
}
