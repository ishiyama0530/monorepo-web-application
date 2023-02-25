<template>
  <suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import 'bulma/bulma.sass';
@import './assets/global.css';
</style>
