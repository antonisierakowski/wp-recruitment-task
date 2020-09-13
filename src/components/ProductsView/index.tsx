import React from "react";
import { useQuery } from "@apollo/client";
import { ProductTile } from "./ProductTile";
import { Starship, STARSHIP_STOCK, StarshipStock } from "./query";
import styles from './styles.module.css'

export const ProductsView: React.FC = () => {
  const { loading, error, data } = useQuery<StarshipStock>(STARSHIP_STOCK);

  return (
    <section className={styles.productsView}>
      {loading && <p>Loading placeholder</p>}
      {error && <p>Error placeholder</p>}
      {data && mapStarshipsToProductTiles(data.allStarships.starships)}
    </section>
  )
}

function mapStarshipsToProductTiles(data: Starship[]): React.ReactElement[] {
  return data.map(product => (
    <ProductTile
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.costInCredits ? addSeparators(product.costInCredits) : undefined}
      manufacturers={product.manufacturers}
      isInStock={product.costInCredits !== null && product.costInCredits !== undefined}
    />
  ))
}

function addSeparators(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
 }
