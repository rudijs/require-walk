require-walk
============

Recursively require Node.js modules and apply optional parameters


## Examples

Example 1: ExpressJS/KoaJS routes with parameters

var requireRoutes = requireWalk('./routes');
requireRoutes(app);

Example 2: MongooseJS models with no parameters

var requireModels = requireWalk('/models');
requireModels();

## Tests with code coverage report in `test/coverage`

git clone the full repo

`npm install`

`npm test`

## Linting

`./node_modules/jshint/bin/jshint index.js` 

`./node_modules/jshint/bin/jshint test/requireWalk.spec.js`
