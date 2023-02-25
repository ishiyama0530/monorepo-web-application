<template>
  <a v-bind="defs.a"><slot /></a>
</template>

<script setup lang="ts">
import { AnchorHTMLAttributes, computed } from 'vue'

interface Props extends AnchorHTMLAttributes {}

const props = defineProps<Props>()

const defs = computed(() => {
  const { ...a } = props
  a.rel = 'noopener noreferrer'
  return { a }
})
</script>
