const fs = require('fs');
const { importer } = require('@dbml/core');

const postgreSQL = fs
  .readFileSync('./apps/hasura/datadump/data.sql', 'utf-8')
  .replace(/(COMMENT ON|CREATE TRIGGER) (.*?);/g, '')
  .replace(/public.gen_random_uuid\(\)/g, 'gen_random_uuid')
  .replace(/CREATE FUNCTION public(.*\n)*?.*?END;\n\$\$;/g, '');

const dbml = importer.import(postgreSQL, 'postgres');

console.log(dbml);
