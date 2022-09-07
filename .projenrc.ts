import { cdk, javascript } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Zachariah Mully',
  authorAddress: 'zack.mully@zephyrai.bio',
  defaultReleaseBranch: 'main',
  name: 'scala-test',
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/zack.mully/scala-test.git',
  github: false,
  peerDeps: ['projen'],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
