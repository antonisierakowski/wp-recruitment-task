import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_SW_API_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
