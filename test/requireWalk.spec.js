'use strict';

var should = require('chai').should();

var requireWalk = require('..');

describe('Require Walk', function () {

  it('requires modules and applies parameters', function (done) {

    var requireFiles = requireWalk('./test/fixtures/one');
    requireFiles();

    // Nothing returned, just assert true
    true.should.be.true;

    done();

  });

  it('requires modules and apply optional parameters', function (done) {

    var app = {};

    var requireFiles = requireWalk('./test/fixtures/two');
    requireFiles(app);

    // Nothing returned, just assert true
    should.exist(app.testKey);
    app.testKey.should.equal('testValue');

    done();

  });

  it('recursively requires modules', function (done) {

    var requireFiles = requireWalk('./test/fixtures/three');
    requireFiles();

    // Nothing returned, just assert true
    true.should.be.true;

    done();

  });

});
