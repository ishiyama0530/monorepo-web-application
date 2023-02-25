<template>
  <MasterLayout>
    <form novalidate @submit.prevent="handleSubmit(handleValid)">
      <TextField
        v-model="fieldValues.name.value"
        label="NAME"
        class="textbox"
        :error="isSubmitted && Boolean(errors.name.value)"
        :help="isSubmitted ? errors.name.value : ''"
      />
      <TextField
        v-model="fieldValues.email.value"
        label="EMAIL"
        class="textbox"
        :error="isSubmitted && Boolean(errors.email.value)"
        :help="isSubmitted ? errors.email.value : ''"
      />
      <div class="radio-field">
        <label class="label">ROLE</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="foobar" checked />
            Member
          </label>
          <label class="radio">
            <input type="radio" name="foobar" disabled />
            Administrator
          </label>
        </div>
      </div>
      <div class="button-field">
        <Button size="small" type="button" @click="onCancelButtonClick">CANCEL</Button>
        <Button size="small" color="primary">EXECUTE</Button>
      </div>
    </form>
  </MasterLayout>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { UsersApi } from '../../../@api'
import Button from '../../../components/elements/Button.vue'
import TextField from '../../../components/form/TextField.vue'
import MasterLayout from '../../../components/layout/MasterLayout.vue'
import { useCertifiedApiClient } from '../../../libs/api/useCertifiedApiClient'
import { SubmitHandler, useAddUserForm } from './compositions/useAddUserForm'

const router = useRouter()
const usersApi = useCertifiedApiClient(UsersApi)
const { handleSubmit, fieldValues, errors, isSubmitted } = useAddUserForm()

const handleValid: SubmitHandler = async (data) => {
  const resp = await usersApi.createUser({ ...data, role: 'member' })

  if (resp.status === 201) {
    router.push('/')
  } else {
    router.push('/500')
  }
}

const onCancelButtonClick = () => router.push('/')
</script>

<style scoped>
.textbox {
  width: 400px;
}

.radio-field {
  padding: 10px;
}

.radio {
  margin-inline: 10px;
}

.button-field {
  margin-top: 30px;
  text-align: center;
}

.button {
  margin-inline: 10px;
}

@media screen and (max-width: 600px) {
  .textbox {
    width: 300px;
  }
}
</style>
