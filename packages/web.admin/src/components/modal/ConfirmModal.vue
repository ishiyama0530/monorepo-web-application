<template>
  <div class="modal" :class="{ 'is-active': isOpened }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <section class="modal-card-head">
        <p class="modal-card-title">{{ props.title }}</p>
      </section>
      <section class="modal-card-body">
        <slot />
      </section>
      <section class="modal-card-foot modal-footer">
        <Button @click="onClose">Cancel</Button>
        <Button color="primary" @click="onExecute">Save changes</Button>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue'
import Button from '../elements/Button.vue'

interface Emits {
  (e: 'execute'): void
  (e: 'cancel'): void
}
const emit = defineEmits<Emits>()

interface Props extends ButtonHTMLAttributes {
  title: string
  isOpened?: boolean
}

const props = defineProps<Props>()

const onClose = () => emit('cancel')
const onExecute = () => emit('execute')
</script>

<style scoped>
.modal-card {
  width: 480px;
}
.modal-footer {
  justify-content: right;
}

@media screen and (max-width: 600px) {
  .modal-card {
    width: 100%;
  }
}
</style>
