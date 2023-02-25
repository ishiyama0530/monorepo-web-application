import { injectable } from 'inversify'
import { seed, TicketInMemoryDb } from '../../db/TicketInMemoryDb'
import { ITicketRepository } from '../domain/ITicketRepository'
import { TicketEntity } from '../domain/TicketEntity'

@injectable()
export class TicketRepository implements ITicketRepository {
  async create(ticket: Readonly<TicketEntity>): Promise<void> {
    TicketInMemoryDb.push(ticket)
    return Promise.resolve()
  }

  async delete(ticketId: string): Promise<void> {
    const idx = TicketInMemoryDb.findIndex((x) => x.ticketId === ticketId)
    TicketInMemoryDb.splice(idx, 1)
    if (TicketInMemoryDb.length < 1) {
      TicketInMemoryDb.push(...seed)
    }
    return Promise.resolve()
  }
}
