<template>
  <MasterLayout>
    <div>
      <div class="action-field">
        <Button size="small" @click="onAddUserButtonClick">
          <font-awesome-icon icon="fa-user-plus" class="user-add-icon" />
          ADD
        </Button>
      </div>
      <table class="table is-hoverable" :class="{ 'is-narrow': isMobile }">
        <thead>
          <tr>
            <th><abbr title="num">NO.</abbr></th>
            <th><abbr title="name">NAME</abbr></th>
            <th><abbr title="email">EMAIL</abbr></th>
            <th><abbr title="role">ROLE</abbr></th>
            <th><abbr></abbr></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, idx) in users" :key="user.userId">
            <th>{{ idx + 1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>
              <Button
                color="transparent"
                :disabled="user.role === 'administrator'"
                @click="onTrashButtonClick(user.userId)"
              >
                <font-awesome-icon icon="fa-solid fa-trash" />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </MasterLayout>
  <ConfirmModal
    title="Are you sure you want to delete this user?"
    :is-opened="isConfirmModalOpened"
    @cancel="onConfirmModalCancel"
    @execute="onConfirmModalExecute"
  >
    <p>NAME: {{ deleteTargetUser?.name }}</p>
    <p>EMAIL: {{ deleteTargetUser?.email }}</p>
    <p>ROLE: {{ deleteTargetUser?.role }}</p>
  </ConfirmModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserEntity, UsersApi } from '../@api'
import Button from '../components/elements/Button.vue'
import MasterLayout from '../components/layout/MasterLayout.vue'
import ConfirmModal from '../components/modal/ConfirmModal.vue'
import { useCertifiedApiClient } from '../libs/api/useCertifiedApiClient'
import { useMobileSize } from '../libs/view/useMobileSize'

const isMobile = useMobileSize()
const router = useRouter()
const users = ref<UserEntity[]>([])
const usersApi = useCertifiedApiClient(UsersApi)
const isConfirmModalOpened = ref(false)

const deleteTargetUser = ref<UserEntity>()

const fetchUsers = async () => {
  const resp = await usersApi.findUsers()
  if (resp.status === 200) {
    users.value = resp.data
  } else {
    router.push('/500')
  }
}

const onAddUserButtonClick = () => router.push('/users/new')

const onTrashButtonClick = (userId: string) => {
  isConfirmModalOpened.value = true
  deleteTargetUser.value = users.value.find((x) => x.userId === userId)
}

const onConfirmModalCancel = () => (isConfirmModalOpened.value = false)

const onConfirmModalExecute = async () => {
  if (!deleteTargetUser.value) return

  const resp = await usersApi.deleteUser(deleteTargetUser.value.userId)
  if (resp.status === 204) {
    fetchUsers()
    isConfirmModalOpened.value = false
  } else {
    router.push('/500')
  }
}

fetchUsers()
</script>

<style scoped>
.action-field {
  text-align: right;
}

.user-add-icon {
  margin-right: 8px;
}
</style>
