import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Box, IconButton, Menu, MenuItem, SxProps, Theme, Typography } from '@mui/material'
import { memo, useCallback, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sessionContext } from '../../contexts/SessionContext'

export const Header = () => {
  const navigate = useNavigate()
  const {
    session: { user },
    clearSession
  } = useContext(sessionContext)

  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null)
  const isMenuOpened = Boolean(menuAnchorEl)
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setMenuAnchorEl(null)
  }

  const handleTitleClick = useCallback(() => navigate('/'), [])
  const handleSignOutClick = () => {
    navigate('/signin')
    clearSession()
    handleMenuClose()
  }

  return (
    <>
      <Box component="header" sx={sx}>
        <Title onClick={handleTitleClick} />
        {user && (
          <IconButton onClick={handleMenuOpen} disableRipple>
            <AccountCircleIcon className="user-icon" />
            <Typography variant="body2">{user.name}</Typography>
          </IconButton>
        )}
      </Box>
      <Menu anchorEl={menuAnchorEl} open={isMenuOpened} onClose={handleMenuClose}>
        <MenuItem onClick={handleSignOutClick}>Sign out</MenuItem>
      </Menu>
    </>
  )
}

const Title = memo(
  ({ onClick: handleTitleClick }: { onClick: JSX.IntrinsicElements['h5']['onClick'] }) => (
    <Typography variant="h5" component="h1" className="title" onClick={handleTitleClick}>
      SIMPLE TICKET SYSTEM
    </Typography>
  )
)

const sx: SxProps<Theme> = (t) => ({
  zIndex: t.zIndex.appBar,
  width: '100%',
  bgcolor: t.palette.background.default,
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  p: {
    xs: 2,
    sm: 3
  },
  '& .title': { cursor: 'pointer' },
  '& .user-icon': {
    fontSize: '1.1em',
    mx: 1,
    color: t.palette.primary.main
  }
})
