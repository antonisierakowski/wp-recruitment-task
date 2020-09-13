import { gql } from '@apollo/client';

export interface StarshipStock {
  allStarships: {
    starships: Starship[];
  };
}

export interface Starship {
  costInCredits?: number;
  id: string;
  manufacturers: string[];
  name: string;
}

export const STARSHIP_STOCK = gql`
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
`;
