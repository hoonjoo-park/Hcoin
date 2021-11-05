import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: `type Coin {
    id: String!
    rank: String!
    symbol: String!
    name: String!
    priceUsd: String
    changePercent24Hr: String
    volumeUsd24Hr: String
  }
  type Query {
    coins(limit: Int): [Coin]!
    coin(id: String!): Coin!
  }`,
  resolvers,
});

server.start(() => console.log('🥏 GraphQL 서버 실행 중..!!'));
