function array11(size) {
	var g=Array(size)
	for (var i=0;i<size;i++){ g[i]=Array(size);
		for (var j=0;j<size;j++)  g[i][j]=0; }
	return g  }
	
module.exports = array11;
