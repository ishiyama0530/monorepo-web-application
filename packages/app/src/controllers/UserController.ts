import {
  UserCreateService,
  UserCreateServiceInputData,
  UserCreateServiceSymbol,
  UserDeleteService,
  UserDeleteServiceSymbol,
  UserEntity,
  UserFindByUserIdService,
  UserFindByUserIdServiceSymbol,
  UserFindManyService,
  UserFindManyServiceSymbol
} from '@modules/user'
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

@Security('auth', scopes.general)
@Tags('users')
@Route('users')
@Response<Error4xx>('400', 'Bad request')
@Response<Error4xx>('404', 'Not found data')
@Response<Error5xx>('500', 'Server error')
@injectable()
export class UserController extends Controller {
  constructor(
    @inject(UserFindByUserIdServiceSymbol)
    private readonly userFindByUserIdService: UserFindByUserIdService,
    @inject(UserFindManyServiceSymbol)
    private readonly userFindManyService: UserFindManyService,
    @inject(UserCreateServiceSymbol) private readonly userCreateService: UserCreateService,
    @inject(UserDeleteServiceSymbol)
    private readonly userDeleteService: UserDeleteService
  ) {
    super()
  }

  @Get()
  async findUsers(): Promise<UserEntity[]> {
    const outputData = await this.userFindManyService.handle()
    return outputData
  }

  @Get('{userId}')
  async findUserByUserId(@Path() userId: string): Promise<UserEntity> {
    const outputData = await this.userFindByUserIdService.handle(userId)
    return outputData
  }

  @Security('auth', scopes.maintenance)
  @SuccessResponse('201', 'Created')
  @Post()
  async createUser(@Body() body: UserCreateServiceInputData): Promise<UserEntity> {
    const outputData = await this.userCreateService.handle(body)
    this.setStatus(201)
    return outputData
  }

  @Security('auth', scopes.maintenance)
  @SuccessResponse('204', 'Deleted')
  @Delete('{userId}')
  async deleteUser(@Path() userId: string): Promise<void> {
    await this.userDeleteService.handle(userId)
    this.setStatus(204)
  }
}
