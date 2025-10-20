import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ProgrammingLanguage = {
  __typename?: 'ProgrammingLanguage';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  programmingLanguages: Array<ProgrammingLanguage>;
};

export type DummyQueryVariables = Exact<{ [key: string]: never; }>;


export type DummyQuery = { __typename?: 'Query', programmingLanguages: Array<{ __typename?: 'ProgrammingLanguage', id: string, name: string }> };


export const DummyDocument = gql`
    query Dummy {
  programmingLanguages {
    id
    name
  }
}
    `;

/**
 * __useDummyQuery__
 *
 * To run a query within a Vue component, call `useDummyQuery` and pass it any options that fit your needs.
 * When your component renders, `useDummyQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDummyQuery();
 */
export function useDummyQuery(options: VueApolloComposable.UseQueryOptions<DummyQuery, DummyQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<DummyQuery, DummyQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<DummyQuery, DummyQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<DummyQuery, DummyQueryVariables>(DummyDocument, {}, options);
}
export function useDummyLazyQuery(options: VueApolloComposable.UseQueryOptions<DummyQuery, DummyQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<DummyQuery, DummyQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<DummyQuery, DummyQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<DummyQuery, DummyQueryVariables>(DummyDocument, {}, options);
}
export type DummyQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<DummyQuery, DummyQueryVariables>;