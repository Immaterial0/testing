// call this in cmdline using: mocha test.js _____



var should = require( 'chai' ).should();
var basic = require( './'+process.argv[3] );

describe('basic', function() {
  it('should return 23 when passed 10', function() {
    basic(10).should.equal(23);
  })
  it('should return 78 when passed 20', function() {
    basic(20).should.equal(78);
  })
  it('should return 2318 when passed 100', function() {
    basic(100).should.equal(2318);
  })
  it('should return 23331668 when passed 10000', function() {
    basic(10000).should.equal(23331668);
  })
  it('should return 486804150 when passed 45678', function() {
    basic(45678).should.equal(486804150);
  })
})

