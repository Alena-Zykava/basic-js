const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error('error');}
  let result = [];
  for (let i=0; i<arr.length; i++) {
    let elem = arr[i];    
    switch(elem) {
      case'--discard-prev':
        if (i-2>=0 && arr[i-2] === '--discard-next') {
          break;
        }
        if (i-1>=0) {
          result.pop();
        }
      break;
      case'--discard-next':
      if (i+1<=arr.length-1) {        
        i++;
      }
      break;
      case'--double-prev':
        if (i-2>=0 && arr[i-2] === '--discard-next') {
          break;
        }
        if (i-1 >= 0) {        
          result.push(result[result.length-1]);        
        }
      break;
      case'--double-next':
      if (i+1<=arr.length-1) {        
        result.push(arr[i+1]);
      }
      break;
      default:
        result.push(elem);
      break;
    }
  }
  return result;
};

