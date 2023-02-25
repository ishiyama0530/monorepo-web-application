import { inject, injectable } from 'inversify'
import { ITicketRepository, TicketRepositorySymbol } from '../domain/ITicketRepository'

export const TicketDeleteServiceSymbol = Symbol.for(
  `@modules/ticket/application/TicketDeleteService`
)

@injectable()
export class TicketDeleteService {
  constructor(
    @inject(TicketRepositorySymbol) private readonly ticketRepository: ITicketRepository
  ) {}
  async handle(ticketId: string): Promise<void> {
    await this.ticketRepository.delete(ticketId)
  }
}
