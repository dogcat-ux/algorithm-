/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  return Array.from(s).map(value=>value===" "?"%20":value).join("");
};
