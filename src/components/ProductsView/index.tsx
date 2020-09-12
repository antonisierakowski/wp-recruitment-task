import React from "react";
import { useQuery } from "@apollo/client";
import { ProductTile } from "./ProductTile";
import { Starship, STARSHIP_STOCK, StarshipStock } from "./query";

export const ProductsView: React.FC = () => {
  const { loading, error, data } = useQuery<StarshipStock>(STARSHIP_STOCK);

  return (
    <div>
      {loading && <p>Loading placeholder</p>}
      {error && <p>Error placeholder</p>}
      {data && mapStarshipsToProductTiles(data.allStarships.starships)}
    </div>
  )
}

function mapStarshipsToProductTiles(data: Starship[]): React.ReactElement[] {
  return data.map(product => (
    <ProductTile
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.costInCredits?.toString()}
      manufacturers={product.manufacturers}
      isInStock={product.costInCredits !== null && product.costInCredits !== undefined}
    />
  ))
}
