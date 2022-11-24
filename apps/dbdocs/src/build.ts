import * as BuildCommand from 'dbdocs/src/commands/build';
import * as path from 'path';
import * as fs from 'fs';
import { environment } from './environments/environment';

const projectRoot = path.join(process.cwd(), 'apps/dbdocs');
const docSchemaFilePath = path.join(projectRoot, 'docs.json');
const docOutputFile = path.join(process.cwd(), 'dist/apps/dbdocs/main.dbml');

process.env.DBDOCS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQ3OSwidG9rZW4iOiIzZDVlMDljNWY3NWU3ZGI3ODZlZWMzNjM2N2M5YzQ2MCIsImlhdCI6MTY2OTIyODAwM30.-AMvgXFzY4qccb5fomD1GaYcJviyC7LB4k4T4zGxZPQ';

BuildCommand.prototype.parse = () => {
  return {
    flags: {},
    args: {
      filepath: docOutputFile,
    },
  };
};

const builder = new BuildCommand();

type DocType = {
  project: string;
  database_type: string;
  note: string;
  schema: string[];
};

function createOutput(doc: DocType) {
  if (!environment.production) {
    doc.project += 'Dev';
  }

  const noteOutput = fs
    .readFileSync(path.join(projectRoot, 'Note.md'), 'utf-8')
    .split('\n')
    .join('\n  ');

  const schemaOutput = doc.schema
    .map((file) =>
      fs.readFileSync(path.join(projectRoot, `docs/${file}.dbml`), 'utf-8')
    )
    .join('\n');

  return `
  Project ${doc.project} {
  database_type: '${doc.database_type}'
  Note: '''
  ${noteOutput}
  '''
  ${schemaOutput}
}
  `;
}

let lastPromise = Promise.resolve();
export default async function build() {
  await lastPromise;
  const file = createOutput(
    JSON.parse(fs.readFileSync(docSchemaFilePath, 'utf-8'))
  );

  fs.writeFileSync(docOutputFile, file);

  lastPromise = builder.run();
}
