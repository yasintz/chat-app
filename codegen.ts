import type { CodegenConfig } from '@graphql-codegen/cli';
const isProd = process.env.CODEGEN_TARGET === 'prod';
const generateConfig: CodegenConfig['generates'][string] = {
  preset: 'client',
  plugins: [],
  presetConfig: {
    gqlTagName: 'gql',
  },
};

const generatesByProject: Record<string, CodegenConfig['generates']> = {
  dashboard: {
    'apps/dashboard/src/gql/': {
      ...generateConfig,
      documents: 'apps/dashboard/**/*.(ts|tsx)',
    },
  },
  chat: {
    'apps/server/src/gql/': {
      ...generateConfig,
      documents: 'apps/server/**/*.ts',
    },
  },
  server: {
    'apps/server/src/gql/': {
      ...generateConfig,
      documents: 'apps/server/**/*.ts',
    },
  },
};

const projects = process.argv.slice(3) || Object.keys(generatesByProject);

const generates = projects.reduce(
  (acc, project) => ({
    ...acc,
    ...generatesByProject[project],
  }),
  {}
);

const prodSchema = {
  'https://embedded-chat-app-12.hasura.app/v1/graphql': {
    headers: {
      'x-hasura-admin-secret':
        'Oeh1m5lyFvFTMBBelE1zpFBkhfqfxjpcmeWKzXUPPRHQ9qgn2DEDpYxhyLMJfMeJ',
    },
  },
};

const localSchema = {
  'http://localhost:8080/v1/graphql': {
    headers: {
      'x-hasura-admin-secret': 'chat',
    },
  },
};

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    ...(isProd ? prodSchema : localSchema),
  },
  generates: {
    ...generates,
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
