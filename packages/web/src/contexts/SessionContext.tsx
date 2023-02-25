/* eslint-disable @typescript-eslint/no-empty-function */

import React, { createContext, useMemo, useState } from 'react'
import { UserEntity } from '../@api'

export type SessionContextProps = {
  children?: React.ReactNode
}

type Session = {
  user?: UserEntity
  token?: string
}

export type SessionContext = {
  session: Session
  setUser: (user: UserEntity) => void
  setToken: (token: string) => void
  clearSession: () => void
}

export const sessionContext = createContext<SessionContext>({
  session: {},
  setUser: (user: UserEntity) => {},
  setToken: (token: string) => {},
  clearSession: () => {}
})

export function SessionContextProvider({ children }: Readonly<SessionContextProps>) {
  const [user, setUser] = useState<UserEntity>()
  const [token, setToken] = useState<string>()
  const value: SessionContext = useMemo(
    () => ({
      session: {
        user,
        token
      },
      clearSession: () => {
        setUser(undefined)
        setToken(undefined)
      },
      setUser: (user: UserEntity) => setUser(user),
      setToken: (token: string) => setToken(token)
    }),
    [user, token]
  )
  return <sessionContext.Provider value={value}>{children}</sessionContext.Provider>
}
