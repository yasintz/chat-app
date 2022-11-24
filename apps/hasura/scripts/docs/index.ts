import * as chokidar from 'chokidar';
import build from './build';
import { environment } from '../environments/environment';

export default function run() {
  build();

  console.log({ environment });
  if (!environment.production) {
    chokidar
      .watch([
        `./apps/hasura/docs/**/*.dbml`,
        './apps/hasura/docs/*.json',
        './apps/hasura/docs/*.md',
      ])
      .on('change', build);
  }
}
