require-walk
============

Recursively require Node.js modules and apply optional parameters

[![Build Status](https://travis-ci.org/rudijs/require-walk.svg?branch=master)](https://travis-ci.org/rudijs/require-walk)  
[![NPM version](https://badge.fury.io/js/require-walk.svg)](http://badge.fury.io/js/require-walk)  
[![Dependency Status](https://gemnasium.com/rudijs/require-walk.svg)](https://gemnasium.com/rudijs/require-walk)
[![Coverage Status](https://coveralls.io/repos/rudijs/require-walk/badge.png?branch=master)](https://coveralls.io/r/rudijs/require-walk?branch=master)

## Example uage

Example 1: ExpressJS/KoaJS routes with parameters

Instead of this:

    require('./routes/routes-users.js')(app);
    require('./routes/routes-default.js')(app);
    require('./routes/routes-auth.js')(app);

You can do:

    var requireWalk = require('require-walk');

    requireWalk(__dirname + '/routes')(app);

Example 2: MongooseJS models with no parameters

    var requireWalk = require('require-walk');

    requireWalk(__dirname + '/models')();

## Tests with code coverage report in `test/coverage`

git clone the full repo

`npm install`

`npm test`

## Linting

`./node_modules/jshint/bin/jshint lib/*.js` 

`./node_modules/jshint/bin/jshint test/*.spec.js`
