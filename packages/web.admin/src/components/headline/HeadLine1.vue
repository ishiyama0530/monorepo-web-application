<template>
  <div>
    <hi class="is-size-1">
      <slot />
    </hi>
    <template v-if="props.sub">
      <p class="sub">{{ props.sub }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  sub: string
}

const props = withDefaults(defineProps<Props>(), {
  sub: undefined
})
</script>

<style scoped>
.sub {
  text-align: right;
}
</style>
