const sslCert = {
  command: 'ssl:cert',
  desc: 'Creates a SSL certificate along with private and public keys.',
  commandType: 'all',
  builder: yargs => yargs.options({
    d: {
      alias: 'destination',
      describe: 'Destination path where the files will be written',
      group: 'ssl:cert',
      requiresArg: true,
    },
  }),
};

module.exports = [sslCert];
