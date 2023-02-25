import {
  TicketCreateService,
  TicketCreateServiceInputData,
  TicketCreateServiceSymbol,
  TicketDeleteService,
  TicketDeleteServiceSymbol,
  TicketFindByTicketIdService,
  TicketFindByTicketIdServiceSymbol,
  TicketFindManyService,
  TicketFindManyServiceSymbol
} from '@modules/ticket'
import { UserFindByUserIdService, UserFindByUserIdServiceSymbol } from '@modules/user'
import { inject, injectable } from 'inversify'
import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags
} from 'tsoa'
import { scopes } from '../auth/Authentications/IAuthentication'
import { Error4xx } from '../dto/errors/Error4xx'
import { Error5xx } from '../dto/errors/Error5xx'
import { TicketDto } from '../dto/ticket/TicketDto'

@Security('auth', scopes.general)
@Tags('tickets')
@Route('tickets')
@Response<Error4xx>('400', 'Bad request')
@Response<Error4xx>('404', 'Not found data')
@Response<Error5xx>('500', 'Server error')
@injectable()
export class TicketController extends Controller {
  constructor(
    @inject(TicketCreateServiceSymbol) private readonly ticketCreateService: TicketCreateService,
    @inject(TicketDeleteServiceSymbol) private readonly ticketDeleteService: TicketDeleteService,
    @inject(TicketFindByTicketIdServiceSymbol)
    private readonly ticketFindByTicketIdService: TicketFindByTicketIdService,
    @inject(TicketFindManyServiceSymbol)
    private readonly ticketFindManyService: TicketFindManyService,
    @inject(UserFindByUserIdServiceSymbol)
    private readonly userFindByUserIdService: UserFindByUserIdService
  ) {
    super()
  }

  @Get()
  async findTickets(): Promise<TicketDto[]> {
    const tickets = await this.ticketFindManyService.handle()
    const outputData = Promise.all(
      tickets.map(async (x) => {
        const author = await this.userFindByUserIdService.handle(x.authorUserId)
        const assigned = await this.userFindByUserIdService.handle(x.assignedUserId)
        return new TicketDto(x, author.name, assigned.name)
      })
    )

    return outputData
  }

  @Get('{ticketId}')
  async findTicketByTicketId(@Path() ticketId: string): Promise<TicketDto> {
    const ticket = await this.ticketFindByTicketIdService.handle(ticketId)
    const author = await this.userFindByUserIdService.handle(ticket.authorUserId)
    const assigned = await this.userFindByUserIdService.handle(ticket.assignedUserId)
    const outputData = new TicketDto(ticket, author.name, assigned.name)
    return outputData
  }

  @SuccessResponse('201', 'Created')
  @Post()
  async createTicket(@Body() body: TicketCreateServiceInputData): Promise<TicketDto> {
    const ticket = await this.ticketCreateService.handle(body)
    const author = await this.userFindByUserIdService.handle(ticket.authorUserId)
    const assigned = await this.userFindByUserIdService.handle(ticket.assignedUserId)
    const outputData = new TicketDto(ticket, author.name, assigned.name)
    this.setStatus(201)
    return outputData
  }

  @SuccessResponse('204', 'Deleted')
  @Delete('{ticketId}')
  async deleteTicket(@Path() ticketId: string): Promise<void> {
    await this.ticketDeleteService.handle(ticketId)
    this.setStatus(204)
  }
}
