<template>
  <div class="layout">
    <template v-if="!props.hiddenHeader"> <Header /></template>
    <Main>
      <slot />
    </Main>
    <template v-if="!props.hiddenFooter"> <Footer /></template>
  </div>
</template>

<script lang="ts" setup>
import Footer from '../structures/Footer.vue'
import Header from '../structures/Header.vue'
import Main from '../structures/Main.vue'

interface Props {
  hiddenHeader: boolean
  hiddenFooter: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hiddenHeader: false,
  hiddenFooter: false
})
</script>

<style scoped>
.layout {
  height: 100vh;
  overflow: hidden;
}
</style>
