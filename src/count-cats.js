const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let arr2 = [];
  arr.forEach((item) => {
    item.forEach((i) => {
      if (i == '^^') {
        arr2.push('1');
      }
    })
  })
  return (arr2.length);
};