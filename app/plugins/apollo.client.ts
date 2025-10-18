import { defineNuxtPlugin } from '#app'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

export default defineNuxtPlugin((nuxtApp) => {
  const graphqlEndpoint = useRuntimeConfig().public.graphqlEndpoint;
  console.log('GRAPHQL_ENDPOINT', graphqlEndpoint);

  const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: graphqlEndpoint }),
    cache: new InMemoryCache(),
  })

  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
  nuxtApp.provide('apollo', apolloClient)
})
