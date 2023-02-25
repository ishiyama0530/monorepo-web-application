import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Box, SxProps, Theme, Typography } from '@mui/material'
import { DeepReadonly } from 'ts-essentials'

export type ErrorDisplayProps = {
  message: string
}

export const ErrorDisplay = ({ message }: DeepReadonly<ErrorDisplayProps>) => (
  <Box sx={sx}>
    <ErrorOutlineIcon />
    <Typography variant="body2" className="text">
      {'An error has occurred: ' + message}
    </Typography>
  </Box>
)

const sx: SxProps<Theme> = {
  textAlign: 'center'
}
