import SaveIcon from '@mui/icons-material/Save'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  TextField,
  Theme,
  Typography
} from '@mui/material'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBoolean } from 'react-use'
import { Crumb } from '../../../components/atomics/molecules/Breadcrumbs'
import { ConfirmModal } from '../../../components/atomics/organisms/ConfirmModal'
import { sessionContext } from '../../../contexts/SessionContext'
import { useCreateTicket } from '../../../hooks/mutations/useCreateTicket'
import { useGetUsers } from '../../../hooks/queries/useGetUsers'
import { PrivateLayout } from '../../../layout/PrivateLayout'
import ErrorPage from '../../500'
import LoadingPage from '../../Loading'
import { SubmitHandler, useNewTicketForm } from './hooks/useNewTicketForm'

const crumbs: Crumb[] = [
  { text: 'HOME', to: '/' },
  { text: 'TICKET LIST', to: '/tickets' }
]

const TicketNewPage = () => {
  const navigate = useNavigate()
  const {
    session: { user }
  } = useContext(sessionContext)

  if (!user) {
    navigate('/signin?n=/tickets/new')
    return null
  }

  const { isLoading, error, data: users } = useGetUsers()
  const { handleSubmit, fieldValues, errors, getValues } = useNewTicketForm()
  const formData = getValues()
  const createMutation = useCreateTicket()

  const [isConfirmModalOpened, toIsConfirmModalOpened] = useBoolean(false)
  const handleConfirmModalCancel = () => toIsConfirmModalOpened(false)
  const handleConfirmModalExecute = () =>
    createMutation.mutate({ ...formData, authorUserId: user.userId })

  const handleValid: SubmitHandler = async (data) => {
    toIsConfirmModalOpened(true)
  }

  if (error) return <ErrorPage message={error.message} />
  if (isLoading || !users) return <LoadingPage />

  if (createMutation.error) return <ErrorPage message={createMutation.error.message} />
  if (createMutation.isLoading) return <LoadingPage />
  if (createMutation.isSuccess) navigate(`/tickets/${createMutation.data.ticketId}`)

  return (
    <>
      <PrivateLayout title="New ticket" breadcrumbs={crumbs}>
        <Box sx={sx}>
          <form onSubmit={handleSubmit(handleValid)} noValidate>
            <Box className="head">
              <Box className="fields">
                <Box className="title">
                  <TextField
                    required
                    fullWidth
                    size="small"
                    label="Title"
                    {...fieldValues.title}
                    helperText={errors.title}
                    error={Boolean(errors.title)}
                  />
                </Box>
                <Box className="assigned">
                  <FormControl
                    required
                    fullWidth
                    size="small"
                    error={Boolean(errors.assignedUserId)}
                  >
                    <InputLabel id="assigned">Assigned</InputLabel>
                    <Select
                      required
                      label="Assigned"
                      labelId="assigned"
                      {...fieldValues.assignedUserId}
                    >
                      {users.map((x) => (
                        <MenuItem key={x.userId} value={x.userId}>
                          {x.name}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errors.assignedUserId}</FormHelperText>
                  </FormControl>
                </Box>
              </Box>
            </Box>
            <Box className="body">
              <TextField
                required
                fullWidth
                size="small"
                label="Body"
                {...fieldValues.body}
                helperText={errors.body}
                error={Boolean(errors.body)}
                multiline
                minRows={10}
              />
            </Box>
            <Box className="action">
              <Button variant="contained" color="primary" startIcon={<SaveIcon />} type="submit">
                Save
              </Button>
            </Box>
          </form>
        </Box>
      </PrivateLayout>
      <ConfirmModal
        isOpened={isConfirmModalOpened}
        onCancel={handleConfirmModalCancel}
        onExecute={handleConfirmModalExecute}
        title="Register with the following details"
      >
        <Typography variant="body2">Title: {formData.title}</Typography>
        <Typography variant="body2">
          Assigned: {users.find((x) => x.userId === formData.assignedUserId)?.name}
        </Typography>
        <Typography variant="body2">Author: {user.name}</Typography>
        <Typography variant="body2">
          Body: {formData.body.length > 50 ? formData.body.slice(0, 50) + '…' : formData.body}
        </Typography>
      </ConfirmModal>
    </>
  )
}

const sx: SxProps<Theme> = {
  '& .head': {
    '& .fields': {
      '& .title': {
        maxWidth: 600,
        py: 2
      },
      '& .assigned': {
        maxWidth: 260,
        py: 2
      }
    }
  },
  '& .body': { my: 2, maxWidth: 800 },
  '& .action': {
    textAlign: 'right'
  }
}

export default TicketNewPage
