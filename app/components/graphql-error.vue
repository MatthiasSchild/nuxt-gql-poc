<script setup lang="ts">
import type { ApolloError } from '@apollo/client';

const props = defineProps<{
  error: ApolloError | null
}>()
</script>

<template>
  <div v-if="error">
    <h3>GraphQL Error</h3>
    <pre>{{ error.message }}</pre>
  </div>
</template>