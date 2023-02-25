import { inject, injectable } from 'inversify'
import { IUserRepository, UserRepositorySymbol } from '../domain'

export const UserDeleteServiceSymbol = Symbol.for(`@modules/user/application/UserDeleteService`)

@injectable()
export class UserDeleteService {
  constructor(@inject(UserRepositorySymbol) private readonly userRepository: IUserRepository) {}
  async handle(userId: string): Promise<void> {
    await this.userRepository.delete(userId)
  }
}
