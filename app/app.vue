<script setup lang="ts">
import DummyClient from './components/dummy.client.vue';
</script>

<template>
  <h1>Nuxt GraphQL POC</h1>
  <ClientOnly>
    <DummyClient />
  </ClientOnly>
</template>