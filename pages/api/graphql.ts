import { ApolloServer } from '@apollo/server';
import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';
import { NextApiRequest, NextApiResponse } from 'next';

import { startServerAndCreateNextHandler } from '@as-integrations/next';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res): Promise<IContext> => {
    return {
      test: '222',
    };
  },
});
