/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let temp = num;
  let sum = 0;
  while (sum >= 10 || sum === 0) {
    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }
    if (sum === 0) break;
    if (sum < 10 && sum > 0) break;
    temp = sum;
    sum = 0;
  }
  return sum;
};
console.log(addDigits(38));
