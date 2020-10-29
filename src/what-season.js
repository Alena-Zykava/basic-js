const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
   if(!date) {
	 	return 'Unable to determine the time of year!';
	 } else if(date.hasOwnProperty('toString')) {
	 	throw new Error;
   };
   let Month = date.getMonth() + 1;
   if (Month <= 2 || Month == 12) {
     return 'winter';
   } else if (Month >= 3 && Month <= 5) {
     return 'spring';
   }else if (Month >= 6 && Month <= 8) {
     return 'summer';
   } else if (Month >= 9 && Month <= 11) {
     return 'autumn';
   };
 
};
