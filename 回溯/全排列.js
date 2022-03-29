/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let used = new Array(nums.length).fill(false);
  return dfs(nums, [], [], used)
};

function dfs(nums, path, res, used) {
  if (path.length === nums.length) {
    res.push([...path]);
    return res;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i] === false) {
      path.push(nums[i]);
      used[i] = true;
      dfs(nums, path, res, used);
      path.pop();
      used[i] = false;
    }
  }
  return res;
}

console.log(permute([1, 2, 3]))
let arr = "532456"
console.log(typeof ("5" - "0"))
console.log(typeof (arr.charAt(0) - "0"))
console.log(typeof (-"0"))
console.log(typeof ("0" - "0"))
console.log(typeof (+"0"))
console.log(typeof ("0" + 10))
console.log(arr[100])
