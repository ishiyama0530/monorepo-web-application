import { useContext } from 'react'
import { Navigate, Outlet, OutletProps, useLocation } from 'react-router-dom'
import { DeepReadonly } from 'ts-essentials'
import { sessionContext } from '../contexts/SessionContext'

export const PrivateRoute = (props: DeepReadonly<OutletProps>) => {
  const { session } = useContext(sessionContext)
  const location = useLocation()

  if (!session.token || !session.user) {
    return <Navigate to={`/signin?n=${location.pathname}`} />
  }

  return <Outlet {...props} />
}
