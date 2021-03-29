const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr.constructor === Array)) {
    throw new Error();
  }
  let arr2 = [];
  arr.forEach((element, i, ar) => {
      if (element != '--discard-next' && element != '--discard-prev' && element != '--double-next' && element != '--double-prev') {
        arr2.push(element);
      } else if (element == '--discard-next' && ar[i+1]) {
        arr2.push(element);
      } else if (element == '--discard-prev') {
        if (ar[i-2] != '--discard-next') {
          arr2.pop();
        }
      } else if (element == '--double-next' && ar[i+1]) {
        arr2.push(ar[i + 1]);
      } else if (element == '--double-prev') {
        if (ar[i-2] != '--discard-next' && ar[i-1]) {
          arr2.push(arr2[arr2.length - 1]);
        }
      }
    });
  arr2.forEach((element, i, ar) => {
    if (element == '--discard-next') {
      arr2.splice(i, 2);
    }
  });
  return arr2;
};
