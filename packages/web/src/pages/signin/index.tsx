import { Box, Button, SxProps, TextField, Theme, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AuthApi } from '../../@api'
import { ExternalLink } from '../../components/atomics/atoms/ExternalLink'
import { sessionContext } from '../../contexts/SessionContext'
import { useApiClient } from '../../hooks/useApiClient'
import { useMobileSize } from '../../hooks/useMobileSize'
import { LoginLayout } from '../../layout/LoginLayout'
import { SubmitHandler, useLoginForm } from './hooks/useLoginForm'

const SignInPage = () => {
  const [searchParams] = useSearchParams()
  const nextRoute = searchParams.get('n')
  const navigate = useNavigate()
  const isMobile = useMobileSize()
  const { setToken, setUser } = useContext(sessionContext)

  const authApi = useApiClient(AuthApi)
  const { handleSubmit, fieldValues, errors, isSubmitted } = useLoginForm({
    email: 'mock-user1@gmail.com'
  })
  const [apiError, setApiError] = useState('')

  const handleValid: SubmitHandler = async (data) => {
    const loginResp = await authApi.login({ email: data.email })

    if (loginResp.status === 200) {
      const userResp = await authApi.findSessionUser({
        headers: {
          Authorization: 'Bearer ' + loginResp.data
        }
      })
      if (userResp.status === 200) {
        setToken(loginResp.data)
        setUser(userResp.data)
        navigate(nextRoute ?? '/')
        return
      }
    }

    setApiError('Failed to login.')
    return
  }

  return (
    <LoginLayout>
      <Box sx={sx}>
        {!isMobile && (
          <ExternalLink href="/admin" target="_blank">
            <Typography variant="body2" component="p" className="admin-link">
              To admin web
            </Typography>
          </ExternalLink>
        )}
        <Typography variant="h2" component="h1" className="title">
          {isMobile ? (
            <span>
              <span className="first-char">S</span>IMPLE
              <br />
              TICKET
              <br />
              SYSTEM
            </span>
          ) : (
            <span>
              <span className="first-char">S</span>
              IMPLE TICKET SYSTEM
            </span>
          )}
        </Typography>
        <Typography variant="caption" component="p" className="api-error">
          {apiError}
        </Typography>
        <form onSubmit={handleSubmit(handleValid)} noValidate>
          <TextField
            label="email"
            className="email"
            {...fieldValues.email}
            helperText={isSubmitted ? errors.email : ''}
            error={isSubmitted && Boolean(errors.email)}
            autoFocus
          />
          <Box className="actions">
            <Button type="submit" variant="contained">
              SIGN IN
            </Button>
          </Box>
        </form>
        <Typography variant="caption" component="p" className="caption">
          {'"mock-user[1~10]@gmail.com" user can be used.'}
        </Typography>
      </Box>
    </LoginLayout>
  )
}

const sx: SxProps<Theme> = (t) => ({
  '& .title': {
    p: 5,
    display: 'grid',
    placeContent: 'center',
    placeItems: 'center',
    '& .first-char': {
      color: t.palette.primary.main
    }
  },
  '& .api-error': { color: t.palette.error.main, textAlign: 'center', pb: 3 },
  '& form': {
    display: 'flex',
    justifyContent: 'center',
    [t.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& .email': {
      width: {
        xs: 300,
        sm: 400
      }
    },
    '& .actions': {
      py: 2,
      '& button': {
        ml: 1
      }
    }
  },
  '& .caption': {
    textAlign: 'center'
  },
  '& .admin-link': {
    textAlign: 'right',
    mr: 5
  }
})

export default SignInPage
