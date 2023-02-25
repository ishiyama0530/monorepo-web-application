import { UnauthorizedError } from '@modules/common'
import { UserEntity, UserFindByUserIdService, UserFindByUserIdServiceSymbol } from '@modules/user'
import { inject, injectable } from 'inversify'
import {
  Body,
  Controller,
  Get,
  NoSecurity,
  Post,
  Request,
  Response,
  Route,
  Security,
  Tags
} from 'tsoa'
import {
  AuthenticationSymbol,
  IAuthentication,
  scopes
} from '../auth/Authentications/IAuthentication'
import { Error4xx } from '../dto/errors/Error4xx'
import { Error5xx } from '../dto/errors/Error5xx'

@Security('auth', scopes.general)
@Tags('auth')
@Route('auth')
@Response<Error4xx>('400', 'Bad request')
@Response<Error4xx>('404', 'Not found data')
@Response<Error5xx>('500', 'Server error')
@injectable()
export class AuthController extends Controller {
  constructor(
    @inject(AuthenticationSymbol) private readonly authentication: IAuthentication,
    @inject(UserFindByUserIdServiceSymbol)
    private readonly userFindByUserIdService: UserFindByUserIdService
  ) {
    super()
  }

  @NoSecurity()
  @Post('login')
  async login(@Body() body: { email: string }): Promise<string> {
    const token = await this.authentication.issueToken(body.email, ['administrator', 'member'])
    return token
  }

  @NoSecurity()
  @Post('login/admin')
  async loginAdmin(@Body() body: { email: string }): Promise<string> {
    const token = await this.authentication.issueToken(body.email, ['administrator'])
    return token
  }

  @Get('my')
  async findSessionUser(@Request() req: Express.Request): Promise<UserEntity> {
    const userId = req.user?.userId
    if (!userId) {
      throw new UnauthorizedError('Authentication failure.')
    }
    const outputData = await this.userFindByUserIdService.handle(userId)
    return outputData
  }
}
