import { lazy } from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { ScrollToTop } from './ScrollToTop'

const HomePage = lazy(async () => await import('../pages'))
const TicketListPage = lazy(async () => await import('../pages/tickets'))
const TicketDetailPage = lazy(async () => await import('../pages/tickets/_ticketId'))
const TicketNewPage = lazy(async () => await import('../pages/tickets/new'))
const UsersPage = lazy(async () => await import('../pages/users'))
const SignInPage = lazy(async () => await import('../pages/signin'))

const NotFoundPage = lazy(async () => await import('../pages/404'))
const ErrorPage = lazy(async () => await import('../pages/500'))

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <RouterRoutes>
        <Route element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
          <Route path="tickets">
            <Route index element={<TicketListPage />} />
            <Route path="new" element={<TicketNewPage />} />
            <Route path=":ticketId" element={<TicketDetailPage />} />
          </Route>
          <Route path="users" element={<UsersPage />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="signin" element={<SignInPage />} />
          <Route path="500" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </RouterRoutes>
    </>
  )
}
