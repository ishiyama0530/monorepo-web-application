<template>
  <div class="text-field">
    <template v-if="defs.label">
      <label class="label">{{ defs.label }}</label>
    </template>
    <div class="control">
      <input v-model="value" v-bind="defs.input" :autofocus="defs.autofocus" />
    </div>
    <template v-if="defs.help">
      <p :class="defs.helpClass">{{ defs.help }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import classNames from 'classnames'
import { computed, InputHTMLAttributes } from 'vue'

interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()

interface Props extends InputHTMLAttributes {
  modelValue: string
  type?: 'text' | 'password'
  label?: string
  help?: string
  error?: boolean
  autofocus?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  label: undefined,
  help: undefined
})

const defs = computed(() => {
  const { modelValue, label, help, error, autofocus, ...input } = props
  input.class = classNames('input', { 'is-danger': error }, input.class)
  const helpClass = classNames('help', { 'is-danger': error })
  return { modelValue, label, help, helpClass, input, autofocus }
})

const value = computed({
  get: () => defs.value.modelValue,
  set: (value: string) => {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped>
.text-field {
  padding: 10px;
}
</style>
