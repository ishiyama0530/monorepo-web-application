import { DeepReadonly } from 'ts-essentials'
import { UserEntity } from '../src/domain/UserEntity'

export const seed: DeepReadonly<UserEntity[]> = [
  {
    userId: 'caa105d6-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user1@gmail.com',
    name: 'Brandy Ortega',
    role: 'administrator'
  },
  {
    userId: 'caa10856-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user2@gmail.com',
    name: 'Andrew Hicks',
    role: 'administrator'
  },
  {
    userId: 'caa109a0-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user3@gmail.com',
    name: 'Dianne Dennis',
    role: 'member'
  },
  {
    userId: 'caa10acc-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user4@gmail.com',
    name: 'Brandy Ortega',
    role: 'member'
  },
  {
    userId: 'caa10bee-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user5@gmail.com',
    name: 'Joshua Klein',
    role: 'member'
  },
  {
    userId: 'caa10cfc-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user6@gmail.com',
    name: 'Priscilla Norris',
    role: 'member'
  },
  {
    userId: 'caa111ca-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user7@gmail.com',
    name: 'Juanita Ray',
    role: 'member'
  },
  {
    userId: 'caa1135a-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user8@gmail.com',
    name: 'Charles Erickson',
    role: 'member'
  },
  {
    userId: 'caa1147c-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user9@gmail.com',
    name: 'Randal Holloway',
    role: 'member'
  },
  {
    userId: 'caa11594-8b38-11ed-a1eb-0242ac120002',
    email: 'mock-user1o@gmail.com',
    name: 'Myrtle Alvarez',
    role: 'member'
  }
]

export const UsersInMemoryDb: DeepReadonly<UserEntity>[] = [...seed]
