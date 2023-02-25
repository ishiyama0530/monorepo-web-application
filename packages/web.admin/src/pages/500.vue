<template>
  <MasterLayout hidden-footer hidden-header>
    <div class="error">
      <p class="is-size-5">500 | Error</p>
    </div>
  </MasterLayout>
</template>

<script lang="ts" setup>
import MasterLayout from '../components/layout/MasterLayout.vue'
</script>

<style scoped>
.error {
  height: 100%;
  display: grid;
  place-content: center;
  place-items: center;
}
</style>
