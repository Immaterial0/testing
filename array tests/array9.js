function array9(size) {
	for (var g=Array(size),i=0;i<size;i++){ g[i]=Array(size);
		for (let j=0;j<size;j++)  g[i][j]=0; }
	return g  }
	
module.exports = array9;
