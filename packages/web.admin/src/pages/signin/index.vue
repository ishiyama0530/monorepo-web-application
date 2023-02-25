<template>
  <MasterLayout hidden-header hidden-footer>
    <div class="root">
      <HeadLine1 sub="for administrator">
        <template v-if="isMobile">
          <span className="has-text-primary">S</span>IMPLE
          <br />
          TICKET
          <br />
          SYSTEM
        </template>
        <template v-else>
          <span className="has-text-primary">S</span>
          <span>IMPLE TICKET SYSTEM</span>
        </template>
      </HeadLine1>
      <div class="has-text-danger">{{ apiError }}</div>
      <form class="form" noValidate @submit.prevent="handleSubmit(handleValid)">
        <TextField
          v-model="fieldValues.email.value"
          label="email"
          class="text"
          :error="isSubmitted && Boolean(errors.email.value)"
          :help="isSubmitted ? errors.email.value : ''"
          autofocus
        />
        <Button
          color="primary"
          :size="isMobile ? 'normal' : 'small'"
          type="submit"
          class="submit-button"
          >SIGN IN</Button
        >
      </form>
      <small>"mock-user[1~2]@gmail.com" user can be used.</small>
    </div>
  </MasterLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { AuthApi } from '../../@api'
import Button from '../../components/elements/Button.vue'
import TextField from '../../components/form/TextField.vue'
import HeadLine1 from '../../components/headline/HeadLine1.vue'
import MasterLayout from '../../components/layout/MasterLayout.vue'
import { useApiClient } from '../../libs/api/useApiClient'
import { useMobileSize } from '../../libs/view/useMobileSize'
import { useSessionStore } from '../../store/SessionStore'
import { SubmitHandler, useLoginForm } from './compositions/useLoginForm'

const sessionStore = useSessionStore()
const isMobile = useMobileSize()
const router = useRouter()
const route = useRoute()
const authApi = useApiClient(AuthApi)
const { handleSubmit, fieldValues, errors, isSubmitted } = useLoginForm({
  email: 'mock-user1@gmail.com'
})
const apiError = ref('')

const handleValid: SubmitHandler = async (data) => {
  const loginResp = await authApi.loginAdmin({ email: data.email })

  if (loginResp.status === 200) {
    const userResp = await authApi.findSessionUser({
      headers: {
        Authorization: 'Bearer ' + loginResp.data
      }
    })
    if (userResp.status === 200) {
      sessionStore.setToken(loginResp.data)
      sessionStore.setUser(userResp.data)
      router.push(route.query.n?.toString() ?? '/')
      return
    }
  }

  apiError.value = 'Failed to login.'
}
</script>

<style scoped>
.api-error {
  text-align: center;
  padding-bottom: 10px;
}
.root {
  height: 100%;
  display: grid;
  place-content: center;
  place-items: center;
}
.form {
  display: flex;
  align-items: center;
}
.text {
  width: 400px;
}
.submit-button {
  margin-left: 16px;
  margin-top: 40px;
}

@media screen and (max-width: 600px) {
  .root {
    margin-top: -80px;
  }
  .form {
    flex-direction: column;
    align-items: center;
  }
  .text {
    width: 300px;
  }
  .submit-button {
    margin: 0;
    margin-top: 4px;
    margin-bottom: 10px;
  }
}
</style>
