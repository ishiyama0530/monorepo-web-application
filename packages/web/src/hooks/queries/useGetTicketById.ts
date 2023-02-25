import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { Error4xx, TicketDto, TicketsApi } from '../../@api'
import { queryCache } from '../../libs/constants/query_cache'
import { useCertifiedApiClient } from '../useCertifiedApiClient'

export const useGetTicketById = (ticketId: string) => {
  const ticketsApi = useCertifiedApiClient(TicketsApi)
  return useQuery<TicketDto, AxiosError<Error4xx>>(queryCache.getTicketById, () =>
    ticketsApi.findTicketByTicketId(ticketId).then((resp) => resp.data)
  )
}
