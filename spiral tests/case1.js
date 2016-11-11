function case7(size) {
	let x = [...Array(size+2)].map((y,k)=>Array(size).fill(0)).fill(1,size);
	let a = 0,b=0,c=0,x1=1,y1=0;
		while(c<size) { 
			while(x[b][a]<1&&!x[b+y1][a+x1]) {x [b][a]=1,a+=x1,b+=y1;} 
		a=a-x1-y1, b=b-y1+x1, c+=1; [y1,x1] = [x1,-y1]; }
	return x.slice(0,size);  }
	
	
	

module.exports = case7;
