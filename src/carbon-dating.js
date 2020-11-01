const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == 'string') {
    let n = +sampleActivity;
    if (n <= 0 || n > 15) {
      return false;
    } else if (n) {
      return t = Math.ceil(n / 15 / 5730);
    } else {
      return false;
    }
  } else {
    return false;
  }  
};
