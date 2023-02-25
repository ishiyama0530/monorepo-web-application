import { NotFoundError } from '@modules/common'
import { inject, injectable } from 'inversify'
import { v4 as uuid } from 'uuid'
import { UsersInMemoryDb } from '../../db/UsersInMemoryDb'
import { IUserRepository, UserRepositorySymbol } from '../domain/IUserRepository'
import { UserEntity } from '../domain/UserEntity'

export const UserCreateServiceSymbol = Symbol.for(`@modules/user/application/UserCreateService`)

export type UserCreateServiceInputData = Omit<UserEntity, 'userId'>

@injectable()
export class UserCreateService {
  constructor(@inject(UserRepositorySymbol) private readonly userRepository: IUserRepository) {}
  async handle(inputData: Readonly<UserCreateServiceInputData>): Promise<UserEntity> {
    const userEntity: UserEntity = {
      userId: uuid(),
      name: inputData.name,
      email: inputData.email,
      role: 'member'
    }
    await this.userRepository.create(userEntity)

    const user = UsersInMemoryDb.find((x) => x.userId === userEntity.userId)
    if (!user) {
      throw new NotFoundError(`userId:${userEntity.userId}`)
    }
    return user
  }
}
