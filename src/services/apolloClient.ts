import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://swapi.apis.guru/',
  cache: new InMemoryCache(),
});
