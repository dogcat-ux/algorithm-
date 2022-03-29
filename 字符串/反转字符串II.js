/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (str, k) {
  let s = Array.from(str);
  let len = s.length;
  let left = 0;
  let right = (k - 1) >= len ? len - 1 : k - 1;
  while (left < right && right < len) {
    let l = left;
    let r = right;
    while (l < r) {
      [s[l], s[r]] = [s[r], s[l]];
      l++;
      r--;
    }
    left += 2*k;
    right = (2*k + right) >= len ? len - 1 : 2*k + right;
  }
  return s.join("");
};
// console.log(reverseStr("abcdefg", 2));
// console.log(reverseStr("bacd", 2));
