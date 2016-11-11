function case8(size) {
	var x=0,y=0,dx=1,dy=0,j=0,i=0,g=Array(size)
	for (;i<size;i++){ {g[i]=Array(size);
		for (j=0;j<size;j++) g[i][j]=0;} }
	i=0;g.push(1,1)
	while(i<size) { 
		while(g[y][x]<1&&!g[y+dy][x+dx]) g[y][x]=1,x+=dx,y+=dy; 
		x-=dx+dy,y-=dy-dx,i+=1;[dy,dx]=[dx,-dy]; }
	return g.slice(0,size);  }




module.exports = case8;
 
 