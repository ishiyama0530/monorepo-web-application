import { TicketEntity } from './TicketEntity'

export const TicketRepositorySymbol = Symbol.for('@modules/ticket/domain/TicketRepository')

export interface ITicketRepository {
  create(ticket: Readonly<TicketEntity>): Promise<void>
  delete(ticketId: string): Promise<void>
}
