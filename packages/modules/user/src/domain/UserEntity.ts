export type UserRole = 'administrator' | 'member'

export class UserEntity {
  constructor(
    public readonly userId: string,
    public readonly email: string,
    public readonly name: string,
    public readonly role: UserRole
  ) {}
}
