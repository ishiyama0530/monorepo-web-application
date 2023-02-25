import { Authentication } from '../../auth/Authentications/Authentication'
import { AuthenticationSymbol, IAuthentication } from '../../auth/Authentications/IAuthentication'
import { iocContainer } from '../IocContainer'

iocContainer.bind<IAuthentication>(AuthenticationSymbol).to(Authentication)
