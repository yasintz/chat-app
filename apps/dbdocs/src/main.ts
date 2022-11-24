import * as chokidar from 'chokidar';
import build from './build';
import { environment } from './environments/environment';

build();

if (!environment.production) {
  chokidar
    .watch([
      `./apps/dbdocs/**/*.dbml`,
      './apps/dbdocs/*.json',
      './apps/dbdocs/*.md',
    ])
    .on('change', build);
}
