// Class to export those objects which are to be used as singleton objects in all the dependent pacakges
// This is done so that properties set anywhere are available across all pacakges at all dependency levels
module.exports = {
  yargs: require('yargs'),
  gulp: require('gulp'),
};
