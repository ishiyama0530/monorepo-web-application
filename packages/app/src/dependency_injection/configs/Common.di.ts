import { ConsoleLogger, ILogger, LoggerSymbol } from '@modules/common'
import { iocContainer } from '../IocContainer'

iocContainer.bind<ILogger>(LoggerSymbol).to(ConsoleLogger)
