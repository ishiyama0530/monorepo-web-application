import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { Error4xx, UserEntity, UsersApi } from '../../@api'
import { queryCache } from '../../libs/constants/query_cache'
import { useCertifiedApiClient } from '../useCertifiedApiClient'

export const useGetUsers = () => {
  const usersApi = useCertifiedApiClient(UsersApi)
  return useQuery<UserEntity[], AxiosError<Error4xx>>(queryCache.getUsers, () =>
    usersApi.findUsers().then((resp) => resp.data)
  )
}
