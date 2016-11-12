function includes2(a,check) {
	var size = a.length;
	for(i=0;i<size;i++) if(a[i]==check) return true; 
	return false; 
}

module.exports = includes2;