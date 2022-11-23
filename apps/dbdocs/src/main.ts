import * as chokidar from 'chokidar';
import build from './build';
import { environment } from './environments/environment';

build();

if (!environment.production) {
  chokidar
    .watch([
      `./apps/dbdocs/docs/**/*.dbml`,
      './apps/dbdocs/docs/*.json',
      './apps/dbdocs/docs/*.md',
    ])
    .on('change', build);
}
