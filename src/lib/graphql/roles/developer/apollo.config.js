module.exports = {
  client: {
    includes: ['./**/*.ts'],
    service: {
      name: 'hasura',
      url: 'https://hasura.gitstart.dev/v1/graphql',
      // optional headers
      headers: {
        'x-hasura-admin-secret': 'helloworld',
        'x-hasura-role': 'developer',
      },
    },
  },
};
