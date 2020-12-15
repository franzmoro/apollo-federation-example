const { ApolloServer } = require('apollo-server');
const { ApolloGateway, RemoteGraphQLDataSource } = require('@apollo/gateway');

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    const { userId } = context
    // Pass the user's id from the context to underlying services
    // as a header called `user-id`
    request.http.headers.set('userId', userId);
  }
}

const gateway = new ApolloGateway({
  // This entire `serviceList` is optional when running in managed federation
  // mode, using Apollo Graph Manager as the source of truth.  In production,
  // using a single source of truth to compose a schema is recommended and
  // prevents composition failures at runtime using schema validation using
  // real usage-based metrics.
  serviceList: [
    { name: 'organizations', url: 'http://localhost:4001/graphQL' },
    { name: 'products', url: 'http://localhost:4002/graphQL' },
    // List other services here
  ],

  buildService({ name, url }) {
    return new AuthenticatedDataSource({ url });
  },

  __exposeQueryPlanExperimental: true,
});


(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({
    // gateway,
    schema,
    executor,
    // Apollo Graph Manager (previously known as Apollo Engine)
    // When enabled and an `ENGINE_API_KEY` is set in the environment,
    // provides metrics, schema management and trace reporting.
    engine: false,

    // Subscriptions are unsupported but planned for a future Gateway version.
    subscriptions: false,

    context: ({ req }) => {
      // Get the user token from the headers
      const token = req.headers.authorization || '';
      // Try to retrieve a user with the token
      // const userId = getUserId(token);
      const userId = 'abc123';
      // Add the user ID to the context
      return { userId };
    },
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
