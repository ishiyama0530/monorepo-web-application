<template>
  <footer>
    © 2023 ishiyama0530
    <ExternalLink href="https://github.com/ishiyama0530">
      <font-awesome-icon icon="fa-brands fa-github" class="github-icon" color="#000" />
    </ExternalLink>
  </footer>
</template>

<script lang="ts" setup>
import ExternalLink from '../elements/ExternalLink.vue'
</script>

<style scoped>
footer {
  z-index: 38;
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  background-color: #fff;
  text-align: center;
}

.github-icon {
  font-size: 1.4em;
  margin-left: 6px;
}

@media screen and (max-width: 600px) {
  footer {
    padding: 14px;
  }
}
</style>
