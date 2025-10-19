# Nuxt 4 + GraphQL + Proof-of-Concept

The goal is to build a setup, where the following technologies work together:

- **Nuxt 4** as meta framework
- **GraphQL** with Apollo
- **@vue/apollo-composable** to use hooks
- **@graphql-codegen/typescript-vue-apollo** to generate code from graphql files

I want to move all graphql logic to the client, so the SSR does not execute graphql queries.
This may results in loading states in the UI, but makes separation of Nuxt + Backend easier.
Also authentication with cookies are working.



## Learnings

**@nuxtjs/apollo**: This module is developed for Nuxt 2 and does not work correctly.
Therefore a manual setup using @apollo/client is necessary.

**nuxtjs-apollo**: This module is developed for Nuxt 3.
Same problem like `@nuxtjs/apollo`.

**GraphQL 15 and 16**: `@vue/apollo-composable` is currently only available for
`graphql@15`. Therefore I had to install `@apollo/client@3` and `graphql@15` to
use graphql in the version 15 in the system. As soon `@vue/apollo-composable` uses
v16, things can be upgraded.

**plugin**: To get apollo to work in the frontend, the file `app/plugins/apollo.client.ts`
has been created.


## Directory structure

- app: the frontend code of the application
    - components: basic components you can use over the page
    - islands: special components, which executes graphql and therefore are client only
    - plugins: there the apollo plugin is specified
    - types: there are the graphql response types defined (wip)
