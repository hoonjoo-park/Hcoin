import { getCoins, getCoin, getMarkets } from './db';

const resolvers = {
  Query: {
    coins: (_, { limit }) => getCoins(limit),
    coin: (_, { id }) => getCoin(id),
    markets: () => getMarkets(),
  },
};

export default resolvers;
