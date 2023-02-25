import { Box, SxProps, Theme, Typography } from '@mui/material'
import { DeepReadonly } from 'ts-essentials'
import { Breadcrumbs, BreadcrumbsProps } from '../components/atomics/molecules/Breadcrumbs'
import { Footer } from '../components/structure/Footer'
import { Header } from '../components/structure/Header'

export type PrivateLayoutProps = {
  children?: React.ReactNode
  title?: string
  breadcrumbs?: BreadcrumbsProps['items']
}

export const PrivateLayout = ({
  children,
  title,
  breadcrumbs
}: DeepReadonly<PrivateLayoutProps>) => {
  return (
    <Box sx={sxProps}>
      <Header />
      <Box component="main">
        {title && (
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
        )}
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <Box className="content">
          <Box>{children}</Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

const sxProps: SxProps<Theme> = {
  p: 2,
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  '& main': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 800,
    width: '100%',
    marginTop: {
      xs: '102px',
      sm: '124px'
    },
    overflowY: 'auto',
    height: {
      xs: 'calc(100vh - 164px)',
      sm: 'calc(100vh - 220px)'
    }
  },
  '& .content': {
    p: 1
  }
}
