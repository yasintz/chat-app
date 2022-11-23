import * as chokidar from 'chokidar';
import build from './build';

chokidar.watch(`./apps/dbdocs/docs/**/*.dbml`).on('change', build);
