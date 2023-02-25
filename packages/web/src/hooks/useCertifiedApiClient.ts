import axios, { AxiosError, AxiosInstance } from 'axios'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Configuration } from '../@api'
import { BaseAPI, BASE_PATH } from '../@api/base'
import { sessionContext } from '../contexts/SessionContext'

export const useCertifiedApiClient = <T extends BaseAPI>(API: {
  new (configuration: Configuration, basePath: string, axios: AxiosInstance): T
}): T => {
  const navigate = useNavigate()
  const location = useLocation()
  const {
    session: { token }
  } = useContext(sessionContext)
  const ax = axios.create({
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
  ax.interceptors.response.use(
    (resp) => resp,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        navigate(`/signin?n=${location.pathname}`)
      }
      return error
    }
  )
  return new API(config, BASE_PATH, ax)
}

const config = new Configuration()
