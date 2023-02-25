import { Outlet, OutletProps } from 'react-router-dom'
import { DeepReadonly } from 'ts-essentials'

export const PublicRoute = (props: DeepReadonly<OutletProps>) => <Outlet {...props} />
