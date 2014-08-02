'use strict';

var should = require('chai').should();

var requireWalk = require('..');

describe('Require Walk', function () {

  it('requires modules and applies parameters', function (done) {

    requireWalk(__dirname + '/fixtures/one')();

    // Nothing returned, just assert true
    true.should.be.true;

    done();

  });

  it('requires modules and apply optional parameters', function (done) {

    var app = {};

    requireWalk(__dirname + '/fixtures/two')(app);

    should.exist(app.testKey1);
    app.testKey1.should.equal('testValue1');

    should.exist(app.testKey2);
    app.testKey2.should.equal('testValue2');

    done();

  });

  it('recursively requires modules', function (done) {

    requireWalk(__dirname + '/fixtures/three')();

    // Nothing returned, just assert true
    true.should.be.true;

    done();

  });

});
