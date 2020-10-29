const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members&&members.length > 0) {
    let result ='';
  
  for (let i=0; i<members.length ; i++) {
    
    if (typeof members[i] == "string") {
      let letter = members[i].trim()[0];
     result += letter;
    }
  }
  return result.toLocaleUpperCase().split('').sort().join('');
  } else {
    return false;
  }
  
};
