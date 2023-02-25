<template>
  <div>
    <template v-if="isMobile">
      <hi class="is-size-4">
        <slot />
      </hi>
      <template v-if="props.sub">
        <p>{{ props.sub }}</p>
      </template></template
    >
    <template v-else>
      <hi class="is-size-2">
        <slot />
      </hi>
      <template v-if="props.sub">
        <span class="sub">{{ props.sub }}</span>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useMobileSize } from '../../libs/view/useMobileSize'

interface Props {
  sub: string
}

const props = withDefaults(defineProps<Props>(), {
  sub: undefined
})

const isMobile = useMobileSize()
</script>

<style scoped>
.sub {
  margin-top: 12px;
  margin-left: 20px;
}
</style>
