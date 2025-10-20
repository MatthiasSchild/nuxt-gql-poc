<script setup lang="ts">
import { useDummyQuery } from '~~/types/graphql';

const { result, loading, error } = useDummyQuery()
</script>

<template>
  <h2>Dummy</h2>

  <LoadingIndicator v-if="loading" />
  <GraphqlError :error="error" />
  <ProgrammingLanguageList v-if="result" :languages="result.programmingLanguages" />
</template>
