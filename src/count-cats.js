const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let dvor = matrix.flat(Infinity);
  
  let j = 0;
  for (let i=0; i< dvor.length ; i++ ) {      
    if (dvor[i] == "^^"){
      j = j + 1;
    };
  };

return j;
};
