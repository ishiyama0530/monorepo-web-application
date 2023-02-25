import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { Error4xx, TicketsApi } from '../../@api'
import { queryCache } from '../../libs/constants/query_cache'
import { useCertifiedApiClient } from '../useCertifiedApiClient'

export const useDeleteTicket = () => {
  const queryClient = useQueryClient()
  const ticketsApi = useCertifiedApiClient(TicketsApi)
  const mutation = useMutation<void, AxiosError<Error4xx>, string>(
    async (ticketId) => (await ticketsApi.deleteTicket(ticketId)).data,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryCache.getTickets)
      }
    }
  )
  return mutation
}
