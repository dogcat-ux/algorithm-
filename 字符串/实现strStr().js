/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//indexof
var strStr = function (haystack, needle) {
  if (haystack===needle)return 0;
  let j = 0;
  let len1 = haystack.length;
  let len2 = needle.length;
  while (j < len1) {
    let i = 0;
    while (i < len2 && haystack[j + i] === needle[i]) {
      i++;
    }
    if (i === len2) return j;
    j++;
  }
  return -1;
};
console.log(strStr("hello","ll"))
console.log(strStr("aaaaa","bba"))
