const { gulp, yargs: y } = require('../singleton');

gulp.task('ssl:cert', () => {
  const gulpLog = require('fancy-log');
  const colors = require('ansi-colors');
  const sslutil = require('../lib/util/ssl');
  return sslutil.createCertAndKeys(y.argv.destination)
    .then((response) => {
      gulpLog(colors.green(response));
      return response;
    });
});
