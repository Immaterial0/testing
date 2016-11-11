// benchmarking.js, call using :node benchmarking.js ___ ___ ____ [-t _____]
// Any number of arguments can be entered, -t flag at 2nd to last position allows test case to be input at end. 


// arguments list length values and other vars to be used.
var l1 = process.argv.length
var l2 = l1 - 2;
var value,cases=Array(l2),i=0;

// set up basic testing suite
var Benchmark = require( 'benchmark' );
var suite = new Benchmark.Suite;


//determine if test case has been input
if(process.argv[l2]==='-t2') {
	value = +process.argv[l2+1];
	l2-=2;
}
else value = 5; // default test case value

//add each test case to benchmark to the cases array from the arguments array. 
for (;i<l2;i++) {
	cases[i] = require( './'+process.argv[i+2]);
}

// add each case from cases array to the suite 

cases.forEach((x,i)=>suite.add( `${process.argv[i+2]}`, function() {
		x(value)
	}) )


suite.on('cycle',function( event ) {
    console.log(String(event.target));
})
.on( 'complete', function() {
    console.log( 'Fastest is ' + this.filter( 'fastest' ).map( 'name' ));
})
// run async
.run({ 'async': true });
