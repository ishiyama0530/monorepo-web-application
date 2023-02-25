import { injectable } from 'inversify'
import { TicketInMemoryDb } from '../../db/TicketInMemoryDb'
import { TicketEntity } from '../domain/TicketEntity'

export const TicketFindManyServiceSymbol = Symbol.for(
  '@modules/ticket/application/TicketFindManyService'
)

@injectable()
export class TicketFindManyService {
  async handle(): Promise<TicketEntity[]> {
    return TicketInMemoryDb.map((x) => x).reverse()
  }
}
