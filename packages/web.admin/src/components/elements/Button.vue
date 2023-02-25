<template>
  <button class="button" v-bind="defs.button"><slot /></button>
</template>

<script setup lang="ts">
import classNames from 'classnames'
import { ButtonHTMLAttributes, computed } from 'vue'

interface Props extends ButtonHTMLAttributes {
  color?: 'primary' | 'transparent'
  size?: 'small' | 'normal' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  color: undefined,
  size: 'normal'
})

const defs = computed(() => {
  const { color, size, ...button } = props
  button.class = classNames(
    'button',
    `is-${size}`,
    { 'is-primary': color === 'primary' },
    { 'is-text': color === 'transparent' },
    button.class
  )
  return { button }
})
</script>
