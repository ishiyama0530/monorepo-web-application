import { TicketEntity } from '@modules/ticket'

export class TicketDto extends TicketEntity {
  constructor(
    source: TicketEntity,
    public readonly authorUserName: string,
    public readonly assignedUserName: string
  ) {
    super(source.ticketId, source.title, source.body, source.authorUserId, source.assignedUserId)
  }
}
