import { createTheme, responsiveFontSizes } from '@mui/material'

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#6002ee'
      },
      secondary: {
        main: '#4a59aa'
      },
      background: {
        default: '#fff'
      }
    }
  })
)
