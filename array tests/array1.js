function array1(size) {
	let g = Array.from({length:size},(y,k)=>Array(size).fill(0));
	return g  }
	
module.exports = array1;
