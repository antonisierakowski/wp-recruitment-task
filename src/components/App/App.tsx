import React from 'react';
import './App.css';
import { Header } from "../Header";
import { ProductsView } from "../ProductsView";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../services/apolloClient";

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <ProductsView />
      </div>
    </ApolloProvider>
  );
}

export default App;
