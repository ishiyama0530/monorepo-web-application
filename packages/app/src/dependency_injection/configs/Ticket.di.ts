import {
  ITicketRepository,
  TicketCreateService,
  TicketCreateServiceSymbol,
  TicketDeleteService,
  TicketDeleteServiceSymbol,
  TicketFindByTicketIdService,
  TicketFindByTicketIdServiceSymbol,
  TicketFindManyService,
  TicketFindManyServiceSymbol,
  TicketRepository
} from '@modules/ticket'
import { TicketRepositorySymbol } from '@modules/ticket/src/domain/ITicketRepository'
import { iocContainer } from '../IocContainer'

// domains
iocContainer.bind<ITicketRepository>(TicketRepositorySymbol).to(TicketRepository)

// applications
iocContainer.bind(TicketCreateServiceSymbol).to(TicketCreateService)
iocContainer.bind(TicketDeleteServiceSymbol).to(TicketDeleteService)
iocContainer.bind(TicketFindByTicketIdServiceSymbol).to(TicketFindByTicketIdService)
iocContainer.bind(TicketFindManyServiceSymbol).to(TicketFindManyService)
