function case12(size) {
	var s,x=size-1,y=0,dx=1,dy=0,k,l=x,j,i=0,g=Array(size)
	for(;i<size;i++) {
		g[i]=Array(size); 
		s=g[i]
		for(j=0;j<size;j++) 
			s[j]=0
		}
	for(s=g[0],i=0;i<size;i++) 
		s[i]=1
	for(i=0;i<l;i++) { 
		dx=dx+dy
		dy=dx-dy
		dx=dy-dx
		k=l-2*(~~(i/2))
		for(j=0;j<k;j++) 
			x+=dx
			y+=dy
			g[y][x]=1 
		} 
	return g  
	}

 


module.exports = case12;
 
 