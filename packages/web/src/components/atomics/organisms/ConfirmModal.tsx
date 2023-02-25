import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { DeepReadonly } from 'ts-essentials'

export type ConfirmModalProps = {
  title: string
  isOpened: boolean
  onExecute: () => void
  onCancel: () => void
  children: React.ReactNode
}

export const ConfirmModal = ({
  title,
  isOpened,
  onExecute: handleExecute,
  onCancel: handleCancel,
  children
}: DeepReadonly<ConfirmModalProps>) => (
  <Dialog
    open={isOpened}
    onClose={handleCancel}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{children}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleExecute}>Confirmed</Button>
    </DialogActions>
  </Dialog>
)
