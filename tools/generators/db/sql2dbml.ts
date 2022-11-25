const fs = require('fs');
const { importer } = require('@dbml/core');

const postgreSQL = fs
  .readFileSync('./apps/hasura/datadump/data.sql', 'utf-8')
  .replace(/(COMMENT ON|CREATE TRIGGER) (.*)\n/g, '\n')
  .replace(/public.gen_random_uuid\(\)/g, 'gen_random_uuid')
  .replace(/CREATE FUNCTION (.*\n)*?.*?\$\$;/g, '')
  .replace(/CREATE TEXT SEARCH (.*\n)*?.*?\);/g, '')
  .replace(/::(.*) /g, ' ')
  .replace(/CREATE INDEX (.*)/g, '')
  .replace(/,\n(.*?)CONSTRAINT(.*)\n\);/g, '\n);')
  .replace(/,\n(.*?)CONSTRAINT(.*)\n/g, ',\n');

// fs.writeFileSync('./apps/hasura/datadump/datanew.sql', postgreSQL);

const dbml = importer.import(postgreSQL, 'postgres');

console.log(dbml);
