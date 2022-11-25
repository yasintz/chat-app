import type { CodegenConfig } from '@graphql-codegen/cli';

const generateConfig: CodegenConfig['generates'][string] = {
  preset: 'client',
  plugins: [],
  presetConfig: {
    gqlTagName: 'gql',
  },
};

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
    'apps/dashboard/src/gql/': {
      ...generateConfig,
      documents: 'apps/dashboard/**/*.(ts|tsx)',
    },
    'apps/chat/src/gql/': {
      ...generateConfig,
      documents: 'apps/chat/**/*.(ts|tsx)',
    },
    'apps/server/src/gql/': {
      ...generateConfig,
      documents: 'apps/server/**/*.ts',
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
