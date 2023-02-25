import { Box, SxProps, Theme, Typography } from '@mui/material'
import { DeepReadonly } from 'ts-essentials'
import { Breadcrumbs, BreadcrumbsProps } from '../components/atomics/molecules/Breadcrumbs'
import { Footer } from '../components/structure/Footer'
import { Header } from '../components/structure/Header'

export type PublicLayoutProps = {
  children?: React.ReactNode
  title?: string
  breadcrumbs?: BreadcrumbsProps['items']
}

export const PublicLayout = ({ children, title, breadcrumbs }: DeepReadonly<PublicLayoutProps>) => {
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
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  '& main': {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    width: '100%',
    marginTop: '180px'
  },
  '& .content': {
    p: 2
  }
}
