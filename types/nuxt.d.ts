import { ApolloClient } from '@apollo/client/core'

declare module '#app' {
  interface NuxtApp {
    $apollo: ApolloClient<any>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $apollo: ApolloClient<any>
  }
}