import React from 'react';
import styles from './styles.module.css';
import { Header } from "../Header";
import { ProductsView } from "../ProductsView";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../services/apolloClient";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext";

function App(): React.ReactElement {
  return (
    <ApolloProvider client={client}>
      <ShoppingCartProvider>
        <div className={styles.app}>
          <Header />
          <ProductsView />
        </div>
      </ShoppingCartProvider>
    </ApolloProvider>
  );
}

export default App;
