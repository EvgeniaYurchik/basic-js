const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let n = 2 ** disksNumber - 1;
  let k = turnsSpeed / 3600;
  let b = Math.floor(n / k);

  return obj = {
    turns: n,
    seconds: b,
  };
};
