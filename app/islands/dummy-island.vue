<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import type { AlbumsResponse } from '~/types/graphql';

const GET_USERS = gql`
  query {
  albums {
    data {
      title
    }
  }
}
`

const { result, loading, error } = useQuery<AlbumsResponse>(GET_USERS)
</script>

<template>
  <h2>Dummy</h2>

  <LoadingIndicator v-if="loading" />
  <GraphqlError :error="error" />
  <AlbumList v-if="result" :albums="result.albums.data" />
</template>
