<script setup lang="ts">
import DummyIsland from './islands/dummy-island.vue';
</script>

<template>
  <h1>Nuxt GraphQL POC</h1>
  <ClientOnly>
    <DummyIsland />
  </ClientOnly>
</template>
