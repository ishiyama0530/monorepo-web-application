import AddIcon from '@mui/icons-material/Add'
import TaskIcon from '@mui/icons-material/Task'
import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SxProps,
  Theme
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Crumb } from '../../components/atomics/molecules/Breadcrumbs'
import { useGetTickets } from '../../hooks/queries/useGetTickets'
import { PrivateLayout } from '../../layout/PrivateLayout'
import ErrorPage from '../500'
import LoadingPage from '../Loading'

const crumbs: Crumb[] = [{ text: 'HOME', to: '/' }]

const TicketLitPage = () => {
  const navigate = useNavigate()
  const { isLoading, error, data } = useGetTickets()

  if (error) return <ErrorPage message={error.message} />
  if (isLoading) return <LoadingPage />

  const handleTicketClick = (id: string) => {
    navigate(id)
  }

  const handleNewClick = () => navigate('new')

  return (
    <PrivateLayout title="TICKET LIST" breadcrumbs={crumbs}>
      <Box sx={sx}>
        <Box className="action">
          <Button color="secondary" startIcon={<AddIcon />} onClick={handleNewClick}>
            New Ticket
          </Button>
        </Box>
        <List
          subheader={
            <ListSubheader component="div" className="header">
              TASKS
            </ListSubheader>
          }
        >
          {data?.map((x) => (
            <ListItemButton key={x.ticketId} onClick={() => handleTicketClick(x.ticketId)}>
              <ListItemIcon>
                <TaskIcon />
              </ListItemIcon>
              <ListItemText
                primary={x.title}
                secondary={`assigned: ${x.assignedUserName} / author: ${x.authorUserName}`}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </PrivateLayout>
  )
}

const sx: SxProps<Theme> = {
  '& .action': {
    textAlign: 'right'
  },
  '& .header': { position: 'inherit' }
}

export default TicketLitPage
