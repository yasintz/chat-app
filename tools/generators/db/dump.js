const fs = require('fs');
const path = require('path');
const db_dump_exclude = require('../../../apps/hasura/datadump/db_dump_exclude.json');
const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://chatuser:chatpass@localhost:5432/chat',
});

const folder = 'apps/hasura/datadump/tables';
async function dumpDb() {
  const tables = await knex
    .select('table_name')
    .table('information_schema.tables')
    .where('table_schema', 'public')
    .andWhere('table_name', 'not in', [
      'raster_overviews',
      'raster_columns',
      'spatial_ref_sys',
      'geometry_columns',
      'geography_columns',
      ...db_dump_exclude,
    ])
    .then((r) => r.map((s) => s.table_name));

  tables.reverse();
  for (let index = 0; index < tables.length; index++) {
    const table = tables[index];

    const json = await knex.select().table(`public.${table}`).then();
    fs.writeFileSync(
      path.join(folder, `${table}.json`),
      JSON.stringify(
        json.map((s) => {
          Object.keys(s).forEach((key) => {
            s[key] =
              s[key] !== null &&
              !(s[key] instanceof Date) &&
              typeof s[key] === 'object'
                ? JSON.stringify(s[key])
                : s[key];
          });
          return s;
        }),
        null,
        2
      )
    );
  }
}

async function loadDb() {
  const chunkSize = 30;

  const files = fs.readdirSync(folder);

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    const data = JSON.parse(fs.readFileSync(path.join(folder, file), 'utf-8'));
    const table = file.replace('.json', '');
    await knex.batchInsert(table, data, chunkSize).then();
    console.log(`${data.length} row inserted to ${table}`);
  }
}

const fn = process.argv.includes('--load') ? loadDb : dumpDb;
fn().finally(() => {
  knex.destroy();
});
