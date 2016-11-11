function case6(size) {
	
	
  let x = [...Array(size+2)].map((y,k)=>new Int16Array(size)).fill(1,size);
  (function spiral(a=0,b=0,c=1,x1=1,y1=0) {
      while(x[b][a]<1&&!x[b+y1][a+x1]) x[b][a]=1,a+=x1,b+=y1; 
      if(c<size) spiral(a-x1-y1,b-y1+x1,c+1,-y1,x1) })() 
  return x.slice(0,size);  }

module.exports = case6;
 
 
 // fix this at possible some point, trying to do it as a 1d array. 
 function spiralize(size) {
  let x = Array(size*size+3).fill(0)
  (function spiral(a=0,b=0,c=1,x1=1,y1=0) {
      while(x[a+b*10]<1&&!x[a+x1+(b+y1)*10]) x[a+b*10]=1,a+=x1,b+=y1; 
      if(c<size) spiral(a-x1-y1,b-y1+x1,c+1,-y1,x1) })() 
  return x  }

let y = spiralize(5);
document.write(y,'<br>')