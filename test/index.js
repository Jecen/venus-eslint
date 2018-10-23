const assert = require('assert');
const eslint = require('eslint');

const { CLIEngine } = eslint;
const cli = new CLIEngine();

const goodReport = cli.executeOnFiles([
  './**/good.js',
]);
console.log(`good file errorCount:${goodReport.errorCount}`)

goodReport.results.forEach((goodReportForOneFile) => {
  assert.equal(goodReportForOneFile.errorCount, 0, `${goodReportForOneFile.filePath} should have no error`);
});

const badReport = cli.executeOnFiles(['./**/bad.js']);
console.log(`bad file errorCount:${badReport.errorCount}`)

badReport.results.forEach((badReportForOneFile) => {
  assert(badReportForOneFile.errorCount > 0, `${badReportForOneFile.filePath} should have at least one error`);
});

console.log('Test passed!');