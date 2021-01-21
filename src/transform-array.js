module.exports = function transform(arr) {
  if (arr.length < 1) return [];
  if (!Array.isArray(arr)) throw new Error('not an array');
  let NewArr = [];       

  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] == 'string'){
      switch(arr[i]){
        case '--discard-next': 
        if (i == arr.length - 1) break;
        i++; break;
        case '--discard-prev': 
        if (i == 0) break;
        if (arr[i - 2] != '--discard-next'){
          NewArr.pop(); 
        }break;
        case '--double-next': 
        if (i == arr.length - 1) break;
        NewArr.push(arr[i+1]); break;
        case '--double-prev': 
        if (i == 0) break;
        if (arr[i - 2] != '--discard-next'){
          NewArr.push(arr[i-1]); 
        }break;
        default: NewArr.push(arr[i]); break;
      }
    } else NewArr.push(arr[i]);
  }
  return NewArr;  

};
