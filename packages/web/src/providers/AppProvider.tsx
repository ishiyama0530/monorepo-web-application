import { ThemeProvider } from '@mui/material'
import { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { SessionContextProvider } from '../contexts/SessionContext'
import { theme } from '../mui/themes/default'
import LoadingPage from '../pages/Loading'

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <QueryClientProvider client={queryClient}>
          <SessionContextProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </SessionContextProvider>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  )
}
