<template>
  <main>
    <div class="main-container">
      <slot />
    </div>
  </main>
</template>

<style scoped>
main {
  overflow: hidden;
  display: grid;
  place-content: center;
  place-items: center;
  margin-top: 110px;
}

.main-container {
  padding: 30px;
  height: calc(100vh - 180px);
}

@media screen and (max-width: 600px) {
  main {
    margin-top: 90px;
  }

  .main-container {
    padding: 16px;
    height: calc(100vh - 142px);
    overflow: auto;
  }
}
</style>
