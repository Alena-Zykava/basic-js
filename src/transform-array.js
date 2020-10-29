const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr&&arr.length > 0) {
    let result =[];
    for (let i = 0; i<arr.length; i++){
      if (arr[i] === '--discard-next') {
            if (i == arr.length - 1) {
              return false;
          } else {
            result = arr.splice( i, 2);
          }
      } else if (arr[i] === '--discard-prev'){
            if (i == 0) {
              return false;
          } else {
            result = arr.splice( i-1, 1);
          }
      } else if (arr[i] === '--double-next') {
            if (i == arr.length - 1) {
              return false;
          }  else {
            result = arr.splice(i+1, 0, arr[i+1]);
          }
      }

    }
  return result;
  }
  return false;
};

