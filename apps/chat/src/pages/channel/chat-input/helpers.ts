import { File as HasuraFile } from '@gql/schema';

export type FileType = Pick<
  HasuraFile,
  'id' | 'path' | 'service' | 'type' | 'name'
> & {
  isLoading?: boolean;
  isFailed?: boolean;
};
