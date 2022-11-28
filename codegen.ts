import type { CodegenConfig } from '@graphql-codegen/cli';

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

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    'http://localhost:8080/v1/graphql': {
      headers: {
        'x-hasura-admin-secret': 'chat',
      },
    },
  },
  generates: {
    ...generates,
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
