import * as path from 'path';
import * as cp from 'child_process';
import { importer } from '@dbml/core';

export function getDatabaseSchema() {
  const sql = cp
    .execSync(
      'sh ' + path.join(process.cwd(), 'tools/generators/db/dump-scheme.sh')
    )
    .toString();

  const postgreSQL = sql
    .replace(/(COMMENT ON|CREATE (TRIGGER|EXTENSION)) (.*)\n/g, '\n')
    .replace(/public.gen_random_uuid\(\)/g, 'gen_random_uuid')
    .replace(/CREATE FUNCTION (.*\n)*?.*?\$\$;/g, '')
    .replace(/CREATE TEXT SEARCH (.*\n)*?.*?\);/g, '')
    .replace(/::(.*) /g, ' ')
    .replace(/CREATE INDEX (.*)/g, '')
    .replace(/,\n(.*?)CONSTRAINT(.*)\n\);/g, '\n);')
    .replace(/,\n(.*?)CONSTRAINT(.*)\n/g, ',\n');

  return importer.import(postgreSQL, 'postgres');
}
