import {
  IUserRepository,
  UserCreateService,
  UserCreateServiceSymbol,
  UserDeleteService,
  UserDeleteServiceSymbol,
  UserFindByEmailService,
  UserFindByEmailServiceSymbol,
  UserFindByUserIdService,
  UserFindByUserIdServiceSymbol,
  UserFindManyService,
  UserFindManyServiceSymbol,
  UserRepository,
  UserRepositorySymbol
} from '@modules/user'
import { iocContainer } from '../IocContainer'

// domains
iocContainer.bind<IUserRepository>(UserRepositorySymbol).to(UserRepository)

// applications
iocContainer.bind(UserCreateServiceSymbol).to(UserCreateService)
iocContainer.bind(UserFindManyServiceSymbol).to(UserFindManyService)
iocContainer.bind(UserFindByUserIdServiceSymbol).to(UserFindByUserIdService)
iocContainer.bind(UserDeleteServiceSymbol).to(UserDeleteService)
iocContainer.bind(UserFindByEmailServiceSymbol).to(UserFindByEmailService)
