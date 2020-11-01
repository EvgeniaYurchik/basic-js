const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(array) {
    
      let i = 1;
      while(array.length){
           i++;
           array = array.reduce( (level, el) => {
                if(Array.isArray(el)) level.push(...el);
                return level;
           }, []);
      }
      return i;
  
  }
};