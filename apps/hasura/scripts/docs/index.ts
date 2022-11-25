import * as chokidar from 'chokidar';
import build from './build';
import * as _ from 'lodash';
import { environment } from '../environments/environment';

export default function run() {
  build();

  if (!environment.production) {
    chokidar
      .watch([
        './apps/hasura/**/*',
      ])
      .on('change', _.debounce(build, 100));
  }
}
