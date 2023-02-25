import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, SxProps, Theme, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useBoolean } from 'react-use'
import { Crumb } from '../../../components/atomics/molecules/Breadcrumbs'
import { ConfirmModal } from '../../../components/atomics/organisms/ConfirmModal'
import { useDeleteTicket } from '../../../hooks/mutations/useDeleteTicket'
import { useGetTicketById } from '../../../hooks/queries/useGetTicketById'
import { PrivateLayout } from '../../../layout/PrivateLayout'
import NotFoundPage from '../../404'
import ErrorPage from '../../500'
import LoadingPage from '../../Loading'

const crumbs: Crumb[] = [
  { text: 'HOME', to: '/' },
  { text: 'TICKET LIST', to: '/tickets' }
]

const TicketDetailPage = () => {
  const { ticketId } = useParams()
  if (!ticketId) return <NotFoundPage />

  const navigate = useNavigate()
  const getQuery = useGetTicketById(ticketId)
  const delMutation = useDeleteTicket()

  const [isRemoveModalOpened, toIsRemoveModalOpened] = useBoolean(false)
  const handleRemoveModalOpen = () => toIsRemoveModalOpened(true)
  const handleRemoveModalCancel = () => toIsRemoveModalOpened(false)
  const handleRemoveModalExecute = () => delMutation.mutate(ticketId)

  if (getQuery.error) return <ErrorPage message={getQuery.error.message} />
  if (getQuery.isLoading) return <LoadingPage />
  if (!getQuery.data) return <NotFoundPage />

  if (delMutation.error) return <ErrorPage message={delMutation.error.message} />
  if (delMutation.isLoading) return <LoadingPage />
  if (delMutation.isSuccess) navigate('/tickets')

  const data = getQuery.data

  return (
    <>
      <PrivateLayout title={data.title} breadcrumbs={crumbs}>
        <Box sx={sx}>
          <Box className="head">
            <Box>
              <Typography variant="subtitle2">Assigned / {data.assignedUserName}</Typography>
              <Typography variant="subtitle2">Author / {data.authorUserName}</Typography>
            </Box>
            <Box className="action">
              <Button color="secondary" startIcon={<DeleteIcon />} onClick={handleRemoveModalOpen}>
                Remove
              </Button>
            </Box>
          </Box>
          <Box className="body">
            <Typography variant="body2">{data.body}</Typography>
          </Box>
        </Box>
      </PrivateLayout>
      <ConfirmModal
        title="Are you sure you want to delete this ticket?"
        isOpened={isRemoveModalOpened}
        onCancel={handleRemoveModalCancel}
        onExecute={handleRemoveModalExecute}
      >
        <Typography variant="body2">Title: {data.title}</Typography>
        <Typography variant="body2">Assigned: {data.assignedUserName}</Typography>
        <Typography variant="body2">Author: {data.authorUserName}</Typography>
        <Typography variant="body2">
          Body: Body: {data.body.length > 50 ? data.body.slice(0, 50) + '…' : data.body}
        </Typography>
      </ConfirmModal>
    </>
  )
}

const sx: SxProps<Theme> = {
  '& .head': {
    display: 'flex',
    '& .action': {
      flexGrow: 1,
      textAlign: 'right'
    }
  },
  '& .body': { p: 1 }
}

export default TicketDetailPage
