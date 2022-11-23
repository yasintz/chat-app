import * as BuildCommand from 'dbdocs/src/commands/build';
import * as path from 'path';
import * as fs from 'fs';
import { environment } from './environments/environment';

const appFile = path.join(process.cwd(), 'apps/dbdocs/docs/app.dbml');
const docOutputFile = path.join(process.cwd(), 'dist/apps/dbdocs/app.dbml');

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

function parseFile(file: string) {
  let fileContent = file;
  if (!environment.production) {
    fileContent = fileContent.replace(/^Project (.*?) {/g, 'Project $1Dev {');
  }

  return fileContent;
}

let lastPromise = Promise.resolve();
export default async function build() {
  await lastPromise;
  const file = parseFile(fs.readFileSync(appFile, 'utf-8'));

  fs.writeFileSync(docOutputFile, file);

  lastPromise = builder.run();
}
