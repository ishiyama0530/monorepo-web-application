<template>
  <header>
    <div class="title-container" @click="onTitleClick">
      <HeadLine2 sub="for administrato">SIMPLE TICKET SYSTEM</HeadLine2>
    </div>
    <template v-if="sessionStore.user">
      <p>
        <font-awesome-icon icon="fa-solid fa-user" />
        {{ sessionStore.user?.name }}
        |
        <Button size="small" color="transparent" @click="onSignOutClick">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="signout-icon" />
          SIGN OUT
        </Button>
      </p>
    </template>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useSessionStore } from '../../store/SessionStore'
import Button from '../elements/Button.vue'
import HeadLine2 from '../headline/HeadLine2.vue'

const sessionStore = useSessionStore()
const router = useRouter()

const onSignOutClick = () => {
  sessionStore.clearSession()
  router.push('/signin')
}

const onTitleClick = () => router.push('/')
</script>

<style scoped>
header {
  z-index: 38;
  position: fixed;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding-top: 6px;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.signout-icon {
  margin-right: 4px;
}
</style>
