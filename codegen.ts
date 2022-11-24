import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'https://embedded-chat-app-12.hasura.app/v1/graphql': {
      headers: {
        'x-hasura-admin-secret':
          'Oeh1m5lyFvFTMBBelE1zpFBkhfqfxjpcmeWKzXUPPRHQ9qgn2DEDpYxhyLMJfMeJ',
      },
    },
  },
  generates: {
    'apps/dashboard/src/gql/generated/': {
      preset: 'client',
      plugins: [],
      documents: 'apps/dashboard/**/*.(ts|tsx)',
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
