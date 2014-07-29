require-walk
============

Recursively require Node.js modules and apply optional parameters


## Example uage

Example 1: ExpressJS/KoaJS routes with parameters

Instead of this:

    require('./routes/routes-users.js')(app);
    require('./routes/routes-default.js')(app);
    require('./routes/routes-auth.js')(app);

You can do:

    requireWalk('./routes')(app);

Example 2: MongooseJS models with no parameters

    requireWalk('./models')();

## Tests with code coverage report in `test/coverage`

git clone the full repo

`npm install`

`npm test`

## Linting

`./node_modules/jshint/bin/jshint index.js` 

`./node_modules/jshint/bin/jshint test/requireWalk.spec.js`
