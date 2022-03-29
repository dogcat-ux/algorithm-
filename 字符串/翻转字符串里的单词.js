/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.trim().split(/\s+/g);
  let left = 0;
  let right = arr.length - 1;
  while (left<=right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join(" ");
};
console.log(reverseWords("  hello    world  "))
