import axios, { AxiosError, AxiosInstance } from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { Configuration } from '../../@api'
import { BaseAPI, BASE_PATH } from '../../@api/base'
import { useSessionStore } from '../../store/SessionStore'

export const useCertifiedApiClient = <T extends BaseAPI>(API: {
  new (configuration: Configuration, basePath: string, axios: AxiosInstance): T
}): T => {
  const sessionStore = useSessionStore()

  const router = useRouter()
  const route = useRoute()

  const token = sessionStore.token
  const ax = axios.create({
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  ax.interceptors.response.use(
    (resp) => resp,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        router.push(`/signin?n=${route.fullPath}`)
      }
      return error
    }
  )
  return new API(config, BASE_PATH, ax)
}

const config = new Configuration()
