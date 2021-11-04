import { gql } from '@apollo/client';

export const GET_COINS = gql`
  query getCoins {
    coins {
      id
      name
      symbol
      rank
    }
  }
`;

export const GET_COIN = gql`
  query getCoin($id: String!) {
    coin(id: $id) {
      id
      name
      symbol
      rank
    }
  }
`;
