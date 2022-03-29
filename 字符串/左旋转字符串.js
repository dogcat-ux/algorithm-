/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  return s.slice(n)+s.slice(0,n);
};
//旋转数组--》全部旋转==》分别旋转部分
// var reverseLeftWords = function(s, n) {
//   return s.slice(n)+s.slice(0,n);
// };
console.log(reverseLeftWords("abcdefg",2))
