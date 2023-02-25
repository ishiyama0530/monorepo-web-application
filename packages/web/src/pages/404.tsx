import { DeepReadonly } from 'ts-essentials'
import { ErrorDisplay } from '../components/atomics/molecules/ErrorDisplay'
import { PublicLayout } from '../layout/PublicLayout'

export type NotFoundPageProps = {
  message?: string
}

const NotFoundPage = ({ message }: DeepReadonly<NotFoundPageProps>) => (
  <PublicLayout>
    <ErrorDisplay message={message ?? 'Request is not found'} />
  </PublicLayout>
)

export default NotFoundPage
