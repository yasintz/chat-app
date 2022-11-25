import { Injectable } from '@nestjs/common';
import { gql, gqlRequest } from '../gql';

const appListQuery = gql(`
  query AppList {
    app {
      id
    }
  }
`);

@Injectable()
export class AppService {
  async getData() {
    return gqlRequest(appListQuery);
  }
}
