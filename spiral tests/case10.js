var case10 = function(size) {
  var result = [];
  
  
  for(var i = 0; i < size; i++){
    result.push(new Array(size));
    for(var j = 0; j < size; j++){
      result[i][j] = 0;
    }
  }

  for(var offset = 0;offset < Math.ceil(size/2);offset++){
    var val = offset % 2 ? 0 : 1;
    for(var i = offset; i < size-offset; i++){
        result[result.length-1-offset][i] = val;
        result[i][result.length-1-offset] = val;
        if(i!=offset+1){
          result[i][offset] = val;
        }else{
          result[i][offset] = val ? 0 : 1;
        }
        result[offset][i] = val;
    }
    if((offset+1) * 2 > size){
      result[offset][offset] = val;
    }
  }
    
  return result;
}
module.exports = case10;
 
 