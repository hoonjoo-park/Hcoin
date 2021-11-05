import { getCoins, getCoin } from './db';

const resolvers = {
  Query: {
    coins: (_, { limit }) => getCoins(limit),
    coin: (_, { id }) => getCoin(id),
  },
};

export default resolvers;
