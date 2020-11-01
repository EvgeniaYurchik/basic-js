const { FakeXMLHttpRequest } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (arr == null) {
    return false;
  } else if (!(arr.constructor === Array)) {
    return false;
  } else {
    let arr2 = arr.filter(function(a) {
      return typeof a == "string"
    });
    let arr3 = arr2.map(function(str) {
      return str.trim().toUpperCase();
    });
    let arr4 = arr3.sort();
    let arr5 = arr4.map(function(str) {
      return str.split('', 1);
    });
    return arr5.join('');
  }
};
