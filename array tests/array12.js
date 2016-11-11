function array12(size) {
	var g=Array(size),s
	for (var i=0;i<size;i++){ g[i]=Array(size); s=g[i]
		for (var j=0;j<size;j++)  s[j]=0; }
	return g  }
	
module.exports = array12;

//defining s to [] or array seems to make it a bit slower
// putting the others vars in the first for loop definition doesn't seem to matter to much