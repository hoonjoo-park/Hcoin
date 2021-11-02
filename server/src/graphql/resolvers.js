import { getCoins, getCoin } from './db';

const resolvers = {
  Query: {
    coins: (_, {}) => getCoins(),
    coin: (_, { id }) => getCoin(id),
  },
};

export default resolvers;
