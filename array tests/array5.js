function array5(size) {
	let g = Array(size), i=0, y=Array(size).fill(0)
	for (;i<size;i++) g[i] = y.slice()
	return g  }
	
module.exports = array5;
