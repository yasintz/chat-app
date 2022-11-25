import type { IGraphQLConfig } from 'graphql-config';

const config: IGraphQLConfig = {
  schema: './graphql.schema.json',
  documents: 'apps/**/*.(ts|tsx)',
};

export default config;
