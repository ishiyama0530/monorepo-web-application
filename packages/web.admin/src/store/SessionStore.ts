import { defineStore } from 'pinia'
import { UserEntity } from '../@api'

type Session = {
  user?: UserEntity
  token?: string
}

export const useSessionStore = defineStore('counter', {
  state: (): Session => ({
    user: undefined,
    token: undefined
  }),
  actions: {
    setUser(user: UserEntity) {
      this.user = user
    },
    setToken(token: string) {
      this.token = token
    },
    clearSession() {
      this.user = undefined
      this.token = undefined
    }
  }
})
