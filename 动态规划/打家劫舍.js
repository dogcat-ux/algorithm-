/**
 * @param {number[]} nums
 * @return {number}
 */
//dp[i]=dp[i-2]+nums[i]
var rob = function (nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);
  let dp = [nums[0], nums[1]];
  let max = nums[0];
  let index = 0;
  for (let i = 2; i < len; i++) {
    dp[i] = (i - 1 === index) ? (nums[i - 2] + nums[i]) : (max + nums[i]);
    if (dp[i - 1] > max) {
      max = dp[i - 1];
      index = i-1;
    }
  }
  return Math.max(dp[dp.length - 1], dp[dp.length - 2])
};
// console.log(rob([2, 1, 1, 2]))
// console.log(rob([2,7,9,3,1]))
// console.log(rob([1,2,3,1]))
