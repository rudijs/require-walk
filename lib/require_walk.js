'use strict';

var fs = require('fs'),
  assert = require('assert-plus');

/**
 * Functional recursive node require
 *
 * Will recursively call 'require' on files optionally with arguments
 *
 * Example 1: recursive routes with arguments
 * var requireRoutes = requireWalk('./www/routes');
 * requireRoutes(config, app, passport);
 *
 * Example 2: recursive models with no arguments
 * var requireModels = requireWalk('/www/models');
 * requireModels();
 *
 * @param path
 * @returns {fn}
 *
 */
module.exports = function (path) {

  assert.string(path, 'path');

  if (!fs.existsSync(path)) {
    throw new Error('Invalid path: ' + path);
  }

  // TODO: input validation

  var fn = function () {

    // Capture initial arguments
    var args = arguments;

    function readdirSync (path) {

      fs.readdirSync(path).forEach(function (file) {

        var newPath = [path, file].join('/');

        var stat = fs.statSync(newPath);

        if (stat.isDirectory()) {

          // if a directory recursive read into it
          readdirSync(newPath);
        }
        else {

          // check for js or coffee file extention
          if (/(.*)\.(js$|coffee$)/.test(file) && !/spec/i.test(file)) {

            // require with arguments if there are arguments
            if (args.length) {
              require(newPath).apply(this, args);
            }

            // plain module require with no arguments
            else {
              require(newPath);
            }
          }
        }

      });
    }

    // Start recursive file read from initial path
    readdirSync(path);

  };

  return fn;

};
