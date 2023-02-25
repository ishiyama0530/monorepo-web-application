import { InternalServerError } from '@modules/common'
import { inject, injectable } from 'inversify'
import { v4 as uuid } from 'uuid'
import { TicketInMemoryDb } from '../../db/TicketInMemoryDb'
import { ITicketRepository, TicketRepositorySymbol } from '../domain/ITicketRepository'
import { TicketEntity } from '../domain/TicketEntity'

export const TicketCreateServiceSymbol = Symbol.for(
  `@modules/ticket/application/TicketCreateService`
)

export type TicketCreateServiceInputData = Omit<TicketEntity, 'ticketId'>

@injectable()
export class TicketCreateService {
  constructor(
    @inject(TicketRepositorySymbol) private readonly ticketRepository: ITicketRepository
  ) {}
  async handle(inputData: Readonly<TicketCreateServiceInputData>): Promise<TicketEntity> {
    const ticketEntity: TicketEntity = {
      ticketId: uuid(),
      title: inputData.title,
      body: inputData.body,
      assignedUserId: inputData.assignedUserId,
      authorUserId: inputData.authorUserId
    }
    await this.ticketRepository.create(ticketEntity)

    const ticket = TicketInMemoryDb.find((x) => x.ticketId === ticketEntity.ticketId)
    if (!ticket) {
      throw new InternalServerError(`ticketId:${ticketEntity.ticketId}`)
    }
    return ticket
  }
}
