import * as BuildCommand from 'dbdocs/src/commands/build';
import * as path from 'path';

const appFile = path.join(process.cwd(), 'apps/dbdocs/docs/app.dbml');

BuildCommand.prototype.parse = () => {
  return {
    flags: {},
    args: {
      filepath: appFile,
    },
  };
};

const builder = new BuildCommand();

let lastPromise = Promise.resolve();

export default async function build() {
  await lastPromise;
  lastPromise = builder.run();
}
