import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: `type Coin{
        id: String!
        name: String!
        symbol: String!
        rank: Int!
        quotes: Quotes
    }
    type Quotes {
        USD: USD
      }
      type USD {
        price: Float!
      }
    type Query {
        coins: [Coin]!
        coin(id: String!): Coin
      }`,
  resolvers,
});

server.start(() => console.log('🥏 GraphQL 서버 실행 중..!!'));
