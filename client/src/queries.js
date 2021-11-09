import { gql } from '@apollo/client';

export const GET_COINS = gql`
  query getCoins($limit: Int) {
    coins(limit: $limit) {
      id
      rank
      symbol
      name
      priceUsd
      changePercent24Hr
      volumeUsd24Hr
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
      priceUsd
      changePercent24Hr
      volumeUsd24Hr
    }
  }
`;
