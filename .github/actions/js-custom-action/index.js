const core = require('@actions/core');
try {
  const name = core.getInput('name');
  console.log(`Hello ${name}!, from a js custom action!`);
} catch (error) {
  core.setFailed(error.message);
}