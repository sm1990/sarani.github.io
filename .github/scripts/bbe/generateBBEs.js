const shell = require("shelljs");

shell.cd(".github/scripts/bbe");
shell.exec("npm i");
shell.cd("../../..");
shell.exec(
  "git clone https://github.com/ballerina-platform/ballerina-distribution.git"
);
shell.cp("-r", "ballerina-distribution/examples", ".");
shell.rm("-rf", "swan-lake/by-example/*");
shell.cp("examples/index.json", "swan-lake/by-example/all-bbes.json");
shell.exec(
  "node .github/scripts/bbe/markdownConverter.js examples swan-lake/by-example"
);
shell.exec("npx prettier -w swan-lake/by-example");
shell.rm("-rf", [
  "ballerina-distribution",
  "examples",
  ".github/scripts/bbe/node_modules",
  ".github/scripts/bbe/package-lock.json",
]);
