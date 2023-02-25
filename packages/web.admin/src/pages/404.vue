<template>
  <MasterLayout hidden-footer hidden-header>
    <div class="not-found">
      <p class="is-size-5">404 | Page not found…</p>
    </div>
  </MasterLayout>
</template>

<script lang="ts" setup>
import MasterLayout from '../components/layout/MasterLayout.vue'
</script>

<style scoped>
.not-found {
  height: 100%;
  display: grid;
  place-content: center;
  place-items: center;
}
</style>
