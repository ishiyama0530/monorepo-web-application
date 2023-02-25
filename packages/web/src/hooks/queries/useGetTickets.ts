import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { Error4xx, TicketDto, TicketsApi } from '../../@api'
import { queryCache } from '../../libs/constants/query_cache'
import { useCertifiedApiClient } from '../useCertifiedApiClient'

export const useGetTickets = () => {
  const ticketsApi = useCertifiedApiClient(TicketsApi)
  return useQuery<TicketDto[], AxiosError<Error4xx>>(queryCache.getTickets, () =>
    ticketsApi.findTickets().then((resp) => resp.data)
  )
}
