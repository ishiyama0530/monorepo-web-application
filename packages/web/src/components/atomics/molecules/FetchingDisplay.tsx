import { Box, CircularProgress, SxProps, Theme, Typography } from '@mui/material'
import { DeepReadonly } from 'ts-essentials'

export type FetchingDisplayProps = {
  message: string
}

export const FetchingDisplay = ({ message }: DeepReadonly<FetchingDisplayProps>) => (
  <Box sx={sx}>
    <CircularProgress size={20} />
    <Typography variant="body2" className="text">
      {message}
    </Typography>
  </Box>
)

const sx: SxProps<Theme> = {
  textAlign: 'center'
}
