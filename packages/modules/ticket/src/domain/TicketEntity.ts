export class TicketEntity {
  constructor(
    public readonly ticketId: string,
    public readonly title: string,
    public readonly body: string,
    public readonly authorUserId: string,
    public readonly assignedUserId: string
  ) {}
}
