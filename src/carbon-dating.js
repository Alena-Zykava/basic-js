const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; //начальную активность из идентичности изотопа
const HALF_LIFE_PERIOD= 5730; //Период полураспада

//формула t= (ln(начальную активность из идентичности изотопа/конечную активность))/(0,693*Период полураспада)
module.exports = function dateSample(sampleActivity) {
  
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || isNaN(parseFloat(sampleActivity)) || typeof sampleActivity !== 'string'){
    return false;;
  } else if ( typeof sampleActivity == 'string') {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0,693*HALF_LIFE_PERIOD));    
  } 
};
