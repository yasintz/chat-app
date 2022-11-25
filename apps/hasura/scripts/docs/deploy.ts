import * as BuildCommand from 'dbdocs/src/commands/build';
import * as path from 'path';
import * as fs from 'fs';

process.env.DBDOCS_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQ3OSwidG9rZW4iOiIzZDVlMDljNWY3NWU3ZGI3ODZlZWMzNjM2N2M5YzQ2MCIsImlhdCI6MTY2OTIyODAwM30.-AMvgXFzY4qccb5fomD1GaYcJviyC7LB4k4T4zGxZPQ';

const builder = new BuildCommand();

export type ProjectType = {
  project: string;
  note: string;
  schema: string;
};

function deploy(project: ProjectType) {
  const docOutputFile = path.join(
    process.cwd(),
    `dist/apps/hasura/${project.project}.dbml`
  );

  BuildCommand.prototype.parse = () => {
    return {
      flags: {},
      args: {
        filepath: docOutputFile,
      },
    };
  };

  const noteOutput = project.note.split('\n').join('\n  ');

  const file = `
Project ${project.project} {
database_type: 'PostgreSQL'
Note: '''
${noteOutput}
'''
}
${project.schema}
`;

  fs.writeFileSync(docOutputFile, file);

  return builder.run();
}

let lastPromise = Promise.resolve();

const deployFn = async function (project: ProjectType) {
  await lastPromise;
  lastPromise = deploy(project);
};

export default deployFn;
