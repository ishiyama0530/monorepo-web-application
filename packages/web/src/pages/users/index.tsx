import PersonIcon from '@mui/icons-material/Person'
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SxProps,
  Theme
} from '@mui/material'
import { useContext } from 'react'
import { Crumb } from '../../components/atomics/molecules/Breadcrumbs'
import { sessionContext } from '../../contexts/SessionContext'
import { useGetUsers } from '../../hooks/queries/useGetUsers'
import { PrivateLayout } from '../../layout/PrivateLayout'
import ErrorPage from '../500'
import LoadingPage from '../Loading'

const crumbs: Crumb[] = [{ text: 'HOME', to: '/' }]

const UserLitPage = () => {
  const {
    session: { user }
  } = useContext(sessionContext)
  const { isLoading, error, data } = useGetUsers()

  if (error) return <ErrorPage message={error.message} />
  if (isLoading) return <LoadingPage />

  return (
    <PrivateLayout title="USER LIST" breadcrumbs={crumbs}>
      <Box sx={sx}>
        <List
          subheader={
            <ListSubheader component="div" className="header">
              USERS
            </ListSubheader>
          }
        >
          {data?.map((x) => {
            const admin = x.role === 'administrator'
            const me = x.userId === user?.userId
            return (
              <ListItemButton key={x.userId} disableRipple className="button">
                <ListItemIcon
                  sx={(t) => ({
                    color: me
                      ? t.palette.primary.main
                      : admin
                      ? t.palette.secondary.main
                      : undefined
                  })}
                >
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={admin ? `${x.name} (Administrator)` : x.name} />
              </ListItemButton>
            )
          })}
        </List>
      </Box>
    </PrivateLayout>
  )
}

const sx: SxProps<Theme> = (t) => ({
  '& .button': { cursor: 'default' },
  '& .header': { position: 'inherit' }
})

export default UserLitPage
