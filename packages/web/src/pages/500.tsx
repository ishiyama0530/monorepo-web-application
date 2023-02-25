import { DeepReadonly } from 'ts-essentials'
import { ErrorDisplay } from '../components/atomics/molecules/ErrorDisplay'
import { PublicLayout } from '../layout/PublicLayout'

export type ErrorPageProps = {
  message?: string
}

const ErrorPage = ({ message }: DeepReadonly<ErrorPageProps>) => (
  <PublicLayout>
    <ErrorDisplay message={message ?? 'Unknown error occurred'} />
  </PublicLayout>
)

export default ErrorPage
