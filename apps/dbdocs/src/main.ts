import * as chokidar from 'chokidar';
import build from './build';
import { environment } from './environments/environment';

if (environment.production) {
  build();
} else {
  chokidar.watch(`./apps/dbdocs/docs/**/*.dbml`).on('change', build);
}
