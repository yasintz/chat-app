import * as path from 'path';
import * as fs from 'fs';
import { environment } from '../environments/environment';
import deploy, { ProjectType } from './deploy';
import { getDatabaseSchema } from './db';

const projectRoot = path.join(process.cwd(), 'apps/hasura/docs');
const docSchemaFilePath = path.join(projectRoot, 'docs.json');

type DocType = {
  project: string;
  note: string;
  schema: string[];
};

function createOutput(doc: DocType): ProjectType {
  if (!environment.production) {
    doc.project += 'Dev';
  }

  const note = fs.readFileSync(path.join(projectRoot, 'Note.md'), 'utf-8');

  const schema = doc.schema
    .map((file) =>
      fs.readFileSync(path.join(projectRoot, `${file}.dbml`), 'utf-8')
    )
    .join('\n');

  return {
    project: doc.project,
    note,
    schema,
  };
}

export default async function build() {
  const doc = createOutput(
    JSON.parse(fs.readFileSync(docSchemaFilePath, 'utf-8'))
  );

  await deploy(doc);
  if (1 > 0) {
    await deploy({
      project: doc.project + 'Database',
      note: doc.note,
      schema: getDatabaseSchema(),
    });
  }
}
