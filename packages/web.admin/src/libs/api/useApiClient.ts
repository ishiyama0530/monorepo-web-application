import axios, { AxiosInstance } from 'axios'
import { Configuration } from '../../@api'
import { BaseAPI, BASE_PATH } from '../../@api/base'

export const useApiClient = <T extends BaseAPI>(API: {
  new (configuration: Configuration, basePath: string, axios: AxiosInstance): T
}): T => {
  const ax = axios.create()
  ax.interceptors.response.use(
    (resp) => resp,
    (error) => error
  )
  return new API(config, BASE_PATH, ax)
}

const config = new Configuration()
