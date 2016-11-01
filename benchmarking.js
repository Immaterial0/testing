// benchmarking.js, call using :node benchmarking.js ___ ____
var l1 = process.argv.length


var Benchmark = require( 'benchmark' );
var suite = new Benchmark.Suite;

var case1 = require( './'+process.argv[l1-2] );
var case2 = require( './'+process.argv[l1-1] );

// add tests
suite.add( 'case1', function() {
  case2(45671)
})
.add( 'case2', function() {
  case1(45671)
})
// add listeners
.on( 'cycle', function( event ) {
    console.log( String( event.target ));
})
.on( 'complete', function() {
    console.log( 'Fastest is ' + this.filter( 'fastest' ).map( 'name' ));
})
// run async
.run({ 'async': true });
