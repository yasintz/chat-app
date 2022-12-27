import type { CodegenConfig } from '@graphql-codegen/cli';
const isProd = process.env.CODEGEN_TARGET === 'prod';
const generateConfig: CodegenConfig['generates'][string] = {
  preset: 'client',
  plugins: [],
  presetConfig: {
    gqlTagName: 'gql',
  },
};

const generatesByProject: Record<string, CodegenConfig['generates'][string]> = {
  dashboard: {
    ...generateConfig,
    documents: 'apps/dashboard/**/*.(ts|tsx)',
  },
  chat: {
    ...generateConfig,
    documents: 'apps/chat/**/*.(ts|tsx)',
  },
  manager: {
    // 'apps/manager/src/gql/': {
    ...generateConfig,
    documents: 'apps/manager/**/*.ts',
  },
};

const argvProjects = process.argv.slice(3).filter((i) => i !== 'codegen.ts');
const projects = argvProjects.length
  ? argvProjects
  : Object.keys(generatesByProject);

if (!argvProjects.length) {
  console.log(`
\t ------ ⚠️  WARNING ⚠️ ------

You are running gql generator for all apps. This can be slow.
You can run it for specific project. Try "pnpm gql-generate dashboard"
projects : ${projects.join(', ')}

`);
}

const generates = projects.reduce(
  (acc, project) => ({
    ...acc,
    [`apps/${project}/src/gql/`]: {
      ...generatesByProject[project],
    },
    [`apps/${project}/src/gql/index.ts`]: {
      plugins: [
        {
          add: {
            content: [
              'export * from "./gql"',
              'export * from "./fragment-masking"',
              'export * from "@gql/fragment-masking"',
            ],
          },
        },
      ],
    },
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
    './graphql.schema.ts': {
      plugins: ['typescript'],
    },
  },
};

export default config;
