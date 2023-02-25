import GitHub from '@mui/icons-material/GitHub'
import { Box, IconButton, SxProps, Theme, Typography } from '@mui/material'
import { ExternalLink } from '../atomics/atoms/ExternalLink'

export const Footer = () => {
  return (
    <Box component="footer" sx={sx}>
      <Typography variant="body2" component="span">
        © 2023 ishiyama0530
      </Typography>
      <IconButton>
        <ExternalLink href="https://github.com/ishiyama0530" target="_blank">
          <GitHub className="github-icon" />
        </ExternalLink>
      </IconButton>
    </Box>
  )
}

const sx: SxProps<Theme> = (t) => ({
  zIndex: t.zIndex.appBar,
  width: '100%',
  bgcolor: t.palette.background.default,
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: 0,
  p: {
    xs: 1,
    sm: 3
  },
  '& .github-icon': {
    color: '#000'
  }
})
