/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  if (len < 4) return [];
  let res = [];
  // let map = new Map();
  // for (let i = 0; i < len; i++) {
  //   map.set(nums[i], i);
  // }
  //sum+x=target
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return res;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    for (let j = 0; j < len; j++) {
      while (l < r) {

      }
    }
    // while (l < r) {
    //   let sum = nums[i] + nums[l] + nums[r];
    //   for (let j = l + 1; j < r; j++) {
    //     if (nums[j] === target - sum) {
    //       res.push([nums[i], nums[l], nums[r], nums[j]]);
    //       while (l < r && nums[l] === nums[l + 1]) {
    //         l++;
    //       }
    //       while (l < r && nums[r] === nums[r - 1]) {
    //         r--;
    //       }
    //       l++;
    //       r--;
    //     } else if (nums[j] > target - sum) {
    //       break;
    //     }
    //   }
    // }
  }
  return res;
};
console.log(
    fourSum([1, 0, -1, 0, -2, 2], 0)
)
