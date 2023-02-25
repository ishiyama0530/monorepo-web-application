import { useMediaQuery, useTheme } from '@mui/material'

export const useMobileSize = () => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down('sm'))
}
