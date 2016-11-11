function case7(size) {
	for (var g=Array(size),i=0;i<size;i++) g[i]=Array(size).fill(0)
	let x = 0,y=0,dx=1,dy=0;i=0;g.push(1,1);
	while(i<size) { 
		while(g[y][x]<1&&!g[y+dy][x+dx]) g[y][x]=1,x+=dx,y+=dy; 
		x-=dx+dy,y-=dy-dx,i+=1;[dy,dx]=[dx,-dy]; }
	return g.slice(0,size);  }
	
	
	

module.exports = case7;
