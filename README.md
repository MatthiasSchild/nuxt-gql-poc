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

**plugin**: To get apollo to work in the frontend, the file `app/plugins/apollo.client.ts`
has been created.


## Directory structure

- app: the frontend code of the application
    - components: basic components you can use over the page
    - islands: special components, which executes graphql and therefore are client only
    - plugins: there the apollo plugin is specified
- graphql: the graphql operations for the island components



## GraphQL Endpoint

For development purpose, I created a minimalistic GraphQL server in Rust:

- [dummyql](https://github.com/MatthiasSchild/dummyql)



## TODO

- [x] GraphQL requests on SSR
- [ ] Fix hydration mismatch error
- [ ] Different endpoints for browser and SSR
- [ ] Check if cookie is passed through SSR
