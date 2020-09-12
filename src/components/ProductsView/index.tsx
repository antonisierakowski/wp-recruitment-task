import React from "react";
import { gql, useQuery } from "@apollo/client";

export interface StarshipStock {
  allStarships: {
    starships: Starship[],
  },
}

export interface Starship {
  costInCredits: number,
  id: string,
  manufacturers: string[],
  name: string,
}

const STARSHIP_STOCK = gql`
  query {
    allStarships {
      starships {
        name
        manufacturers
        costInCredits
        id
      }
    }
  }
`

export const ProductsView: React.FC = () => {
  const { loading, error, data } = useQuery<StarshipStock>(STARSHIP_STOCK);

  if (loading) {
    return (
      <p>Loading placeholder</p>
    )
  }

  if (error) {
    return (
      <p>Error placeholder</p>
    )
  }

  return (
    <p>products view placeholder</p>
  )
}
