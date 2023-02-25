import { AxiosError } from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import {
  Error4xx,
  PickTicketEntityExcludeKeyofTicketEntityTicketId,
  TicketDto,
  TicketsApi
} from '../../@api'
import { queryCache } from '../../libs/constants/query_cache'
import { useCertifiedApiClient } from '../useCertifiedApiClient'

type Ticket = PickTicketEntityExcludeKeyofTicketEntityTicketId

export const useCreateTicket = () => {
  const queryClient = useQueryClient()
  const ticketsApi = useCertifiedApiClient(TicketsApi)
  const mutation = useMutation<TicketDto, AxiosError<Error4xx>, Ticket>(
    async (ticket) => (await ticketsApi.createTicket(ticket)).data,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryCache.getTickets)
      }
    }
  )
  return mutation
}
