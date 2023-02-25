import { NotFoundError } from '@modules/common'
import { injectable } from 'inversify'
import { TicketInMemoryDb } from '../../db/TicketInMemoryDb'
import { TicketEntity } from '../domain/TicketEntity'

export const TicketFindByTicketIdServiceSymbol = Symbol.for(
  '@modules/ticket/application/TicketFindByTicketIdService'
)

@injectable()
export class TicketFindByTicketIdService {
  async handle(ticketId: string): Promise<TicketEntity> {
    const ticket = TicketInMemoryDb.find((x) => x.ticketId === ticketId)
    if (!ticket) {
      throw new NotFoundError(`ticketId:${ticketId}`)
    }
    return ticket
  }
}
