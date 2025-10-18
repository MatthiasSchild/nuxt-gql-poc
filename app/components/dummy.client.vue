<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query {
  albums {
    data {
      title
    }
  }
}
`

const { result, loading, error } = useQuery(GET_USERS)
</script>

<template>
  <h2>Dummy</h2>
  <pre>{{ result }}</pre>
  <pre>{{ loading }}</pre>
  <pre>{{ error }}</pre>
</template>
