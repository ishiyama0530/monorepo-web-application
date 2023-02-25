import { Box, SxProps, Theme } from '@mui/material'
import { DeepReadonly } from 'ts-essentials'

export type LoginLayoutProps = {
  children?: React.ReactNode
}

export const LoginLayout = ({ children }: DeepReadonly<LoginLayoutProps>) => (
  <Box component="main" sx={sxProps}>
    {children}
  </Box>
)

const sxProps: SxProps<Theme> = {
  height: {
    xs: '80vh',
    sm: '100vh'
  },
  display: 'grid',
  placeContent: 'center',
  placeItems: 'center',
  '& :first-of-type': {
    maxWidth: 800
  }
}
