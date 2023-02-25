import { DeepReadonly } from 'ts-essentials'
import { FetchingDisplay } from '../components/atomics/molecules/FetchingDisplay'
import { PublicLayout } from '../layout/PublicLayout'

export type LoadingPageProps = {
  message?: string
}

const LoadingPage = ({ message }: DeepReadonly<LoadingPageProps>) => (
  <PublicLayout>
    <FetchingDisplay message={message ?? 'loading...'} />
  </PublicLayout>
)

export default LoadingPage
