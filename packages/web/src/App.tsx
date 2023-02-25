import { CssBaseline } from '@mui/material'
import { AppProvider } from './providers/AppProvider'
import { AppRoutes } from './routes/AppRoutes'

export const App = () => {
  return (
    <>
      <CssBaseline />
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </>
  )
}
