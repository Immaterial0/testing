function case11(size) {
	//Initalize starting values/var. position(x,y), direction(dx,dy)
	var s,x=size-1,y=0,dx=1,dy=0,k,l=x,j,i=0,g=Array(size)
	//Create grid(g) of zeros
	for(;i<size;i++) {
		g[i]=Array(size); s=g[i]
		for(j=0;j<size;j++) s[j]=0
		}
	//Fill in first row	
	for(s=g[0],i=0;i<size;i++) s[i] = 1
	//Fill in the rest of the lines in spiral shape altering heading after each line
	//Shorten new line length by 2 every 2 turns
	for(i=0;i<l;i++) { 
		dx=dx+dy
		dy=dx-dy
		dx=dy-dx
		k=l-2*(~~(i/2))
		for(j=0;j<k;j++) x+=dx,y+=dy,g[y][x]=1 
		} 
	return g  
	}

 


module.exports = case11;
 
 