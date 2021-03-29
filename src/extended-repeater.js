const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let str2 = String(str);
  let addit = String(options.addition).split();
  for (i=1; i < options.additionRepeatTimes; i++) {
    addit.push(options.additionSeparator);
    addit.push(options.addition);
  }
  let addit2 = addit.join('');
  let arr2 = [];
  arr2.push(str2);
  if (options.hasOwnProperty("addition")) {
    arr2.push(addit2);
  }
  let str3 = arr2.join('')
  for (i=1; i < options.repeatTimes; i++) {
    arr2.push(options.separator);
    arr2.push(str3);
  }

  return arr2.join('');
};
